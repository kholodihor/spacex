import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

const videoSrc = 'https://www.youtube.com/embed/78ATfCaBn6E';

describe('modal window test', () => {
  test('modal closed', () => {
    render(<Modal active={false} videoSrc={videoSrc} />);

    const modalElement = screen.queryByTestId('modal');

    expect(modalElement).toBeNull();
  });

  test('modal open', () => {
    render(<Modal active={true} videoSrc={videoSrc} />);

    const modalElement = screen.queryByTestId('modal');

    expect(modalElement).toBeInTheDocument();
    expect(modalElement).toHaveClass('Modal__active');
  });

  test('renders close button', () => {
    render(<Modal active={true} videoSrc={videoSrc}  />);

    const closeElement = screen.queryByTestId('close');

    expect(closeElement).toBeInTheDocument();
    expect(closeElement).toHaveClass('Modal__close');
  });
});
