import React from 'react';
import HomeSection from '../components/sections/HomeSection/HomeSection';
import sections from '../data/homepage.js';

const Home = () => {
  return (
    <div>
      {sections.map((section, index) => (
        <HomeSection key={index} section={section} />
      ))}
    </div>
  );
};

export default Home;
