// Application Data
const APP_DATA = {
  "novels": [
    {
      "id": "novel1",
      "title": "The Digital Dreamer",
      "author": "Sarah Chen",
      "authorId": "user2",
      "description": "A cyberpunk tale of a hacker who discovers she can enter dreams through virtual reality. Maya's world changes forever when she develops technology that can interface with the human subconscious.",
      "coverUrl": "https://via.placeholder.com/300x450/BF40BF/FFFFFF?text=The+Digital+Dreamer",
      "genre": "Cyberpunk",
      "tags": ["AI", "Dreams", "Hacking", "Technology", "Future"],
      "status": "ongoing",
      "difficulty": "intermediate",
      "createdAt": "2024-08-15",
      "updatedAt": "2024-09-20",
      "chapters": 15,
      "totalWords": 45000,
      "estimatedReadTime": "3 hours",
      "isCompleted": false,
      "stats": {
        "views": 12456,
        "likes": 892,
        "comments": 234,
        "rating": 4.7,
        "inLibraries": 2341
      }
    },
    {
      "id": "novel2",
      "title": "Whispers in the Void",
      "author": "Marcus Rivera",
      "authorId": "user3",
      "description": "Space explorers discover an ancient alien civilization that communicates through silence. A haunting journey across the cosmos reveals truths about consciousness and communication.",
      "coverUrl": "https://via.placeholder.com/300x450/4A90E2/FFFFFF?text=Whispers+in+Void",
      "genre": "Space Opera",
      "tags": ["Space", "Aliens", "Exploration", "Philosophy", "Adventure"],
      "status": "ongoing",
      "difficulty": "advanced",
      "createdAt": "2024-07-22",
      "updatedAt": "2024-09-19",
      "chapters": 22,
      "totalWords": 78000,
      "estimatedReadTime": "5 hours",
      "isCompleted": false,
      "stats": {
        "views": 8934,
        "likes": 567,
        "comments": 123,
        "rating": 4.5,
        "inLibraries": 1567
      }
    },
    {
      "id": "novel3",
      "title": "The Last Library",
      "author": "Elena Vasquez",
      "authorId": "user4",
      "description": "In a world where books are banned, a secret librarian fights to preserve human knowledge. A powerful story about the importance of literature and free thought in society.",
      "coverUrl": "https://via.placeholder.com/300x450/E74C3C/FFFFFF?text=Last+Library",
      "genre": "Dystopian",
      "tags": ["Books", "Censorship", "Resistance", "Knowledge", "Society"],
      "status": "completed",
      "difficulty": "intermediate",
      "createdAt": "2024-06-10",
      "updatedAt": "2024-09-18",
      "chapters": 28,
      "totalWords": 95000,
      "estimatedReadTime": "6 hours",
      "isCompleted": true,
      "stats": {
        "views": 15678,
        "likes": 1234,
        "comments": 456,
        "rating": 4.9,
        "inLibraries": 3456
      }
    },
    {
      "id": "novel4",
      "title": "Neon Hearts",
      "author": "Alex Kim",
      "authorId": "user5",
      "description": "A romance blooming in the backstreets of a futuristic Tokyo. Love finds a way even in the most technologically advanced and emotionally distant world.",
      "coverUrl": "https://via.placeholder.com/300x450/FF6B9D/FFFFFF?text=Neon+Hearts",
      "genre": "Romance",
      "tags": ["Love", "Future", "Tokyo", "Technology", "Relationships"],
      "status": "ongoing",
      "difficulty": "beginner",
      "createdAt": "2024-09-01",
      "updatedAt": "2024-09-20",
      "chapters": 8,
      "totalWords": 22000,
      "estimatedReadTime": "1.5 hours",
      "isCompleted": false,
      "stats": {
        "views": 6789,
        "likes": 445,
        "comments": 89,
        "rating": 4.3,
        "inLibraries": 1123
      }
    },
    {
      "id": "novel5",
      "title": "Code of Shadows",
      "author": "Anmol Babuani",
      "authorId": "creator",
      "description": "A thriller about a programmer who discovers a conspiracy hidden in open-source code. David Chen uncovers a web of secrets that threatens the entire tech industry.",
      "coverUrl": "https://via.placeholder.com/300x450/9B59B6/FFFFFF?text=Code+Shadows",
      "genre": "Thriller",
      "tags": ["Programming", "Conspiracy", "Tech", "Mystery", "Suspense"],
      "status": "completed",
      "difficulty": "intermediate",
      "createdAt": "2024-05-15",
      "updatedAt": "2024-09-15",
      "chapters": 35,
      "totalWords": 120000,
      "estimatedReadTime": "8 hours",
      "isCompleted": true,
      "stats": {
        "views": 23456,
        "likes": 1567,
        "comments": 678,
        "rating": 4.8,
        "inLibraries": 4567
      }
    },
    {
      "id": "novel6",
      "title": "Echoes of Tomorrow",
      "author": "Luna Martinez",
      "authorId": "user6",
      "description": "A time-traveling scientist tries to prevent a catastrophic future. But changing the past has consequences she never imagined.",
      "coverUrl": "https://via.placeholder.com/300x450/FFA500/FFFFFF?text=Echoes+Tomorrow",
      "genre": "Science Fiction",
      "tags": ["Time Travel", "Future", "Science", "Paradox", "Adventure"],
      "status": "ongoing",
      "difficulty": "advanced",
      "createdAt": "2024-04-20",
      "updatedAt": "2024-09-17",
      "chapters": 18,
      "totalWords": 54000,
      "estimatedReadTime": "3.5 hours",
      "isCompleted": false,
      "stats": {
        "views": 9876,
        "likes": 678,
        "comments": 234,
        "rating": 4.6,
        "inLibraries": 2109
      }
    },
    {
      "id": "novel7",
      "title": "The Quantum Garden",
      "author": "Dr. Raj Patel",
      "authorId": "user7",
      "description": "In a world where quantum physics meets botany, a scientist discovers plants that exist in multiple dimensions simultaneously.",
      "coverUrl": "https://via.placeholder.com/300x450/32CD32/FFFFFF?text=Quantum+Garden",
      "genre": "Science Fiction",
      "tags": ["Quantum", "Plants", "Science", "Dimensions", "Discovery"],
      "status": "completed",
      "difficulty": "advanced",
      "createdAt": "2024-03-12",
      "updatedAt": "2024-08-30",
      "chapters": 24,
      "totalWords": 67000,
      "estimatedReadTime": "4.5 hours",
      "isCompleted": true,
      "stats": {
        "views": 11234,
        "likes": 789,
        "comments": 156,
        "rating": 4.4,
        "inLibraries": 1876
      }
    },
    {
      "id": "novel8",
      "title": "Midnight Protocol",
      "author": "Zara Al-Rashid",
      "authorId": "user8",
      "description": "A cybersecurity expert uncovers a plot to control the world's digital infrastructure. Racing against time to prevent global chaos.",
      "coverUrl": "https://via.placeholder.com/300x450/800080/FFFFFF?text=Midnight+Protocol",
      "genre": "Cyberpunk",
      "tags": ["Cybersecurity", "Hacking", "Global", "Technology", "Thriller"],
      "status": "ongoing",
      "difficulty": "intermediate",
      "createdAt": "2024-08-01",
      "updatedAt": "2024-09-21",
      "chapters": 12,
      "totalWords": 38000,
      "estimatedReadTime": "2.5 hours",
      "isCompleted": false,
      "stats": {
        "views": 7645,
        "likes": 543,
        "comments": 98,
        "rating": 4.5,
        "inLibraries": 1432
      }
    },
    {
      "id": "novel9",
      "title": "Songs of the Star Weavers",
      "author": "Kenji Nakamura",
      "authorId": "user9",
      "description": "An epic fantasy about musicians who can manipulate reality through song. Magic and melody combine in this sweeping adventure.",
      "coverUrl": "https://via.placeholder.com/300x450/FFD700/000000?text=Star+Weavers",
      "genre": "Fantasy",
      "tags": ["Music", "Magic", "Adventure", "Reality", "Epic"],
      "status": "ongoing",
      "difficulty": "intermediate",
      "createdAt": "2024-07-05",
      "updatedAt": "2024-09-18",
      "chapters": 20,
      "totalWords": 76000,
      "estimatedReadTime": "5 hours",
      "isCompleted": false,
      "stats": {
        "views": 13567,
        "likes": 987,
        "comments": 287,
        "rating": 4.7,
        "inLibraries": 2654
      }
    },
    {
      "id": "novel10",
      "title": "The Memory Thief",
      "author": "Isabella Santos",
      "authorId": "user10",
      "description": "In a society where memories can be stolen and sold, a detective must solve crimes using fragments of stolen thoughts.",
      "coverUrl": "https://via.placeholder.com/300x450/DC143C/FFFFFF?text=Memory+Thief",
      "genre": "Mystery",
      "tags": ["Memory", "Detective", "Crime", "Mind", "Investigation"],
      "status": "completed",
      "difficulty": "intermediate",
      "createdAt": "2024-02-28",
      "updatedAt": "2024-07-20",
      "chapters": 31,
      "totalWords": 89000,
      "estimatedReadTime": "6 hours",
      "isCompleted": true,
      "stats": {
        "views": 18934,
        "likes": 1345,
        "comments": 423,
        "rating": 4.8,
        "inLibraries": 3789
      }
    }
  ],
  "genres": [
    {"name": "Cyberpunk", "color": "#BF40BF", "count": 2},
    {"name": "Space Opera", "color": "#4A90E2", "count": 1},
    {"name": "Romance", "color": "#FF6B9D", "count": 1},
    {"name": "Thriller", "color": "#9B59B6", "count": 1},
    {"name": "Dystopian", "color": "#E74C3C", "count": 1},
    {"name": "Science Fiction", "color": "#32CD32", "count": 2},
    {"name": "Fantasy", "color": "#FFD700", "count": 1},
    {"name": "Mystery", "color": "#DC143C", "count": 1}
  ],
  "trendingSearches": [
    "cyberpunk", "time travel", "AI", "space exploration", "magic", "mystery", "romance", "dystopian future"
  ],
  "userLibrary": ["novel1", "novel3", "novel5"],
  "readingProgress": {
    "novel1": {"currentChapter": 3, "progress": 20},
    "novel3": {"currentChapter": 28, "progress": 100},
    "novel5": {"currentChapter": 15, "progress": 43}
  }
};

