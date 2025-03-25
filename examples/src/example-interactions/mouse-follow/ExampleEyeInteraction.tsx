import { MultiEyeInteraction } from "interactive-illustrations";

const Example = () => (
    <svg width="208" height="187" viewBox="0 0 208 187" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="208" height="187" rx="25" fill="#7BB7DD"/>
      <g className="eye">
        <circle className="bounding" cx="57.5" cy="127.5" r="33.5" fill="white"/>
        <circle className="moving" cx="57.5" cy="132.5" r="15.5" fill="black"/>
      </g>
      <g className="eye">
        <circle className="bounding" cx="149.5" cy="127.5" r="33.5" fill="white"/>
        <circle className="moving" cx="149.5" cy="132.5" r="15.5" fill="black"/>
      </g>
    </svg>
    
  );

export default function ExampleEyeInteraction() {
  return (
    <MultiEyeInteraction
      src={<Example/>} 
      width="200px" 
      height="auto" 
      responsiveness={0.3}
    />
  );
}