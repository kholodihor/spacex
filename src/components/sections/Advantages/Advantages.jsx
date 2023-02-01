import React from 'react';
import cards from '../../../store/rideshare/cards';
import './Advantages.scss';

const Advantages = () => {
  return (
    <section className="Advantages">
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
    </section>
  );
};

export default Advantages;
