/* global React */
const { useState: useStateS2 } = React;

/* ============================================================
   À PROPOS — chapter book layout
   ============================================================ */
function Apropos() {
  return (
    <div className="page">
      <div className="page-hero" style={{ backgroundImage: "url('/assets/dining-room-press.jpg')" }}>
        <div className="page-hero__copy">
          <div className="page-hero__eyebrow">La maison</div>
          <h1 className="page-hero__title">Trois décennies,<br />deux chefs, une table.</h1>
        </div>
      </div>

      <section className="chapters">
        {/* Chapter I — Marc */}
        <div className="chapter">
          <div className="chapter__num">I<small>Le maître</small></div>
          <div className="chapter__body">
            <div className="chapter__name">Marc De Canck</div>
            <h2 className="chapter__title">Issu d’une famille belge,<br /><em>pâtissier de père en fils.</em></h2>
            <div className="chapter__rule" />
            <p className="chapter__p">
              Apprenti, puis pâtissier-boulanger, Marc De Canck roule sa bosse dans le domaine
              de la restauration. Curieux et gourmand, il goûte les sauces, tâte les viandes,
              hume les poissons et bifurque tout doucement pour passer de pâtissier à cuisinier.
            </p>
            <p className="chapter__p">
              Le système européen lui impose trop de contrôle ; il étouffe. C’est finalement
              au Québec qu’il vient chercher un peu d’anticonformiste. En mars 1995, il ouvre
              son restaurant dans un petit local de l’avenue Laurier ; en moins d’un an,
              La Chronique devient une adresse incontournable.
            </p>
          </div>
          <div className="chapter__img" style={{ backgroundImage: "url('/assets/dining-room-collage.jpg')" }} />
        </div>

        {/* Chapter II — Olivier (flipped) */}
        <div className="chapter chapter--flip">
          <div className="chapter__num">II<small>L’élève</small></div>
          <div className="chapter__body">
            <div className="chapter__name">Olivier de Montigny</div>
            <h2 className="chapter__title">À quelques coins de rue,<br /><em>sa passion pour la cuisine.</em></h2>
            <div className="chapter__rule" />
            <p className="chapter__p">
              Amené tout petit dans les cuisines du restaurant où sa mère œuvrait en salle,
              le jeune Olivier apprend rapidement à reconnaître la qualité et le bon goût.
              L’avenue Laurier l’attire ; il salive à la lecture du menu et s’assoit à la
              table du grand chef dès que son portefeuille le lui permet.
            </p>
            <p className="chapter__p">
              Olivier aime sentir, goûter, analyser les plats de De Canck. La curiosité de
              l’un attire l’attention de l’autre. Cinq ans plus tard, les deux passions se
              rencontrent : Marc s’associe à Olivier. Le duo de haute voltige est né.
            </p>
          </div>
          <div className="chapter__img" style={{ backgroundImage: "url('/assets/dining-room-press.jpg')" }} />
        </div>

        {/* Chapter III — la maison */}
        <div className="chapter">
          <div className="chapter__num">III<small>La maison</small></div>
          <div className="chapter__body">
            <div className="chapter__name">L’histoire</div>
            <h2 className="chapter__title">De 1995 à <em>aujourd’hui.</em></h2>
            <div className="chapter__rule" />
            <p className="chapter__p">
              En 2013, pour ses dix-huit ans, La Chronique se fait plus grande, plus belle, et
              aménage dans un nouveau local. Un décor épuré, contemporain, mais toujours sobre ;
              le but reste le même : mettre tout leur talent au service de la qualité des
              produits.
            </p>
            <p className="chapter__p">
              En 2025, le Guide Michelin recommande la maison. La table est citée, la cuisine
              saluée, mais la philosophie ne change pas. <em>Le bonheur, toujours, est dans
              l’assiette.</em>
            </p>
          </div>
          <div className="chapter__img" style={{ backgroundImage: "url('/assets/facade-night.webp')" }} />
        </div>
      </section>

      <section className="citation">
        <div className="citation__inner">
          <div className="citation__mark">«</div>
          <div className="citation__text">
            Le bonheur est <em>dans l’assiette.</em>
          </div>
          <div className="citation__attr">
            <div className="citation__attr-name">La maison</div>
            <div className="citation__attr-sub">depuis mars 1995</div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   MENU — physical menu card on cream
   ============================================================ */
function Menu({ onNav }) {
  return (
    <div className="page menu-page">
      <div className="menu-card">
        <div className="menu-card__head">
          <div className="menu-card__rest">Restaurant La Chronique</div>
          <h1 className="menu-card__title">Menu Signature</h1>
          <div className="menu-card__sub">Menu dégustation · quatre temps</div>
        </div>

        <div className="menu-section-h">Mises en bouche</div>
        <div className="menu-row">
          <div className="menu-row__dish">Sélection de la maison</div>
          <div className="menu-row__pair">selon l’arrivage et l’inspiration des chefs</div>
        </div>

        <div className="menu-section-h">Les services</div>

        <div className="menu-row">
          <div className="menu-row__dish">Homard du Québec / Asperge verte / Sauce américaine</div>
          <div className="menu-row__pair">France, Vallée de la Loire · Menetou-Salon · Domaine Pellé · Le Carroir 2023</div>
        </div>
        <div className="menu-row">
          <div className="menu-row__dish">Flétan de l’Atlantique / Poireaux / Beurre blanc</div>
          <div className="menu-row__pair">Portugal, Douro · Niepoort · Redoma Reserva Branco 2023</div>
        </div>
        <div className="menu-row">
          <div className="menu-row__dish">Foie gras de canard / Choux rouge / Bleuets</div>
          <div className="menu-row__pair">France, Bourgogne · Maranges 1<sup>er</sup> cru · Bachelet-Monnot · Clos de la Boutière 2022</div>
        </div>
        <div className="menu-row">
          <div className="menu-row__dish">Bœuf Limousin du Québec / Courge musquée / Jus truffé</div>
          <div className="menu-row__pair">France, Bordeaux · Saint-Émilion Grand Cru · Petit Figeac 2021</div>
        </div>

        <div className="menu-section-h">Fromages</div>
        <div className="menu-row">
          <div className="menu-row__dish">Fromages d’ici et d’ailleurs</div>
          <div className="menu-row__supp">supplément · + 20 $</div>
        </div>

        <div className="menu-section-h">Gourmandise sucrée</div>
        <div className="menu-row">
          <div className="menu-row__dish">Création du jour</div>
          <div className="menu-row__pair">Canada, Québec · Vignoble du Marathonien · Vendange Tardive Sélective 2024</div>
        </div>

        <div className="menu-section-h">Mignardises</div>
        <div className="menu-row">
          <div className="menu-row__dish">Café · thé · tisane</div>
        </div>

        <div className="menu-prices">
          <div className="menu-price">
            <strong>145 $</strong>
            <span>Menu Signature</span>
          </div>
          <div className="menu-price">
            <strong>250 $</strong>
            <span>Accord mets &amp; vins</span>
          </div>
        </div>

        <p className="menu-foot">
          Un frais de service de 20 % sera ajouté au groupe de six personnes et plus.
          <br /><br />
          Nous espérons que vous prendrez autant de plaisir à déguster ce menu que nous en
          avons eu à le préparer ; notre volonté de vous faire plaisir sera toujours au
          rendez-vous.
          <br /><br />
          <strong>Marc De Canck · Olivier de Montigny</strong>
          <br />
          <em style={{ fontSize: 11, color: 'var(--lc-stone)' }}>chefs propriétaires</em>
        </p>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <button className="btn btn--sage" onClick={() => onNav('reservation')}>Réserver une table →</button>
        </div>

        <div className="menu-update">Mise à jour le 13 mars 2026</div>
      </div>
    </div>
  );
}

/* ============================================================
   RÉSERVATION
   ============================================================ */
function Reservation() {
  const [submitted, setSubmitted] = useStateS2(false);
  const [form, setForm] = useStateS2({
    name: '', phone: '', email: '', date: '2026-05-22', time: '19:30', guests: '2 personnes', notes: '',
  });
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <div className="page res-page">
      <div className="res-card">
        <div className="res-head">
          <div className="eyebrow">Réservation</div>
          <h1>Une table <em>à votre nom.</em></h1>
          <p>
            Pour réserver, complétez le formulaire ou joignez-nous au{' '}
            <a href="tel:5142713095" style={{ color: 'var(--lc-sage)' }}>514&nbsp;271-3095</a>.
            Une confirmation vous parviendra par courriel.
          </p>
        </div>

        {!submitted ? (
          <form className="res-grid" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <div className="field">
              <label>Nom complet</label>
              <input type="text" required value={form.name} onChange={set('name')} placeholder="Votre nom" />
            </div>
            <div className="field">
              <label>Téléphone</label>
              <input type="tel" required value={form.phone} onChange={set('phone')} placeholder="514 000-0000" />
            </div>
            <div className="field field--full">
              <label>Courriel</label>
              <input type="email" required value={form.email} onChange={set('email')} placeholder="vous@exemple.qc.ca" />
            </div>
            <div className="field">
              <label>Date</label>
              <input type="date" required value={form.date} onChange={set('date')} />
            </div>
            <div className="field">
              <label>Heure</label>
              <select value={form.time} onChange={set('time')}>
                <option>17:30</option><option>18:00</option><option>18:30</option>
                <option>19:00</option><option>19:30</option><option>20:00</option>
                <option>20:30</option><option>21:00</option>
              </select>
            </div>
            <div className="field field--full">
              <label>Nombre de personnes</label>
              <select value={form.guests} onChange={set('guests')}>
                <option>2 personnes</option>
                <option>3 personnes</option>
                <option>4 personnes</option>
                <option>5 personnes</option>
                <option>6 personnes</option>
                <option>Plus de 6 — nous joindre</option>
              </select>
            </div>
            <div className="field field--full">
              <label>Notes — allergie, occasion, demande particulière</label>
              <textarea value={form.notes} onChange={set('notes')} placeholder="Anniversaire, allergie aux fruits de mer, etc." />
            </div>
            <div className="res-submit" style={{ gridColumn: 'span 2' }}>
              <button type="submit" className="btn--solid-sage">Envoyer ma réservation</button>
            </div>
          </form>
        ) : (
          <div className="res-success">
            <div className="mark">✓</div>
            <h2>Merci, {form.name || 'cher invité'}.</h2>
            <p>
              Votre demande pour le <strong>{form.date}</strong> à <strong>{form.time}</strong>,
              {' '}<strong>{form.guests}</strong>, est bien reçue.
              <br /><br />
              Une confirmation vous parviendra à <strong>{form.email || 'votre courriel'}</strong>{' '}
              dans les prochaines heures.
              <br /><br />
              À très bientôt sur l’avenue Laurier.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   SALON LAURIER
   ============================================================ */
function Salon({ onNav }) {
  return (
    <div className="page salon-page">
      <section className="agenda salon-agenda">
        <div className="agenda__inner">
          <div className="agenda__head">
            <div className="agenda__head-eyebrow">Le Salon Laurier</div>
            <h2 className="agenda__head-title">Ce que la maison <em>accueille.</em></h2>
            <span style={{ width: 1 }} />
          </div>
          <div className="agenda__item">
            <div className="agenda__item-date">i<small>Affaires</small></div>
            <div className="agenda__item-body">
              <div className="agenda__item-name">R&eacute;unions d'affaires</div>
              <div className="agenda__item-sub">collaborateurs &middot; clients &middot; pr&eacute;sentations corporatives</div>
            </div>
            <div className="agenda__item-cta">&rarr;</div>
          </div>
          <div className="agenda__item">
            <div className="agenda__item-date">ii<small>Repas</small></div>
            <div className="agenda__item-body">
              <div className="agenda__item-name">D&icirc;ners corporatifs</div>
              <div className="agenda__item-sub">menus personnalis&eacute;s &middot; service haut de gamme &middot; cadre confidentiel</div>
            </div>
            <div className="agenda__item-cta">&rarr;</div>
          </div>
          <div className="agenda__item">
            <div className="agenda__item-date">iii<small>Priv&eacute;</small></div>
            <div className="agenda__item-body">
              <div className="agenda__item-name">Anniversaires et &eacute;v&eacute;nements priv&eacute;s</div>
              <div className="agenda__item-sub">jusqu'&agrave; 24 personnes assises &middot; exp&eacute;rience sur mesure</div>
            </div>
            <div className="agenda__item-cta">&rarr;</div>
          </div>
        </div>
      </section>

      <section className="salon-overview">
        <div className="salon-overview__copy">
          <div className="section-eyebrow">Un espace exclusif</div>
          <h1 className="section-title">Le Salon Laurier</h1>
          <p className="salon-lede">Un espace exclusif pour vos r&eacute;unions d'affaires et &eacute;v&eacute;nements priv&eacute;s.</p>
          <p className="section-body">
            Le Salon Laurier est &agrave; votre disposition pour l'organisation de vos r&eacute;unions d'affaires,
            d&icirc;ners corporatifs, anniversaires et autres &eacute;v&eacute;nements priv&eacute;s. Offrant un cadre &eacute;l&eacute;gant
            et intimiste, il est id&eacute;al pour accueillir vos collaborateurs, clients ou proches dans un
            environnement raffin&eacute; et propice aux &eacute;changes.
          </p>
          <p className="section-body">
            Avec une capacit&eacute; de jusqu'&agrave; 24 personnes assises, le Salon Laurier offre un espace
            confortable et confidentiel, parfaitement adapt&eacute; aux repas d'affaires, r&eacute;unions
            professionnelles, pr&eacute;sentations corporatives et c&eacute;l&eacute;brations priv&eacute;es.
          </p>
        </div>
        <div className="salon-facts" aria-label="Informations cles sur le Salon Laurier">
          <div className="salon-fact salon-fact--primary">
            <span>Capacit&eacute;</span>
            <strong>Jusqu'&agrave; 24</strong>
            <small>personnes assises</small>
          </div>
          <div className="salon-fact">
            <span>&Eacute;quipement inclus</span>
            <strong>T&eacute;l&eacute;viseur intelligent 60 po</strong>
            <small>PowerPoint &middot; vid&eacute;oconf&eacute;rences &middot; projections priv&eacute;es</small>
          </div>
          <div className="salon-fact">
            <span>Frais suppl&eacute;mentaires</span>
            <strong>0 $</strong>
            <small>pour l'utilisation du t&eacute;l&eacute;viseur</small>
          </div>
        </div>
      </section>

      <section className="salon-grid salon-grid--final">
        <div className="salon-grid__body">
          <div className="section-eyebrow">Menus personnalis&eacute;s</div>
          <h2 className="section-title">Pour c&eacute;l&eacute;brer<br /><em>en petit comit&eacute;.</em></h2>
          <div style={{ width: 48, height: 1, background: 'var(--lc-sage)', marginBottom: 28 }} />
          <p className="section-body">
            Nos chefs talentueux vous proposent des menus personnalis&eacute;s, adapt&eacute;s &agrave; la nature de
            votre &eacute;v&eacute;nement. Que ce soit pour un d&icirc;ner d'affaires haut de gamme, une r&eacute;ception
            priv&eacute;e ou un anniversaire en petit comit&eacute;, notre cuisine met &agrave; l'honneur des produits
            frais et de saison, soigneusement s&eacute;lectionn&eacute;s pour une exp&eacute;rience culinaire exceptionnelle.
          </p>
          <p className="section-body">
            Nous nous engageons &agrave; vous offrir un service haut de gamme et une exp&eacute;rience enti&egrave;rement
            personnalis&eacute;e. Pour toute information ou pour r&eacute;server le Salon Laurier, contactez-nous au{' '}
            <a href="tel:5142713095" style={{ color: 'var(--lc-sage)', borderBottom: '1px solid var(--lc-sage)' }}>514&nbsp;271-3095</a>.
          </p>
          <div style={{ marginTop: 32 }}>
            <button className="btn btn--sage" onClick={() => onNav('reservation')}>Demander une date &rarr;</button>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Apropos, Menu, Reservation, Salon });
