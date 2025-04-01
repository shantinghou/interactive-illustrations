import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

type AnimatedOnHoverProps = {
  src: React.ReactElement;
  width?: number;
  height?: number;
  animation?: string;
};

const AnimatedOnHover = ({
  src,
  width = 300,
  height = 300,
  animation = "pulse",
}: AnimatedOnHoverProps) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const wrapperRef = useRef<SVGGElement | null>(null);
  const [viewBox, setViewBox] = useState("0 0 300 300");

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const updateViewBox = () => {
      try {
        const bbox = svg.getBBox();
        if (bbox.width > 0 && bbox.height > 0) {
          const padding = 20;
          setViewBox(
            `${bbox.x - padding} ${bbox.y - padding} ${bbox.width + padding * 2} ${bbox.height + padding * 2}`,
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

    const targets = group.querySelectorAll(`.animate`);

    const animations: {
      el: Element;
      enter: EventListener;
      leave: EventListener;
    }[] = [];

    targets.forEach((el) => {
      let tl: gsap.core.Tween;

      const enter = () => {
        if (animation === "pulse") {
          tl = gsap.to(el, {
            scale: 1.2,
            repeat: -1,
            yoyo: true,
            duration: 0.6,
            ease: "power1.inOut",
          });
        } else if (animation === "spin") {
          tl = gsap.to(el, {
            rotate: 360,
            repeat: -1,
            duration: 1.5,
            ease: "linear",
            transformOrigin: "50% 50%",
          });
        } else if (animation === "wiggle") {
          tl = gsap.to(el, {
            rotation: 5,
            repeat: -1,
            yoyo: true,
            duration: 0.1,
            ease: "power1.inOut",
          });
        } else if (animation === "tilt") {
          tl = gsap.to(el, {
            rotate: 10,
            yoyo: true,
            repeat: -1,
            duration: 0.3,
            ease: "sine.inOut",
            transformOrigin: "50% 50%",
          });
        } else if (animation === "jelly") {
          tl = gsap.to(el, {
            scaleX: 1.2,
            scaleY: 0.8,
            duration: 0.3,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
            transformOrigin: "50% 50%",
          });
        } else if (animation === "pop") {
          tl = gsap.fromTo(
            el,
            { scale: 1 },
            {
              scale: 1.3,
              duration: 0.2,
              ease: "power1.out",
              yoyo: true,
              repeat: 1,
              transformOrigin: "50% 50%",
            },
          );
        }
      };

      const leave = () => {
        if (tl) tl.kill();
        gsap.set(el, { clearProps: "all" });
      };

      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      animations.push({ el, enter, leave });
    });

    return () => {
      animations.forEach(({ el, enter, leave }) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [src, animation]);

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <g ref={wrapperRef} style={{ overflow: "visible" }}>
        {src}
      </g>
    </svg>
  );
};

export default AnimatedOnHover;
