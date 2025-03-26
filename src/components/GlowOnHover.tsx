import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

type GlowOnHoverProps = {
  src: React.ReactElement;
  width?: number;
  height?: number;
  scaleFactor?: number;
  color?: string;
};

const GlowOnHover = ({
  src,
  width = 300,
  height = 300,
  scaleFactor = 1.2,
  color = "#D9D9D9"
}: GlowOnHoverProps) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const wrapperRef = useRef<SVGGElement | null>(null);
  const [viewBox, setViewBox] = useState("0 0 300 300"); // use a safe default

  // Dynamically update viewBox
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const updateViewBox = () => {
      try {
        const bbox = svg.getBBox();
        if (bbox.width > 0 && bbox.height > 0) {
          const padding = 20; // give breathing room for glow
          setViewBox(
            `${bbox.x - padding} ${bbox.y - padding} ${bbox.width} ${bbox.height}`
          );
        }
      } catch (e) {
        console.warn("getBBox failed:", e);
      }
    };

    updateViewBox();
  }, [src]);

  useEffect(() => {
    const group = wrapperRef.current;
    if (!group) return;

    const glowElements = group.querySelectorAll(".glow");

    const handleEnter = (el: Element) => () =>
      gsap.to(el, {
        scale: scaleFactor,
        filter: `drop-shadow(0px 0px 10px ${color})`,
        transformOrigin: "50% 50%",
        duration: 0.5
      });

    const handleLeave = (el: Element) => () =>
      gsap.to(el, {
        scale: 1,
        filter: "none",
        duration: 0.3
      });

    const listeners: { el: Element; enter: EventListener; leave: EventListener }[] = [];

    glowElements.forEach((el) => {
      const enter = handleEnter(el);
      const leave = handleLeave(el);
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      listeners.push({ el, enter, leave });
    });

    return () => {
      listeners.forEach(({ el, enter, leave }) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [src, scaleFactor, color]);

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible"}}
    >
      <g ref={wrapperRef} style={{ overflow: "visible" }}>
        {src}
      </g>
    </svg>
  );
};

export default GlowOnHover;
