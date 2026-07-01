/* 505 GET FREE — Vigil Redraft · shared behavior
   The phase engine keeps every page on New Mexico time.
   Pages can listen for the 'vigil:phase' event, and the
   homepage dial can drive it via VIGIL.preview()/live(). */

(function(){
  var doc = document.documentElement;
  var live = true;

  function fmt(mins){
    var h = Math.floor(mins/60), m = mins%60;
    var ap = h < 12 ? 'AM' : 'PM';
    var hh = h%12; if (hh === 0) hh = 12;
    return hh + ':' + (m<10?'0':'') + m + ' ' + ap;
  }

  function apply(mins, isLive){
    var phase = window.NM_CLOCK.phaseOf(mins);
    doc.setAttribute('data-phase', phase);
    doc.setAttribute('data-dark', phase === 'night' ? '1' : '0');
    // topbar clock, if present
    var clockEl = document.querySelector('.nm-clock');
    if (clockEl) clockEl.textContent = (isLive ? 'It is ' : 'Previewing ') + fmt(mins) + ' in New Mexico';
    document.dispatchEvent(new CustomEvent('vigil:phase', { detail: { minutes: mins, phase: phase, live: !!isLive } }));
  }

  window.VIGIL = {
    fmt: fmt,
    isLive: function(){ return live; },
    preview: function(mins){
      live = false;
      try{ sessionStorage.setItem('vigil-preview-mins', String(mins)); }catch(e){}
      apply(mins, false);
    },
    live: function(){
      live = true;
      try{ sessionStorage.removeItem('vigil-preview-mins'); }catch(e){}
      apply(window.NM_CLOCK.minutes(), true);
    }
  };

  function tick(){ if (live) apply(window.NM_CLOCK.minutes(), true); }
  // restore a preview hour carried over from another page
  var storedPv = null;
  try{ storedPv = sessionStorage.getItem('vigil-preview-mins'); }catch(e){}
  if (storedPv !== null && storedPv !== '' && !isNaN(parseInt(storedPv,10))){
    live = false;
    document.addEventListener('DOMContentLoaded', function(){ apply(parseInt(storedPv,10), false); });
  }
  document.addEventListener('DOMContentLoaded', tick);
  setInterval(tick, 30000);
})();

document.addEventListener('DOMContentLoaded', function(){
  // Mobile nav toggle
  var burger = document.querySelector('.hamburger');
  var mnav = document.querySelector('.mobile-nav');
  if (burger && mnav){
    burger.addEventListener('click', function(){
      burger.classList.toggle('open');
      mnav.classList.toggle('open');
    });
  }

  // Scroll reveal — with a resilience fallback for environments
  // where IntersectionObserver never fires (content must never
  // be stuck invisible).
  var ioFired = false;
  var io = new IntersectionObserver(function(entries){
    ioFired = true;
    entries.forEach(function(e){
      if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(function(el, i){
    el.style.transitionDelay = (Math.min(i % 4, 3) * 0.08) + 's';
    io.observe(el);
  });

  function revealInView(){
    document.querySelectorAll('.reveal:not(.in)').forEach(function(el){
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 1.05 && r.bottom > 0) el.classList.add('in');
    });
  }
  setTimeout(function(){
    if (!ioFired){
      // IO is not delivering callbacks here — fall back to a
      // simple viewport check on load + scroll.
      revealInView();
      window.addEventListener('scroll', revealInView, { passive: true });
      window.addEventListener('resize', revealInView);
    }
  }, 900);
});

// ── Quick exit (same behavior as the live site) ──
function exitSite() {
  try { history.replaceState(null, '', '/'); window.location.replace('https://weather.com'); }
  catch(e) { window.location.href = 'https://weather.com'; }
}
window.addEventListener('pagehide', function() { document.body.style.visibility = 'hidden'; });
window.addEventListener('pageshow', function(e) { if (e.persisted) exitSite(); else document.body.style.visibility = 'visible'; });
(function(){
  var t = 0;
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape'){
      var n = Date.now();
      if (n - t < 1500) exitSite();
      t = n;
    }
  });
})();
