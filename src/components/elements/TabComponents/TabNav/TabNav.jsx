import React from 'react';
import PropTypes from 'prop-types';
import './TabNav.scss';

const TabNav = ({ data, toggleTab, toggleState }) => {
  return (
    <div
      className="TabNav"
      data-aos="fade-up"
      data-aos-offset="0"
      data-aos-once="true"
    >
      {data.map((item, index) => (
        <button
          key={index}
          className={toggleState === index ? 'tab active' : 'tab'}
          onClick={() => toggleTab(index)}
        >
          {item.tab}
        </button>
      ))}
    </div>
  );
};

TabNav.propTypes = {
  data: PropTypes.array,
  toggleTab: PropTypes.func,
  toggleState: PropTypes.number,
  index: PropTypes.number,
};

TabNav.defaultProps = {
  data: [],
  toggleTab: () => {},
  toggleState: 0,
  index: 0,
};

export default TabNav;
