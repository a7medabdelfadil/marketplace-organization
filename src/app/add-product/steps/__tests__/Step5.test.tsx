import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Step5 from '../Step5';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Step5 Page', () => {
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
    render(<Step5 previousStep={function (): void {
      throw new Error('Function not implemented.');
    } } />);
  });

  it("renders Bulk Purchase Discounts title", () => {
    expect(screen.getByText("Bulk Purchase Discounts")).toBeInTheDocument();
  });

  it("renders Product Quantity label", () => {
    expect(screen.getByLabelText("Product Quantity")).toBeInTheDocument();
  });

  it("renders Discount label", () => {
    expect(screen.getByLabelText("Discount")).toBeInTheDocument();
  });

  it("renders quantity info tooltip text", () => {
    expect(
      screen.getByText(/How many product purchases do you want/i)
    ).toBeInTheDocument();
  });

  it("renders discount info tooltip text", () => {
    expect(
      screen.getByText(/What percentage discount do you want to set/i)
    ).toBeInTheDocument();
  });
  
});