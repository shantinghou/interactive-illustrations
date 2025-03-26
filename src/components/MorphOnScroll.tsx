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
};

const MorphOnScroll = ({
  startPath,
  endPath,
  width = 300,
  height = 300,
  viewBox = "0 0 300 300",
  color = "#D9D9D9",
  scrollSpeed = 1,
}: MorphOnScrollProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [morphedPath, setMorphedPath] = useState(startPath);

  useEffect(() => {
    const interpolator = interpolate(startPath, endPath, { maxSegmentLength: 0.5 });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight - windowHeight;

      // Adjust scroll progress by scrollSpeed
      let progress = scrollY / (docHeight * scrollSpeed);
      progress = Math.min(Math.max(progress, 0), 1); // clamp between 0 and 1

      setMorphedPath(interpolator(progress));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // call once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [startPath, endPath, scrollSpeed]);

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
