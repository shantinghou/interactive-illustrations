import './App.css'
import "./index.css";
import { useState, useEffect } from 'react';

import Sidebar from "./Sidebar";
import Header from './Header';

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
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    // Set initial state
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <div className="flex min-h-screen bg-white" >
      <header className="fixed top-0 left-0 right-0 h-15 bg-white shadow-xs z-60 flex items-center px-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo - centered on mobile, left-aligned on desktop */}
          <div className="mx-auto sm:ml-0">
            <img 
              className="cursor-pointer" 
              width={'100px'} 
              height={'50px'} 
              src="/svggles.png" 
              alt="Svggle Logo" 
              onClick={() => handleTabSelect('Home')}
            />
          </div>
        </div>
      </header>

      <div className="flex pt-16 min-h-screen w-full">
        {/* Sidebar */}
        <Sidebar onTabSelect={handleTabSelect} curTab={selectedTab}/>

        {/* Main Content */}
        <div className={`${isMobile ? `ml-0 w-full pt-10` : `ml-72 w-[calc(100vw-18rem)]`} transition-all duration-300`}>
          {renderContent()}
        </div>
      </div>
    </div>
      
    
  );
}

export default App;
