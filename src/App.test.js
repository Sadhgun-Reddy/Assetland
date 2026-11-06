import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock react-redux and firebase
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
  Provider: ({ children }) => <div>{children}</div>
}));

jest.mock('./utils/firebase', () => ({
  auth: {
    onAuthStateChanged: jest.fn(() => () => {})
  }
}));

test('renders App without crashing', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/Assetland/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
