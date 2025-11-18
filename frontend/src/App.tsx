import { useState } from 'react';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardPage from './pages/Dashboard/DashboardPage';
import ClassListPage from './pages/Class/ClassListPage';
import ClassDetailPage from './pages/Class/ClassDetailPage';
import SchedulePage from './pages/Schedule/SchedulePage';
import LibraryListPage from './pages/Library/LibraryListPage';

type PageType = 'dashboard' | 'class' | 'classDetail' | 'schedule' | 'library';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);
  const [selectedClassName, setSelectedClassName] = useState<string | null>(null);

  const handleNavigateToClass = (classId: string, className: string) => {
    setSelectedClassId(classId);
    setSelectedClassName(className);
    setCurrentPage('classDetail');
  };

  const handleBackToClassList = () => {
    setCurrentPage('class');
    setSelectedClassId(null);
    setSelectedClassName(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'class':
        return <ClassListPage onNavigateToClass={handleNavigateToClass} />;
      case 'classDetail':
        return selectedClassId && selectedClassName ? (
          <ClassDetailPage 
            classId={selectedClassId} 
            className={selectedClassName}
            onBack={handleBackToClassList} 
          />
        ) : (
          <ClassListPage onNavigateToClass={handleNavigateToClass} />
        );
      case 'schedule':
        return <SchedulePage />;
      case 'library':
        return <LibraryListPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <DashboardLayout currentPage={currentPage === 'classDetail' ? 'class' : currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </DashboardLayout>
  );
}

export default App;
