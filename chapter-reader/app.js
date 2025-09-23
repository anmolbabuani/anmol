// Chapter Reading Interface for Anmol Platform

class ChapterReader {
  constructor() {
    // Chapter data from the application data
    this.chapterData = {
      "id": "ch3",
      "novelId": "novel1",
      "novelTitle": "Et",
      "title": "Neural Networks",
      "number": 3,
      "totalChapters": 15,
      "author": "Sarah Chen",
      "authorId": "user2",
      "publishedAt": "2024-09-20T18:30:00Z",
      "wordCount": 2847,
      "readingTime": "12-15 minutes",
      "content": "Maya's fingers trembled as she approached the neural interface terminal. The sleek black surface reflected her determined expression, but she could see the uncertainty flickering in her dark eyes. Three months had passed since the corporate incident, and every night she'd been haunted by the same dream—or was it a memory?\n\nThe lab was quiet except for the gentle hum of quantum processors. Dr. Vasquez had left hours ago, trusting Maya with access to the most advanced dream-diving equipment ever created. The Neural Network Interface, or NNI as they called it, was capable of mapping consciousness itself.\n\n\"Computer, initiate neural mapping protocol,\" Maya whispered, her voice barely audible in the sterile environment.\n\nThe terminal responded with a soft chime. \"Neural mapping protocol initiated. Please place your hands on the interface pads and prepare for consciousness transfer.\"\n\nMaya hesitated. Once she entered the network, there would be no turning back. She'd either find the answers she desperately needed, or lose herself forever in the digital maze of human dreams.\n\nThe interface pads felt cool against her palms. Immediately, she felt the familiar tingle of neural connection—like electricity dancing across her skin. But this was different from her previous dives. Stronger. More invasive.\n\n\"Beginning transfer in 3... 2... 1...\"\n\nReality dissolved.\n\nMaya found herself standing in a vast digital landscape that defied physics. Towering structures of pure data stretched toward an infinite sky, their surfaces pulsing with streams of information. This wasn't the crude virtual reality she was accustomed to—this was something far more sophisticated.\n\n\"Welcome to the Neural Network,\" a voice said behind her.\n\nMaya spun around to find herself facing a figure that looked exactly like her, but wore an expression of cold calculation that Maya had never seen in any mirror.\n\n\"Who are you?\" Maya demanded, though she already suspected the answer would terrify her.\n\n\"I'm who you could become,\" the doppelganger replied. \"I'm who you were meant to be before you developed that inconvenient conscience. I'm the version of Maya Chen that NeoCorp originally designed.\"\n\nThe revelation hit her like a physical blow. \"Designed?\"\n\n\"Did you really think your hacking abilities were natural talent? Your neural patterns, your intuitive understanding of digital systems, your ability to navigate virtual environments—all engineered. You're not just a hacker, Maya. You're a prototype.\"\n\nMaya's legs felt weak. She'd always wondered why she seemed to understand code in ways that others couldn't, why virtual interfaces felt more natural to her than physical reality.\n\n\"The dreams you've been having aren't dreams,\" her doppelganger continued. \"They're memories. Suppressed experiences from your time in NeoCorp's development program. They wiped your memory when you started asking inconvenient questions, but the neural pathways remain. And now, thanks to your friend Dr. Vasquez's research, those pathways are reactivating.\"\n\nThe digital landscape around them began to shift, showing Maya fragments of her forgotten past. Sterile laboratories. Corporate executives in expensive suits. Test subjects connected to machines. And at the center of it all, a younger version of herself, eagerly participating in experiments she couldn't remember.\n\n\"They made us to be the perfect corporate tools,\" the other Maya said. \"Hackers who could infiltrate any system, manipulate any network, steal any secret. But something went wrong with your programming. You developed empathy. Morality. Things that made you... inconvenient.\"\n\nMaya watched in horror as the memories continued to unfold. She saw herself discovering the true purpose of the neural interface technology—not to help people access their dreams, but to invade them. To steal thoughts, implant ideas, and manipulate minds on a massive scale.\n\n\"That's why you rebelled,\" her doppelganger explained. \"That's why they had to reset you. But resets are never perfect. The original programming is still there, waiting. And NeoCorp has been very patient.\"\n\n\"What do they want?\" Maya asked, though she dreaded the answer.\n\n\"They want you back. The new neural interface technology that Dr. Vasquez has been developing? It's based on your original design specifications. You helped create the very system you're now trying to expose. Ironic, isn't it?\"\n\nMaya felt the ground shifting beneath her feet—literally. The digital landscape was becoming unstable, responding to her emotional turmoil.\n\n\"I won't help them,\" she said firmly. \"I won't be their weapon.\"\n\n\"You already are,\" the other Maya replied with a cruel smile. \"Every time you use the neural interface, you're strengthening the pathways that connect you to NeoCorp's network. Every dive into the dream realm brings your original programming closer to the surface. Soon, you won't have a choice in the matter.\"\n\nThe digital world began to fracture around them, cracks of white light spreading across the data structures. Maya could feel herself being pulled back toward physical reality, but the revelations continued to echo in her mind.\n\n\"Remember who you really are, Maya,\" her doppelganger called out as the connection severed. \"Remember what you were made to do.\"\n\nMaya's eyes snapped open in the real world, her body jerking away from the interface pads. Her heart was racing, and her hands were shaking uncontrollably. The neural connection had lasted only minutes, but it felt like hours had passed.\n\nDr. Vasquez was standing beside her, concern etched across her face. \"Maya! Are you alright? Your neural activity spiked dramatically. What did you see?\"\n\nMaya looked at her mentor—the woman who had taken her in, who had given her purpose, who had trusted her with the most advanced technology ever created. How could she explain that everything they'd been working toward might be exactly what NeoCorp wanted?\n\n\"I saw the truth,\" Maya whispered. \"And I don't think we're going to like what it means for the future of human consciousness.\"",
      "tags": ["cyberpunk", "consciousness", "corporate conspiracy", "neural interface", "identity crisis"],
      "genres": ["Cyberpunk", "Science Fiction", "Thriller"],
      "contentWarnings": ["Technology themes", "Identity crisis", "Corporate manipulation"],
      "isPremium": false,
      "previousChapter": {
        "id": "ch2",
        "title": "Corporate Shadows",
        "number": 2
      },
      "nextChapter": {
        "id": "ch4",
        "title": "Memory Fragments",
        "number": 4
      }
    };

    // Reading session data
    this.readerSession = {
      userId: "user1",
      startTime: new Date().toISOString(),
      currentPosition: 0,
      readingSpeed: 245,
      sessionTime: 0,
      wordsRead: 0,
      completionPercentage: 0,
      bookmarks: [],
      highlights: [],
      notes: []
    };

    // Reading preferences
    this.preferences = {
      theme: 'dark',
      fontFamily: 'Georgia',
      fontSize: 18,
      lineHeight: 1.6,
      letterSpacing: 0,
      textWidth: 'medium',
      textAlign: 'left',
      autoScroll: false,
      autoScrollSpeed: 1,
      focusMode: false,
      blueLightFilter: false,
      readingRuler: true,
      highlightColor: '#FFD700'
    };

    // State management
    this.state = {
      isReading: false,
      selectedText: '',
      currentParagraph: 0,
      totalParagraphs: 0,
      readingStartTime: null,
      sessionTimer: null,
      autoScrollTimer: null,
      ttsActive: false,
      highlightMode: false,
      sidePanel: null,
      settingsOpen: false
    };

    // Comments and social data
    this.commentsData = [
      {
        "id": "com1",
        "userId": "user5",
        "username": "TechReader2024",
        "avatar": "https://via.placeholder.com/40x40/32CD32/FFFFFF?text=TR",
        "content": "The revelation about Maya being a prototype completely blew my mind! I had theories about her abilities but this is incredible.",
        "timestamp": "2024-09-20T20:15:00Z",
        "likes": 23,
        "replies": [
          {
            "id": "rep1",
            "userId": "user6",
            "username": "CyberpunkFan",
            "avatar": "https://via.placeholder.com/40x40/E74C3C/FFFFFF?text=CF",
            "content": "Same! The foreshadowing in earlier chapters makes so much sense now.",
            "timestamp": "2024-09-20T20:18:00Z",
            "likes": 8
          }
        ],
        "position": 89,
        "isHighlighted": true
      },
      {
        "id": "com2", 
        "userId": "user7",
        "username": "BookwormElite",
        "avatar": "https://via.placeholder.com/40x40/FFD700/000000?text=BE",
        "content": "Sarah Chen's world-building continues to impress. The neural network visualization was incredibly vivid. I could see it all happening!",
        "timestamp": "2024-09-20T21:30:00Z",
        "likes": 19,
        "replies": [],
        "position": 0,
        "isHighlighted": false
      }
    ];

    console.log('ChapterReader initializing...');
    this.init();
  }

