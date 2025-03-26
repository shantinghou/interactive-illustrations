import './App.css'
import "./index.css";
import { useState, useEffect } from 'react';

import Sidebar from "./Sidebar";
import Header from './Header';

import { FakeCursor } from './assets/example-svg';
import { SvgFollowMouse } from "interactive-illustrations";

import { eyeFollowFile, mouseRotateFile, scrollRotateFile, followCursorFile, scrollOnMorphFile, glowOnHoverFile, hoverAnimateFile } from "./example-interactions";
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
      // Hover
      case 'CreatorsHighlights': return <div/>;
      case 'SvgToReact': return <div/>;

      // Hover
      case 'Animate': return <FeaturePage featureFile={hoverAnimateFile}/>;
      case 'Glow': return <FeaturePage featureFile={glowOnHoverFile}/>;

      // Scroll
      case 'Rotate-scroll': return <FeaturePage featureFile={scrollRotateFile}/>;
      case 'Morph': return <FeaturePage featureFile={scrollOnMorphFile}/>;

      // Mouse
      case 'Cursor': return <FeaturePage featureFile={followCursorFile}/>;
      case 'Eye-follow': return <FeaturePage featureFile={eyeFollowFile}/>;
      case 'Rotate-mouse': return <FeaturePage featureFile={mouseRotateFile}/>;
      // case 'Avoidant': return <div/>;

      // add other cases...
      default: return <Header/>;
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
