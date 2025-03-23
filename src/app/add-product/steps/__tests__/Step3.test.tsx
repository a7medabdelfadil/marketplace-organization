import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Step3 from '../Step3';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Step3 Page', () => {
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
    render(<Step3 previousStep={function (): void {
      throw new Error('Function not implemented.');
    } } />);
  });

  it("renders Product Variant Creation title", () => {
    expect(screen.getByText("Product Variant Creation")).toBeInTheDocument();
  });

  it("renders Product Attributes section", () => {
    expect(screen.getByText("Product Attributes")).toBeInTheDocument();
  });

  it("renders Color dropdown", () => {
    expect(screen.getByLabelText("Color")).toBeInTheDocument();
  });

  it("renders Style dropdown", () => {
    expect(screen.getByLabelText("Style")).toBeInTheDocument();
  });

  it("renders Size dropdown", () => {
    expect(screen.getByLabelText("Size")).toBeInTheDocument();
  });

  it("renders Edge Design dropdown", () => {
    expect(screen.getByLabelText("Edge Design")).toBeInTheDocument();
  });
  
});