// Application State
class BrowseApp {
  constructor() {
    this.novels = APP_DATA.novels;
    this.genres = APP_DATA.genres;
    this.trendingSearches = APP_DATA.trendingSearches;
    this.userLibrary = new Set(APP_DATA.userLibrary);
    this.readingProgress = APP_DATA.readingProgress;
    
    // Filters and search state
    this.currentSearch = '';
    this.currentFilters = {
      genres: new Set(),
      status: new Set(),
      length: new Set(),
      difficulty: new Set(),
      sort: 'popular'
    };
    this.advancedSearch = {
      title: '',
      author: '',
      tags: '',
      wordCount: ''
    };
    
    // Pagination state
    this.currentPage = 1;
    this.itemsPerPage = 24;
    this.filteredNovels = [];
    this.isLoading = false;
    
    // View state
    this.currentView = 'grid';
    this.showAdvancedSearch = false;
    
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.setupApp();
      });
    } else {
      this.setupApp();
    }
  }

  setupApp() {
    this.setupEventListeners();
    this.renderGenreFilters();
    this.renderTrendingKeywords();
    this.filterAndDisplayNovels();
    
    // Simulate initial loading
    this.showLoading();
    setTimeout(() => {
      this.hideLoading();
    }, 800);
  }

  setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.currentSearch = e.target.value;
        this.showSearchClear(e.target.value.length > 0);
        this.debounceSearch();
        this.showSearchSuggestions(e.target.value);
      });
      
      searchInput.addEventListener('focus', () => {
        if (searchInput.value) {
          this.showSearchSuggestions(searchInput.value);
        }
      });
      
      searchInput.addEventListener('blur', () => {
        setTimeout(() => this.hideSearchSuggestions(), 200);
      });
      
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.hideSearchSuggestions();
          this.filterAndDisplayNovels();
        }
      });
    }
    
    if (searchClear) {
      searchClear.addEventListener('click', () => {
        if (searchInput) {
          searchInput.value = '';
          searchInput.focus();
        }
        this.currentSearch = '';
        this.showSearchClear(false);
        this.hideSearchSuggestions();
        this.filterAndDisplayNovels();
      });
    }

    // Filter functionality
    document.addEventListener('change', (e) => {
      if (e.target.name === 'sort') {
        this.currentFilters.sort = e.target.value;
        this.filterAndDisplayNovels();
      } else if (e.target.type === 'checkbox') {
        this.handleFilterChange(e.target);
      }
    });

    // Clear filters
    const clearFilters = document.getElementById('clear-filters');
    const clearAllFilters = document.getElementById('clear-all-filters');
    const clearMobileFilters = document.getElementById('clear-mobile-filters');
    
    [clearFilters, clearAllFilters, clearMobileFilters].forEach(btn => {
      if (btn) {
        btn.addEventListener('click', () => this.clearAllFilters());
      }
    });

    // Advanced search
    const advancedSearchToggle = document.getElementById('advanced-search-toggle');
    if (advancedSearchToggle) {
      advancedSearchToggle.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleAdvancedSearch();
      });
    }

    // Advanced search inputs
    ['title-search', 'author-search', 'tags-search', 'word-count-range'].forEach(id => {
      const input = document.getElementById(id);
      if (input) {
        input.addEventListener('input', () => {
          this.updateAdvancedSearch();
        });
      }
    });

    // View toggle
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('view-btn')) {
        this.switchView(e.target.dataset.view);
      }
    });

    // Filter modal (mobile)
    const filterToggle = document.getElementById('filter-toggle');
    const closeFilterModal = document.getElementById('close-filter-modal');
    const applyMobileFilters = document.getElementById('apply-mobile-filters');
    
    if (filterToggle) {
      filterToggle.addEventListener('click', (e) => {
        e.preventDefault();
        this.showFilterModal();
      });
    }
    
    if (closeFilterModal) {
      closeFilterModal.addEventListener('click', () => {
        this.hideFilterModal();
      });
    }
    
    if (applyMobileFilters) {
      applyMobileFilters.addEventListener('click', () => {
        this.applyMobileFilters();
        this.hideFilterModal();
      });
    }

    // Pagination
    const prevPage = document.getElementById('prev-page');
    const nextPage = document.getElementById('next-page');
    const itemsPerPageSelect = document.getElementById('items-per-page');
    
    if (prevPage) {
      prevPage.addEventListener('click', () => {
        if (this.currentPage > 1) {
          this.currentPage--;
          this.displayNovels();
          this.scrollToTop();
        }
      });
    }
    
    if (nextPage) {
      nextPage.addEventListener('click', () => {
        const maxPages = Math.ceil(this.filteredNovels.length / this.itemsPerPage);
        if (this.currentPage < maxPages) {
          this.currentPage++;
          this.displayNovels();
          this.scrollToTop();
        }
      });
    }
    
    if (itemsPerPageSelect) {
      itemsPerPageSelect.addEventListener('change', (e) => {
        this.itemsPerPage = parseInt(e.target.value);
        this.currentPage = 1;
        this.displayNovels();
      });
    }

    // Close modals on background click
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        e.target.classList.add('hidden');
      }
    });

    // Close novel modal
    const closeNovelModal = document.getElementById('close-novel-modal');
    if (closeNovelModal) {
      closeNovelModal.addEventListener('click', () => {
        document.getElementById('novel-modal').classList.add('hidden');
      });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
          modal.classList.add('hidden');
        });
        this.hideSearchSuggestions();
      }
    });
  }

  debounceSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.filterAndDisplayNovels();
    }, 300);
  }

  showSearchClear(show) {
    const searchClear = document.getElementById('search-clear');
    if (searchClear) {
      searchClear.classList.toggle('show', show);
    }
  }

  showSearchSuggestions(query) {
    const suggestions = document.getElementById('search-suggestions');
    if (!suggestions || query.length < 2) {
      this.hideSearchSuggestions();
      return;
    }

    const matches = this.getSearchSuggestions(query);
    if (matches.length === 0) {
      this.hideSearchSuggestions();
      return;
    }

    suggestions.innerHTML = matches.map(match => `
      <div class="suggestion-item" data-suggestion="${match.text}" data-type="${match.type}">
        <i class="fas ${match.icon} suggestion-icon"></i>
        <span>${match.text}</span>
        <small style="margin-left: auto; color: var(--color-text-secondary);">${match.type}</small>
      </div>
    `).join('');
    
    // Add click listeners to suggestions
    suggestions.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('click', () => {
        this.selectSuggestion(item.dataset.suggestion, item.dataset.type);
      });
    });
    
    suggestions.classList.add('show');
  }

  hideSearchSuggestions() {
    const suggestions = document.getElementById('search-suggestions');
    if (suggestions) {
      suggestions.classList.remove('show');
    }
  }

  getSearchSuggestions(query) {
    const suggestions = [];
    const lowerQuery = query.toLowerCase();
    
    // Novel titles
    this.novels.forEach(novel => {
      if (novel.title.toLowerCase().includes(lowerQuery)) {
        suggestions.push({
          text: novel.title,
          type: 'Novel',
          icon: 'fa-book'
        });
      }
    });
    
    // Authors
    const authors = new Set();
    this.novels.forEach(novel => {
      if (novel.author.toLowerCase().includes(lowerQuery) && !authors.has(novel.author)) {
        authors.add(novel.author);
        suggestions.push({
          text: novel.author,
          type: 'Author',
          icon: 'fa-user'
        });
      }
    });
    
    // Genres
    this.genres.forEach(genre => {
      if (genre.name.toLowerCase().includes(lowerQuery)) {
        suggestions.push({
          text: genre.name,
          type: 'Genre',
          icon: 'fa-tag'
        });
      }
    });
    
    return suggestions.slice(0, 8);
  }

  selectSuggestion(text, type) {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.value = text;
      this.currentSearch = text;
      this.hideSearchSuggestions();
      this.filterAndDisplayNovels();
    }
  }

  renderGenreFilters() {
    const genreFilters = document.getElementById('genre-filters');
    if (!genreFilters) return;
    
    genreFilters.innerHTML = this.genres.map(genre => `
      <label class="filter-option">
        <input type="checkbox" value="${genre.name.toLowerCase()}" data-filter-type="genres">
        <span class="checkmark">${genre.name} (${genre.count})</span>
      </label>
    `).join('');
  }

  renderTrendingKeywords() {
    const keywordPills = document.getElementById('keyword-pills');
    if (!keywordPills) return;
    
    keywordPills.innerHTML = this.trendingSearches.map(keyword => `
      <span class="keyword-pill" data-keyword="${keyword}">${keyword}</span>
    `).join('');

    // Add click listeners to keyword pills
    keywordPills.querySelectorAll('.keyword-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        this.searchByKeyword(pill.dataset.keyword);
      });
    });
  }

  searchByKeyword(keyword) {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.value = keyword;
      this.currentSearch = keyword;
      this.showSearchClear(true);
      this.filterAndDisplayNovels();
    }
  }

  handleFilterChange(checkbox) {
    const filterType = checkbox.dataset.filterType || this.getFilterType(checkbox);
    if (!filterType) return;
    
    if (checkbox.checked) {
      this.currentFilters[filterType].add(checkbox.value);
    } else {
      this.currentFilters[filterType].delete(checkbox.value);
    }
    
    this.filterAndDisplayNovels();
  }

  getFilterType(checkbox) {
    const parent = checkbox.closest('.filter-group');
    if (!parent) return null;
    
    const title = parent.querySelector('.filter-title').textContent.toLowerCase();
    if (title.includes('genre')) return 'genres';
    if (title.includes('status')) return 'status';
    if (title.includes('length')) return 'length';
    if (title.includes('level')) return 'difficulty';
    return null;
  }

  clearAllFilters() {
    // Clear search
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.value = '';
    }
    this.currentSearch = '';
    this.showSearchClear(false);
    
    // Clear all filter sets
    Object.keys(this.currentFilters).forEach(key => {
      if (this.currentFilters[key] instanceof Set) {
        this.currentFilters[key].clear();
      }
    });
    this.currentFilters.sort = 'popular';
    
    // Clear advanced search
    Object.keys(this.advancedSearch).forEach(key => {
      this.advancedSearch[key] = '';
    });
    
    // Clear UI
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.checked = false;
    });
    const popularRadio = document.querySelector('input[value="popular"]');
    if (popularRadio) {
      popularRadio.checked = true;
    }
    
    // Clear advanced search inputs
    ['title-search', 'author-search', 'tags-search'].forEach(id => {
      const input = document.getElementById(id);
      if (input) input.value = '';
    });
    
    const wordCountSelect = document.getElementById('word-count-range');
    if (wordCountSelect) wordCountSelect.selectedIndex = 0;
    
    this.filterAndDisplayNovels();
  }

  toggleAdvancedSearch() {
    this.showAdvancedSearch = !this.showAdvancedSearch;
    const panel = document.getElementById('advanced-search-panel');
    const toggle = document.getElementById('advanced-search-toggle');
    
    if (panel) {
      panel.classList.toggle('hidden', !this.showAdvancedSearch);
    }
    if (toggle) {
      toggle.classList.toggle('active', this.showAdvancedSearch);
    }
  }

  updateAdvancedSearch() {
    this.advancedSearch.title = document.getElementById('title-search')?.value || '';
    this.advancedSearch.author = document.getElementById('author-search')?.value || '';
    this.advancedSearch.tags = document.getElementById('tags-search')?.value || '';
    this.advancedSearch.wordCount = document.getElementById('word-count-range')?.value || '';
    
    this.debounceSearch();
  }

  filterAndDisplayNovels() {
    this.showLoading();
    
    setTimeout(() => {
      this.filteredNovels = this.applyFilters(this.novels);
      this.currentPage = 1;
      this.displayNovels();
      this.hideLoading();
    }, 200);
  }

  applyFilters(novels) {
    let filtered = [...novels];
    
    // Apply search filter
    if (this.currentSearch) {
      const query = this.currentSearch.toLowerCase();
      filtered = filtered.filter(novel => 
        novel.title.toLowerCase().includes(query) ||
        novel.author.toLowerCase().includes(query) ||
        novel.description.toLowerCase().includes(query) ||
        novel.genre.toLowerCase().includes(query) ||
        novel.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Apply advanced search filters
    if (this.advancedSearch.title) {
      filtered = filtered.filter(novel => 
        novel.title.toLowerCase().includes(this.advancedSearch.title.toLowerCase())
      );
    }
    
    if (this.advancedSearch.author) {
      filtered = filtered.filter(novel => 
        novel.author.toLowerCase().includes(this.advancedSearch.author.toLowerCase())
      );
    }
    
    if (this.advancedSearch.tags) {
      const searchTags = this.advancedSearch.tags.toLowerCase().split(',').map(t => t.trim());
      filtered = filtered.filter(novel => 
        searchTags.some(tag => 
          novel.tags.some(novelTag => novelTag.toLowerCase().includes(tag))
        )
      );
    }
    
    if (this.advancedSearch.wordCount) {
      filtered = filtered.filter(novel => {
        const words = novel.totalWords;
        switch(this.advancedSearch.wordCount) {
          case '0-25000': return words < 25000;
          case '25000-50000': return words >= 25000 && words < 50000;
          case '50000-100000': return words >= 50000 && words < 100000;
          case '100000+': return words >= 100000;
          default: return true;
        }
      });
    }
    
    // Apply genre filter
    if (this.currentFilters.genres.size > 0) {
      filtered = filtered.filter(novel =>
        this.currentFilters.genres.has(novel.genre.toLowerCase())
      );
    }
    
    // Apply status filter
    if (this.currentFilters.status.size > 0) {
      filtered = filtered.filter(novel => {
        if (this.currentFilters.status.has('completed') && novel.isCompleted) return true;
        if (this.currentFilters.status.has('ongoing') && !novel.isCompleted) return true;
        if (this.currentFilters.status.has('updated')) {
          const daysSinceUpdate = (new Date() - new Date(novel.updatedAt)) / (1000 * 60 * 60 * 24);
          return daysSinceUpdate <= 7;
        }
        return false;
      });
    }
    
    // Apply length filter
    if (this.currentFilters.length.size > 0) {
      filtered = filtered.filter(novel => {
        const readTime = parseFloat(novel.estimatedReadTime);
        if (this.currentFilters.length.has('short') && readTime < 2) return true;
        if (this.currentFilters.length.has('novella') && readTime >= 2 && readTime <= 5) return true;
        if (this.currentFilters.length.has('novel') && readTime > 5) return true;
        return false;
      });
    }
    
    // Apply difficulty filter
    if (this.currentFilters.difficulty.size > 0) {
      filtered = filtered.filter(novel =>
        this.currentFilters.difficulty.has(novel.difficulty)
      );
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      switch(this.currentFilters.sort) {
        case 'recent':
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        case 'rating':
          return b.stats.rating - a.stats.rating;
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        case 'popular':
        default:
          return b.stats.views - a.stats.views;
      }
    });
    
    return filtered;
  }

  displayNovels() {
    const novelsGrid = document.getElementById('novels-grid');
    const resultsCount = document.getElementById('results-count');
    const emptyState = document.getElementById('empty-state');
    
    if (!novelsGrid) return;
    
    // Update results count
    if (resultsCount) {
      resultsCount.textContent = this.filteredNovels.length;
    }
    
    // Show empty state if no results
    if (this.filteredNovels.length === 0) {
      novelsGrid.classList.add('hidden');
      if (emptyState) {
        emptyState.classList.remove('hidden');
        this.renderEmptyStateSuggestions();
      }
      this.hidePagination();
      return;
    }
    
    // Hide empty state and show grid
    novelsGrid.classList.remove('hidden');
    if (emptyState) {
      emptyState.classList.add('hidden');
    }
    
    // Calculate pagination
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const novelsToShow = this.filteredNovels.slice(startIndex, endIndex);
    
    // Render novels
    novelsGrid.innerHTML = novelsToShow.map(novel => this.createNovelCard(novel)).join('');
    
    // Update pagination
    this.updatePagination();
    
    // Add event listeners to novel cards
    this.addNovelCardListeners();
  }

  createNovelCard(novel) {
    const isInLibrary = this.userLibrary.has(novel.id);
    const progress = this.readingProgress[novel.id];
    const isRecentlyUpdated = this.isRecentlyUpdated(novel.updatedAt);
    
    return `
      <div class="novel-card" data-novel-id="${novel.id}">
        <div class="novel-cover" style="background-image: url('${novel.coverUrl}')"></div>
        <div class="novel-info">
          <div class="novel-header">
            <div>
              <h3 class="novel-title">${novel.title}</h3>
              <div class="novel-author">${novel.author}</div>
            </div>
            <button class="add-to-library-btn ${isInLibrary ? 'added' : ''}" 
                    data-novel-id="${novel.id}"
                    title="${isInLibrary ? 'Remove from Library' : 'Add to Library'}">
              <i class="fas fa-heart"></i>
            </button>
          </div>
          
          <p class="novel-description">${novel.description}</p>
          
          <div class="novel-meta">
            <span class="novel-genre" style="color: ${this.getGenreColor(novel.genre)}">${novel.genre}</span>
            <div class="novel-stats">
              <span class="stat-item">
                <i class="fas fa-eye"></i>
                ${this.formatNumber(novel.stats.views)}
              </span>
              <span class="stat-item">
                <i class="fas fa-heart"></i>
                ${this.formatNumber(novel.stats.likes)}
              </span>
              <span class="stat-item">
                <i class="fas fa-star"></i>
                ${novel.stats.rating}
              </span>
            </div>
          </div>
          
          <div class="novel-badges">
            ${novel.isCompleted ? '<span class="novel-badge completed">Completed</span>' : ''}
            ${isRecentlyUpdated ? '<span class="novel-badge updated">Recently Updated</span>' : ''}
            <span class="novel-badge">${novel.chapters} chapters</span>
            <span class="novel-badge">${novel.estimatedReadTime}</span>
          </div>
          
          ${progress ? `
            <div class="reading-progress">
              <div class="progress-label">Progress: Chapter ${progress.currentChapter} (${progress.progress}%)</div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress.progress}%"></div>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  addNovelCardListeners() {
    // Novel card clicks
    document.querySelectorAll('.novel-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (!e.target.closest('.add-to-library-btn')) {
          const novelId = card.dataset.novelId;
          this.openNovelModal(novelId);
        }
      });
      
      // Add hover effect for cover zoom
      const cover = card.querySelector('.novel-cover');
      if (cover) {
        card.addEventListener('mouseenter', () => {
          cover.style.transform = 'scale(1.05)';
          cover.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
          cover.style.transform = 'scale(1)';
        });
      }
    });

    // Library button clicks
    document.querySelectorAll('.add-to-library-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const novelId = btn.dataset.novelId;
        this.toggleLibrary(novelId);
      });
    });
  }

  toggleLibrary(novelId) {
    if (this.userLibrary.has(novelId)) {
      this.userLibrary.delete(novelId);
    } else {
      this.userLibrary.add(novelId);
    }
    
    // Update the button state
    const btn = document.querySelector(`[data-novel-id="${novelId}"] .add-to-library-btn`);
    if (btn) {
      btn.classList.toggle('added');
      btn.title = this.userLibrary.has(novelId) ? 'Remove from Library' : 'Add to Library';
    }
  }

  openNovelModal(novelId) {
    const novel = this.novels.find(n => n.id === novelId);
    if (!novel) return;
    
    const modal = document.getElementById('novel-modal');
    const novelDetail = document.getElementById('novel-detail');
    
    if (!modal || !novelDetail) return;
    
    const isInLibrary = this.userLibrary.has(novelId);
    const progress = this.readingProgress[novelId];
    
    novelDetail.innerHTML = `
      <div class="novel-detail-content">
        <div class="novel-detail-header" style="display: flex; gap: 2rem; margin-bottom: 2rem;">
          <img src="${novel.coverUrl}" alt="${novel.title}" style="width: 200px; height: 300px; object-fit: cover; border-radius: 12px;">
          <div class="novel-detail-info" style="flex: 1;">
            <h2 style="margin: 0 0 0.5rem 0; font-size: 2rem;">${novel.title}</h2>
            <p style="margin: 0 0 1rem 0; font-size: 1.25rem; color: var(--anmol-purple);">by ${novel.author}</p>
            <div style="margin-bottom: 1rem; display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; font-size: 0.875rem; color: var(--color-text-secondary);">
              <span class="novel-genre" style="color: ${this.getGenreColor(novel.genre)}; font-weight: 500;">${novel.genre}</span>
              <span>•</span>
              <span>${novel.chapters} chapters</span>
              <span>•</span>
              <span>${novel.estimatedReadTime}</span>
              <span>•</span>
              <span>${this.formatNumber(novel.totalWords)} words</span>
            </div>
            <div style="display: flex; gap: 2rem; margin-bottom: 1.5rem;">
              <div style="text-align: center;">
                <div style="font-size: 1.5rem; font-weight: 600; color: var(--anmol-purple);">${this.formatNumber(novel.stats.views)}</div>
                <div style="font-size: 0.75rem; color: var(--color-text-secondary);">Views</div>
              </div>
              <div style="text-align: center;">
                <div style="font-size: 1.5rem; font-weight: 600; color: var(--anmol-purple);">${this.formatNumber(novel.stats.likes)}</div>
                <div style="font-size: 0.75rem; color: var(--color-text-secondary);">Likes</div>
              </div>
              <div style="text-align: center;">
                <div style="font-size: 1.5rem; font-weight: 600; color: var(--anmol-purple);">${novel.stats.rating}</div>
                <div style="font-size: 0.75rem; color: var(--color-text-secondary);">Rating</div>
              </div>
            </div>
          </div>
        </div>
        
        <div style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1rem;">Description</h3>
          <p style="line-height: 1.6; color: var(--color-text-secondary);">${novel.description}</p>
        </div>
        
        <div style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1rem;">Tags</h3>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            ${novel.tags.map(tag => `<span style="background: var(--anmol-glass); border: 1px solid var(--anmol-glass-border); padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.75rem; color: var(--anmol-purple);">${tag}</span>`).join('')}
          </div>
        </div>
        
        ${progress ? `
          <div style="margin-bottom: 2rem;">
            <h3 style="margin-bottom: 1rem;">Your Progress</h3>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.875rem;">
              <span>Chapter ${progress.currentChapter} of ${novel.chapters}</span>
              <span>${progress.progress}% complete</span>
            </div>
            <div style="height: 6px; background: var(--anmol-surface-light); border-radius: 3px; overflow: hidden;">
              <div style="height: 100%; background: var(--anmol-purple); width: ${progress.progress}%; transition: width 0.3s ease;"></div>
            </div>
          </div>
        ` : ''}
        
        <div style="display: flex; gap: 1rem;">
          <button class="btn btn--primary" onclick="app.startReading('${novelId}')" style="flex: 1;">
            <i class="fas fa-book-open"></i>
            ${progress ? 'Continue Reading' : 'Start Reading'}
          </button>
          <button class="btn btn--outline ${isInLibrary ? 'added' : ''}" 
                  onclick="app.toggleLibrary('${novelId}'); app.updateModalLibraryBtn('${novelId}')" style="flex: 1;">
            <i class="fas fa-heart"></i>
            ${isInLibrary ? 'In Library' : 'Add to Library'}
          </button>
        </div>
      </div>
    `;
    
    modal.classList.remove('hidden');
  }

  updateModalLibraryBtn(novelId) {
    const isInLibrary = this.userLibrary.has(novelId);
    const btn = document.querySelector('#novel-detail .btn--outline');
    if (btn) {
      btn.classList.toggle('added', isInLibrary);
      btn.innerHTML = `
        <i class="fas fa-heart"></i>
        ${isInLibrary ? 'In Library' : 'Add to Library'}
      `;
    }
  }

  startReading(novelId) {
    alert(`Starting to read novel: ${this.novels.find(n => n.id === novelId)?.title}. This would navigate to the reading page.`);
  }

  updatePagination() {
    const totalPages = Math.ceil(this.filteredNovels.length / this.itemsPerPage);
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    const pageNumbers = document.getElementById('page-numbers');
    const paginationContainer = document.getElementById('pagination-container');
    
    if (!paginationContainer) return;
    
    if (totalPages <= 1) {
      paginationContainer.classList.add('hidden');
      return;
    }
    
    paginationContainer.classList.remove('hidden');
    
    // Update prev/next buttons
    if (prevBtn) {
      prevBtn.disabled = this.currentPage === 1;
    }
    if (nextBtn) {
      nextBtn.disabled = this.currentPage === totalPages;
    }
    
    // Update page numbers
    if (pageNumbers) {
      const pageHTML = this.generatePageNumbers(totalPages);
      pageNumbers.innerHTML = pageHTML;
      
      // Add click listeners to page numbers
      pageNumbers.querySelectorAll('.page-number').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const page = parseInt(e.target.textContent);
          if (page && page !== this.currentPage) {
            this.currentPage = page;
            this.displayNovels();
            this.scrollToTop();
          }
        });
      });
    }
  }

  generatePageNumbers(totalPages) {
    const pages = [];
    const maxVisiblePages = 7;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(1, this.currentPage - 3);
      const end = Math.min(totalPages, this.currentPage + 3);
      
      if (start > 1) {
        pages.push(1);
        if (start > 2) pages.push('...');
      }
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (end < totalPages) {
        if (end < totalPages - 1) pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages.map(page => {
      if (page === '...') {
        return '<span class="page-ellipsis">...</span>';
      }
      return `<button class="page-number ${page === this.currentPage ? 'active' : ''}">${page}</button>`;
    }).join('');
  }

  hidePagination() {
    const paginationContainer = document.getElementById('pagination-container');
    if (paginationContainer) {
      paginationContainer.classList.add('hidden');
    }
  }

  renderEmptyStateSuggestions() {
    const suggestionPills = document.getElementById('suggestion-pills');
    if (!suggestionPills) return;
    
    suggestionPills.innerHTML = this.trendingSearches.slice(0, 4).map(search => `
      <span class="keyword-pill" data-keyword="${search}">${search}</span>
    `).join('');

    // Add click listeners
    suggestionPills.querySelectorAll('.keyword-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        this.searchByKeyword(pill.dataset.keyword);
      });
    });
  }

  showFilterModal() {
    const modal = document.getElementById('filter-modal');
    const mobileFilters = document.getElementById('mobile-filters');
    const sidebar = document.getElementById('filters-sidebar');
    
    if (modal && mobileFilters && sidebar) {
      mobileFilters.innerHTML = sidebar.innerHTML;
      modal.classList.remove('hidden');
      
      // Re-attach event listeners to mobile filters
      this.attachMobileFilterListeners();
    }
  }

  attachMobileFilterListeners() {
    const mobileFilters = document.getElementById('mobile-filters');
    if (!mobileFilters) return;
    
    // Add event listeners to mobile filter checkboxes
    mobileFilters.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(input => {
      input.addEventListener('change', (e) => {
        if (e.target.name === 'sort') {
          this.currentFilters.sort = e.target.value;
        } else if (e.target.type === 'checkbox') {
          this.handleFilterChange(e.target);
        }
      });
    });
  }

  applyMobileFilters() {
    // Filters are already applied through event listeners
    this.filterAndDisplayNovels();
  }

  hideFilterModal() {
    const modal = document.getElementById('filter-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  switchView(view) {
    this.currentView = view;
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === view);
    });
    
    const novelsGrid = document.getElementById('novels-grid');
    if (novelsGrid) {
      novelsGrid.className = view === 'list' ? 'novels-list' : 'novels-grid';
    }
  }

  showLoading() {
    this.isLoading = true;
    const loadingSkeleton = document.getElementById('loading-skeleton');
    const novelsGrid = document.getElementById('novels-grid');
    
    if (loadingSkeleton && novelsGrid) {
      loadingSkeleton.classList.remove('hidden');
      novelsGrid.classList.add('hidden');
      
      // Generate skeleton cards
      const skeletonGrid = loadingSkeleton.querySelector('.skeleton-grid');
      if (skeletonGrid) {
        skeletonGrid.innerHTML = Array(8).fill().map(() => '<div class="skeleton-card"></div>').join('');
      }
    }
  }

  hideLoading() {
    this.isLoading = false;
    const loadingSkeleton = document.getElementById('loading-skeleton');
    if (loadingSkeleton) {
      loadingSkeleton.classList.add('hidden');
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  getGenreColor(genre) {
    const genreData = this.genres.find(g => g.name === genre);
    return genreData ? genreData.color : '#BF40BF';
  }

  isRecentlyUpdated(updatedAt) {
    const daysSinceUpdate = (new Date() - new Date(updatedAt)) / (1000 * 60 * 60 * 24);
    return daysSinceUpdate <= 7;
  }

  formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  }
}

// Initialize app
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new BrowseApp();
  
  // Make app globally available for onclick handlers
  window.app = app;
});