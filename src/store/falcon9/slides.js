import secondstage from '../../assets/falcon9/secondstage.webp';
import interstage from '../../assets/falcon9/interstage.webp';
import payload from '../../assets/falcon9/payload.webp';

const slides = [
  {
    subtitle: 'Falcon9',
    title: 'second stage',
    text: 'The second stage, powered by a single Merlin Vacuum Engine, delivers Falcon 9’s payload to the desired orbit. The second stage engine ignites a few seconds after stage separation, and can be restarted multiple times to place multiple payloads into different orbits. ',
    info: [
      {
        characteristic: 'number of engines',
        value: '1 vacuum',
      },
      {
        characteristic: 'burn time',
        value: '397ms',
      },
      {
        characteristic: 'thrust',
        value: '981kn',
      },
    ],
    img: secondstage,
  },
  {
    subtitle: 'Falcon9',
    title: 'interstage',
    text: 'The interstage is a composite structure that connects the first and second stages, and houses the pneumatic pushers that allow the first and second stage to separate during flight.Grid finsFalcon 9 is equipped with four hypersonic grid fins positioned at the base of the interstage. They orient the rocket during reentry by moving the center of pressure.',
    info: [],
    img: interstage,
  },
  {
    subtitle: 'Falcon9',
    title: 'payload',
    text: 'Dragon is capable of carrying up to 7 people and/or cargo in the spacecraft’s pressurized section. In addition, Dragon can carry cargo in the spacecraft’s unpressurized trunk, which can also accommodate secondary payloads.',
    info: [
      {
        characteristic: 'height',
        value: '8.1m',
      },
      {
        characteristic: 'diameter',
        value: '3.7m',
      },
    ],
    img: payload,
  },
];

export default slides;
