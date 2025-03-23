import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Step4 from '../Step4';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Step4 Page', () => {
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
    render(<Step4 previousStep={function (): void {
      throw new Error('Function not implemented.');
    } } />);
  });

  it("renders Logistics and Shipment Information title", () => {
    expect(screen.getByText("Logistics and Shipment Information")).toBeInTheDocument();
  });

  it("renders Container Type dropdown", () => {
    expect(screen.getByLabelText("Container Type")).toBeInTheDocument();
  });

  it("renders Quantity in Container input", () => {
    expect(screen.getByLabelText("Quantity in Container")).toBeInTheDocument();
  });

  it("renders Product Dimensions dropdown", () => {
    expect(screen.getByLabelText("Product Dimensions (H x W x D)")).toBeInTheDocument();
  });

  it("renders Product Weight input", () => {
    expect(screen.getByLabelText("Product Weight")).toBeInTheDocument();
  });
});