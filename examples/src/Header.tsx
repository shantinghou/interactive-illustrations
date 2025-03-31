import { Blue, Red, Yellow } from './assets/example-svg';
import { MultiEyeInteraction } from "interactive-illustrations";
import bgScribble from './assets/design/background-scribbles.png';

interface HeaderProps {
    onTabSelect: (tabId: string) => void; // adjust type as needed
}

export default function Header({ onTabSelect }: HeaderProps) {
    return (
        <div 
            className="bg-cover bg-right-top p-10 text-center justify-items-center items-center h-screen"
            style={{ backgroundImage: `url(${bgScribble})`}}
            >
            <h1 className="mt-5 md:mt-10 lg:mt-20 mb-4 font-display text-center text-4xl md:text-6xl lg:text-8xl">WELCOME</h1>
            <div className="flex flex-row flex-wrap justify-center gap-0 p-10">
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
            <div className="p-5 space-y-5">
                <h3 className="text-lg md:text-2xl font-subtitle w-full lg:px-20">Svggles is a React utility package for creating interactive illustrations using SVGs.</h3>
                <p className="text-sm md:text-md font-code underline underline-offset-4">Svggles is published as the `interactive-illustrations` npm package.</p>
            </div>
            <div className="p-5">
                <p 
                    className="cursor-pointer rounded-md bg-[#213547] text-white font-body font-bold p-3 hover:bg-[#2c4a5e] transition-colors" 
                    onClick={() => {onTabSelect('Documentation/GettingStarted/Installation')}}
                >
                    Get Started
                </p>
            </div>
        </div>
    )
}