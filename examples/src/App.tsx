import './App.css'
import "./index.css";
import Sidebar from "./Sidebar";
import { FakeCursor } from './assets/example-svg';
import { SvgFollowMouse } from "interactive-illustrations";
import { useState } from 'react';
import Header from './Header';
import { ExampleEyeInteraction, ExampleMouseFollow, ExampleMouseRotateObject, ExampleScrollRotateObject } from './example-interactions';

function App() {
  const [selectedTab, setSelectedTab] = useState<string>('Header');

  const renderContent = () => {
    switch (selectedTab) {
      // Hover
      case 'CreatorsHighlights': return <div/>;
      case 'SvgToReact': return <div/>;

      // Hover
      case 'Color': return <div/>;
      case 'Glow': return <div/>;

      // Scroll
      case 'Rotate-mouse': return <ExampleMouseRotateObject/>;
      case 'Morph': return <div/>;

      // Mouse
      case 'Cursor': return <ExampleMouseFollow/>;
      case 'Eye-follow': return <ExampleEyeInteraction/>;
      case 'Rotate-scroll': return <ExampleScrollRotateObject/>;
      case 'Avoidant': return <div/>;

      // add other cases...
      default: return <Header/>;
    }
  };

  return (
    <div 
      className="flex min-h-screen"
    >
      {/* Sidebar */}
      <Sidebar onTabSelect={setSelectedTab}/>

      {/* Main Content */}
      <div className="ml-72 w-full h-screen">
        {renderContent()}
      </div>
      <SvgFollowMouse
        src={<FakeCursor/>}
        delay={0.4} 
        size={0.3}
        opacity={1.0}
      />
    </div>
      
    
  );
}

export default App;
