import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface RotateObjectProps {
  src: React.ReactNode;
  size?: number;
  speed?: number;
  offset?: number;
  clockwise?: boolean;
  respondsTo?: string; // "mouse" or "scroll"
}

const RotateObject: React.FC<RotateObjectProps> = ({
  src,
  size = 1,
  speed = 0.2,
  offset = 0,
  clockwise = true,
  respondsTo = "scroll"
}) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [viewBox, setViewBox] = React.useState("0 0 100 100"); // Default viewBox

    let baseWidth = 100;
    let baseHeight = 100;

    const rotationRef = useRef(0);

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

    const containerWidth = baseWidth * size;
    const containerHeight = baseHeight * size;

    useEffect(() => {
        const svg = svgRef.current;
        if (!svg) return;

        let targetElement = svg.querySelector(".target");

        if (!targetElement) {
          targetElement = svg;
        }

        // --- Scroll response ---
        if (respondsTo === "scroll") {
            let lastScrollY = window.scrollY;
            // Set initial rotation and transform origin
            gsap.set(targetElement, { rotation: 0, transformOrigin: "50% 50%" });
        
            const handleScroll = () => {
                const currentScrollY = window.scrollY;
                const delta = currentScrollY - lastScrollY;
                lastScrollY = currentScrollY;

                // Calculate the rotation change based on scroll delta and speed.
                let rotationDelta = delta * (speed + 1.0);

                // Reverse rotation if clockwise is false.
                if (!clockwise) {
                    rotationDelta = -rotationDelta;
                }
                // Animate rotation by adding the delta.
                gsap.to(targetElement, { 
                    rotation: `+=${rotationDelta}`, 
                    ease: "power1.out", 
                    transformOrigin:"50% 50%", 
                    duration: speed });
            };
        
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }

        // --- Mouse response ---
        if (respondsTo == "mouse") {
            const handleMouseMove = (event: MouseEvent) => {
                // Get element's bounding rectangle in screen coordinates.
                const rect = targetElement.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
          
                // Compute the angle from the center to the mouse.
                const angleRad = Math.atan2(event.clientY - centerY, event.clientX - centerX);
                // Convert radians to degrees and normalize to [0,360)
                let computedAngle = angleRad * (180 / Math.PI);
                if (computedAngle < 0) computedAngle += 360;
          
                // Retrieve the current continuous rotation.
                const currentRotation = rotationRef.current;
                // Adjust computedAngle by adding multiples of 360 to minimize the jump from currentRotation.
                const continuousTarget =
                  computedAngle + Math.round((currentRotation - computedAngle) / 360) * 360;
          
                // Animate to the new continuous rotation target.
                gsap.to(targetElement, {
                  rotation: continuousTarget + offset,
                  ease: "power1.out",
                  duration: 0.2,
                  transformOrigin:"50% 50%",
                  onComplete: () => {
                    rotationRef.current = continuousTarget;
                  }
                });
              };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        }
  }, [respondsTo, speed, clockwise]);

  return (
    <svg
        ref={svgRef}
        width={containerWidth}
        height={containerHeight}
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid meet"
    >
        {React.isValidElement(src) ? src : null}
    </svg>
  );
};

export default RotateObject;