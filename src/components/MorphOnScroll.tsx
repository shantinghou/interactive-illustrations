
import { useEffect, useRef, useState } from "react";
import { interpolate } from "flubber";

type MorphOnScrollProps = {
  startPath: string;
  endPath: string;
  width?: number;
  height?: number;
  viewBox?: string;
  color?: string;
  scrollSpeed?: number; // Higher = slower morph
  containerId?: string; // ID of the container to track scrolling in
  scrollStartOffset?: number; // When to start the morph (px from top of container)
  scrollEndOffset?: number; // When to end the morph (px from top of container)
};

const MorphOnScroll = ({
  startPath,
  endPath,
  width = 300,
  height = 300,
  viewBox = "0 0 300 300",
  color = "#D9D9D9",
  scrollSpeed = 1,
  containerId,
  scrollStartOffset = 0,
  scrollEndOffset,
}: MorphOnScrollProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [morphedPath, setMorphedPath] = useState(startPath);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const interpolator = interpolate(startPath, endPath, { maxSegmentLength: 0.5 });

    // Find the container if specified, otherwise use window
    if (containerId) {
      containerRef.current = document.getElementById(containerId);
    }

    const handleScroll = () => {
      const isContainerScroll = !!containerRef.current;
      
      // Get scroll values based on whether we're using a container or window
      const scrollY = isContainerScroll 
        ? containerRef.current!.scrollTop 
        : window.scrollY;
      
      // Get the height values based on container or window
      const viewportHeight = isContainerScroll 
        ? containerRef.current!.clientHeight 
        : window.innerHeight;
      
      const totalHeight = isContainerScroll
        ? containerRef.current!.scrollHeight - viewportHeight
        : document.body.scrollHeight - viewportHeight;
      
      // Calculate the start and end scroll positions
      const start = scrollStartOffset;
      const end = scrollEndOffset ?? totalHeight;
      const scrollRange = end - start;
      
      // Calculate progress within the scroll range
      let progress = (scrollY - start) / (scrollRange * scrollSpeed);
      progress = Math.min(Math.max(progress, 0), 1); // clamp between 0 and 1

      setMorphedPath(interpolator(progress));
    };

    // Add scroll listener to the appropriate element
    const scrollElement = containerRef.current || window;
    scrollElement.addEventListener("scroll", handleScroll);
    
    // Initial calculation
    handleScroll();

    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, [startPath, endPath, scrollSpeed, containerId, scrollStartOffset, scrollEndOffset]);

  return ( 
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={morphedPath} fill={color} />
    </svg>
  );
};

export default MorphOnScroll;