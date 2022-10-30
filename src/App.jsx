import './App.scss';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/HomePage';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Falcon9 from './pages/vehicles/Falcon9';
import FalconHeavy from './pages/vehicles/FalconHeavy';
import Dragon from './pages/vehicles/Dragon';
import Starship from './pages/vehicles/Starship';
import HumanSpaceflight from './pages/HumanSpaceflight';
import Rideshare from './pages/Rideshare';
import SignUp from './pages/auth/SignUp';
import LogIn from './pages/auth/LogIn';
import ProtectedRoute from './containers/ProtectedRoute/ProtectedRoute';
import { UserAuthContextProvider } from './context/userAuthContext';

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
        <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehicles/falcon-9" element={<Falcon9 />} />
            <Route path="/vehicles/falcon-heavy" element={<FalconHeavy />} />
            <Route path="/vehicles/dragon" element={<Dragon />} />
            <Route path="/human-spaceflight" element={<HumanSpaceflight />} />
            <Route path="/vehicles/starship" element={<Starship />} />
            <Route
              path="/rideshare"
              element={
                <ProtectedRoute>
                  <Rideshare />
                </ProtectedRoute>
              }
            />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/auth/login" element={<LogIn />} />
          </Routes>
        </UserAuthContextProvider>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
