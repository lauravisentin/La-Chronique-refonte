/* global React, ReactDOM */
/* global Nav, Footer, SmoothScroll, CinemaIntro */
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

  const vh = typeof window !== 'undefined' ? window.innerHeight : 1;
  const logoGoneY = vh * 2.6 * 0.80;
  const navDark = route === 'home' && scrollY < logoGoneY;
  const navLogoFade = route === 'home'
    ? Math.max(0, Math.min(1, (scrollY - vh * 0.10) / (vh * 0.60)))
    : 1;
  const screen = route === 'home'
    ? <CinemaIntro onEnter={() => setRoute('reservation')} />
    : <div className="empty-page" aria-label={`Page ${route}`} />;

  return (
    <>
      <SmoothScroll />
      <div className="app">
        <Nav route={route} onNav={setRoute} dark={navDark} logoFade={navLogoFade} />
        <main data-screen-label={route}>{screen}</main>
        <Footer />
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
