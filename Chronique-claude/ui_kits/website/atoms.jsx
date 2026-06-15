/* global React */
const { useState, useEffect, useRef } = React;

/* ============================================================
   LOGO — always rendered as the original PNG
   ============================================================ */
function Logo({ width = 170, dark = false, onClick }) {
  return (
    <img
      src="../../assets/RestaurantChronique.svg"
      alt="Restaurant la chronique"
      onClick={onClick}
      style={{
        width: width + 'px', height: 'auto', display: 'block',
        cursor: onClick ? 'pointer' : 'default',
        filter: dark ? 'brightness(0) saturate(100%) invert(95%) sepia(0%) saturate(0%) brightness(102%) contrast(101%)' : 'none',
        transition: 'filter 0.6s ease',
      }}
    />
  );
}

/* ============================================================
   CURTAIN — first-paint reveal
   ============================================================ */
function Curtain() {
  const [out, setOut] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOut(true), 1800);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={'curtain' + (out ? ' is-out' : '')}>
      <img className="curtain__mark" src="../../assets/logo-wordmark.png" alt="" />
      <div className="curtain__since">Depuis 1995 · Mile-end · Montréal</div>
    </div>
  );
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function Nav({ route, onNav, dark = false, logoFade = 1 }) {
  const [open, setOpen] = useState(false);
  const links = [
    ['home', 'Accueil'],
    ['apropos', 'La maison'],
    ['menu', 'La carte'],
    ['salon', 'Le salon Laurier'],
    ['carte-cadeau', 'Cartes cadeaux'],
  ];

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    window.dispatchEvent(new CustomEvent(open ? 'cinema-scroll-lock' : 'cinema-scroll-release'));
    return () => {
      document.body.classList.remove('menu-open');
      window.dispatchEvent(new CustomEvent('cinema-scroll-release'));
    };
  }, [open]);

  const go = (nextRoute) => {
    setOpen(false);
    onNav(nextRoute);
  };

  return (
    <>
      <nav className={'nav' + (dark ? ' is-dark' : '') + (open ? ' is-open' : '')}>
        <button
          className={'nav__burger' + (open ? ' is-open' : '')}
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
        </button>
        <button
          className="nav__brand"
          type="button"
          aria-label="Accueil"
          onClick={() => go('home')}
          style={{ opacity: open ? 1 : logoFade, pointerEvents: open || logoFade > 0.05 ? 'auto' : 'none' }}
        >
          <Logo width={232} dark={dark || open} />
        </button>
        <button className="nav__reserve" type="button" onClick={() => go('reservation')}>Réserver</button>
      </nav>

      <div className={'menu-overlay' + (open ? ' is-open' : '')} aria-hidden={!open}>
        <div className="menu-overlay__inner">
          <div className="menu-overlay__links">
            {links.map(([k, l]) => (
              <button key={k} className={'menu-overlay__link' + (route === k ? ' is-active' : '')} onClick={() => go(k)}>{l}</button>
            ))}
          </div>
          <div className="menu-overlay__details">
            <div>
              <span>Heures d'ouverture</span>
              <strong>Mardi — samedi, 17 h 30 — 22 h 30</strong>
            </div>
            <div>
              <span>Téléphone</span>
              <a href="tel:5142713095">514 271-3095</a>
            </div>
            <div>
              <span>Emplacement</span>
              <strong>104 avenue Laurier Ouest<br />Montréal, QC, H2T 2N7</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   HERO — cinematic
   ============================================================ */
function Hero({ slides, onReserve }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % slides.length), 8000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="hero">
      <div className="hero__slides">
        {slides.map((s, idx) => (
          <div key={idx} className={'hero__slide' + (idx === i ? ' is-on' : '')}
               style={{ backgroundImage: `url('${s}')` }} />
        ))}
      </div>
      <div className="hero__veil" />
      <div className="hero__copy">
        <div className="hero__since">Depuis 1995 · Mile-end</div>
        <h1 className="hero__slogan">Le bonheur est <span className="sage">dans l’assiette.</span></h1>
        <div className="hero__sub">Recommandé par le Guide Michelin · 2025</div>
      </div>
      <div className="hero__chefs">
        <div className="hero__chefs-label">Chefs propriétaires</div>
        <div className="hero__chefs-names">Marc De Canck<br />Olivier de Montigny</div>
      </div>
      <div className="tonight">
        <div className="tonight__label">Ce soir, la maison</div>
        <div className="tonight__line">Service de 17 h 30 à 22 h 30. Réservation recommandée.</div>
        <button className="tonight__cta" onClick={onReserve}>Réserver →</button>
      </div>
      <div className="hero__ticks">
        {slides.map((_, idx) => (
          <button key={idx} className={'hero__tick' + (idx === i ? ' is-on' : '')} onClick={() => setI(idx)} aria-label={`Slide ${idx+1}`} />
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   PRESS RAIL
   ============================================================ */
// function PressRail() {
//   return (
//     <section className="press">
//       <div className="press__inner">
//         <div className="press__label">Distingués par</div>
//         <div className="press__items">
//           <div className="press__item">Guide Michelin<small>recommandé · 2025</small></div>
//           <div className="press__item">Wine Spectator<small>Best Award of Excellence · 2024</small></div>
//           <div className="press__item">700+ vins<small>cave curatée</small></div>
//           <div className="press__item">30 ans<small>depuis mars 1995</small></div>
//         </div>
//       </div>
//     </section>
//   );
// }

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (event) => {
    event.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__contact">
          <div className="footer__group">
            <span>Heures d’ouvertures</span>
            <strong>Tous les jours 18h00-21h30</strong>
          </div>
          <div className="footer__group">
            <span>Téléphone</span>
            <a href="tel:5142713095">(514) 271-3095</a>
          </div>
          <div className="footer__group">
            <span>Emplacement</span>
            <strong>104 avenue Laurier Ouest,<br />Montréal, QC, H2T 2N7</strong>
          </div>
        </div>

        <div className="footer__newsletter">
          <p>Abonnez-vous à notre infolettre pour connaître nos activités, évènements et promotions!</p>
          <form className={'footer__form' + (subscribed ? ' is-subscribed' : '')} onSubmit={subscribe}>
            <label className="sr-only" htmlFor="footer-email">Votre courriel</label>
            <input id="footer-email" type="email" required placeholder={subscribed ? 'Merci pour votre inscription' : 'Entrez votre courriel ici...'} disabled={subscribed} />
            <button type="submit" aria-label="S’abonner à l’infolettre" disabled={subscribed}>
              <svg viewBox="0 0 48 24" aria-hidden="true">
                <path d="M1 12h42M34 4l9 8-9 8" />
              </svg>
            </button>
          </form>
          <div className="footer__social">
            <a href="https://www.facebook.com/Restaurant-La-Chronique-156566617717198/" aria-label="Facebook" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/restolachronique/" aria-label="Instagram" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© Restaurant La Chronique · 2026</span>
        <a href="#politique">Politique de confidentialité</a>
      </div>
    </footer>
  );
}

/* ============================================================
   CINEMA INTRO — scroll-driven entrance (premium)
   Buttery rAF-eased scrub. Multi-layer parallax. Vignette opens
   as we enter the room. Bloom sweeps across the climax.
   ============================================================ */
function CinemaIntro({ onEnter }) {
  const trackRef = useRef(null);
  const targetP = useRef(0);
  const easedP  = useRef(0);
  const autoTailStart = useRef(0);
  const autoScrollStart = useRef(0);
  const autoScrollEnd = useRef(0);
  const autoTailRunning = useRef(false);
  const autoTailComplete = useRef(false);
  const rafId   = useRef(0);
  const [p, setP] = useState(0);
  const [tailP, setTailP] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const r = track.getBoundingClientRect();
      const total = track.offsetHeight - window.innerHeight;
      const scrolled = -r.top;
      targetP.current = Math.max(0, Math.min(1, scrolled / total));
    };
    const tick = (now) => {
      // rAF lerp toward target — gives a buttery scrub feel that's
      // independent of wheel tick granularity.
      const next = easedP.current + (targetP.current - easedP.current) * 0.14;
      if (Math.abs(next - easedP.current) > 0.00015) {
        easedP.current = next;
        setP(next);
      } else if (next !== targetP.current) {
        easedP.current = targetP.current;
        setP(targetP.current);
      }
      if (!reduced && !autoTailRunning.current && !autoTailComplete.current && targetP.current >= 0.58) {
        easedP.current = targetP.current;
        setP(targetP.current);
        autoTailRunning.current = true;
        autoTailStart.current = now;
        autoScrollStart.current = window.scrollY;
        const track = trackRef.current;
        const trackTop = window.scrollY + track.getBoundingClientRect().top;
        autoScrollEnd.current = Math.max(
          autoScrollStart.current,
          trackTop + (track.offsetHeight - window.innerHeight) * 0.98
        );
        window.dispatchEvent(new CustomEvent('cinema-scroll-lock'));
      }
      if (autoTailRunning.current) {
        const elapsed = Math.min(1, (now - autoTailStart.current) / 700);
        const easedTail = elapsed * elapsed * (3 - 2 * elapsed);
        setTailP(easedTail);
        const scrollTail = Math.max(0, Math.min(1, (easedTail - 0.62) / 0.38));
        const scrollY = autoScrollStart.current + (autoScrollEnd.current - autoScrollStart.current) * scrollTail;
        window.dispatchEvent(new CustomEvent('cinema-scroll-position', { detail: { scrollY } }));
        if (elapsed === 1) {
          autoTailRunning.current = false;
          autoTailComplete.current = true;
          window.dispatchEvent(new CustomEvent('cinema-scroll-release'));
        }
      } else if (!reduced && autoTailComplete.current && easedP.current < 0.52) {
        autoTailComplete.current = false;
        setTailP(0);
      }
      document.body.classList.toggle('is-cinema', easedP.current < 0.97);
      rafId.current = requestAnimationFrame(tick);
    };
    measure();
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    rafId.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
      if (autoTailRunning.current) window.dispatchEvent(new CustomEvent('cinema-scroll-release'));
      document.body.classList.remove('is-cinema');
    };
  }, []);

  // ---- easing helpers ----
  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const easeIn  = (t) => t * t;
  const easeOut = (t) => 1 - (1 - t) * (1 - t);
  const easeIO  = (t) => t * t * (3 - 2 * t);
  // dramatic acceleration — like a real zoom rushing past the viewer
  const easeRush = (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const lerp = (a, b, t) => a + (b - a) * t;

  // ---- per-element progress curves ----
  // 0.00 – 0.34  approach: façade alive, logo at rest, name visible
  // 0.34 – 0.68  zoom: logo fills the viewport before the layer change
  // 0.68 – 0.92  pass-through: façade dims, interior fully opens
  // 0.92 – 1.00  arrival: copy slides in bottom-left, stage releases

  const displayedTailP = tailP === 1 ? clamp01((p - 0.52) / 0.06) : tailP;
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const transitionP = reduced ? p : Math.max(p, lerp(0.58, 0.92, displayedTailP));

  const facadeOp     = 1 - easeIO(clamp01((transitionP - 0.68) / 0.20));
  // Restaurant visible in full from p=0 (the sign on top is in frame).
  // Only a faint Ken Burns drift so the photo doesn’t look frozen.
  const facadeKB     = lerp(1.0, 1.06, easeIO(transitionP));
  const facadeBright = lerp(0.62, 1.0, easeIO(clamp01((transitionP - 0.10) / 0.50)));
  const facadeContrast = lerp(1.08, 0.82, easeIO(clamp01((transitionP - 0.68) / 0.20)));

  const interiorOp     = easeIO(clamp01((transitionP - 0.72) / 0.20));
  const interiorKB     = lerp(1.06, 1.0, easeIO(clamp01((transitionP - 0.72) / 0.20)));
  const interiorBright = lerp(0.82, 1.0, easeIO(clamp01((transitionP - 0.72) / 0.20)));
  const interiorContrast = lerp(0.86, 1.06, easeIO(clamp01((transitionP - 0.72) / 0.20)));

  // Logo scale — we zoom INTO the "O" of "chronique". Transform-origin
  // is set on the element to that letter’s position so it grows out
  // toward the viewer; when fully open it becomes the doorway through
  // which the interior is revealed.
  const zoomBase  = lerp(1.08, 1.42, easeIO(clamp01(p / 0.34)));
  const scrollZoom = lerp(1.42, 80, easeRush(clamp01((p - 0.34) / 0.34)));
  const preTailZoom = lerp(1.42, 12, easeRush(clamp01((p - 0.34) / 0.24)));
  const zoom = reduced
    ? (p < 0.34 ? zoomBase : scrollZoom)
    : (p < 0.34 ? zoomBase : (displayedTailP > 0 ? lerp(12, 80, displayedTailP) : preTailZoom));
  const logoOp = 1 - easeIO(clamp01((transitionP - 0.82) / 0.12));

  // Tiny depth wobble — mimics walking through a doorway, never aggressive
  const wobbleY = Math.sin(p * 6.28) * 0.6 * (1 - p);

  // Caption fades
  const hintOp  = 1 - easeIO(clamp01(p / 0.18));

  // Vignette — very light at the start so the first image is barely darkened
  const vignetteR = lerp(80, 120, easeIO(clamp01((transitionP - 0.20) / 0.55)));
  const vignetteA = lerp(0.18, 0.05, easeIO(clamp01((transitionP - 0.30) / 0.50)));

  // Arrival copy
  const arrivalOp = easeOut(clamp01((p - 0.92) / 0.08));
  const arrivalY = lerp(40, 0, arrivalOp);

  return (
    <section ref={trackRef} className="cinema">
      <div className="cinema__stage">
        <div className="cinema__layer cinema__layer--facade"
             style={{
               opacity: facadeOp,
               transform: `scale(${facadeKB})`,
               filter: `brightness(${facadeBright}) contrast(${facadeContrast}) saturate(0.92)`,
               backgroundImage: "url('../../assets/dining-room-collage.jpg')",
               backgroundPosition: 'center center',
             }} />
        <div className="cinema__layer cinema__layer--interior"
             style={{
               opacity: interiorOp,
               transform: `scale(${interiorKB})`,
               filter: `brightness(${interiorBright}) contrast(${interiorContrast})`,
               backgroundImage: "url('../../assets/interieur.avif')",
             }} />

        <div className="cinema__vignette"
             style={{
               background: `radial-gradient(${vignetteR}% ${vignetteR * 0.75}% at 50% 52%, rgba(26,26,26,0) 0%, rgba(26,26,26,${vignetteA}) 70%, rgba(26,26,26,${Math.min(1, vignetteA + 0.25)}) 100%)`,
             }} />

        <div className="cinema__logo"
             style={{
               transform: `translate(-50%, calc(-50% + ${wobbleY}px)) scale(${zoom})`,
               opacity: logoOp,
             }}>
          <img src="../../assets/RestaurantChronique.svg" alt="Restaurant la chronique" />
        </div>

        <div className="cinema__hint" style={{ opacity: hintOp }}>
          <span>défiler</span>
          <svg viewBox="0 0 12 32" aria-hidden="true">
            <line x1="6" y1="0" x2="6" y2="24" />
            <polyline points="1,20 6,28 11,20" fill="none" />
          </svg>
        </div>

        <div className="cinema__arrival"
             style={{ opacity: arrivalOp, transform: `translateY(${arrivalY}px)` }}>
          <img className="cinema__arrival-michelin"
               src="../../assets/michelin-2026.png"
               alt="Recommandé par le Guide Michelin 2026" />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SMOOTH SCROLL — buttery wheel/trackpad scrolling for the whole page.
   Sticky elements (the cinema stage) keep working because the document
   actually scrolls; we just rAF-lerp the target.
   ============================================================ */
function SmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // honour user preference
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let target = window.scrollY;
    let current = window.scrollY;
    let raf = 0;
    let scrolling = false;
    let locked = false;
    let lockY = window.scrollY;
    const factor = 0.13;

    const onWheel = (e) => {
      if (e.ctrlKey) return;             // pinch-zoom / browser zoom
      if (locked) {
        if (e.target.closest && e.target.closest('.menu-overlay')) return;
        e.preventDefault();
        return;
      }
      // honour modifier keys (shift = horizontal page-scroll, etc.)
      if (e.deltaMode === 1) return;     // line scrolling (some legacy mice) — leave alone
      e.preventDefault();
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (!scrolling && Math.abs(window.scrollY - current) > 2) {
        current = window.scrollY;
        target = window.scrollY;
      }
      target = Math.max(0, Math.min(max, target + e.deltaY));
      scrolling = true;
    };
    const onKey = (e) => {
      if (locked && ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(e.key)) {
        e.preventDefault();
        const overlay = document.querySelector('.menu-overlay.is-open');
        if (overlay) {
          const page = Math.max(120, overlay.clientHeight * 0.75);
          const amounts = {
            ArrowDown: 56,
            ArrowUp: -56,
            PageDown: page,
            PageUp: -page,
            ' ': e.shiftKey ? -page : page,
          };
          if (e.key === 'Home') overlay.scrollTo({ top: 0, behavior: 'smooth' });
          else if (e.key === 'End') overlay.scrollTo({ top: overlay.scrollHeight, behavior: 'smooth' });
          else overlay.scrollBy({ top: amounts[e.key], behavior: 'smooth' });
        }
        return;
      }
      // arrow / page / space keys still scroll naturally; sync target
      target = window.scrollY;
    };
    const onResize = () => { target = window.scrollY; current = window.scrollY; };
    const onTouch = () => { target = window.scrollY; current = window.scrollY; };
    const onTouchMove = (e) => {
      if (locked && !(e.target.closest && e.target.closest('.menu-overlay'))) e.preventDefault();
    };
    const onLock = () => {
      locked = true;
      lockY = window.scrollY;
      target = lockY;
      current = lockY;
      scrolling = false;
    };
    const onRelease = () => {
      window.scrollTo(0, lockY);
      target = lockY;
      current = lockY;
      scrolling = false;
      locked = false;
    };
    const onPosition = (e) => {
      if (!locked) return;
      lockY = e.detail.scrollY;
      target = lockY;
      current = lockY;
      window.scrollTo(0, lockY);
    };

    const tick = () => {
      if (locked) {
        if (Math.abs(window.scrollY - lockY) > 0.5) window.scrollTo(0, lockY);
        raf = requestAnimationFrame(tick);
        return;
      }
      const delta = target - current;
      if (Math.abs(delta) > 0.4) {
        current += delta * factor;
        current = Math.max(0, Math.min(document.documentElement.scrollHeight - window.innerHeight, current));
        window.scrollTo(0, current);
      } else if (scrolling) {
        current = target;
        window.scrollTo(0, current);
        scrolling = false;
      } else {
        // user might have scrolled natively (touchpad, scroll-bar, programmatic)
        const native = window.scrollY;
        if (Math.abs(native - current) > 1) {
          current = native;
          target = native;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    window.addEventListener('touchstart', onTouch, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('cinema-scroll-lock', onLock);
    window.addEventListener('cinema-scroll-position', onPosition);
    window.addEventListener('cinema-scroll-release', onRelease);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('touchstart', onTouch);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('cinema-scroll-lock', onLock);
      window.removeEventListener('cinema-scroll-position', onPosition);
      window.removeEventListener('cinema-scroll-release', onRelease);
      cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}

Object.assign(window, { Logo, Curtain, Nav, Hero, Footer, CinemaIntro, SmoothScroll });
