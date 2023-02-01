import { render, screen } from '@testing-library/react';
import HomeSection from './HomeSection';

const section = {
  title: 'Starlink Mission',
  subtitle: 'recent launch',
  button: 'rewatch',
  background: '../../assets/homepage/bg9.webp',
};

test('renders home section', () => {
  render(<HomeSection section={section} />);

  const headerElement = screen.getByText(/Starlink Mission/i);
  const buttonElement = screen.getByRole('button');
  
  expect(headerElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
