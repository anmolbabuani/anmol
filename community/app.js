// Community Hub Application Data
const COMMUNITY_DATA = {
  "communityStats": {
    "totalMembers": 15847,
    "activeDiscussions": 342,
    "novelsDiscussedToday": 89,
    "onlineNow": 1253,
    "totalChallenges": 28,
    "completedChallenges": 156
  },
  "currentUser": {
    "id": "user1",
    "name": "BookLover2024",
    "avatar": "https://via.placeholder.com/40x40/FF6B9D/FFFFFF?text=BL",
    "level": "Avid Reader",
    "points": 2340,
    "badges": ["First Post", "Challenge Completer", "Helpful Contributor"],
    "following": 23,
    "followers": 67,
    "joinedDate": "2024-03-15",
    "readingStreak": 45,
    "completedChallenges": 3
  },
  "trendingTopics": [
    "#CyberpunkSeptember",
    "#NewAuthors2024", 
    "#RomanceReads",
    "#WritingTips",
    "#BookClubPicks"
  ],
  "discussions": [
    {
      "id": "disc1",
      "title": "The Digital Dreamer - Chapter 13 Discussion (SPOILERS)",
      "author": {
        "name": "CyberReader",
        "avatar": "https://via.placeholder.com/40x40/9B59B6/FFFFFF?text=CR",
        "level": "Literary Expert"
      },
      "category": "Novel Discussion",
      "replies": 47,
      "views": 892,
      "lastActivity": "5 minutes ago",
      "lastReply": {
        "author": "DreamHacker",
        "time": "5 minutes ago"
      },
      "tags": ["The Digital Dreamer", "Cyberpunk", "Spoilers"],
      "isPinned": true,
      "votes": 23
    },
    {
      "id": "disc2", 
      "title": "Best cyberpunk novels for beginners?",
      "author": {
        "name": "NewReader99",
        "avatar": "https://via.placeholder.com/40x40/32CD32/FFFFFF?text=NR",
        "level": "New Reader"
      },
      "category": "Recommendations",
      "replies": 31,
      "views": 445,
      "lastActivity": "12 minutes ago",
      "lastReply": {
        "author": "SciFiFan42",
        "time": "12 minutes ago"
      },
      "tags": ["Cyberpunk", "Beginners", "Recommendations"],
      "isPinned": false,
      "votes": 15
    },
    {
      "id": "disc3",
      "title": "Sarah Chen AMA - Ask me about The Digital Dreamer!",
      "author": {
        "name": "Sarah Chen",
        "avatar": "https://via.placeholder.com/40x40/4A90E2/FFFFFF?text=SC",
        "level": "Featured Author",
        "isAuthor": true
      },
      "category": "Author AMA",
      "replies": 156,
      "views": 2341,
      "lastActivity": "23 minutes ago",
      "lastReply": {
        "author": "TechFan42",
        "time": "23 minutes ago"
      },
      "tags": ["AMA", "Sarah Chen", "Digital Dreamer"],
      "isPinned": true,
      "votes": 89
    },
    {
      "id": "disc4",
      "title": "Writing realistic tech in sci-fi novels",
      "author": {
        "name": "WriterInProgress",
        "avatar": "https://via.placeholder.com/40x40/FFA500/FFFFFF?text=WP",
        "level": "Community Champion"
      },
      "category": "Writing Tips",
      "replies": 22,
      "views": 334,
      "lastActivity": "1 hour ago",
      "lastReply": {
        "author": "TechReader",
        "time": "1 hour ago"
      },
      "tags": ["Writing", "Sci-Fi", "Technology"],
      "isPinned": false,
      "votes": 31
    }
  ],
  "readingChallenges": [
    {
      "id": "challenge1",
      "title": "Cyberpunk September",
      "description": "Read 3 cyberpunk novels this September and explore the future of technology and society",
      "type": "monthly",
      "goal": 3,
      "progress": 2,
      "participants": 847,
      "endDate": "2024-09-30",
      "reward": "Cyberpunk Explorer Badge",
      "books": [
        {
          "title": "The Digital Dreamer",
          "author": "Sarah Chen",
          "completed": true
        },
        {
          "title": "Midnight Protocol", 
          "author": "Zara Al-Rashid",
          "completed": true
        },
        {
          "title": "Neural Storm",
          "author": "Kim Zhao",
          "completed": false
        }
      ]
    },
    {
      "id": "challenge2",
      "title": "New Voices Challenge",
      "description": "Discover 5 debut authors and support emerging talent",
      "type": "ongoing",
      "goal": 5,
      "progress": 1,
      "participants": 567,
      "endDate": null,
      "reward": "Talent Scout Badge"
    }
  ],
  "bookClubs": [
    {
      "id": "club1",
      "name": "Cyberpunk Collective",
      "description": "Exploring the intersection of technology and humanity through cyberpunk literature",
      "members": 234,
      "currentBook": {
        "title": "The Digital Dreamer",
        "author": "Sarah Chen",
        "coverUrl": "https://via.placeholder.com/100x150/BF40BF/FFFFFF?text=Digital+Dreamer"
      },
      "nextMeeting": "September 25, 2024",
      "isJoined": true
    },
    {
      "id": "club2",
      "name": "Romance Readers Unite",
      "description": "Celebrating love stories in all their forms across genres",
      "members": 456,
      "currentBook": {
        "title": "Neon Hearts",
        "author": "Alex Kim",
        "coverUrl": "https://via.placeholder.com/100x150/FF6B9D/FFFFFF?text=Neon+Hearts"
      },
      "nextMeeting": "September 22, 2024",
      "isJoined": false
    },
    {
      "id": "club3",
      "name": "Indie Author Spotlight",
      "description": "Supporting and discussing works by independent authors on the platform",
      "members": 189,
      "currentBook": {
        "title": "Whispers in the Void",
        "author": "Marcus Rivera", 
        "coverUrl": "https://via.placeholder.com/100x150/4A90E2/FFFFFF?text=Whispers+Void"
      },
      "nextMeeting": "September 28, 2024",
      "isJoined": false
    }
  ],
  "authorSpotlight": {
    "name": "Sarah Chen",
    "avatar": "https://via.placeholder.com/80x80/4A90E2/FFFFFF?text=SC",
    "bio": "Software engineer turned novelist bringing authentic tech experiences to cyberpunk fiction",
    "worksCount": 1,
    "followers": 2341,
    "upcomingAMA": "September 23, 2024 at 7 PM EST",
    "recentWork": {
      "title": "The Digital Dreamer",
      "rating": 4.7,
      "views": 12456
    }
  },
  "communityPicks": [
    {
      "id": "pick1",
      "title": "The Digital Dreamer",
      "author": "Sarah Chen",
      "coverUrl": "https://via.placeholder.com/120x180/BF40BF/FFFFFF?text=Digital+Dreamer",
      "rating": 4.7,
      "votes": 234,
      "reason": "Incredible world-building and authentic tech details"
    },
    {
      "id": "pick2", 
      "title": "The Last Library",
      "author": "Elena Vasquez",
      "coverUrl": "https://via.placeholder.com/120x180/E74C3C/FFFFFF?text=Last+Library",
      "rating": 4.9,
      "votes": 456,
      "reason": "Powerful message about the importance of knowledge and freedom"
    },
    {
      "id": "pick3",
      "title": "Songs of the Star Weavers", 
      "author": "Kenji Nakamura",
      "coverUrl": "https://via.placeholder.com/120x180/FFD700/000000?text=Star+Weavers",
      "rating": 4.7,
      "votes": 187,
      "reason": "Epic fantasy with a unique magic system based on music"
    }
  ],
  "activeUsers": [
    {
      "name": "CyberReader",
      "avatar": "https://via.placeholder.com/30x30/9B59B6/FFFFFF?text=CR",
      "status": "Reading The Digital Dreamer Ch. 14"
    },
    {
      "name": "DreamHacker", 
      "avatar": "https://via.placeholder.com/30x30/E74C3C/FFFFFF?text=DH",
      "status": "In discussion about cyberpunk themes"
    },
    {
      "name": "SciFiFan42",
      "avatar": "https://via.placeholder.com/30x30/32CD32/FFFFFF?text=SF",
      "status": "Participating in New Voices Challenge"
    },
    {
      "name": "WriterInProgress",
      "avatar": "https://via.placeholder.com/30x30/FFA500/FFFFFF?text=WP", 
      "status": "Writing new chapter"
    }
  ],
  "upcomingEvents": [
    {
      "id": "event1",
      "title": "Sarah Chen AMA",
      "date": "Sept 23, 7 PM EST",
      "type": "Author Event",
      "participants": 234
    },
    {
      "id": "event2",
      "title": "Cyberpunk Book Club Meeting",
      "date": "Sept 25, 6 PM EST", 
      "type": "Book Club",
      "participants": 45
    },
    {
      "id": "event3",
      "title": "October Reading Challenge Launch",
      "date": "Oct 1, 12 PM EST",
      "type": "Challenge",
      "participants": 0
    }
  ],
  "achievements": [
    {
      "id": "first_post",
      "name": "First Post",
      "description": "Made your first community post",
      "icon": "fas fa-comment",
      "rarity": "common"
    },
    {
      "id": "challenge_completer",
      "name": "Challenge Completer", 
      "description": "Completed your first reading challenge",
      "icon": "fas fa-trophy",
      "rarity": "uncommon"
    },
    {
      "id": "helpful_contributor",
      "name": "Helpful Contributor",
      "description": "Received 50+ upvotes on your posts",
      "icon": "fas fa-thumbs-up",
      "rarity": "rare"
    },
    {
      "id": "cyberpunk_explorer", 
      "name": "Cyberpunk Explorer",
      "description": "Completed the Cyberpunk September challenge",
      "icon": "fas fa-robot",
      "rarity": "special"
    }
  ]
};

