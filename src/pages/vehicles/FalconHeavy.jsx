import React from 'react';
import Intro from '../../components/sections/Intro/Intro';
import InfoSlider from '../../components/sections/InfoSlider/InfoSlider';
import Video from '../../components/sections/Video/Video';
import Tabs from '../../components/sections/Tabs/Tabs';
import Performance from '../../components/sections/Performance/Performance';
import ImageSlider from '../../components/sections/ImageSlider/ImageSlider';
import Outro from '../../components/sections/Outro/Outro';
import Counter from '../../components/elements/Counter/Counter';
import background from '../../assets/falcon-heavy/background.webp';
import {
  parallaxslide,
  slides,
  tabsslide,
  counter,
  imageslider,
  tabsection,
  sources,
} from '../../store/falcon-heavy';

const FalconHeavy = () => {
  return (
    <div className="FalconHeavy Page">
      <Intro
        background={background}
        title={'falcon heavy'}
        subtitle={'The world`s most powerful rocket'}
      />
      <Counter data={counter} />
      <InfoSlider
        parallaxslide={parallaxslide}
        tabsslide={tabsslide}
        slides={slides}
        title={'first stage'}
        subtitle={'falcon heavy'}
      />
      <Video
        imgSrc={sources.jpgSrc}
        webpSrc={sources.webpSrc}
        videoSrc={sources.videoSrc}
        title={'Falcon Heavy First Flight'}
      />
      <Performance />
      <Tabs data={tabsection} title={'merlin'} subtitle={'engines'} />
      <ImageSlider imageslider={imageslider} />
      <Outro />
    </div>
  );
};

export default FalconHeavy;
