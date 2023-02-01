import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Header from './components/sections/Header/Header';
import Footer from './components/sections/Footer/Footer';
import Falcon9 from './pages/vehicles/Falcon9';
import FalconHeavy from './pages/vehicles/FalconHeavy';
import Dragon from './pages/vehicles/Dragon';
import Starship from './pages/vehicles/Starship';
import HumanSpaceflight from './pages/HumanSpaceflight';
import Rideshare from './pages/Rideshare';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.scss';

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles/falcon-9" element={<Falcon9 />} />
          <Route path="/vehicles/falcon-heavy" element={<FalconHeavy />} />
          <Route path="/vehicles/dragon" element={<Dragon />} />
          <Route path="/human-spaceflight" element={<HumanSpaceflight />} />
          <Route path="/vehicles/starship" element={<Starship />} />
          <Route path="/rideshare" element={<Rideshare />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
