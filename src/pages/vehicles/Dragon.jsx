import React from 'react';
import {
  Intro,
  Counter,
  InfoSlider,
  Video,
  Tabs,
  Inspace,
  ImageSlider
} from '../../components';
import {
  tabsection,
  parallaxslide,
  slides,
  tabsslide,
  counter,
  imageslider,
} from '../../store/dragon';
import background from '../../assets/dragon/background.webp';

const jpgSrc = 'https://img.youtube.com/vi/78ATfCaBn6E/maxresdefault.jpg';
const webpSrc =
  'https://img.youtube.com/vi_webp/78ATfCaBn6E/maxresdefault.webp';
const videoSrc = 'https://www.youtube.com/embed/78ATfCaBn6E';

const Dragon = () => {
  return (
    <div className="Dragon Page">
      <Intro
        background={background}
        title={'dragon'}
        subtitle={'   Sending humans and cargo into space'}
      />
      <Counter data={counter} />
      <InfoSlider
        parallaxslide={parallaxslide}
        tabsslide={tabsslide}
        slides={slides}
        title={'first stage'}
        subtitle={'dragon'}
      />
      <Video
        imgSrc={jpgSrc}
        webpSrc={webpSrc}
        videoSrc={videoSrc}
        title={'crew dragon interior'}
      />
      <Inspace />
      <Tabs data={tabsection} title={'draco'} subtitle={'engines'} />
      <ImageSlider imageslider={imageslider} />
    </div>
  );
};

export default Dragon;
