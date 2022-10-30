import React from 'react';
import Button from '../Button/Button';
import './Inspace.scss';
import human from '../../assets/dragon/human.png';

const Inspace = () => {
  return (
    <section className="Inspace">
      <div className="Inspace__image">
        <img src={human} alt="" />
      </div>
      <article className="Inspace__article">
        <h1 data-aos="fade-up" data-aos-once="true">
          taking humans to space
        </h1>
        <p data-aos="fade-up" data-aos-once="true">
          In 2020, SpaceX returned America’s ability to fly NASA astronauts to
          and from the International Space Station on American vehicles for the
          first time since 2011. In addition to flying astronauts to space for
          NASA, SpaceX’s Dragon spacecraft can also carry commercial astronauts
          to Earth orbit, the ISS or beyond.
        </p>
        <Button
          title={'learn more'}
          style={{ paddingLeft: '2rem', paddingRight: '2rem' }}
        />
      </article>
    </section>
  );
};

export default Inspace;
