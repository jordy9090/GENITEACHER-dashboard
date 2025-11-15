import { type ReactNode } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Topbar from '../components/header/Topbar';

interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Topbar />
        <main style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
