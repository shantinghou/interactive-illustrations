import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, act } from "@testing-library/react";
import MorphOnScroll from "../components/MorphOnScroll";
import { interpolate as flubberInterpolate } from "flubber";

vi.mock("flubber", () => ({
  interpolate: vi.fn(() => vi.fn((t) => `M${t},${t}`)),
}));

const startPath = "M0,0 L100,0 L100,100 L0,100 Z";
const endPath = "M0,0 L150,0 L150,150 L0,150 Z";

describe("MorphOnScroll", () => {
  beforeEach(() => {
    // Reset scroll position
    window.scrollY = 0;
    vi.resetAllMocks();
  });

  it("renders SVG with the start path initially", () => {
    const { container } = render(
      <MorphOnScroll startPath={startPath} endPath={endPath} />,
    );
    const path = container.querySelector("path");
    expect(path?.getAttribute("d")).toBe("M0,0");
  });

  it("updates path on scroll", () => {
    render(
      <MorphOnScroll startPath={startPath} endPath={endPath} scrollSpeed={1} />,
    );

    // Fake a scroll event with progress = 0.5
    const fakeScrollHeight = 2000;
    const fakeClientHeight = 1000;

    // Mock scroll context
    Object.defineProperty(window, "innerHeight", { value: fakeClientHeight });
    Object.defineProperty(document.body, "scrollHeight", {
      value: fakeScrollHeight,
    });
    Object.defineProperty(window, "scrollY", { value: 500, writable: true });

    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const interpolator = (flubberInterpolate as any).mock.results[0].value;
    expect(interpolator).toHaveBeenCalledWith(0.5);
  });

  afterEach(() => {
    document.getElementById("scroll-container")?.remove();
  });
});
