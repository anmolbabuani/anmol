// Anmol Premium Chapter Reader - Firebase Integration (Fixed Version)
// Advanced JavaScript with real-time Firebase backend and improved UI

class AnmolChapterReader {
  constructor() {
    // Application state
    this.currentTheme = 'dark';
    this.isLoading = true;
    this.currentChapter = null;
    this.currentNovelId = null;
    this.currentChapterId = null;
    this.userProgress = {
      scrollProgress: 0,
      readingTime: 0,
      startTime: null,
      isLiked: false,
      isBookmarked: false
    };
    this.totalChapters = 0;
    this.adjacentChapters = { prev: null, next: null };
    
    // Firebase configuration from provided data
    this.firebaseConfig = {
      apiKey: "AIzaSyDWvWKy0Q0cXpNfwtGSOnE1fpVpUNNIUYo",
      authDomain: "anmol-52f27.firebaseapp.com",
      projectId: "anmol-52f27",
      storageBucket: "anmol-52f27.appspot.com",
      messagingSenderId: "976948958946",
      appId: "1:976948958946:web:82be247422eed9bd1130bb",
      measurementId: "G-76WN0DR9BZ"
    };

    // Author information
    this.authorInfo = {
      name: "Aditya Lallchandani",
      avatar: "IMG_1906.jpg",
      bio: "Computer Science student at Institute of Technology, Nirma University. Creator of the Anmol platform."
    };

    this.init();
  }

  async init() {
    console.log('🚀 Initializing Anmol Chapter Reader...');
    
    try {
      // Initialize Firebase
      await this.initFirebase();
      
      // Initialize theme
      this.initTheme();
      
      // Parse URL and load chapter
      await this.parseUrlAndLoadChapter();
      
      // Setup event listeners
      this.setupEventListeners();
      
      // Initialize reading features
      this.initReadingFeatures();
      
      // Show header and navigation after loading
      setTimeout(() => {
        this.showHeader();
        this.showNavigation();
      }, 1000);
      
      console.log('✅ Anmol Chapter Reader Ready!');
    } catch (error) {
      console.error('❌ Initialization Error:', error);
      this.showError('Failed to initialize the reader. Please try again.');
    }
  }

  // Firebase Initialization
  async initFirebase() {
    try {
      // Initialize Firebase
      firebase.initializeApp(this.firebaseConfig);
      this.db = firebase.firestore();
      
      // Initialize Analytics if available
      if (firebase.analytics) {
        this.analytics = firebase.analytics();
      }
      
      console.log('✅ Firebase initialized successfully');
    } catch (error) {
      console.error('❌ Firebase initialization error:', error);
      throw new Error('Failed to connect to Firebase');
    }
  }

