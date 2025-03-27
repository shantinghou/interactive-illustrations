import './App.css'
import "./index.css";
import { useState, useEffect } from 'react';

import Sidebar from "./Sidebar";
import Header from './Header';

// import { FakeCursor } from './assets/example-svg';
// import { SvgFollowMouse } from "interactive-illustrations";

import { eyeFollowFile, 
        mouseRotateFile, 
        scrollRotateFile, 
        followCursorFile, 
        scrollOnMorphFile, 
        glowOnHoverFile, 
        hoverAnimateFile } from "./example-interactions";

import { CreatorHighlights, SVGToReactGuide, GettingStarted } from "./pages";
import { FeaturePage } from "./components/FeaturePage.tsx";

function App() {
  const [selectedTab, setSelectedTab] = useState("Header");

  // Update URL when tab changes
  const handleTabSelect = (tab: string) => {
    setSelectedTab(tab);
    const params = new URLSearchParams(window.location.search);
    params.set('tab', tab);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  };

  // Read tab from URL on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabFromURL = params.get('tab');
    if (tabFromURL) {
      setSelectedTab(tabFromURL);
    }
  }, []);

  const renderContent = () => {
    switch (selectedTab) {
      // Main
      case 'CreatorsHighlights': return <CreatorHighlights/>;
      case 'Documentation/GettingStarted/Installation': return <GettingStarted onTabSelect={handleTabSelect}/>;
      case 'Documentation/GettingStarted/SvgToReact': return <SVGToReactGuide/>;
      case 'Documentation': return <GettingStarted onTabSelect={handleTabSelect}/>;

      // Hover
      case 'Documentation/Hover/Animate': return <FeaturePage featureFile={hoverAnimateFile}/>;
      case 'Documentation/Hover/Glow': return <FeaturePage featureFile={glowOnHoverFile}/>;

      // Scroll
      case 'Documentation/Scroll/Rotate': return <FeaturePage featureFile={scrollRotateFile}/>;
      case 'Documentation/Scroll/Morph': return <FeaturePage featureFile={scrollOnMorphFile}/>;

      // Mouse
      case 'Documentation/MouseFollow/Cursor': return <FeaturePage featureFile={followCursorFile}/>;
      case 'Documentation/MouseFollow/EyeFollow': return <FeaturePage featureFile={eyeFollowFile}/>;
      case 'Documentation/MouseFollow/Rotate': return <FeaturePage featureFile={mouseRotateFile}/>;
      // case 'Avoidant': return <div/>;

      // add other cases...
      default: return <Header onTabSelect={handleTabSelect}/>;
    }
  };

  return (
    <div 
      className="flex min-h-screen"
    >
      {/* Sidebar */}
      <Sidebar onTabSelect={handleTabSelect} curTab={selectedTab}/>

      {/* Main Content */}
      <div className="ml-72 w-full">
        {renderContent()}
      </div>
      {/* <SvgFollowMouse
        src={<FakeCursor/>}
        delay={0.4} 
        size={0.3}
        opacity={1.0}
      /> */}
    </div>
      
    
  );
}

export default App;
