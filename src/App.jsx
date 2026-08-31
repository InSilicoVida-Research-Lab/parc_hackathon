import { useState } from 'react';
import Home from './pages/Home';
import Agenda from './pages/Agenda';
import Hackathon from './pages/Hackathon';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'agenda': return <Agenda />;
      case 'hackathon': return <Hackathon />;
      default: return <Home />;
    }
  };

  return (
    <div className="app-wrapper">
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

        <nav className="navbar">
          <div className="nav-links">
            <span 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => setCurrentPage('home')}
            >
              Home
            </span>
            <span 
              className={`nav-link ${currentPage === 'agenda' ? 'active' : ''}`}
              onClick={() => setCurrentPage('agenda')}
            >
              Agenda
            </span>
            <span 
              className={`nav-link ${currentPage === 'hackathon' ? 'active' : ''}`}
              onClick={() => setCurrentPage('hackathon')}
            >
              Hackathon
            </span>
          </div>
        </nav>

        <main className="content">
          {renderPage()}
        </main>

        <footer className="footer">
          <p>© 2026 Partnership for the Assessment of Risks from Chemicals (PARC) & IRBCatSud.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
