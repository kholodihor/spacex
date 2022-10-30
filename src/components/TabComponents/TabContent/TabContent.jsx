import React from 'react';
import PropTypes, { number } from 'prop-types';
import './TabContent.scss';

const TabContent = ({ data, toggleState }) => {
  return (
    <div className="TabContent">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={
              toggleState === index ? 'content active-content' : 'content'
            }
          
          >
            <p data-aos="fade-up" data-aos-once="true">
              {item.text}
            </p>
            <ul className="ul" data-aos="fade-up" data-aos-once="true">
              {item.info?.map((item, index) => {
                return (
                  <li className="li" key={`${index} + ${item.value}`}>
                    <span>{item.characteristic}</span>
                    <span>{item.value}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

TabContent.propTypes = {
  data: PropTypes.array,
  toggleState: number,
  index: number,
};

TabContent.defaultProps = {
  data: [],
  toggleState: 0,
  index: 0,
};

export default TabContent;
