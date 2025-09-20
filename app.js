// Application Data
const APP_DATA = {
  "novels": [
    {
      "id": "novel1",
      "title": "The Digital Dreamer",
      "author": "Sarah Chen",
      "authorId": "user2",
      "description": "A cyberpunk tale of a hacker who discovers she can enter dreams through virtual reality.",
      "coverUrl": "https://via.placeholder.com/300x450/BF40BF/FFFFFF?text=The+Digital+Dreamer",
      "genre": "Cyberpunk",
      "status": "published",
      "createdAt": "2024-08-15",
      "updatedAt": "2024-09-20",
      "chapters": ["ch1", "ch2", "ch3"],
      "stats": {
        "views": 12456,
        "likes": 892,
        "comments": 234
      }
    },
    {
      "id": "novel2",
      "title": "Whispers in the Void",
      "author": "Marcus Rivera",
      "authorId": "user3",
      "description": "Space explorers discover an ancient alien civilization that communicates through silence.",
      "coverUrl": "https://via.placeholder.com/300x450/4A90E2/FFFFFF?text=Whispers+in+Void",
      "genre": "Space Opera",
      "status": "published",
      "createdAt": "2024-07-22",
      "updatedAt": "2024-09-19",
      "chapters": ["ch4", "ch5"],
      "stats": {
        "views": 8934,
        "likes": 567,
        "comments": 123
      }
    },
    {
      "id": "novel3",
      "title": "The Last Library",
      "author": "Elena Vasquez",
      "authorId": "user4",
      "description": "In a world where books are banned, a secret librarian fights to preserve human knowledge.",
      "coverUrl": "https://via.placeholder.com/300x450/E74C3C/FFFFFF?text=Last+Library",
      "genre": "Dystopian",
      "status": "published",
      "createdAt": "2024-06-10",
      "updatedAt": "2024-09-18",
      "chapters": ["ch6", "ch7", "ch8", "ch9"],
      "stats": {
        "views": 15678,
        "likes": 1234,
        "comments": 456
      }
    },
    {
      "id": "novel4",
      "title": "Neon Hearts",
      "author": "Alex Kim",
      "authorId": "user5",
      "description": "A romance blooming in the backstreets of a futuristic Tokyo.",
      "coverUrl": "https://via.placeholder.com/300x450/FF6B9D/FFFFFF?text=Neon+Hearts",
      "genre": "Romance",
      "status": "published",
      "createdAt": "2024-09-01",
      "updatedAt": "2024-09-20",
      "chapters": ["ch10", "ch11"],
      "stats": {
        "views": 6789,
        "likes": 445,
        "comments": 89
      }
    },
    {
      "id": "novel5",
      "title": "Code of Shadows",
      "author": "Anmol Babuani",
      "authorId": "creator",
      "description": "A thriller about a programmer who discovers a conspiracy hidden in open-source code.",
      "coverUrl": "https://via.placeholder.com/300x450/9B59B6/FFFFFF?text=Code+Shadows",
      "genre": "Thriller",
      "status": "published",
      "createdAt": "2024-05-15",
      "updatedAt": "2024-09-15",
      "chapters": ["ch12", "ch13", "ch14"],
      "stats": {
        "views": 23456,
        "likes": 1567,
        "comments": 678
      }
    }
  ],
  "chapters": [
    {
      "id": "ch1",
      "novelId": "novel1",
      "title": "The First Dive",
      "content": "Maya's fingers danced across the holographic keyboard, lines of code cascading like digital rain. The neural interface hummed against her temple, a gentle vibration that meant the connection was stable. Tonight was different. Tonight, she would attempt something that existed only in theoretical papers and whispered conversations in underground forums.\n\nThe dream-dive protocol.\n\n\"Are you sure about this?\" Jake's voice crackled through her earpiece, tinged with concern. Her partner had always been the cautious one, but that's what made them such a good team.\n\n\"I've run the simulations a thousand times,\" Maya replied, her eyes never leaving the streams of data flowing across her screens. \"The virtual reality matrix can interface with REM sleep patterns. If I'm right, I can literally enter someone's dreams.\"\n\nThe room fell silent except for the gentle hum of cooling fans and the distant sound of rain against the window. Neo-Tokyo never slept, its neon arteries pulsing with life even at 3 AM. Maya took a deep breath and initialized the connection.\n\nSuddenily, reality dissolved.",
      "chapterNumber": 1,
      "publishedAt": "2024-08-15"
    },
    {
      "id": "ch2",
      "novelId": "novel1",
      "title": "Digital Phantoms",
      "content": "Maya found herself standing in a corridor that defied physics. The walls were made of flowing data, constantly shifting between binary code and abstract geometric patterns. This was someone else's subconscious mind, rendered in digital form.\n\n\"Incredible,\" she whispered, watching as her own thoughts manifested as small floating orbs of light around her hands. \"The neural-VR interface is actually translating dream logic into navigable space.\"\n\nBut something was wrong. The dream felt too structured, too intentional. Real dreams were chaotic, full of impossible transitions and illogical narratives. This felt... designed.\n\nA figure emerged from the flowing walls—a young man with silver eyes and clothing that seemed to be cut from the fabric of cyberspace itself.\n\n\"You're not supposed to be here,\" he said, his voice echoing with digital distortion. \"The dream-web is not ready for outsiders.\"\n\nMaya's heart raced as she realized the implications. She wasn't the first to discover dream-diving. Someone else had been here long before her, and they had been busy.",
      "chapterNumber": 2,
      "publishedAt": "2024-08-20"
    },
    {
      "id": "ch12",
      "novelId": "novel5",
      "title": "The Hidden Message",
      "content": "David Chen had been staring at the same lines of code for three hours. On the surface, it was just another open-source library for image processing—nothing unusual about it. But the commit history told a different story.\n\nEvery seventh commit contained a subtle anomaly. A variable name that was one character off from the standard convention. A comment that seemed innocuous but used specific terminology that triggered his pattern recognition algorithms.\n\n\"Someone's hiding messages in plain sight,\" he muttered, pulling up his analysis tools.\n\nAs a security researcher for Nexus Corporation, David had seen his share of steganography and hidden communications. But this was different. The messages weren't just hidden in the code—they were using the version control system itself as a communication channel.\n\nHis phone buzzed with a notification. An encrypted message from an unknown sender:\n\n\"You're getting close. Meet me at the old server farm. Midnight. Come alone, and bring your findings. Trust no one at Nexus.\"\n\nDavid's blood ran cold. Someone had been watching his investigation. But were they trying to help him... or silence him?",
      "chapterNumber": 1,
      "publishedAt": "2024-05-15"
    }
  ],
  "users": [
    {
      "id": "user1",
      "displayName": "BookLover2024",
      "email": "reader@example.com",
      "joinDate": "2024-03-15",
      "library": ["novel1", "novel3", "novel5"],
      "isAuthor": false,
      "stats": {
        "chaptersRead": 156,
        "commentsMade": 23,
        "likesGiven": 89
      }
    },
    {
      "id": "user2",
      "displayName": "Sarah Chen",
      "email": "sarah@example.com",
      "joinDate": "2024-02-10",
      "library": ["novel2", "novel3"],
      "isAuthor": true,
      "stats": {
        "novelsPublished": 1,
        "totalViews": 12456,
        "followers": 234
      }
    },
    {
      "id": "creator",
      "displayName": "Anmol Babuani",
      "email": "anmol@anmolplatform.com",
      "joinDate": "2024-01-01",
      "library": [],
      "isAuthor": true,
      "stats": {
        "novelsPublished": 1,
        "totalViews": 23456,
        "followers": 567
      }
    }
  ],
  "comments": [
    {
      "id": "comment1",
      "chapterId": "ch1",
      "userId": "user1",
      "content": "This opening is incredible! The world-building feels so authentic.",
      "timestamp": "2024-09-20T10:30:00Z",
      "isAnonymous": false
    },
    {
      "id": "comment2",
      "chapterId": "ch1",
      "userId": "anonymous_123",
      "content": "I love how you've integrated the technical aspects with the narrative. Can't wait to see where this goes!",
      "timestamp": "2024-09-20T14:15:00Z",
      "isAnonymous": true
    },
    {
      "id": "comment3",
      "chapterId": "ch12",
      "userId": "user2",
      "content": "The tension in this chapter is perfect. Really builds the suspense.",
      "timestamp": "2024-09-19T20:45:00Z",
      "isAnonymous": false
    }
  ],
  "likes": [
    {
      "id": "like1",
      "chapterId": "ch1",
      "userId": "user1",
      "timestamp": "2024-09-20T10:31:00Z"
    },
    {
      "id": "like2",
      "chapterId": "ch1",
      "userId": "anonymous_456",
      "timestamp": "2024-09-20T11:22:00Z",
      "isAnonymous": true
    }
  ],
  "projects": [
    {
      "id": "anmol-platform",
      "name": "Anmol",
      "description": "Free novel publishing platform for the next generation of authors and readers",
      "technologies": ["Firebase", "JavaScript", "CSS", "HTML"],
      "featured": true,
      "logo": "https://via.placeholder.com/100x100/BF40BF/FFFFFF?text=A"
    },
    {
      "id": "code-analyzer",
      "name": "CodeAnalyzer Pro",
      "description": "AI-powered code review and security analysis tool",
      "technologies": ["Python", "TensorFlow", "React"],
      "featured": false
    },
    {
      "id": "dream-tracker",
      "name": "DreamTracker",
      "description": "Mobile app for tracking and analyzing dream patterns",
      "technologies": ["React Native", "Node.js", "MongoDB"],
      "featured": false
    }
  ]
};

