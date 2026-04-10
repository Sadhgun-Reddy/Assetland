import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ServicesSection from './ServicesSection';

// Mock react-redux
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

// Mock react-router-dom's useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('ServicesSection Component', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockClear();
    useDispatch.mockReturnValue(mockDispatch);
    mockNavigate.mockClear();
  });

  test('renders "Services" heading and introductory text', () => {
    useSelector.mockReturnValue(null); // Guest user
    render(
      <MemoryRouter>
        <ServicesSection />
      </MemoryRouter>
    );

    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText(/Getting representation from a traditional real estate broker can be expensive/i)).toBeInTheDocument();
  });

  test('renders Navbar when user is not logged in', () => {
    useSelector.mockReturnValue(null);
    render(
      <MemoryRouter>
        <ServicesSection />
      </MemoryRouter>
    );

    // "Sign in" button is present in Navbar
    expect(screen.getByRole('button', { name: /Sign in/i })).toBeInTheDocument();
  });

  test('renders LogedInNavbar when user is logged in', () => {
    useSelector.mockReturnValue({ displayName: 'John Doe' });
    render(
      <MemoryRouter>
        <ServicesSection />
      </MemoryRouter>
    );

    // "Log Out" button is present in LogedInNavbar
    expect(screen.getByRole('button', { name: /Log Out/i })).toBeInTheDocument();
    // Also check for display name
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  test('renders all service item titles', () => {
    useSelector.mockReturnValue(null);
    render(
      <MemoryRouter>
        <ServicesSection />
      </MemoryRouter>
    );

    const serviceTitles = [
      "Showings",
      "Disclosure Review",
      "Offer Preparation",
      "Negotiation",
      "Closing",
      "General Support"
    ];

    serviceTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  test('toggles service item description on click', () => {
    useSelector.mockReturnValue(null);
    render(
      <MemoryRouter>
        <ServicesSection />
      </MemoryRouter>
    );

    const showingsItem = screen.getByLabelText('Showings');
    const descriptionText = /Let us know which properties you're interested in/i;

    // Initially description is not visible
    expect(screen.queryByText(descriptionText)).not.toBeInTheDocument();

    // Click to open
    fireEvent.click(showingsItem);
    expect(screen.getByText(descriptionText)).toBeInTheDocument();

    // Click to close
    fireEvent.click(showingsItem);
    expect(screen.queryByText(descriptionText)).not.toBeInTheDocument();
  });
});
