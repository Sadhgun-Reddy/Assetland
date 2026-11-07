import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';

// Mock react-redux and firebase
vi.mock('react-redux', () => ({
  useSelector: vi.fn(),
  useDispatch: () => vi.fn(),
  Provider: ({ children }) => <div>{children}</div>
}));

vi.mock('./utils/firebase', () => ({
  auth: {
    onAuthStateChanged: vi.fn(() => () => {})
  }
}));

test('renders App without crashing', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/Assetland/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
