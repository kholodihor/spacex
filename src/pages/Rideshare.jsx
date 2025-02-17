import Intro from '../components/sections/Intro/Intro';
import Tabs from '../components/sections/Tabs/Tabs';
import Advantages from '../components/sections/Advantages/Advantages';
import Pricing from '../components/sections/Pricing/Pricing';
import background from '../assets/rideshare/background.webp';
import tabsection from '../data/rideshare/tabsection';

const Rideshare = () => {
  return (
    <div className="Rideshare Page" data-testid="rdeshare">
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
