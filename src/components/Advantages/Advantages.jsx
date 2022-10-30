import React from 'react';
import './Advantages.scss';
import cards from '../../store/rideshare/cards';

const Advantages = () => {
  return (
    <section className="Advantages">
      {React.Children.toArray(
        cards.map((card, index) => {
          return (
            <div className="Advantages__card" key={index}>
              <div className="Advantages__card-header">
                <i className={card.icon}></i>
                <span>{card.title}</span>
              </div>
              <div className="Advantages__card-main">
                <p>{card.text}</p>
              </div>
            </div>
          );
        })
      )}
    </section>
  );
};

export default Advantages;
