import capsule from '../../assets/dragon/capsule.webp';
import abort from '../../assets/dragon/abort.webp';
import control from '../../assets/dragon/control.webp';

const tabsslide = [
  {
    text: 'The Dragon capsule, also known as the pressurized section, allows for the transport of people as well as environmentally sensitive cargo. Dragon is equipped with Draco thrusters that allow Dragon to maneuver while on orbit and 8 SuperDracos that power the spacecraft’s launch escape system.',
    tab: 'capsule',
    info: [
      {
        characteristic: 'volume',
        value: '9,3m',
      },
    ],
    image: capsule,
  },
  {
    text: 'The launch abort system is a crew safety system built into the Dragon spacecraft, used to quickly separate Dragon from Falcon 9 in the unlikely event of an emergency. In the unlikely event of an emergency, Dragon’s launch abort system can quickly separate the spacecraft from Falcon 9. Using its SuperDraco engines, Dragon will propel itself away from the launch vehicle. ',
    info: [
      {
        characteristic: 'number of engines',
        value: '8',
      },
      {
        characteristic: 'escape thrust',
        value: '71kn',
      },
    ],
    tab: 'launch abort',
    image: abort,
  },
  {
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
    tab: 'attitude control',
    image: control,
  },
];

export default tabsslide;
