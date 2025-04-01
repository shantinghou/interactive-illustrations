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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
      case 'Documentation/GettingStarted/SvgToReact': return <SVGToReactGuide onTabSelect={handleTabSelect}/>;
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
      <header className="fixed top-0 left-0 right-0 h-15 shadow-xs z-60 flex items-center px-4 bg-gray-50">
        <div className="flex items-center justify-between w-full ">
          {/* Logo */}
          <img 
              className="cursor-pointer" 
              width={'50px'} 
              height={'50px'} 
              src="/logo.png" 
              alt="Svggle Logo" 
              onClick={() => handleTabSelect('Home')}
          />
          {/* GitHub icon on the right */}
          <a 
            href="https://github.com/shantinghou/interactive-illustrations" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-auto sm:ml-4"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-6 h-6 text-gray-800 hover:text-black transition-colors"
            >
              <path 
                fillRule="evenodd" 
                d="M12 2C6.477 2 2 6.485 2 12.014c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.447-1.27.098-2.647 0 0 .84-.27 2.75 1.026a9.564 9.564 0 0 1 2.5-.336c.849.004 1.704.115 2.5.336 1.91-1.296 2.748-1.026 2.748-1.026.547 1.378.203 2.395.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.918.678 1.852 0 1.337-.012 2.419-.012 2.748 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.014C22 6.485 17.523 2 12 2Z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </div>
        
      </header>

      <div className="flex pt-14 min-h-screen w-full">
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
