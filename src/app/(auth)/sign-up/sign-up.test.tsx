import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Signup from './page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Signup Page', () => {
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
    render(<Signup />);
  });

  it("renders main headings", () => {
    expect(screen.getByText(/Create a new account/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
  });

  it("renders form fields", () => {
    expect(screen.getByPlaceholderText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter Your Nationality/i)).toBeInTheDocument();
  });

  it("toggles terms checkbox", () => {
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it("renders upload placeholders", () => {
    expect(screen.getAllByText(/Browse or Drop/i).length).toBe(2);
  });

});