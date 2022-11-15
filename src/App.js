import './App.css';
import Navigation from './components/Navigation';
import Masthead from './components/Masthead';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import PortfolioModals from './components/PortfolioModals';
import { Link, useParams, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Navigation />
      <Routes>
        <Route 
          path="/" 
          element={<Masthead />} 
        />
        <Route 
          path="/portfolio" 
          element={<Portfolio />} 
        />
        <Route 
          path="/aboutme" 
          element={<AboutMe />} 
        />
        <Route 
          path="/contact" 
          element={<Contact />} 
        />
         <Route 
          path="/resume" 
          element={<Resume />} 
        />
        
      </Routes>
      <Footer />
      <PortfolioModals />
    </Router>
    </>
  );
}

export default App;
