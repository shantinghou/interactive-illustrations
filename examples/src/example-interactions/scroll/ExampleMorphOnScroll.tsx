import { MorphOnScroll } from "interactive-illustrations";

const EXAMPLE = () => (
  <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M127 63.5C127 98.5701 98.5701 127 63.5 127C28.4299 127 0 98.5701 0 63.5C0 28.4299 28.4299 0 63.5 0C98.5701 0 127 28.4299 127 63.5Z" fill="#F2D14D"/>
  </svg>  
);


export default function ExampleMorphOnScroll() {
  return (
    <>
    <div className="border-1 border-gray-200"  id="scroll-container relative" style={{ height: "200px", width: "200px", overflow: "auto" }}>
          <div style={{ width: "300px", height: "1500px" }}>
            <div className="sticky top-0 left-0">
              <MorphOnScroll
                startPath="M127 63.5C127 98.5701 98.5701 127 63.5 127C28.4299 127 0 98.5701 0 63.5C0 28.4299 28.4299 0 63.5 0C98.5701 0 127 28.4299 127 63.5Z"
                endPath="M125.041 2.05954C76.8738 -11.7512 70.8803 47.2734 73.9046 78.512C67.5812 48.6435 47.1816 -1.22874 16.1696 38.2306C-14.8425 77.6899 31.2904 100.16 58.2334 106.462C28.8159 109.477 -21.9361 123.397 10.3956 154.964C42.7273 186.532 68.4058 147.84 77.2035 124.548C70.6052 151.95 68.1308 202.809 111.02 187.025C153.909 171.241 130.54 131.124 113.494 113.039C139.063 131.124 189.54 155.129 186.9 106.462C184.261 57.7959 133.564 75.2237 108.545 90.021C134.114 66.455 173.209 15.8703 125.041 2.05954Z"
                containerId="scroll-container"
                color="#F2D14D"
                scrollStartOffset={100}  // Start morphing after 100px of scrolling
                scrollEndOffset={400}    // Complete the morph by 400px of scrolling
              />
            </div>
          </div>
        </div>
    </>
  );
}