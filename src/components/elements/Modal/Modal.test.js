import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

const videoSrc = 'https://www.youtube.com/embed/78ATfCaBn6E';

describe('Modal Component', () => {
  const mockSetActive = jest.fn();

  beforeEach(() => {
    mockSetActive.mockClear();
  });

  test('renders nothing when modal is closed', () => {
    render(<Modal active={false} videoSrc={videoSrc} setActive={mockSetActive} />);
    const modalElement = screen.queryByTestId('modal');
    expect(modalElement).toBeNull();
  });

  test('renders modal when active is true', () => {
    render(<Modal active={true} videoSrc={videoSrc} setActive={mockSetActive} />);
    const modalElement = screen.queryByTestId('modal');
    expect(modalElement).toBeInTheDocument();
    expect(modalElement).toHaveClass('Modal Modal__active');
  });

  test('renders iframe with correct props when modal is open', () => {
    render(<Modal active={true} videoSrc={videoSrc} setActive={mockSetActive} />);
    const iframeElement = screen.getByTitle('SpaceX Video Content');
    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute('src', videoSrc);
    expect(iframeElement).toHaveClass('Modal__content-video--embed');
  });

  test('closes modal when clicking outside content area', () => {
    render(<Modal active={true} videoSrc={videoSrc} setActive={mockSetActive} />);
    const modalElement = screen.getByTestId('modal');
    fireEvent.click(modalElement);
    expect(mockSetActive).toHaveBeenCalledWith(false);
  });

  test('does not close modal when clicking inside content area', () => {
    render(<Modal active={true} videoSrc={videoSrc} setActive={mockSetActive} />);
    const contentElement = screen.getByTestId('modal-content');
    fireEvent.click(contentElement);
    expect(mockSetActive).not.toHaveBeenCalled();
  });

  test('closes modal when clicking close button', () => {
    render(<Modal active={true} videoSrc={videoSrc} setActive={mockSetActive} />);
    const closeButton = screen.getByTestId('close');
    fireEvent.click(closeButton);
    expect(mockSetActive).toHaveBeenCalledWith(false);
  });

  test('uses default props when not provided', () => {
    render(<Modal />);
    const modalElement = screen.queryByTestId('modal');
    expect(modalElement).toBeNull();
  });
});
