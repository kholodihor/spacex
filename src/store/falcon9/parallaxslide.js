import falcon9 from '../../assets/falcon9/falcon9.webp'
import scheme from '../../assets/falcon9/falcon9_scheme.webp'

const parallaxslide = [
  {
    text: 'Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn drives down the cost of space access.',
    info:[],
    img: scheme,
  },
  {
    subtitle: 'Falcon9',
    title: 'Overview',
    info: [
      {
        characteristic: 'height',
        value: '7m',
      },
      {
        characteristic: 'diameter',
        value: '3.7m',
      },
      {
        characteristic: 'mass',
        value: '549,054kg',
      },
      {
        characteristic: 'payload to LEO',
        value: '22800kg',
      },
      {
        characteristic: 'payload to GTO',
        value: '8300kg',
      },
      {
        characteristic: 'payload to MARS',
        value: '4200kg',
      },
    ],
    img: falcon9,
  },
];
export default parallaxslide;
