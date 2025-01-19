import React from "react";

import MyComponent from "../MyComponent";

import { render, screen } from "@testing-library/react";

describe("MyComponent", () => {
  it("renders without crashing", () => {
    render(<MyComponent />);
  });

  it("displays the title", () => {
    render(<MyComponent />);
    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("displays the description", () => {
    render(<MyComponent />);
    expect(
      screen.getByText(/Lorem Ipsum is simply dummy text/)
    ).toBeInTheDocument();
  });

  it("displays action buttons", () => {
    render(<MyComponent />);
    expect(screen.getByText("Demo")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
  });

  it("has an accessible image", () => {
    render(<MyComponent />);
    const image = screen.getByAltText("Descriptive image for the component");
    expect(image).toBeInTheDocument();
  });
});
