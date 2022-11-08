import './App.css';
import Navigation from './components/Navigation';
import Masthead from './components/Masthead';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import PortfolioModals from './components/PortfolioModals';
function App() {
  return (
    <>
      <Navigation />
      <Masthead />
      <Portfolio />
      <AboutMe />
      <Contact />
      <Resume />
      <Footer />
      <PortfolioModals />
    </>
  );
}

export default App;
