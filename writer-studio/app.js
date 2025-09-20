// Application Data from the provided JSON
const APP_DATA = {
  currentUser: {
    id: "user2",
    name: "Sarah Chen",
    avatar: "https://via.placeholder.com/40x40/4A90E2/FFFFFF?text=SC",
    isAuthor: true,
    subscription: "Premium",
    writingStreak: 12,
    totalWords: 45000,
    novelsPublished: 1
  },
  currentProject: {
    id: "novel1",
    title: "The Digital Dreamer",
    description: "A cyberpunk tale of a hacker who discovers she can enter dreams through virtual reality.",
    genre: "Cyberpunk",
    status: "ongoing",
    coverUrl: "https://via.placeholder.com/300x450/BF40BF/FFFFFF?text=The+Digital+Dreamer",
    tags: ["AI", "Dreams", "Hacking", "Technology", "Future"],
    contentWarnings: ["Violence", "Strong Language", "Mature Themes"],
    targetAudience: "Young Adult",
    language: "English",
    createdAt: "2024-08-15",
    updatedAt: "2024-09-20",
    totalWords: 45000,
    totalChapters: 13,
    publishedChapters: 13,
    draftChapters: 2,
    averageChapterLength: 3200,
    readingStats: {
      totalViews: 12456,
      averageRating: 4.7,
      totalComments: 234,
      completionRate: 68
    }
  },
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "The First Dive",
      content: "Maya's fingers danced across the holographic keyboard, lines of code cascading like digital rain. The neural interface hummed against her temple, a gentle vibration that meant the connection was stable. Tonight was different. Tonight, she would attempt something that existed only in theoretical papers and whispered conversations in underground forums.\n\nThe dream-dive protocol.\n\n\"Are you sure about this?\" Jake's voice crackled through her earpiece, tinged with concern. Her partner had always been the cautious one, but that's what made them such a good team.\n\n\"I've run the simulations a thousand times,\" Maya replied, her eyes never leaving the streams of data flowing across her screens. \"The virtual reality matrix can interface with REM sleep patterns. If I'm right, I can literally enter someone's dreams.\"\n\nThe room fell silent except for the gentle hum of cooling fans and the distant sound of rain against the window. Neo-Tokyo never slept, its neon arteries pulsing with life even at 3 AM. Maya took a deep breath and initialized the connection.\n\nSuddenly, reality dissolved.",
      wordCount: 3200,
      status: "published",
      publishedAt: "2024-08-15",
      lastEditedAt: "2024-08-15",
      notes: "Opening chapter - establish Maya's character and the dream-diving concept. Set the cyberpunk atmosphere.",
      readingStats: {
        views: 2341,
        likes: 187,
        comments: 45
      }
    },
    {
      id: "ch2",
      number: 2,
      title: "Digital Phantoms",
      content: "Maya found herself standing in a corridor that defied physics. The walls were made of flowing data, constantly shifting between binary code and abstract geometric patterns. This was someone else's subconscious mind, rendered in digital form.\n\n\"Incredible,\" she whispered, watching as her own thoughts manifested as small floating orbs of light around her hands. \"The neural-VR interface is actually translating dream logic into navigable space.\"\n\nBut something was wrong. The dream felt too structured, too intentional. Real dreams were chaotic, full of impossible transitions and illogical narratives. This felt... designed.\n\nA figure emerged from the flowing walls—a young man with silver eyes and clothing that seemed to be cut from the fabric of cyberspace itself.\n\n\"You're not supposed to be here,\" he said, his voice echoing with digital distortion. \"The dream-web is not ready for outsiders.\"\n\nMaya's heart raced as she realized the implications. She wasn't the first to discover dream-diving. Someone else had been here long before her, and they had been busy.",
      wordCount: 2950,
      status: "published",
      publishedAt: "2024-08-17",
      lastEditedAt: "2024-08-17",
      notes: "Introduce the mystery - Maya discovers she's not alone in the dream realm. Build tension.",
      readingStats: {
        views: 2156,
        likes: 162,
        comments: 38
      }
    },
    {
      id: "ch14",
      number: 14,
      title: "Digital Revolution",
      content: "The resistance had grown beyond Maya's wildest expectations. What started as a small group of hackers and dreamers had become a global movement. Across every major city, people were waking up—literally and figuratively—to the truth about the dream manipulation conspiracy.\n\nMaya stood on the rooftop of the abandoned server farm that had become their headquarters, watching the sunrise paint Neo-Tokyo in shades of gold and crimson. Jake joined her, his arm settling around her shoulders.\n\n\"The neural network is completely dismantled,\" he reported. \"Dr. Vasquez confirmed it—no more dream harvesting, no more mind control. The corporate overlords are scrambling to cover their tracks, but it's too late. The truth is out there.\"\n\nMaya nodded, but her expression remained thoughtful. \"This is just the beginning, you know. Now that people understand the technology exists, there will be others who try to exploit it. We need to stay vigilant.\"\n\n\"Then we will,\" Jake said firmly. \"The Digital Dream Defense Network isn't going anywhere. We've proven that regular people can fight back against corporate tyranny when they work together.\"\n\nAs if summoned by their conversation, Maya's neural interface chimed with an incoming message. She smiled as she recognized the sender—a teenager from Mumbai who had just successfully detected and blocked an attempted dream intrusion in her neighborhood.\n\n\"The network is learning,\" Maya murmured. \"People are teaching each other to protect their minds. This is what real revolution looks like.\"\n\nThe dream-diving technology that had once threatened to enslave humanity had instead become the catalyst for its liberation. In learning to defend their dreams, people had discovered something far more valuable—the power of collective consciousness fighting for freedom.",
      wordCount: 3680,
      status: "draft",
      publishedAt: null,
      lastEditedAt: "2024-09-20",
      notes: "Climax chapter - resolution of the main conflict. Show the growth of the resistance and hint at future challenges. Strong ending with hope.",
      readingStats: null
    },
    {
      id: "ch15",
      number: 15,
      title: "The Dream Ends",
      content: "",
      wordCount: 0,
      status: "outline",
      publishedAt: null,
      lastEditedAt: "2024-09-18",
      notes: "Final chapter - epilogue showing Maya six months later. The world has changed. Dream-diving is regulated and used for therapy and education. Maya starts a new adventure.",
      readingStats: null
    }
  ],
  writingGoals: {
    dailyWordTarget: 1000,
    todaysWords: 650,
    weeklyStreak: 5,
    monthlyTarget: 25000,
    monthlyProgress: 18500
  },
  characters: [
    {
      name: "Maya Rodriguez",
      role: "Protagonist",
      description: "Brilliant hacker and dream architect. 28 years old, lives in Neo-Tokyo. Develops dream-diving technology.",
      traits: ["Curious", "Brave", "Tech-savvy", "Idealistic"]
    },
    {
      name: "Jake Morrison",
      role: "Supporting",
      description: "Former military cybersecurity expert. Maya's partner in crime and romance. Cautious but loyal.",
      traits: ["Protective", "Strategic", "Loyal", "Pragmatic"]
    },
    {
      name: "Dr. Elena Vasquez",
      role: "Ally",
      description: "Neuroscientist studying consciousness. Initially suspicious but becomes crucial ally.",
      traits: ["Intellectual", "Skeptical", "Determined", "Ethical"]
    }
  ],
  worldBuilding: [
    {
      element: "Neo-Tokyo 2087",
      description: "Massive cyberpunk metropolis with towering arcologies, holographic advertising, and perpetual neon-lit nights."
    },
    {
      element: "Dream-Diving Technology",
      description: "Neural interfaces that allow users to enter and manipulate human dreams through VR connections."
    },
    {
      element: "Corporate Hierarchy",
      description: "Mega-corporations control most aspects of society through data manipulation and technological dependence."
    }
  ],
  recentComments: [
    {
      chapterId: "ch1",
      userName: "CyberReader",
      comment: "The opening is so atmospheric! I can really feel the cyberpunk setting.",
      date: "2024-09-20",
      likes: 12
    },
    {
      chapterId: "ch2",
      userName: "DreamHacker",
      comment: "Plot twist! I didn't expect Maya to discover she wasn't alone in the dream realm.",
      date: "2024-09-19",
      likes: 8
    },
    {
      chapterId: "ch1",
      userName: "TechFan42",
      comment: "Love the technical details. You really know your stuff about neural interfaces!",
      date: "2024-09-18",
      likes: 15
    }
  ],
  betaReaders: [
    {
      name: "BookLover2024",
      avatar: "https://via.placeholder.com/30x30/FF6B9D/FFFFFF?text=BL",
      status: "active",
      chaptersRead: 13,
      lastFeedback: "2024-09-19"
    },
    {
      name: "SciFiFan42",
      avatar: "https://via.placeholder.com/30x30/32CD32/FFFFFF?text=SF",
      status: "active",
      chaptersRead: 10,
      lastFeedback: "2024-09-17"
    }
  ]
};

