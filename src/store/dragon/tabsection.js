import draco from '../../assets/dragon/Draco.webp';
import superdraco from '../../assets/dragon/SuperDraco.webp';

const tabsection = [
  {
    tab: 'draco',
    text: 'The Dragon spacecraft is equipped with 16 Draco thrusters used to orient the spacecraft during the mission, including apogee/perigee maneuvers, orbit adjustment and attitude control. Each Draco thruster is capable of generating 90 pounds of force in the vacuum of space.',
    info: [
      {
        characteristic: 'number of engines',
        value: '16',
      },
      {
        characteristic: 'thrust in vacuum',
        value: '400n',
      },
    ],
    image: draco,
  },
  {
    tab: 'superdraco',
    text: 'An array of eight SuperDraco engines provide fault-tolerant propulsion for Dragon’s launch escape system. In the unlikely event of an emergency, the eight SuperDraco engines can power Dragon half a mile away from the launch vehicle in less than eight seconds.',
    info: [
      {
        characteristic: 'number of engines',
        value: '8',
      },
      {
        characteristic: 'escape thrust',
        value: '73kn',
      },
    ],
    image: superdraco,
  },
];

export default tabsection;
