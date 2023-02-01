import React from 'react';
import './Landing.scss';
import Button from '../../elements/Button/Button';
import background from '../../../assets/starship/mars_landing.webp';

const Landing = () => {
  return (
    <section className="Landing">
      <div className="Landing__image">
        <img src={background} alt="" />
      </div>
      <div className="Landing__info">
        <h1>Landing on Mars</h1>
        <p>
          Starship will enter Mars’ atmosphere at 7.5 kilometers per second and
          decelerate aerodynamically. The vehicle’s heat shield is designed to
          withstand multiple entries, but given that the vehicle is coming into
          Mars' atmosphere so hot, we still expect to see some ablation of the
          heat shield (similar to wear and tear on a brake pad). The engineering
          video below simulates the physics of Mars entry for Starship.
        </p>
        <a href="https://www.youtube.com/watch?v=5seefpjMQJI" target="_blank" rel="noreferrer">
          <Button
            title={'watch simulation'}
            style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
          />
        </a>
      </div>
    </section>
  );
};

export default Landing;
