import React from "react";
import { MultiEyeInteraction } from "interactive-illustrations";

const Caricature = () => (
    <svg width="324" height="324" viewBox="0 0 324 324" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="eye" clipPath="url(#clip0_276_10)">
        <circle cx="162" cy="162" r="162" fill="#D23691" />
        <circle className="bounding" cx="211.5" cy="195.5" r="96.5" fill="white" />
        <circle className="moving" cx="251.5" cy="221.5" r="48.5" fill="black" />
      </g>
      <defs>
        <clipPath id="clip0_276_10">
          <rect width="324" height="324" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

export default function App() {
  return (
    <MultiEyeInteraction
      src={<Caricature/>} 
      width="200px" 
      height="auto" 
      responsiveness={0.3}
    />
  );
}