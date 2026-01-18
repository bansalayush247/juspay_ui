import { type ReactNode } from 'react';
import Sidebar from './Sidebar.tsx';
import Header from './Header.tsx';
import NotificationsPanel from './NotificationsPanel.tsx';

interface LayoutProps {
  children: ReactNode;
  showNotifications?: boolean;
}

const Layout = ({ children, showNotifications = true }: LayoutProps) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-wrapper">
          <main className="main-area">{children}</main>
          {showNotifications && <NotificationsPanel />}
        </div>
      </div>
    </div>
  );
};

export default Layout;
