/**
 * 505 GET FREE — Main JavaScript
 * Handles: news rendering, mobile menu, exit button, smooth UI
 */

/* ─── QUICK EXIT ─── */
function exitSite() {
  window.location.replace('https://www.google.com');
}

/* ─── MOBILE MENU ─── */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ─── NEWS GRID RENDERER ─── */
function renderNews(containerId, maxPosts = 3) {
  const container = document.getElementById(containerId);
  if (!container || typeof POSTS === 'undefined') return;

  const postsToShow = POSTS.slice(0, maxPosts);

  container.innerHTML = postsToShow.map(post => `
    <article class="news-card">
      ${post.imageUrl
        ? `<img class="news-card-img" src="${post.imageUrl}" alt="${post.title}" loading="lazy">`
        : `<div class="news-card-img-placeholder">${post.emoji || '📰'}</div>`
      }
      <div class="news-card-body">
        <div class="news-card-meta">
          <span class="news-card-cat">${post.category}</span>
          <span class="news-card-date">${post.date}</span>
        </div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <a href="news.html#${post.slug}" class="news-card-link">Read More</a>
      </div>
    </article>
  `).join('');
}

/* ─── NEWS LISTING PAGE RENDERER ─── */
function renderAllNews(containerId) {
  const container = document.getElementById(containerId);
  if (!container || typeof POSTS === 'undefined') return;

  // Group by year
  const byYear = {};
  POSTS.forEach(post => {
    const year = post.date.split(', ')[1];
    if (!byYear[year]) byYear[year] = [];
    byYear[year].push(post);
  });

  const years = Object.keys(byYear).sort((a,b) => b - a);

  container.innerHTML = years.map(year => `
    <div class="news-year-group">
      <h2 class="news-year-label">${year}</h2>
      <div class="news-grid">
        ${byYear[year].map(post => `
          <article class="news-card" id="${post.slug}">
            ${post.imageUrl
              ? `<img class="news-card-img" src="${post.imageUrl}" alt="${post.title}" loading="lazy">`
              : `<div class="news-card-img-placeholder">${post.emoji || '📰'}</div>`
            }
            <div class="news-card-body">
              <div class="news-card-meta">
                <span class="news-card-cat">${post.category}</span>
                <span class="news-card-date">${post.date}</span>
              </div>
              <h3>${post.title}</h3>
              <p>${post.excerpt}</p>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ─── ACTIVE NAV LINK ─── */
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path) link.style.color = 'var(--navy)';
  });
}

/* ─── SCROLL ANIMATIONS (subtle fade-in) ─── */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.who-card, .step, .stat-item, .news-card, .location-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

/* ─── FADE-IN CSS (injected so no extra file needed) ─── */
function injectAnimationStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .fade-in { opacity: 0; transform: translateY(16px); transition: opacity 0.5s ease, transform 0.5s ease; }
    .fade-in.visible { opacity: 1; transform: translateY(0); }
  `;
  document.head.appendChild(style);
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  setActiveNav();
  injectAnimationStyles();

  // Render news if containers exist
  renderNews('news-grid-home', 3);
  renderAllNews('news-grid-all');

  // Scroll animations (only if IntersectionObserver supported)
  if ('IntersectionObserver' in window) {
    initScrollAnimations();
  }
});
