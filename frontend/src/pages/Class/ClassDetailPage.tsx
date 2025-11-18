interface ClassDetailPageProps {
  classId: string;
  className: string;
  onBack: () => void;
  onNavigateToStudentList: () => void;
}

interface StudentPerformance {
  id: string;
  name: string;
  email: string;
  progress: number;
  completion: string;
  time: string;
  achievement: number;
}

interface TodayLearning {
  id: string;
  name: string;
  description: string;
  time: string;
}

interface WeeklyObservation {
  date: string;
  material: string;
  submission: number;
  accuracy: number;
  minScore: number;
  maxScore: number;
}

function ClassDetailPage({ classId, className, onBack, onNavigateToStudentList }: ClassDetailPageProps) {

  const studentData: StudentPerformance[] = [
    { id: '1', name: '김현성', email: 'jane.cooper@example.com', progress: 70, completion: '1/3', time: '00:03:20', achievement: 80 },
    { id: '2', name: '김현성', email: 'jane.cooper@example.com', progress: 70, completion: '1/3', time: '00:03:20', achievement: 80 },
    { id: '3', name: '김현성', email: 'jane.cooper@example.com', progress: 70, completion: '1/3', time: '00:03:20', achievement: 80 },
    { id: '4', name: '김현성', email: 'jane.cooper@example.com', progress: 70, completion: '1/3', time: '00:03:20', achievement: 80 },
    { id: '5', name: '김현성', email: 'jane.cooper@example.com', progress: 70, completion: '1/3', time: '00:03:20', achievement: 80 }
  ];

  const todayLearningData: TodayLearning[] = [
    { id: '1', name: '김현성', description: '2년 모의 과제를 열람/시 연습했다(다)', time: '2h 20min' },
    { id: '2', name: '박현성', description: '실력이 처리 100 이상 이하 시험에서 통과했다', time: '1h 10min' },
    { id: '3', name: '김현성', description: '2년 모의 과제를 열람/시 연습했다(다)', time: '3h 00min' },
    { id: '4', name: '박현성', description: '실력이 처리 100 이상 이하 시험에서 통과했다', time: '1h 30min' }
  ];

  const weeklyData: WeeklyObservation[] = [
    { date: '2025-10-22', material: '2022학년도 수능 수학', submission: 100, accuracy: 87, minScore: 29, maxScore: 30 },
    { date: '2025-10-22', material: '2022학년도 수능 수학', submission: 100, accuracy: 87, minScore: 29, maxScore: 30 },
    { date: '2025-10-22', material: '2022학년도 수능 수학', submission: 100, accuracy: 87, minScore: 29, maxScore: 30 },
    { date: '2025-10-22', material: '2022학년도 수능 수학', submission: 100, accuracy: 87, minScore: 29, maxScore: 30 },
    { date: '2025-10-22', material: '2022학년도 수능 수학', submission: 100, accuracy: 87, minScore: 29, maxScore: 30 }
  ];

  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: '#f8f9fa',
      minHeight: '100%'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
        backgroundColor: 'white',
        padding: '15px 20px',
        borderRadius: '8px'
      }}>
        <button 
          onClick={onBack}
          style={{
            border: 'none',
            background: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            padding: '5px'
          }}
        >
          ←
        </button>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '600' }}>{className}</h2>
        <button 
          style={{
            border: 'none',
            background: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            padding: '5px'
          }}
        >
          →
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px',
        marginBottom: '20px'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>😊</div>
          <div style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>전체 학생 수</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#3498db' }}>26<span style={{ fontSize: '16px' }}>명</span></div>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>📊</div>
          <div style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>평균 완료율</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#3498db' }}>82<span style={{ fontSize: '16px' }}>%</span></div>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>💡</div>
          <div style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>평균 진도 시간률</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#e74c3c' }}>1.2<span style={{ fontSize: '16px' }}>배</span></div>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>⏰</div>
          <div style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>예/다/가 성취율</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#9b59b6' }}>79<span style={{ fontSize: '16px' }}>%</span></div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginBottom: '20px' }}>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h3 style={{ fontSize: '16px', color: '#3498db', margin: 0 }}>학생별 성과 현황</h3>
            <button 
              onClick={onNavigateToStudentList}
              style={{
                padding: '8px 16px',
                backgroundColor: '#1abc9c',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              전체 학생 보기 →
            </button>
          </div>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #ecf0f1' }}>
                  <th style={{ padding: '10px', textAlign: 'left', color: '#666' }}>이름 이름 ▼</th>
                  <th style={{ padding: '10px', textAlign: 'left', color: '#666' }}>이메일 ▼</th>
                  <th style={{ padding: '10px', textAlign: 'center', color: '#666' }}>진도 사항 ▼</th>
                  <th style={{ padding: '10px', textAlign: 'center', color: '#666' }}>완료 사항 ▼</th>
                  <th style={{ padding: '10px', textAlign: 'center', color: '#666' }}>시간 ▼</th>
                  <th style={{ padding: '10px', textAlign: 'center', color: '#666' }}>성취도 ▼</th>
                </tr>
              </thead>
              <tbody>
                {studentData.map((student) => (
                  <tr key={student.id} style={{ borderBottom: '1px solid #f5f5f5' }}>
                    <td style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: '#e74c3c',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '12px'
                        }}>
                          {student.name.charAt(0)}
                        </div>
                        <span>{student.name}</span>
                      </div>
                    </td>
                    <td style={{ padding: '12px', color: '#666' }}>{student.email}</td>
                    <td style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                        <span style={{ fontSize: '12px', color: '#2ecc71', fontWeight: '500' }}>{student.progress}%</span>
                        <div style={{
                          width: '80px',
                          height: '6px',
                          backgroundColor: '#ecf0f1',
                          borderRadius: '3px',
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            width: `${student.progress}%`,
                            height: '100%',
                            backgroundColor: '#2ecc71'
                          }} />
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '12px', textAlign: 'center', color: '#e74c3c', fontWeight: '500' }}>{student.completion}</td>
                    <td style={{ padding: '12px', textAlign: 'center', color: '#666' }}>{student.time}</td>
                    <td style={{ padding: '12px', textAlign: 'center', color: '#9b59b6', fontWeight: '500' }}>{student.achievement}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            marginTop: '20px'
          }}>
            <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#666' }}>← Previous</button>
            <button style={{ padding: '4px 10px', border: '1px solid #3498db', borderRadius: '4px', background: 'none', cursor: 'pointer', color: '#3498db' }}>1</button>
            <button style={{ padding: '4px 10px', border: 'none', background: 'none', cursor: 'pointer', color: '#666' }}>2</button>
            <button style={{ padding: '4px 10px', border: 'none', background: 'none', cursor: 'pointer', color: '#666' }}>3</button>
            <span style={{ color: '#666' }}>...</span>
            <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#666' }}>Next →</button>
          </div>
        </div>

        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h3 style={{ fontSize: '16px', color: '#e74c3c', margin: 0 }}>금일 학습 현황</h3>
            <button style={{
              padding: '6px 12px',
              backgroundColor: '#1abc9c',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '12px',
              cursor: 'pointer'
            }}>
              상세보기 →
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {todayLearningData.map((item) => (
              <div key={item.id} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px',
                backgroundColor: '#f8f9fa',
                borderRadius: '6px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#3498db',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '14px',
                  flexShrink: 0
                }}>
                  {item.name.charAt(0)}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '2px' }}>{item.name}</div>
                  <div style={{ fontSize: '12px', color: '#666', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {item.description}
                  </div>
                </div>
                <div style={{ fontSize: '11px', color: '#999', flexShrink: 0 }}>{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginBottom: '20px' }}>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '16px', color: '#3498db', marginTop: 0 }}>취약 개념 분석</h3>
          <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>📈</div>
              <div style={{ fontSize: '14px', color: '#666' }}>선 그래프 영역</div>
              <div style={{ fontSize: '12px', color: '#999', marginTop: '5px' }}>2024년, 2025년 추세 비교</div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h3 style={{ fontSize: '16px', color: '#3498db', margin: 0 }}>성취도 트렌드</h3>
            <button style={{
              padding: '6px 12px',
              backgroundColor: '#1abc9c',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '12px',
              cursor: 'pointer'
            }}>
              상세보기 →
            </button>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '180px' }}>
            <div style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              background: 'conic-gradient(#3498db 0% 39%, #1abc9c 39% 74%, #9b59b6 74% 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'white'
              }} />
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '15px', fontSize: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '12px', height: '12px', backgroundColor: '#3498db', borderRadius: '2px' }} />
              <span>상중</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '12px', height: '12px', backgroundColor: '#1abc9c', borderRadius: '2px' }} />
              <span>중중</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '12px', height: '12px', backgroundColor: '#9b59b6', borderRadius: '2px' }} />
              <span>하중</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ fontSize: '16px', color: '#3498db', marginTop: 0 }}>주간 학습 관찰</h3>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #ecf0f1' }}>
                <th style={{ padding: '10px', textAlign: 'left', color: '#666' }}>날짜 ▼</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#666' }}>문제집 ▼</th>
                <th style={{ padding: '10px', textAlign: 'center', color: '#666' }}>제출률 ▼</th>
                <th style={{ padding: '10px', textAlign: 'center', color: '#666' }}>정답률 ▼</th>
                <th style={{ padding: '10px', textAlign: 'center', color: '#666' }}>최/저 점수 만점 ▼</th>
                <th style={{ padding: '10px', textAlign: 'center', color: '#666' }}></th>
              </tr>
            </thead>
            <tbody>
              {weeklyData.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #f5f5f5' }}>
                  <td style={{ padding: '12px', color: '#666' }}>{item.date}</td>
                  <td style={{ padding: '12px' }}>{item.material}</td>
                  <td style={{ padding: '12px', textAlign: 'center', color: '#9b59b6', fontWeight: '500' }}>{item.submission}%</td>
                  <td style={{ padding: '12px', textAlign: 'center', color: '#666' }}>{item.accuracy}%</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>
                    <span style={{ color: '#e74c3c', fontWeight: '500' }}>{item.minScore}점</span>
                    {' / '}
                    <span style={{ color: '#e74c3c', fontWeight: '500' }}>{item.maxScore}점</span>
                  </td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>
                    <button style={{
                      padding: '6px 12px',
                      backgroundColor: '#1abc9c',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      fontSize: '12px',
                      cursor: 'pointer'
                    }}>
                      상세보기 →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          marginTop: '20px'
        }}>
          <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#666' }}>← Previous</button>
          <button style={{ padding: '4px 10px', border: '1px solid #3498db', borderRadius: '4px', background: 'none', cursor: 'pointer', color: '#3498db' }}>1</button>
          <button style={{ padding: '4px 10px', border: 'none', background: 'none', cursor: 'pointer', color: '#666' }}>2</button>
          <button style={{ padding: '4px 10px', border: 'none', background: 'none', cursor: 'pointer', color: '#666' }}>3</button>
          <span style={{ color: '#666' }}>...</span>
          <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#666' }}>Next →</button>
        </div>
      </div>
    </div>
  );
}

export default ClassDetailPage;