// Application State Management
class CommunityApp {
  constructor() {
    this.data = COMMUNITY_DATA;
    this.currentTab = 'discussions';
    this.currentSubTab = 'spotlight';
    this.selectedCategory = 'all';
    this.searchQuery = '';
    this.userVotes = new Set();
    this.userFollowing = new Set();
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.animateStats();
    this.renderCurrentTab();
    this.renderSidebar();
    this.startRealTimeUpdates();
  }

  setupEventListeners() {
    // Tab navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.target.closest('.tab-btn').getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    // Sub-tab navigation
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('sub-tab-btn')) {
        const subtab = e.target.getAttribute('data-subtab');
        this.switchSubTab(subtab);
      }
    });

    // Category filtering
    document.querySelectorAll('.category-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        const category = e.target.getAttribute('data-category');
        this.filterByCategory(category);
      });
    });

    // Search functionality
    const searchInput = document.getElementById('discussion-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase();
        this.renderDiscussions();
      });
    }

    // Modal handling
    this.setupModalEvents();

    // Hero action buttons
    this.setupHeroActions();

    // Achievement system
    this.setupAchievements();
  }

  setupModalEvents() {
    const newDiscussionBtn = document.getElementById('new-discussion-btn');
    const startDiscussionBtn = document.getElementById('start-discussion-btn');
    const closeModal = document.getElementById('close-discussion-modal');
    const cancelBtn = document.getElementById('cancel-discussion');
    const modal = document.getElementById('new-discussion-modal');
    const form = document.getElementById('new-discussion-form');

    [newDiscussionBtn, startDiscussionBtn].forEach(btn => {
      if (btn) {
        btn.addEventListener('click', () => {
          modal.classList.remove('hidden');
        });
      }
    });

    [closeModal, cancelBtn].forEach(btn => {
      if (btn) {
        btn.addEventListener('click', () => {
          modal.classList.add('hidden');
          form.reset();
        });
      }
    });

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.createNewDiscussion();
      });
    }

    // Close modal when clicking backdrop
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.add('hidden');
          form.reset();
        }
      });
    }
  }

  setupHeroActions() {
    const joinChallengeBtn = document.getElementById('join-challenge-btn');
    const browseTopicsBtn = document.getElementById('browse-topics-btn');

    if (joinChallengeBtn) {
      joinChallengeBtn.addEventListener('click', () => {
        this.switchTab('challenges');
      });
    }

    if (browseTopicsBtn) {
      browseTopicsBtn.addEventListener('click', () => {
        const searchInput = document.getElementById('discussion-search');
        if (searchInput) {
          searchInput.focus();
        }
      });
    }
  }

  setupAchievements() {
    // Simulate achievement unlocks
    setTimeout(() => {
      this.unlockAchievement('first_post');
    }, 5000);
  }

  switchTab(tab) {
    this.currentTab = tab;

    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(`${tab}-tab`).classList.add('active');

    this.renderCurrentTab();
  }

  switchSubTab(subtab) {
    this.currentSubTab = subtab;

    // Update sub-tab buttons
    document.querySelectorAll('.sub-tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector(`[data-subtab="${subtab}"]`).classList.add('active');

    this.renderAuthorContent();
  }

  filterByCategory(category) {
    this.selectedCategory = category;

    // Update category pills
    document.querySelectorAll('.category-pill').forEach(pill => {
      pill.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');

    this.renderDiscussions();
  }

  renderCurrentTab() {
    switch (this.currentTab) {
      case 'discussions':
        this.renderDiscussions();
        break;
      case 'challenges':
        this.renderChallenges();
        break;
      case 'authors':
        this.renderAuthorContent();
        break;
      case 'bookclubs':
        this.renderBookClubs();
        break;
      case 'recommendations':
        this.renderRecommendations();
        break;
    }
  }

  renderDiscussions() {
    const container = document.getElementById('discussions-list');
    if (!container) return;

    let discussions = this.data.discussions;

    // Filter by category
    if (this.selectedCategory !== 'all') {
      const categoryMap = {
        'novel-discussion': 'Novel Discussion',
        'recommendations': 'Recommendations',
        'writing-tips': 'Writing Tips',
        'author-ama': 'Author AMA'
      };
      discussions = discussions.filter(d => d.category === categoryMap[this.selectedCategory]);
    }

    // Filter by search query
    if (this.searchQuery) {
      discussions = discussions.filter(d => 
        d.title.toLowerCase().includes(this.searchQuery) ||
        d.tags.some(tag => tag.toLowerCase().includes(this.searchQuery))
      );
    }

    // Sort by pinned first, then by activity
    discussions.sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return new Date(b.lastActivity) - new Date(a.lastActivity);
    });

    container.innerHTML = '';

    discussions.forEach(discussion => {
      const discussionEl = this.createDiscussionElement(discussion);
      container.appendChild(discussionEl);
    });

    if (discussions.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem; color: var(--color-text-secondary);">
          <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
          <h3>No discussions found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      `;
    }
  }

  createDiscussionElement(discussion) {
    const div = document.createElement('div');
    div.className = `discussion-item ${discussion.isPinned ? 'pinned' : ''}`;
    div.onclick = () => this.openDiscussion(discussion.id);

    div.innerHTML = `
      <div class="discussion-header">
        <div>
          <h3 class="discussion-title">
            ${discussion.isPinned ? '<i class="fas fa-thumbtack" style="color: var(--anmol-purple); margin-right: 0.5rem;"></i>' : ''}
            ${discussion.title}
          </h3>
          <div class="discussion-meta">
            <div class="author-info">
              <img src="${discussion.author.avatar}" alt="${discussion.author.name}" class="author-avatar">
              <span>${discussion.author.name}</span>
              <span class="author-level">${discussion.author.level}</span>
              ${discussion.author.isAuthor ? '<i class="fas fa-crown" style="color: #ffd700; margin-left: 0.25rem;" title="Author"></i>' : ''}
            </div>
            <span>•</span>
            <span>${discussion.category}</span>
            <span>•</span>
            <span>${discussion.lastActivity}</span>
          </div>
        </div>
        <div class="discussion-stats">
          <div class="stat">
            <i class="fas fa-thumbs-up"></i>
            <span>${discussion.votes}</span>
          </div>
          <div class="stat">
            <i class="fas fa-comment"></i>
            <span>${discussion.replies}</span>
          </div>
          <div class="stat">
            <i class="fas fa-eye"></i>
            <span>${discussion.views}</span>
          </div>
        </div>
      </div>
      <div class="discussion-tags">
        ${discussion.tags.map(tag => `<span class="discussion-tag">${tag}</span>`).join('')}
      </div>
    `;

    return div;
  }

  renderChallenges() {
    const container = document.getElementById('challenges-grid');
    if (!container) return;

    container.innerHTML = '';

    this.data.readingChallenges.forEach(challenge => {
      const challengeEl = this.createChallengeElement(challenge);
      container.appendChild(challengeEl);
    });
  }

  createChallengeElement(challenge) {
    const div = document.createElement('div');
    div.className = 'challenge-card';

    const progressPercent = Math.round((challenge.progress / challenge.goal) * 100);
    const isJoined = challenge.id === 'challenge1'; // User has joined the first challenge

    div.innerHTML = `
      <div class="challenge-header">
        <div>
          <h3 class="challenge-title">${challenge.title}</h3>
          <p class="challenge-description">${challenge.description}</p>
        </div>
        <span class="challenge-type">${challenge.type}</span>
      </div>
      
      <div class="challenge-progress">
        <div class="progress-header">
          <span class="progress-text">Progress: ${challenge.progress}/${challenge.goal}</span>
          <span class="progress-text">${progressPercent}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progressPercent}%"></div>
        </div>
      </div>

      <div class="challenge-stats">
        <span class="challenge-participants">
          <i class="fas fa-users"></i>
          ${challenge.participants} participants
        </span>
        <div class="challenge-reward">
          <i class="fas fa-trophy"></i>
          ${challenge.reward}
        </div>
      </div>

      <div class="challenge-actions">
        <button class="btn ${isJoined ? 'btn--outline' : 'btn--primary'}" onclick="communityApp.${isJoined ? 'leaveChallenge' : 'joinChallenge'}('${challenge.id}')">
          <i class="fas ${isJoined ? 'fa-check' : 'fa-plus'}"></i>
          ${isJoined ? 'Joined' : 'Join Challenge'}
        </button>
        <button class="btn btn--outline" onclick="communityApp.viewChallengeDetails('${challenge.id}')">
          <i class="fas fa-info-circle"></i>
          Details
        </button>
      </div>
    `;

    return div;
  }

  renderAuthorContent() {
    const container = document.getElementById('author-content');
    if (!container) return;

    switch (this.currentSubTab) {
      case 'spotlight':
        this.renderAuthorSpotlight(container);
        break;
      case 'amas':
        this.renderUpcomingAMAs(container);
        break;
      case 'tips':
        this.renderWritingTips(container);
        break;
      case 'beta':
        this.renderBetaReaders(container);
        break;
    }
  }

  renderAuthorSpotlight(container) {
    const author = this.data.authorSpotlight;
    container.innerHTML = `
      <div class="author-spotlight">
        <div class="spotlight-card" style="background: var(--anmol-glass); backdrop-filter: blur(20px); border: 1px solid var(--anmol-glass-border); border-radius: 16px; padding: 2rem;">
          <div class="spotlight-header" style="display: flex; align-items: center; gap: 2rem; margin-bottom: 2rem;">
            <img src="${author.avatar}" alt="${author.name}" style="width: 100px; height: 100px; border-radius: 50%; border: 3px solid var(--anmol-purple);">
            <div>
              <h3 style="font-size: 2rem; margin: 0 0 0.5rem 0; color: var(--color-text);">${author.name}</h3>
              <p style="color: var(--anmol-purple); margin: 0 0 1rem 0; font-size: 1.1rem;">${author.worksCount} Published Work${author.worksCount > 1 ? 's' : ''}</p>
              <div style="display: flex; gap: 2rem; font-size: 0.875rem; color: var(--color-text-secondary);">
                <span><i class="fas fa-users"></i> ${author.followers} followers</span>
                <span><i class="fas fa-star"></i> ${author.recentWork.rating} rating</span>
                <span><i class="fas fa-eye"></i> ${author.recentWork.views.toLocaleString()} views</span>
              </div>
            </div>
          </div>
          <p style="color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 2rem; font-size: 1.1rem;">${author.bio}</p>
          
          <div style="background: rgba(255,255,255,0.02); padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
            <h4 style="color: var(--color-text); margin: 0 0 0.5rem 0;">Recent Work: ${author.recentWork.title}</h4>
            <div style="display: flex; align-items: center; gap: 1rem;">
              <div style="color: #ffd700;">
                ${'★'.repeat(Math.floor(author.recentWork.rating))}${'☆'.repeat(5 - Math.floor(author.recentWork.rating))}
              </div>
              <span style="color: var(--color-text-secondary); font-size: 0.875rem;">${author.recentWork.rating}/5.0</span>
            </div>
          </div>

          <div style="background: var(--anmol-glass); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--anmol-purple); margin-bottom: 2rem;">
            <h4 style="color: var(--anmol-purple); margin: 0 0 0.5rem 0;"><i class="fas fa-calendar-alt"></i> Upcoming AMA</h4>
            <p style="color: var(--color-text); margin: 0; font-weight: 500;">${author.upcomingAMA}</p>
          </div>

          <div style="display: flex; gap: 1rem; justify-content: center;">
            <button class="btn btn--primary" onclick="communityApp.followAuthor('${author.name}')">
              <i class="fas fa-user-plus"></i>
              Follow Author
            </button>
            <button class="btn btn--outline" onclick="communityApp.joinAMA('${author.name}')">
              <i class="fas fa-comments"></i>
              Join AMA
            </button>
            <button class="btn btn--outline" onclick="communityApp.readWork('${author.recentWork.title}')">
              <i class="fas fa-book-open"></i>
              Read Work
            </button>
          </div>
        </div>
      </div>
    `;
  }

  renderUpcomingAMAs(container) {
    container.innerHTML = `
      <div class="ama-section">
        <h3 style="margin-bottom: 2rem;">Upcoming AMAs</h3>
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div class="ama-item" style="background: var(--anmol-glass); border: 1px solid var(--anmol-glass-border); border-radius: 12px; padding: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
              <div>
                <h4 style="color: var(--color-text); margin: 0 0 0.5rem 0;">Sarah Chen - The Digital Dreamer</h4>
                <p style="color: var(--anmol-purple); margin: 0 0 1rem 0; font-weight: 500;">September 23, 2024 at 7:00 PM EST</p>
                <p style="color: var(--color-text-secondary); margin: 0;">Ask the author about cyberpunk writing, tech industry insights, and the creative process behind The Digital Dreamer.</p>
              </div>
              <span class="challenge-type" style="background: var(--anmol-purple); color: white; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.75rem;">LIVE</span>
            </div>
            <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1.5rem;">
              <span style="color: var(--color-text-secondary); font-size: 0.875rem;"><i class="fas fa-users"></i> 234 interested</span>
              <span style="color: var(--color-text-secondary); font-size: 0.875rem;"><i class="fas fa-clock"></i> 2 hours</span>
            </div>
            <div style="display: flex; gap: 0.75rem;">
              <button class="btn btn--primary">
                <i class="fas fa-bell"></i>
                Set Reminder
              </button>
              <button class="btn btn--outline">
                <i class="fas fa-share"></i>
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderWritingTips(container) {
    container.innerHTML = `
      <div class="tips-section">
        <h3 style="margin-bottom: 2rem;">Writing Tips from the Community</h3>
        <div style="display: grid; gap: 1.5rem;">
          <div class="tip-card" style="background: var(--anmol-glass); border: 1px solid var(--anmol-glass-border); border-radius: 12px; padding: 2rem;">
            <h4 style="color: var(--color-text); margin: 0 0 1rem 0;">Building Authentic Tech in Sci-Fi</h4>
            <p style="color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 1rem;">Research current technology trends and extrapolate logically. Don't just make things up - ground your tech in real science and current development trajectories.</p>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="color: var(--anmol-purple); font-size: 0.875rem;">by WriterInProgress</span>
              <div style="display: flex; gap: 0.5rem;">
                <button style="background: transparent; border: none; color: var(--color-text-secondary); cursor: pointer;"><i class="fas fa-thumbs-up"></i> 45</button>
                <button style="background: transparent; border: none; color: var(--color-text-secondary); cursor: pointer;"><i class="fas fa-comment"></i> 12</button>
              </div>
            </div>
          </div>
          
          <div class="tip-card" style="background: var(--anmol-glass); border: 1px solid var(--anmol-glass-border); border-radius: 12px; padding: 2rem;">
            <h4 style="color: var(--color-text); margin: 0 0 1rem 0;">Character Development in Series</h4>
            <p style="color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 1rem;">Plan character arcs across multiple books but allow for growth and surprises. Your characters should surprise even you sometimes, but their actions should always feel true to who they are.</p>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="color: var(--anmol-purple); font-size: 0.875rem;">by Elena Vasquez</span>
              <div style="display: flex; gap: 0.5rem;">
                <button style="background: transparent; border: none; color: var(--color-text-secondary); cursor: pointer;"><i class="fas fa-thumbs-up"></i> 67</button>
                <button style="background: transparent; border: none; color: var(--color-text-secondary); cursor: pointer;"><i class="fas fa-comment"></i> 23</button>
              </div>
            </div>
          </div>

          <div class="tip-card" style="background: var(--anmol-glass); border: 1px solid var(--anmol-glass-border); border-radius: 12px; padding: 2rem;">
            <h4 style="color: var(--color-text); margin: 0 0 1rem 0;">Crafting Emotional Dialogue</h4>
            <p style="color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 1rem;">Read your dialogue out loud. If it sounds unnatural or forced, it probably is. Each character should have a distinct voice that reflects their background, education, and personality.</p>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="color: var(--anmol-purple); font-size: 0.875rem;">by Alex Kim</span>
              <div style="display: flex; gap: 0.5rem;">
                <button style="background: transparent; border: none; color: var(--color-text-secondary); cursor: pointer;"><i class="fas fa-thumbs-up"></i> 89</button>
                <button style="background: transparent; border: none; color: var(--color-text-secondary); cursor: pointer;"><i class="fas fa-comment"></i> 34</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderBetaReaders(container) {
    container.innerHTML = `
      <div class="beta-section">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
          <h3>Beta Reader Marketplace</h3>
          <button class="btn btn--primary">
            <i class="fas fa-plus"></i>
            Offer Beta Reading
          </button>
        </div>
        
        <div style="display: grid; gap: 1.5rem;">
          <div class="beta-card" style="background: var(--anmol-glass); border: 1px solid var(--anmol-glass-border); border-radius: 12px; padding: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
              <div>
                <h4 style="color: var(--color-text); margin: 0 0 0.5rem 0;">Looking for Beta Readers - Cyberpunk Thriller</h4>
                <p style="color: var(--anmol-purple); margin: 0 0 1rem 0; font-size: 0.875rem;">by TechWriter2024</p>
                <p style="color: var(--color-text-secondary); margin: 0;">85,000 words. Looking for feedback on pacing, character development, and technical accuracy. Prefer readers familiar with cyberpunk genre.</p>
              </div>
              <div class="challenge-reward" style="background: var(--anmol-glass); border: 1px solid var(--anmol-glass-border); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.75rem; color: var(--anmol-purple);">
                <i class="fas fa-clock"></i>
                2 weeks
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div style="display: flex; gap: 0.5rem;">
                <span class="discussion-tag">Cyberpunk</span>
                <span class="discussion-tag">Thriller</span>
                <span class="discussion-tag">Tech</span>
              </div>
              <button class="btn btn--outline btn--sm">
                <i class="fas fa-hand-paper"></i>
                Volunteer
              </button>
            </div>
          </div>

          <div class="beta-card" style="background: var(--anmol-glass); border: 1px solid var(--anmol-glass-border); border-radius: 12px; padding: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
              <div>
                <h4 style="color: var(--color-text); margin: 0 0 0.5rem 0;">Experienced Beta Reader Available</h4>
                <p style="color: var(--anmol-purple); margin: 0 0 1rem 0; font-size: 0.875rem;">by BookCritic_Sarah</p>
                <p style="color: var(--color-text-secondary); margin: 0;">Professional editor with 5+ years experience. Specializing in romance, fantasy, and contemporary fiction. Detailed feedback on plot, characters, and prose.</p>
              </div>
              <div class="author-level" style="background: var(--anmol-glass); padding: 0.125rem 0.5rem; border-radius: 10px; font-size: 0.75rem; border: 1px solid var(--anmol-glass-border);">
                Expert
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div style="display: flex; gap: 0.5rem;">
                <span class="discussion-tag">Romance</span>
                <span class="discussion-tag">Fantasy</span>
                <span class="discussion-tag">Contemporary</span>
              </div>
              <button class="btn btn--primary btn--sm">
                <i class="fas fa-envelope"></i>
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderBookClubs() {
    const container = document.getElementById('clubs-grid');
    if (!container) return;

    container.innerHTML = '';

    this.data.bookClubs.forEach(club => {
      const clubEl = this.createBookClubElement(club);
      container.appendChild(clubEl);
    });
  }

  createBookClubElement(club) {
    const div = document.createElement('div');
    div.className = 'club-card';

    div.innerHTML = `
      <div class="club-header">
        <div>
          <h3 class="club-name">${club.name}</h3>
          <p class="club-description">${club.description}</p>
        </div>
        <span class="club-members">${club.members} members</span>
      </div>

      <div class="current-book">
        <div class="book-cover" style="background-image: url('${club.currentBook.coverUrl}')"></div>
        <div class="book-info">
          <h4>Currently Reading:</h4>
          <h4>${club.currentBook.title}</h4>
          <p class="book-author">by ${club.currentBook.author}</p>
        </div>
      </div>

      <div class="club-meeting">
        <i class="fas fa-calendar"></i>
        Next meeting: ${club.nextMeeting}
      </div>

      <div class="club-actions">
        <button class="btn ${club.isJoined ? 'btn--outline' : 'btn--primary'}" onclick="communityApp.${club.isJoined ? 'leaveClub' : 'joinClub'}('${club.id}')">
          <i class="fas ${club.isJoined ? 'fa-check' : 'fa-user-plus'}"></i>
          ${club.isJoined ? 'Joined' : 'Join Club'}
        </button>
        <button class="btn btn--outline" onclick="communityApp.viewClubDetails('${club.id}')">
          <i class="fas fa-info-circle"></i>
          Details
        </button>
      </div>
    `;

    return div;
  }

  renderRecommendations() {
    const container = document.getElementById('recommendations-content');
    if (!container) return;

    container.innerHTML = `
      <div class="recommendation-section">
        <h3>Community Picks</h3>
        <div class="books-grid">
          ${this.data.communityPicks.map(book => this.createBookCard(book)).join('')}
        </div>
      </div>

      <div class="recommendation-section">
        <h3>Personalized for You</h3>
        <p style="color: var(--color-text-secondary); margin-bottom: 1.5rem;">Based on your reading history and preferences</p>
        <div class="books-grid">
          ${this.createPersonalizedRecommendations()}
        </div>
      </div>
    `;
  }

  createBookCard(book) {
    return `
      <div class="book-card" onclick="communityApp.openBook('${book.id}')">
        <div class="book-card-header">
          <div class="book-card-cover" style="background-image: url('${book.coverUrl}')"></div>
          <div class="book-card-info">
            <h4>${book.title}</h4>
            <p class="book-card-author">by ${book.author}</p>
            <div class="book-rating">
              <span class="stars">${'★'.repeat(Math.floor(book.rating))}${'☆'.repeat(5 - Math.floor(book.rating))}</span>
              <span>${book.rating}</span>
              <span style="color: var(--color-text-secondary);">(${book.votes} votes)</span>
            </div>
          </div>
        </div>
        <p class="book-reason">"${book.reason}"</p>
      </div>
    `;
  }

  createPersonalizedRecommendations() {
    const personalizedBooks = [
      {
        id: 'rec1',
        title: 'Digital Shadows',
        author: 'Maya Chen',
        coverUrl: 'https://via.placeholder.com/120x180/9B59B6/FFFFFF?text=Digital+Shadows',
        rating: 4.5,
        votes: 123,
        reason: 'Similar themes to your recently read cyberpunk novels'
      },
      {
        id: 'rec2',
        title: 'The Memory Thieves',
        author: 'Alex Rodriguez',
        coverUrl: 'https://via.placeholder.com/120x180/E67E22/FFFFFF?text=Memory+Thieves',
        rating: 4.8,
        votes: 267,
        reason: 'Recommended by readers who enjoyed The Digital Dreamer'
      }
    ];

    return personalizedBooks.map(book => this.createBookCard(book)).join('');
  }

  renderSidebar() {
    this.renderActiveUsers();
    this.renderUpcomingEvents();
    this.renderTrendingNovels();
  }

  renderActiveUsers() {
    const container = document.getElementById('active-users-list');
    if (!container) return;

    container.innerHTML = this.data.activeUsers.map(user => `
      <div class="active-user">
        <img src="${user.avatar}" alt="${user.name}" class="active-user-avatar">
        <div class="active-user-info">
          <div class="active-user-name">${user.name}</div>
          <div class="active-user-status">${user.status}</div>
        </div>
      </div>
    `).join('');
  }

  renderUpcomingEvents() {
    const container = document.getElementById('events-list');
    if (!container) return;

    container.innerHTML = this.data.upcomingEvents.map(event => `
      <div class="event-item">
        <div class="event-title">${event.title}</div>
        <div class="event-date">${event.date}</div>
        <div class="event-participants">${event.participants} interested</div>
      </div>
    `).join('');
  }

  renderTrendingNovels() {
    const container = document.getElementById('trending-novels');
    if (!container) return;

    const trendingNovels = [
      {
        title: 'The Digital Dreamer',
        author: 'Sarah Chen',
        cover: 'https://via.placeholder.com/40x60/BF40BF/FFFFFF?text=DD'
      },
      {
        title: 'Neon Hearts',
        author: 'Alex Kim',
        cover: 'https://via.placeholder.com/40x60/FF6B9D/FFFFFF?text=NH'
      },
      {
        title: 'The Last Library',
        author: 'Elena Vasquez',
        cover: 'https://via.placeholder.com/40x60/E74C3C/FFFFFF?text=LL'
      }
    ];

    container.innerHTML = trendingNovels.map(novel => `
      <div class="trending-novel" onclick="communityApp.openBook('${novel.title}')">
        <div class="trending-cover" style="background-image: url('${novel.cover}')"></div>
        <div class="trending-info">
          <div class="trending-title">${novel.title}</div>
          <div class="trending-author">by ${novel.author}</div>
        </div>
      </div>
    `).join('');
  }

  animateStats() {
    const stats = document.querySelectorAll('.stat-number[data-count]');
    stats.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-count'));
      this.animateCounter(stat, target);
    });
  }

  animateCounter(element, target) {
    let current = 0;
    const increment = Math.max(Math.floor(target / 100), 1);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        element.textContent = current.toLocaleString();
      }
    }, 20);
  }

  startRealTimeUpdates() {
    // Simulate real-time updates
    setInterval(() => {
      this.updateOnlineCount();
      this.updateActiveUsers();
    }, 30000); // Update every 30 seconds
  }

  updateOnlineCount() {
    const onlineCount = document.querySelector('[data-count="1253"]');
    if (onlineCount) {
      const newCount = 1253 + Math.floor(Math.random() * 20 - 10);
      onlineCount.textContent = newCount.toLocaleString();
      onlineCount.setAttribute('data-count', newCount);
    }
  }

  updateActiveUsers() {
    // Simulate users changing status
    const statusList = [
      'Reading a new chapter',
      'Participating in discussion',
      'Writing a review',
      'Browsing recommendations',
      'In a book club meeting'
    ];

    const activeUsers = document.querySelectorAll('.active-user-status');
    activeUsers.forEach(status => {
      if (Math.random() < 0.3) { // 30% chance to update
        const newStatus = statusList[Math.floor(Math.random() * statusList.length)];
        status.textContent = newStatus;
      }
    });
  }

  // Action Methods
  createNewDiscussion() {
    const title = document.getElementById('discussion-title').value;
    const category = document.getElementById('discussion-category').value;
    const content = document.getElementById('discussion-content').value;
    const tags = document.getElementById('discussion-tags').value.split(',').map(tag => tag.trim()).filter(tag => tag);

    if (!title || !category || !content) return;

    // Create new discussion object
    const newDiscussion = {
      id: 'disc' + (this.data.discussions.length + 1),
      title,
      author: {
        name: this.data.currentUser.name,
        avatar: this.data.currentUser.avatar,
        level: this.data.currentUser.level
      },
      category: category === 'novel-discussion' ? 'Novel Discussion' : 
                category === 'recommendations' ? 'Recommendations' :
                category === 'writing-tips' ? 'Writing Tips' : 'General Chat',
      replies: 0,
      views: 1,
      lastActivity: 'now',
      lastReply: {
        author: this.data.currentUser.name,
        time: 'now'
      },
      tags: tags,
      isPinned: false,
      votes: 0
    };

    // Add to discussions
    this.data.discussions.unshift(newDiscussion);

    // Close modal and refresh
    document.getElementById('new-discussion-modal').classList.add('hidden');
    document.getElementById('new-discussion-form').reset();
    
    this.renderDiscussions();
    this.unlockAchievement('first_post');
  }

  joinChallenge(challengeId) {
    // Simulate joining challenge
    const challenge = this.data.readingChallenges.find(c => c.id === challengeId);
    if (challenge) {
      challenge.participants += 1;
      this.renderChallenges();
      this.unlockAchievement('challenge_completer');
    }
  }

  leaveChallenge(challengeId) {
    // Simulate leaving challenge
    const challenge = this.data.readingChallenges.find(c => c.id === challengeId);
    if (challenge && challenge.participants > 0) {
      challenge.participants -= 1;
      this.renderChallenges();
    }
  }

  joinClub(clubId) {
    const club = this.data.bookClubs.find(c => c.id === clubId);
    if (club) {
      club.members += 1;
      club.isJoined = true;
      this.renderBookClubs();
    }
  }

  leaveClub(clubId) {
    const club = this.data.bookClubs.find(c => c.id === clubId);
    if (club && club.members > 0) {
      club.members -= 1;
      club.isJoined = false;
      this.renderBookClubs();
    }
  }

  followAuthor(authorName) {
    this.userFollowing.add(authorName);
    this.showToast(`Now following ${authorName}!`);
  }

  unlockAchievement(achievementId) {
    const achievement = this.data.achievements.find(a => a.id === achievementId);
    if (achievement) {
      this.showAchievement(achievement);
    }
  }

  showAchievement(achievement) {
    const toast = document.getElementById('achievement-toast');
    const text = document.getElementById('achievement-text');
    
    if (toast && text) {
      text.textContent = achievement.description;
      toast.classList.remove('hidden');
      
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 4000);
    }
  }

  showToast(message) {
    // Create a simple toast notification
    const toast = document.createElement('div');
    toast.style.cssText = `
      position: fixed;
      top: 100px;
      right: 2rem;
      background: var(--anmol-glass);
      backdrop-filter: blur(30px);
      border: 1px solid var(--anmol-glass-border);
      border-radius: 12px;
      padding: 1rem 2rem;
      color: var(--color-text);
      z-index: 3000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  }

  // Placeholder methods for other actions
  openDiscussion(id) {
    this.showToast(`Opening discussion ${id}`);
  }

  viewChallengeDetails(id) {
    this.showToast(`Viewing challenge details for ${id}`);
  }

  viewClubDetails(id) {
    this.showToast(`Viewing club details for ${id}`);
  }

  openBook(id) {
    this.showToast(`Opening book ${id}`);
  }

  joinAMA(author) {
    this.showToast(`Joining AMA with ${author}`);
  }

  readWork(title) {
    this.showToast(`Opening ${title}`);
  }
}

// Initialize the application
let communityApp;

document.addEventListener('DOMContentLoaded', () => {
  communityApp = new CommunityApp();
  
  // Make it globally available for onclick handlers
  window.communityApp = communityApp;
});