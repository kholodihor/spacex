import React from 'react';
import PropTypes from 'prop-types';
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
            data-testid="tabs-div"
          
          >
            <p data-aos="fade-up" data-aos-once="true">
              {item.text}
            </p>
            <ul className="ul" data-aos="fade-up" data-aos-once="true">
              {item.info?.map((item, index) => {
                return (
                  <li className="li" key={`${index} + ${item.value}`} data-testid="tabs-li">
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
  toggleState: PropTypes.number,
  index: PropTypes.number,
};

TabContent.defaultProps = {
  data: [],
  toggleState: 0,
  index: 0,
};

export default TabContent;
