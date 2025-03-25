import { Star, Bell } from "lucide-react";

interface SidebarProps {
  onTabSelect: (tab: string) => void;
  curTab: string;
}

const Sidebar = ({ onTabSelect, curTab }: SidebarProps) => {

  return (
    <aside className="w-72 h-screen bg-gray-100 p-4 fixed left-0 top-0 font-body">
      {/* Logo */}
      <div className="mb-6">
        <img className="cursor-pointer" width={'120px'} height={'50px'} src="/svggles.png" alt="SVG Example" 
            onClick={() => onTabSelect('Home')}
            isActive={curTab === "Home"}/>
      </div>

      {/* Top Menu Items */}
      <nav className="mb-6">
        <button
          className="flex items-center gap-2 p-2 rounded-md w-full hover:bg-gray-200"
          onClick={() => onTabSelect('CreatorsHighlights')}
          isActive={curTab === "CreatorsHighlights"}
        >
          <Star size={18} />
          <span>Creators / Highlights</span>
        </button>
        <button
          className="flex items-center gap-2 p-2 rounded-md w-full hover:bg-gray-200"
          onClick={() => onTabSelect('SvgToReact')}
          isActive={curTab === "SvgToReact"}
        >
          <Bell size={18} />
          <span>SVG to React</span>
        </button>
      </nav>

      {/* Category Sections */}
      <div className="text-gray-500 text-sm font-semibold text-left">HOVER</div>
      <ul className="ml-4 mb-4 text-left">
        <SidebarItem title="Color" onClick={onTabSelect} isActive={curTab === "Color"}/>
        <SidebarItem title="Glow" onClick={onTabSelect} isActive={curTab === "Glow"}/>
        {/* <SidebarItem title="React - pulse, spin, bounce" onClick={onTabSelect} /> */}
      </ul>

      <div className="text-gray-500 text-sm font-semibold text-left">SCROLL</div>
      <ul className="ml-4 mb-4 text-left">
        <SidebarItem title="Rotate" onClick={() => onTabSelect('Rotate-scroll')} isActive={curTab === "Rotate-scroll"}/>
        <SidebarItem title="Morph" onClick={onTabSelect} isActive={curTab === "Morph"}/>
      </ul>

      <div className="text-gray-500 text-sm font-semibold text-left">MOUSE-FOLLOW</div>
      <ul className="ml-4 mb-4 text-left">
        <SidebarItem title="Cursor" onClick={onTabSelect} isActive={curTab === "Cursor"}/>
        <SidebarItem title="Eye-follow" onClick={onTabSelect} isActive={curTab === "Eye-follow"}/>
        <SidebarItem title="Rotate" onClick={() => onTabSelect('Rotate-mouse')} isActive={curTab === "Rotate-mouse"}/>
        {/* <SidebarItem title="Avoidant" onClick={onTabSelect} isActive={curTab === "Avoidant"}/> */}
      </ul>
    </aside>
  );
};

interface SidebarItemProps {
  title: string;
  onClick: (tab: string) => void;
  isActive?: boolean;
}

const SidebarItem = ({ title, onClick, isActive = false }: SidebarItemProps) => {
  return (
    <li
      className={`p-2 rounded-md hover:bg-gray-200 cursor-pointer ${isActive ? 'bg-gray-200' : ''}`}
      onClick={() => onClick(title)}
    >
      {title}
    </li>
  );
};

export default Sidebar;
