import { render, screen } from '@testing-library/react';
import Features from './Features';

test('renders all features correctly', () => {
    render(<Features />);
    
    const firstFeatureTitle = screen.getByText(/Personalized Quizzes/i);
    expect(firstFeatureTitle).toBeInTheDocument();

    const secondFeatureTitle = screen.getByText(/Rewarding/i);
    expect(secondFeatureTitle).toBeInTheDocument();

    const thirdFeatureTitle = screen.getByText(/Personal SME/i);
    expect(thirdFeatureTitle).toBeInTheDocument();
});
