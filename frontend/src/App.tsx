import { useState } from 'react';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardPage from './pages/Dashboard/DashboardPage';
import ClassListPage from './pages/Class/ClassListPage';
import ClassDetailPage from './pages/Class/ClassDetailPage';
import StudentListPage from './pages/Class/StudentListPage';
import StudentDetailPage from './pages/Class/StudentDetailPage';
import AchievementAnalysisPage from './pages/Class/AchievementAnalysisPage';
import SchedulePage from './pages/Schedule/SchedulePage';
import LibraryListPage from './pages/Library/LibraryListPage';
import PaperDetailPage from './pages/Library/PaperDetailPage';

type PageType = 'dashboard' | 'class' | 'classDetail' | 'studentList' | 'studentDetail' | 'achievementAnalysis' | 'schedule' | 'library' | 'paperDetail';

interface PaperInfo {
  id: string;
  subject: string;
  title: string;
  description: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);
  const [selectedClassName, setSelectedClassName] = useState<string | null>(null);
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const [selectedStudentName, setSelectedStudentName] = useState<string | null>(null);
  const [selectedPaperInfo, setSelectedPaperInfo] = useState<PaperInfo | null>(null);

  const handleBackToClassList = () => {
    setCurrentPage('class');
    setSelectedClassId(null);
    setSelectedClassName(null);
  };

  const handleNavigateToStudent = (studentId: string, studentName: string) => {
    setSelectedStudentId(studentId);
    setSelectedStudentName(studentName);
    setCurrentPage('studentDetail');
  };

  const handleNavigateToStudentList = (classId?: string, className?: string) => {
    if (classId && className) {
      setSelectedClassId(classId);
      setSelectedClassName(className);
    }
    setCurrentPage('studentList');
  };

  const handleBackToClassDetail = () => {
    setCurrentPage('classDetail');
    setSelectedStudentId(null);
    setSelectedStudentName(null);
  };

  const handleBackToStudentList = () => {
    setCurrentPage('studentList');
    setSelectedStudentId(null);
    setSelectedStudentName(null);
  };

  const handleNavigateToAchievementAnalysis = (classId: string, className: string) => {
    setSelectedClassId(classId);
    setSelectedClassName(className);
    setCurrentPage('achievementAnalysis');
  };

  const handleBackToClassDetailFromAchievement = () => {
    setCurrentPage('classDetail');
  };

  const handleNavigateToPaper = (paperInfo: PaperInfo) => {
    setSelectedPaperInfo(paperInfo);
    setCurrentPage('paperDetail');
  };

  const handleBackToLibrary = () => {
    setCurrentPage('library');
    setSelectedPaperInfo(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'class':
        return <ClassListPage />;
      case 'classDetail':
        return selectedClassId && selectedClassName ? (
          <ClassDetailPage 
            classId={selectedClassId} 
            className={selectedClassName}
            onBack={handleBackToClassList}
            onNavigateToStudentList={handleNavigateToStudentList}
            onNavigateToStudent={handleNavigateToStudent}
            onNavigateToAchievementAnalysis={handleNavigateToAchievementAnalysis}
          />
        ) : (
          <ClassListPage />
        );
      case 'studentList':
        return selectedClassId && selectedClassName ? (
          <StudentListPage
            classId={selectedClassId}
            className={selectedClassName}
            onBack={handleBackToClassDetail}
            onNavigateToStudent={handleNavigateToStudent}
          />
        ) : (
          <ClassListPage />
        );
      case 'studentDetail':
        return selectedStudentId && selectedStudentName ? (
          <StudentDetailPage
            studentId={selectedStudentId}
            studentName={selectedStudentName}
            onBack={handleBackToStudentList}
          />
        ) : (
          selectedClassId && selectedClassName ? (
            <StudentListPage
              classId={selectedClassId}
              className={selectedClassName}
              onBack={handleBackToClassDetail}
              onNavigateToStudent={handleNavigateToStudent}
            />
          ) : (
            <ClassListPage />
          )
        );
      case 'achievementAnalysis':
        return selectedClassId && selectedClassName ? (
          <AchievementAnalysisPage
            classId={selectedClassId}
            className={selectedClassName}
            onBack={handleBackToClassDetailFromAchievement}
          />
        ) : (
          <ClassListPage />
        );
      case 'schedule':
        return <SchedulePage />;
      case 'library':
        return <LibraryListPage onNavigateToPaper={handleNavigateToPaper} />;
      case 'paperDetail':
        return selectedPaperInfo ? (
          <PaperDetailPage 
            paperId={selectedPaperInfo.id}
            subject={selectedPaperInfo.subject}
            title={selectedPaperInfo.title}
            description={selectedPaperInfo.description}
            onBack={handleBackToLibrary} 
          />
        ) : (
          <LibraryListPage onNavigateToPaper={handleNavigateToPaper} />
        );
      default:
        return <DashboardPage />;
    }
  };

  return (
    <DashboardLayout 
      currentPage={
        currentPage === 'classDetail' ? 'class' :
        currentPage === 'studentList' ? 'class' :
        currentPage === 'studentDetail' ? 'class' :
        currentPage === 'achievementAnalysis' ? 'class' :
        currentPage === 'paperDetail' ? 'library' : 
        currentPage
      } 
      onNavigate={setCurrentPage}
    >
      {renderPage()}
    </DashboardLayout>
  );
}

export default App;
