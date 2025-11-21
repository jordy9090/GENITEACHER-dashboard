import StudentClassCard from '../../components/common/StudentClassCard';

function ClassListPage() {
  const studentClasses = [
    {
      id: '1',
      name: '1학년 1반',
      grade: '초등',
      type: 'class' as const,
      totalStudents: 20,
      submissions: 18,
      homeworkRate: 70
    },
    {
      id: '2',
      name: '1학년 2반',
      grade: '초등',
      type: 'class' as const,
      totalStudents: 23,
      submissions: 19,
      homeworkRate: 80
    },
    {
      id: '3',
      name: '2학년 1반',
      grade: '초등',
      type: 'class' as const,
      totalStudents: 26,
      submissions: 24,
      homeworkRate: 75
    },
    {
      id: '4',
      name: '2학년 2반',
      grade: '초등',
      type: 'class' as const,
      totalStudents: 25,
      submissions: 23,
      homeworkRate: 90
    },
    {
      id: '5',
      name: '2학년 3반',
      grade: '초등',
      type: 'class' as const,
      totalStudents: 20,
      submissions: 18,
      homeworkRate: 80
    },
    {
      id: '6',
      name: '2학년 4반',
      grade: '초등',
      type: 'class' as const,
      totalStudents: 23,
      submissions: 20,
      homeworkRate: 85
    },
    {
      id: '7',
      name: '2학년 5반',
      grade: '초등',
      type: 'class' as const,
      totalStudents: 24,
      submissions: 22,
      homeworkRate: 77
    },
    {
      id: '8',
      name: '3학년 1반',
      grade: '초등',
      type: 'class' as const,
      totalStudents: 29,
      submissions: 26,
      homeworkRate: 79
    },
    {
      id: '9',
      name: '3학년 2반',
      grade: '초등',
      type: 'class' as const,
      totalStudents: 26,
      submissions: 25,
      homeworkRate: 80
    },
    {
      id: '10',
      name: '3학년 3반',
      grade: '초등',
      type: 'class' as const,
      totalStudents: 28,
      submissions: 21,
      homeworkRate: 79
    },
    {
      id: '11',
      name: '3학년 4반',
      grade: '초등',
      type: 'class' as const,
      totalStudents: 26,
      submissions: 18,
      homeworkRate: 79
    },
    {
      id: '12',
      name: '3학년 5반',
      grade: '초등',
      type: 'class' as const,
      totalStudents: 28,
      submissions: 25,
      homeworkRate: 79
    }
  ];

  return (
    <div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <h1 style={{ margin: 0 }}>학생/반</h1>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', color: '#7f8c8d' }}>
            공부는 습관예요!
          </span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{
              padding: '8px 16px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '13px'
            }}>
              클라스 방생하기
            </button>
            <button style={{
              padding: '8px 16px',
              backgroundColor: 'white',
              color: '#3498db',
              border: '1px solid #3498db',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '13px'
            }}>
              + 초대하기
            </button>
          </div>
        </div>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '20px'
      }}>
        {studentClasses.map((item) => (
          <StudentClassCard
            key={item.id}
            id={item.id}
            name={item.name}
            grade={item.grade}
            type={item.type}
            totalStudents={item.totalStudents}
            submissions={item.submissions}
            homeworkRate={item.homeworkRate}
          />
        ))}
      </div>
    </div>
  );
}

export default ClassListPage;
