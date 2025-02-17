import Intro from '../components/sections/Intro/Intro';
import Planet from '../components/sections/Planet/Planet';
import Outro from '../components/sections/Outro/Outro';
import background from '../assets/human-spaceflight/background.webp';
import planets from '../data/planets';

const HumanSpaceflight = () => {
  return (
    <div className="HumanSpaceflight page">
      <Intro
        background={background}
        title={'human spaceflight'}
        subtitle={'Making life multiplanetary'}
      />
      {planets.map((planet, index) => (
        <Planet
          key={index}
          planet={planet.planet}
          title={planet.title}
          text={planet.text}
        />
      ))}
      <Outro />
    </div>
  );
};

export default HumanSpaceflight;
