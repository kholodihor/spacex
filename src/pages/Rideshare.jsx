import React from 'react';
import { Intro, Tabs, Advantages, Pricing } from '../components';
import background from '../assets/rideshare/background.webp';
import tabsection from '../store/rideshare/tabsection';

const Rideshare = () => {
  return (
    <div className="Rideshare Page">
      <Intro
        background={background}
        title={'Smallsat Rideshare Program'}
        subtitle={
          'Dedicated rideshare missions as low as $1.1M*. Search flights below.'
        }
        style={{ whiteSpace: 'nowrap' }}
      />
      <Advantages />
      <Pricing />
      <Tabs
        data={tabsection}
        title={'payload configurations'}
        style={{ right: '0' }}
      />
    </div>
  );
};

export default Rideshare;
