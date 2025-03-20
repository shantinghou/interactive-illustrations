import Viewbox from './assets/design/viewbox.svg';
import { Blue, Red, Yellow } from './assets/example-svg';
import { MultiEyeInteraction } from "interactive-illustrations";
import bgScribble from './assets/design/background-scribbles.png';

export default function Header() {
    return (
        <div 
            className="bg-cover bg-right-top p-10 text-center justify-items-center items-center h-screen"
            style={{ backgroundImage: `url(${bgScribble})`}}
            >
            <h1 className="text-8xl mt-40 mb-4 font-display text-center">WELCOME</h1>
            <div className="flex flex-row flex-wrap justify-center gap-0 ">
                <div className="justify-items-center">
                    <MultiEyeInteraction
                    src={<Blue/>} 
                    width="150px" 
                    height="auto" 
                    responsiveness={1}
                    />
                </div>
                <div className="justify-items-center">
                    <MultiEyeInteraction
                    src={<Yellow/>} 
                    width="150px" 
                    height="auto" 
                    responsiveness={1}
                    />
                </div>
                <div className="justify-items-center">
                    <MultiEyeInteraction
                    src={<Red/>} 
                    width="140px" 
                    height="auto" 
                    responsiveness={1}
                    />
                </div>
            </div>
            <div className="relative p-5">
                <img src={Viewbox} alt="Your SVG" className="w-full h-auto"/>
                <h3 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/8 text-2xl font-subtitle underline underline-offset-4 w-full p-20">SVggles is a React utility package for creating interactive illustrations using SVGs.</h3>
            </div>
        </div>
    )
}