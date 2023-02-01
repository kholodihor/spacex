import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './ParallaxSlide.scss';

const ParallaxSlide = ({ data }) => {
  return (
    <div className="Parallax__slide">
      <Parallax
        pages={1.6}
        style={{ top: '0', left: '0', scrollbarWidth: 'none' }}
      >
        <ParallaxLayer offset={0} speed={2.5} sticky={{ start: 0, end: 0.3 }}>
          {data.map((slide, index) => {
            return (
              <div
                className="Parallax__slide-inner"
                key={index}
                style={{
                  background: `url(${slide.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="Parallax__slide-info">
                  <p data-aos="fade-up">{slide.text}</p>
                  <h2>{slide.subtitle}</h2>
                  <h1>{slide.title}</h1>
                  <ul>
                    {slide.info.map((item, index) => {
                      return (
                        <li key={index} data-testid="li">
                          <span>{item.characteristic}</span>
                          <span>{item.value}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxSlide;
