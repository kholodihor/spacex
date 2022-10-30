import React from 'react';
import {
  Intro,
  Counter,
  InfoSlider,
  Video,
  Tabs,
  ImageSlider,
  Outro
} from '../../components';
import {
  tabsection,
  parallaxslide,
  slides,
  tabsslide,
  counter,
  imageslider,
} from '../../store/falcon9';
import background from '../../assets/falcon9/background.webp';

const jpgSrc = 'https://img.youtube.com/vi/Z4TXCZG_NEY/maxresdefault.jpg';
const webpSrc =
  'https://img.youtube.com/vi_webp/Z4TXCZG_NEY/maxresdefault.webp';
const videoSrc = 'https://www.youtube.com/embed/Z4TXCZG_NEY';

function Falcon9() {
  return (
    <section className="Falcon9 Page">
      <Intro
        background={background}
        title={'falcon 9'}
        subtitle={'First Orbital Class Rocket capable of reflight'}
      />
      <Counter data={counter} />
      <InfoSlider
        parallaxslide={parallaxslide}
        tabsslide={tabsslide}
        slides={slides}
        title={'first stage'}
        subtitle={'falcon 9'}
      />
      <Video
        imgSrc={jpgSrc}
        webpSrc={webpSrc}
        videoSrc={videoSrc}
        title={'Falcon 9 In Flight'}
      />
      <Tabs data={tabsection} title={'merlin'} subtitle={'engines'} />
      <ImageSlider imageslider={imageslider} />
      <Outro />
    </section>
  );
}

export default Falcon9;
