import Intro from '../../components/sections/Intro/Intro';
import Video from '../../components/sections/Video/Video';
import Tabs from '../../components/sections/Tabs/Tabs';
import Outro from '../../components/sections/Outro/Outro';
import InfoSlider from '../../components/sections/InfoSlider/InfoSlider';
import ImageSlider from '../../components/sections/ImageSlider/ImageSlider';
import Counter from '../../components/elements/Counter/Counter';
import background from '../../assets/falcon9/background.webp';
import {
  tabsection,
  parallaxslide,
  slides,
  tabsslide,
  counter,
  imageslider,
  sources,
} from '../../store/falcon9';

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
        imgSrc={sources.jpgSrc}
        webpSrc={sources.webpSrc}
        videoSrc={sources.videoSrc}
        title={'Falcon 9 In Flight'}
      />
      <Tabs data={tabsection} title={'merlin'} subtitle={'engines'} />
      <ImageSlider imageslider={imageslider} />
      <Outro />
    </section>
  );
}

export default Falcon9;
