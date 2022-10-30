import React from 'react';
import {
  Intro,
  Counter,
  InfoSlider,
  Video,
  Tabs,
  Performance,
  ImageSlider,
  Outro
} from '../../components';
import {
  parallaxslide,
  slides,
  tabsslide,
  counter,
  imageslider,
  tabsection
} from '../../store/falcon-heavy';
import background from '../../assets/falcon-heavy/background.webp';


const jpgSrc = 'https://img.youtube.com/vi/A0FZIwabctw/maxresdefault.jpg';
const webpSrc =
  'https://img.youtube.com/vi_webp/A0FZIwabctw/maxresdefault.webp';
const videoSrc = 'https://www.youtube.com/embed/A0FZIwabctw';

const FalconHeavy = () => {
  return (
    <div className="FalconHeavy Page">
      <Intro
        background={background}
        title={'falcon heavy'}
        subtitle={'The world’s most powerful rocket'}
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
        imgSrc={jpgSrc}
        webpSrc={webpSrc}
        videoSrc={videoSrc}
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
