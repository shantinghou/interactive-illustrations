import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, act } from "@testing-library/react";
import RotateObject from "../components/RotateObject";
import { gsap } from "gsap";

vi.mock("gsap", () => ({
  gsap: {
    to: vi.fn(),
    set: vi.fn(),
  },
}));

beforeEach(() => {
  vi.clearAllMocks();

  // Simulate basic geometry
  Object.defineProperty(SVGElement.prototype, "getBBox", {
    configurable: true,
    value: () => ({ x: 0, y: 0, width: 100, height: 100 }),
  });

  Object.defineProperty(SVGElement.prototype, "getBoundingClientRect", {
    configurable: true,
    value: () => ({
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      right: 100,
      bottom: 100,
      toJSON: () => {},
    }),
  });
});

const TestSVG = (
  <g className="target">
    <circle cx="50" cy="50" r="40" />
  </g>
);

describe("RotateObject", () => {
  it("triggers rotation on scroll", () => {
    render(<RotateObject src={TestSVG} respondsTo="scroll" speed={0.1} />);

    // Simulate scrolling
    Object.defineProperty(window, "scrollY", { value: 300, writable: true });

    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    expect(gsap.to).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        rotation: expect.stringContaining("+="),
        duration: 0.1,
        transformOrigin: "50% 50%",
      }),
    );
  });

  it("triggers rotation on mouse movement", () => {
    render(<RotateObject src={TestSVG} respondsTo="mouse" speed={0.3} />);

    act(() => {
      window.dispatchEvent(
        new MouseEvent("mousemove", {
          clientX: 75,
          clientY: 75,
        }),
      );
    });

    expect(gsap.to).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        rotation: expect.any(Number),
        duration: 0.2,
        transformOrigin: "50% 50%",
      }),
    );
  });

  it("cleans up event listeners on unmount", () => {
    const spyRemove = vi.spyOn(window, "removeEventListener");
    const { unmount } = render(
      <RotateObject src={TestSVG} respondsTo="scroll" />,
    );
    unmount();
    expect(spyRemove).toHaveBeenCalledWith("scroll", expect.any(Function));
  });
});
