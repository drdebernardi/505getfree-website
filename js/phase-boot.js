/* 505 GET FREE — phase boot.
   Loaded synchronously in <head> so the page is already
   wearing the right hour before first paint. */
(function(){
  function nmMinutes(){
    try{
      var parts = new Intl.DateTimeFormat('en-US', { timeZone:'America/Denver', hour:'numeric', minute:'numeric', hour12:false }).formatToParts(new Date());
      var h = 0, m = 0;
      parts.forEach(function(p){
        if (p.type === 'hour')   h = parseInt(p.value,10) % 24;
        if (p.type === 'minute') m = parseInt(p.value,10);
      });
      return h*60 + m;
    }catch(e){
      var d = new Date(); return d.getHours()*60 + d.getMinutes();
    }
  }
  function phaseOf(mins){
    var h = mins/60;
    if (h >= 5  && h < 8)  return 'dawn';
    if (h >= 8  && h < 17) return 'day';
    if (h >= 17 && h < 20) return 'dusk';
    return 'night';
  }
  var mins  = nmMinutes();
  // a scrubbed preview hour (from the homepage dial) follows you across pages
  try{
    var pv = sessionStorage.getItem('vigil-preview-mins');
    if (pv !== null && pv !== '' && !isNaN(parseInt(pv,10))) mins = parseInt(pv,10);
  }catch(e){}
  var phase = phaseOf(mins);
  var doc   = document.documentElement;
  doc.setAttribute('data-phase', phase);
  doc.setAttribute('data-dark', phase === 'night' ? '1' : '0');
  window.NM_CLOCK = { minutes: nmMinutes, phaseOf: phaseOf };
})();
