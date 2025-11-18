interface ClassCardProps {
  classId: string;
  className: string;
  totalStudents: number;
  atRiskStudents: number;
  achievementRate: number;
  onClassClick?: (classId: string, className: string) => void;
}

function ClassCard({ classId, className, totalStudents, atRiskStudents, achievementRate, onClassClick }: ClassCardProps) {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    }}>
      <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>{className}</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '18px' }}>👥</span>
          <span style={{ fontSize: '14px', color: '#666' }}>전체 학생 수</span>
          <span style={{ fontSize: '14px', fontWeight: '500', marginLeft: 'auto', color: '#3498db' }}>
            {totalStudents}명
          </span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '18px' }}>⚠️</span>
          <span style={{ fontSize: '14px', color: '#666' }}>학습 위험군</span>
          <span style={{ fontSize: '14px', fontWeight: '500', marginLeft: 'auto', color: '#e74c3c' }}>
            {atRiskStudents}명
          </span>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '18px' }}>📈</span>
            <span style={{ fontSize: '14px', color: '#666' }}>학습 성취도</span>
            <span style={{ fontSize: '14px', fontWeight: '500', marginLeft: 'auto', color: '#27ae60' }}>
              {achievementRate}%
            </span>
          </div>
          <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: '#ecf0f1',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${achievementRate}%`,
              height: '100%',
              backgroundColor: '#27ae60',
              borderRadius: '4px',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>
      </div>
      
      <div style={{
        display: 'flex',
        gap: '8px',
        marginTop: '10px'
      }}>
        <button 
          onClick={() => onClassClick?.(classId, className)}
          style={{
            flex: 1,
            padding: '8px 12px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '13px',
            cursor: 'pointer',
            fontWeight: '500'
          }}>
          클래스
        </button>
        <button style={{
          flex: 1,
          padding: '8px 12px',
          backgroundColor: '#2ecc71',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontSize: '13px',
          cursor: 'pointer',
          fontWeight: '500'
        }}>
          학생
        </button>
        <button style={{
          flex: 1,
          padding: '8px 12px',
          backgroundColor: '#9b59b6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontSize: '13px',
          cursor: 'pointer',
          fontWeight: '500'
        }}>
          성취분석
        </button>
      </div>
    </div>
  );
}

export default ClassCard;
