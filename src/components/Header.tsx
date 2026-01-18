import { Search, Star, Sun, Moon, Bell, Settings, Menu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname === '/') return 'Default';
    if (location.pathname === '/orders') return 'Order List';
    return 'Dashboard';
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="icon-btn menu-btn">
          <Menu size={20} />
        </button>
        <button className="icon-btn">
          <Star size={20} />
        </button>
        <div className="breadcrumb">
          <span>Dashboards</span>
          <span className="separator">/</span>
          <span className="current">{getPageTitle()}</span>
        </div>
      </div>

      <div className="header-right">
        <div className="search-box">
          <Search size={18} />
          <input type="text" placeholder="Search" />
          <kbd>⌘/</kbd>
        </div>
        <button className="icon-btn" onClick={toggleTheme}>
          {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="icon-btn">
          <Bell size={20} />
        </button>
        <button className="icon-btn">
          <Settings size={20} />
        </button>
        <button className="icon-btn">
          <Menu size={20} />
        </button>
        <div className="user-profile">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=ByeWind"
            alt="User"
            className="user-avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