// Application State
class AppState {
  constructor() {
    this.currentUser = null;
    this.currentRoute = '/';
    this.currentNovelId = null;
    this.currentChapterId = null;
    this.focusMode = false;
    this.readerSettings = {
      fontSize: 18,
      background: 'dark'
    };
    this.data = { ...APP_DATA };
    this.init();
  }

  init() {
    this.loadUser();
    this.loadReaderSettings();
  }

  loadUser() {
    const userData = localStorage.getItem('anmol_user');
    if (userData) {
      try {
        this.currentUser = JSON.parse(userData);
      } catch (e) {
        localStorage.removeItem('anmol_user');
      }
    }
  }

  saveUser() {
    if (this.currentUser) {
      localStorage.setItem('anmol_user', JSON.stringify(this.currentUser));
    } else {
      localStorage.removeItem('anmol_user');
    }
  }

  loadReaderSettings() {
    const settings = localStorage.getItem('anmol_reader_settings');
    if (settings) {
      try {
        this.readerSettings = { ...this.readerSettings, ...JSON.parse(settings) };
      } catch (e) {
        localStorage.removeItem('anmol_reader_settings');
      }
    }
  }

  saveReaderSettings() {
    localStorage.setItem('anmol_reader_settings', JSON.stringify(this.readerSettings));
  }

