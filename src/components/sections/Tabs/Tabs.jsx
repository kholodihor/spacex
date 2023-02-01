import React, { useState } from 'react';
import TabContent from '../../elements/TabComponents/TabContent/TabContent';
import TabNav from '../../elements/TabComponents/TabNav/TabNav';
import Title from '../../elements/Title/Title';
import './Tabs.scss';

const Tabs = ({ data, title, subtitle, style }) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  
  return (
    <div className="Tabs__container" data-testid="tabs">
      <div className="Tabs__container-bg">
        {data.map((item, index) => {
          return (
            <img
              key={`${index} + ${item.image}`}
              src={item.image}
              alt="falcon"
              className={toggleState === index ? 'image active-image' : 'image'}
            />
          );
        })}
      </div>

      <div className="Tabs__container-info" style={style}>
        <Title title={title} subtitle={subtitle}  />
        <TabNav
          data={data}
          toggleTab={toggleTab}
          toggleState={toggleState}
          className="Tabs__container-info--buttons"
        />
        <TabContent data={data} toggleState={toggleState} />
      </div>
    </div>
  );
};

export default Tabs;