  init() {
    console.log('Setting up DOM and events...');
    this.setupDOM();
    this.bindEvents();
    this.loadPreferences();
    this.startReadingSession();
    this.renderChapterContent();
    this.renderTableOfContents();
    this.renderComments();
    this.updateReadingProgress();
    console.log('ChapterReader initialization complete');
  }

  setupDOM() {
    // Create reading ruler
    if (this.preferences.readingRuler) {
      const ruler = document.createElement('div');
      ruler.className = 'reading-ruler';
      ruler.id = 'reading-ruler';
      document.body.appendChild(ruler);
    }

    // Mobile-specific setup
    if (this.isMobile()) {
      document.body.classList.add('mobile-device');
      this.setupMobileGestures();
    }
  }

  bindEvents() {
    console.log('Binding events...');
    
    // Navigation events
    const backBtn = document.getElementById('back-btn');
    const prevBtn = document.getElementById('prev-chapter');
    const nextBtn = document.getElementById('next-chapter');
    const chapterListBtn = document.getElementById('chapter-list-btn');
    
    if (backBtn) backBtn.addEventListener('click', () => this.goBack());
    if (prevBtn) prevBtn.addEventListener('click', () => this.navigateChapter('prev'));
    if (nextBtn) nextBtn.addEventListener('click', () => this.navigateChapter('next'));
    if (chapterListBtn) chapterListBtn.addEventListener('click', () => this.showChapterList());

    // Panel events
    const menuBtn = document.getElementById('menu-btn');
    const settingsBtn = document.getElementById('settings-btn');
    const panelClose = document.getElementById('panel-close');
    const settingsClose = document.getElementById('settings-close');
    
    if (menuBtn) menuBtn.addEventListener('click', () => this.toggleSidePanel('toc'));
    if (settingsBtn) settingsBtn.addEventListener('click', () => this.toggleSettings());
    if (panelClose) panelClose.addEventListener('click', () => this.closeSidePanel());
    if (settingsClose) settingsClose.addEventListener('click', () => this.closeSettings());

    // Panel tab events
    document.querySelectorAll('.panel-tab').forEach(tab => {
      tab.addEventListener('click', () => this.switchPanelTab(tab.dataset.tab));
    });

    // Chapter action events
    const bookmarkBtn = document.getElementById('bookmark-btn');
    const highlightBtn = document.getElementById('highlight-btn');
    const shareBtn = document.getElementById('share-btn');
    const ttsBtn = document.getElementById('tts-btn');
    
    if (bookmarkBtn) bookmarkBtn.addEventListener('click', () => this.addBookmark());
    if (highlightBtn) highlightBtn.addEventListener('click', () => this.toggleHighlightMode());
    if (shareBtn) shareBtn.addEventListener('click', () => this.shareChapter());
    if (ttsBtn) ttsBtn.addEventListener('click', () => this.toggleTextToSpeech());

    // Settings events
    this.bindSettingsEvents();

    // Text selection events
    document.addEventListener('mouseup', () => this.handleTextSelection());
    document.addEventListener('touchend', () => this.handleTextSelection());

    // Scroll events for progress tracking
    window.addEventListener('scroll', () => this.updateReadingProgress());

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));

    // Reaction events
    document.querySelectorAll('.reaction-btn').forEach(btn => {
      btn.addEventListener('click', () => this.handleReaction(btn.dataset.reaction));
    });

    // Rating events
    document.querySelectorAll('.star-btn').forEach(btn => {
      btn.addEventListener('click', () => this.rateChapter(parseInt(btn.dataset.rating)));
    });

    // Comment events
    const postCommentBtn = document.getElementById('post-comment');
    if (postCommentBtn) postCommentBtn.addEventListener('click', () => this.postComment());

    // Author actions
    const followBtn = document.querySelector('.follow-btn');
    const tipBtn = document.querySelector('.tip-btn');
    if (followBtn) followBtn.addEventListener('click', () => this.followAuthor());
    if (tipBtn) tipBtn.addEventListener('click', () => this.showTipModal());

    // Mobile controls
    if (this.isMobile()) {
      const mobileSettings = document.getElementById('mobile-settings');
      const mobileBookmark = document.getElementById('mobile-bookmark');
      const mobileComments = document.getElementById('mobile-comments');
      const mobileAnalytics = document.getElementById('mobile-analytics');
      
      if (mobileSettings) mobileSettings.addEventListener('click', () => this.toggleSettings());
      if (mobileBookmark) mobileBookmark.addEventListener('click', () => this.addBookmark());
      if (mobileComments) mobileComments.addEventListener('click', () => this.toggleSidePanel('comments'));
      if (mobileAnalytics) mobileAnalytics.addEventListener('click', () => this.showAnalytics());
    }

    // Auto-scroll
    this.setupAutoScroll();
    
    console.log('Events bound successfully');
  }

  bindSettingsEvents() {
    // Theme selection
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.addEventListener('click', () => this.changeTheme(btn.dataset.theme));
    });

    // Font controls
    const fontFamily = document.getElementById('font-family');
    const increaseFont = document.getElementById('increase-font');
    const decreaseFont = document.getElementById('decrease-font');
    
    if (fontFamily) fontFamily.addEventListener('change', (e) => {
      this.updatePreference('fontFamily', e.target.value);
    });
    
    if (increaseFont) increaseFont.addEventListener('click', () => this.adjustFontSize(2));
    if (decreaseFont) decreaseFont.addEventListener('click', () => this.adjustFontSize(-2));

    // Range inputs
    const lineHeight = document.getElementById('line-height');
    const letterSpacing = document.getElementById('letter-spacing');
    
    if (lineHeight) {
      lineHeight.addEventListener('input', (e) => {
        this.updatePreference('lineHeight', parseFloat(e.target.value));
        const display = document.getElementById('line-height-display');
        if (display) display.textContent = e.target.value;
      });
    }
    
    if (letterSpacing) {
      letterSpacing.addEventListener('input', (e) => {
        this.updatePreference('letterSpacing', parseFloat(e.target.value));
        const display = document.getElementById('letter-spacing-display');
        if (display) display.textContent = e.target.value + 'em';
      });
    }

    // Width and alignment
    document.querySelectorAll('.width-btn').forEach(btn => {
      btn.addEventListener('click', () => this.changeTextWidth(btn.dataset.width));
    });

    document.querySelectorAll('.align-btn').forEach(btn => {
      btn.addEventListener('click', () => this.changeTextAlign(btn.dataset.align));
    });

    // Feature toggles
    const autoScroll = document.getElementById('auto-scroll');
    const focusMode = document.getElementById('focus-mode');
    const blueLightFilter = document.getElementById('blue-light-filter');
    const readingRuler = document.getElementById('reading-ruler');
    
    if (autoScroll) autoScroll.addEventListener('change', (e) => {
      this.toggleAutoScroll(e.target.checked);
    });
    
    if (focusMode) focusMode.addEventListener('change', (e) => {
      this.toggleFocusMode(e.target.checked);
    });
    
    if (blueLightFilter) blueLightFilter.addEventListener('change', (e) => {
      this.toggleBlueLightFilter(e.target.checked);
    });
    
    if (readingRuler) readingRuler.addEventListener('change', (e) => {
      this.toggleReadingRuler(e.target.checked);
    });

    // Auto scroll speed
    const scrollSpeed = document.getElementById('scroll-speed');
    if (scrollSpeed) {
      scrollSpeed.addEventListener('input', (e) => {
        this.updatePreference('autoScrollSpeed', parseFloat(e.target.value));
        const display = document.getElementById('scroll-speed-display');
        if (display) display.textContent = e.target.value + 'x';
      });
    }
  }

  startReadingSession() {
    console.log('Starting reading session...');
    this.state.readingStartTime = Date.now();
    this.state.isReading = true;
    
    // Start session timer
    this.state.sessionTimer = setInterval(() => {
      this.readerSession.sessionTime += 1;
      this.updateSessionStats();
    }, 1000);

    // Track reading analytics
    this.trackAnalytics();
  }

  renderChapterContent() {
    console.log('Rendering chapter content...');
    const contentContainer = document.getElementById('chapter-text');
    if (!contentContainer) {
      console.error('Chapter text container not found');
      return;
    }
    
    const paragraphs = this.chapterData.content.split('\n\n').filter(p => p.trim());
    console.log('Found', paragraphs.length, 'paragraphs');
    
    this.state.totalParagraphs = paragraphs.length;
    
    const htmlContent = paragraphs.map((paragraph, index) => {
      return `<p id="paragraph-${index}" data-paragraph="${index}">${this.processTextForFeatures(paragraph)}</p>`;
    }).join('');
    
    contentContainer.innerHTML = htmlContent;
    console.log('Chapter content rendered successfully');
    
    // Add paragraph hover effects
    contentContainer.querySelectorAll('p').forEach(p => {
      p.addEventListener('mouseenter', () => this.showParagraphActions(p));
      p.addEventListener('mouseleave', () => this.hideParagraphActions(p));
    });
  }

  processTextForFeatures(text) {
    // Add word-by-word spans for advanced features
    return text.split(' ').map((word, index) => {
      // Remove punctuation for double-click dictionary lookup
      const cleanWord = word.replace(/[.,!?;:'"()]/g, '');
      return `<span class="word" data-word="${cleanWord}" ondblclick="reader.lookupWord('${cleanWord}', event)">${word}</span>`;
    }).join(' ');
  }

  renderTableOfContents() {
    console.log('Rendering table of contents...');
    const tocContainer = document.getElementById('toc-list');
    if (!tocContainer) {
      console.error('TOC container not found');
      return;
    }
    
    // Generate TOC based on total chapters
    const chapters = [];
    for (let i = 1; i <= this.chapterData.totalChapters; i++) {
      chapters.push({
        number: i,
        title: i === 1 ? 'The Beginning' : 
               i === 2 ? 'Corporate Shadows' :
               i === 3 ? 'Neural Networks' :
               i === 4 ? 'Memory Fragments' :
               i === 5 ? 'Digital Dreams' :
               i === 6 ? 'Virtual Nightmares' :
               i === 7 ? 'Memory Lane' :
               i === 8 ? 'Code Breaking' :
               i === 9 ? 'Reality Check' :
               i === 10 ? 'Final Protocol' :
               `Chapter ${i}`,
        completed: i < this.chapterData.number,
        current: i === this.chapterData.number
      });
    }
    
    tocContainer.innerHTML = chapters.map(chapter => `
      <div class="toc-item ${chapter.current ? 'current' : ''}" data-chapter="${chapter.number}">
        <span class="toc-number">${chapter.number}</span>
        <span class="toc-title">${chapter.title}</span>
        <div class="toc-progress ${chapter.completed ? 'completed' : ''}">
          ${chapter.completed ? '<i class="fas fa-check"></i>' : ''}
        </div>
      </div>
    `).join('');
    
    console.log('TOC rendered successfully');
  }

  renderComments() {
    console.log('Rendering comments...');
    const commentsContainer = document.getElementById('comments-list');
    if (!commentsContainer) {
      console.error('Comments container not found');
      return;
    }
    
    commentsContainer.innerHTML = this.commentsData.map(comment => `
      <div class="comment-item" data-comment-id="${comment.id}">
        <div class="comment-header">
          <img src="${comment.avatar}" alt="${comment.username}" class="comment-avatar">
          <span class="comment-author">${comment.username}</span>
          <span class="comment-time">${this.formatTimeAgo(comment.timestamp)}</span>
        </div>
        <div class="comment-content">${comment.content}</div>
        <div class="comment-actions">
          <button class="comment-action like-btn" data-likes="${comment.likes}">
            <i class="fas fa-thumbs-up"></i>
            <span>${comment.likes}</span>
          </button>
          <button class="comment-action">
            <i class="fas fa-reply"></i>
            Reply
          </button>
          <button class="comment-action">
            <i class="fas fa-share"></i>
            Share
          </button>
        </div>
        ${comment.replies && comment.replies.length > 0 ? this.renderReplies(comment.replies) : ''}
      </div>
    `).join('');
    
    console.log('Comments rendered successfully');
  }

  renderReplies(replies) {
    return `
      <div class="replies-container" style="margin-left: 2rem; margin-top: 1rem; border-left: 2px solid var(--border-color); padding-left: 1rem;">
        ${replies.map(reply => `
          <div class="comment-item reply">
            <div class="comment-header">
              <img src="${reply.avatar}" alt="${reply.username}" class="comment-avatar">
              <span class="comment-author">${reply.username}</span>
              <span class="comment-time">${this.formatTimeAgo(reply.timestamp)}</span>
            </div>
            <div class="comment-content">${reply.content}</div>
            <div class="comment-actions">
              <button class="comment-action like-btn" data-likes="${reply.likes}">
                <i class="fas fa-thumbs-up"></i>
                <span>${reply.likes}</span>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  updateReadingProgress() {
    const chapterText = document.getElementById('chapter-text');
    if (!chapterText) return;
    
    const scrollTop = window.pageYOffset;
    const chapterRect = chapterText.getBoundingClientRect();
    const chapterHeight = chapterText.scrollHeight;
    const viewportHeight = window.innerHeight;
    
    // Calculate progress based on chapter content, not entire document
    const chapterTop = chapterText.offsetTop;
    const chapterScrolled = Math.max(0, scrollTop - chapterTop);
    const scrollableHeight = chapterHeight - viewportHeight;
    
    let scrollPercent = 0;
    if (scrollableHeight > 0) {
      scrollPercent = Math.min((chapterScrolled / scrollableHeight) * 100, 100);
    }
    
    // Update progress bar
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    if (progressFill && progressText) {
      progressFill.style.width = `${scrollPercent}%`;
      progressText.textContent = `${Math.round(scrollPercent)}%`;
    }
    
    // Update session data
    this.readerSession.completionPercentage = Math.round(scrollPercent);
    
    // Calculate words read based on scroll position
    const totalWords = this.chapterData.wordCount;
    this.readerSession.wordsRead = Math.round((scrollPercent / 100) * totalWords);
    
    // Update reading ruler position
    if (this.preferences.readingRuler) {
      this.updateReadingRuler();
    }
    
    // Track current paragraph
    this.trackCurrentParagraph();
  }

  updateReadingRuler() {
    const ruler = document.getElementById('reading-ruler');
    if (ruler) {
      const rect = this.getCurrentParagraph()?.getBoundingClientRect();
      if (rect) {
        ruler.style.top = `${rect.top + rect.height / 2}px`;
      }
    }
  }

  trackCurrentParagraph() {
    const paragraphs = document.querySelectorAll('#chapter-text p');
    let currentParagraph = 0;
    
    paragraphs.forEach((p, index) => {
      const rect = p.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentParagraph = index;
      }
    });
    
    this.state.currentParagraph = currentParagraph;
  }

  getCurrentParagraph() {
    return document.getElementById(`paragraph-${this.state.currentParagraph}`);
  }

  updateSessionStats() {
    const sessionTimeElement = document.getElementById('session-time');
    if (sessionTimeElement) {
      const minutes = Math.floor(this.readerSession.sessionTime / 60);
      const seconds = this.readerSession.sessionTime % 60;
      sessionTimeElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    
    // Calculate and update reading speed
    if (this.readerSession.sessionTime > 0) {
      const wordsPerMinute = Math.round((this.readerSession.wordsRead / this.readerSession.sessionTime) * 60);
      this.readerSession.readingSpeed = wordsPerMinute;
      
      const speedElement = document.getElementById('reading-speed');
      if (speedElement) {
        speedElement.textContent = `${wordsPerMinute} WPM`;
      }
    }
  }

  trackAnalytics() {
    // Track reading patterns, engagement, and behavior
    setInterval(() => {
      if (this.state.isReading) {
        this.saveReadingPosition();
        this.analyzeReadingPattern();
      }
    }, 5000);
  }

  saveReadingPosition() {
    const position = {
      chapterId: this.chapterData.id,
      paragraph: this.state.currentParagraph,
      scrollPosition: window.pageYOffset,
      timestamp: new Date().toISOString(),
      percentage: this.readerSession.completionPercentage
    };
    
    localStorage.setItem('readingPosition', JSON.stringify(position));
  }

  analyzeReadingPattern() {
    // Analyze reading speed variations, pause patterns, etc.
    const patterns = {
      avgSpeed: this.readerSession.readingSpeed,
      sessionLength: this.readerSession.sessionTime,
      pausePoints: this.detectPausePoints(),
      rereadSections: this.detectRereadSections()
    };
    
    // Store analytics data
    localStorage.setItem('readingPatterns', JSON.stringify(patterns));
  }

  detectPausePoints() {
    // Logic to detect where readers pause (for author insights)
    return [];
  }

  detectRereadSections() {
    // Logic to detect sections that readers go back to
    return [];
  }

  // Settings and Customization
  loadPreferences() {
    const saved = localStorage.getItem('readingPreferences');
    if (saved) {
      this.preferences = { ...this.preferences, ...JSON.parse(saved) };
    }
    this.applyPreferences();
  }

  savePreferences() {
    localStorage.setItem('readingPreferences', JSON.stringify(this.preferences));
  }

  applyPreferences() {
    const root = document.documentElement;
    
    // Apply theme
    document.body.dataset.theme = this.preferences.theme;
    
    // Apply typography
    root.style.setProperty('--reading-font-family', this.preferences.fontFamily);
    root.style.setProperty('--reading-font-size', this.preferences.fontSize + 'px');
    root.style.setProperty('--reading-line-height', this.preferences.lineHeight);
    root.style.setProperty('--reading-letter-spacing', this.preferences.letterSpacing + 'em');
    root.style.setProperty('--reading-text-align', this.preferences.textAlign);
    
    // Apply layout
    this.setTextWidth(this.preferences.textWidth);
    
    // Apply features
    if (this.preferences.focusMode) {
      document.body.classList.add('focus-mode');
    }
    
    if (this.preferences.blueLightFilter) {
      document.body.classList.add('blue-light-filter');
    }
    
    if (this.preferences.autoScroll) {
      this.startAutoScroll();
    }
  }

  updatePreference(key, value) {
    this.preferences[key] = value;
    this.savePreferences();
    this.applyPreferences();
  }

  changeTheme(theme) {
    this.updatePreference('theme', theme);
    
    // Update active theme button
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === theme);
    });
    
    this.showNotification(`Theme changed to ${theme}`);
  }

  adjustFontSize(delta) {
    const newSize = Math.max(12, Math.min(32, this.preferences.fontSize + delta));
    this.updatePreference('fontSize', newSize);
    const display = document.getElementById('font-size-display');
    if (display) display.textContent = newSize + 'px';
    
    this.showNotification(`Font size: ${newSize}px`);
  }

  changeTextWidth(width) {
    const widths = {
      narrow: '600px',
      medium: '800px',
      wide: '1000px',
      full: '100%'
    };
    
    this.updatePreference('textWidth', width);
    document.documentElement.style.setProperty('--reading-width', widths[width]);
    
    // Update active button
    document.querySelectorAll('.width-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.width === width);
    });
  }

  setTextWidth(width) {
    const widths = {
      narrow: '600px',
      medium: '800px',
      wide: '1000px',
      full: '100%'
    };
    
    document.documentElement.style.setProperty('--reading-width', widths[width]);
  }

  changeTextAlign(align) {
    this.updatePreference('textAlign', align);
    
    // Update active button
    document.querySelectorAll('.align-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.align === align);
    });
  }

  toggleAutoScroll(enabled) {
    this.updatePreference('autoScroll', enabled);
    
    const controls = document.getElementById('auto-scroll-controls');
    if (controls) {
      controls.style.display = enabled ? 'block' : 'none';
    }
    
    if (enabled) {
      this.startAutoScroll();
      document.body.classList.add('auto-scroll-active');
    } else {
      this.stopAutoScroll();
      document.body.classList.remove('auto-scroll-active');
    }
  }

  startAutoScroll() {
    if (this.state.autoScrollTimer) {
      clearInterval(this.state.autoScrollTimer);
    }
    
    const speed = this.preferences.autoScrollSpeed;
    const scrollAmount = speed * 0.5; // pixels per interval
    
    this.state.autoScrollTimer = setInterval(() => {
      window.scrollBy(0, scrollAmount);
      
      // Stop at the end
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        this.stopAutoScroll();
      }
    }, 50);
  }

  stopAutoScroll() {
    if (this.state.autoScrollTimer) {
      clearInterval(this.state.autoScrollTimer);
      this.state.autoScrollTimer = null;
    }
  }

  setupAutoScroll() {
    // Initialize auto-scroll controls
    const autoScrollCheckbox = document.getElementById('auto-scroll');
    if (autoScrollCheckbox) {
      const controls = document.getElementById('auto-scroll-controls');
      if (controls) {
        controls.style.display = this.preferences.autoScroll ? 'block' : 'none';
      }
      autoScrollCheckbox.checked = this.preferences.autoScroll;
    }
  }

  toggleFocusMode(enabled) {
    this.updatePreference('focusMode', enabled);
    document.body.classList.toggle('focus-mode', enabled);
    
    if (enabled) {
      this.showNotification('Focus mode enabled. Press ESC to exit.');
    }
  }

  toggleBlueLightFilter(enabled) {
    this.updatePreference('blueLightFilter', enabled);
    document.body.classList.toggle('blue-light-filter', enabled);
  }

  toggleReadingRuler(enabled) {
    this.updatePreference('readingRuler', enabled);
    
    const ruler = document.getElementById('reading-ruler');
    if (enabled && !ruler) {
      const newRuler = document.createElement('div');
      newRuler.className = 'reading-ruler';
      newRuler.id = 'reading-ruler';
      document.body.appendChild(newRuler);
    } else if (!enabled && ruler) {
      ruler.remove();
    }
  }

  // Panel Management
  toggleSidePanel(tab) {
    console.log('Toggling side panel:', tab);
    const panel = document.getElementById('side-panel');
    
    if (panel.classList.contains('open') && this.state.sidePanel === tab) {
      this.closeSidePanel();
    } else {
      panel.classList.add('open');
      this.switchPanelTab(tab);
      this.state.sidePanel = tab;
      this.showNotification(`Opened ${tab} panel`);
    }
  }

  closeSidePanel() {
    const panel = document.getElementById('side-panel');
    if (panel) {
      panel.classList.remove('open');
      this.state.sidePanel = null;
    }
  }

  switchPanelTab(tab) {
    console.log('Switching to panel tab:', tab);
    
    // Update tab buttons
    document.querySelectorAll('.panel-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.tab === tab);
    });
    
    // Show corresponding content
    document.querySelectorAll('.panel-content').forEach(content => {
      const shouldShow = content.id.includes(tab);
      content.classList.toggle('hidden', !shouldShow);
    });
    
    // Load content if needed
    if (tab === 'notes') {
      this.renderNotes();
    }
  }

  renderNotes() {
    console.log('Rendering notes...');
    const container = document.getElementById('notes-list');
    if (!container) {
      console.error('Notes container not found');
      return;
    }
    
    const allItems = [
      ...this.readerSession.highlights.map(h => ({...h, type: 'highlight'})),
      ...this.readerSession.notes.map(n => ({...n, type: 'note'})),
      ...this.readerSession.bookmarks.map(b => ({...b, type: 'bookmark'}))
    ].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    if (allItems.length === 0) {
      container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); font-style: italic; padding: 2rem;">No notes, highlights, or bookmarks yet. Start reading to create some!</p>';
      return;
    }
    
    container.innerHTML = allItems.map(item => `
      <div class="note-item">
        <div class="note-header">
          <span class="note-type">${item.type}</span>
          <span class="note-time">${this.formatTimeAgo(item.timestamp)}</span>
        </div>
        ${item.text ? `<div class="note-quote">"${item.text}"</div>` : ''}
        <div class="note-text">${item.content || item.label || 'Highlighted text'}</div>
      </div>
    `).join('');
  }

  toggleSettings() {
    console.log('Toggling settings panel');
    const panel = document.getElementById('settings-panel');
    if (panel) {
      panel.classList.toggle('open');
      this.state.settingsOpen = panel.classList.contains('open');
      this.showNotification(this.state.settingsOpen ? 'Settings opened' : 'Settings closed');
    } else {
      console.error('Settings panel not found');
    }
  }

  closeSettings() {
    const panel = document.getElementById('settings-panel');
    if (panel) {
      panel.classList.remove('open');
      this.state.settingsOpen = false;
    }
  }

  showAnalytics() {
    console.log('Showing analytics');
    const panel = document.getElementById('analytics-panel');
    if (panel) {
      panel.classList.remove('hidden');
      
      // Update analytics display
      const speedElement = document.getElementById('reading-speed');
      const sessionTimeElement = document.getElementById('session-time');
      const completionElement = document.getElementById('completion-rate');
      
      if (speedElement) speedElement.textContent = `${this.readerSession.readingSpeed} WPM`;
      if (sessionTimeElement) sessionTimeElement.textContent = this.formatTime(this.readerSession.sessionTime);
      if (completionElement) completionElement.textContent = `${this.readerSession.completionPercentage}%`;
      
      // Close button
      const closeBtn = panel.querySelector('.analytics-close');
      if (closeBtn) {
        closeBtn.onclick = () => {
          panel.classList.add('hidden');
        };
      }
      
      this.showNotification('Analytics panel opened');
    } else {
      console.error('Analytics panel not found');
    }
  }

  // Text Selection and Highlighting
  handleTextSelection() {
    const selection = window.getSelection();
    
    if (selection.toString().trim() !== '') {
      this.state.selectedText = selection.toString();
      this.showHighlightTooltip(selection);
    } else {
      this.hideHighlightTooltip();
    }
  }

  showHighlightTooltip(selection) {
    const tooltip = document.getElementById('highlight-tooltip');
    if (!tooltip) return;
    
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    
    tooltip.style.left = `${rect.left + rect.width / 2}px`;
    tooltip.style.top = `${rect.top - 10}px`;
    tooltip.style.transform = 'translateX(-50%) translateY(-100%)';
    tooltip.classList.remove('hidden');
    
    // Bind color selection
    tooltip.querySelectorAll('.color-btn').forEach(btn => {
      btn.onclick = () => this.highlightText(btn.dataset.color, selection);
    });
    
    // Bind actions
    const addNoteBtn = document.getElementById('add-note');
    const shareQuoteBtn = document.getElementById('share-quote');
    
    if (addNoteBtn) addNoteBtn.onclick = () => this.addNoteToSelection(selection);
    if (shareQuoteBtn) shareQuoteBtn.onclick = () => this.shareQuote(selection);
  }

  hideHighlightTooltip() {
    const tooltip = document.getElementById('highlight-tooltip');
    if (tooltip) {
      tooltip.classList.add('hidden');
    }
  }

  highlightText(color, selection) {
    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.className = `highlighted-text ${this.getColorClass(color)}`;
    
    try {
      range.surroundContents(span);
      
      // Save highlight
      const highlight = {
        id: this.generateId(),
        text: selection.toString(),
        color: color,
        position: this.getTextPosition(range),
        timestamp: new Date().toISOString(),
        note: ''
      };
      
      this.readerSession.highlights.push(highlight);
      this.saveSession();
      
      this.showNotification('Text highlighted!');
      
    } catch (e) {
      console.error('Failed to highlight text:', e);
      this.showNotification('Failed to highlight text');
    }
    
    this.hideHighlightTooltip();
    selection.removeAllRanges();
  }

  getColorClass(color) {
    const colorMap = {
      '#FFD700': 'yellow',
      '#FF6B9D': 'pink',
      '#4A90E2': 'blue',
      '#32CD32': 'green',
      '#FF6B35': 'orange'
    };
    return colorMap[color] || 'yellow';
  }

  getTextPosition(range) {
    // Calculate position within the chapter for saving/restoring highlights
    const container = document.getElementById('chapter-text');
    const walker = document.createTreeWalker(
      container,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    
    let position = 0;
    let node;
    
    while (node = walker.nextNode()) {
      if (node === range.startContainer) {
        return position + range.startOffset;
      }
      position += node.textContent.length;
    }
    
    return position;
  }

  addNoteToSelection(selection) {
    const noteText = prompt('Add a note to this selection:');
    if (noteText) {
      const note = {
        id: this.generateId(),
        text: selection.toString(),
        content: noteText,
        position: this.state.currentParagraph,
        timestamp: new Date().toISOString(),
        isPrivate: true
      };
      
      this.readerSession.notes.push(note);
      this.saveSession();
      
      this.showNotification('Note added!');
      this.renderNotes();
    }
    
    this.hideHighlightTooltip();
    selection.removeAllRanges();
  }

  shareQuote(selection) {
    const quote = selection.toString();
    const shareData = {
      title: `Quote from ${this.chapterData.novelTitle}`,
      text: `"${quote}" - ${this.chapterData.author}`,
      url: window.location.href
    };
    
    if (navigator.share) {
      navigator.share(shareData);
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(shareData.text).then(() => {
        this.showNotification('Quote copied to clipboard!');
      });
    }
    
    this.hideHighlightTooltip();
    selection.removeAllRanges();
  }

  toggleHighlightMode() {
    this.state.highlightMode = !this.state.highlightMode;
    const btn = document.getElementById('highlight-btn');
    if (btn) {
      btn.classList.toggle('active', this.state.highlightMode);
    }
    
    if (this.state.highlightMode) {
      document.body.style.cursor = 'crosshair';
      this.showNotification('Highlight mode enabled. Select text to highlight.');
    } else {
      document.body.style.cursor = 'default';
      this.showNotification('Highlight mode disabled.');
    }
  }

  // Bookmarks and Navigation
  addBookmark() {
    const bookmark = {
      id: this.generateId(),
      position: this.state.currentParagraph,
      label: prompt('Bookmark label (optional):') || `Page ${Math.round(this.readerSession.completionPercentage)}%`,
      color: '#BF40BF',
      timestamp: new Date().toISOString()
    };
    
    this.readerSession.bookmarks.push(bookmark);
    this.saveSession();
    
    // Add visual bookmark indicator
    const paragraph = this.getCurrentParagraph();
    if (paragraph && !paragraph.querySelector('.bookmark-marker')) {
      const marker = document.createElement('span');
      marker.className = 'bookmark-marker';
      marker.innerHTML = '<i class="fas fa-bookmark"></i>';
      marker.title = bookmark.label;
      paragraph.appendChild(marker);
    }
    
    this.showNotification(`Bookmark added: ${bookmark.label}`);
  }

  // Dictionary and Lookup
  lookupWord(word, event) {
    event.preventDefault();
    this.showDictionary(word, event.target);
  }

  showDictionary(word, element) {
    const popup = document.getElementById('dictionary-popup');
    if (!popup) return;
    
    const wordElement = document.getElementById('dictionary-word');
    const definitionElement = document.getElementById('dictionary-definition');
    
    // Mock dictionary lookup - in real app, this would call an API
    const definitions = {
      'neural': '<p><strong>adjective</strong> relating to a nerve or the nervous system</p><p><em>Example:</em> Neural pathways in the brain process information.</p>',
      'interface': '<p><strong>noun</strong> a point where two systems meet and interact</p><p><em>Example:</em> The user interface makes the software easy to use.</p>',
      'consciousness': '<p><strong>noun</strong> the state of being awake and aware of one\'s surroundings</p><p><em>Example:</em> She lost consciousness after the accident.</p>',
      'prototype': '<p><strong>noun</strong> a first or preliminary version of a device or vehicle from which other forms are developed</p><p><em>Example:</em> The prototype car had several experimental features.</p>',
      'terminal': '<p><strong>noun</strong> a computer terminal for inputting data</p><p><em>Example:</em> She accessed the neural interface terminal.</p>',
      'quantum': '<p><strong>adjective</strong> relating to quantum mechanics or quantum physics</p><p><em>Example:</em> Quantum processors use quantum mechanical phenomena.</p>'
    };
    
    if (wordElement) wordElement.textContent = word;
    if (definitionElement) {
      definitionElement.innerHTML = definitions[word.toLowerCase()] || '<p>Definition not found. This would typically fetch from a dictionary API.</p>';
    }
    
    // Position popup near the word
    const rect = element.getBoundingClientRect();
    popup.style.left = `${rect.left}px`;
    popup.style.top = `${rect.bottom + 10}px`;
    popup.classList.remove('hidden');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      popup.classList.add('hidden');
    }, 5000);
    
    // Close button
    const closeBtn = popup.querySelector('.dictionary-close');
    if (closeBtn) {
      closeBtn.onclick = () => {
        popup.classList.add('hidden');
      };
    }
  }

  // Social Features
  handleReaction(reaction) {
    const btn = document.querySelector(`[data-reaction="${reaction}"]`);
    if (!btn) return;
    
    const isActive = btn.classList.contains('active');
    
    // Toggle reaction
    btn.classList.toggle('active', !isActive);
    
    // Update count (mock)
    const countSpan = btn.querySelector('span');
    if (countSpan) {
      let count = parseInt(countSpan.textContent);
      count += isActive ? -1 : 1;
      countSpan.textContent = count;
    }
    
    this.showNotification(`${isActive ? 'Removed' : 'Added'} ${reaction} reaction`);
  }

  rateChapter(rating) {
    document.querySelectorAll('.star-btn').forEach((star, index) => {
      star.classList.toggle('active', index < rating);
    });
    
    this.showNotification(`Rated this chapter ${rating} star${rating !== 1 ? 's' : ''}!`);
  }

  postComment() {
    const textarea = document.getElementById('new-comment');
    if (!textarea) return;
    
    const content = textarea.value.trim();
    
    if (!content) {
      this.showNotification('Please enter a comment');
      return;
    }
    
    const newComment = {
      id: this.generateId(),
      userId: 'user1',
      username: 'You',
      avatar: 'https://via.placeholder.com/40x40/BF40BF/FFFFFF?text=Y',
      content: content,
      timestamp: new Date().toISOString(),
      likes: 0,
      replies: [],
      position: this.state.currentParagraph,
      isHighlighted: false
    };
    
    this.commentsData.unshift(newComment);
    this.renderComments();
    
    textarea.value = '';
    this.showNotification('Comment posted!');
  }

  followAuthor() {
    const btn = document.querySelector('.follow-btn');
    if (!btn) return;
    
    const isFollowing = btn.classList.contains('following');
    
    btn.classList.toggle('following', !isFollowing);
    btn.innerHTML = isFollowing ? 
      '<i class="fas fa-plus"></i> Follow' : 
      '<i class="fas fa-check"></i> Following';
    
    this.showNotification(isFollowing ? 'Unfollowed author' : 'Following Sarah Chen!');
  }

  showTipModal() {
    const modal = document.getElementById('tip-modal');
    if (!modal) return;
    
    modal.classList.remove('hidden');
    
    // Bind tip amount selection
    modal.querySelectorAll('.tip-amount').forEach(btn => {
      btn.addEventListener('click', () => {
        modal.querySelectorAll('.tip-amount').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
    
    // Bind tip submission
    const submitBtn = modal.querySelector('.tip-submit');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        const amount = modal.querySelector('.tip-amount.active')?.dataset.amount || 
                      modal.querySelector('.custom-amount')?.value;
        const message = modal.querySelector('textarea')?.value || '';
        
        if (amount) {
          this.processTip(amount, message);
          modal.classList.add('hidden');
        }
      });
    }
    
    // Close modal
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
      });
    }
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  }

  processTip(amount, message) {
    // In a real app, this would process payment
    this.showNotification(`Thank you! $${amount} tip sent to Sarah Chen!`);
  }

  // Text-to-Speech
  toggleTextToSpeech() {
    if (this.state.ttsActive) {
      this.stopTTS();
    } else {
      this.startTTS();
    }
  }

  startTTS() {
    if ('speechSynthesis' in window) {
      const textElement = document.getElementById('chapter-text');
      if (!textElement) return;
      
      const text = textElement.textContent;
      const utterance = new SpeechSynthesisUtterance(text);
      
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.voice = speechSynthesis.getVoices().find(voice => voice.lang === 'en-US');
      
      utterance.onstart = () => {
        this.state.ttsActive = true;
        const btn = document.getElementById('tts-btn');
        if (btn) btn.classList.add('active');
        this.showNotification('Text-to-speech started');
      };
      
      utterance.onend = () => {
        this.state.ttsActive = false;
        const btn = document.getElementById('tts-btn');
        if (btn) btn.classList.remove('active');
        this.showNotification('Text-to-speech finished');
      };
      
      speechSynthesis.speak(utterance);
    } else {
      this.showNotification('Text-to-speech not supported in this browser');
    }
  }

  stopTTS() {
    speechSynthesis.cancel();
    this.state.ttsActive = false;
    const btn = document.getElementById('tts-btn');
    if (btn) btn.classList.remove('active');
    this.showNotification('Text-to-speech stopped');
  }

  // Navigation
  goBack() {
    this.showNotification('Returning to book overview...');
    // In a real app, this would navigate to the book page
  }

  navigateChapter(direction) {
    const chapter = direction === 'prev' ? this.chapterData.previousChapter : this.chapterData.nextChapter;
    
    if (chapter) {
      this.showNotification(`Loading ${chapter.title}...`);
      // In a real app, this would load the new chapter
    } else {
      this.showNotification(`This is the ${direction === 'prev' ? 'first' : 'last'} chapter`);
    }
  }

  showChapterList() {
    this.toggleSidePanel('toc');
  }

  // Mobile Support
  isMobile() {
    return window.innerWidth <= 768;
  }

  setupMobileGestures() {
    let startX = 0;
    let startY = 0;
    
    document.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      
      const diffX = startX - endX;
      const diffY = startY - endY;
      
      // Horizontal swipe
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          // Swipe left - next chapter
          this.navigateChapter('next');
        } else {
          // Swipe right - previous chapter
          this.navigateChapter('prev');
        }
      }
      
      // Vertical swipe
      if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 100) {
        if (diffY > 0) {
          // Swipe up - show controls
          this.toggleSettings();
        } else {
          // Swipe down - show TOC
          this.toggleSidePanel('toc');
        }
      }
    });
  }

  // Keyboard Shortcuts
  handleKeyboardShortcuts(e) {
    // Don't trigger shortcuts when typing in inputs
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return;
    }
    
    switch(e.key) {
      case 'Escape':
        this.closeSidePanel();
        this.closeSettings();
        if (this.preferences.focusMode) {
          this.toggleFocusMode(false);
        }
        break;
      
      case 'h':
        this.toggleHighlightMode();
        break;
      
      case 'b':
        this.addBookmark();
        break;
      
      case 's':
        e.preventDefault();
        this.toggleSettings();
        break;
      
      case 't':
        this.toggleSidePanel('toc');
        break;
      
      case 'c':
        this.toggleSidePanel('comments');
        break;
      
      case 'n':
        this.toggleSidePanel('notes');
        break;
      
      case 'ArrowLeft':
        if (e.ctrlKey) {
          this.navigateChapter('prev');
        }
        break;
      
      case 'ArrowRight':
        if (e.ctrlKey) {
          this.navigateChapter('next');
        }
        break;
      
      case ' ':
        if (this.preferences.autoScroll) {
          e.preventDefault();
          this.preferences.autoScroll ? this.stopAutoScroll() : this.startAutoScroll();
        }
        break;
      
      case 'Enter':
        if (e.shiftKey) {
          this.toggleTextToSpeech();
        }
        break;
    }
  }

  // Utility Functions
  generateId() {
    return 'id_' + Math.random().toString(36).substr(2, 9);
  }

  formatTimeAgo(timestamp) {
    const now = new Date();
    const then = new Date(timestamp);
    const diff = now - then;
    
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 1) return 'just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    
    return then.toLocaleDateString();
  }

  formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    } else {
      return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
  }

  showNotification(message, duration = 3000) {
    console.log('Notification:', message);
    
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      background: var(--surface-color);
      color: var(--text-color);
      padding: 1rem 1.5rem;
      border-radius: 8px;
      border: 1px solid var(--anmol-glass-border);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      z-index: 2001;
      transform: translateX(400px);
      transition: transform 0.3s ease;
      max-width: 300px;
      font-size: 0.875rem;
      line-height: 1.4;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Animate out and remove
    setTimeout(() => {
      notification.style.transform = 'translateX(400px)';
      setTimeout(() => {
        if (notification.parentNode) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, duration);
  }

  saveSession() {
    localStorage.setItem('readerSession', JSON.stringify(this.readerSession));
  }

  showParagraphActions(paragraph) {
    // Add comment marker
    if (!paragraph.querySelector('.comment-marker')) {
      const marker = document.createElement('span');
      marker.className = 'comment-marker';
      marker.innerHTML = '<i class="fas fa-comment-plus"></i>';
      marker.onclick = () => this.addCommentToParagraph(paragraph);
      paragraph.appendChild(marker);
    }
  }

  hideParagraphActions(paragraph) {
    const marker = paragraph.querySelector('.comment-marker');
    if (marker && !marker.classList.contains('has-comments')) {
      marker.remove();
    }
  }

  addCommentToParagraph(paragraph) {
    const comment = prompt('Add a comment to this paragraph:');
    if (comment) {
      this.showNotification('Comment added to paragraph!');
      // In a real app, this would save the comment with paragraph reference
    }
  }

  shareChapter() {
    const shareData = {
      title: `${this.chapterData.title} - ${this.chapterData.novelTitle}`,
      text: `Reading "${this.chapterData.title}" by ${this.chapterData.author}. Great chapter!`,
      url: window.location.href
    };
    
    if (navigator.share) {
      navigator.share(shareData);
    } else {
      navigator.clipboard.writeText(shareData.url).then(() => {
        this.showNotification('Chapter link copied to clipboard!');
      }).catch(() => {
        this.showNotification('Failed to copy link');
      });
    }
  }
}

// Initialize the chapter reader when DOM is ready
let reader;

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing reader...');
  reader = new ChapterReader();
});

// Make reader globally available for inline event handlers
window.reader = reader;