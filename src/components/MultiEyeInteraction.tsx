import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

interface MultiEyeInteractionProps {
  src: React.ReactNode;
  speed?: number;
  width?: string;
  height?: string;
  responsiveness?: number;
}

const constrain = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const mapValue = (
  value: number,
  start1: number,
  stop1: number,
  start2: number,
  stop2: number
) =>
  ((value - start1) * (stop2 - start2)) / (stop1 - start1) + start2;

const distance = (x1: number, y1: number, x2: number, y2: number) =>
  Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

const MultiEyeInteraction: React.FC<MultiEyeInteractionProps> = ({
  src,
  speed = 0.2,
  width = "100%",
  height = "100%",
  responsiveness = 1.0,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [viewBox, setViewBox] = useState("0 0 100 100"); // Default viewBox

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

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = svg.getBoundingClientRect();
      const vb = svg.viewBox.baseVal;

      // Convert mouse coordinates to SVG space
      const mouseX =
        vb.x + ((event.clientX - rect.left) / rect.width) * vb.width;
      const mouseY =
        vb.y + ((event.clientY - rect.top) / rect.height) * vb.height;

      // Select all eye groups by class
      const eyes = svg.querySelectorAll(".eye");
      eyes.forEach((eye) => {
        const bounding = eye.querySelector(".bounding") as SVGCircleElement;
        const moving = eye.querySelector(".moving") as SVGCircleElement;
        if (!bounding || !moving) return;

        // Get the eye's center and radii
        const centerX = parseFloat(bounding.getAttribute("cx") || "0");
        const centerY = parseFloat(bounding.getAttribute("cy") || "0");
        const boundingRadius = parseFloat(bounding.getAttribute("r") || "0");
        const movingRadius = parseFloat(moving.getAttribute("r") || "0");

        const dx = mouseX - centerX;
        const dy = mouseY - centerY;
        const angle = Math.atan2(dy, dx);

        // Create a translation range based on the responsiveness and window size
        const minXTranslation = centerX - responsiveness * window.innerWidth;
        const maxXTranslation = centerX + responsiveness * window.innerWidth;
        const minYTranslation = centerY - responsiveness * window.innerHeight;
        const maxYTranslation = centerY + responsiveness * window.innerHeight;

        const cx = constrain(mouseX, minXTranslation, maxXTranslation);
        const cy = constrain(mouseY, minYTranslation, maxYTranslation);

        // Creates an offset illusion for the pupil movement
        const x = mapValue(cx, minXTranslation, maxXTranslation, centerX - 100, centerX + 100);
        const y = mapValue(cy, minYTranslation, maxYTranslation, centerY - 100, centerY + 100);

        const maxOffset = boundingRadius - movingRadius;
        const d = constrain(distance(x, y, centerX, centerY), 0, maxOffset);

        // Compute the new pupil center based on the angle and constrained distance
        const newCx = centerX + d * Math.cos(angle);
        const newCy = centerY + d * Math.sin(angle);

        // Animate the pupil movement using GSAP
        gsap.to(moving, {
          attr: { cx: newCx, cy: newCy },
          duration: speed,
          ease: "power1.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [viewBox, speed, responsiveness, src]);

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
    >
      {React.isValidElement(src) ? src : null}
    </svg>
  );
};

export default MultiEyeInteraction;