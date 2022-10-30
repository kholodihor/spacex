import React from 'react';
import { Intro, Explore, Outro } from '../components';
import background from '../assets/human-spaceflight/background.webp';
import earth from '../assets/explore/earth.png';
import iss from '../assets/explore/iss.png';
import moon from '../assets/explore/moon.png';
import mars from '../assets/explore/mars.png';

const HumanSpaceflight = () => {
  return (
    <div className="HumanSpaceflight page">
      <Intro
        background={background}
        title={'human spaceflight'}
        subtitle={'Making life multiplanetary'}
      />
      <Explore
        planet={earth}
        title={'earth orbit'}
        text={'EXPERIENCE THE BLUE PLANET FROM OVER 300KM UP'}
      />
      <Explore
        planet={iss}
        title={'space station'}
        text={'TRANSPORTING HUMANS TO THE ORBITING LABORATORY IN THE SKY'}
      />
      <Explore
        planet={moon}
        title={'moon'}
        text={'RETURNING HUMANS TO OUR LUNAR NEIGHBOR'}
      />
      <Explore
        planet={mars}
        title={'mars & beyond'}
        text={'THE ROAD TO MAKING HUMANITY MULTIPLANETARY'}
      />
      <Outro />
    </div>
  );
};

export default HumanSpaceflight;
