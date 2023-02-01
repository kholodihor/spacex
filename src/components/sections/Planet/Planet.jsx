import React from 'react';
import Button from '../../elements/Button/Button';
import Title from '../../elements/Title/Title';
import './Planet.scss';

const Planet = (props) => {
  return (
    <section className="Explore Page" data-testid="planet">
      <div className="Explore__image">
        <img src={props.planet} alt={props.title} />
      </div>
      <article
        className="Explore__article"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <Title title={props.title} subtitle={'mission'} />
        <p data-testid="planet-text">{props.text}</p>
        <Button
          title={'explore'}
          style={{ paddingLeft: '4rem', paddingRight: '4rem' }}
        />
      </article>
    </section>
  );
};

export default Planet;
