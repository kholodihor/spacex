import Intro from '../../components/sections/Intro/Intro';
import Video from '../../components/sections/Video/Video';
import Tabs from '../../components/sections/Tabs/Tabs';
import Inspace from '../../components/sections/Inspace/Inspace';
import Counter from '../../components/elements/Counter/Counter';
import InfoSlider from '../../components/sections/InfoSlider/InfoSlider';
import ImageSlider from '../../components/sections/ImageSlider/ImageSlider';
import background from '../../assets/dragon/background.webp';
import {
  tabsection,
  parallaxslide,
  slides,
  tabsslide,
  counter,
  imageslider,
  sources,
} from '../../store/dragon';

const Dragon = () => {
  return (
    <div className="Dragon Page">
      <Intro
        background={background}
        title={'dragon'}
        subtitle={'Sending humans and cargo into space'}
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
        imgSrc={sources.jpgSrc}
        webpSrc={sources.webpSrc}
        videoSrc={sources.videoSrc}
        title={'crew dragon interior'}
      />
      <Inspace />
      <Tabs data={tabsection} title={'draco'} subtitle={'engines'} />
      <ImageSlider imageslider={imageslider} />
    </div>
  );
};

export default Dragon;
