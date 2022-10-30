import React from 'react';
import Title from '../Title/Title';
import Tabs from '../../containers/Tabs/Tabs';
import ParallaxSlide from '../ParallaxSlide/ParallaxSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Navigation } from 'swiper';
import './InfoSlider.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const InfoSlider = (props) => {
  return (
    <Swiper
      className="InfoSlider"
      modules={[Pagination, Scrollbar, A11y, Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={{
        prevEl: '.prev',
        nextEl: '.next',
      }}
    >
      <SwiperSlide>
        <ParallaxSlide data={props.parallaxslide} />
      </SwiperSlide>

      <SwiperSlide>
        <Tabs
          data={props.tabsslide}
          title={props.title}
          subtitle={props.subtitle}
        />
      </SwiperSlide>

      {props.slides.map((slide, index) => {
        return (
          <SwiperSlide
            key={index + slide.title}
            className="InfoSlider__slide"
            style={{
              background: `url(${slide.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="InfoSlider__slide-info">
              <Title title={slide.title} subtitle={slide.subtitle} />
              <p style={{ marginTop: '3rem' }}>{slide.text}</p>
              <ul className="ul">
                {slide.info?.map((item, index) => {
                  return (
                    <li className="li" key={index + item.value}>
                      <span>{item.characteristic}</span>
                      <span>{item.value}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
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

export default InfoSlider;
