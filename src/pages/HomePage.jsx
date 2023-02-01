import React from 'react';
import HomeSection from '../components/sections/HomeSection/HomeSection';
import sections from '../store/homepage.js';

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
