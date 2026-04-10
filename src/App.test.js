import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App without crashing', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/Assetland/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
