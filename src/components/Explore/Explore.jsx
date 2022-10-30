import React from 'react';
import './Explore.scss';
import Button from '../Button/Button';
import Title from '../Title/Title';

const Planet = (props) => {
  return (
    <section className="Explore Page">
      <div className="Explore__image">
        <img src={props.planet} alt={props.title} />
      </div>
      <article
        className="Explore__article"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <Title title={props.title} subtitle={'mission'} />
        <p>{props.text}</p>
        <Button
          title={'explore'}
          style={{ paddingLeft: '4rem', paddingRight: '4rem' }}
        />
      </article>
    </section>
  );
};

export default Planet;
