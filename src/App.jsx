import React, { useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.scss';
import Header from './components/sections/Header/Header';
import Footer from './components/sections/Footer/Footer';
import Loading from './components/elements/Loading/Loading';

// Lazy load route components
const Home = React.lazy(() => import('./pages/HomePage'));
const Falcon9 = React.lazy(() => import('./pages/vehicles/Falcon9'));
const FalconHeavy = React.lazy(() => import('./pages/vehicles/FalconHeavy'));
const Dragon = React.lazy(() => import('./pages/vehicles/Dragon'));
const HumanSpaceflight = React.lazy(() => import('./pages/HumanSpaceflight'));
const Starship = React.lazy(() => import('./pages/vehicles/Starship'));
const Rideshare = React.lazy(() => import('./pages/Rideshare'));

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
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehicles/falcon-9" element={<Falcon9 />} />
            <Route path="/vehicles/falcon-heavy" element={<FalconHeavy />} />
            <Route path="/vehicles/dragon" element={<Dragon />} />
            <Route path="/human-spaceflight" element={<HumanSpaceflight />} />
            <Route path="/vehicles/starship" element={<Starship />} />
            <Route path="/rideshare" element={<Rideshare />} />
          </Routes>
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
