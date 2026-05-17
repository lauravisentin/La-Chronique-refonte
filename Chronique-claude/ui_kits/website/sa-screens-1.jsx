/* global React, CinemaIntro, PressRail */
const { useState: useStateS1 } = React;

/* ============================================================
   HOME — editorial / cinematic / luxurious
   ============================================================ */
function Home({ onNav }) {
  return (
    <>
      <CinemaIntro onEnter={() => onNav('reservation')} />

      <PressRail />

      {/* ------------------- Manifeste ------------------- */}
      <section className="manifeste">
        <div className="manifeste__eyebrow">Le mot de la maison</div>
        <h2 className="manifeste__title">
          Mettre tout notre talent au service de la qualité des produits —
          {' '}<span className="sage">pour que le bonheur soit dans l’assiette.</span>
        </h2>
        <div className="manifeste__signature">
          <div className="manifeste__signature-mark" />
          <div className="manifeste__chefs-names">
            <span>Marc De Canck<small>chef propriétaire · depuis 1995</small></span>
            <span>Olivier de Montigny<small>chef propriétaire · depuis 1999</small></span>
          </div>
          <div className="manifeste__signature-mark" />
        </div>
      </section>

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
            <div className="histoire__chapter">Chapitre <span>I</span> L’histoire</div>
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
              <div className="carte__head-eyebrow">Chapitre II · La carte</div>
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

      {/* ------------------- Salles ------------------- */}
      <section className="salles">
        <div className="salles__head">
          <div>
            <div className="salles__head-eyebrow">Chapitre III · Les espaces</div>
            <h2 className="salles__head-title">La salle à manger<br /><em>et le Salon Laurier.</em></h2>
          </div>
          <p className="salles__head-p">
            Un décor épuré, contemporain, sobre. Tout est pensé pour disparaître
            derrière l’assiette — la lumière, le linge blanc, la marqueterie de
            noyer, le velours noir des banquettes.
          </p>
        </div>
        <div className="salles__grid">
          <div className="salle salle--a" onClick={() => onNav('apropos')}>
            <div className="salle__inner" style={{ backgroundImage: `url('${window.__r('dining_room_press_jpg')}')` }} />
            <div className="salle__label">
              <div className="salle__label-num">i</div>
              <div className="salle__label-name">La salle à manger</div>
            </div>
          </div>
          <div className="salle salle--b" onClick={() => onNav('apropos')}>
            <div className="salle__inner" style={{ backgroundImage: `url('${window.__r('signage_detail_jpg')}')` }} />
            <div className="salle__label">
              <div className="salle__label-num">ii</div>
              <div className="salle__label-name">La façade</div>
            </div>
          </div>
          <div className="salle salle--c" onClick={() => onNav('apropos')}>
            <div className="salle__inner" style={{ backgroundImage: `url('${window.__r('facade_night_webp')}')` }} />
            <div className="salle__label">
              <div className="salle__label-num">iii</div>
              <div className="salle__label-name">La nuit, sur Laurier</div>
            </div>
          </div>
          <div className="salle salle--d" onClick={() => onNav('apropos')}>
            <div className="salle__inner" style={{ backgroundImage: `url('${window.__r('dining_room_collage_jpg')}')` }} />
            <div className="salle__label">
              <div className="salle__label-num">iv</div>
              <div className="salle__label-name">Service du soir</div>
            </div>
          </div>
          <div className="salle salle--e" onClick={() => onNav('salon')}>
            <div className="salle__inner" style={{ backgroundImage: `url('${window.__r('facade_day_jpg')}')` }} />
            <div className="salle__label">
              <div className="salle__label-num">v</div>
              <div className="salle__label-name">Salon Laurier</div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- Full-bleed citation breaker ------------------- */}
      <section className="bleed-quote" style={{ backgroundImage: `url('${window.__r('dining_room_press_jpg')}')` }}>
        <div className="bleed-quote__inner">
          <div className="bleed-quote__mark">«</div>
          <div className="bleed-quote__text">Petite resto, <em>grande cuisine.</em></div>
          <div className="bleed-quote__attr">
            Françoise Kayler
            <small>critique gastronomique · La Presse</small>
          </div>
        </div>
      </section>

      {/* ------------------- Agenda ------------------- */}
      <section className="agenda">
        <div className="agenda__inner">
          <div className="agenda__head">
            <div className="agenda__head-eyebrow">Chapitre IV · Événements</div>
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

      {/* ------------------- Invitation strip ------------------- */}
      <section className="invite">
        <div className="invite__eyebrow">Chapitre V · Réservation</div>
        <h2 className="invite__title">Venez vous asseoir<br />à notre table.</h2>
        <form className="invite__inline" onSubmit={(e) => { e.preventDefault(); onNav('reservation'); }}>
          <div>
            <label>Date</label>
            <input type="date" defaultValue="2026-05-22" />
          </div>
          <div>
            <label>Heure</label>
            <select defaultValue="19:30">
              <option>17:30</option><option>18:00</option><option>18:30</option>
              <option>19:00</option><option>19:30</option><option>20:00</option>
              <option>20:30</option><option>21:00</option>
            </select>
          </div>
          <div>
            <label>Personnes</label>
            <select defaultValue="2 personnes">
              <option>2 personnes</option>
              <option>3 personnes</option>
              <option>4 personnes</option>
              <option>5 personnes</option>
              <option>6 personnes</option>
            </select>
          </div>
          <button type="submit" className="invite__btn">Réserver →</button>
        </form>
        <div className="invite__phone">
          ou directement par téléphone — <a href="tel:5142713095">514&nbsp;271-3095</a>
        </div>
      </section>

      {/* ------------------- Editorial address ------------------- */}
      <section className="address">
        <div className="address__eyebrow">Nous trouver</div>
        <div className="address__big">
          104 avenue Laurier Ouest,<br />Montréal,
          <strong>Mile-end · QC · H2T 2N7</strong>
        </div>
        <div className="address__sub">Mardi — Samedi · 17 h 30 — 22 h 30</div>
      </section>
    </>
  );
}

Object.assign(window, { Home });