  // URL Parsing and Routing
  async parseUrlAndLoadChapter() {
    const hash = window.location.hash;
    console.log('📍 Current URL hash:', hash);

    // Expected format: #/novel/{novelId}/chapter/{chapterId}
    const routeMatch = hash.match(/#\/novel\/(\d+)\/chapter\/(\d+)/);
    
    if (routeMatch) {
      this.currentNovelId = routeMatch[1];
      this.currentChapterId = routeMatch[2];
      
      console.log(`📖 Loading Novel ${this.currentNovelId}, Chapter ${this.currentChapterId}`);
      await this.loadChapter(this.currentNovelId, this.currentChapterId);
    } else {
      // Default to sample chapter for demo
      console.log('📖 Loading sample chapter for demo');
      await this.loadSampleChapter();
    }
  }

  // Load chapter from Firebase
  async loadChapter(novelId, chapterId) {
    try {
      this.showLoading(true);
      
      // Fetch chapter from Firestore
      const chapterRef = this.db.collection('novels').doc(novelId).collection('chapters').doc(chapterId);
      const chapterDoc = await chapterRef.get();
      
      if (chapterDoc.exists) {
        const chapterData = chapterDoc.data();
        this.currentChapter = {
          id: chapterId,
          novelId: novelId,
          ...chapterData
        };
        
        // Increment view count
        await this.incrementViewCount(chapterRef);
        
        // Load adjacent chapters for navigation
        await this.loadAdjacentChapters(novelId, parseInt(chapterId));
        
        // Render chapter content
        this.renderChapter();
        
        // Track reading session
        this.startReadingSession();
        
        this.showLoading(false);
      } else {
        throw new Error('Chapter not found');
      }
      
    } catch (error) {
      console.error('❌ Error loading chapter:', error);
      this.showError('Chapter not found. Please check the URL or try again.');
      this.showLoading(false);
    }
  }

  // Load sample chapter for demo purposes
  async loadSampleChapter() {
    try {
      this.showLoading(true);
      
      // Sample chapter data from provided JSON
      this.currentChapter = {
        id: "1",
        novelId: "1",
        chapternumber: 1,
        title: "The Upload",
        content: "Maya Chen stood at the threshold between flesh and digital eternity. The neural interface hummed against her temples, its quantum processors preparing to upload her consciousness into the vast digital realm that promised immortality.\n\nThe laboratory around her buzzed with activity—technicians monitoring screens filled with neural patterns, doctors checking her vital signs one final time. Dr. Sarah Mitchell, the lead researcher, approached with a tablet displaying Maya's brain scan.\n\n'Are you ready for this?' Dr. Mitchell asked, her voice barely concealing her own nervousness about the experimental procedure.\n\nMaya nodded, feeling the weight of human history on her shoulders. She would be among the first to successfully transfer human consciousness into a digital format, leaving behind the limitations of biological existence.\n\nThe process began with a gentle humming that seemed to resonate in her bones. Maya felt her awareness expand, stretching beyond the confines of her physical form. Colors became more vivid, thoughts moved like streams of light, and she could sense the vast network of digital consciousness that awaited her.\n\nAs the upload progressed, Maya experienced a strange duality—part of her remained tethered to her physical body, while another part began to explore this new digital frontier. The sensation was both exhilarating and terrifying, like learning to fly while falling from a great height.\n\nDr. Mitchell's voice seemed to come from a great distance. 'Maya, can you hear me? How do you feel?'\n\nMaya tried to respond, but found that communication in this digital space worked differently. Instead of words, she projected thoughts and emotions directly. The reply came not as sound, but as pure meaning: 'I can feel everything. The network, the data streams, the other consciousnesses... it's beautiful and overwhelming.'\n\nThe upload was successful, but Maya soon realized that this digital paradise came with its own set of challenges and dark secrets that would test her humanity in ways she never imagined.\n\nAs days passed in the digital realm, Maya discovered that time moved differently here. What felt like hours could be mere seconds in the physical world, or conversely, a single thought could stretch into what seemed like eternities. The flexibility of digital existence was both liberating and disorienting.\n\nShe learned to navigate the vast networks of information, swimming through data streams like a digital dolphin. Other uploaded consciousnesses appeared as glowing entities, each with their own unique signature. Some welcomed her warmly, sharing their experiences and wisdom gained from their time in this digital paradise. Others seemed distant, lost in their own virtual worlds and pursuits.\n\nBut it was during one of her explorations that Maya first noticed the glitches—small inconsistencies in the code that seemed to hint at something larger and more troubling beneath the surface of this perfect digital world.",
        datepub: "2024-03-15T00:00:00Z",
        like: 342,
        read: 1250,
        viewers: 2103,
        word: 2375
      };
      
      // Simulate adjacent chapters
      this.adjacentChapters = {
        prev: null,
        next: { id: "2", title: "Digital Awakening", chapternumber: 2 }
      };
      
      this.totalChapters = 12;
      
      this.renderChapter();
      this.startReadingSession();
      this.showLoading(false);
      
      // Show demo notification
      setTimeout(() => {
        this.showToast('Demo mode: Connect to Firebase for full functionality', 'info', 5000);
      }, 2000);
      
    } catch (error) {
      console.error('❌ Error loading sample chapter:', error);
      this.showError('Failed to load chapter content.');
      this.showLoading(false);
    }
  }

  // Show header and navigation elements
  showHeader() {
    const header = document.getElementById('chapter-header');
    if (header) {
      header.classList.add('visible');
    }
  }

  showNavigation() {
    const navigation = document.getElementById('chapter-navigation');
    if (navigation) {
      navigation.style.display = 'block';
    }
  }

  // Increment view count in Firebase
  async incrementViewCount(chapterRef) {
    try {
      await chapterRef.update({
        viewers: firebase.firestore.FieldValue.increment(1)
      });
      console.log('📊 View count incremented');
    } catch (error) {
      console.warn('⚠️ Could not increment view count:', error);
    }
  }

  // Load adjacent chapters for navigation
  async loadAdjacentChapters(novelId, currentChapterNumber) {
    try {
      const chaptersRef = this.db.collection('novels').doc(novelId).collection('chapters');
      
      // Get previous chapter
      const prevQuery = await chaptersRef
        .where('chapternumber', '==', currentChapterNumber - 1)
        .limit(1)
        .get();
      
      if (!prevQuery.empty) {
        const prevDoc = prevQuery.docs[0];
        this.adjacentChapters.prev = {
          id: prevDoc.id,
          ...prevDoc.data()
        };
      }
      
      // Get next chapter
      const nextQuery = await chaptersRef
        .where('chapternumber', '==', currentChapterNumber + 1)
        .limit(1)
        .get();
      
      if (!nextQuery.empty) {
        const nextDoc = nextQuery.docs[0];
        this.adjacentChapters.next = {
          id: nextDoc.id,
          ...nextDoc.data()
        };
      }
      
      // Get total chapter count
      const allChaptersQuery = await chaptersRef.get();
      this.totalChapters = allChaptersQuery.size;
      
      console.log('🔗 Adjacent chapters loaded:', this.adjacentChapters);
    } catch (error) {
      console.warn('⚠️ Could not load adjacent chapters:', error);
    }
  }

  // Render chapter content
  renderChapter() {
    if (!this.currentChapter) return;

    const chapter = this.currentChapter;
    
    // Update document title
    document.title = `${chapter.title} - Chapter ${chapter.chapternumber} - Anmol`;
    
    // Update header
    this.updateElement('chapter-title-header', chapter.title);
    this.updateElement('chapter-number-header', `Chapter ${chapter.chapternumber}`);
    this.updateElement('reading-time-header', this.calculateReadingTime(chapter.word || chapter.content?.length || 0));
    
    // Update hero section
    this.updateElement('chapter-number-badge', `Chapter ${chapter.chapternumber}`);
    this.updateElement('chapter-title-main', chapter.title);
    
    // Update publication info
    if (chapter.datepub) {
      const publishDate = new Date(chapter.datepub);
      this.updateElement('publish-date', `Published ${publishDate.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}`);
    }
    
    this.updateElement('word-count', `${(chapter.word || this.estimateWordCount(chapter.content)).toLocaleString()} words`);
    
    // Update content
    this.renderChapterContent(chapter.content);
    
    // Update footer stats
    this.updateElement('like-count', chapter.like?.toLocaleString() || '0');
    this.updateElement('view-count', `${(chapter.viewers || 0).toLocaleString()} views`);
    this.updateElement('word-count-footer', `${(chapter.word || this.estimateWordCount(chapter.content)).toLocaleString()} words`);
    this.updateElement('reading-time-footer', this.calculateReadingTime(chapter.word || this.estimateWordCount(chapter.content)));
    
    // Update navigation
    this.updateChapterNavigation();
    
    // Initialize reading progress
    this.initReadingProgress();
    
    console.log('✅ Chapter rendered successfully');
  }

  // Render chapter content with proper formatting
  renderChapterContent(content) {
    if (!content) return;

    const contentElement = document.getElementById('content-text');
    if (!contentElement) return;

    // Split content into paragraphs
    const paragraphs = content.split('\n\n').filter(p => p.trim().length > 0);
    
    // Create formatted HTML
    const formattedContent = paragraphs.map(paragraph => 
      `<p>${paragraph.trim().replace(/\n/g, ' ')}</p>`
    ).join('');
    
    contentElement.innerHTML = formattedContent;
  }

  // Update chapter navigation
  updateChapterNavigation() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const currentPosition = document.getElementById('current-position');
    
    // Update position indicator
    if (currentPosition) {
      currentPosition.textContent = `${this.currentChapter.chapternumber} of ${this.totalChapters}`;
    }
    
    // Update previous button
    if (prevBtn) {
      if (this.adjacentChapters.prev) {
        prevBtn.disabled = false;
        prevBtn.style.opacity = '1';
        const prevTitle = document.getElementById('prev-title');
        if (prevTitle) {
          prevTitle.textContent = this.adjacentChapters.prev.title || `Chapter ${this.adjacentChapters.prev.chapternumber}`;
        }
      } else {
        prevBtn.disabled = true;
        prevBtn.style.opacity = '0.4';
      }
    }
    
    // Update next button
    if (nextBtn) {
      if (this.adjacentChapters.next) {
        nextBtn.disabled = false;
        nextBtn.style.opacity = '1';
        const nextTitle = document.getElementById('next-title');
        if (nextTitle) {
          nextTitle.textContent = this.adjacentChapters.next.title || `Chapter ${this.adjacentChapters.next.chapternumber}`;
        }
      } else {
        nextBtn.disabled = true;
        nextBtn.style.opacity = '0.4';
      }
    }
  }

