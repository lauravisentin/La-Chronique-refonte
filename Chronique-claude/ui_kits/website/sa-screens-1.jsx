/* global React, CinemaIntro, PressRail */
const { useState: useStateS1 } = React;

/* ============================================================
   HOME — editorial / cinematic / luxurious
   ============================================================ */
function Home({ onNav }) {
  return (
    <>
      <CinemaIntro onEnter={() => onNav('reservation')} />


      {/* ------------------- Histoire ------------------- */}
      <section className="histoire">
        <div className="histoire__rail">
          <div className="histoire__rail-num">1995</div>
          <div className="histoire__rail-line" />
          <div className="histoire__rail-now">Aujourd’hui</div>
        </div>
        <div className="histoire__grid">
          <div className="histoire__image-stack">
            <div className="img img--a" style={{ backgroundImage: `url('${window.__r('dining_room_press_jpg')}')` }} />
            <div className="img img--b" style={{ backgroundImage: `url('${window.__r('historique_illustration_png')}')` }} />
            <div className="img--caption">Photo · Fany Ducharme</div>
          </div>
          <div className="histoire__body">
            <h2 className="histoire__title">Petite resto,<br />grande cuisine.</h2>
            <p className="histoire__p">
              Mars 1995. Après quelques années passées dans divers établissements
              réputés du Québec, Marc De Canck fait le grand saut et ouvre son propre
              restaurant — un petit local de la rue Laurier ouest, près de Saint-Laurent.
            </p>
            <p className="histoire__p">
              Sous des allures simples et sobres de petit bistro, le jeune chef fait
              découvrir une cuisine inspirée d’une qualité irréprochable. Petit à petit,
              la maison se drape de nappes blanches. La table grande. <em>Le bonheur,
              déjà, est dans l’assiette.</em>
            </p>
            <div className="histoire__cta">
              <button className="btn btn--sage" onClick={() => onNav('apropos')}>Lire la suite →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- Carte (with plate image-slots) ------------------- */}
      <section className="carte">
        <div className="carte__bg">Signature</div>
        <div className="carte__inner">
          <div className="carte__head">
            <div>
              <h2 className="carte__head-title">Quatre temps,<br />un menu dégustation.</h2>
            </div>
            <div className="carte__head-meta">
              Menu Signature
              <strong>145 $</strong>
              avec accord mets &amp; vins
              <strong>250 $</strong>
            </div>
          </div>

          <div className="plates">
            <div className="plate" onClick={() => onNav('menu')}>
              <div className="plate__slot">
                <image-slot id="plate-1" placeholder="Photo du plat" shape="rect"></image-slot>
              </div>
              <div>
                <div className="plate__num">I</div>
                <div className="plate__name">Homard du Québec / Asperge verte / Sauce américaine</div>
                <div className="plate__pair">Menetou-Salon · Domaine Pellé · 2023</div>
              </div>
            </div>
            <div className="plate" onClick={() => onNav('menu')}>
              <div className="plate__slot">
                <image-slot id="plate-2" placeholder="Photo du plat" shape="rect"></image-slot>
              </div>
              <div>
                <div className="plate__num">II</div>
                <div className="plate__name">Flétan de l’Atlantique / Poireaux / Beurre blanc</div>
                <div className="plate__pair">Niepoort · Redoma Reserva · 2023</div>
              </div>
            </div>
            <div className="plate" onClick={() => onNav('menu')}>
              <div className="plate__slot">
                <image-slot id="plate-3" placeholder="Photo du plat" shape="rect"></image-slot>
              </div>
              <div>
                <div className="plate__num">III</div>
                <div className="plate__name">Foie gras de canard / Choux rouge / Bleuets</div>
                <div className="plate__pair">Bachelet-Monnot · Maranges 1<sup>er</sup> cru · 2022</div>
              </div>
            </div>
            <div className="plate" onClick={() => onNav('menu')}>
              <div className="plate__slot">
                <image-slot id="plate-4" placeholder="Photo du plat" shape="rect"></image-slot>
              </div>
              <div>
                <div className="plate__num">IV</div>
                <div className="plate__name">Bœuf Limousin du Québec / Courge musquée / Jus truffé</div>
                <div className="plate__pair">Petit Figeac · Saint-Émilion Grand Cru · 2021</div>
              </div>
            </div>
          </div>

          <div className="carte__foot">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--lc-sage-soft)' }}>Mise à jour</span>
              <strong style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--lc-white)', fontWeight: 400 }}>13 mars 2026</strong>
            </div>
            <button className="btn btn--light" onClick={() => onNav('menu')}>
              Découvrir le menu complet →
            </button>
          </div>
        </div>
      </section>

      {/* ------------------- Agenda ------------------- */}
      <section className="agenda">
        <div className="agenda__inner">
          <div className="agenda__head">
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
            <img src="/assets/IMG_8851_plat.jpg" alt="Plat signature de La Chronique" />
          </figure>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { Home });
