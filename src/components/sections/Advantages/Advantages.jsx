import React from 'react';
import cards from '../../../data/rideshare/cards';
import { steps } from '../../../data/steps';
import Timeline from '../../elements/Timeline/Timeline';
import './Advantages.scss';

const Advantages = () => {
  return (
    <section className="Advantages">
      <div className="Advantages__cards">
        {cards.map((card, index) => (
          <div className="Advantages__card" key={index} data-testid="card">
            <div className="Advantages__card-header">
              <i className={card.icon} data-testid="icon"></i>
              <span data-testid="span">{card.title}</span>
            </div>
            <div className="Advantages__card-main">
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="Advantages__timeline">
        <Timeline steps={steps} />
      </div>
    </section>
  );
};

export default Advantages;
