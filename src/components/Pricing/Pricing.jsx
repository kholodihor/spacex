import React from 'react';
import './Pricing.scss';
import Button from '../Button/Button';
import pricing from '../../assets/rideshare/pricing.webp';

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
        <div className="step">
          <span>place order online</span>
          <div className="circle"></div>
        </div>
        <div className="step">
          <span>welcome package</span>
          <div className="circle"></div>
        </div>
        <div className="step">
          <span>spacecraft data package</span>
          <div className="circle"></div>
        </div>
        <div className="step">
          <span>launch processing</span>
          <div className="circle"></div>
        </div>
        <div className="step">
          <span>launch!</span>
          <div className="circle"></div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
