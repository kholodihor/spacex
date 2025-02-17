import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import PropTypes from 'prop-types';
import './ParallaxSlide.scss';

const ParallaxSlide = ({ data }) => {
  return (
    <div className="Parallax__slide" data-testid="parallax-slide">
      <Parallax
        pages={1.6}
        style={{ top: '0', left: '0', scrollbarWidth: 'none' }}
        data-testid="parallax-container"
      >
        <ParallaxLayer offset={50} speed={2.5} sticky={{ start: 0, end: 0.3 }}>
          {data.map((slide, index) => {
            return (
              <div
                className="Parallax__slide-inner"
                key={`slide-${index}`}
                style={{
                  background: `url(${slide.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                data-testid={`slide-${index}`}
                role="region"
                aria-label={`Slide ${index + 1}: ${slide.title}`}
              >
                <div className="Parallax__slide-info">
                  <p data-aos="fade-up">{slide.text}</p>
                  <h2>{slide.subtitle}</h2>
                  <h1>{slide.title}</h1>
                  <ul aria-label={`${slide.title} specifications`}>
                    {slide.info.map((item, index) => {
                      return (
                        <li
                          key={`spec-${index}`}
                          data-testid="slide-specification"
                        >
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

ParallaxSlide.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      info: PropTypes.arrayOf(
        PropTypes.shape({
          characteristic: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired
        })
      ).isRequired
    })
  ).isRequired
};

export default ParallaxSlide;
