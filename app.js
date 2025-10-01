/* =========================================================================
   Anmol Unified Reader
   - Frontend: Advanced reading UI & preferences (from File 1)
   - Backend: Firebase Firestore routing, persistence (from File 2)
   -------------------------------------------------------------------------
   Usage:
   1) Include Firebase v9 modular SDK <script type="module"> in HTML.
   2) Include this file after Firebase scripts.
   3) Ensure hash routes like #/novel/{novelId}/chapter/{chapterId}.
   4) Provide minimal HTML or let buildUI() inject the shell.
   ========================================================================= */

import {
  initializeApp as fbInit
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAnalytics as fbAnalytics
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import {
  getFirestore, doc, getDoc, collection, query, where,
  getDocs, updateDoc, increment, setDoc, onSnapshot
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

/* =========================== Utility Helpers =========================== */
const qs  = (sel, el = document) => el.querySelector(sel);
const qsa = (sel, el = document) => [...el.querySelectorAll(sel)];
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

/* ========================== Unified Reader App ========================= */
class UnifiedAnmolReader {
  constructor(config) {
    // Firebase
    this.fbApp = fbInit(config.firebaseConfig);
    this.db    = getFirestore(this.fbApp);
    this.analy = fbAnalytics(this.fbApp);

    // DOM shell
    this.root   = qs("#reader") || this.buildUI();
    this.toolbar= qs("#reader-toolbar") || this.buildToolbar();
    this.content= qs(".reader-content", this.root);
    this.metaEl = qs(".reader-meta", this.root);
    this.tocEl  = qs(".reader-toc", this.root);

    // Local state (frontend-rich)
    this.state = {
      theme: localStorage.getItem("an_theme") || "dark",
      fontFamily: localStorage.getItem("an_ff") || "serif",
      fontSize: parseInt(localStorage.getItem("an_fs") || "18", 10),
      lineHeight: parseFloat(localStorage.getItem("an_lh") || "1.8"),
      width: parseInt(localStorage.getItem("an_width") || "720", 10),
      ttsOn: false,
      highlightColor: localStorage.getItem("an_hl") || "#fff2a8",
      progress: 0,
      isBookmarked: false
    };

    this.current = {
      novelId: null,
      chapterId: null,
      chapterDoc: null,
      adjacent: { prev: null, next: null }
    };

    // TTS
    this.utterance = null;

    // Wire-up
    this.applyPreferences();
    this.bindToolbar();
    this.bindInteractions();

    // Routing
    window.addEventListener("hashchange", () => this.route());
    this.route();
  }

  /* ======================= UI Construction ======================== */
  buildUI() {
    const wrap = document.createElement("div");
    wrap.id = "reader";
    wrap.innerHTML = `
      <div class="reader-container">
        <aside class="reader-sidebar">
          <h3>Contents</h3>
          <div class="reader-toc"></div>
        </aside>
        <main class="reader-main" style="max-width: 720px;">
          <header class="reader-meta"></header>
          <article class="reader-content"></article>
        </main>
      </div>
    `;
    document.body.prepend(wrap);
    return wrap;
  }

  buildToolbar() {
    const tb = document.createElement("div");
    tb.id = "reader-toolbar";
    tb.innerHTML = `
      <div class="left">
        <button data-act="prev">Prev</button>
        <button data-act="next">Next</button>
      </div>
      <div class="center">
        <button data-act="tts">TTS</button>
        <button data-act="focus">Focus</button>
        <button data-act="bookmark">Bookmark</button>
        <button data-act="share">Share</button>
      </div>
      <div class="right">
        <select data-act="theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <select data-act="font">
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans-Serif</option>
        </select>
        <input type="range" data-act="fontSize" min="14" max="28" value="18" />
        <input type="range" data-act="lineHeight" min="1.2" max="2.2" step="0.05" value="1.8" />
        <input type="range" data-act="width" min="560" max="980" step="20" value="720" />
      </div>
    `;
    document.body.prepend(tb);
    return tb;
  }

  /* ======================= Preferences & Styling ======================= */
  applyPreferences() {
    document.documentElement.dataset.theme = this.state.theme;
    this.toolbarSet("theme", this.state.theme);
    this.toolbarSet("font", this.state.fontFamily);
    this.toolbarSet("fontSize", this.state.fontSize);
    this.toolbarSet("lineHeight", this.state.lineHeight);
    this.toolbarSet("width", this.state.width);

    this.content.style.fontFamily = this.state.fontFamily;
    this.content.style.fontSize   = `${this.state.fontSize}px`;
    this.content.style.lineHeight = this.state.lineHeight;
    const main = qs(".reader-main", this.root);
    if (main) main.style.maxWidth = `${this.state.width}px`;
  }

  toolbarSet(act, val) {
    const el = qs(`[data-act="${act}"]`, this.toolbar);
    if (!el) return;
    if (el.tagName === "SELECT" || el.type === "range") el.value = val;
  }

  persistPrefs() {
    localStorage.setItem("an_theme", this.state.theme);
    localStorage.setItem("an_ff", this.state.fontFamily);
    localStorage.setItem("an_fs", String(this.state.fontSize));
    localStorage.setItem("an_lh", String(this.state.lineHeight));
    localStorage.setItem("an_width", String(this.state.width));
  }

  /* ======================= Toolbar Interactions ======================== */
  bindToolbar() {
    this.toolbar.addEventListener("click", (e) => {
      const act = e.target?.dataset?.act;
      if (!act) return;
      if (act === "prev") return this.navigate("prev");
      if (act === "next") return this.navigate("next");
      if (act === "tts")  return this.toggleTTS();
      if (act === "focus")return this.toggleFocus();
      if (act === "bookmark") return this.toggleBookmark();
      if (act === "share") return this.shareChapter();
    });

    this.toolbar.addEventListener("change", (e) => {
      const act = e.target?.dataset?.act;
      if (!act) return;
      if (act === "theme") {
        this.state.theme = e.target.value;
      } else if (act === "font") {
        this.state.fontFamily = e.target.value;
      } else if (act === "fontSize") {
        this.state.fontSize = clamp(parseInt(e.target.value,10), 14, 28);
      } else if (act === "lineHeight") {
        this.state.lineHeight = clamp(parseFloat(e.target.value), 1.2, 2.2);
      } else if (act === "width") {
        this.state.width = clamp(parseInt(e.target.value,10), 560, 980);
      }
      this.applyPreferences();
      this.persistPrefs();
    });
  }

  bindInteractions() {
    // Keyboard shortcuts (File 1 style)
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.navigate("prev");
      if (e.key === "ArrowRight") this.navigate("next");
      if (e.key === "t") this.toggleTTS();
      if (e.key === "f") this.toggleFocus();
      if (e.key === "+") { this.state.fontSize = clamp(this.state.fontSize+1,14,28); this.applyPreferences(); this.persistPrefs(); }
      if (e.key === "-") { this.state.fontSize = clamp(this.state.fontSize-1,14,28); this.applyPreferences(); this.persistPrefs(); }
    });

    // Scroll progress
    window.addEventListener("scroll", () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      this.state.progress = total > 0 ? Math.round((y/total) * 100) : 0;
      // could persist to user progress in Firestore if authenticated
    });
  }

  toggleFocus() {
    document.body.classList.toggle("focus-mode");
  }

  /* ========================= TTS (Frontend) ============================ */
  toggleTTS() {
    const synth = window.speechSynthesis;
    if (!synth) return alert("Speech Synthesis not supported in this browser.");
    if (this.state.ttsOn) {
      synth.cancel();
      this.state.ttsOn = false;
      return;
    }
    const text = this.content.innerText.trim();
    if (!text) return;
    this.utterance = new SpeechSynthesisUtterance(text);
    this.utterance.onend = () => { this.state.ttsOn = false; };
    this.state.ttsOn = true;
    synth.speak(this.utterance);
  }

  /* ======================= Bookmarks (Backend) ========================= */
  async toggleBookmark() {
    if (!this.current.chapterDoc) return;
    // Using anonymous bookmark doc; integrate Firebase Auth for per-user
    const uid = "anon";
    const ref = doc(this.db, "users", uid, "bookmarks", this.current.chapterId);
    try {
      await setDoc(ref, {
        novelId: this.current.novelId,
        chapterId: this.current.chapterId,
        savedAt: Date.now(),
        title: this.current.chapterDoc.title || ""
      }, { merge: true });
      this.state.isBookmarked = true;
      this.toast("Bookmarked");
    } catch (e) {
      console.error(e);
      this.toast("Bookmark failed");
    }
  }

  /* =========================== Web Share API =========================== */
  async shareChapter() {
    const { chapterDoc } = this.current;
    const title = chapterDoc?.title || "Chapter";
    const url = location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
      } else {
        await navigator.clipboard.writeText(url);
        this.toast("Link copied");
      }
    } catch {
      this.toast("Share canceled");
    }
  }

  /* ============================ Routing ================================ */
  route() {
    const m = location.hash.match(/#\/novel\/([^/]+)\/chapter\/([^/]+)/);
    if (!m) return;
    const [, novelId, chapterId] = m;
    if (novelId === this.current.novelId && chapterId === this.current.chapterId) return;
    this.loadChapter(novelId, chapterId);
  }

  navigate(dir) {
    const nextId = this.current.adjacent?.[dir];
    if (!nextId) return;
    location.hash = `#/novel/${this.current.novelId}/chapter/${nextId}`;
  }

  /* ====================== Firestore Data Loading ======================= */
  async loadChapter(novelId, chapterId) {
    try {
      // Chapter doc
      const cref = doc(this.db, "novels", novelId, "chapters", chapterId);
      const snap = await getDoc(cref);
      if (!snap.exists()) throw new Error("Chapter not found");
      this.current.novelId   = novelId;
      this.current.chapterId = chapterId;
      this.current.chapterDoc= { id: snap.id, ...snap.data() };

      // Adjacent by number
      const num = this.current.chapterDoc.number || 1;
      this.current.adjacent = await this.findAdjacent(novelId, num);

      // Render
      this.renderChapter(this.current.chapterDoc);

      // Increment view counter
      updateDoc(cref, { views: increment(1) }).catch(()=>{});
    } catch (err) {
      console.error(err);
      this.toast("Failed to load chapter");
    }
  }

  async findAdjacent(novelId, number) {
    const colRef = collection(this.db, "novels", novelId, "chapters");
    const [prevSnap, nextSnap] = await Promise.all([
      getDocs(query(colRef, where("number", "==", number - 1))),
      getDocs(query(colRef, where("number", "==", number + 1)))
    ]);
    return {
      prev: prevSnap.docs[0]?.id || null,
      next: nextSnap.docs[0]?.id || null
    };
  }

  /* ============================== Render =============================== */
  renderChapter(chap) {
    // Meta header
    const metaBits = [];
    if (chap.title) metaBits.push(`<h1 class="title">${chap.title}</h1>`);
    const sub = [];
    if (chap.author) sub.push(`By ${chap.author}`);
    if (chap.number != null) sub.push(`Chapter ${chap.number}`);
    if (chap.readingTime) sub.push(`${chap.readingTime}`);
    if (chap.wordCount) sub.push(`${chap.wordCount} words`);
    this.metaEl.innerHTML = `
      ${metaBits.join("")}
      <div class="sub">${sub.join(" • ")}</div>
    `;

    // Content with paragraphization like File 1
    const safe = (chap.content || "").trim()
      .split(/\n{2,}/g)
      .map(p => `<p>${this.escapeHtml(p).replace(/\n/g,"<br/>")}</p>`)
      .join("");

    this.content.innerHTML = safe;

    // TOC (simple: headings)
    this.buildTOC();

    // Apply prefs after re-render
    this.applyPreferences();

    // Reset scroll and progress
    window.scrollTo(0, 0);
    this.state.progress = 0;
    document.title = `${chap.title || "Chapter"} · Anmol`;
  }

  buildTOC() {
    const heads = qsa("h1,h2,h3", this.content);
    if (!heads.length) { this.tocEl.innerHTML = "<em>No section headings</em>"; return; }
    const items = heads.map((h, i) => {
      const id = h.id || `sec-${i+1}`;
      h.id = id;
      return `<div class="toc-item toc-${h.tagName.toLowerCase()}"><a href="#${id}">${h.textContent}</a></div>`;
    });
    this.tocEl.innerHTML = items.join("");
  }

  escapeHtml(s) {
    return s.replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));
  }

  /* ============================= Feedback ============================== */
  toast(msg) {
    let t = qs("#an-toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "an-toast";
      t.style.cssText = "position:fixed;bottom:16px;left:50%;transform:translateX(-50%);background:var(--bg, #222);color:#fff;padding:10px 14px;border-radius:8px;z-index:9999;opacity:0;transition:opacity .2s;";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.opacity = "1";
    setTimeout(()=> t.style.opacity = "0", 1400);
  }
}

/* ============================== Bootstrap ============================== */
/* Replace with production keys */
const firebaseConfig = {
  apiKey: "AIzaSyDWvWKy0Q0cXpNfwtGSOnE1fpVpUNNIUYo",
  authDomain: "anmol-52f27.firebaseapp.com",
  projectId: "anmol-52f27",
  storageBucket: "anmol-52f27.appspot.com",
  messagingSenderId: "976948958946",
  appId: "1:976948958946:web:82be247422eed9bd1130bb",
  measurementId: "G-76WN0DR9BZ"
};

window.UnifiedAnmolReader = new UnifiedAnmolReader({ firebaseConfig });
