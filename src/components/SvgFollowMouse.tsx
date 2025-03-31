import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface SVGFollowMouseProps {
  src: React.ReactNode;
  size?: number;
  opacity?: number;
  delay?: number;
  ease?: string;
}

const SVGFollowMouse: React.FC<SVGFollowMouseProps> = ({
  src,
  size = 1,
  opacity = 0.8,
  delay = 0.1,
  ease = "power1.out",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Default intrinsic dimensions if not provided by the SVG
  const baseWidth = 100;
  const baseHeight = 100;
  // let svgViewBox: string | undefined = undefined;

  const svgRef = useRef<SVGSVGElement | null>(null);
  const [viewBox, setViewBox] = React.useState("0 0 100 100"); // Default viewBox

  // Update viewBox based on SVG content (if needed)
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const updateViewBox = () => {
      const bbox = svg.getBBox();
      if (bbox.width > 0 && bbox.height > 0) {
        setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
      }
    };

    updateViewBox();
  }, [src]);

  // Compute container dimensions based on the scaling factor.
  const containerWidth = baseWidth * size;
  const containerHeight = baseHeight * size;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const left = event.clientX - containerWidth / 2;
      const top = event.clientY - containerHeight / 2;

      if (containerRef.current) {
        gsap.to(containerRef.current, {
          left,
          top,
          duration: delay,
          ease: ease,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [containerWidth, containerHeight, delay, ease]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        width: `${containerWidth}px`,
        height: `${containerHeight}px`,
        left: 0,
        top: 0,
        pointerEvents: "none", // so that it doesn't block mouse events
        opacity: opacity,
      }}
    >
      <svg
        ref={svgRef}
        width={containerWidth}
        height={containerHeight}
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid meet"
      >
        {React.isValidElement(src) ? src : null}
      </svg>
    </div>
  );
};

export default SVGFollowMouse;
