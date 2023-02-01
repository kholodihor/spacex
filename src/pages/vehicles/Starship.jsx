import Intro from '../../components/sections/Intro/Intro';
import Video from '../../components/sections/Video/Video';
import Tabs from '../../components/sections/Tabs/Tabs';
import Landing from '../../components/sections/Landing/Landing';
import ImageSlider from '../../components/sections/ImageSlider/ImageSlider.jsx';
import InfoSlider from '../../components/sections/InfoSlider/InfoSlider';
import Satellites from '../../components/sections/Satellites/Satellites';
import background from '../../assets/starship/background.webp';
import {
  parallaxslide,
  slides,
  tabsslide,
  satellites,
  imageslider,
  tabsection,
  sources,
} from '../../store/starship';

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
        imgSrc={sources.jpgSrc}
        webpSrc={sources.webpSrc}
        videoSrc={sources.videoSrc}
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
