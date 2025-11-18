import { useState } from 'react';

interface StudentListPageProps {
  classId: string;
  className: string;
  onBack: () => void;
  onNavigateToStudent: (studentId: string, studentName: string) => void;
}

interface Student {
  id: string;
  name: string;
  email: string;
  avatar: string;
  grade: string;
  progress: number;
  riskLevel: 'high' | 'medium' | 'low';
}

function StudentListPage({ classId, className, onBack, onNavigateToStudent }: StudentListPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 12;

  const allStudents: Student[] = [
    { id: '1', name: '김현성', email: 'kim.hs@example.com', avatar: '김', grade: '1학년', progress: 85, riskLevel: 'low' },
    { id: '2', name: '이지은', email: 'lee.je@example.com', avatar: '이', grade: '1학년', progress: 45, riskLevel: 'high' },
    { id: '3', name: '박민수', email: 'park.ms@example.com', avatar: '박', grade: '1학년', progress: 72, riskLevel: 'low' },
    { id: '4', name: '최수진', email: 'choi.sj@example.com', avatar: '최', grade: '1학년', progress: 38, riskLevel: 'high' },
    { id: '5', name: '정예린', email: 'jung.yr@example.com', avatar: '정', grade: '1학년', progress: 90, riskLevel: 'low' },
    { id: '6', name: '강동욱', email: 'kang.dw@example.com', avatar: '강', grade: '1학년', progress: 68, riskLevel: 'medium' },
    { id: '7', name: '윤서연', email: 'yoon.sy@example.com', avatar: '윤', grade: '1학년', progress: 55, riskLevel: 'medium' },
    { id: '8', name: '임준호', email: 'lim.jh@example.com', avatar: '임', grade: '1학년', progress: 78, riskLevel: 'low' },
    { id: '9', name: '한소희', email: 'han.sh@example.com', avatar: '한', grade: '1학년', progress: 42, riskLevel: 'high' },
    { id: '10', name: '오지훈', email: 'oh.jh@example.com', avatar: '오', grade: '1학년', progress: 88, riskLevel: 'low' },
    { id: '11', name: '서민지', email: 'seo.mj@example.com', avatar: '서', grade: '1학년', progress: 63, riskLevel: 'medium' },
    { id: '12', name: '백승호', email: 'baek.sh@example.com', avatar: '백', grade: '1학년', progress: 75, riskLevel: 'low' },
    { id: '13', name: '안유진', email: 'ahn.yj@example.com', avatar: '안', grade: '1학년', progress: 82, riskLevel: 'low' },
    { id: '14', name: '송하윤', email: 'song.hy@example.com', avatar: '송', grade: '1학년', progress: 50, riskLevel: 'medium' },
    { id: '15', name: '전지훈', email: 'jeon.jh@example.com', avatar: '전', grade: '1학년', progress: 71, riskLevel: 'low' },
    { id: '16', name: '권나영', email: 'kwon.ny@example.com', avatar: '권', grade: '1학년', progress: 65, riskLevel: 'medium' }
  ];

  const filteredStudents = allStudents.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const startIndex = (currentPage - 1) * studentsPerPage;
  const currentStudents = filteredStudents.slice(startIndex, startIndex + studentsPerPage);

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'high':
        return '#ff5252';
      case 'medium':
        return '#ffa726';
      case 'low':
        return '#66bb6a';
      default:
        return '#9e9e9e';
    }
  };

  const getRiskBadge = (riskLevel: string) => {
    switch (riskLevel) {
      case 'high':
        return '⚠️ 위험';
      case 'medium':
        return '⚡ 주의';
      case 'low':
        return '✓ 양호';
      default:
        return '';
    }
  };

  return (
    <div style={{
      padding: '30px',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '24px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={onBack}
              style={{
                padding: '8px 16px',
                backgroundColor: 'transparent',
                border: '1px solid #ddd',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                color: '#666',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              ← 뒤로
            </button>
            <h1 style={{ fontSize: '24px', fontWeight: '600', margin: 0 }}>
              {className} - 학생 목록
            </h1>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <input
              type="text"
              placeholder="학생 이름 또는 이메일 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: '10px 16px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '14px',
                width: '300px',
                outline: 'none'
              }}
            />
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {currentStudents.map((student) => (
          <div
            key={student.id}
            onClick={() => onNavigateToStudent(student.id, student.name)}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              border: '1px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
              e.currentTarget.style.borderColor = '#20c997';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
              e.currentTarget.style.borderColor = 'transparent';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#e3f2fd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: '600',
                color: '#2196f3',
                flexShrink: 0
              }}>
                {student.avatar}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  margin: 0,
                  marginBottom: '4px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {student.name}
                </h3>
                <p style={{
                  fontSize: '12px',
                  color: '#999',
                  margin: 0,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {student.email}
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '12px'
            }}>
              <span style={{
                backgroundColor: '#f0f0f0',
                color: '#666',
                padding: '4px 10px',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: '500'
              }}>
                {student.grade}
              </span>
              <span style={{
                backgroundColor: getRiskColor(student.riskLevel) + '20',
                color: getRiskColor(student.riskLevel),
                padding: '4px 10px',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: '500'
              }}>
                {getRiskBadge(student.riskLevel)}
              </span>
            </div>

            <div style={{ marginBottom: '8px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '6px'
              }}>
                <span style={{ fontSize: '12px', color: '#666' }}>학습 진도</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#20c997' }}>
                  {student.progress}%
                </span>
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#f0f0f0',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${student.progress}%`,
                  height: '100%',
                  backgroundColor: '#20c997',
                  transition: 'width 0.3s ease'
                }} />
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigateToStudent(student.id, student.name);
              }}
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#20c997',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer',
                marginTop: '12px'
              }}
            >
              상세보기 →
            </button>
          </div>
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '60px 24px',
          textAlign: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
          <h3 style={{ fontSize: '18px', color: '#666', margin: 0 }}>
            검색 결과가 없습니다
          </h3>
        </div>
      )}

      {totalPages > 1 && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          marginTop: '24px'
        }}>
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            style={{
              padding: '8px 16px',
              backgroundColor: currentPage === 1 ? '#f0f0f0' : 'white',
              border: '1px solid #ddd',
              borderRadius: '6px',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              fontSize: '14px',
              color: currentPage === 1 ? '#999' : '#666'
            }}
          >
            ← 이전
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              style={{
                padding: '8px 12px',
                backgroundColor: currentPage === page ? '#20c997' : 'white',
                border: currentPage === page ? 'none' : '1px solid #ddd',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                color: currentPage === page ? 'white' : '#666',
                fontWeight: currentPage === page ? '600' : '400'
              }}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            style={{
              padding: '8px 16px',
              backgroundColor: currentPage === totalPages ? '#f0f0f0' : 'white',
              border: '1px solid #ddd',
              borderRadius: '6px',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              fontSize: '14px',
              color: currentPage === totalPages ? '#999' : '#666'
            }}
          >
            다음 →
          </button>
        </div>
      )}
    </div>
  );
}

export default StudentListPage;
