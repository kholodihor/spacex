import React from 'react';
import Button from '../../elements/Button/Button';
import pricing from '../../../assets/rideshare/pricing.webp';
import { steps } from '../../../store/steps';
import './Pricing.scss';

const Pricing = () => {
  return (
    <section className="Pricing Page">
      <div className="Pricing__image">
        <img src={pricing} alt="" />
      </div>
      <div className="Pricing__info">
        <h1>RESERVE YOUR RIDE ONLINE</h1>
        <p>
          Find all the information you need to make a reservation online,
          everything from port size to technical specifications to licensing
          information. Once your reservation request is approved, SpaceX will
          provide you with a welcome package outlining next steps for launch.
          <br />
          <br />
          Payloads are received at the launch site around L-30 and processed in
          a SpaceX facility. More details can be found in the Rideshare User’s
          Guide.
        </p>
        <Button
          title={'view user`s guide'}
          style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
        />
      </div>
      <div className="Pricing__progressbar">
        {steps.map((step, index) => (
          <div key={index} className="step" data-testid="step">
            <span>{step}</span>
            <div className="circle"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
