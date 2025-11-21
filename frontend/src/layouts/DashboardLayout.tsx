import { type ReactNode } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Topbar from '../components/header/Topbar';

type PageType = 'dashboard' | 'problem' | 'class' | 'schedule' | 'library';

interface DashboardLayoutProps {
  children: ReactNode;
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

function DashboardLayout({ children, currentPage, onNavigate }: DashboardLayoutProps) {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar currentPage={currentPage} onNavigate={onNavigate} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Topbar currentPage={currentPage} />
        <main style={{ flex: 1, padding: '0', overflow: 'auto', backgroundColor: '#f8f9fa' }}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
