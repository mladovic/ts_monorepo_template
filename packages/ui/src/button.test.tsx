import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./button";

test("Button should be rendered", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText(/Click me/i)).toBeInTheDocument();
});
