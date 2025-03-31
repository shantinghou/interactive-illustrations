import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, act } from "@testing-library/react";
import SVGFollowMouse from "../components/SVGFollowMouse";
import { gsap } from "gsap";

vi.mock("gsap", () => ({
  gsap: {
    to: vi.fn(),
  },
}));

beforeEach(() => {
  vi.clearAllMocks();

  Object.defineProperty(SVGElement.prototype, "getBBox", {
    configurable: true,
    value: () => ({ x: 0, y: 0, width: 100, height: 100 }),
  });
});

const DummySVG = <circle cx="50" cy="50" r="40" fill="red" />;

describe("SVGFollowMouse", () => {
  it("renders container and SVG with correct dimensions", () => {
    const { container } = render(
      <SVGFollowMouse src={DummySVG} size={2} opacity={0.5} />,
    );
    const svg = container.querySelector("svg");

    expect(svg).toBeTruthy();
    expect(svg?.getAttribute("width")).toBe("200");
    expect(svg?.getAttribute("height")).toBe("200");
  });

  it("calls gsap.to on mousemove with correct left/top", () => {
    render(
      <SVGFollowMouse src={DummySVG} size={1} delay={0.2} ease="linear" />,
    );

    act(() => {
      window.dispatchEvent(
        new MouseEvent("mousemove", {
          clientX: 300,
          clientY: 400,
        }),
      );
    });

    expect(gsap.to).toHaveBeenCalledWith(expect.anything(), {
      left: 250, // 300 - 100/2
      top: 350, // 400 - 100/2
      duration: 0.2,
      ease: "linear",
    });
  });

  it("cleans up event listener on unmount", () => {
    const spy = vi.spyOn(window, "removeEventListener");
    const { unmount } = render(<SVGFollowMouse src={DummySVG} />);
    unmount();
    expect(spy).toHaveBeenCalledWith("mousemove", expect.any(Function));
  });
});
