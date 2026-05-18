/* global React, CinemaIntro, PressRail */
const { useState: useStateS1, useEffect: useEffectS1, useRef: useRefS1 } = React;

/* ============================================================
   StoryBeat — reveals child content with fade + lift on scroll-in.
   Uses IntersectionObserver, fires once, then disconnects.
   ============================================================ */
function StoryBeat({ children, className = '', delay = 0, threshold = 0.22, as: As = 'div' }) {
  const ref = useRefS1(null);
  const [inView, setInView] = useStateS1(false);
  useEffectS1(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, { threshold, rootMargin: '0px 0px -10% 0px' });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <As
      ref={ref}
      className={'story__beat ' + className + (inView ? ' is-in' : '')}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </As>
  );
}

/* ============================================================
   HOME — editorial / cinematic / luxurious
   ============================================================ */
function Home({ onNav }) {
  return (
    <>
      <CinemaIntro onEnter={() => onNav('reservation')} />

      <PressRail />

      {/* ------------------- Invitations — three passages + Salon Laurier ------------------- */}
      <section className="invitations">
        <header className="invitations__head">
          <span className="invitations__eyebrow">
            <span className="invitations__eyebrow-rule" />
            <span>Chapitre I</span>
            <span className="invitations__eyebrow-dot">·</span>
            <span className="invitations__eyebrow-name">L’invitation</span>
          </span>
          <h2 className="invitations__title">Trois passages,<br /><em>une même table.</em></h2>
        </header>

        <div className="invitations__triptych">
          <StoryBeat as="a" className="passage" onClick={() => onNav('menu')} role="link" tabIndex={0}>
            <div className="passage__rail"><span>I</span><i /></div>
            <div className="passage__img">
              <img src="../../assets/MG_3026_plat.jpg" alt="La carte" />
            </div>
            <div className="passage__meta">
              <span className="passage__kicker">La carte</span>
              <span className="passage__line">Menu Signature · quatre temps</span>
            </div>
          </StoryBeat>

          <StoryBeat as="a" className="passage" onClick={() => onNav('apropos')} role="link" tabIndex={0} delay={120}>
            <div className="passage__rail"><span>II</span><i /></div>
            <div className="passage__img">
              <img src="../../assets/marc-de-canck-olivier-de-montigny.png" alt="Marc De Canck et Olivier de Montigny" />
            </div>
            <div className="passage__meta">
              <span className="passage__kicker">La maison</span>
              <span className="passage__line">Marc De Canck · Olivier de Montigny</span>
            </div>
          </StoryBeat>

          <StoryBeat as="a" className="passage" onClick={() => onNav('reservation')} role="link" tabIndex={0} delay={240}>
            <div className="passage__rail"><span>III</span><i /></div>
            <div className="passage__img">
              <img src="../../assets/dining-room-press.jpg" alt="Réservation" />
            </div>
            <div className="passage__meta">
              <span className="passage__kicker">La table</span>
              <span className="passage__line">Réservation · midi &amp; soir</span>
            </div>
          </StoryBeat>
        </div>

        {/* Salon Laurier — split portal, image left + ink panel right */}
        <StoryBeat as="a" className="salon" onClick={() => onNav('salon')} role="link" tabIndex={0}>
          <div className="salon__img">
            <img src="../../assets/dining-room-collage.jpg" alt="Salon Laurier" />
          </div>
          <div className="salon__panel">
            <span className="salon__eyebrow">
              <span className="salon__eyebrow-rule" />
              Une pièce à part
            </span>
            <h3 className="salon__title">Salon <em>Laurier.</em></h3>
            <p className="salon__lead">
              Une salle privée pour vingt convives, drapée de chêne et de lin blanc.
              Pour les signatures, les anniversaires, et les soirées qui restent.
            </p>
            <span className="salon__seal">
              <span>Découvrir le salon</span>
              <i className="salon__seal-line" />
            </span>
          </div>
        </StoryBeat>
      </section>

      {/* ------------------- Carte — minimal trio of plates ------------------- */}
      <section className="carte">
        <div className="carte__inner">
          <header className="carte__head">
            <div className="carte__head-eyebrow">Chapitre II · La carte</div>
            <h2 className="carte__head-title">Un menu dégustation,<br /><em>quatre temps.</em></h2>
          </header>

          <div className="plates">
            <figure className="plate" onClick={() => onNav('menu')}>
              <img className="plate__img" src="../../assets/MG_3026_plat.jpg" alt="" />
              <figcaption className="plate__cap">
                <span className="plate__num">i.</span>
                <span className="plate__name">Crevette &amp; pétoncle, riz au safran</span>
              </figcaption>
            </figure>
            <figure className="plate" onClick={() => onNav('menu')}>
              <img className="plate__img" src="../../assets/MG_3055_plat.jpeg" alt="" />
              <figcaption className="plate__cap">
                <span className="plate__num">ii.</span>
                <span className="plate__name">Magret de canard, artichaut, jus court</span>
              </figcaption>
            </figure>
            <figure className="plate" onClick={() => onNav('menu')}>
              <img className="plate__img" src="../../assets/IMG_8851_plat.jpg" alt="" />
              <figcaption className="plate__cap">
                <span className="plate__num">iii.</span>
                <span className="plate__name">Bœuf Limousin, foie gras, jus truffé</span>
              </figcaption>
            </figure>
          </div>

          <div className="carte__foot">
            <button className="carte__cta" onClick={() => onNav('menu')}>
              Voir le menu complet
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ------------------- Agenda ------------------- */}
      <section className="agenda">
        <div className="agenda__inner">
          <div className="agenda__head">
            <div className="agenda__head-eyebrow">Chapitre III · Événements</div>
            <h2 className="agenda__head-title">Les soirées<br /><em>d’exception.</em></h2>
            <button className="agenda__head-link" onClick={() => onNav('blogue')}>Tout voir →</button>
          </div>

          <div className="agenda__item" onClick={() => onNav('reservation')}>
            <div className="agenda__item-date">22<small>Mai · jeudi</small></div>
            <div className="agenda__item-body">
              <div className="agenda__item-name">Accords champagne &amp; gibier — soirée Krug</div>
              <div className="agenda__item-sub">six services · une cuvée par plat · 195 $</div>
            </div>
            <div className="agenda__item-cta">Réserver →</div>
          </div>
          <div className="agenda__item" onClick={() => onNav('reservation')}>
            <div className="agenda__item-date">12<small>Juin · jeudi</small></div>
            <div className="agenda__item-body">
              <div className="agenda__item-name">Le terroir du Québec — repas à quatre mains</div>
              <div className="agenda__item-sub">avec le chef Jean-Pierre Cloutier (La Cabane) · 165 $</div>
            </div>
            <div className="agenda__item-cta">Réserver →</div>
          </div>
          <div className="agenda__item" onClick={() => onNav('reservation')}>
            <div className="agenda__item-date">3<small>Juillet · jeudi</small></div>
            <div className="agenda__item-body">
              <div className="agenda__item-name">Visite du vigneron — Domaine Pellé, Loire</div>
              <div className="agenda__item-sub">Paul-Henri Pellé · dégustation &amp; menu signature · 185 $</div>
            </div>
            <div className="agenda__item-cta">Réserver →</div>
          </div>
        </div>
      </section>

      {/* ------------------- Editorial address ------------------- */}
      <section className="address">
        <div className="address__inner">
          <div className="address__panel">
            <div className="address__eyebrow">Nous trouver</div>
            <div className="address__groups">
              <div className="address__group">
                <h3>Téléphone</h3>
                <p><a href="tel:5142713095">514&nbsp;271-3095</a></p>
              </div>
              <div className="address__group">
                <h3>Courriel</h3>
                <p><a href="mailto:info@lachronique.qc.ca">info@lachronique.qc.ca</a></p>
              </div>
              <div className="address__group">
                <h3>Adresse</h3>
                <p>104 avenue Laurier Ouest<br />Montréal, QC H2T 2N7</p>
              </div>
              <div className="address__group">
                <h3>Heures d’ouverture</h3>
                <p>Mardi — samedi<br />17 h 30 — 22 h 30</p>
              </div>
            </div>
          </div>
          <figure className="address__visual">
            <img src="../../assets/facade-day.jpg" alt="Façade du restaurant La Chronique" />
          </figure>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { Home });
