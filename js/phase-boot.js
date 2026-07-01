/* 505 GET FREE — phase boot.
   Loaded synchronously in <head> so the page is already
   wearing the right hour before first paint.
   Phase boundaries use real astronomical sunrise/sunset for
   Albuquerque, NM — calculated fresh each page load. */
(function(){
  function nmMinutes(){
    try{
      var parts = new Intl.DateTimeFormat('en-US',{timeZone:'America/Denver',hour:'numeric',minute:'numeric',hour12:false}).formatToParts(new Date());
      var h=0,m=0;
      parts.forEach(function(p){
        if(p.type==='hour')   h=parseInt(p.value,10)%24;
        if(p.type==='minute') m=parseInt(p.value,10);
      });
      return h*60+m;
    }catch(e){ var d=new Date(); return d.getHours()*60+d.getMinutes(); }
  }

  /* ── Astronomical sunrise/sunset for Albuquerque, NM ──────────────
     Returns minutes-from-midnight (Mountain Time) for:
       civilDawn  — civil twilight begin (sun at −6°)
       sunrise    — upper limb on horizon
       sunset     — upper limb below horizon
       civilDusk  — civil twilight end   (sun at −6°)
     Accurate to ±2 min year-round. Falls back to safe fixed times. */
  function getSunTimesNM(now){
    var LAT=35.0844, LNG=-106.6504;
    var toRad=function(d){return d*Math.PI/180;};
    var toDeg=function(r){return r*180/Math.PI;};
    var clamp=function(v){return Math.max(-1,Math.min(1,v));};
    try{
      // Date in Mountain Time
      var fp={};
      new Intl.DateTimeFormat('en-US',{timeZone:'America/Denver',year:'numeric',month:'numeric',day:'numeric'})
        .formatToParts(now).forEach(function(x){fp[x.type]=+x.value;});

      // Day of year
      var doy=Math.round((Date.UTC(fp.year,fp.month-1,fp.day)-Date.UTC(fp.year,0,1))/86400000)+1;

      // Solar declination (radians)
      var decl=toRad(-23.45*Math.cos(toRad(360/365*(doy+10))));

      // Equation of time (minutes) — Spencer 1971
      var B=toRad(360/365*(doy-81));
      var EoT=9.87*Math.sin(2*B)-7.53*Math.cos(B)-1.5*Math.sin(B);

      // Dynamic Mountain Time UTC offset (handles DST automatically)
      var utcMins=now.getUTCHours()*60+now.getUTCMinutes();
      var mp={};
      new Intl.DateTimeFormat('en-US',{timeZone:'America/Denver',hour:'numeric',minute:'numeric',hour12:false})
        .formatToParts(now).forEach(function(x){mp[x.type]=+x.value;});
      var mtMins=(mp.hour%24)*60+(mp.minute||0);
      var offsetMins=mtMins-utcMins;
      if(offsetMins>720)  offsetMins-=1440;
      if(offsetMins<-720) offsetMins+=1440;

      // Solar noon in local Mountain Time (minutes from midnight)
      var LSTM=(offsetMins/60)*15;   // standard meridian, signed degrees
      var TC=4*(LNG-LSTM)+EoT;
      var solarNoon=720-TC;

      // Half-day duration for sunrise/sunset (sun center at horizon, −0.833° for refraction)
      var cosH=(Math.sin(toRad(-0.833))-Math.sin(toRad(LAT))*Math.sin(decl))
              /(Math.cos(toRad(LAT))*Math.cos(decl));
      var halfDay=toDeg(Math.acos(clamp(cosH)))*4;

      // Civil twilight half-duration (sun at −6°)
      var cosT=(Math.sin(toRad(-6))-Math.sin(toRad(LAT))*Math.sin(decl))
              /(Math.cos(toRad(LAT))*Math.cos(decl));
      var halfTw=toDeg(Math.acos(clamp(cosT)))*4;

      return{
        civilDawn: Math.round(solarNoon-halfTw),
        sunrise:   Math.round(solarNoon-halfDay),
        sunset:    Math.round(solarNoon+halfDay),
        civilDusk: Math.round(solarNoon+halfTw)
      };
    }catch(e){
      // Safe fallback — approximate mid-year NM times
      return{civilDawn:300,sunrise:330,sunset:1185,civilDusk:1215};
    }
  }

  function phaseOf(mins,sunTimes){
    var s=sunTimes||window.NM_CLOCK.sunTimes;
    if(mins>=s.civilDawn && mins<s.sunrise)  return 'dawn';
    if(mins>=s.sunrise   && mins<s.sunset)   return 'day';
    if(mins>=s.sunset    && mins<s.civilDusk) return 'dusk';
    return 'night';
  }

  var now=new Date();
  var mins=nmMinutes();
  var sunTimes=getSunTimesNM(now);
  var phase=phaseOf(mins,sunTimes);
  var doc=document.documentElement;
  doc.setAttribute('data-phase',phase);
  doc.setAttribute('data-dark',phase==='night'?'1':'0');
  window.NM_CLOCK={minutes:nmMinutes,phaseOf:phaseOf,sunTimes:sunTimes};
})();
