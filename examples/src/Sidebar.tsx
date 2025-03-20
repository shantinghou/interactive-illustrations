import { Star, Bell } from "lucide-react";

interface SidebarProps {
  onTabSelect: (tab: string) => void;
}

const Sidebar = ({ onTabSelect }: SidebarProps) => {
  return (
    <aside className="w-72 h-screen bg-gray-100 p-4 fixed left-0 top-0 font-body">
      {/* Logo */}
      <div className="mb-6">
        <img className="cursor-pointer" width={'120px'} height={'50px'} src="/svggles.png" alt="SVG Example" 
            onClick={() => onTabSelect('Home')}/>
      </div>

      {/* Top Menu Items */}
      <nav className="mb-6">
        <button
          className="flex items-center gap-2 p-2 rounded-md w-full hover:bg-gray-200"
          onClick={() => onTabSelect('CreatorsHighlights')}
        >
          <Star size={18} />
          <span>Creators / Highlights</span>
        </button>
        <button
          className="flex items-center gap-2 p-2 rounded-md w-full hover:bg-gray-200"
          onClick={() => onTabSelect('SvgToReact')}
        >
          <Bell size={18} />
          <span>SVG to React</span>
        </button>
      </nav>

      {/* Category Sections */}
      <div className="text-gray-500 text-sm font-semibold text-left">HOVER</div>
      <ul className="ml-4 mb-4 text-left">
        <SidebarItem title="Color" onClick={onTabSelect} />
        <SidebarItem title="Glow" onClick={onTabSelect} />
        {/* <SidebarItem title="React - pulse, spin, bounce" onClick={onTabSelect} /> */}
      </ul>

      <div className="text-gray-500 text-sm font-semibold text-left">SCROLL</div>
      <ul className="ml-4 mb-4 text-left">
        <SidebarItem title="Rotate" onClick={() => onTabSelect('Rotate-scroll')} />
        <SidebarItem title="Morph" onClick={onTabSelect} />
      </ul>

      <div className="text-gray-500 text-sm font-semibold text-left">MOUSE-FOLLOW</div>
      <ul className="ml-4 mb-4 text-left">
        <SidebarItem title="Cursor" onClick={onTabSelect} />
        <SidebarItem title="Eye-follow" onClick={onTabSelect} />
        <SidebarItem title="Rotate" onClick={() => onTabSelect('Rotate-mouse')}/>
        <SidebarItem title="Avoidant" onClick={onTabSelect} />
      </ul>
    </aside>
  );
};

interface SidebarItemProps {
  title: string;
  onClick: (tab: string) => void;
}

const SidebarItem = ({ title, onClick }: SidebarItemProps) => {
  return (
    <li
      className="p-2 rounded-md hover:bg-gray-200 cursor-pointer"
      onClick={() => onClick(title)}
    >
      {title}
    </li>
  );
};

export default Sidebar;
