import firststage from '../../assets/falcon-heavy/firststage.webp';
import engine from '../../assets/falcon-heavy/engine.webp';
import legs from '../../assets/falcon-heavy/legs.webp';

const tabsslide = [
  {
    text: 'Falcon 9’s first stage incorporates nine Merlin engines an aluminum-lithium alloy tanks containing liquid oxygen and rocket-grade kerosene (RP-1) propellant.Falcon 9 generates more than 1.7 million pounds of thrustat sea level. The nine Merlin engines on the first stage are gradually throttlednear the end of first-stage flight to limit launch vehicle acceleration as the rocket’s mass decreases with the burning of fuel. These engines are also used to reorient the first stage prior to reentry and to decelerate the vehicle for landing.',
    tab: 'overview',
    info: [],
    image: firststage,
  },
  {
    text: 'The nine Merlin engines on the first stage are gradually throttlednear the end of first-stage flight to limit launch vehicle acceleration as the rocket’s mass decreases with the burning of fuel. These engines are also used to reorient the first stage prior to reentry and to decelerate the vehicle for landing. ',
    info: [
      {
        characteristic: 'number of engines',
        value: '9',
      },
      {
        characteristic: 'thrust at sea level',
        value: '7,607kn',
      },
      {
        characteristic: 'thrust in vacuum',
        value: '8,227kn',
      },
    ],
    tab: 'engine',
    image: engine,
  },
  {
    text: 'The Falcon 9 first stage is equipped with four landing legs made ofstate-of-the-art carbon fiber with aluminum honeycomb. Placed symmetrically around the base of the rocket, they are stowed at the base of the vehicle and deploy just prior to landing. Learn more about SpaceX reusability.Falcon 9’s first stage incorporates nine Merlin engines an aluminum-lithium alloy tanks containing liquid oxygen and rocket-grade kerosene (RP-1) propellant.Falcon 9 generates more than 1.7 million pounds of thrustat sea level',
    info: [],
    tab: 'landing legs',
    image: legs,
  },
];

export default tabsslide;
