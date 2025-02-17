import { render, screen, within } from '@testing-library/react';
import Timeline from './Timeline';

describe('Timeline Component', () => {
  const mockSteps = ['Step 1', 'Step 2', 'Step 3'];

  test('renders all provided steps', () => {
    render(<Timeline steps={mockSteps} />);
    mockSteps.forEach(step => {
      expect(screen.getByText(step)).toBeInTheDocument();
    });
  });

  test('renders timeline line', () => {
    render(<Timeline steps={mockSteps} />);
    const timelineLine = screen.getByTestId('timeline-line');
    expect(timelineLine).toBeInTheDocument();
    expect(timelineLine).toHaveClass('Timeline__line');
  });

  test('renders correct number of step circles', () => {
    render(<Timeline steps={mockSteps} />);
    const stepCircles = screen.getAllByTestId('timeline-step-circle');
    expect(stepCircles).toHaveLength(mockSteps.length);
  });

  test('renders steps in correct order', () => {
    render(<Timeline steps={mockSteps} />);
    const stepContainer = screen.getByTestId('timeline-steps');
    const steps = within(stepContainer).getAllByTestId('timeline-step');
    
    steps.forEach((step, index) => {
      const stepText = within(step).getByText(mockSteps[index]);
      expect(stepText).toBeInTheDocument();
    });
  });

  test('throws error when steps prop is missing', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<Timeline />)).toThrow();
    consoleError.mockRestore();
  });
});
