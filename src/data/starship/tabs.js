import crew from '../../assets/starship/crew.webp';
import cargo from '../../assets/starship/cargo.webp';

const tabsslide = [
  {
    text: 'The Starship payload fairing is 9 m in diameter and 18 m high, resulting in the largest usable payload volume of any current or in development launcher. This payload volume can be configured for both crew and cargo.',
    tab: 'crew',
    info: [
      {
        characteristic: 'payload volume height',
        value: '18m',
      },
      {
        characteristic: 'payload fairing diameter',
        value: '9m',
      },
      {
        characteristic: 'payload volume',
        value: '1100m3',
      },
      {
        characteristic: 'useful mass',
        value: '100+t',
      },
    ],
    image: crew,
  },
  {
    text: 'The Starship payload fairing is 9 m in diameter and 18 m high, resulting in the largest usable payload volume of any current or in development launcher. This payload volume can be configured for both crew and cargo.',
    info: [
      {
        characteristic: 'payload volume height',
        value: '20m',
      },
      {
        characteristic: 'payload fairing diameter',
        value: '9m',
      },
      {
        characteristic: 'payload volume',
        value: '1100m3',
      },
      {
        characteristic: 'useful mass',
        value: '100+t',
      },
    ],
    tab: 'cargo',
    image: cargo,
  },
];

export default tabsslide;
