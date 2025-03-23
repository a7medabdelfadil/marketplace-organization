import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Education from './page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Education Page', () => {
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
    render(<Education />);
  });

  it("renders today's task section", () => {
    expect(screen.getByText(/Today Task/i)).toBeInTheDocument();
    expect(screen.getByText(/Today's schedule/i)).toBeInTheDocument();
  });

  it('renders my courses section', () => {
    expect(screen.getByText(/My Courses/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Learning JavaScript With Imagination/i).length).toBeGreaterThan(0);
  });

  it('renders events and meetups', () => {
    expect(screen.getAllByText(/Event Name/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Meetup Name/i).length).toBeGreaterThan(0);
  });

  it('opens modal when clicking manage button', () => {
    const manageButton = screen.getByRole('button', { name: /Manage Education/i });
    fireEvent.click(manageButton);
    expect(screen.getAllByText(/Events/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Workshop/i)).toBeInTheDocument();
  });

  it('renders timeline events', () => {
    expect(screen.getAllByText(/Daily Standup Call/i).length).toBeGreaterThan(0);
  });


});