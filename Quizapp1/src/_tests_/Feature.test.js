import { render, screen } from '@testing-library/react';
import Feature from './Feature';

test('renders feature component with title and description', () => {
    const featureTitle = 'Personalized Quizzes';
    const featureDescription = 'Greetings, young padawan. Are you ready to embark on a journey...';

    render(<Feature iconClass="fas fa-bolt" title={featureTitle} description={featureDescription} />);

    const titleElement = screen.getByText(featureTitle);
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(featureDescription);
    expect(descriptionElement).toBeInTheDocument();
});
