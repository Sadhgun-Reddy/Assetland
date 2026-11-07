import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import ServicesSection from './ServicesSection';

// Mock react-redux
vi.mock('react-redux', () => ({
  useSelector: vi.fn(),
  useDispatch: vi.fn(),
}));

// Mock react-router-dom's useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('ServicesSection Component', () => {
  const mockDispatch = vi.fn();

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

    // Using getAllByText and taking the first one because 'Services' might appear in navigation links as well.
    const headings = screen.getAllByText('Services');
    expect(headings.length).toBeGreaterThan(0);
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
    const signInButtons = screen.getAllByRole('button', { name: /Sign in/i });
    expect(signInButtons.length).toBeGreaterThan(0);
  });

  test('renders LogedInNavbar when user is logged in', () => {
    useSelector.mockImplementation((selector) => {
        const state = { user: { displayName: 'John Doe' } };
        return selector(state);
    });

    render(
      <MemoryRouter>
        <ServicesSection />
      </MemoryRouter>
    );

    const logOutButtons = screen.getAllByRole('button', { name: /Log Out/i });
    expect(logOutButtons.length).toBeGreaterThan(0);
    expect(screen.getByRole('button', { name: /John Doe/i })).toBeInTheDocument();
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

    const showingsItem = screen.getByText('Showings');
    const descriptionText = /Let us know which properties you're interested in/i;

    expect(screen.queryByText(descriptionText)).not.toBeInTheDocument();

    fireEvent.click(showingsItem);
    expect(screen.getByText(descriptionText)).toBeInTheDocument();

    fireEvent.click(showingsItem);
    expect(screen.queryByText(descriptionText)).not.toBeInTheDocument();
  });
});
