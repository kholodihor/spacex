import React from 'react';
import Button from '../Button/Button';
import './Outro.scss';

const Outro = () => {
  return (
    <section className="Outro">
      <div className="Outro__line"></div>
      <p>
        For information about our launch services, contact{' '}
        <a href="sales@spacex.com">sales@spacex.com</a>
      </p>
      <div className="Outro__buttons">
        <Button
          title={'download users guide'}
          style={{ paddingLeft: '0.8rem', paddingRight: '0.8rem' }}
        />
        <Button title={'capabilities and services'} style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }} />
      </div>
    </section>
  );
};

export default Outro;