// Application State
class WriterStudioState {
  constructor() {
    this.currentProject = APP_DATA.currentProject;
    this.currentUser = APP_DATA.currentUser;
    this.chapters = APP_DATA.chapters;
    this.currentChapter = this.chapters.find(ch => ch.id === 'ch14'); // Default to current chapter
    this.activeTab = 'publishing';
    this.focusMode = false;
    this.typewriterMode = false;
    this.autoSave = true;
    this.lastSaved = new Date();
    this.unsavedChanges = false;
    
    this.init();
  }

  init() {
    this.startAutoSave();
    this.updateWordCounts();
    this.updateAutoSaveStatus();
  }

  startAutoSave() {
    if (this.autoSave) {
      setInterval(() => {
        if (this.unsavedChanges) {
          this.saveCurrentChapter();
        }
        this.updateAutoSaveStatus();
      }, 120000); // Auto-save every 2 minutes
    }
  }

  saveCurrentChapter() {
    const editor = document.getElementById('main-editor');
    const title = document.getElementById('chapter-title');
    const notes = document.getElementById('chapter-notes-input');
    
    if (this.currentChapter && editor && title) {
      this.currentChapter.content = editor.innerHTML;
      this.currentChapter.title = title.value;
      this.currentChapter.notes = notes ? notes.value : '';
      this.currentChapter.lastEditedAt = new Date().toISOString();
      this.currentChapter.wordCount = this.countWords(editor.innerText);
      
      this.lastSaved = new Date();
      this.unsavedChanges = false;
      this.updateAutoSaveStatus();
      this.updateWordCounts();
    }
  }

