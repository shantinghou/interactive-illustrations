import { Star, BookOpen, ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface SidebarProps {
  onTabSelect: (tab: string) => void;
  curTab: string;
}

const Sidebar = ({ onTabSelect, curTab }: SidebarProps) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
      if (window.innerWidth >= 1000) {
        setIsMobileMenuOpen(false);
      }
    };

    // Set initial state
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTabSelect = (tab: string) => {
    onTabSelect(tab);
    if (isMobile) setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Hamburger button for mobile */}
      {isMobile && (
          <button 
            className={`fixed top-17 z-50 p-2 bg-gray-100 rounded-md shadow-md ${isMobileMenuOpen ? 'left-74' : 'left-4'}`}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24}/> : <Menu size={24} />}
          </button>
      )}
      <aside 
        className={`${isMobile ? 'w-72 fixed left-0 top-14 z-40 transform transition-transform duration-300 ease-in-out' : 'w-72 z-20 fixed left-0 top-14'} 
        ${isMobile && !isMobileMenuOpen ? '-translate-x-full' : 'translate-x-0'} 
        bg-[#F3F3F3] p-4 font-body h-screen overflow-y-auto`}
        >

        {/* Top Menu Items */}
        <nav className="mb-4 space-y-1">
          <button
            className={`cursor-pointer flex items-center gap-2 p-2 rounded-md w-full hover:!bg-gray-200 ${curTab === 'CreatorsHighlights' ? '!bg-gray-200' : ''}`}
            onClick={() => handleTabSelect('CreatorsHighlights')}
          >
            <Star size={18} />
            <span>Creators / Highlights</span>
          </button>
          
          <button
            className={`cursor-pointer flex items-center gap-2 p-2 rounded-md w-full hover:!bg-gray-200 ${curTab.startsWith('Documentation') ? '!bg-gray-200' : ''}`}
            onClick={() => {handleTabSelect('Documentation/GettingStarted/Installation')}}
          >
            <BookOpen size={18} />
            <span>Documentation</span>
            {<ChevronDown size={16} />}
          </button>

        </nav>
        {/* Hover Section */}
        {(
          <>
            <div className="ml-4 text-gray-500 text-sm font-semibold text-left">GETTING STARTED</div>
            <ul className="ml-6 mb-4 text-left">
              <SidebarItem
                title="Installation" 
                onClick={() => handleTabSelect('Documentation/GettingStarted/Installation')} 
                isActive={curTab === "Documentation/GettingStarted/Installation"}
                indented
              />
              <SidebarItem
                title="SvgToReact" 
                onClick={() => handleTabSelect('Documentation/GettingStarted/SvgToReact')} 
                isActive={curTab === "Documentation/GettingStarted/SvgToReact"}
                indented
              />
            </ul>
          </>
        )}

        {/* Hover Section */}
        {(
          <>
            <div className="ml-4 text-gray-500 text-sm font-semibold text-left">HOVER</div>
            <ul className="ml-6 mb-4 text-left">
              <SidebarItem 
                title="Animate" 
                onClick={() => handleTabSelect('Documentation/Hover/Animate')} 
                isActive={curTab === "Documentation/Hover/Animate"}
                indented
              />
              <SidebarItem 
                title="Glow" 
                onClick={() => handleTabSelect('Documentation/Hover/Glow')} 
                isActive={curTab === "Documentation/Hover/Glow"}
                indented
              />
            </ul>
          </>
        )}

        {/* Scroll Section */}
        {(
          <>
            <div className="ml-4 text-gray-500 text-sm font-semibold text-left">SCROLL</div>
            <ul className="ml-6 mb-4 text-left">
              <SidebarItem 
                title="Rotate" 
                onClick={() => handleTabSelect('Documentation/Scroll/Rotate')} 
                isActive={curTab === "Documentation/Scroll/Rotate"}
                indented
              />
              <SidebarItem 
                title="Morph" 
                onClick={() => handleTabSelect('Documentation/Scroll/Morph')} 
                isActive={curTab === "Documentation/Scroll/Morph"}
                indented
              />
            </ul>
          </>
        )}

        {/* Mouse-Follow Section */}
        {(
          <>
            <div className="ml-4 text-gray-500 text-sm font-semibold text-left">MOUSE-FOLLOW</div>
            <ul className="ml-6 mb-4 text-left">
              <SidebarItem 
                title="Cursor" 
                onClick={() => handleTabSelect('Documentation/MouseFollow/Cursor')}
                isActive={curTab === "Documentation/MouseFollow/Cursor"}
                indented
              />
              <SidebarItem 
                title="Eye-follow" 
                onClick={() => handleTabSelect('Documentation/MouseFollow/EyeFollow')}
                isActive={curTab === "Documentation/MouseFollow/EyeFollow"}
                indented
              />
              <SidebarItem 
                title="Rotate" 
                onClick={() => handleTabSelect('Documentation/MouseFollow/Rotate')} 
                isActive={curTab === "Documentation/MouseFollow/Rotate"}
                indented
              />
            </ul>
          </>
        )}
      </aside>
      {/* Overlay for mobile when sidebar is open
      {isMobile && isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
      )} */}
    </>
  );
};

interface SidebarItemProps {
  title: string;
  onClick: (tab: string) => void;
  isActive?: boolean;
  indented?: boolean;
}

const SidebarItem = ({ title, onClick, isActive = false, indented = false }: SidebarItemProps) => {
  return (
    <li
      className={`p-2 rounded-md hover:bg-gray-200 cursor-pointer ${isActive ? 'bg-gray-200' : ''} ${indented ? 'pl-4' : ''}`}
      onClick={() => onClick(`Documentation/${title.replace(' ', '')}`)}
    >
      {title}
    </li>
  );
};

export default Sidebar;