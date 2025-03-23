import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ScholarshipDetails from './page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('ScholarshipDetails Page', () => {
  beforeEach(() => {
    render(<ScholarshipDetails />);
  });

  it('renders the scholarship title and image', () => {
    expect(screen.getByText(/Scholarship/i)).toBeInTheDocument();
    expect(screen.getByAltText(/photo/i)).toBeInTheDocument();
  });

  it('renders the scholarship description', () => {
    expect(screen.getByText(/Lorem ipsum/i)).toBeInTheDocument();
  });

  it('renders the enrollment link', () => {
    expect(screen.getByRole('link', { name: /Enrollment Now/i })).toBeInTheDocument();
  });
});
