import { useState } from 'react';
import ClassCard from '../../components/class/ClassCard';

interface ClassData {
  id: string;
  className: string;
  totalStudents: number;
  atRiskStudents: number;
  achievementRate: number;
}

interface ClassListPageProps {
  onNavigateToClass?: (classId: string, className: string) => void;
  onNavigateToStudentList?: (classId: string, className: string) => void;
}

function ClassListPage({ onNavigateToClass, onNavigateToStudentList }: ClassListPageProps) {
  const [classes] = useState<ClassData[]>([
    { id: '1-1', className: '1학년 1반', totalStudents: 26, atRiskStudents: 1, achievementRate: 76 },
    { id: '1-2', className: '1학년 2반', totalStudents: 25, atRiskStudents: 2, achievementRate: 80 },
    { id: '1-3', className: '1학년 3반', totalStudents: 27, atRiskStudents: 1, achievementRate: 73 },
    { id: '1-4', className: '1학년 4반', totalStudents: 26, atRiskStudents: 3, achievementRate: 80 },
    { id: '1-5', className: '1학년 5반', totalStudents: 24, atRiskStudents: 2, achievementRate: 77 },
    { id: '2-1', className: '2학년 1반', totalStudents: 27, atRiskStudents: 1, achievementRate: 79 },
    { id: '2-2', className: '2학년 2반', totalStudents: 25, atRiskStudents: 2, achievementRate: 75 },
    { id: '2-3', className: '2학년 3반', totalStudents: 26, atRiskStudents: 2, achievementRate: 80 },
    { id: '2-4', className: '2학년 4반', totalStudents: 27, atRiskStudents: 1, achievementRate: 85 },
    { id: '2-5', className: '2학년 5반', totalStudents: 28, atRiskStudents: 3, achievementRate: 65 },
    { id: '2-6', className: '2학년 6반', totalStudents: 26, atRiskStudents: 1, achievementRate: 75 },
    { id: '3-1', className: '3학년 1반', totalStudents: 25, atRiskStudents: 2, achievementRate: 79 },
    { id: '3-2', className: '3학년 2반', totalStudents: 26, atRiskStudents: 2, achievementRate: 79 },
    { id: '3-3', className: '3학년 3반', totalStudents: 26, atRiskStudents: 1, achievementRate: 79 },
    { id: '3-4', className: '3학년 4반', totalStudents: 28, atRiskStudents: 3, achievementRate: 76 },
    { id: '3-5', className: '3학년 5반', totalStudents: 28, atRiskStudents: 3, achievementRate: 76 }
  ]);

  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: '#f8f9fa',
      minHeight: '100%'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '20px'
      }}>
        <button style={{
          padding: '10px 20px',
          backgroundColor: '#2ecc71',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          클래스 등록하기
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {classes.map((classData) => (
          <ClassCard
            key={classData.id}
            classId={classData.id}
            className={classData.className}
            totalStudents={classData.totalStudents}
            atRiskStudents={classData.atRiskStudents}
            achievementRate={classData.achievementRate}
            onClassClick={onNavigateToClass}
            onStudentClick={onNavigateToStudentList}
          />
        ))}
        
        <div style={{
          backgroundColor: 'transparent',
          border: '2px dashed #bdc3c7',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '250px',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#3498db';
          e.currentTarget.style.backgroundColor = 'rgba(52, 152, 219, 0.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#bdc3c7';
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
        >
          <div style={{
            fontSize: '48px',
            color: '#bdc3c7',
            marginBottom: '10px'
          }}>+</div>
          <div style={{
            fontSize: '14px',
            color: '#7f8c8d',
            fontWeight: '500'
          }}>클래스 등록하기</div>
        </div>
      </div>
    </div>
  );
}

export default ClassListPage;
