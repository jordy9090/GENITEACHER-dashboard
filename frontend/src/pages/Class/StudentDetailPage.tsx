import { useState } from 'react';

interface StudentDetailPageProps {
  studentId: string;
  studentName: string;
  onBack: () => void;
}

interface ProblemData {
  id: string;
  number: string;
  title: string;
  timeUsed: string;
  usageCount: string;
  difficulty: string;
  improvement: string;
  progress: number;
  details: {
    subtitle: string;
    problemType: string;
    difficulty: string;
  };
}

interface HistoryData {
  date: string;
  subject: string;
  problem: string;
  status: string;
  score: string;
}

function StudentDetailPage({ studentId, studentName, onBack }: StudentDetailPageProps) {
  const [activeRightTab, setActiveRightTab] = useState(0);

  const problemsData: ProblemData[] = [
    {
      id: '1',
      number: '1번',
      title: '정수',
      timeUsed: '1일 20초',
      usageCount: '1회',
      difficulty: '중급',
      progress: 30,
      improvement: '형식 문제가 그런 하위에 많이 남겨진 학생들 알려 개선하도록 다양한 행위을 동반 치명 모습 모습 보임.',
      details: {
        subtitle: '소주시간',
        problemType: '중급',
        difficulty: '1일 20초'
      }
    },
    {
      id: '2',
      number: '2번',
      title: '정수',
      timeUsed: '1일 20초',
      usageCount: '1회',
      difficulty: '중급',
      progress: 30,
      improvement: '형식 문제가 그런 하위에 많이 남겨진 학생들 알려 개선하도록 다양한 행위을 동반 치명 모습 모습 보임.',
      details: {
        subtitle: '소주시간',
        problemType: '중급',
        difficulty: '1일 20초'
      }
    },
    {
      id: '3',
      number: '3번',
      title: '정수',
      timeUsed: '1일 20초',
      usageCount: '1회',
      difficulty: '중급',
      progress: 30,
      improvement: '형식 문제가 그런 하위에 많이 남겨진 학생들 알려 개선하도록 다양한 행위을 동반 치명 모습 모습 보임.',
      details: {
        subtitle: '소주시간',
        problemType: '중급',
        difficulty: '1일 20초'
      }
    },
    {
      id: '4',
      number: '4번',
      title: '정수',
      timeUsed: '1일 20초',
      usageCount: '1회',
      difficulty: '중급',
      progress: 30,
      improvement: '형식 문제가 그런 하위에 많이 남겨진 학생들 알려 개선하도록 다양한 행위을 동반 치명 모습 모습 보임.',
      details: {
        subtitle: '소주시간',
        problemType: '중급',
        difficulty: '1일 20초'
      }
    }
  ];

  const historyData: HistoryData[] = [
    { date: '2025-10-22', subject: '수학', problem: '모의고사', status: '합격', score: '1등급' },
    { date: '2025-10-22', subject: '수학', problem: '모의고사', status: '합격', score: '1등급' },
    { date: '2025-10-22', subject: '수학', problem: '모의고사', status: '합격', score: '1등급' },
    { date: '2025-10-22', subject: '수학', problem: '모의고사', status: '합격', score: '1등급' },
    { date: '2025-10-22', subject: '수학', problem: '모의고사', status: '합격', score: '1등급' }
  ];

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        flex: 1,
        padding: '30px',
        overflowY: 'auto'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '24px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={onBack}
              style={{
                padding: '8px 12px',
                backgroundColor: 'transparent',
                border: '1px solid #ddd',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                color: '#666'
              }}
            >
              ← 뒤로
            </button>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#e3f2fd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: '600',
              color: '#2196f3',
              flexShrink: 0
            }}>
              {studentName.charAt(0)}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{ fontSize: '16px' }}>⭐</span>
                <h1 style={{ fontSize: '20px', fontWeight: '600', margin: 0 }}>
                  {studentName}
                </h1>
                <span style={{ fontSize: '13px', color: '#999' }}>학생</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{
                  backgroundColor: '#e3f2fd',
                  color: '#2196f3',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  2학년 1반
                </span>
                <span style={{
                  backgroundColor: '#e8f5e9',
                  color: '#4caf50',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  수학 24학기
                </span>
                <span style={{
                  backgroundColor: '#fff3e0',
                  color: '#ff9800',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  미적분 이월 학생
                </span>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          marginBottom: '24px'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#e8f5e9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                📈
              </div>
              <div style={{ fontSize: '12px', color: '#999' }}>•••</div>
            </div>
            <div style={{ fontSize: '13px', color: '#999', marginBottom: '4px' }}>정답률</div>
            <div style={{ fontSize: '32px', fontWeight: '600', color: '#4caf50' }}>
              70<span style={{ fontSize: '16px', fontWeight: '400', color: '#999', marginLeft: '4px' }}>%</span>
            </div>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#fce4ec',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                💡
              </div>
              <div style={{ fontSize: '12px', color: '#999' }}>•••</div>
            </div>
            <div style={{ fontSize: '13px', color: '#999', marginBottom: '4px' }}>문제 사용</div>
            <div style={{ fontSize: '32px', fontWeight: '600', color: '#e91e63' }}>
              1<span style={{ fontSize: '16px', fontWeight: '400', color: '#999', marginLeft: '4px' }}>개</span>
            </div>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#e3f2fd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                ⏱️
              </div>
              <div style={{ fontSize: '12px', color: '#999' }}>•••</div>
            </div>
            <div style={{ fontSize: '13px', color: '#999', marginBottom: '4px' }}>평균 풀이시간</div>
            <div style={{ fontSize: '32px', fontWeight: '600', color: '#2196f3' }}>
              32:20
            </div>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#f3e5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                ⏰
              </div>
              <div style={{ fontSize: '12px', color: '#999' }}>•••</div>
            </div>
            <div style={{ fontSize: '13px', color: '#999', marginBottom: '4px' }}>예비진단 성실도</div>
            <div style={{ fontSize: '32px', fontWeight: '600', color: '#9c27b0' }}>
              80<span style={{ fontSize: '16px', fontWeight: '400', color: '#999', marginLeft: '4px' }}>%</span>
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginBottom: '24px'
        }}>
          {problemsData.map((problem) => (
            <div
              key={problem.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '16px'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#2c3e50',
                    marginBottom: '8px'
                  }}>
                    {problem.number} 문제
                    <span style={{
                      marginLeft: '12px',
                      fontSize: '14px',
                      color: '#20c997',
                      fontWeight: '500'
                    }}>
                      {problem.title}
                    </span>
                  </h3>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#666' }}>
                    <div>
                      <span style={{ color: '#999' }}>소요시간</span>
                      <span style={{ marginLeft: '8px', fontWeight: '500' }}>{problem.timeUsed}</span>
                    </div>
                    <div>
                      <span style={{ color: '#999' }}>문제 사용</span>
                      <span style={{ marginLeft: '8px', fontWeight: '500' }}>{problem.usageCount}</span>
                    </div>
                    <div>
                      <span style={{ color: '#999' }}>난이도</span>
                      <span style={{ marginLeft: '8px', fontWeight: '500' }}>{problem.difficulty}</span>
                    </div>
                    <div>
                      <span style={{ color: '#999' }}>개선사항</span>
                      <span style={{ marginLeft: '8px', fontWeight: '500' }}>적음</span>
                    </div>
                  </div>
                </div>
                <button style={{
                  padding: '8px 16px',
                  backgroundColor: '#20c997',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}>
                  문제별보 상세 →
                </button>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <span style={{ fontSize: '13px', color: '#999', minWidth: '60px' }}>학생 이름</span>
                <div style={{
                  flex: 1,
                  height: '8px',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${problem.progress}%`,
                    height: '100%',
                    backgroundColor: '#20c997'
                  }}></div>
                </div>
                <span style={{ fontSize: '13px', fontWeight: '500', minWidth: '40px', textAlign: 'right' }}>
                  {problem.progress}%
                </span>
              </div>

              <div style={{
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '12px'
              }}>
                <div style={{
                  display: 'flex',
                  gap: '24px',
                  fontSize: '13px',
                  marginBottom: '12px'
                }}>
                  <div>
                    <span style={{ color: '#999' }}>소주시간</span>
                    <span style={{ marginLeft: '8px', fontWeight: '500' }}>{problem.details.subtitle}</span>
                  </div>
                  <div>
                    <span style={{ color: '#999' }}>문제 사용</span>
                    <span style={{ marginLeft: '8px', fontWeight: '500' }}>{problem.details.problemType}</span>
                  </div>
                  <div>
                    <span style={{ color: '#999' }}>난이도</span>
                    <span style={{ marginLeft: '8px', fontWeight: '500' }}>{problem.details.difficulty}</span>
                  </div>
                </div>

                <div style={{
                  backgroundColor: 'white',
                  padding: '16px',
                  borderRadius: '6px',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    fontFamily: 'monospace',
                    fontSize: '13px',
                    lineHeight: '1.6',
                    color: '#2c3e50'
                  }}>
                    <div>Let x ≥ y ≥</div>
                    <div>B(*x + 4*y = 5*z ≥ **x+E</div>
                    <div>B.*x* 4*y ≥ 5*z ≥ **x+E</div>
                    <div style={{ color: '#ff9800', fontWeight: '600' }}>
                      2%e(E1.1<span style={{ textDecoration: 'underline' }}>*x ≥ [x(E1, k = **x %SW</span>
                    </div>
                    <div>b, %@각 [@G</div>
                  </div>
                  <div style={{
                    marginTop: '12px',
                    fontSize: '13px',
                    lineHeight: '1.6',
                    color: '#2c3e50'
                  }}>
                    <div style={{ fontWeight: '600', marginBottom: '4px' }}>
                      ① 혼합돈 ② 산과 탄 ③ 화산성 단 ④ 혼합돈 단
                    </div>
                    <div style={{ fontWeight: '600', marginBottom: '4px' }}>
                      ⑤ 무용물도 ⑥ 화산성 단 ⑦ 탄 도 ⑧ k = k화산성
                    </div>
                  </div>
                </div>

                <div style={{
                  fontSize: '13px',
                  lineHeight: '1.6',
                  color: '#666'
                }}>
                  {problem.improvement}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#2c3e50',
            marginBottom: '16px'
          }}>
            학습 이력
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
                  <th style={{
                    padding: '12px 16px',
                    textAlign: 'left',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#666'
                  }}>날짜 ▼</th>
                  <th style={{
                    padding: '12px 16px',
                    textAlign: 'left',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#666'
                  }}>과목 ▼</th>
                  <th style={{
                    padding: '12px 16px',
                    textAlign: 'left',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#666'
                  }}>문제 ▼</th>
                  <th style={{
                    padding: '12px 16px',
                    textAlign: 'center',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#666'
                  }}>정답 ▼</th>
                  <th style={{
                    padding: '12px 16px',
                    textAlign: 'center',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#666'
                  }}>등급보기 ▼</th>
                </tr>
              </thead>
              <tbody>
                {historyData.map((item, index) => (
                  <tr
                    key={index}
                    style={{ borderBottom: '1px solid #f0f0f0' }}
                  >
                    <td style={{ padding: '16px', fontSize: '14px' }}>{item.date}</td>
                    <td style={{ padding: '16px', fontSize: '14px' }}>{item.subject}</td>
                    <td style={{ padding: '16px', fontSize: '14px' }}>{item.problem}</td>
                    <td style={{
                      padding: '16px',
                      textAlign: 'center',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#e91e63'
                    }}>
                      {item.status}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'center' }}>
                      <button style={{
                        padding: '6px 16px',
                        backgroundColor: '#20c997',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '13px',
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}>
                        {item.score} 상세 상기 +
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
            gap: '8px',
            marginTop: '24px'
          }}>
            <button style={{
              padding: '8px 12px',
              backgroundColor: 'transparent',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              color: '#666',
              fontSize: '13px',
              cursor: 'pointer'
            }}>
              ← Previous
            </button>
            <button style={{
              padding: '8px 12px',
              backgroundColor: '#20c997',
              border: 'none',
              borderRadius: '4px',
              color: 'white',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              1
            </button>
            <button style={{
              padding: '8px 12px',
              backgroundColor: 'transparent',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              color: '#666',
              fontSize: '13px',
              cursor: 'pointer'
            }}>
              2
            </button>
            <button style={{
              padding: '8px 12px',
              backgroundColor: 'transparent',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              color: '#666',
              fontSize: '13px',
              cursor: 'pointer'
            }}>
              3
            </button>
            <span>...</span>
            <button style={{
              padding: '8px 12px',
              backgroundColor: 'transparent',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              color: '#666',
              fontSize: '13px',
              cursor: 'pointer'
            }}>
              Next →
            </button>
          </div>
        </div>
      </div>

      <div style={{
        width: '320px',
        backgroundColor: 'white',
        padding: '24px',
        overflowY: 'auto',
        borderLeft: '1px solid #e0e0e0'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '16px'
          }}>
            <div style={{
              width: '180px',
              height: '180px',
              position: 'relative'
            }}>
              <svg viewBox="0 0 200 200" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="100" cy="100" r="80" fill="none" stroke="#e0e0e0" strokeWidth="20"/>
                <circle cx="100" cy="100" r="80" fill="none" stroke="#e91e63" strokeWidth="20"
                  strokeDasharray="125.6 502.4" strokeLinecap="round"/>
                <circle cx="100" cy="100" r="80" fill="none" stroke="#ff9800" strokeWidth="20"
                  strokeDasharray="125.6 502.4" strokeDashoffset="-125.6" strokeLinecap="round"/>
                <circle cx="100" cy="100" r="80" fill="none" stroke="#2196f3" strokeWidth="20"
                  strokeDasharray="125.6 502.4" strokeDashoffset="-251.2" strokeLinecap="round"/>
                <circle cx="100" cy="100" r="80" fill="none" stroke="#9c27b0" strokeWidth="20"
                  strokeDasharray="62.8 502.4" strokeDashoffset="-376.8" strokeLinecap="round"/>
                <circle cx="100" cy="100" r="80" fill="none" stroke="#ffc107" strokeWidth="20"
                  strokeDasharray="62.8 502.4" strokeDashoffset="-439.6" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', backgroundColor: '#2196f3', borderRadius: '2px' }}></div>
              <span>1문제</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', backgroundColor: '#ff9800', borderRadius: '2px' }}></div>
              <span>2문제</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', backgroundColor: '#9c27b0', borderRadius: '2px' }}></div>
              <span>3문제</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', backgroundColor: '#ffc107', borderRadius: '2px' }}></div>
              <span>그외문</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', backgroundColor: '#e91e63', borderRadius: '2px' }}></div>
              <span>기타</span>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px' }}>성적 추이</h4>
          <div style={{
            height: '200px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            padding: '10px 0',
            borderBottom: '1px solid #e0e0e0'
          }}>
            {[60, 70, 65, 80, 75, 85, 90].map((value, index) => (
              <div
                key={index}
                style={{
                  width: '30px',
                  height: `${value}%`,
                  backgroundColor: index % 2 === 0 ? '#2196f3' : '#4caf50',
                  borderRadius: '4px 4px 0 0',
                  opacity: 0.8
                }}
              />
            ))}
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '8px',
            fontSize: '11px',
            color: '#999'
          }}>
            <span>9월 1일</span>
            <span>9월 7일</span>
            <span>9월 14일</span>
            <span>9월 21일</span>
            <span>9월 28일</span>
            <span>10월 5일</span>
            <span>10월 12일</span>
          </div>
          <div style={{
            marginTop: '16px',
            display: 'flex',
            gap: '16px',
            fontSize: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '8px', height: '8px', backgroundColor: '#2196f3', borderRadius: '50%' }}></div>
              <span>김현성 성취도</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '8px', height: '8px', backgroundColor: '#4caf50', borderRadius: '50%' }}></div>
              <span>클래스 평균</span>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: '#20c997',
          color: 'white',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer'
        }}>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>학급 관리 메뉴</span>
          <span style={{ fontSize: '18px' }}>+</span>
        </div>

        <div style={{
          backgroundColor: '#20c997',
          color: 'white',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer'
        }}>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>과제 상세 메뉴</span>
          <span style={{ fontSize: '18px' }}>+</span>
        </div>

        <div style={{
          backgroundColor: 'white',
          border: '1px solid #20c997',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          color: '#20c997'
        }}>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>대면 상담</span>
          <span style={{ fontSize: '18px' }}>+</span>
        </div>

        <div style={{
          backgroundColor: 'white',
          border: '1px solid #20c997',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          color: '#20c997'
        }}>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>학습 개별 노트</span>
          <span style={{ fontSize: '18px' }}>+</span>
        </div>

        <div style={{
          backgroundColor: 'white',
          border: '1px solid #20c997',
          borderRadius: '8px',
          padding: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          color: '#20c997'
        }}>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>리마인드 분석 리포트</span>
          <span style={{ fontSize: '18px' }}>+</span>
        </div>
      </div>
    </div>
  );
}

export default StudentDetailPage;
