import { useState, useEffect, useRef } from 'react';
import Home from './pages/Home';
import Agenda from './pages/Agenda';
import Hackathon from './pages/Hackathon';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (announcementDismissed || !heroRef.current) return;
      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      setAnnouncementVisible(heroBottom > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [announcementDismissed]);

  const navigate = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home heroRef={heroRef} />;
      case 'agenda': return <Agenda heroRef={heroRef} />;
      case 'hackathon': return <Hackathon heroRef={heroRef} />;
      default: return <Home heroRef={heroRef} />;
    }
  };

  const showAnnouncement = announcementVisible && !announcementDismissed;

  return (
    <div className={`app-wrapper${!announcementDismissed ? ' app-wrapper--announcement' : ''}`}>
      {!announcementDismissed && (
        <div
          className={`announcement-bar${showAnnouncement ? '' : ' is-hidden'}`}
          role="region"
          aria-label="Announcement"
        >
          <p className="announcement-bar__text">
            Registration is open for the PARC Modellers Meeting &amp; Hackathon —{' '}
            <a
              href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=aykR84I-TkyCqajkA6QrEQ6MmegPrIxBkOD8naVZMtxUM0U2NUU1WVpOODdVRk1CMVhIOE5XRUFBRy4u&origin=lprLink&route=shorturl"
              target="_blank"
              rel="noreferrer"
            >
              complete the registration form
            </a>
          </p>
          <button
            type="button"
            className="announcement-close"
            aria-label="Dismiss announcement"
            onClick={() => setAnnouncementDismissed(true)}
          >
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>
        </div>
      )}

      <div className="container">
        <header className="header-top">
          <div className="logos">
            <a href="https://www.eu-parc.eu/" target="_blank" rel="noreferrer">
              <img
                src="https://www.eu-parc.eu/themes/custom/parc/img/parc.png"
                alt="PARC Logo"
                className="logo-img"
              />
            </a>
            <a href="https://www.irbcatsud.cat/" target="_blank" rel="noreferrer">
              <img
                src="https://cerca.cat/wp-content/uploads/2022/08/IRBCATSUD_1_principal_descriptiu_color_RGB.png"
                alt="IRBCatSud Logo"
                className="logo-img"
              />
            </a>
            <img
              src="https://www.eacea.ec.europa.eu/sites/default/files/styles/embed_large/public/2022-11/EN%20Co-Funded%20by%20the%20EU_POS.png"
              alt="Co-funded by the European Union"
              className="logo-img"
              style={{ height: '50px' }}
            />
          </div>
        </header>

        <nav className="navbar" aria-label="Main navigation">
          <div className="nav-links">
            <button
              type="button"
              className={`nav-link${currentPage === 'home' ? ' active' : ''}`}
              onClick={() => navigate('home')}
            >
              Home
            </button>
            <button
              type="button"
              className={`nav-link${currentPage === 'agenda' ? ' active' : ''}`}
              onClick={() => navigate('agenda')}
            >
              Agenda
            </button>
            <button
              type="button"
              className={`nav-link${currentPage === 'hackathon' ? ' active' : ''}`}
              onClick={() => navigate('hackathon')}
            >
              Hackathon
            </button>
          </div>
          <button
            type="button"
            className="nav-toggle"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`} aria-hidden="true" />
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="nav-mobile-menu is-open">
            <button
              type="button"
              className={`nav-link${currentPage === 'home' ? ' active' : ''}`}
              onClick={() => navigate('home')}
            >
              Home
            </button>
            <button
              type="button"
              className={`nav-link${currentPage === 'agenda' ? ' active' : ''}`}
              onClick={() => navigate('agenda')}
            >
              Agenda
            </button>
            <button
              type="button"
              className={`nav-link${currentPage === 'hackathon' ? ' active' : ''}`}
              onClick={() => navigate('hackathon')}
            >
              Hackathon
            </button>
          </div>
        )}

        <main className="content">
          {renderPage()}
        </main>
      </div>

      <footer className="footer">
        <div className="container">
          <p className="footer__copyright">
            © 2026 Partnership for the Assessment of Risks from Chemicals (PARC) &amp; IRBCatSud.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