  updateAutoSaveStatus() {
    const autoSaveText = document.getElementById('auto-save-text');
    if (autoSaveText) {
      const timeAgo = this.getTimeAgo(this.lastSaved);
      if (this.unsavedChanges) {
        autoSaveText.innerHTML = '<i class="fas fa-circle" style="color: orange;"></i> Unsaved changes';
      } else {
        autoSaveText.innerHTML = '<i class="fas fa-check-circle" style="color: var(--color-success);"></i> Saved ' + timeAgo;
      }
    }
  }

  updateWordCounts() {
    const chapterWordCount = document.getElementById('chapter-word-count');
    const totalWordCount = document.getElementById('total-word-count');
    
    if (chapterWordCount && this.currentChapter) {
      chapterWordCount.textContent = this.formatNumber(this.currentChapter.wordCount);
    }
    
    if (totalWordCount) {
      const total = this.chapters.reduce((sum, ch) => sum + (ch.wordCount || 0), 0);
      totalWordCount.textContent = this.formatNumber(total);
    }
  }

  countWords(text) {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  }

  formatNumber(num) {
    return num.toLocaleString();
  }

  getTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    
    if (seconds < 60) return 'just now';
    if (seconds < 3600) return Math.floor(seconds / 60) + ' minutes ago';
    if (seconds < 86400) return Math.floor(seconds / 3600) + ' hours ago';
    return Math.floor(seconds / 86400) + ' days ago';
  }

  switchChapter(chapterId) {
    const newChapter = this.chapters.find(ch => ch.id === chapterId);
    if (newChapter) {
      // Save current chapter first
      this.saveCurrentChapter();
      
      // Switch to new chapter
      this.currentChapter = newChapter;
      this.loadChapterIntoEditor();
      this.updateWordCounts();
    }
  }

  loadChapterIntoEditor() {
    const editor = document.getElementById('main-editor');
    const title = document.getElementById('chapter-title');
    const notes = document.getElementById('chapter-notes-input');
    const chapterNumber = document.querySelector('.chapter-number');
    const readingTime = document.querySelector('.reading-time');
    
    if (this.currentChapter) {
      if (editor) {
        editor.innerHTML = this.currentChapter.content || '';
      }
      if (title) {
        title.value = this.currentChapter.title || '';
      }
      if (notes) {
        notes.value = this.currentChapter.notes || '';
      }
      if (chapterNumber) {
        chapterNumber.textContent = `Chapter ${this.currentChapter.number}`;
      }
      if (readingTime) {
        const readingTimeMinutes = Math.ceil(this.currentChapter.wordCount / 200);
        readingTime.textContent = `~${readingTimeMinutes} min read`;
      }
    }
  }

  addNewChapter() {
    const newChapterNumber = Math.max(...this.chapters.map(ch => ch.number), 0) + 1;
    const newChapter = {
      id: 'ch' + Date.now(),
      number: newChapterNumber,
      title: `Chapter ${newChapterNumber}`,
      content: '',
      wordCount: 0,
      status: 'outline',
      publishedAt: null,
      lastEditedAt: new Date().toISOString(),
      notes: '',
      readingStats: null
    };
    
    this.chapters.push(newChapter);
    this.switchChapter(newChapter.id);
    this.renderChapterList();
  }

  renderChapterList() {
    const chapterList = document.getElementById('chapter-list');
    if (!chapterList) return;
    
    chapterList.innerHTML = '';
    
    this.chapters.forEach(chapter => {
      const chapterItem = document.createElement('div');
      chapterItem.className = `chapter-item ${chapter.id === this.currentChapter?.id ? 'active' : ''}`;
      
      const statusClass = chapter.status === 'published' ? 'status--success' : 
                         chapter.status === 'draft' ? 'status--warning' : 'status--info';
      
      chapterItem.innerHTML = `
        <div class="chapter-info">
          <div class="chapter-title">${chapter.title}</div>
          <div class="chapter-meta">
            <span>${this.formatNumber(chapter.wordCount)} words</span>
            <span class="${statusClass}">${chapter.status}</span>
          </div>
        </div>
      `;
      
      chapterItem.addEventListener('click', () => {
        this.switchChapter(chapter.id);
        this.renderChapterList(); // Re-render to update active state
      });
      
      chapterList.appendChild(chapterItem);
    });
  }
}

