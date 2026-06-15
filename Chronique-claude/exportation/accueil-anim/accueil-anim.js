(function () {
  "use strict";

  var clamp = function (value) { return Math.max(0, Math.min(1, value)); };
  var lerp = function (from, to, progress) { return from + (to - from) * progress; };
  var easeIO = function (value) { return value * value * (3 - 2 * value); };
  var easeOut = function (value) { return 1 - (1 - value) * (1 - value); };
  var easeRush = function (value) {
    return value < 0.5 ? 2 * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;
  };
  var listenToMediaQuery = function (query, callback) {
    if (query.addEventListener) {
      query.addEventListener("change", callback);
    } else {
      query.addListener(callback);
    }
  };

  function setBodyState(root, transitionProgress) {
    var rect = root.getBoundingClientRect();
    var active = rect.bottom > 0 && rect.top < window.innerHeight;
    root.classList.toggle("ha-is-active", active);
    document.body.classList.toggle("ha-is-active", active);
    document.body.classList.toggle("ha-nav-on-dark", active && transitionProgress < 0.78);
    document.body.classList.toggle("ha-nav-on-light", active && transitionProgress >= 0.78);
  }

  function init(root) {
    var facade = root.querySelector(".ha__layer--facade");
    var interior = root.querySelector(".ha__layer--interior");
    var vignette = root.querySelector(".ha__vignette");
    var logo = root.querySelector(".ha__logo");
    var arrow = root.querySelector(".ha__arrow");
    var badge = root.querySelector(".ha__badge");
    var mobileQuery = window.matchMedia("(max-width: 720px)");
    var reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    var mobileTransition = root.dataset.haMobileTransition !== "false";
    var target = 0;
    var progress = 0;

    function updateModeClasses() {
      root.classList.toggle("ha--mobile-static", mobileQuery.matches && !mobileTransition);
      root.classList.toggle("ha--reduced", reducedQuery.matches);
      measure();
    }

    function measure() {
      var rect = root.getBoundingClientRect();
      var total = root.offsetHeight - window.innerHeight;
      target = total > 0 ? clamp(-rect.top / total) : 0;
    }

    function renderStatic() {
      facade.style.opacity = "1";
      facade.style.transform = "scale(1)";
      facade.style.filter = "brightness(.72) contrast(1.04) saturate(.92)";
      interior.style.opacity = "0";
      interior.style.transform = "scale(1)";
      interior.style.filter = "none";
      logo.style.opacity = "1";
      logo.style.transform = "translate(-50%, -50%) scale(1.08)";
      if (arrow) arrow.style.opacity = "1";
      if (badge) {
        badge.style.opacity = "1";
        badge.style.transform = "translateY(0)";
      }
      vignette.style.background = "radial-gradient(80% 60% at 50% 52%, rgba(26,26,26,0) 0%, rgba(26,26,26,.18) 70%, rgba(26,26,26,.43) 100%)";
      setBodyState(root, 0);
    }

    function renderMobile() {
      var transition = easeIO(clamp((progress - 0.28) / 0.52));
      var overlayFade = easeIO(clamp((progress - 0.08) / 0.45));
      var arrival = easeOut(clamp((progress - 0.62) / 0.28));

      facade.style.opacity = String(1 - transition);
      facade.style.transform = "scale(1)";
      facade.style.filter = "brightness(" + lerp(0.68, 0.92, transition) + ") contrast(1) saturate(.92)";
      interior.style.opacity = String(transition);
      interior.style.transform = "scale(1)";
      interior.style.filter = "brightness(" + lerp(0.88, 1, transition) + ") contrast(1)";
      logo.style.opacity = String(1 - overlayFade);
      logo.style.transform = "translate(-50%, -50%) scale(1)";
      if (arrow) arrow.style.opacity = String(1 - overlayFade);
      if (badge) {
        badge.style.opacity = String(arrival);
        badge.style.transform = "translateY(" + lerp(24, 0, arrival) + "px)";
      }
      vignette.style.background = "radial-gradient(95% 72% at 50% 52%, rgba(26,26,26,0) 0%, rgba(26,26,26,.1) 70%, rgba(26,26,26,.3) 100%)";
      setBodyState(root, transition);
    }

    function renderDesktop() {
      var facadeFade = easeIO(clamp((progress - 0.68) / 0.20));
      var interiorFade = easeIO(clamp((progress - 0.72) / 0.20));
      var facadeScale = lerp(1, 1.06, easeIO(progress));
      var facadeBright = lerp(0.62, 1, easeIO(clamp((progress - 0.10) / 0.50)));
      var facadeContrast = lerp(1.08, 0.82, facadeFade);
      var zoomBase = lerp(1.08, 1.42, easeIO(clamp(progress / 0.34)));
      var zoom = progress < 0.34 ? zoomBase : lerp(1.42, 64, easeRush(clamp((progress - 0.34) / 0.34)));
      var wobble = Math.sin(progress * 6.28) * 0.6 * (1 - progress);
      var vignetteRadius = lerp(80, 120, easeIO(clamp((progress - 0.20) / 0.55)));
      var vignetteAlpha = lerp(0.18, 0.05, easeIO(clamp((progress - 0.30) / 0.50)));
      var arrival = easeOut(clamp((progress - 0.92) / 0.08));

      facade.style.opacity = String(1 - facadeFade);
      facade.style.transform = "scale(" + facadeScale + ")";
      facade.style.filter = "brightness(" + facadeBright + ") contrast(" + facadeContrast + ") saturate(.92)";
      interior.style.opacity = String(interiorFade);
      interior.style.transform = "scale(" + lerp(1.06, 1, interiorFade) + ")";
      interior.style.filter = "brightness(" + lerp(0.82, 1, interiorFade) + ") contrast(" + lerp(0.86, 1.06, interiorFade) + ")";
      logo.style.opacity = "1";
      logo.style.transform = "translate(-50%, calc(-50% + " + wobble + "px)) scale(" + zoom + ")";
      if (arrow) arrow.style.opacity = String(1 - easeIO(clamp(progress / 0.18)));
      if (badge) {
        badge.style.opacity = String(arrival);
        badge.style.transform = "translateY(" + lerp(40, 0, arrival) + "px)";
      }
      vignette.style.background = "radial-gradient(" + vignetteRadius + "% " + (vignetteRadius * 0.75) + "% at 50% 52%, rgba(26,26,26,0) 0%, rgba(26,26,26," + vignetteAlpha + ") 70%, rgba(26,26,26," + Math.min(1, vignetteAlpha + 0.25) + ") 100%)";
      setBodyState(root, progress);
    }

    function render() {
      var next = progress + (target - progress) * 0.14;
      progress = Math.abs(next - progress) > 0.00015 ? next : target;

      if (reducedQuery.matches || (mobileQuery.matches && !mobileTransition)) {
        renderStatic();
      } else if (mobileQuery.matches) {
        renderMobile();
      } else {
        renderDesktop();
      }

      window.requestAnimationFrame(render);
    }

    measure();
    updateModeClasses();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    listenToMediaQuery(mobileQuery, updateModeClasses);
    listenToMediaQuery(reducedQuery, updateModeClasses);
    window.requestAnimationFrame(render);
  }

  function boot() {
    document.querySelectorAll("[data-ha-anim]").forEach(init);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
}());
