import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import AnimatedOnHover from "../components/AnimatedOnHover";
import { gsap } from "gsap";

vi.mock("gsap", () => {
  return {
    gsap: {
      to: vi.fn(() => ({ kill: vi.fn() })),
      fromTo: vi.fn(() => ({ kill: vi.fn() })),
      set: vi.fn(),
    },
  };
});

const DummySVG = (
  <g className="animate">
    <circle cx="50" cy="50" r="40" fill="blue" />
  </g>
);

describe("AnimatedOnHover", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders an SVG with given dimensions", () => {
    const { container } = render(
      <AnimatedOnHover src={DummySVG} width={400} height={400} />,
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
    expect(svg?.getAttribute("width")).toBe("400");
    expect(svg?.getAttribute("height")).toBe("400");
  });

  it("calls gsap.to on hover with 'pulse' animation", () => {
    const { container } = render(
      <AnimatedOnHover src={DummySVG} animation="pulse" />,
    );

    const target = container.querySelector(".animate");
    expect(target).toBeTruthy();

    fireEvent.mouseEnter(target!);
    expect(gsap.to).toHaveBeenCalled();
  });

  it("uses the correct GSAP method for 'pop' animation", () => {
    render(<AnimatedOnHover src={DummySVG} animation="pop" />);
    const target = document.querySelector(".animate")!;
    fireEvent.mouseEnter(target);

    expect(gsap.fromTo).toHaveBeenCalled();
  });
});
