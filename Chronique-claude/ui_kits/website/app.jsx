/* global React, ReactDOM */
/* global Nav, Footer, Cursor, Curtain, SmoothScroll, Home, Apropos, Menu, Reservation, Salon */
const { useState: useStateApp, useEffect: useEffectApp } = React;

function App() {
  const [route, setRoute] = useStateApp(() => {
    const h = window.location.hash.slice(1);
    return ['home','menu','apropos','salon','carte-cadeau','reservation','blogue','contact'].includes(h) ? h : 'home';
  });
  const [scrollY, setScrollY] = useStateApp(0);

  useEffectApp(() => {
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [route]);

  useEffectApp(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Home starts inside the cinematic intro (3.6× viewport tall).
  // Keep the nav transparent/dark while the cinema is on-screen.
  const vh = typeof window !== 'undefined' ? window.innerHeight : 1;
  const logoGoneY = vh * 2.6 * 0.80;
  const inCinema = route === 'home' && scrollY < logoGoneY;
  const navDark = inCinema;
  // On home: nav hidden at the very start, fades in as the zoom begins, fully visible by mid-cinema.
  const navFade = route === 'home'
    ? Math.max(0, Math.min(1, (scrollY - vh * 0.10) / (vh * 0.60)))
    : 1;

  function Stub({ name, subtitle, hero = '/assets/facade-day.jpg' }) {
    return (
      <div className="page">
        <div className="page-hero" style={{ backgroundImage: `url('${hero}')` }}>
          <div className="page-hero__copy">
            <div className="page-hero__eyebrow">{name}</div>
            <h1 className="page-hero__title"><em>À venir.</em></h1>
          </div>
        </div>
        <section style={{ padding: '144px 32px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 19, color: 'var(--lc-graphite)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            {subtitle || 'Cette section sera bientôt publiée — la maison se réserve le temps de l’écrire avec soin.'}
          </p>
        </section>
      </div>
    );
  }

  function CarteCadeau() {
    return (
      <div className="gift-embed-page">
        <iframe
          className="gift-embed"
          src="/carte-cadeau.html"
          title="Carte cadeau"
          onMouseEnter={() => document.body.classList.add('is-gift-iframe-hot')}
          onMouseLeave={() => document.body.classList.remove('is-gift-iframe-hot')}
        />
      </div>
    );
  }

  let screen;
  switch (route) {
    case 'home':        screen = <Home onNav={setRoute} />; break;
    case 'menu':        screen = <Menu onNav={setRoute} />; break;
    case 'apropos':     screen = <Apropos />; break;
    case 'salon':       screen = <Salon onNav={setRoute} />; break;
    case 'carte-cadeau': screen = <CarteCadeau />; break;
    case 'reservation': screen = <Reservation />; break;
    case 'blogue':      screen = <Stub name="Blogue" subtitle="Les chroniques de la maison — rencontres, vignerons, recettes." />; break;
    case 'contact':     screen = <Stub name="Contact" subtitle="514 271-3095 · info@lachronique.qc.ca · 104 av. Laurier Ouest, Montréal." />; break;
    default:            screen = <Home onNav={setRoute} />;
  }

  return (
    <>
      <SmoothScroll />
      <Cursor />
      <div className="app">
        <Nav route={route} onNav={setRoute} dark={navDark} fade={navFade} />
        <main data-screen-label={route}>{screen}</main>
        <Footer />
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
