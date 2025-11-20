interface StudentClassCardProps {
  id: string;
  name: string;
  grade: string;
  type: 'class';
  totalStudents: number;
  submissions: number;
  homeworkRate: number;
}

function StudentClassCard({ name, grade, totalStudents, submissions, homeworkRate }: StudentClassCardProps) {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
    }}
    >
      <div>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>
          {name}
        </h3>
        <span style={{
          fontSize: '12px',
          color: '#999',
          backgroundColor: '#f5f5f5',
          padding: '2px 8px',
          borderRadius: '4px'
        }}>
          {grade}
        </span>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', color: '#666' }}>전체 학생</span>
          <span style={{ fontSize: '15px', fontWeight: '600', color: '#3498db' }}>
            {totalStudents}명
          </span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', color: '#666' }}>제출 학생</span>
          <span style={{ fontSize: '15px', fontWeight: '600', color: '#2ecc71' }}>
            {submissions}명
          </span>
        </div>
        
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span style={{ fontSize: '13px', color: '#666' }}>숙제 완료율</span>
            <span style={{ fontSize: '15px', fontWeight: '600', color: '#9b59b6' }}>
              {homeworkRate}%
            </span>
          </div>
          <div style={{
            width: '100%',
            height: '6px',
            backgroundColor: '#ecf0f1',
            borderRadius: '3px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${homeworkRate}%`,
              height: '100%',
              backgroundColor: '#9b59b6',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentClassCard;
