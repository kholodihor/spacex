import React from 'react';
import './Performance.scss';

const Performance = () => {
  return (
    <section className="Performance">
      <div className="Performance__left">
        <video
          src={"https://www.spacex.com/media/fh_performance.webm"}
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="Performance__right">
        <h1>Unmatched Performance</h1>
        <p>
          With more than 5 million pounds of thrust at liftoff, Falcon Heavy is
          the most capable rocket flying. By comparison, the liftoff thrust of
          the Falcon Heavy equals approximately eighteen 747 aircraft at full
          power. Falcon Heavy can lift the equivalent of a fully loaded 737
          jetliner—complete with passengers, luggage and fuel—to orbit.
        </p>
      </div>
    </section>
  );
};

export default Performance;
