import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Navigation } from 'swiper';
import './ImageSlider.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = (props) => {
  return (
    <Swiper
      className="ImageSlider"
      modules={[Pagination, Scrollbar, A11y, Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      navigation={{
        prevEl: '.prev',
        nextEl: '.next',
      }}
    >
      {props.imageslider.map((item, index) => {
        return (
          <SwiperSlide className="ImageSlider__slide" key={index}>
            <div className="image">
              <img src={item.image} alt="spacex" style={{ height: '100%' }} />
            </div>
            <p>{item.text}</p>
          </SwiperSlide>
        );
      })}
      <div className="prev">
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div className="next">
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </Swiper>
  );
};

export default Slider;
