import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, act } from "@testing-library/react";
import MultiEyeInteraction from "../components/MultiEyeInteraction";
import { gsap } from "gsap";

vi.mock("gsap", () => ({
  gsap: {
    to: vi.fn(),
  },
}));

// Required to mock getBBox for all SVG elements
beforeEach(() => {
  vi.clearAllMocks();

  if (!("getBBox" in SVGElement.prototype)) {
    Object.defineProperty(SVGElement.prototype, "getBBox", {
      configurable: true,
      value: () => ({
        x: 0,
        y: 0,
        width: 100,
        height: 100,
      }),
    });
  }

  if (!("viewBox" in SVGSVGElement.prototype)) {
    Object.defineProperty(SVGSVGElement.prototype, "viewBox", {
      configurable: true,
      value: {
        baseVal: {
          x: 0,
          y: 0,
          width: 100,
          height: 100,
        },
      },
    });
  }

  if (
    !SVGElement.prototype.getBoundingClientRect ||
    SVGElement.prototype.getBoundingClientRect
      .toString()
      .includes("[native code]")
  ) {
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
  }
});

describe("MultiEyeInteraction", () => {
  it("renders an SVG with the provided content", () => {
    const { container } = render(
      <MultiEyeInteraction
        src={
          <g className="eye">
            <circle className="bounding" cx="50" cy="50" r="40" />
            <circle className="moving" cx="50" cy="50" r="10" />
          </g>
        }
      />,
    );

    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();

    const bounding = container.querySelector(".bounding");
    const moving = container.querySelector(".moving");
    expect(bounding).toBeTruthy();
    expect(moving).toBeTruthy();
  });

  it("animates the eye on mousemove", () => {
    render(
      <MultiEyeInteraction
        src={
          <g className="eye">
            <circle className="bounding" cx="50" cy="50" r="40" />
            <circle className="moving" cx="50" cy="50" r="10" />
          </g>
        }
      />,
    );

    act(() => {
      window.dispatchEvent(
        new MouseEvent("mousemove", {
          clientX: 200,
          clientY: 100,
        }),
      );
    });

    expect(gsap.to).toHaveBeenCalled();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((gsap.to as any).mock.calls[0][1]).toEqual(
      expect.objectContaining({
        x: expect.any(Number),
        y: expect.any(Number),
        duration: expect.any(Number),
        ease: "power1.out",
      }),
    );
  });

  it("cleans up the mousemove event on unmount", () => {
    const spy = vi.spyOn(window, "removeEventListener");
    const { unmount } = render(<MultiEyeInteraction src={<g />} />);
    unmount();
    expect(spy).toHaveBeenCalledWith("mousemove", expect.any(Function));
  });
});
