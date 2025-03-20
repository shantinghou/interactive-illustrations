import { RotateObject } from "interactive-illustrations";

const ARROW = () => (
    <svg width="65" height="55" viewBox="0 0 65 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M64.9955 2.09522C65.048 1.54544 64.645 1.05713 64.0952 1.00455L55.1361 0.147587C54.5863 0.0949998 54.098 0.498051 54.0454 1.04783C53.9928 1.5976 54.3959 2.08591 54.9457 2.1385L62.9093 2.90024L62.1476 10.8639C62.095 11.4137 62.498 11.902 63.0478 11.9546C63.5976 12.0072 64.0859 11.6041 64.1385 11.0543L64.9955 2.09522ZM1.63657 54.7712L64.6366 2.77122L63.3634 1.22878L0.363435 53.2288L1.63657 54.7712Z" fill="black"/>
    </svg>
)

const INSIDEARROW = () => (
    <svg width="360" height="362" viewBox="0 0 360 362" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="180" cy="181" r="158" fill="#D9D9D9"/>
        <path className="rotate" d="M250.996 120.123C251.064 119.02 250.225 118.072 249.123 118.004L231.157 116.898C230.054 116.83 229.106 117.669 229.038 118.772C228.97 119.874 229.809 120.823 230.911 120.891L246.881 121.873L245.898 137.843C245.83 138.946 246.669 139.894 247.772 139.962C248.874 140.03 249.823 139.191 249.891 138.089L250.996 120.123ZM112.325 243.498L250.325 121.498L247.675 118.502L109.675 240.502L112.325 243.498Z" fill="black"/>
    </svg>

);

export default function ExampleRotateObject() {
  return (
    <div className="inline">
        {/* rotate whole svg */}
        <RotateObject src={<ARROW/>} size={1.0} respondsTo={"mouse"} offset={45}/>
        
        {/* only rotate the arrow inside the circle */}
        <RotateObject src={<INSIDEARROW/>} size={1.0} respondsTo={"mouse"} offset={45} targetClassName={"rotate"}/>
    </div>
  );
}