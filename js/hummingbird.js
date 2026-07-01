/* ============================================================
   505 GET FREE — the occasional hummingbirds.
   Every so often one or two small silhouettes cross the page
   the way hummingbirds actually move: a quick dart, a stop-dead
   hover with a figure-eight bob, another dart, gone.
   The silhouette is the brand hummingbird, in the blues of the
   logo. The body stays crisp; the wings are two pre-blurred
   sprite layers (images/hb/*) oscillating fast around the
   shoulder, so they read as the blur a real hummingbird makes.
   Skipped entirely for prefers-reduced-motion.
============================================================ */
(function(){
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var SHADES = ['navy', 'ink', 'teal', 'turq', 'sky'];   // images/hb/<shade>-{body,wing1,wing2}.png
  var ASPECT = 324 / 198;                                // sprite canvas w/h

  var style = document.createElement('style');
  style.textContent =
    '.hb-bird{position:fixed;left:0;top:0;z-index:80;pointer-events:none;display:none;will-change:transform;}' +
    '.hb-bird img{position:absolute;inset:0;width:100%;height:100%;}' +
    '.hb-bird .hb-wing1{transform-origin:47% 33%;animation:hbWing .08s linear infinite alternate;opacity:.9;}' +
    '.hb-bird .hb-wing2{transform-origin:47% 33%;animation:hbWing .08s linear infinite alternate-reverse;opacity:.5;}' +
    '@keyframes hbWing{from{transform:rotate(-9deg);}to{transform:rotate(7deg);}}' +
    'html[data-dark="1"] .hb-bird{filter:drop-shadow(0 0 7px rgba(56,210,238,.4)) brightness(1.6);}';
  var styleAdded = false;

  function makeBird(shade, scale){
    var w = Math.round(74 * scale), h = Math.round(74 * scale / ASPECT);
    var el = document.createElement('div');
    el.className = 'hb-bird';
    el.setAttribute('aria-hidden', 'true');
    el.style.cssText = 'width:' + w + 'px;height:' + h + 'px;opacity:.6;';
    var base = 'images/hb/' + shade;
    el.innerHTML =
      '<img class="hb-wing2" src="' + base + '-wing2.png" alt="">' +
      '<img class="hb-body" src="' + base + '-body.png" alt="">' +
      '<img class="hb-wing1" src="' + base + '-wing1.png" alt="">';
    return el;
  }

  function easeOut(t){ return 1 - Math.pow(1 - t, 3); }
  function easeInOut(t){ return t < .5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2)/2; }
  function rnd(a, b){ return a + Math.random() * (b - a); }
  function pick(arr){ return arr[Math.floor(Math.random() * arr.length)]; }

  function buildTimeline(){
    var W = window.innerWidth, H = window.innerHeight;
    var ltr = Math.random() < .5;
    var y = H * rnd(.14, .55);
    var startX = ltr ? -90 : W + 90;
    var endX   = ltr ? W + 90 : -90;
    var n = Math.random() < .5 ? 2 : 3;
    var stops = [];
    for (var i = 0; i < n; i++){
      var fx = (i + 1) / (n + 1) + rnd(-.06, .06);
      stops.push({ x: (ltr ? fx : 1 - fx) * W, y: y + rnd(-H*.08, H*.08) });
    }
    var segs = [], px = startX, py = y + rnd(-30, 30);
    stops.forEach(function(s){
      segs.push({ type:'dart', x1:px, y1:py, x2:s.x, y2:s.y, dur: rnd(550, 850) });
      segs.push({ type:'hover', x1:s.x, y1:s.y, dur: rnd(1100, 2300) });
      px = s.x; py = s.y;
    });
    segs.push({ type:'dart', x1:px, y1:py, x2:endX, y2:py + rnd(-H*.12, -H*.02), dur: rnd(500, 750) });
    return { segs: segs, ltr: ltr };
  }

  function flyOne(){
    if (document.hidden || !document.body) return;
    if (!styleAdded){ document.head.appendChild(style); styleAdded = true; }
    var el = makeBird(pick(SHADES), rnd(.65, 1.05));
    document.body.appendChild(el);
    var tl = buildTimeline();
    var face = tl.ltr ? -1 : 1;       // silhouette faces left
    var i = 0, segStart = null;
    el.style.display = 'block';

    function frame(now){
      var seg = tl.segs[i];
      if (!seg){ el.remove(); return; }
      if (segStart === null) segStart = now;
      var t = Math.min(1, (now - segStart) / seg.dur);
      var x, y, tilt = 0;
      if (seg.type === 'dart'){
        var p = easeOut(t);
        x = seg.x1 + (seg.x2 - seg.x1) * p;
        y = seg.y1 + (seg.y2 - seg.y1) * easeInOut(t) - Math.sin(t * Math.PI) * 18;
        tilt = (1 - t) * 9 * (seg.x2 > seg.x1 ? 1 : -1);
      } else {
        // hover: tiny figure-eight bob, the hummingbird signature
        var w = (now - segStart) / 1000;
        x = seg.x1 + Math.sin(w * 5.2) * 3.5;
        y = seg.y1 + Math.sin(w * 10.4) * 2.5 + Math.sin(w * 2.6) * 4;
      }
      el.style.transform = 'translate(' + x + 'px,' + y + 'px) scaleX(' + face + ') rotate(' + (tilt * face) + 'deg)';
      if (t >= 1){ i++; segStart = null; }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function visit(){
    // Hummingbirds are diurnal — skip entirely during night phase
    if (document.documentElement.dataset.phase === 'night') { schedule(); return; }
    flyOne();
    // sometimes a second bird tags along a moment later
    if (Math.random() < .55) setTimeout(flyOne, rnd(900, 2800));
    schedule();
  }

  function schedule(first){
    setTimeout(visit, first ? rnd(6000, 14000) : rnd(55000, 130000));
  }
  schedule(true);

  // expose for preview/testing
  window.HUMMINGBIRD = { fly: visit };
})();
