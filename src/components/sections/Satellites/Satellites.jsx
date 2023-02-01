import React from 'react';
import './Satellites.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Navigation } from 'swiper';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Satellites = (props) => {
  return (
    <Swiper
      className="Satellites"
      modules={[Pagination, Scrollbar, A11y, Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={{
        prevEl: '.prev',
        nextEl: '.next',
      }}
    >
      {React.Children.toArray(
        props.satellites.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="Satellites__slide">
                <div className="Satellites__slide-info">
                  <h2>{slide.subtitle}</h2>
                  <h1>{slide.title}</h1>
                  <p>{slide.text}</p>
                </div>
                <div className="Satellites__slide-image">
                  <img src={slide.img} alt={slide.subtitle} />
                </div>
              </div>
            </SwiperSlide>
          );
        })
      )}

      <div className="prev">
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div className="next">
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </Swiper>
  );
};

Satellites.propTypes = {
  satellites: PropTypes.array,
};

Satellites.defaultProps = {
  satellites: [],
};

export default Satellites;
