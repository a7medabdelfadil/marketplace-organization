import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from './page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Dashboard Page', () => {
  beforeAll(() => {
    global.ResizeObserver = class {
      observe() {
        // To be not empty
      }
      unobserve() {
        // To be not empty
      }
      disconnect() {
        // To be not empty
      }
    };
  });

  beforeEach(() => {
    render(<Dashboard />);
  });

  it('renders overview section', () => {
    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/All Student/i)).toBeInTheDocument();
    expect(screen.getByText(/All Teacher/i)).toBeInTheDocument();
    expect(screen.getByText(/New Student/i)).toBeInTheDocument();
    expect(screen.getByText(/Active Users/i)).toBeInTheDocument();
  });

  it('renders chart and events section', () => {
    expect(screen.getByText(/Total Student/i)).toBeInTheDocument();
    expect(screen.getByText(/Popular Events/i)).toBeInTheDocument();
  });

  it('renders courses section', () => {
    expect(screen.getByText(/My Courses/i)).toBeInTheDocument();
    expect(screen.getAllByText(/The Complete Graphic Design for Beginners/i).length).toBeGreaterThan(0);
  });

  it('renders notifications and activities', () => {
    expect(screen.getByText(/Notifications/i)).toBeInTheDocument();
    expect(screen.getByText(/Teacher Activities/i)).toBeInTheDocument();
    expect(screen.getByText(/Contacts/i)).toBeInTheDocument();
  });


});