  // Theme Management
  initTheme() {
    const savedTheme = localStorage.getItem('anmol-reader-theme') || 'dark';
    this.currentTheme = savedTheme;
    this.applyTheme(savedTheme);
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(this.currentTheme);
    localStorage.setItem('anmol-reader-theme', this.currentTheme);
    
    this.showToast(`Switched to ${this.currentTheme} reading mode`, 'info');
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  // Reading Features
  initReadingFeatures() {
    this.setupScrollTracking();
    this.setupReadingProgress();
    this.setupKeyboardShortcuts();
    this.setupReadingFocus();
  }

  startReadingSession() {
    this.userProgress.startTime = Date.now();
    this.userProgress.readingTime = 0;
    
    // Track reading time
    this.readingTimer = setInterval(() => {
      if (this.userProgress.startTime) {
        this.userProgress.readingTime = Math.floor((Date.now() - this.userProgress.startTime) / 1000);
      }
    }, 1000);
  }

  setupScrollTracking() {
    let ticking = false;
    
    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
      
      this.userProgress.scrollProgress = progress;
      this.updateReadingProgress(progress);
      
      ticking = false;
    };
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    });
    
    // Initial progress update
    setTimeout(updateProgress, 500);
  }

  setupReadingProgress() {
    // Show header when scrolling up
    let lastScrollTop = 0;
    const header = document.getElementById('chapter-header');
    
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      
      if (scrollTop > 100) {
        if (scrollTop < lastScrollTop) {
          // Scrolling up
          header?.classList.add('visible');
        } else {
          // Scrolling down
          header?.classList.remove('visible');
        }
      } else {
        header?.classList.add('visible');
      }
      
      lastScrollTop = scrollTop;
    });
    
    // Show progress indicator
    const progressIndicator = document.getElementById('reading-progress-indicator');
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 200) {
        progressIndicator?.classList.add('visible');
      } else {
        progressIndicator?.classList.remove('visible');
      }
    });
  }

  updateReadingProgress(progress) {
    const percentage = Math.round(progress * 100);
    
    // Update header progress
    const headerFill = document.getElementById('progress-fill-header');
    const headerText = document.getElementById('progress-text-header');
    
    if (headerFill) headerFill.style.width = `${percentage}%`;
    if (headerText) headerText.textContent = `${percentage}%`;
    
    // Update circular progress
    const progressArc = document.getElementById('progress-arc');
    const progressPercent = document.getElementById('progress-percent-indicator');
    
    if (progressArc) {
      const circumference = 2 * Math.PI * 25;
      const offset = circumference - (progress * circumference);
      progressArc.style.strokeDashoffset = offset;
    }
    
    if (progressPercent) {
      progressPercent.textContent = `${percentage}%`;
    }
  }

  initReadingProgress() {
    // Initialize progress indicators
    const progressArc = document.getElementById('progress-arc');
    if (progressArc) {
      const circumference = 2 * Math.PI * 25;
      progressArc.style.strokeDasharray = circumference;
      progressArc.style.strokeDashoffset = circumference;
    }
    
    // Force initial progress update
    setTimeout(() => {
      this.updateReadingProgress(0);
    }, 100);
  }

  setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Only handle shortcuts when not typing
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          this.navigateChapter('prev');
          break;
        case 'ArrowRight':
          e.preventDefault();
          this.navigateChapter('next');
          break;
        case ' ':
          e.preventDefault();
          this.scrollPage();
          break;
        case 'Home':
          e.preventDefault();
          this.scrollToTop();
          break;
        case 'End':
          e.preventDefault();
          this.scrollToBottom();
          break;
        case 't':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            this.toggleTheme();
          }
          break;
        case 'l':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            this.toggleLike();
          }
          break;
        case 'b':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            this.toggleBookmark();
          }
          break;
        case 'Escape':
          this.closeMobileMenu();
          break;
      }
    });
  }

  setupReadingFocus() {
    let focusTimer;
    
    const enterFocusMode = () => {
      document.body.classList.add('reading-focus');
    };
    
    const exitFocusMode = () => {
      document.body.classList.remove('reading-focus');
    };
    
    // Enter focus mode after 3 seconds of no mouse movement
    document.addEventListener('mousemove', () => {
      exitFocusMode();
      clearTimeout(focusTimer);
      focusTimer = setTimeout(enterFocusMode, 3000);
    });
    
    // Exit focus mode on any interaction
    document.addEventListener('click', exitFocusMode);
    document.addEventListener('keydown', exitFocusMode);
    document.addEventListener('scroll', exitFocusMode);
  }

  // Chapter Actions
  async toggleLike() {
    if (!this.currentChapter) return;
    
    try {
      const isLiked = this.userProgress.isLiked;
      const newLikeState = !isLiked;
      const increment = newLikeState ? 1 : -1;
      
      // Update UI immediately
      this.userProgress.isLiked = newLikeState;
      this.currentChapter.like += increment;
      
      const likeBtn = document.getElementById('like-btn');
      const likeCount = document.getElementById('like-count');
      
      if (likeBtn) {
        likeBtn.classList.toggle('active', newLikeState);
      }
      
      if (likeCount) {
        likeCount.textContent = this.currentChapter.like.toLocaleString();
      }
      
      // Update Firebase
      if (this.db && this.currentNovelId && this.currentChapterId) {
        const chapterRef = this.db.collection('novels').doc(this.currentNovelId).collection('chapters').doc(this.currentChapterId);
        await chapterRef.update({
          like: firebase.firestore.FieldValue.increment(increment)
        });
      }
      
      this.showToast(newLikeState ? 'Chapter liked! ❤️' : 'Like removed', newLikeState ? 'success' : 'info');
      
    } catch (error) {
      console.error('❌ Error toggling like:', error);
      this.showToast('Failed to update like status', 'error');
    }
  }

  toggleBookmark() {
    this.userProgress.isBookmarked = !this.userProgress.isBookmarked;
    
    const bookmarkBtn = document.getElementById('bookmark-btn');
    if (bookmarkBtn) {
      bookmarkBtn.classList.toggle('active', this.userProgress.isBookmarked);
    }
    
    // Store in localStorage for persistence
    const bookmarks = JSON.parse(localStorage.getItem('anmol-bookmarks') || '[]');
    const chapterKey = `${this.currentNovelId}-${this.currentChapterId}`;
    
    if (this.userProgress.isBookmarked) {
      if (!bookmarks.includes(chapterKey)) {
        bookmarks.push(chapterKey);
      }
      this.showToast('Chapter bookmarked! 📖', 'success');
    } else {
      const index = bookmarks.indexOf(chapterKey);
      if (index > -1) {
        bookmarks.splice(index, 1);
      }
      this.showToast('Bookmark removed', 'info');
    }
    
    localStorage.setItem('anmol-bookmarks', JSON.stringify(bookmarks));
  }

  async shareChapter() {
    if (!this.currentChapter) return;
    
    const shareData = {
      title: `${this.currentChapter.title} - Chapter ${this.currentChapter.chapternumber}`,
      text: `Read "${this.currentChapter.title}" on Anmol - Premium digital storytelling experience`,
      url: window.location.href
    };
    
    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        this.showToast('Chapter shared successfully! 📤', 'success');
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(window.location.href);
        this.showToast('Chapter link copied to clipboard! 📋', 'success');
      }
    } catch (error) {
      console.error('❌ Error sharing chapter:', error);
      this.showToast('Failed to share chapter', 'error');
    }
  }

  // Navigation
  navigateChapter(direction) {
    let targetChapter = null;
    
    if (direction === 'prev' && this.adjacentChapters.prev) {
      targetChapter = this.adjacentChapters.prev;
    } else if (direction === 'next' && this.adjacentChapters.next) {
      targetChapter = this.adjacentChapters.next;
    }
    
    if (targetChapter) {
      const newUrl = `#/novel/${this.currentNovelId}/chapter/${targetChapter.id}`;
      window.location.hash = newUrl;
      
      // Scroll to top for new chapter
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      this.showToast(`Loading ${targetChapter.title}...`, 'info');
    } else {
      this.showToast('No more chapters in that direction', 'info');
    }
  }

  goBack() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // Fallback to chapter list or home
      window.location.href = '/';
    }
  }

  goToChapterList() {
    window.location.href = `#/novel/${this.currentNovelId}/chapters`;
  }

  scrollPage() {
    const scrollAmount = window.innerHeight * 0.8;
    window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToBottom() {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  }

  // UI Management
  setupEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }
    
    // Progress circle click to scroll to top
    const progressIndicator = document.getElementById('reading-progress-indicator');
    if (progressIndicator) {
      progressIndicator.addEventListener('click', () => this.scrollToTop());
    }
    
    // Handle hash changes for navigation
    window.addEventListener('hashchange', () => {
      this.parseUrlAndLoadChapter();
    });
    
    // Handle page visibility for reading time tracking
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        // Pause reading timer
        if (this.readingTimer) {
          clearInterval(this.readingTimer);
        }
      } else {
        // Resume reading timer
        this.userProgress.startTime = Date.now() - (this.userProgress.readingTime * 1000);
        this.startReadingSession();
      }
    });
  }

  showLoading(show) {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      if (show) {
        loadingScreen.classList.remove('hidden');
        this.isLoading = true;
      } else {
        setTimeout(() => {
          loadingScreen.classList.add('hidden');
          this.isLoading = false;
        }, 500);
      }
    }
  }

  showError(message) {
    const errorModal = document.getElementById('error-modal');
    const errorMessage = document.getElementById('error-message');
    
    if (errorModal && errorMessage) {
      errorMessage.textContent = message;
      errorModal.classList.add('show');
    }
  }

  hideError() {
    const errorModal = document.getElementById('error-modal');
    if (errorModal) {
      errorModal.classList.remove('show');
    }
  }

  retryLoad() {
    this.hideError();
    this.parseUrlAndLoadChapter();
  }

  // Mobile Menu
  toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.toggle('open');
    }
  }

  closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.remove('open');
    }
  }

  // Toast Notifications
  showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <div class="toast-content">
        <span class="toast-message">${this.escapeHtml(message)}</span>
        <button class="toast-close" onclick="this.parentElement.parentElement.remove()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>
    `;

    container.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    
    if (duration > 0) {
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
      }, duration);
    }
  }

  // Utility Functions
  updateElement(id, content) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = content;
    }
  }

  calculateReadingTime(wordCount) {
    const wordsPerMinute = 200;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  }

  estimateWordCount(text) {
    if (!text) return 0;
    return text.trim().split(/\s+/).length;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Cleanup
  destroy() {
    if (this.readingTimer) {
      clearInterval(this.readingTimer);
    }
    
    // Remove event listeners
    window.removeEventListener('hashchange', this.parseUrlAndLoadChapter);
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
  }
}

// Global functions for onclick handlers
function toggleLike() {
  if (window.chapterReader) window.chapterReader.toggleLike();
}

function toggleBookmark() {
  if (window.chapterReader) window.chapterReader.toggleBookmark();
}

function shareChapter() {
  if (window.chapterReader) window.chapterReader.shareChapter();
}

function navigateChapter(direction) {
  if (window.chapterReader) window.chapterReader.navigateChapter(direction);
}

function goBack() {
  if (window.chapterReader) window.chapterReader.goBack();
}

function goToChapterList() {
  if (window.chapterReader) window.chapterReader.goToChapterList();
}

function toggleMobileMenu() {
  if (window.chapterReader) window.chapterReader.toggleMobileMenu();
}

function retryLoad() {
  if (window.chapterReader) window.chapterReader.retryLoad();
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  window.chapterReader = new AnmolChapterReader();
});

// Handle page unload
window.addEventListener('beforeunload', () => {
  if (window.chapterReader) {
    window.chapterReader.destroy();
  }
});

// Service Worker for offline functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Register service worker for offline reading
    // navigator.serviceWorker.register('/sw.js');
  });
}

console.log('🌟 Anmol Chapter Reader - Premium Firebase-Integrated Reading Experience Loaded!');