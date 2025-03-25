import { SvgFollowMouse } from "interactive-illustrations";
import { useState } from "react";

const BIRD = () => (
    <svg viewBox="0 0 329 116" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_280_49)">
            <path d="M73.5 84C74.34 84 75.1737 83.9731 76.0003 83.9201L76 84C76 101.673 116.071 116 165.5 116C214.929 116 255 101.673 255 84C255 83.1449 254.906 82.2976 254.722 81.4594C274.946 75.5355 293.328 70.3978 306.5 68.5C365.5 60 296.5 19.5 241 13C205.794 8.87672 163.44 33.194 136.276 53.7448C126.491 54.9528 117.474 56.7507 109.559 59.0194C111.137 54.8131 112 50.2573 112 45.5C112 24.237 94.763 7 73.5 7C54.5821 7 38.8511 20.6446 35.6113 38.6294L0 53.5L40.3059 65.016C46.9998 76.3768 59.3596 84 73.5 84Z" fill="#D9D9D9"/>
        </g>
        <defs>
            <clipPath id="clip0_280_49">
                <rect width="329" height="116" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)

export default function ExampleMouseFollow() {
    const [on, setOn] = useState(false)
  return (
    <div className="flex flex-col items-center">
        {on ? (
            <SvgFollowMouse src={<BIRD />} delay={0.9} size={1.7} opacity={0.7} />
        ) : (
            <BIRD className="w-50 h-auto"/>
        )}
        <p
            className="bg-gray-300 rounded-md p-2 mt-5 w-fit cursor-pointer hover:bg-gray-400"
            onClick={() => setOn(!on)}
        >
            {on ? "De-activate" : "Activate"}
        </p>
    </div>
  )
}