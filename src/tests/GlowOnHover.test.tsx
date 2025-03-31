import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import GlowOnHover from "../components/GlowOnHover";
import { gsap } from "gsap";

// Mock gsap so we can assert calls without triggering real animations
vi.mock("gsap", () => ({
  gsap: {
    to: vi.fn(),
  },
}));

// Dummy SVG that includes a .glow class for triggering
const DummySVG = (
  <g className="glow">
    <circle cx="50" cy="50" r="30" fill="blue" />
  </g>
);

describe("GlowOnHover", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders an SVG with default width/height", () => {
    const { container } = render(<GlowOnHover src={DummySVG} />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
    expect(svg?.getAttribute("width")).toBe("300");
    expect(svg?.getAttribute("height")).toBe("300");
  });

  it("applies scale and glow on mouse enter", () => {
    const { container } = render(
      <GlowOnHover src={DummySVG} scaleFactor={1.5} color="red" />,
    );
    const glow = container.querySelector(".glow");
    expect(glow).toBeTruthy();

    fireEvent.mouseEnter(glow!);

    expect(gsap.to).toHaveBeenCalledWith(
      glow,
      expect.objectContaining({
        scale: 1.5,
        filter: "drop-shadow(0px 0px 10px red)",
        transformOrigin: "50% 50%",
        duration: 0.5,
      }),
    );
  });

  it("removes glow and scale on mouse leave", () => {
    const { container } = render(<GlowOnHover src={DummySVG} />);
    const glow = container.querySelector(".glow");
    fireEvent.mouseLeave(glow!);

    expect(gsap.to).toHaveBeenCalledWith(
      glow,
      expect.objectContaining({
        scale: 1,
        filter: "none",
        duration: 0.3,
      }),
    );
  });
});
