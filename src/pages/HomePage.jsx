import React from 'react';
import HomeSection from '../components/HomeSection/HomeSection';
import sections from '../store/homepage.js';

const Home = () => {
  return (
    <div>
      <HomeSection sections={sections} />
    </div>
  );
};

export { Home };
