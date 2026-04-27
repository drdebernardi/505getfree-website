/* 505 GET FREE — Shared nav/footer injection
   Usage: include <div id="chrome-top"></div>, <div id="chrome-bottom"></div>
   Page must load this AFTER body begins.
*/
(function(){
  const TOP = `
  <div class="topbar">
    <span><span class="dot"></span> Hotline open 24 / 7 · Call or Text (505) 438-3733</span>
    <span>Free · Confidential · Statewide</span>
  </div>
  <nav class="primary">
    <a href="index.html" class="nav-logo">
      <img src="images/logo-main.png" alt="505 Get Free">
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li>
        <span>About</span>
        <ul class="nav-dropdown">
          <li><a href="about.html#initiative">Our Initiative</a></li>
          <li><a href="about.html#mission">Our Mission</a></li>
          <li><a href="about.html#staff">Our Staff</a></li>
          <li><a href="about.html#partnerships">Partnerships</a></li>
          <li><a href="signage.html">Mandatory Signage</a></li>
          <li><a href="news.html">Media</a></li>
        </ul>
      </li>
      <li>
        <span>Resources</span>
        <ul class="nav-dropdown">
          <li><a href="resources.html?city=albuquerque">Albuquerque</a></li>
          <li><a href="resources.html?city=santa-fe">Santa Fe</a></li>
          <li><a href="resources.html?city=las-cruces">Las Cruces</a></li>
          <li><a href="resources.html?city=taos">Taos</a></li>
          <li><a href="resources.html?city=farmington">Farmington</a></li>
          <li><a href="resources.html?city=hobbs">Hobbs</a></li>
          <li><a href="resources.html">View all →</a></li>
        </ul>
      </li>
      <li><a href="news.html">News &amp; Media</a></li>
      <li><a href="reporting.html">Reporting</a></li>
      <li>
        <span>How to Help</span>
        <ul class="nav-dropdown">
          <li><a href="get-listed.html">Get Listed in Our Directory</a></li>
          <li><a href="donate.html">Donate</a></li>
        </ul>
      </li>
      <li><a href="get-help.html" class="nav-cta">Get Help</a></li>
    </ul>
    <div class="nav-right">
      <button class="nav-exit-btn" onclick="exitSite()" title="Quickly leave this site">EXIT<br>SITE</button>
      <button class="hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-nav">
    <a href="index.html">Home</a>
    <span>About</span>
    <div class="mobile-sub">
      <a href="about.html#initiative">Our Initiative</a>
      <a href="about.html#mission">Our Mission</a>
      <a href="about.html#staff">Our Staff</a>
      <a href="about.html#partnerships">Partnerships</a>
      <a href="signage.html">Mandatory Signage</a>
    </div>
    <span>Resources</span>
    <div class="mobile-sub">
      <a href="resources.html?city=albuquerque">Albuquerque</a>
      <a href="resources.html?city=santa-fe">Santa Fe</a>
      <a href="resources.html?city=las-cruces">Las Cruces</a>
      <a href="resources.html?city=taos">Taos</a>
      <a href="resources.html">View All →</a>
    </div>
    <a href="news.html">News &amp; Media</a>
    <a href="reporting.html">Reporting</a>
    <a href="get-listed.html">Get Listed in Directory</a>
    <div class="mobile-cta"><a href="get-help.html">Get Help Now</a></div>
  </div>`;

  const BOTTOM = `
  <footer>
    <div class="footer-inner">
      <div>
        <img class="footer-logo" src="images/logo-main.png" alt="505 Get Free">
        <p class="footer-tagline">New Mexico's Human Trafficking Resource Hotline — quietly connecting survivors and communities with help since 2012.</p>
        <a href="tel:+15054383733" class="footer-hotline">(505) 438-3733</a>
        <span class="footer-hotline-label">Call or Text · 24 / 7 · Confidential</span>
      </div>
      <div class="footer-col">
        <h4>About</h4>
        <ul>
          <li><a href="about.html#initiative">Our Initiative</a></li>
          <li><a href="about.html#mission">Our Mission</a></li>
          <li><a href="about.html#staff">Our Staff</a></li>
          <li><a href="about.html#partnerships">Partnerships</a></li>
          <li><a href="news.html">News &amp; Media</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Resources</h4>
        <ul>
          <li><a href="resources.html?city=albuquerque">Albuquerque</a></li>
          <li><a href="resources.html?city=santa-fe">Santa Fe</a></li>
          <li><a href="resources.html?city=las-cruces">Las Cruces</a></li>
          <li><a href="resources.html?city=taos">Taos</a></li>
          <li><a href="resources.html">All locations →</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Take Action</h4>
        <ul>
          <li><a href="reporting.html">Submit a Report</a></li>
          <li><a href="get-listed.html">Get Listed in Directory</a></li>
          <li><a href="signage.html">Download Signage</a></li>
          <li><a href="donate.html">Donate</a></li>
          <li><a href="mailto:505getfree@gmail.com">Contact Us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 505 GET FREE · <a href="mailto:505getfree@gmail.com">505getfree@gmail.com</a></p>
      <p style="opacity:.55;">If you are in danger, call 911.</p>
      <button class="footer-exit-btn" onclick="exitSite()">Exit this site</button>
    </div>
  </footer>`;

  window.exitSite = function(){
    try { window.location.replace('https://weather.com'); }
    catch(e){ window.location.href = 'https://weather.com'; }
  };

  function init(){
    const top = document.getElementById('chrome-top');
    const bot = document.getElementById('chrome-bottom');
    if (top) top.outerHTML = TOP;
    if (bot) bot.outerHTML = BOTTOM;

    const ham = document.querySelector('.hamburger');
    const mnav = document.querySelector('.mobile-nav');
    if (ham && mnav){
      ham.addEventListener('click', () => {
        ham.classList.toggle('open');
        mnav.classList.toggle('open');
      });
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting){
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.14 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Mark active nav link
    const path = (location.pathname.split('/').pop() || 'index.html').split('?')[0].split('#')[0];
    document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
      const href = (a.getAttribute('href') || '').split('?')[0].split('#')[0];
      if (href === path) a.style.color = 'var(--navy)';
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
