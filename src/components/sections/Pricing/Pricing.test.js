import { render, screen } from '@testing-library/react';
import { steps } from '../../../store/steps';
import Pricing from './Pricing';

test('renders pricing section correctly', () => {
  render(<Pricing />);

  const length = steps.length;
  const headerElement = screen.getByText(/RESERVE YOUR RIDE ONLINE/i);
  const stepElements = screen.getAllByTestId('step');
  const imageElement = screen.getByRole('img');
  const buttonElement = screen.getByRole('button');

  expect(headerElement).toBeInTheDocument();
  expect(stepElements).toHaveLength(length);
  expect(imageElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