  login(displayName, email, isAuthor = false) {
    const userId = 'user_' + Date.now();
    this.currentUser = {
      id: userId,
      displayName,
      email,
      joinDate: new Date().toISOString().split('T')[0],
      library: [],
      isAuthor,
      stats: isAuthor ? {
        novelsPublished: 0,
        totalViews: 0,
        followers: 0
      } : {
        chaptersRead: 0,
        commentsMade: 0,
        likesGiven: 0
      }
    };
    this.saveUser();
  }

  logout() {
    this.currentUser = null;
    this.saveUser();
  }

  getAnonymousUserId() {
    let anonymousId = localStorage.getItem('anmol_anonymous_id');
    if (!anonymousId) {
      anonymousId = `anonymous_${Date.now()}`;
      localStorage.setItem('anmol_anonymous_id', anonymousId);
    }
    return anonymousId;
  }
}

// Router
class Router {
  constructor(appState) {
    this.appState = appState;
    this.routes = {
      this.routes = {
  '/': 'home-template',
  '/profile': 'profile-template',
  '/creator': 'creator-template',
  '/dashboard': 'dashboard-template',
  '/library': 'library-template',
  '/browse': 'browse-template',
  '/community': 'community-template',
  '/read': 'reader-template',
  '/about': 'about-template',
  '/404': 'notfound-template'
};
    };
    this.init();
  }

  init() {
    // Handle initial route - always start with home
    this.navigate('/', false);
  }

  navigate(path, pushState = true) {
    let route = path;
    
    // Handle reader route with parameters
    if (path.startsWith('/read/')) {
      const pathParts = path.split('/');
      if (pathParts.length >= 4) {
        route = '/read';
        this.appState.currentNovelId = pathParts[2];
        this.appState.currentChapterId = pathParts[3];
      }
    }

    // Check if route exists
    if (!this.routes[route]) {
      route = '/404';
    }

    // Check authentication requirements
    if ((route === '/profile' || route === '/dashboard') && !this.appState.currentUser) {
      this.showAuthModal();
      return;
    }

    if (route === '/dashboard' && this.appState.currentUser && !this.appState.currentUser.isAuthor) {
      route = '/profile';
    }

    this.appState.currentRoute = route;
    this.render();
  }

