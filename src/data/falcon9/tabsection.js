import merlin1 from '../../assets/merlin/merlin1.webp';
import merlin2 from '../../assets/merlin/merlin2.webp';

const tabsection = [
  {
    tab: 'sea level',
    text: 'Merlin is a family of rocket engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse.',
    info: [
      {
        characteristic: 'propellant',
        value: 'LOX',
      },
      {
        characteristic: 'thrust',
        value: '845kn',
      },
    ],
    image: merlin1,
  },
  {
    tab: 'vacuum',
    text: 'Merlin Vacuum features a larger exhaust section and a significantly larger expansion nozzle to maximize the engine’s efficiency in the vacuum of space. Its combustion chamber is regeneratively cooled, while the expansion nozzle is radiatively cooled. At full power, the Merlin Vacuum engine operates with the greatest efficiency ever for an American-made hydrocarbon rocket engine',
    info: [
      {
        characteristic: 'propellant',
        value: 'LOX',
      },
      {
        characteristic: 'thrust',
        value: '981kn',
      },
    ],
    image: merlin2,
  },
];

export default tabsection;
