import { useState } from 'react';
import PaperCard from '../../components/library/PaperCard';

interface Paper {
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
}

interface TeacherProfile {
  name: string;
  subjects: string[];
  avatarColor: string;
}

interface LibraryListPageProps {
  onNavigateToPaper: (paperId: string) => void;
}

function LibraryListPage({ onNavigateToPaper }: LibraryListPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const teacher: TeacherProfile = {
    name: '안성이',
    subjects: ['수학', '과학'],
    avatarColor: '#9b59b6'
  };

  const papers: Paper[] = [
    {
      id: '1',
      imageUrl: '/api/placeholder/400/560',
      subject: '수학',
      title: '수학 영역(나 형)',
      description: '2018년 9월 3일 모의고사 문제지',
      stats: {
        submission: '77%',
        correct: '10점 만점',
        difficulty: '상위 0~5%'
      }
    },
    {
      id: '2',
      imageUrl: '/api/placeholder/400/560',
      subject: '수학',
      title: '수학 영역(나 형)',
      description: '2018년 9월 3일 모의고사 문제지',
      stats: {
        submission: '77%',
        correct: '10점 만점',
        difficulty: '상위 0~5%'
      }
    },
    {
      id: '3',
      imageUrl: '/api/placeholder/400/560',
      subject: '수학',
      title: '수학 영역(나 형)',
      description: '2018년 9월 3일 모의고사 문제지',
      stats: {
        submission: '77%',
        correct: '10점 만점',
        difficulty: '상위 0~5%'
      }
    },
    {
      id: '4',
      imageUrl: '/api/placeholder/400/560',
      subject: '수학',
      title: '수학 영역(나 형)',
      description: '2018년 9월 3일 모의고사 문제지',
      stats: {
        submission: '77%',
        correct: '10점 만점',
        difficulty: '상위 0~5%'
      }
    },
    {
      id: '5',
      imageUrl: '/api/placeholder/400/560',
      subject: '수학',
      title: '수학 영역(나 형)',
      description: '2018년 9월 3일 모의고사 문제지',
      stats: {
        submission: '77%',
        correct: '10점 만점',
        difficulty: '상위 0~5%'
      }
    },
    {
      id: '6',
      imageUrl: '/api/placeholder/400/560',
      subject: '수학',
      title: '수학 영역(나 형)',
      description: '2018년 9월 3일 모의고사 문제지',
      stats: {
        submission: '77%',
        correct: '10점 만점',
        difficulty: '상위 0~5%'
      }
    },
    {
      id: '7',
      imageUrl: '/api/placeholder/400/560',
      subject: '수학',
      title: '수학 영역(나 형)',
      description: '2018년 9월 3일 모의고사 문제지',
      stats: {
        submission: '77%',
        correct: '10점 만점',
        difficulty: '상위 0~5%'
      }
    },
    {
      id: '8',
      imageUrl: '/api/placeholder/400/560',
      subject: '수학',
      title: '수학 영역(나 형)',
      description: '2018년 9월 3일 모의고사 문제지',
      stats: {
        submission: '77%',
        correct: '10점 만점',
        difficulty: '상위 0~5%'
      }
    }
  ];

  const handlePaperDetail = (paperId: string) => {
    onNavigateToPaper(paperId);
  };

  const handleRegisterPaper = () => {
    console.log('문제지 등록하기');
  };

  const filteredPapers = papers.filter(paper => 
    paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    paper.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ 
      padding: '30px',
      backgroundColor: '#f8f9fa',
      minHeight: '100%'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: teacher.avatarColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '24px',
          fontWeight: '600',
          flexShrink: 0
        }}>
          {teacher.name.charAt(0)}
        </div>
        <div>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#2c3e50',
            marginBottom: '4px'
          }}>
            {teacher.name}
          </h2>
          <div style={{
            display: 'flex',
            gap: '8px'
          }}>
            {teacher.subjects.map((subject, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: '#e3f2fd',
                  color: '#1976d2',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '13px',
                  fontWeight: '500'
                }}
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        marginBottom: '24px',
        position: 'relative'
      }}>
        <input
          type="text"
          placeholder="Search or type command..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '14px 20px 14px 48px',
            fontSize: '14px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            backgroundColor: 'white',
            outline: 'none',
            transition: 'border-color 0.2s'
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#20c997';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = '#e0e0e0';
          }}
        />
        <span style={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '20px',
          color: '#999'
        }}>
          🔍
        </span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px',
        marginBottom: '24px'
      }}>
        {filteredPapers.map((paper) => (
          <PaperCard
            key={paper.id}
            id={paper.id}
            imageUrl={paper.imageUrl}
            subject={paper.subject}
            title={paper.title}
            description={paper.description}
            stats={paper.stats}
            onDetail={handlePaperDetail}
          />
        ))}
      </div>

      <div style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        zIndex: 1000
      }}>
        <button
          onClick={handleRegisterPaper}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: '#20c997',
            color: 'white',
            border: 'none',
            fontSize: '28px',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(32, 201, 151, 0.4)',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#1ba87f';
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(32, 201, 151, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#20c997';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(32, 201, 151, 0.4)';
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default LibraryListPage;
