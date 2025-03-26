import { Star, BookOpen, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  onTabSelect: (tab: string) => void;
  curTab: string;
}

const Sidebar = ({ onTabSelect, curTab }: SidebarProps) => {
  const [isDocumentationOpen, setIsDocumentationOpen] = useState(true);

  return (
    <aside className="w-72 h-screen bg-gray-100 p-4 fixed left-0 top-0 font-body">
      {/* Logo */}
      <div className="mb-6">
        <img 
          className="cursor-pointer" 
          width={'120px'} 
          height={'50px'} 
          src="/svggles.png" 
          alt="SVG Example" 
          onClick={() => onTabSelect('Home')}
        />
      </div>

      {/* Top Menu Items */}
      <nav className="mb-4 space-y-1">
        <button
          className={`cursor-pointer flex items-center gap-2 p-2 rounded-md w-full hover:!bg-gray-200 ${curTab === 'CreatorsHighlights' ? '!bg-gray-200' : ''}`}
          onClick={() => onTabSelect('CreatorsHighlights')}
        >
          <Star size={18} />
          <span>Creators / Highlights</span>
        </button>
        
        <button
          className={`cursor-pointer flex items-center gap-2 p-2 rounded-md w-full hover:!bg-gray-200 ${curTab.startsWith('Documentation') ? '!bg-gray-200' : ''}`}
          onClick={() => {onTabSelect('Documentation')}}
        >
          <BookOpen size={18} />
          <span>Documentation</span>
          {isDocumentationOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>

      </nav>
      {/* Hover Section */}
      {isDocumentationOpen && (
        <>
          <div className="ml-4 text-gray-500 text-sm font-semibold text-left">GETTING STARTED</div>
          <ul className="ml-6 mb-4 text-left">
            <SidebarItem
              title="Installation" 
              onClick={() => onTabSelect('Documentation/GettingStarted/Installation')} 
              isActive={curTab === "Documentation/GettingStarted/Installation"}
              indented
            />
            <SidebarItem
              title="SvgToReact" 
              onClick={() => onTabSelect('Documentation/GettingStarted/SvgToReact')} 
              isActive={curTab === "Documentation/GettingStarted/SvgToReact"}
              indented
            />
          </ul>
        </>
      )}

      {/* Hover Section */}
      {isDocumentationOpen && (
        <>
          <div className="ml-4 text-gray-500 text-sm font-semibold text-left">HOVER</div>
          <ul className="ml-6 mb-4 text-left">
            <SidebarItem 
              title="Animate" 
              onClick={() => onTabSelect('Documentation/Hover/Animate')} 
              isActive={curTab === "Documentation/Hover/Animate"}
              indented
            />
            <SidebarItem 
              title="Glow" 
              onClick={() => onTabSelect('Documentation/Hover/Glow')} 
              isActive={curTab === "Documentation/Hover/Glow"}
              indented
            />
          </ul>
        </>
      )}

      {/* Scroll Section */}
      {isDocumentationOpen && (
        <>
          <div className="ml-4 text-gray-500 text-sm font-semibold text-left">SCROLL</div>
          <ul className="ml-6 mb-4 text-left">
            <SidebarItem 
              title="Rotate" 
              onClick={() => onTabSelect('Documentation/Scroll/Rotate')} 
              isActive={curTab === "Documentation/Scroll/Rotate"}
              indented
            />
            <SidebarItem 
              title="Morph" 
              onClick={() => onTabSelect('Documentation/Scroll/Morph')} 
              isActive={curTab === "Documentation/Scroll/Morph"}
              indented
            />
          </ul>
        </>
      )}

      {/* Mouse-Follow Section */}
      {isDocumentationOpen && (
        <>
          <div className="ml-4 text-gray-500 text-sm font-semibold text-left">MOUSE-FOLLOW</div>
          <ul className="ml-6 mb-4 text-left">
            <SidebarItem 
              title="Cursor" 
              onClick={() => onTabSelect('Documentation/MouseFollow/Cursor')}
              isActive={curTab === "Documentation/MouseFollow/Cursor"}
              indented
            />
            <SidebarItem 
              title="Eye-follow" 
              onClick={() => onTabSelect('Documentation/MouseFollow/EyeFollow')}
              isActive={curTab === "Documentation/MouseFollow/EyeFollow"}
              indented
            />
            <SidebarItem 
              title="Rotate" 
              onClick={() => onTabSelect('Documentation/MouseFollow/Rotate')} 
              isActive={curTab === "Documentation/MouseFollow/Rotate"}
              indented
            />
          </ul>
        </>
      )}
    </aside>
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