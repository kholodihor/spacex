import React from 'react';
import PropTypes from 'prop-types';
import './Timeline.scss';

const Timeline = ({ steps }) => {
  return (
    <div className="Timeline">
      <div className="Timeline__line" />
      <div className="Timeline__steps">
        {steps.map((step, index) => (
          <div key={index} className="Timeline__step">
            <div className="Timeline__step-content">
              <div className="Timeline__step-text">{step}</div>
              <div className="Timeline__step-circle" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Timeline.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Timeline;