  render() {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });

    // Show current page
    let pageId = this.routes[this.appState.currentRoute] || 'page-404';
    const currentPage = document.getElementById(pageId);
    if (currentPage) {
      currentPage.classList.add('active');
    }

    // Update navigation
    this.updateNavigation();
    
    // Render page content
    this.renderPageContent();
  }

  updateNavigation() {
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      const route = link.getAttribute('data-route');
      link.classList.remove('active');
      if (route === this.appState.currentRoute) {
        link.classList.add('active');
      }
    });

    // Show/hide user navigation
    const navAuth = document.getElementById('nav-auth');
    const navUser = document.getElementById('nav-user');
    
    if (this.appState.currentUser) {
      navAuth.classList.add('hidden');
      navUser.classList.remove('hidden');
      document.getElementById('user-name').textContent = this.appState.currentUser.displayName;
      
      // Show/hide author-only links
      const authorLinks = document.querySelectorAll('.author-only');
      authorLinks.forEach(link => {
        if (this.appState.currentUser.isAuthor) {
          link.classList.remove('hidden');
        } else {
          link.classList.add('hidden');
        }
      });
    } else {
      navAuth.classList.remove('hidden');
      navUser.classList.add('hidden');
      
      const authorLinks = document.querySelectorAll('.author-only');
      authorLinks.forEach(link => {
        link.classList.add('hidden');
      });
    }
  }

  renderPageContent() {
    switch (this.appState.currentRoute) {
      case '/':
        this.renderHomePage();
        break;
      case '/creator':
        this.renderCreatorPage();
        break;
      case '/profile':
        this.renderProfilePage();
        break;
      case '/dashboard':
        this.renderDashboardPage();
        break;
      case '/read':
        this.renderReaderPage();
        break;
    }
  }

  renderHomePage() {
    this.renderNovelsCarousel();
    this.renderRecentUpdates();
  }

  renderNovelsCarousel() {
    const carousel = document.getElementById('novels-carousel');
    if (!carousel) return;
    
    carousel.innerHTML = '';

    this.appState.data.novels.forEach(novel => {
      const card = this.createNovelCard(novel);
      carousel.appendChild(card);
    });
  }

  createNovelCard(novel) {
    const card = document.createElement('div');
    card.className = 'novel-card';
    card.onclick = () => this.openNovel(novel);
    
    card.innerHTML = `
      <div class="novel-cover" style="background-image: url('${novel.coverUrl}')">
        <i class="fas fa-book"></i>
      </div>
      <div class="novel-info">
        <h3>${novel.title}</h3>
        <div class="novel-author">${novel.author}</div>
        <p class="novel-description">${novel.description}</p>
        <div class="novel-meta">
          <span class="novel-genre">${novel.genre}</span>
          <div class="novel-stats">
            <span class="stat-item">
              <i class="fas fa-eye"></i>
              ${this.formatNumber(novel.stats.views)}
            </span>
            <span class="stat-item">
              <i class="fas fa-heart"></i>
              ${this.formatNumber(novel.stats.likes)}
            </span>
          </div>
        </div>
      </div>
    `;

    return card;
  }

  renderRecentUpdates() {
    const updatesList = document.getElementById('updates-list');
    if (!updatesList) return;
    
    updatesList.innerHTML = '';

    // Get novels sorted by update date
    const recentNovels = [...this.appState.data.novels]
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      .slice(0, 5);

    recentNovels.forEach(novel => {
      const updateItem = document.createElement('div');
      updateItem.className = 'update-item';
      updateItem.onclick = () => this.openNovel(novel);
      
      updateItem.innerHTML = `
        <div class="update-icon">
          <i class="fas fa-book-open"></i>
        </div>
        <div class="update-content">
          <h4>${novel.title}</h4>
          <p>Updated ${this.formatDate(novel.updatedAt)} • ${novel.chapters.length} chapters</p>
        </div>
      `;

      updatesList.appendChild(updateItem);
    });
  }

  renderCreatorPage() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';

    this.appState.data.projects.forEach(project => {
      const card = document.createElement('div');
      card.className = `project-card ${project.featured ? 'featured' : ''}`;
      
      card.innerHTML = `
        <div class="project-header">
          <div class="project-logo">${project.name.charAt(0)}</div>
          <div class="project-info">
            <h3>${project.name}</h3>
          </div>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="tech-tags">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      `;

      projectsGrid.appendChild(card);
    });
  }

  renderProfilePage() {
    if (!this.appState.currentUser) return;

    const displayName = document.getElementById('profile-display-name');
    const stats = document.getElementById('profile-stats');

    if (displayName) {
      displayName.textContent = this.appState.currentUser.displayName;
    }
    
    if (stats) {
      stats.innerHTML = '';
      Object.entries(this.appState.currentUser.stats).forEach(([key, value]) => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        statItem.innerHTML = `
          <span class="stat-number">${value}</span>
          <span class="stat-label">${this.formatStatLabel(key)}</span>
        `;
        stats.appendChild(statItem);
      });
    }

    this.renderLibrary();
  }

  renderLibrary() {
    const libraryGrid = document.getElementById('library-grid');
    if (!libraryGrid) return;
    
    libraryGrid.innerHTML = '';

    if (!this.appState.currentUser || this.appState.currentUser.library.length === 0) {
      libraryGrid.innerHTML = '<p>Your library is empty. Start reading some novels!</p>';
      return;
    }

    this.appState.currentUser.library.forEach(novelId => {
      const novel = this.appState.data.novels.find(n => n.id === novelId);
      if (novel) {
        const card = this.createNovelCard(novel);
        libraryGrid.appendChild(card);
      }
    });
  }

  renderDashboardPage() {
    if (!this.appState.currentUser || !this.appState.currentUser.isAuthor) return;

    this.renderAuthorStats();
    this.renderAuthorNovels();
    this.renderCommunityComments();
  }

  renderAuthorStats() {
    const totalViews = document.getElementById('total-views');
    const totalFollowers = document.getElementById('total-followers');
    const totalChapters = document.getElementById('total-chapters');

    if (!totalViews || !totalFollowers || !totalChapters) return;

    const authorNovels = this.appState.data.novels.filter(
      novel => novel.authorId === this.appState.currentUser.id || 
               (this.appState.currentUser.id === 'creator' && novel.authorId === 'creator')
    );

    const views = authorNovels.reduce((sum, novel) => sum + novel.stats.views, 0);
    const chapters = authorNovels.reduce((sum, novel) => sum + novel.chapters.length, 0);

    this.animateCounter(totalViews, views);
    this.animateCounter(totalFollowers, this.appState.currentUser.stats.followers || 0);
    this.animateCounter(totalChapters, chapters);
  }

  renderAuthorNovels() {
    const novelsList = document.getElementById('author-novels-list');
    if (!novelsList) return;
    
    novelsList.innerHTML = '';

    const authorNovels = this.appState.data.novels.filter(
      novel => novel.authorId === this.appState.currentUser.id ||
               (this.appState.currentUser.id === 'creator' && novel.authorId === 'creator')
    );

    if (authorNovels.length === 0) {
      novelsList.innerHTML = '<p>You haven\'t published any novels yet. Click "Create New Novel" to get started!</p>';
      return;
    }

    authorNovels.forEach(novel => {
      const novelItem = document.createElement('div');
      novelItem.className = 'novel-item';
      novelItem.innerHTML = `
        <div class="novel-summary">
          <h3>${novel.title}</h3>
          <p>${novel.chapters.length} chapters • ${this.formatNumber(novel.stats.views)} views</p>
        </div>
        <div class="novel-actions">
          <button class="btn btn--outline btn--sm" onclick="window.router.openNovel({id: '${novel.id}', chapters: ${JSON.stringify(novel.chapters).replace(/"/g, '&quot;')}})">
            View
          </button>
          <button class="btn btn--primary btn--sm">
            Edit
          </button>
        </div>
      `;
      novelsList.appendChild(novelItem);
    });
  }

  renderCommunityComments() {
    const commentsModeration = document.getElementById('comments-moderation');
    if (!commentsModeration) return;
    
    commentsModeration.innerHTML = '';

    const authorChapters = [];
    this.appState.data.novels.forEach(novel => {
      if (novel.authorId === this.appState.currentUser.id || 
          (this.appState.currentUser.id === 'creator' && novel.authorId === 'creator')) {
        novel.chapters.forEach(chapterId => {
          const chapter = this.appState.data.chapters.find(c => c.id === chapterId);
          if (chapter) authorChapters.push(chapter);
        });
      }
    });

    const authorComments = this.appState.data.comments.filter(comment =>
      authorChapters.some(chapter => chapter.id === comment.chapterId)
    );

    if (authorComments.length === 0) {
      commentsModeration.innerHTML = '<p>No comments to moderate yet.</p>';
      return;
    }

    authorComments.forEach(comment => {
      const user = this.appState.data.users.find(u => u.id === comment.userId);
      const chapter = this.appState.data.chapters.find(c => c.id === comment.chapterId);
      const novel = this.appState.data.novels.find(n => n.chapters.includes(comment.chapterId));
      
      const commentItem = document.createElement('div');
      commentItem.className = 'comment-moderation-item';
      commentItem.innerHTML = `
        <div class="comment-header">
          <strong>${comment.isAnonymous ? 'Anonymous Reader' : (user ? user.displayName : 'Unknown User')}</strong>
          <span>on ${novel ? novel.title : 'Unknown Novel'} - ${chapter ? chapter.title : 'Unknown Chapter'}</span>
        </div>
        <p class="comment-content">${comment.content}</p>
        <div class="comment-actions">
          <button class="btn btn--outline btn--sm">Reply</button>
          <button class="btn btn--outline btn--sm">Delete</button>
        </div>
      `;
      commentsModeration.appendChild(commentItem);
    });
  }

  renderReaderPage() {
    if (!this.appState.currentChapterId) return;

    const chapter = this.appState.data.chapters.find(c => c.id === this.appState.currentChapterId);
    const novel = this.appState.data.novels.find(n => n.id === this.appState.currentNovelId);
    
    if (!chapter || !novel) {
      this.navigate('/');
      return;
    }

    // Update header
    const novelTitle = document.getElementById('reader-novel-title');
    const chapterTitle = document.getElementById('reader-chapter-title');
    
    if (novelTitle) novelTitle.textContent = novel.title;
    if (chapterTitle) chapterTitle.textContent = chapter.title;

    // Update content
    const chapterContent = document.getElementById('chapter-content');
    if (chapterContent) {
      chapterContent.innerHTML = chapter.content.split('\n\n').map(p => `<p>${p}</p>`).join('');
    }

    // Update navigation
    this.updateChapterNavigation(novel, chapter);

    // Update engagement
    this.updateChapterEngagement(chapter);

    // Apply reader settings
    this.applyReaderSettings();

    // Setup scroll progress
    setTimeout(() => this.setupScrollProgress(), 100);
  }

  updateChapterNavigation(novel, currentChapter) {
    const prevBtn = document.getElementById('prev-chapter-btn');
    const nextBtn = document.getElementById('next-chapter-btn');
    
    if (!prevBtn || !nextBtn) return;
    
    const currentIndex = novel.chapters.indexOf(currentChapter.id);
    
    if (currentIndex > 0) {
      prevBtn.disabled = false;
      prevBtn.onclick = () => {
        const prevChapterId = novel.chapters[currentIndex - 1];
        this.navigate(`/read/${novel.id}/${prevChapterId}`);
      };
    } else {
      prevBtn.disabled = true;
    }

    if (currentIndex < novel.chapters.length - 1) {
      nextBtn.disabled = false;
      nextBtn.onclick = () => {
        const nextChapterId = novel.chapters[currentIndex + 1];
        this.navigate(`/read/${novel.id}/${nextChapterId}`);
      };
    } else {
      nextBtn.disabled = true;
    }
  }

  updateChapterEngagement(chapter) {
    // Update like button
    const likeBtn = document.getElementById('chapter-like-btn');
    const likeCount = document.getElementById('like-count');
    
    if (!likeBtn || !likeCount) return;
    
    const likes = this.appState.data.likes.filter(like => like.chapterId === chapter.id);
    likeCount.textContent = likes.length;

    const userId = this.appState.currentUser ? this.appState.currentUser.id : this.appState.getAnonymousUserId();
    const userLiked = likes.some(like => like.userId === userId);
    
    if (userLiked) {
      likeBtn.classList.add('liked');
    } else {
      likeBtn.classList.remove('liked');
    }

    likeBtn.onclick = () => this.toggleLike(chapter.id);

    // Render comments
    this.renderChapterComments(chapter);
  }

  renderChapterComments(chapter) {
    const commentsList = document.getElementById('comments-list');
    if (!commentsList) return;
    
    commentsList.innerHTML = '';

    const chapterComments = this.appState.data.comments
      .filter(comment => comment.chapterId === chapter.id)
      .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

    if (chapterComments.length === 0) {
      commentsList.innerHTML = '<p>No comments yet. Be the first to share your thoughts!</p>';
      return;
    }

    chapterComments.forEach(comment => {
      const user = this.appState.data.users.find(u => u.id === comment.userId);
      const novel = this.appState.data.novels.find(n => n.chapters.includes(chapter.id));
      const isAuthor = user && novel && user.id === novel.authorId;
      
      const commentItem = document.createElement('div');
      commentItem.className = 'comment-item';
      commentItem.innerHTML = `
        <div class="comment-header">
          <span class="comment-author">
            ${comment.isAnonymous ? 'Anonymous Reader' : (user ? user.displayName : 'Unknown User')}
            ${isAuthor ? '<span class="author-badge">Author</span>' : ''}
          </span>
          <span class="comment-time">${this.formatDate(comment.timestamp)}</span>
        </div>
        <div class="comment-content">${comment.content}</div>
      `;
      commentsList.appendChild(commentItem);
    });
  }

  showAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  openNovel(novel) {
    if (!novel.chapters || novel.chapters.length === 0) return;
    
    const firstChapter = novel.chapters[0];
    this.navigate(`/read/${novel.id}/${firstChapter}`);
  }

  toggleLike(chapterId) {
    const userId = this.appState.currentUser ? this.appState.currentUser.id : this.appState.getAnonymousUserId();
    const existingLike = this.appState.data.likes.find(
      like => like.chapterId === chapterId && like.userId === userId
    );

    if (existingLike) {
      // Remove like
      this.appState.data.likes = this.appState.data.likes.filter(like => like.id !== existingLike.id);
    } else {
      // Add like
      const newLike = {
        id: 'like_' + Date.now(),
        chapterId,
        userId,
        timestamp: new Date().toISOString(),
        isAnonymous: !this.appState.currentUser
      };
      this.appState.data.likes.push(newLike);
    }

    // Update UI
    const chapter = this.appState.data.chapters.find(c => c.id === chapterId);
    if (chapter) {
      this.updateChapterEngagement(chapter);
    }
  }

  addComment(chapterId, content) {
    const userId = this.appState.currentUser ? this.appState.currentUser.id : this.appState.getAnonymousUserId();
    const newComment = {
      id: 'comment_' + Date.now(),
      chapterId,
      userId,
      content,
      timestamp: new Date().toISOString(),
      isAnonymous: !this.appState.currentUser
    };

    this.appState.data.comments.push(newComment);

    // Update UI
    const chapter = this.appState.data.chapters.find(c => c.id === chapterId);
    if (chapter) {
      this.renderChapterComments(chapter);
    }

    // Clear input
    const commentInput = document.getElementById('comment-input');
    if (commentInput) {
      commentInput.value = '';
    }
  }

  setupScrollProgress() {
    const progressBar = document.getElementById('reading-progress');
    
    if (!progressBar) return;

    const updateProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollTop / Math.max(scrollHeight, 1)) * 100, 100);
      progressBar.style.width = `${progress}%`;
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial call
  }

  applyReaderSettings() {
    const readingPane = document.querySelector('.reading-pane');
    if (readingPane) {
      readingPane.style.fontSize = `${this.appState.readerSettings.fontSize}px`;
    }

    // Apply background theme
    document.body.classList.remove('light-mode', 'dark-mode', 'sepia-mode');
    document.body.classList.add(`${this.appState.readerSettings.background}-mode`);
  }

  formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  }

  formatDate(dateString) {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    } catch (e) {
      return dateString;
    }
  }

  formatStatLabel(key) {
    const labels = {
      chaptersRead: 'Chapters Read',
      commentsMade: 'Comments Made',
      likesGiven: 'Likes Given',
      novelsPublished: 'Novels Published',
      totalViews: 'Total Views',
      followers: 'Followers'
    };
    return labels[key] || key;
  }

  animateCounter(element, target) {
    if (!element) return;
    
    let current = 0;
    const increment = Math.max(target / 50, 1);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 20);
  }
}

