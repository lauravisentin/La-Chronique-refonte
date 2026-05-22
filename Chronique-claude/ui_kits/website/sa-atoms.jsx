/* global React */
const { useState, useEffect, useRef } = React;

/* ============================================================
   LOGO — always rendered as the original PNG
   ============================================================ */
function Logo({ width = 170, dark = false, onClick }) {
  return (
    <img
      src={window.__r('logo_wordmark_png')}
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
      <img className="curtain__mark" src={window.__r('logo_wordmark_png')} alt="" />
      <div className="curtain__since">Depuis 1995 · Mile-end · Montréal</div>
    </div>
  );
}

/* ============================================================
   CURSOR — sage halo follower
   ============================================================ */
function Cursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const hotRef = useRef(false);

  useEffect(() => {
    let rx = 0, ry = 0;       // ring (eased)
    let dx = 0, dy = 0;       // dot (snappy)
    let tx = 0, ty = 0;       // target
    let raf;

    const onMove = (e) => { tx = e.clientX; ty = e.clientY; };
    const onOver = (e) => {
      const hot = !!e.target.closest('a, button, .salle, .plate, .agenda__item, .nav__link, .carte__dish, .tonight__cta, .nav__reserve');
      if (hot !== hotRef.current) {
        hotRef.current = hot;
        if (ringRef.current) ringRef.current.classList.toggle('is-hot', hot);
      }
    };
    const tick = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      dx += (tx - dx) * 0.5;
      dy += (ty - dy) * 0.5;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      if (dotRef.current) dotRef.current.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerover', onOver);
    tick();
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function Nav({ route, onNav, dark = false, fade = 1 }) {
  const links = [
    ['menu', 'La carte'],
    ['apropos', 'La maison'],
    ['salon', 'Salon Laurier'],
    ['carte-cadeau', 'Carte cadeau'],
    ['blogue', 'Blogue'],
    ['contact', 'Contact'],
  ];
  return (
    <nav className={'nav' + (dark ? ' is-dark' : '')}
         style={{ opacity: fade, pointerEvents: fade < 0.05 ? 'none' : 'auto' }}>
      <div className="nav__brand" onClick={() => onNav('home')}>
        <Logo width={170} dark={dark} />
      </div>
      <div className="nav__links">
        {links.map(([k, l]) => (
          <button key={k} className={'nav__link' + (route === k ? ' is-active' : '')} onClick={() => onNav(k)}>{l}</button>
        ))}
        <a href="tel:5142713095" className="nav__phone">514·271·3095</a>
        <button className="nav__reserve btn btn--sage" onClick={() => onNav('reservation')}>Réserver</button>
      </div>
    </nav>
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
  return (
    <footer className="footer">
      <div className="ft-grid">
        <div className="ft-brand">
          <Logo width={220} dark />
          <p>Une cuisine inspirée et gourmande, sur l’avenue Laurier depuis mars 1995.</p>
        </div>
        <div>
          <div className="ft-h">Nous joindre</div>
          <div className="ft-line">
            <a href="tel:5142713095">514&nbsp;271-3095</a><br/>
            <a href="mailto:info@lachronique.qc.ca">info@lachronique.qc.ca</a><br/>
            104 av. Laurier Ouest<br/>
            Montréal · QC · H2T 2N7
          </div>
        </div>
        <div>
          <div className="ft-h">Heures</div>
          <div className="ft-line">
            Mardi — Samedi<br/>
            17 h 30 — 22 h 30<br/>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>Fermé dim. et lun.</span>
          </div>
        </div>
        <div>
          <div className="ft-h">Suivez-nous</div>
          <div className="ft-social">
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
      <div className="ft-bottom">
        <span>© Restaurant La Chronique · 1995 — 2026</span>
        <span>Crédit photo · Fany Ducharme</span>
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
  const rafId   = useRef(0);
  const [p, setP] = useState(0);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const r = track.getBoundingClientRect();
      const total = track.offsetHeight - window.innerHeight;
      const scrolled = -r.top;
      targetP.current = Math.max(0, Math.min(1, scrolled / total));
    };
    const tick = () => {
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
  // 0.00 – 0.32  approach: façade alive, logo at rest, name visible
  // 0.32 – 0.72  zoom: logo accelerates forward, façade dims, interior brightens
  // 0.72 – 0.92  pass-through: logo overshoots, bloom sweeps, interior fully open
  // 0.92 – 1.00  arrival: copy slides in bottom-left, stage releases

  const facadeOp     = 1 - easeIO(clamp01((p - 0.24) / 0.40));
  // Restaurant visible in full from p=0 (the sign on top is in frame).
  // Only a faint Ken Burns drift so the photo doesn’t look frozen.
  const facadeKB     = lerp(1.0, 1.06, easeIO(p));
  const facadeBright = lerp(0.62, 1.0, easeIO(clamp01((p - 0.10) / 0.50)));

  const interiorOp     = easeIO(clamp01((p - 0.32) / 0.50));
  const interiorKB     = lerp(1.06, 1.0, easeIO(clamp01((p - 0.32) / 0.65)));
  const interiorBright = lerp(0.95, 1.0, easeIO(clamp01((p - 0.50) / 0.30)));

  // Logo scale — we zoom INTO the "O" of "chronique". Transform-origin
  // is set on the element to that letter’s position so it grows out
  // toward the viewer; when fully open it becomes the doorway through
  // which the interior is revealed.
  const zoomBase  = lerp(1.0, 1.18, easeIO(clamp01(p / 0.34)));
  const zoomRush  = lerp(1.18, 9.5, easeRush(clamp01((p - 0.34) / 0.38)));
  const zoom = p < 0.34 ? zoomBase : zoomRush;
  const logoOp = p < 0.68 ? 1 : 1 - easeIO(clamp01((p - 0.68) / 0.12));

  // Tiny depth wobble — mimics walking through a doorway, never aggressive
  const wobbleY = Math.sin(p * 6.28) * 0.6 * (1 - p);

  // Caption fades
  const sinceOp = 1 - easeIO(clamp01(p / 0.28));
  const hintOp  = 1 - easeIO(clamp01(p / 0.18));

  // Vignette — very light at the start so the first image is barely darkened
  const vignetteR = lerp(80, 120, easeIO(clamp01((p - 0.20) / 0.55)));
  const vignetteA = lerp(0.18, 0.05, easeIO(clamp01((p - 0.30) / 0.50)));

  // Arrival copy
  const arrivalOp = easeOut(clamp01((p - 0.78) / 0.18));
  const arrivalY = lerp(40, 0, arrivalOp);

  return (
    <section ref={trackRef} className="cinema">
      <div className="cinema__stage">
        <div className="cinema__layer cinema__layer--facade"
             style={{
               opacity: facadeOp,
               transform: `scale(${facadeKB})`,
               filter: `brightness(${facadeBright}) saturate(0.92)`,
               backgroundImage: `url('${window.__r('facade_night_webp')}')`,
               backgroundPosition: 'center center',
             }} />
        <div className="cinema__layer cinema__layer--interior"
             style={{
               opacity: interiorOp,
               transform: `scale(${interiorKB})`,
               filter: `brightness(${interiorBright})`,
               backgroundImage: `url('${window.__r('dining_room_press_jpg')}')`,
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
          <img src={window.__r('logo_wordmark_png')} alt="Restaurant la chronique" />
        </div>

        <div className="cinema__since" style={{ opacity: sinceOp }}>
          Depuis 1995 · Mile-end
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
          <div className="cinema__arrival-eyebrow">Bienvenue · vous êtes entré</div>
          <div className="cinema__arrival-line">
            Le bonheur est <em>dans l’assiette.</em>
          </div>
          <button className="cinema__arrival-cta" onClick={onEnter}>
            Réservez votre table →
          </button>
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
    const factor = 0.13;

    const onWheel = (e) => {
      if (e.ctrlKey) return;             // pinch-zoom / browser zoom
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
      // arrow / page / space keys still scroll naturally; sync target
      target = window.scrollY;
    };
    const onResize = () => { target = window.scrollY; current = window.scrollY; };
    const onTouch = () => { target = window.scrollY; current = window.scrollY; };

    const tick = () => {
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
    window.addEventListener('keydown', onKey, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('touchstart', onTouch, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('touchstart', onTouch);
      cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}

Object.assign(window, { Logo, Curtain, Cursor, Nav, Hero, Footer, CinemaIntro, SmoothScroll });
