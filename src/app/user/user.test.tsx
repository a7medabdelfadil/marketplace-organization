import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import User from './page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('User Page', () => {
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
    render(<User />);
  });

  it('renders search input and button', () => {
    expect(screen.getByPlaceholderText(/Search For/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add Staff/i })).toBeInTheDocument();
  });

  it('renders multiple user cards', () => {
    expect(screen.getAllByText(/Computer Science/i).length).toBeGreaterThan(0);
  });

  it('search input is interactive', () => {
    const searchInput = screen.getByPlaceholderText(/Search For/i);
    fireEvent.change(searchInput, { target: { value: 'Mostafa' } });
    expect(searchInput).toHaveValue('Mostafa');
  });
 
});