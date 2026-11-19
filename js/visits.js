// Visit counter + ticker for 505getfree.org.
// Counts one anonymous visit per browsing session and fills any [data-visits] element.
// Nothing identifying is sent or stored. Does nothing if the API is unavailable.
(function () {
  var API = '/api/visits';

  function shouldCount() {
    if (navigator.doNotTrack === '1' || navigator.globalPrivacyControl) return false;
    if (navigator.webdriver) return false;
    try {
      if (sessionStorage.getItem('v505')) return false;
      sessionStorage.setItem('v505', '1'); // cleared when the tab closes
    } catch (e) { return false; }
    return true;
  }

  function countVisit() {
    if (!shouldCount()) return;
    try { fetch(API, { method: 'POST', keepalive: true }); } catch (e) {}
  }

  function showTicker() {
    var els = document.querySelectorAll('[data-visits]');
    if (!els.length) return;
    fetch(API).then(function (r) { return r.json(); }).then(function (d) {
      if (!d || typeof d.visits !== 'number') return;
      els.forEach(function (el) {
        var min = parseInt(el.getAttribute('data-min') || '0', 10);
        if (d.visits < min) return;
        var num = el.querySelector('[data-visits-num]');
        if (num) num.textContent = d.visits.toLocaleString('en-US');
        el.hidden = false;
      });
    }).catch(function () {});
  }

  countVisit();
  showTicker();
})();
