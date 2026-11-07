import { render, screen } from '@testing-library/react';
import HomebuyerGuide from './BrambleGuides';

test('renders HomebuyerGuide component and shows guide titles', () => {
  render(<HomebuyerGuide />);
  const titleElement = screen.getByText(/Understanding the Paperwork: A Guide to Homebuyer Agreements/i);
  expect(titleElement).toBeInTheDocument();
});
