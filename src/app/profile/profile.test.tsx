import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Profile from "./page";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("Profile Page", () => {
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
    render(<Profile />);
  });

  it("renders university name and handle", () => {
    expect(screen.getAllByText(/Stanford University/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/@stanford/i)).toBeInTheDocument();
  });

  it("renders navigation tabs", () => {
    expect(screen.getByText(/Post/i)).toBeInTheDocument();
    expect(screen.getByText(/Course/i)).toBeInTheDocument();
    expect(screen.getByText(/Videos/i)).toBeInTheDocument();
    expect(screen.getByText(/Images/i)).toBeInTheDocument();
  });

  it("renders campaign button", () => {
    expect(screen.getByText(/Campaign/i)).toBeInTheDocument();
  });

  it("renders post description and interaction buttons", () => {
    expect(
      screen.getByText(/We consulted five design experts/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/You & 5 others/i)).toBeInTheDocument();
    expect(screen.getByText(/Comment/i)).toBeInTheDocument();
    expect(screen.getByText(/Share/i)).toBeInTheDocument();
  });

});
