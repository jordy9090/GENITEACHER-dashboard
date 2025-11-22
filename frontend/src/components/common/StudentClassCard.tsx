interface StudentClassCardProps {
  id: string;
  name: string;
  grade: string;
  type: 'class';
  totalStudents: number;
  submissions: number;
  homeworkRate: number;
  onStudentClick?: () => void;
  onAssignmentClick?: () => void;
  onClassRegisterClick?: () => void;
}

function StudentClassCard({ 
  name, 
  totalStudents, 
  submissions, 
  homeworkRate,
  onStudentClick,
  onAssignmentClick,
  onClassRegisterClick
}: StudentClassCardProps) {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '0',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      overflow: 'hidden',
      border: '1px solid #e0e0e0'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
    }}
    >
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '16px 20px',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <h3 style={{ 
          margin: 0, 
          fontSize: '16px', 
          fontWeight: '600',
          color: '#333'
        }}>
          {name}
        </h3>
      </div>
      
      <div style={{ 
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '18px' }}>👥</span>
          <span style={{ fontSize: '13px', color: '#666' }}>전체 학생 수:</span>
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#333', marginLeft: 'auto' }}>
            {totalStudents}명
          </span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '18px' }}>⚠️</span>
          <span style={{ fontSize: '13px', color: '#666' }}>작품 제출한:</span>
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#e74c3c', marginLeft: 'auto' }}>
            {submissions}명
          </span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '18px' }}>✅</span>
          <span style={{ fontSize: '13px', color: '#666' }}>학습 성취도:</span>
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#3498db', marginLeft: 'auto' }}>
            {homeworkRate}%
          </span>
        </div>
      </div>

      <div style={{
        padding: '12px 20px',
        borderTop: '1px solid #f0f0f0',
        display: 'flex',
        gap: '8px',
        justifyContent: 'space-between'
      }}>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onStudentClick?.();
          }}
          style={{
            flex: 1,
            padding: '8px 12px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '12px',
            color: '#666',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          공석
        </button>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onAssignmentClick?.();
          }}
          style={{
            flex: 1,
            padding: '8px 12px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '12px',
            color: '#666',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          과제
        </button>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onClassRegisterClick?.();
          }}
          style={{
            flex: 1,
            padding: '8px 12px',
            backgroundColor: '#20c997',
            border: 'none',
            borderRadius: '4px',
            fontSize: '12px',
            color: 'white',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          클래스 등록하기
        </button>
      </div>
    </div>
  );
}

export default StudentClassCard;
