import React from 'react';
import {
  Intro,
  InfoSlider,
  Video,
  Tabs,
  ImageSlider,
  Satellites,
  Landing,
} from '../../components';
import {
  parallaxslide,
  slides,
  tabsslide,
  satellites,
  imageslider,
  tabsection,
} from '../../store/starship';
import background from '../../assets/starship/background.webp';

const jpgSrc = 'https://img.youtube.com/vi/sOpMrVnjYeY/maxresdefault.jpg';
const webpSrc =
  'https://img.youtube.com/vi_webp/sOpMrVnjYeY/maxresdefault.webp';
const videoSrc = 'https://www.youtube.com/embed/sOpMrVnjYeY';

const Starship = () => {
  return (
    <div className="Starship Page">
      <Intro
        background={background}
        title={'starship'}
        subtitle={'fly to the future'}
      />
      <InfoSlider
        parallaxslide={parallaxslide}
        tabsslide={tabsslide}
        slides={slides}
        title={'payload'}
        subtitle={''}
      />
      <Video
        imgSrc={jpgSrc}
        webpSrc={webpSrc}
        videoSrc={videoSrc}
        title={'starship update'}
      />
      <Satellites satellites={satellites} />
      <Landing />
      <Tabs data={tabsection} title={'raptor'} subtitle={'engines'} />
      <ImageSlider imageslider={imageslider} />
    </div>
  );
};

export default Starship;
