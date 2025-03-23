import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Step1 from '../Step1';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Step1 Page', () => {
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
    render(<Step1 />);
  });

  it("renders Product Information title", () => {
    expect(screen.getByText("Product Information")).toBeInTheDocument();
  });

  it("renders Product Name input", () => {
    expect(screen.getByLabelText("Product Name")).toBeInTheDocument();
  });

  it("renders Product Short Description input", () => {
    expect(screen.getByLabelText("Product Short Description")).toBeInTheDocument();
  });

  it("renders Product Images uploader", () => {
    expect(screen.getByText("Browse or Desktop")).toBeInTheDocument();
  });

  it("renders Product Description input", () => {
    expect(screen.getByLabelText("Product Description")).toBeInTheDocument();
  });

  it("renders Product Price Currency dropdown", () => {
    expect(screen.getByLabelText("Product Price Currency")).toBeInTheDocument();
  });

  it("renders Product Price input", () => {
    expect(screen.getByLabelText("Product Price")).toBeInTheDocument();
  });

});