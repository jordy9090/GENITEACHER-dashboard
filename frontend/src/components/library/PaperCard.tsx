interface PaperCardProps {
  id: string;
  imageUrl: string;
  subject: string;
  title: string;
  description: string;
  stats: {
    submission: string;
    correct: string;
    difficulty: string;
  };
  onDetail: (id: string) => void;
}

function PaperCard({ id, imageUrl, subject, title, description, stats, onDetail }: PaperCardProps) {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }}>
      <div style={{
        position: 'relative',
        paddingTop: '140%',
        backgroundColor: '#f0f0f0',
        overflow: 'hidden'
      }}>
        <img 
          src={imageUrl} 
          alt={title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{
          display: 'inline-block',
          backgroundColor: '#e8f5e9',
          color: '#2e7d32',
          padding: '4px 12px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: '500',
          marginBottom: '12px',
          alignSelf: 'flex-start'
        }}>
          {subject}
        </div>

        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#2c3e50',
          marginBottom: '8px',
          lineHeight: '1.4'
        }}>
          {title}
        </h3>

        <p style={{
          fontSize: '13px',
          color: '#666',
          marginBottom: '12px',
          lineHeight: '1.4'
        }}>
          {description}
        </p>

        <div style={{
          display: 'flex',
          gap: '12px',
          fontSize: '12px',
          color: '#666',
          marginBottom: '16px',
          marginTop: 'auto'
        }}>
          <span>📊 응답률 {stats.submission}</span>
          <span>✅ 정답률 {stats.correct}</span>
          <span>📈 난이도 {stats.difficulty}</span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onDetail(id);
          }}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#20c997',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#1ba87f';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#20c997';
          }}
        >
          상세보기 +
        </button>
      </div>
    </div>
  );
}

export default PaperCard;
