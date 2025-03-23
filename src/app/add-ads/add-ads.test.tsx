import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import AddAds from './page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('AddAds Page', () => {
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
    render(<AddAds />);
  });

  it("renders main form fields", () => {
    expect(screen.getByText(/Describe your campaign/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Promotion Ads/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Get 70% Off Discount From Westered/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/A detailed description/i)).toBeInTheDocument();
  });

  it("renders tags", () => {
    expect(screen.getAllByText(/Tags 1/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Tags 10/i)).toBeInTheDocument();
  });

  it("opens modal on publish click", () => {
    const publishButton = screen.getByRole("button", { name: /Publish/i });
    fireEvent.click(publishButton);
    expect(screen.getByText(/Congratulations/i)).toBeInTheDocument();
  });

});