// UI Controller
class UIController {
  constructor(state) {
    this.state = state;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.renderInitialData();
    this.setupEditor();
    this.setupSidebars();
  }

  setupEventListeners() {
    // Header actions
    this.setupHeaderActions();
    
    // Editor interactions
    this.setupEditorInteractions();
    
    // Sidebar interactions
    this.setupSidebarInteractions();
    
    // Modal interactions
    this.setupModalInteractions();
    
    // Keyboard shortcuts
    this.setupKeyboardShortcuts();
    
    // Mobile responsive
    this.setupResponsive();
  }

  setupHeaderActions() {
    const saveBtn = document.getElementById('save-btn');
    const previewBtn = document.getElementById('preview-btn');
    const publishBtn = document.getElementById('publish-btn');
    const settingsBtn = document.getElementById('settings-btn');

    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        this.state.saveCurrentChapter();
        this.showNotification('Chapter saved successfully!', 'success');
      });
    }

    if (previewBtn) {
      previewBtn.addEventListener('click', () => {
        this.openPreviewMode();
      });
    }

    if (publishBtn) {
      publishBtn.addEventListener('click', () => {
        this.openPublishModal();
      });
    }

    if (settingsBtn) {
      settingsBtn.addEventListener('click', () => {
        const modal = document.getElementById('settings-modal');
        if (modal) {
          modal.classList.remove('hidden');
        }
      });
    }
  }

  setupEditorInteractions() {
    const editor = document.getElementById('main-editor');
    const titleInput = document.getElementById('chapter-title');
    const notesInput = document.getElementById('chapter-notes-input');
    const focusModeBtn = document.getElementById('focus-mode-btn');
    const typewriterModeBtn = document.getElementById('typewriter-mode-btn');

    if (editor) {
      editor.addEventListener('input', () => {
        this.state.unsavedChanges = true;
        this.state.currentChapter.wordCount = this.state.countWords(editor.innerText);
        this.state.updateWordCounts();
        this.state.updateAutoSaveStatus();
      });

      editor.addEventListener('paste', (e) => {
        e.preventDefault();
        const text = e.clipboardData.getData('text/plain');
        document.execCommand('insertText', false, text);
      });
    }

    if (titleInput) {
      titleInput.addEventListener('input', () => {
        this.state.unsavedChanges = true;
        this.state.updateAutoSaveStatus();
      });
    }

    if (notesInput) {
      notesInput.addEventListener('input', () => {
        this.state.unsavedChanges = true;
        this.state.updateAutoSaveStatus();
      });
    }

    if (focusModeBtn) {
      focusModeBtn.addEventListener('click', () => {
        this.toggleFocusMode();
      });
    }

    if (typewriterModeBtn) {
      typewriterModeBtn.addEventListener('click', () => {
        this.toggleTypewriterMode();
      });
    }

    // Formatting toolbar
    document.querySelectorAll('.tool-btn[data-format]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const format = btn.getAttribute('data-format');
        this.applyFormatting(format);
      });
    });

    // Notes toggle
    const notesToggle = document.getElementById('notes-toggle');
    if (notesToggle) {
      notesToggle.addEventListener('click', () => {
        const notesSection = document.querySelector('.chapter-notes');
        const isExpanded = notesSection.style.maxHeight !== '60px';
        notesSection.style.maxHeight = isExpanded ? '60px' : '300px';
        notesToggle.innerHTML = isExpanded ? '<i class="fas fa-chevron-up"></i>' : '<i class="fas fa-chevron-down"></i>';
      });
    }
  }

  setupSidebarInteractions() {
    // Left sidebar
    const addChapterBtn = document.getElementById('add-chapter-btn');
    const searchBtn = document.getElementById('search-btn');
    const outlineToggle = document.getElementById('outline-toggle');

    if (addChapterBtn) {
      addChapterBtn.addEventListener('click', () => {
        this.state.addNewChapter();
      });
    }

    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        this.openSearchModal();
      });
    }

    if (outlineToggle) {
      outlineToggle.addEventListener('click', () => {
        this.toggleOutlineView();
      });
    }

    // Right sidebar tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');
        this.switchRightSidebarTab(tabName);
      });
    });

    // Project selector
    const projectDropdown = document.getElementById('project-dropdown');
    if (projectDropdown) {
      projectDropdown.addEventListener('change', (e) => {
        if (e.target.value === 'new') {
          this.openNovelWizard();
        }
      });
    }

    // Publishing schedule
    const schedulePublishBtn = document.getElementById('schedule-publish-btn');
    if (schedulePublishBtn) {
      schedulePublishBtn.addEventListener('click', () => {
        this.scheduleChapterPublish();
      });
    }
  }

  setupModalInteractions() {
    // Close modal handlers
    document.querySelectorAll('.modal-close').forEach(closeBtn => {
      closeBtn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        if (modal) {
          modal.classList.add('hidden');
        }
      });
    });

    // Click outside to close
    document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.add('hidden');
        }
      });
    });

    // Novel wizard
    this.setupNovelWizard();
  }

  setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + S to save
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        this.state.saveCurrentChapter();
        this.showNotification('Chapter saved!', 'success');
      }

      // Ctrl/Cmd + B for bold
      if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        this.applyFormatting('bold');
      }

      // Ctrl/Cmd + I for italic
      if ((e.ctrlKey || e.metaKey) && e.key === 'i') {
        e.preventDefault();
        this.applyFormatting('italic');
      }

      // F11 for focus mode
      if (e.key === 'F11') {
        e.preventDefault();
        this.toggleFocusMode();
      }

      // Escape to exit focus mode
      if (e.key === 'Escape' && this.state.focusMode) {
        this.toggleFocusMode();
      }
    });
  }

  setupResponsive() {
    // Mobile sidebar toggles would go here
    // For now, the CSS handles most responsive behavior
  }

  renderInitialData() {
    this.state.renderChapterList();
    this.state.loadChapterIntoEditor();
    this.renderRightSidebarContent();
    this.updateProjectInfo();
  }

  renderRightSidebarContent() {
    this.renderPublishingTab();
    this.renderStyleTab();
    this.renderAnalyticsTab();
    this.renderExportTab();
  }

  renderPublishingTab() {
    // Already rendered in HTML, could update dynamically here
  }

  renderStyleTab() {
    const characterList = document.querySelector('.character-list');
    const worldbuildingList = document.querySelector('.worldbuilding-list');

    if (characterList) {
      characterList.innerHTML = '';
      APP_DATA.characters.forEach(character => {
        const characterItem = document.createElement('div');
        characterItem.className = 'character-item';
        characterItem.innerHTML = `
          <strong>${character.name}</strong>
          <p>${character.description}</p>
        `;
        characterList.appendChild(characterItem);
      });
    }

    if (worldbuildingList) {
      worldbuildingList.innerHTML = '';
      APP_DATA.worldBuilding.forEach(element => {
        const worldItem = document.createElement('div');
        worldItem.className = 'worldbuilding-item';
        worldItem.innerHTML = `
          <strong>${element.element}</strong>
          <p>${element.description}</p>
        `;
        worldbuildingList.appendChild(worldItem);
      });
    }
  }

  renderAnalyticsTab() {
    // Update stats
    const statCards = document.querySelectorAll('.stat-card .stat-number');
    const stats = this.state.currentProject.readingStats;
    
    if (statCards.length >= 4 && stats) {
      statCards[0].textContent = this.state.formatNumber(stats.totalViews);
      statCards[1].textContent = stats.averageRating;
      statCards[2].textContent = this.state.formatNumber(stats.totalComments);
      statCards[3].textContent = stats.completionRate + '%';
    }

    // Update recent comments
    const commentsContainer = document.querySelector('.recent-comments');
    if (commentsContainer) {
      commentsContainer.innerHTML = '';
      APP_DATA.recentComments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment-preview';
        commentDiv.innerHTML = `
          <strong>${comment.userName}</strong>
          <p>"${comment.comment}"</p>
          <span class="comment-time">${this.formatDate(comment.date)}</span>
        `;
        commentsContainer.appendChild(commentDiv);
      });
    }
  }

  renderExportTab() {
    // Update beta readers list
    const betaReadersContainer = document.querySelector('.beta-readers');
    if (betaReadersContainer) {
      betaReadersContainer.innerHTML = '';
      APP_DATA.betaReaders.forEach(reader => {
        const readerDiv = document.createElement('div');
        readerDiv.className = 'beta-reader-item';
        readerDiv.innerHTML = `
          <img src="${reader.avatar}" alt="${reader.name}">
          <div class="beta-reader-info">
            <strong>${reader.name}</strong>
            <span>${reader.chaptersRead} chapters read</span>
          </div>
          <span class="status--${reader.status === 'active' ? 'success' : 'info'}">${reader.status}</span>
        `;
        betaReadersContainer.appendChild(readerDiv);
      });
    }
  }

  updateProjectInfo() {
    const projectTitle = document.getElementById('current-project-title');
    if (projectTitle) {
      projectTitle.textContent = this.state.currentProject.title;
    }

    // Update writing goals
    const goalFill = document.querySelector('.goal-fill');
    const goalText = document.querySelector('.goal-text');
    const streakDisplay = document.querySelector('.streak-display span');

    if (goalFill && goalText) {
      const progress = (APP_DATA.writingGoals.todaysWords / APP_DATA.writingGoals.dailyWordTarget) * 100;
      goalFill.style.width = `${Math.min(progress, 100)}%`;
      goalText.textContent = `${APP_DATA.writingGoals.todaysWords} / ${APP_DATA.writingGoals.dailyWordTarget} words today`;
    }

    if (streakDisplay) {
      streakDisplay.textContent = `${this.state.currentUser.writingStreak} day streak`;
    }
  }

  setupEditor() {
    const editor = document.getElementById('main-editor');
    if (!editor) return;

    // Make sure contenteditable is working
    editor.setAttribute('contenteditable', 'true');
    
    // Handle enter key for proper paragraph breaks
    editor.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        document.execCommand('insertHTML', false, '<br><br>');
      }
    });
  }

  setupSidebars() {
    // Initialize sidebar state and interactions
    this.switchRightSidebarTab('publishing');
  }

  applyFormatting(format) {
    const editor = document.getElementById('main-editor');
    if (!editor) return;

    editor.focus();
    
    switch (format) {
      case 'bold':
        document.execCommand('bold');
        break;
      case 'italic':
        document.execCommand('italic');
        break;
      case 'underline':
        document.execCommand('underline');
        break;
    }

    // Update toolbar button states
    this.updateToolbarStates();
  }

  updateToolbarStates() {
    const toolBtns = document.querySelectorAll('.tool-btn[data-format]');
    toolBtns.forEach(btn => {
      const format = btn.getAttribute('data-format');
      const isActive = document.queryCommandState(format);
      btn.classList.toggle('active', isActive);
    });
  }

  toggleFocusMode() {
    this.state.focusMode = !this.state.focusMode;
    document.body.classList.toggle('focus-mode', this.state.focusMode);
    
    const focusBtn = document.getElementById('focus-mode-btn');
    if (focusBtn) {
      focusBtn.classList.toggle('active', this.state.focusMode);
    }
  }

  toggleTypewriterMode() {
    this.state.typewriterMode = !this.state.typewriterMode;
    document.body.classList.toggle('typewriter-mode', this.state.typewriterMode);
    
    const typewriterBtn = document.getElementById('typewriter-mode-btn');
    if (typewriterBtn) {
      typewriterBtn.classList.toggle('active', this.state.typewriterMode);
    }

    if (this.state.typewriterMode) {
      this.setupTypewriterScroll();
    }
  }

  setupTypewriterScroll() {
    const editor = document.getElementById('main-editor');
    if (!editor) return;

    editor.addEventListener('input', () => {
      if (this.state.typewriterMode) {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();
          const viewportCenter = window.innerHeight / 2;
          const scrollAmount = rect.top - viewportCenter;
          
          window.scrollBy({
            top: scrollAmount,
            behavior: 'smooth'
          });
        }
      }
    });
  }

  switchRightSidebarTab(tabName) {
    this.state.activeTab = tabName;

    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    const activeTabBtn = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeTabBtn) {
      activeTabBtn.classList.add('active');
    }

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    const activeTabContent = document.getElementById(`${tabName}-tab`);
    if (activeTabContent) {
      activeTabContent.classList.add('active');
    }
  }

  toggleOutlineView() {
    const outlineView = document.getElementById('outline-view');
    const toggle = document.getElementById('outline-toggle');
    
    if (outlineView) {
      const isVisible = outlineView.style.display !== 'none';
      outlineView.style.display = isVisible ? 'none' : 'flex';
      
      if (toggle) {
        toggle.classList.toggle('active', !isVisible);
      }
    }
  }

  openNovelWizard() {
    const modal = document.getElementById('novel-wizard-modal');
    if (modal) {
      modal.classList.remove('hidden');
      this.initializeWizard();
    }
  }

  setupNovelWizard() {
    const prevBtn = document.getElementById('wizard-prev');
    const nextBtn = document.getElementById('wizard-next');
    let currentStep = 1;

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
          currentStep--;
          this.updateWizardStep(currentStep);
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentStep < 4) {
          currentStep++;
          this.updateWizardStep(currentStep);
        } else {
          // Final step - create novel
          this.createNewNovel();
        }
      });
    }

    // Tag suggestions
    document.querySelectorAll('.tag-suggestion').forEach(tag => {
      tag.addEventListener('click', () => {
        tag.classList.toggle('selected');
      });
    });
  }

  initializeWizard() {
    this.updateWizardStep(1);
  }

  updateWizardStep(step) {
    // Update step indicators
    document.querySelectorAll('.step').forEach((stepEl, index) => {
      stepEl.classList.toggle('active', index < step);
    });

    // Update step content
    document.querySelectorAll('.wizard-step').forEach((stepContent, index) => {
      stepContent.classList.toggle('active', index === step - 1);
    });

    // Update navigation buttons
    const prevBtn = document.getElementById('wizard-prev');
    const nextBtn = document.getElementById('wizard-next');

    if (prevBtn) {
      prevBtn.disabled = step === 1;
    }

    if (nextBtn) {
      nextBtn.textContent = step === 4 ? 'Create Novel' : 'Next';
    }
  }

  createNewNovel() {
    // This would create a new novel with the wizard data
    this.showNotification('Novel created successfully!', 'success');
    
    const modal = document.getElementById('novel-wizard-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  openPreviewMode() {
    this.showNotification('Preview mode would open in a new window', 'info');
  }

  openPublishModal() {
    this.showNotification('Publishing chapter...', 'info');
    
    // Simulate publishing
    setTimeout(() => {
      if (this.state.currentChapter) {
        this.state.currentChapter.status = 'published';
        this.state.currentChapter.publishedAt = new Date().toISOString();
        this.state.renderChapterList();
        this.showNotification('Chapter published successfully!', 'success');
      }
    }, 2000);
  }

  scheduleChapterPublish() {
    this.showNotification('Chapter scheduled for publishing', 'success');
  }

  openSearchModal() {
    this.showNotification('Search functionality would open here', 'info');
  }

  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
      <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation-triangle' : 'info-circle'}"></i>
      <span>${message}</span>
    `;

    // Add to page
    document.body.appendChild(notification);

    // Style notification
    Object.assign(notification.style, {
      position: 'fixed',
      top: '100px',
      right: '20px',
      background: type === 'success' ? 'var(--color-success)' : 
                  type === 'error' ? 'var(--color-error)' : 'var(--anmol-purple)',
      color: 'white',
      padding: '12px 16px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      zIndex: '2000',
      animation: 'slideInRight 0.3s ease',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
    });

    // Remove after delay
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  formatDate(dateString) {
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffTime = Math.abs(now - date);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) return '1 day ago';
      if (diffDays < 7) return `${diffDays} days ago`;
      return date.toLocaleDateString();
    } catch (e) {
      return dateString;
    }
  }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  const state = new WriterStudioState();
  const ui = new UIController(state);
  
  // Make globally available for debugging
  window.writerStudio = { state, ui };
});

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);