// Global variables
let router;
let appState;

// App initialization
document.addEventListener('DOMContentLoaded', () => {
  // Hide loading screen
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('hidden');
    }
  }, 1500);

  // Initialize app
  appState = new AppState();
  router = new Router(appState);
  
  // Make router globally available
  window.router = router;
  window.appState = appState;

  // Setup event listeners
  setupEventListeners();
});

function setupEventListeners() {
  // Navigation links
  document.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-route')) {
      e.preventDefault();
      const route = e.target.getAttribute('data-route');
      router.navigate(route);
    }
  });

  // Auth modal
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const closeAuthModal = document.getElementById('close-auth-modal');
  const authForm = document.getElementById('auth-form');
  const logoutBtn = document.getElementById('logout-btn');

  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      document.getElementById('auth-modal-title').textContent = 'Sign In';
      document.getElementById('auth-submit-btn').textContent = 'Sign In';
      router.showAuthModal();
    });
  }

  if (signupBtn) {
    signupBtn.addEventListener('click', () => {
      document.getElementById('auth-modal-title').textContent = 'Sign Up';
      document.getElementById('auth-submit-btn').textContent = 'Sign Up';
      router.showAuthModal();
    });
  }

  if (closeAuthModal) {
    closeAuthModal.addEventListener('click', () => {
      document.getElementById('auth-modal').classList.add('hidden');
    });
  }

  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const displayName = document.getElementById('auth-display-name').value;
      const email = document.getElementById('auth-email').value;
      const isAuthor = document.getElementById('is-author-checkbox').checked;
      
      appState.login(displayName, email, isAuthor);
      document.getElementById('auth-modal').classList.add('hidden');
      router.updateNavigation();
      
      // Reset form
      authForm.reset();
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      appState.logout();
      router.navigate('/');
    });
  }

  // Hero buttons
  const startReadingBtn = document.getElementById('start-reading-btn');
  const publishStoryBtn = document.getElementById('publish-story-btn');

  if (startReadingBtn) {
    startReadingBtn.addEventListener('click', () => {
      const featuredSection = document.querySelector('.featured-novels');
      if (featuredSection) {
        featuredSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (publishStoryBtn) {
    publishStoryBtn.addEventListener('click', () => {
      if (appState.currentUser && appState.currentUser.isAuthor) {
        router.navigate('/dashboard');
      } else {
        router.showAuthModal();
      }
    });
  }

  // Dashboard tabs
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('sidebar-btn')) {
      const tabName = e.target.getAttribute('data-tab');
      if (tabName) {
        showDashboardTab(tabName);
      }
    }
  });

  // Library filters
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('pill')) {
      document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
    }
  });

  // Reader controls
  const readerBackBtn = document.getElementById('reader-back-btn');
  const focusModeBtn = document.getElementById('focus-mode-btn');
  const settingsBtn = document.getElementById('settings-btn');
  const closeSettingsModal = document.getElementById('close-settings-modal');

  if (readerBackBtn) {
    readerBackBtn.addEventListener('click', () => {
      router.navigate('/');
    });
  }

  if (focusModeBtn) {
    focusModeBtn.addEventListener('click', () => {
      appState.focusMode = !appState.focusMode;
      document.body.classList.toggle('focus-mode', appState.focusMode);
    });
  }

  if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
      const modal = document.getElementById('reader-settings-modal');
      if (modal) {
        modal.classList.remove('hidden');
      }
    });
  }

  if (closeSettingsModal) {
    closeSettingsModal.addEventListener('click', () => {
      document.getElementById('reader-settings-modal').classList.add('hidden');
    });
  }

  // Reader settings
  const decreaseFontBtn = document.getElementById('decrease-font');
  const increaseFontBtn = document.getElementById('increase-font');

  if (decreaseFontBtn) {
    decreaseFontBtn.addEventListener('click', () => {
      if (appState.readerSettings.fontSize > 12) {
        appState.readerSettings.fontSize -= 2;
        updateFontSizeDisplay();
        router.applyReaderSettings();
        appState.saveReaderSettings();
      }
    });
  }

  if (increaseFontBtn) {
    increaseFontBtn.addEventListener('click', () => {
      if (appState.readerSettings.fontSize < 24) {
        appState.readerSettings.fontSize += 2;
        updateFontSizeDisplay();
        router.applyReaderSettings();
        appState.saveReaderSettings();
      }
    });
  }

  document.querySelectorAll('.bg-option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.bg-option').forEach(o => o.classList.remove('active'));
      option.classList.add('active');
      appState.readerSettings.background = option.getAttribute('data-bg');
      router.applyReaderSettings();
      appState.saveReaderSettings();
    });
  });

  // Comment submission
  const submitCommentBtn = document.getElementById('submit-comment-btn');
  if (submitCommentBtn) {
    submitCommentBtn.addEventListener('click', () => {
      const content = document.getElementById('comment-input').value.trim();
      if (content && appState.currentChapterId) {
        router.addComment(appState.currentChapterId, content);
      }
    });
  }

  // Create novel button
  const createNovelBtn = document.getElementById('create-novel-btn');
  if (createNovelBtn) {
    createNovelBtn.addEventListener('click', () => {
      alert('Novel creation feature coming soon!');
    });
  }

  // Modal background click to close
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.classList.add('hidden');
    }
  });
}

function showDashboardTab(tabName) {
  // Update sidebar buttons
  document.querySelectorAll('.sidebar-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.querySelector(`[data-tab="${tabName}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }

  // Update tab content
  document.querySelectorAll('.dashboard-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  const activeTab = document.getElementById(`dashboard-${tabName}`);
  if (activeTab) {
    activeTab.classList.add('active');
  }

  // Refresh content based on tab
  if (tabName === 'overview') {
    router.renderAuthorStats();
  } else if (tabName === 'novels') {
    router.renderAuthorNovels();
  } else if (tabName === 'community') {
    router.renderCommunityComments();
  }
}

function updateFontSizeDisplay() {
  const display = document.getElementById('font-size-display');
  if (display) {
    display.textContent = `${appState.readerSettings.fontSize}px`;
  }
}

// Auto-hide reader header on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  if (appState && appState.currentRoute === '/read') {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.getElementById('reader-header');
    
    if (header && currentScrollTop > lastScrollTop && currentScrollTop > 100) {
      header.classList.add('hidden');
    } else if (header) {
      header.classList.remove('hidden');
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }
});
