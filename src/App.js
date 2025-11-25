import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RouteDebugger from './components/RouteDebugger';
import Home from './pages/Home';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import BusSense from './pages/BusSense';
import PlantDisease from './pages/PlantDisease';
import SoilPrediction from './pages/SoilPrediction';
import Uzhavan from './pages/Uzhavan';
import Contact from './pages/Contact';

function AppContent() {
  const location = useLocation();
  
  return (
    <div className="App">
      <RouteDebugger />
      <Header />
      <main key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/bus-sense" element={<BusSense />} />
          <Route path="/projects/plant-disease" element={<PlantDisease />} />
          <Route path="/projects/soil-prediction" element={<SoilPrediction />} />
          <Route path="/projects/uzhavan" element={<Uzhavan />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
