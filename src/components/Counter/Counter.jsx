import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './Counter.scss';

const Counter = ({data}) => {

  return (
    <section className="Counter">
      <VisibilitySensor  partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <ul>
            {data.map((item, index) => {
              return (
                <li key={index}>
                  <h1>
                    {isVisible ? (
                      <CountUp end={item.end} duration={2} redraw={true} />
                    ) : null}
                  </h1>
                  <p>{item.title}</p>
                </li>
              );
            })}
          </ul>
        )}
      </VisibilitySensor>
    </section>
  );
};

export default Counter;
