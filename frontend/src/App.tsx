import { useState } from 'react';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardPage from './pages/Dashboard/DashboardPage';
import ClassListPage from './pages/Class/ClassListPage';
import SchedulePage from './pages/Schedule/SchedulePage';
import LibraryListPage from './pages/Library/LibraryListPage';

type PageType = 'dashboard' | 'class' | 'schedule' | 'library';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'class':
        return <ClassListPage />;
      case 'schedule':
        return <SchedulePage />;
      case 'library':
        return <LibraryListPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <DashboardLayout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </DashboardLayout>
  );
}

export default App;
