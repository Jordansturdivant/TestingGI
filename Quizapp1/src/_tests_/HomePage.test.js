import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('renders homepage without crashing', () => {
    render(<HomePage />);
    const logoElement = screen.getByAltText(/Lrnr Logo/i);
    expect(logoElement).toBeInTheDocument();
});

test('displays intro text correctly', () => {
    render(<HomePage />);
    const introText = screen.getByText(/Your guided path to programming enlightenment/i);
    expect(introText).toBeInTheDocument();
});
