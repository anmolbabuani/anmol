// Reader Dashboard Application for Anmol Platform

class ReaderDashboard {
  constructor() {
    this.userData = {
      "currentUser": {
        "id": "user1",
        "name": "BookLover2024",
        "displayName": "BookLover2024",
        "avatar": "https://via.placeholder.com/80x80/FF6B9D/FFFFFF?text=BL",
        "level": "Avid Reader",
        "points": 2340,
        "badges": ["First Post", "Challenge Completer", "Helpful Contributor", "Speed Reader", "Night Owl"],
        "joinedDate": "2024-03-15",
        "readingStreak": 45,
        "location": "San Francisco, CA",
        "timezone": "America/Los_Angeles"
      },
      "readingStats": {
        "todayStats": {
          "timeRead": "2h 15m",
          "pagesRead": 67,
          "wordsRead": 18500,
          "chaptersCompleted": 3
        },
        "weekStats": {
          "timeRead": "14h 30m",
          "booksCompleted": 2,
          "averageSpeed": 285,
          "favoriteReadingTime": "Evening"
        },
        "monthStats": {
          "booksRead": 8,
          "hoursRead": 52,
          "pagesRead": 1847,
          "averageRating": 4.2
        },
        "yearStats": {
          "booksCompleted": 42,
          "totalHours": 234,
          "favoriteGenres": ["Cyberpunk", "Science Fiction", "Romance", "Thriller"],
          "readingSpeedImprovement": 12
        }
      },
      "currentlyReading": [
        {
          "id": "novel1",
          "title": "The Digital Dreamer",
          "author": "Sarah Chen",
          "coverUrl": "https://via.placeholder.com/200x300/BF40BF/FFFFFF?text=Digital+Dreamer",
          "progress": 68,
          "currentChapter": 14,
          "totalChapters": 15,
          "estimatedTimeRemaining": "1h 25m",
          "lastReadAt": "2024-09-20T21:30:00",
          "bookmarkNote": "Maya's confrontation with the corporate overlords",
          "genre": "Cyberpunk",
          "difficulty": "Intermediate"
        }
      ],
      "recentlyRead": [
        {
          "id": "novel2",
          "title": "Midnight Protocol",
          "author": "Zara Al-Rashid",
          "coverUrl": "https://via.placeholder.com/120x180/4A90E2/FFFFFF?text=Midnight+Protocol",
          "completedAt": "2024-09-18",
          "rating": 5,
          "readingTime": "6h 45m",
          "genre": "Cyberpunk",
          "progress": 100,
          "currentChapter": 20,
          "totalChapters": 20
        },
        {
          "id": "novel3",
          "title": "Echoes of Tomorrow",
          "author": "Kim Zhao",
          "coverUrl": "https://via.placeholder.com/120x180/32CD32/FFFFFF?text=Echoes+Tomorrow",
          "completedAt": "2024-09-15",
          "rating": 4,
          "readingTime": "8h 20m",
          "genre": "Science Fiction",
          "progress": 100,
          "currentChapter": 25,
          "totalChapters": 25
        },
        {
          "id": "novel4",
          "title": "Neon Hearts",
          "author": "Alex Kim",
          "coverUrl": "https://via.placeholder.com/120x180/FF6B9D/FFFFFF?text=Neon+Hearts",
          "completedAt": "2024-09-12",
          "rating": 4,
          "readingTime": "5h 30m",
          "genre": "Romance",
          "progress": 45,
          "currentChapter": 8,
          "totalChapters": 18
        }
      ],
      "readingGoals": {
        "daily": {
          "target": 60,
          "progress": 45,
          "unit": "minutes",
          "streak": 12
        },
        "weekly": {
          "target": 2,
          "progress": 1,
          "unit": "books",
          "daysLeft": 3
        },
        "monthly": {
          "target": 8,
          "progress": 6,
          "unit": "books",
          "onTrack": true
        },
        "challenge": {
          "name": "Cyberpunk September",
          "target": 3,
          "progress": 2,
          "daysLeft": 10,
          "reward": "Cyberpunk Explorer Badge"
        }
      },
      "recommendations": [
        {
          "id": "rec1",
          "title": "Neural Storm",
          "author": "Kim Zhao",
          "coverUrl": "https://via.placeholder.com/150x225/9B59B6/FFFFFF?text=Neural+Storm",
          "reason": "Because you loved The Digital Dreamer",
          "genre": "Cyberpunk",
          "rating": 4.6,
          "readingTime": "7h",
          "difficulty": "Advanced"
        },
        {
          "id": "rec2",
          "title": "Code of Shadows",
          "author": "Elena Vasquez",
          "coverUrl": "https://via.placeholder.com/150x225/E74C3C/FFFFFF?text=Code+Shadows",
          "reason": "Trending in Cyberpunk",
          "genre": "Cyberpunk",
          "rating": 4.8,
          "readingTime": "6h 30m",
          "difficulty": "Intermediate"
        },
        {
          "id": "rec3",
          "title": "Digital Hearts",
          "author": "Marcus Rivera",
          "coverUrl": "https://via.placeholder.com/150x225/FFD700/000000?text=Digital+Hearts",
          "reason": "Perfect for your mood",
          "genre": "Romance",
          "rating": 4.4,
          "readingTime": "4h 45m",
          "difficulty": "Easy"
        }
      ],
      "authorUpdates": [
        {
          "id": "update1",
          "authorName": "Sarah Chen",
          "authorAvatar": "https://via.placeholder.com/40x40/4A90E2/FFFFFF?text=SC",
          "type": "new_chapter",
          "title": "New chapter of The Digital Dreamer is now available!",
          "bookTitle": "The Digital Dreamer",
          "chapterTitle": "Chapter 15: The Dream Ends",
          "publishedAt": "2024-09-20T20:00:00",
          "isNew": true
        },
        {
          "id": "update2",
          "authorName": "Zara Al-Rashid",
          "authorAvatar": "https://via.placeholder.com/40x40/9B59B6/FFFFFF?text=ZA",
          "type": "announcement",
          "title": "Working on the sequel to Midnight Protocol!",
          "description": "Thank you for all the amazing feedback. The sequel is in development.",
          "publishedAt": "2024-09-19T15:30:00",
          "isNew": false
        },
        {
          "id": "update3",
          "authorName": "Alex Kim",
          "authorAvatar": "https://via.placeholder.com/40x40/FF6B9D/FFFFFF?text=AK",
          "type": "ama",
          "title": "Join me for an AMA session this Friday!",
          "description": "Ask me anything about writing romance in cyberpunk settings.",
          "scheduledAt": "2024-09-23T19:00:00",
          "publishedAt": "2024-09-18T10:00:00",
          "isNew": false
        }
      ],
      "communityActivity": [
        {
          "id": "activity1",
          "type": "comment_reply",
          "userName": "CyberReader",
          "userAvatar": "https://via.placeholder.com/32x32/9B59B6/FFFFFF?text=CR",
          "action": "replied to your comment",
          "bookTitle": "The Digital Dreamer",
          "content": "I totally agree about Maya's character development!",
          "timestamp": "2024-09-20T18:45:00",
          "isNew": true
        },
        {
          "id": "activity2",
          "type": "new_follower",
          "userName": "SciFiFan42",
          "userAvatar": "https://via.placeholder.com/32x32/32CD32/FFFFFF?text=SF",
          "action": "started following you",
          "timestamp": "2024-09-20T16:20:00",
          "isNew": true
        },
        {
          "id": "activity3",
          "type": "challenge_update",
          "challengeName": "Cyberpunk September",
          "action": "You moved up to 3rd place!",
          "position": 3,
          "timestamp": "2024-09-20T14:30:00",
          "isNew": false
        },
        {
          "id": "activity4",
          "type": "discussion",
          "userName": "BookClubMember",
          "userAvatar": "https://via.placeholder.com/32x32/FFA500/FFFFFF?text=BC",
          "action": "mentioned you in",
          "discussionTitle": "Best cyberpunk novels of 2024",
          "timestamp": "2024-09-20T12:15:00",
          "isNew": false
        }
      ],
      "achievements": {
        "recent": [
          {
            "id": "speed_reader",
            "name": "Speed Reader",
            "description": "Read 300+ words per minute for 7 days straight",
            "icon": "fas fa-bolt",
            "earnedAt": "2024-09-19",
            "isNew": true,
            "rarity": "rare"
          },
          {
            "id": "night_owl",
            "name": "Night Owl",
            "description": "Read past midnight for 10 consecutive days",
            "icon": "fas fa-moon",
            "earnedAt": "2024-09-18",
            "isNew": true,
            "rarity": "uncommon"
          }
        ],
        "progress": [
          {
            "id": "bookworm",
            "name": "Bookworm",
            "description": "Read 50 books in a year",
            "icon": "fas fa-book",
            "progress": 42,
            "target": 50,
            "rarity": "epic"
          },
          {
            "id": "reviewer",
            "name": "Master Reviewer",
            "description": "Write 100 book reviews",
            "icon": "fas fa-star",
            "progress": 67,
            "target": 100,
            "rarity": "rare"
          }
        ]
      },
      "quickActions": [
        {
          "id": "search_books",
          "title": "Find New Books",
          "icon": "fas fa-search",
          "color": "#BF40BF"
        },
        {
          "id": "join_challenge",
          "title": "Join Challenge",
          "icon": "fas fa-trophy",
          "color": "#FFD700"
        },
        {
          "id": "write_review",
          "title": "Write Review",
          "icon": "fas fa-pen",
          "color": "#4A90E2"
        },
        {
          "id": "check_library",
          "title": "My Library",
          "icon": "fas fa-book-open",
          "color": "#32CD32"
        },
        {
          "id": "reading_notes",
          "title": "My Notes",
          "icon": "fas fa-sticky-note",
          "color": "#FF6B9D"
        },
        {
          "id": "community",
          "title": "Community",
          "icon": "fas fa-users",
          "color": "#FFA500"
        }
      ],
      "weatherData": {
        "condition": "rainy",
        "temperature": 18,
        "location": "San Francisco, CA",
        "suggestion": "Perfect weather for cozy indoor reading!"
      },
      "timeOfDay": "evening",
      "readingMood": "intense"
    };
    
    this.init();
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.setupDashboard();
        this.setupEventListeners();
      });
    } else {
      this.setupDashboard();
      this.setupEventListeners();
    }
  }

  setupDashboard() {
    this.updateGreeting();
    this.renderCurrentlyReading();
    this.renderReadingGoals();
    this.renderRecommendations();
    this.renderCommunityActivity();
    this.renderReadingStats();
    this.renderAuthorUpdates();
    this.renderAchievements();
    this.renderQuickActions();
    this.showNewAchievements();
  }

  setupEventListeners() {
    // Continue reading button
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('continue-btn') || e.target.closest('.continue-btn')) {
        e.preventDefault();
        this.continueReading();
      }
      
      if (e.target.classList.contains('switch-book-btn') || e.target.closest('.switch-book-btn')) {
        e.preventDefault();
        this.showContinueReadingModal();
      }
      
      if (e.target.closest('.quick-action')) {
        e.preventDefault();
        const action = e.target.closest('.quick-action');
        this.handleQuickAction(action.dataset.action);
      }
      
      if (e.target.closest('.recommendation-card')) {
        e.preventDefault();
        const card = e.target.closest('.recommendation-card');
        this.handleRecommendationClick(card.dataset.bookId);
      }
      
      if (e.target.classList.contains('see-all-btn') || e.target.closest('.see-all-btn')) {
        e.preventDefault();
        const section = e.target.closest('.dashboard-card');
        this.handleSeeAllClick(section);
      }
      
      if (e.target.classList.contains('modal-close') || e.target.classList.contains('achievement-close')) {
        e.preventDefault();
        this.closeModal(e.target);
      }

      // Navigation links
      if (e.target.closest('.nav-link')) {
        e.preventDefault();
        const link = e.target.closest('.nav-link');
        this.handleNavigation(link);
      }

      // Sidebar links
      if (e.target.closest('.sidebar-link')) {
        e.preventDefault();
        const link = e.target.closest('.sidebar-link');
        this.handleSidebarNavigation(link);
      }

      // Bottom nav
      if (e.target.closest('.bottom-nav-item')) {
        e.preventDefault();
        const item = e.target.closest('.bottom-nav-item');
        this.handleBottomNavigation(item);
      }
    });

    // Close modals on background click
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        e.target.classList.add('hidden');
      }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal, .achievement-notification').forEach(modal => {
          modal.classList.add('hidden');
        });
      }
      
      // Quick access shortcuts
      if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
          case 'r':
            e.preventDefault();
            this.continueReading();
            break;
          case 'f':
            e.preventDefault();
            this.handleQuickAction('search_books');
            break;
        }
      }
    });

    // Auto-hide achievement notifications
    setTimeout(() => {
      document.querySelectorAll('.achievement-notification').forEach(notification => {
        notification.classList.add('hidden');
      });
    }, 5000);
  }

  updateGreeting() {
    const greeting = this.getTimeBasedGreeting();
    const greetingElement = document.querySelector('.greeting');
    if (greetingElement) {
      greetingElement.textContent = greeting;
    }
    
    // Update streak animation
    this.animateStreak();
  }

  getTimeBasedGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  }

  animateStreak() {
    const streakIcon = document.querySelector('.streak-icon');
    if (streakIcon) {
      streakIcon.style.animation = 'flicker 2s infinite alternate';
    }
  }

  renderCurrentlyReading() {
    const container = document.getElementById('current-book');
    if (!container || !this.userData.currentlyReading.length) return;
    
    const book = this.userData.currentlyReading[0];
    
    container.innerHTML = `
      <div class="book-cover" style="background-image: url('${book.coverUrl}')"></div>
      <div class="book-info">
        <h3 class="book-title">${book.title}</h3>
        <div class="book-author">by ${book.author}</div>
        <div class="book-progress">
          <div class="progress-info">
            <span>Chapter ${book.currentChapter} of ${book.totalChapters}</span>
            <span>${book.progress}% complete</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${book.progress}%"></div>
          </div>
          <div style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--color-text-secondary);">
            ${book.estimatedTimeRemaining} remaining • ${book.bookmarkNote}
          </div>
        </div>
        <div class="book-actions">
          <button class="continue-btn">
            <i class="fas fa-play"></i>
            Continue Reading
          </button>
          <button class="switch-book-btn">
            <i class="fas fa-exchange-alt"></i>
            Switch Book
          </button>
        </div>
      </div>
    `;
    
    // Animate progress bar
    setTimeout(() => {
      const progressFill = container.querySelector('.progress-fill');
      if (progressFill) {
        progressFill.style.transition = 'width 1s ease';
      }
    }, 500);
  }

  renderReadingGoals() {
    const container = document.getElementById('reading-goals');
    if (!container) return;
    
    const goals = this.userData.readingGoals;
    
    container.innerHTML = `
      ${this.createGoalItem('Daily Goal', goals.daily)}
      ${this.createGoalItem('Weekly Goal', goals.weekly)}
      ${this.createGoalItem('Monthly Goal', goals.monthly)}
      ${this.createChallengeItem(goals.challenge)}
    `;
  }

  createGoalItem(title, goal) {
    const percentage = Math.min((goal.progress / goal.target) * 100, 100);
    const strokeDasharray = 2 * Math.PI * 25; // radius = 25
    const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;
    
    return `
      <div class="goal-item">
        <div class="goal-header">
          <span class="goal-title">${title}</span>
          <span class="goal-value">${goal.progress}/${goal.target} ${goal.unit}</span>
        </div>
        <div class="goal-progress" style="display: flex; align-items: center; gap: 1rem;">
          <svg class="goal-progress-ring" width="60" height="60">
            <circle class="goal-progress-bg" cx="30" cy="30" r="25" 
                    stroke-dasharray="${strokeDasharray}" stroke-dashoffset="0"></circle>
            <circle class="goal-progress-fill" cx="30" cy="30" r="25" 
                    stroke-dasharray="${strokeDasharray}" stroke-dashoffset="${strokeDashoffset}"></circle>
          </svg>
          <div style="flex: 1; font-size: 0.75rem; color: var(--color-text-secondary);">
            ${percentage.toFixed(0)}% complete
            ${goal.streak ? `<br>🔥 ${goal.streak} day streak` : ''}
            ${goal.daysLeft ? `<br>${goal.daysLeft} days left` : ''}
          </div>
        </div>
      </div>
    `;
  }

  createChallengeItem(challenge) {
    const percentage = Math.min((challenge.progress / challenge.target) * 100, 100);
    
    return `
      <div class="goal-item" style="background: var(--anmol-glass-strong); border-color: var(--anmol-purple);">
        <div class="goal-header">
          <span class="goal-title">${challenge.name}</span>
          <span class="goal-value">${challenge.progress}/${challenge.target}</span>
        </div>
        <div style="font-size: 0.75rem; color: var(--color-text-secondary); margin-bottom: 0.5rem;">
          ${challenge.daysLeft} days left • Reward: ${challenge.reward}
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${percentage}%"></div>
        </div>
      </div>
    `;
  }

  renderRecommendations() {
    const container = document.getElementById('recommendations');
    if (!container) return;
    
    container.innerHTML = this.userData.recommendations.map(rec => `
      <div class="recommendation-card" data-book-id="${rec.id}">
        <div class="rec-cover" style="background-image: url('${rec.coverUrl}')"></div>
        <div class="rec-title">${rec.title}</div>
        <div class="rec-author">${rec.author}</div>
        <div class="rec-reason">${rec.reason}</div>
        <div style="margin-top: 0.5rem; font-size: 0.75rem; color: var(--color-text-secondary);">
          ⭐ ${rec.rating} • ${rec.readingTime}
        </div>
      </div>
    `).join('');
  }

  renderCommunityActivity() {
    const container = document.getElementById('community-activity');
    if (!container) return;
    
    container.innerHTML = this.userData.communityActivity.map(activity => `
      <div class="activity-item">
        <img src="${activity.userAvatar || 'https://via.placeholder.com/40x40/BF40BF/FFFFFF?text=' + (activity.userName?.charAt(0) || 'U')}" 
             alt="${activity.userName}" class="activity-avatar">
        <div class="activity-content">
          <div class="activity-text">
            ${this.formatActivityText(activity)}
            ${activity.isNew ? '<span class="activity-badge">•</span>' : ''}
          </div>
          <div class="activity-time">${this.formatTimeAgo(activity.timestamp)}</div>
        </div>
      </div>
    `).join('');
  }

  formatActivityText(activity) {
    switch(activity.type) {
      case 'comment_reply':
        return `<strong>${activity.userName}</strong> ${activity.action} on <em>${activity.bookTitle}</em>`;
      case 'new_follower':
        return `<strong>${activity.userName}</strong> ${activity.action}`;
      case 'challenge_update':
        return `<strong>${activity.challengeName}</strong>: ${activity.action}`;
      case 'discussion':
        return `<strong>${activity.userName}</strong> ${activity.action} <em>${activity.discussionTitle}</em>`;
      default:
        return `<strong>${activity.userName}</strong> ${activity.action}`;
    }
  }

  renderReadingStats() {
    const container = document.getElementById('reading-stats');
    if (!container) return;
    
    const stats = this.userData.readingStats;
    
    container.innerHTML = `
      <div class="stat-item">
        <div class="stat-number">${stats.weekStats.averageSpeed}</div>
        <div class="stat-description">Words per minute</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">${stats.monthStats.hoursRead}h</div>
        <div class="stat-description">This month</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">${stats.monthStats.averageRating}</div>
        <div class="stat-description">Avg rating given</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">${stats.yearStats.booksCompleted}</div>
        <div class="stat-description">Books this year</div>
      </div>
    `;
  }

  renderAuthorUpdates() {
    const container = document.getElementById('author-updates');
    if (!container) return;
    
    container.innerHTML = this.userData.authorUpdates.map(update => `
      <div class="author-update">
        <img src="${update.authorAvatar}" alt="${update.authorName}" class="author-avatar">
        <div class="update-content">
          <div class="update-title">
            ${update.title}
            ${update.isNew ? '<span class="update-badge">New</span>' : ''}
          </div>
          ${update.description ? `<div class="update-description">${update.description}</div>` : ''}
          <div class="update-meta">
            ${update.authorName} • ${this.formatTimeAgo(update.publishedAt)}
            ${update.scheduledAt ? ` • Scheduled: ${this.formatDateTime(update.scheduledAt)}` : ''}
          </div>
        </div>
      </div>
    `).join('');
  }

  renderAchievements() {
    const container = document.getElementById('achievements');
    if (!container) return;
    
    const achievements = this.userData.achievements;
    
    container.innerHTML = [
      ...achievements.recent.map(achievement => `
        <div class="achievement-item ${achievement.isNew ? 'new' : ''}">
          <div class="achievement-icon">
            <i class="${achievement.icon}"></i>
          </div>
          <div class="achievement-details">
            <div class="achievement-name">${achievement.name}</div>
            <div class="achievement-description">${achievement.description}</div>
            <div style="font-size: 0.75rem; color: var(--anmol-purple); margin-top: 0.25rem;">
              ${achievement.rarity} • Earned ${this.formatTimeAgo(achievement.earnedAt)}
            </div>
          </div>
        </div>
      `),
      ...achievements.progress.map(achievement => `
        <div class="achievement-item">
          <div class="achievement-icon" style="background: var(--anmol-surface-light);">
            <i class="${achievement.icon}"></i>
          </div>
          <div class="achievement-details">
            <div class="achievement-name">${achievement.name}</div>
            <div class="achievement-description">${achievement.description}</div>
            <div style="font-size: 0.75rem; color: var(--color-text-secondary); margin-top: 0.5rem;">
              <div class="progress-bar" style="height: 4px; margin-bottom: 0.25rem;">
                <div class="progress-fill" style="width: ${(achievement.progress / achievement.target) * 100}%"></div>
              </div>
              ${achievement.progress}/${achievement.target} (${Math.round((achievement.progress / achievement.target) * 100)}%)
            </div>
          </div>
        </div>
      `)
    ].join('');
  }

  renderQuickActions() {
    const container = document.getElementById('quick-actions');
    if (!container) return;
    
    container.innerHTML = this.userData.quickActions.map(action => `
      <div class="quick-action" data-action="${action.id}">
        <div class="quick-action-icon" style="color: ${action.color};">
          <i class="${action.icon}"></i>
        </div>
        <div class="quick-action-title">${action.title}</div>
      </div>
    `).join('');
  }

  showNewAchievements() {
    const newAchievements = this.userData.achievements.recent.filter(a => a.isNew);
    if (newAchievements.length > 0) {
      // Show the first new achievement
      const achievement = newAchievements[0];
      setTimeout(() => {
        this.showAchievementNotification(achievement);
      }, 2000);
    }
  }

  showAchievementNotification(achievement) {
    const notification = document.getElementById('achievement-notification');
    if (notification) {
      const title = notification.querySelector('.achievement-title');
      const description = notification.querySelector('.achievement-description');
      const icon = notification.querySelector('.achievement-icon');
      
      if (title) title.textContent = 'Achievement Unlocked!';
      if (description) description.textContent = achievement.name;
      if (icon) icon.className = achievement.icon + ' achievement-icon';
      
      notification.classList.remove('hidden');
      
      // Auto-hide after 5 seconds
      setTimeout(() => {
        notification.classList.add('hidden');
      }, 5000);
    }
  }

  continueReading() {
    const currentBook = this.userData.currentlyReading[0];
    if (currentBook) {
      // Show reading interface simulation
      this.showReadingInterface(currentBook);
      
      // Update last read time
      currentBook.lastReadAt = new Date().toISOString();
      
      // Simulate some progress
      setTimeout(() => {
        this.updateReadingProgress(currentBook.id, Math.min(currentBook.progress + 5, 100));
      }, 2000);
    }
  }

  showReadingInterface(book) {
    // Create a full-screen reading interface
    const readingInterface = document.createElement('div');
    readingInterface.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--anmol-dark);
      z-index: 3000;
      display: flex;
      flex-direction: column;
      animation: slideInRight 0.3s ease;
    `;
    
    readingInterface.innerHTML = `
      <div style="padding: 1rem; border-bottom: 1px solid var(--anmol-glass-border); display: flex; justify-content: space-between; align-items: center; background: var(--anmol-surface);">
        <div>
          <h3 style="margin: 0; color: var(--color-text);">${book.title}</h3>
          <p style="margin: 0; color: var(--color-text-secondary); font-size: 0.875rem;">Chapter ${book.currentChapter}: ${book.bookmarkNote}</p>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" style="background: var(--anmol-purple); color: white; border: none; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer;">
          <i class="fas fa-times"></i> Close
        </button>
      </div>
      <div style="flex: 1; padding: 2rem; overflow-y: auto; max-width: 800px; margin: 0 auto;">
        <div style="line-height: 1.8; font-size: 1.125rem; color: var(--color-text);">
          <p>Maya's fingers danced across the holographic interface, her neural implant pulsing with each data stream she accessed. The corporate towers loomed outside her window, their neon advertisements casting an electric glow across her cramped apartment.</p>
          
          <p>"You can't keep running from them forever," whispered ARIA, her AI companion. The voice materialized directly in Maya's consciousness, bypassing her ears entirely.</p>
          
          <p>"Watch me," Maya muttered, her eyes never leaving the scrolling code. She was so close to cracking the Nexus Protocol - the key to exposing the conspiracy that had consumed her life for the past three years.</p>
          
          <p>A soft chime indicated an incoming message. Maya's heart skipped as she recognized the sender: her contact within the corporation. The message was brief but chilling: "They know. Get out. Now."</p>
          
          <p>Maya's hands trembled as she initiated the data transfer. Just a few more seconds and she'd have everything she needed. The building's security system suddenly went dark, plunging her apartment into shadows lit only by the glow of her screens.</p>
          
          <p>"Maya," ARIA's voice carried a note of urgency she'd never heard before. "Multiple heat signatures approaching your floor. They're here."</p>
          
          <div style="text-align: center; margin: 2rem 0; padding: 1rem; background: var(--anmol-glass); border-radius: 12px;">
            <p style="color: var(--anmol-purple); font-style: italic; margin: 0;">You've been reading for 5 minutes. Progress: 72% complete</p>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(readingInterface);
  }

  updateReadingProgress(bookId, newProgress) {
    const book = this.userData.currentlyReading.find(b => b.id === bookId);
    if (book) {
      const oldProgress = book.progress;
      book.progress = Math.min(newProgress, 100);
      
      // Update chapter if significant progress
      if (newProgress > oldProgress + 5) {
        book.currentChapter = Math.min(book.currentChapter + 1, book.totalChapters);
      }
      
      this.renderCurrentlyReading();
      
      // Update stats
      this.userData.readingStats.todayStats.pagesRead += 3;
      if (newProgress > oldProgress + 10) {
        this.userData.readingStats.todayStats.chaptersCompleted += 1;
      }
      
      if (book.progress >= 100) {
        this.showCompletionCelebration(book);
      } else {
        this.showProgressNotification(book, oldProgress, newProgress);
      }
    }
  }

  showCompletionCelebration(book) {
    this.showCustomNotification(`🎉 Congratulations! You completed "${book.title}"!`, 'success');
    
    // Move to recently read
    this.userData.recentlyRead.unshift({
      ...book,
      completedAt: new Date().toISOString(),
      rating: 0 // User can rate later
    });
    
    // Remove from currently reading
    this.userData.currentlyReading = this.userData.currentlyReading.filter(b => b.id !== book.id);
    
    // Update monthly goal
    this.userData.readingGoals.monthly.progress += 1;
    this.userData.readingGoals.challenge.progress += 1;
    
    setTimeout(() => {
      this.renderCurrentlyReading();
      this.renderReadingGoals();
    }, 1000);
  }

  showProgressNotification(book, oldProgress, newProgress) {
    const pagesRead = Math.round((newProgress - oldProgress) * 2); // Estimate pages
    this.showCustomNotification(`📖 Great progress! You read ${pagesRead} pages of "${book.title}"`, 'info');
  }

  showContinueReadingModal() {
    const modal = document.getElementById('continue-reading-modal');
    const container = document.getElementById('continue-reading-options');
    
    if (modal && container) {
      // Show currently reading and recently read books as options
      const allBooks = [
        ...this.userData.currentlyReading,
        ...this.userData.recentlyRead.filter(book => book.progress < 100)
      ];
      
      container.innerHTML = `
        <div style="margin-bottom: 1rem; color: var(--color-text-secondary);">
          Choose a book to continue reading:
        </div>
        ${allBooks.map(book => `
          <div class="activity-item" style="cursor: pointer;" onclick="dashboard.selectBookToContinue('${book.id}')">
            <div style="width: 40px; height: 60px; background-image: url('${book.coverUrl}'); background-size: cover; border-radius: 4px; flex-shrink: 0;"></div>
            <div class="activity-content">
              <div class="activity-text">
                <strong>${book.title}</strong> by ${book.author}
              </div>
              <div class="activity-time">
                ${book.progress ? `${book.progress}% complete • Chapter ${book.currentChapter || 1}` : 'Not started'}
              </div>
            </div>
          </div>
        `).join('')}
        
        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--anmol-glass-border);">
          <button class="btn btn--outline" style="width: 100%;" onclick="dashboard.handleQuickAction('search_books'); dashboard.closeModal(document.getElementById('continue-reading-modal'));">
            <i class="fas fa-search"></i>
            Find New Books to Read
          </button>
        </div>
      `;
      
      modal.classList.remove('hidden');
    }
  }

  selectBookToContinue(bookId) {
    // Close modal
    document.getElementById('continue-reading-modal').classList.add('hidden');
    
    // Find book
    let book = this.userData.currentlyReading.find(b => b.id === bookId);
    if (!book) {
      book = this.userData.recentlyRead.find(b => b.id === bookId);
      if (book) {
        // Move to currently reading if not already there
        this.userData.currentlyReading = [book];
        this.userData.recentlyRead = this.userData.recentlyRead.filter(b => b.id !== bookId);
      }
    }
    
    if (book) {
      this.showCustomNotification(`📖 Switching to "${book.title}" at ${book.progress}% completion`, 'info');
      setTimeout(() => {
        this.renderCurrentlyReading();
        this.continueReading();
      }, 500);
    }
  }

  handleQuickAction(actionId) {
    const actions = {
      'search_books': () => this.showCustomNotification('🔍 Opening book discovery... Browse thousands of novels!', 'info'),
      'join_challenge': () => this.showCustomNotification('🏆 Opening reading challenges... Join "October Mystery Month"!', 'info'),
      'write_review': () => this.showCustomNotification('✍️ Opening review editor... Share your thoughts!', 'info'),
      'check_library': () => this.showCustomNotification('📚 Opening your personal library... 127 books saved!', 'info'),
      'reading_notes': () => this.showCustomNotification('📝 Opening your reading notes... 45 notes found!', 'info'),
      'community': () => this.showCustomNotification('👥 Opening community discussions... 8 new posts!', 'info')
    };
    
    if (actions[actionId]) {
      actions[actionId]();
    }
  }

  handleRecommendationClick(bookId) {
    const book = this.userData.recommendations.find(r => r.id === bookId);
    if (book) {
      this.showBookPreview(book);
    }
  }

  showBookPreview(book) {
    // Create book preview modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content" style="max-width: 600px;">
        <div class="modal-header">
          <h3>${book.title}</h3>
          <button class="modal-close">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <div style="display: flex; gap: 1.5rem; margin-bottom: 1.5rem;">
            <img src="${book.coverUrl}" alt="${book.title}" style="width: 120px; height: 180px; object-fit: cover; border-radius: 8px;">
            <div style="flex: 1;">
              <p style="margin: 0 0 0.5rem 0; color: var(--anmol-purple); font-weight: 600;">by ${book.author}</p>
              <p style="margin: 0 0 1rem 0; color: var(--color-text-secondary);">${book.reason}</p>
              <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                <span style="font-size: 0.875rem; color: var(--color-text-secondary);">⭐ ${book.rating}</span>
                <span style="font-size: 0.875rem; color: var(--color-text-secondary);">📖 ${book.readingTime}</span>
                <span style="font-size: 0.875rem; color: var(--color-text-secondary);">📊 ${book.difficulty}</span>
              </div>
              <div style="background: var(--anmol-glass); padding: 1rem; border-radius: 8px;">
                <p style="margin: 0; font-style: italic; color: var(--color-text-secondary);">
                  "A thrilling ${book.genre} adventure that will keep you on the edge of your seat. Perfect for fans of cyberpunk fiction with its blend of high-tech and emotional depth."
                </p>
              </div>
            </div>
          </div>
          <div style="display: flex; gap: 1rem;">
            <button class="btn btn--primary" style="flex: 1;" onclick="dashboard.addToCurrentlyReading('${book.id}'); this.closest('.modal').remove();">
              <i class="fas fa-book-open"></i>
              Start Reading
            </button>
            <button class="btn btn--outline" onclick="dashboard.addToLibrary('${book.id}'); this.closest('.modal').remove();">
              <i class="fas fa-bookmark"></i>
              Add to Library
            </button>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add close event listener
    modal.querySelector('.modal-close').addEventListener('click', () => {
      modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }

  addToCurrentlyReading(bookId) {
    const book = this.userData.recommendations.find(r => r.id === bookId);
    if (book) {
      // Convert recommendation to reading book format
      const newBook = {
        ...book,
        progress: 0,
        currentChapter: 1,
        totalChapters: 20, // Estimate
        estimatedTimeRemaining: book.readingTime,
        lastReadAt: new Date().toISOString(),
        bookmarkNote: "Just started reading"
      };
      
      // Replace current book or add as first
      this.userData.currentlyReading = [newBook];
      
      this.showCustomNotification(`📖 Started reading "${book.title}"! Happy reading!`, 'success');
      this.renderCurrentlyReading();
    }
  }

  addToLibrary(bookId) {
    this.showCustomNotification('📚 Added to your reading list! Find it in your library.', 'success');
  }

  handleSeeAllClick(section) {
    const sectionTitle = section.querySelector('.card-title').textContent.trim();
    
    const messages = {
      'Recommended for You': '🌟 Opening full recommendations... 50+ books waiting!',
      'Community Activity': '💬 Opening activity feed... See all community updates!',
      'Author Updates': '✍️ Opening author updates... Follow your favorite writers!',
      'Recent Achievements': '🏆 Opening achievement gallery... See your progress!'
    };
    
    const message = Object.keys(messages).find(key => sectionTitle.includes(key.split(' ')[0]));
    this.showCustomNotification(messages[message] || '📱 Opening full view...', 'info');
  }

  handleNavigation(link) {
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    
    const text = link.textContent.trim();
    const messages = {
      'Dashboard': '🏠 You are already on the dashboard!',
      'Browse': '🔍 Opening book browser... Discover your next favorite!',
      'Library': '📚 Opening your personal library... 127 books saved!',
      'Community': '👥 Opening community hub... Connect with fellow readers!'
    };
    
    this.showCustomNotification(messages[text] || `📱 Navigating to ${text}...`, 'info');
  }

  handleSidebarNavigation(link) {
    const text = link.textContent.trim();
    const messages = {
      'Currently Reading': '📖 Showing currently reading books...',
      'Reading List': '📝 Opening your reading list... 23 books queued!',
      'Completed Books': '✅ Opening completed books... 42 books finished!',
      'My Reviews': '⭐ Opening your reviews... 28 reviews written!',
      'Bookmarked Passages': '💭 Opening bookmarked passages... 156 quotes saved!',
      'Reading Notes': '📝 Opening your notes... 45 reading notes!',
      'Discussions': '💬 Opening discussions... Join the conversation!',
      'Challenges': '🏆 Opening reading challenges... 3 active challenges!',
      'Book Clubs': '👥 Opening book clubs... 2 clubs joined!',
      'Following': '➕ Opening following list... 15 authors followed!',
      'Reading Settings': '⚙️ Opening reading preferences...',
      'Statistics': '📊 Opening detailed statistics...',
      'Notifications': '🔔 Opening notification settings...'
    };
    
    this.showCustomNotification(messages[text] || `📱 Opening ${text}...`, 'info');
  }

  handleBottomNavigation(item) {
    // Remove active class from all bottom nav items
    document.querySelectorAll('.bottom-nav-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    
    const text = item.querySelector('span').textContent.trim();
    this.handleNavigation({ textContent: text, classList: { add: () => {}, remove: () => {} } });
  }

  closeModal(element) {
    const modal = element.closest('.modal') || element.closest('.achievement-notification');
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  showCustomNotification(message, type = 'info') {
    // Create a notification with different types
    const notification = document.createElement('div');
    
    const colors = {
      'success': 'var(--color-success)',
      'info': 'var(--anmol-purple)',
      'warning': 'var(--color-warning)',
      'error': 'var(--color-error)'
    };
    
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 2rem;
      background: var(--anmol-surface);
      border: 1px solid var(--anmol-glass-border);
      border-left: 4px solid ${colors[type]};
      border-radius: 8px;
      padding: 1rem 1.5rem;
      z-index: 2000;
      max-width: 350px;
      animation: slideInRight 0.3s ease;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    `;
    notification.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <div style="color: ${colors[type]}; flex-shrink: 0;">
          ${message.split(' ')[0]}
        </div>
        <div style="color: var(--color-text); font-size: 0.875rem; line-height: 1.4;">
          ${message.substring(message.indexOf(' ') + 1)}
        </div>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease forwards';
      setTimeout(() => {
        if (notification.parentNode) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 4000);
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

  formatDateTime(timestamp) {
    return new Date(timestamp).toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  }
}

// Add slide animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideOutRight {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);

// Initialize dashboard
const dashboard = new ReaderDashboard();

// Make dashboard globally available for inline event handlers
window.dashboard = dashboard;