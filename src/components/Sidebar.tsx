import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingCart,
  FolderKanban,
  GraduationCap,
  User,
  FileText,
  Users,
  Store,
  FileText as Blog,
  Share2,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['dashboards', 'pages']);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  const menuSections = [
    {
      id: 'favorites',
      title: 'Favorites',
      items: [
        { label: 'Overview', path: '/', icon: LayoutDashboard },
        { label: 'Projects', path: '/projects', icon: FolderKanban },
      ],
    },
    {
      id: 'recently',
      title: 'Recently',
      items: [],
    },
    {
      id: 'dashboards',
      title: 'Dashboards',
      items: [
        { label: 'Default', path: '/', icon: LayoutDashboard },
        { label: 'eCommerce', path: '/ecommerce', icon: ShoppingCart },
        { label: 'Projects', path: '/projects', icon: FolderKanban },
        { label: 'Online Courses', path: '/courses', icon: GraduationCap },
      ],
    },
    {
      id: 'pages',
      title: 'Pages',
      items: [
        { label: 'User Profile', path: '/profile', icon: User },
        { label: 'Overview', path: '/', icon: LayoutDashboard },
        { label: 'Projects', path: '/projects', icon: FolderKanban },
        { label: 'Campaigns', path: '/campaigns', icon: FileText },
        { label: 'Documents', path: '/documents', icon: FileText },
        { label: 'Followers', path: '/followers', icon: Users },
        { label: 'Account', path: '/account', icon: User },
        { label: 'Corporate', path: '/corporate', icon: Store },
        { label: 'Blog', path: '/blog', icon: Blog },
        { label: 'Social', path: '/social', icon: Share2 },
      ],
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">BW</div>
          <span className="logo-text">ByeWind</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuSections.map((section) => (
          <div key={section.id} className="nav-section">
            <div
              className="nav-section-header"
              onClick={() => section.items.length > 0 && toggleSection(section.id)}
            >
              <h3 className="nav-section-title">{section.title}</h3>
              {section.items.length > 0 && (
                <button className="section-toggle">
                  {expandedSections.includes(section.id) ? (
                    <ChevronDown size={14} />
                  ) : (
                    <ChevronRight size={14} />
                  )}
                </button>
              )}
            </div>
            {expandedSections.includes(section.id) && section.items.length > 0 && (
              <ul className="nav-list">
                {section.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <li key={itemIdx}>
                      <Link to={item.path} className={`nav-item ${isActive ? 'active' : ''}`}>
                        <Icon size={18} />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
