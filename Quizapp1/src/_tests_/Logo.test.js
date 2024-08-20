import { render, screen } from '@testing-library/react';
import Logo from './Logo';

test('renders logo component with correct image and text', () => {
    render(<Logo />);
    const logoElement = screen.getByAltText(/Lrnr Logo/i);
    expect(logoElement).toBeInTheDocument();

    const introText = screen.getByText(/Your guided path to programming enlightenment/i);
    expect(introText).toBeInTheDocument();
});

test('renders button with correct text', () => {
    render(<Logo />);
    const buttonElement = screen.getByText(/BEGIN JOURNEY/i);
    expect(buttonElement).toBeInTheDocument();
});
