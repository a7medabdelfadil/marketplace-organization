import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Step2 from '../Step2';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Step2 Page', () => {
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
    render(<Step2 previousStep={function (): void {
      throw new Error('Function not implemented.');
    } } />);
  });


  it("renders Product Detail Information title", () => {
    expect(screen.getByText("Product Detail Information")).toBeInTheDocument();
  });

  it("renders Product Category dropdown", () => {
    expect(screen.getByLabelText("Product Category")).toBeInTheDocument();
  });

  it("renders SubCategory dropdown", () => {
    expect(screen.getByLabelText("SubCategory")).toBeInTheDocument();
  });

  it("renders Product Specification section", () => {
    expect(screen.getByText("Product Specification")).toBeInTheDocument();
  });

  it("renders Material dropdown", () => {
    expect(screen.getByLabelText("Material")).toBeInTheDocument();
  });

  it("renders Weight dropdown", () => {
    expect(screen.getByLabelText("Weight")).toBeInTheDocument();
  });

  it("renders Production Technique dropdown", () => {
    expect(screen.getByLabelText("Production Technique")).toBeInTheDocument();
  });

  it("renders Absorbency dropdown", () => {
    expect(screen.getByLabelText("Absorbency")).toBeInTheDocument();
  });

  it("renders Product Tags section", () => {
    expect(screen.getByText("Product Tags")).toBeInTheDocument();
    expect(screen.getByText("Recommended Tags")).toBeInTheDocument();
  });

  it("renders 10 tags", () => {
    const tags = screen.getAllByText(/Tag \d/);
    expect(tags.length).toBe(10);
  });
  
});