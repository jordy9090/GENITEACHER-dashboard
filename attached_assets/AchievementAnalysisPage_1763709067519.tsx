import { useState } from 'react';

interface AchievementAnalysisPageProps {
  classId: string;
  className: string;
  onBack: () => void;
}

interface StudentData {
  id: string;
  name: string;
  avatar: string;
  overallAchievement: number;
  math: number;
  science: number;
  english: number;
  studyTime: string;
  attendance: string;
  overall: string;
}

function AchievementAnalysisPage({ className, onBack }: AchievementAnalysisPageProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  
  const trendData = [
    { week: '9월 1주', overall: 30, excellent: 40, concern: 25 },
    { week: '9월 2주', overall: 50, excellent: 60, concern: 45 },
    { week: '9월 3주', overall: 70, excellent: 75, concern: 50 },
    { week: '9월 4주', overall: 75, excellent: 80, concern: 55 },
    { week: '10월 1주', overall: 85, excellent: 90, concern: 65 },
    { week: '10월 2주', overall: 85, excellent: 95, concern: 40 }
  ];

  const maxValue = 100;
  const chartHeight = 200;
  const chartWidth = 600;
  const paddingLeft = 40;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 40;
  
  const plotWidth = chartWidth - paddingLeft - paddingRight;
  const plotHeight = chartHeight - paddingTop - paddingBottom;
  
  const xStep = plotWidth / (trendData.length - 1);
  
  const getY = (value: number) => {
    return paddingTop + plotHeight - (value / maxValue) * plotHeight;
  };

  const createPath = (dataKey: 'overall' | 'excellent' | 'concern') => {
    return trendData.map((d, i) => {
      const x = paddingLeft + i * xStep;
      const y = getY(d[dataKey]);
      return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
    }).join(' ');
  };

  const radarData = [
    { subject: '수학', current: 85, target: 95, angle: -90 },
    { subject: '과학', current: 80, target: 90, angle: -18 },
    { subject: '영어', current: 90, target: 100, angle: 54 },
    { subject: '국어', current: 75, target: 85, angle: 126 },
    { subject: '사회', current: 70, target: 80, angle: 198 }
  ];

  const radarCenterX = 150;
  const radarCenterY = 130;
  const radarMaxRadius = 90;

  const polarToCartesian = (angle: number, radius: number) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: radarCenterX + radius * Math.cos(rad),
      y: radarCenterY + radius * Math.sin(rad)
    };
  };

  const createRadarPath = (values: number[]) => {
    return radarData.map((d, i) => {
      const radius = (values[i] / 100) * radarMaxRadius;
      const point = polarToCartesian(d.angle, radius);
      return i === 0 ? `M ${point.x} ${point.y}` : `L ${point.x} ${point.y}`;
    }).join(' ') + ' Z';
  };

  const gridLevels = [20, 40, 60, 80, 100];

  const learningPatternData = [
    { time: '06-08', value: 60 },
    { time: '08-10', value: 85 },
    { time: '10-12', value: 70 },
    { time: '12-14', value: 65 },
    { time: '14-16', value: 75 },
    { time: '16-18', value: 85 },
    { time: '18-20', value: 80 },
    { time: '20-22', value: 70 }
  ];

  const difficultyData = [
    { label: '쉬움', value: 25, color: '#6dd4a8' },
    { label: '보통', value: 35, color: '#5eb3d0' },
    { label: '어려움', value: 25, color: '#9b7ed8' },
    { label: '매우 어려움', value: 15, color: '#eb5d75' }
  ];

  const scoreDistributionData = [
    { range: '0~59점', value: 8 },
    { range: '60~69점', value: 10 },
    { range: '70~79점', value: 6 },
    { range: '80~89점', value: 8 },
    { range: '90~100점', value: 7 }
  ];

  const allStudentData: StudentData[] = [
    { id: '1', name: '김지우', avatar: '👨', overallAchievement: 78, math: 85, science: 87, english: 92, studyTime: '3.2h', attendance: '95.2%', overall: '+8.5%' },
    { id: '2', name: '박서준', avatar: '👨', overallAchievement: 85, math: 88, science: 85, english: 87, studyTime: '2.8h', attendance: '92.5%', overall: '+6.3%' },
    { id: '3', name: '이민서', avatar: '👩', overallAchievement: 92, math: 95, science: 90, english: 94, studyTime: '4.1h', attendance: '98.0%', overall: '+12.1%' },
    { id: '4', name: '최준호', avatar: '👨', overallAchievement: 68, math: 72, science: 70, english: 65, studyTime: '2.1h', attendance: '88.5%', overall: '-1.6%' },
    { id: '5', name: '정수아', avatar: '👩', overallAchievement: 81, math: 83, science: 82, english: 78, studyTime: '3.5h', attendance: '94.8%', overall: '+5.2%' },
    { id: '6', name: '강민준', avatar: '👨', overallAchievement: 75, math: 78, science: 75, english: 73, studyTime: '2.9h', attendance: '91.0%', overall: '+3.8%' },
    { id: '7', name: '윤서아', avatar: '👩', overallAchievement: 88, math: 90, science: 88, english: 86, studyTime: '3.8h', attendance: '96.5%', overall: '+7.2%' },
    { id: '8', name: '조현우', avatar: '👨', overallAchievement: 72, math: 75, science: 73, english: 68, studyTime: '2.5h', attendance: '89.2%', overall: '+2.1%' },
    { id: '9', name: '한지민', avatar: '👩', overallAchievement: 86, math: 88, science: 87, english: 84, studyTime: '3.4h', attendance: '95.8%', overall: '+6.9%' },
    { id: '10', name: '송태양', avatar: '👨', overallAchievement: 79, math: 82, science: 80, english: 76, studyTime: '3.1h', attendance: '93.3%', overall: '+4.5%' },
    { id: '11', name: '안수진', avatar: '👩', overallAchievement: 84, math: 86, science: 85, english: 82, studyTime: '3.3h', attendance: '94.7%', overall: '+5.8%' },
    { id: '12', name: '임준영', avatar: '👨', overallAchievement: 77, math: 80, science: 78, english: 74, studyTime: '2.7h', attendance: '90.5%', overall: '+3.2%' }
  ];

  const totalPages = Math.ceil(allStudentData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const studentData = allStudentData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const aiInsights = [
    {
      id: '1',
      icon: '💡',
      title: '성적이 점차 향상',
      subtitle: '성적 상승 추세',
      content: '전반적으로 반 학생들의 평균 성적이 지난 6주간 꾸준히 상승하고 있습니다. 특히 수학 과목에서 평균 +5% 이상의 향상이 있었으며, 이러한 추세가 지속되면 목표 성취도 달성이 가능할 것으로 예상됩니다.',
      tags: ['수학 성적 향상', '꾸준한 학습 패턴'],
      bgColor: '#e8f9f3'
    },
    {
      id: '2',
      icon: '📚',
      title: '주요 과목 분석',
      subtitle: '',
      content: '수학 > 영어 > 과학 순으로 성취도가 높게 나타났습니다. 다만 국어와 사회 과목에서 상대적으로 낮은 점수를 보이고 있어 해당 과목에 대한 추가 학습 지원이 필요합니다. 전체적으로 균형잡힌 학습이 권장됩니다.',
      tags: ['수학 영어 과학'],
      bgColor: '#fff4e6'
    },
    {
      id: '3',
      icon: '👥',
      title: '개별 학습 권장사항',
      subtitle: '',
      content: '일부 학생들의 학습 시간이 평균보다 낮게 나타나고 있습니다. 특히 출석률이 90% 미만인 학생들에게 추가적인 관심과 지도가 필요합니다. 개별 맞춤형 학습 계획을 통해 전체적인 성취도 향상을 도모할 수 있습니다.',
      tags: ['개별 학습 지원', '85%의 학생이 목표 달성 중'],
      bgColor: '#f0f4ff'
    }
  ];

  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: '#f5f7fa',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px'
        }}>
          <button 
            onClick={onBack}
            style={{
              border: 'none',
              background: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '5px',
              color: '#666'
            }}
          >
            ‹
          </button>
          <h2 style={{ 
            margin: 0, 
            fontSize: '20px', 
            fontWeight: '400',
            color: '#5eb3d0'
          }}>
            {className}
          </h2>
          <button 
            style={{
              border: 'none',
              background: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '5px',
              color: '#666'
            }}
          >
            ›
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px',
          marginBottom: '30px'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>😊</div>
            <div style={{ fontSize: '13px', color: '#999', marginBottom: '8px' }}>전체 학생 수</div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px' }}>
              <span style={{ fontSize: '32px', fontWeight: '300', color: '#333' }}>26</span>
              <span style={{ fontSize: '14px', color: '#999' }}>명</span>
            </div>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>📊</div>
            <div style={{ fontSize: '13px', color: '#999', marginBottom: '8px' }}>평균 성취도</div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px' }}>
              <span style={{ fontSize: '32px', fontWeight: '300', color: '#5eb3d0' }}>82.5</span>
              <span style={{ fontSize: '14px', color: '#999' }}>%</span>
            </div>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>⏰</div>
            <div style={{ fontSize: '13px', color: '#999', marginBottom: '8px' }}>평균 학습 시간</div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px' }}>
              <span style={{ fontSize: '32px', fontWeight: '300', color: '#333' }}>2.8</span>
              <span style={{ fontSize: '14px', color: '#999' }}>시간</span>
            </div>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>🏆</div>
            <div style={{ fontSize: '13px', color: '#999', marginBottom: '8px' }}>목표 달성률</div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px' }}>
              <span style={{ fontSize: '32px', fontWeight: '300', color: '#9b7ed8' }}>78</span>
              <span style={{ fontSize: '14px', color: '#999' }}>%</span>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '20px',
          marginBottom: '20px'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <h3 style={{ 
                margin: 0, 
                fontSize: '15px', 
                fontWeight: '500',
                color: '#333'
              }}>
                성취도 변화 추이
              </h3>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{
                  padding: '6px 14px',
                  backgroundColor: '#5eb3d0',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '12px',
                  cursor: 'pointer'
                }}>
                  1개월
                </button>
                <button style={{
                  padding: '6px 14px',
                  backgroundColor: '#e8f4f8',
                  color: '#5eb3d0',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '12px',
                  cursor: 'pointer'
                }}>
                  3개월
                </button>
                <button style={{
                  padding: '6px 14px',
                  backgroundColor: '#e8f4f8',
                  color: '#5eb3d0',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '12px',
                  cursor: 'pointer'
                }}>
                  6개월
                </button>
              </div>
            </div>

            <svg width="100%" height={chartHeight} viewBox={`0 0 ${chartWidth} ${chartHeight}`} style={{ overflow: 'visible' }}>
              <line x1={paddingLeft} y1={paddingTop} x2={paddingLeft} y2={chartHeight - paddingBottom} stroke="#e0e0e0" strokeWidth="1" />
              <line x1={paddingLeft} y1={chartHeight - paddingBottom} x2={chartWidth - paddingRight} y2={chartHeight - paddingBottom} stroke="#e0e0e0" strokeWidth="1" />
              
              {[0, 20, 40, 60, 80, 100].map(value => {
                const y = getY(value);
                return (
                  <g key={value}>
                    <line x1={paddingLeft} y1={y} x2={chartWidth - paddingRight} y2={y} stroke="#f0f0f0" strokeWidth="1" />
                    <text x={paddingLeft - 10} y={y + 4} fontSize="10" fill="#999" textAnchor="end">{value}</text>
                  </g>
                );
              })}
              
              {trendData.map((d, i) => {
                const x = paddingLeft + i * xStep;
                return (
                  <text 
                    key={i} 
                    x={x} 
                    y={chartHeight - paddingBottom + 20} 
                    fontSize="11" 
                    fill="#666" 
                    textAnchor="middle"
                  >
                    {d.week}
                  </text>
                );
              })}
              
              <path d={createPath('excellent')} fill="none" stroke="#5eb3d0" strokeWidth="2.5" />
              <path d={createPath('overall')} fill="none" stroke="#6dd4a8" strokeWidth="2.5" />
              <path d={createPath('concern')} fill="none" stroke="#e85d75" strokeWidth="2.5" />
              
              {trendData.map((d, i) => {
                const x = paddingLeft + i * xStep;
                return (
                  <g key={i}>
                    <circle cx={x} cy={getY(d.excellent)} r="4" fill="#5eb3d0" />
                    <circle cx={x} cy={getY(d.overall)} r="4" fill="#6dd4a8" />
                    <circle cx={x} cy={getY(d.concern)} r="4" fill="#e85d75" />
                  </g>
                );
              })}
            </svg>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              marginTop: '15px',
              fontSize: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '12px', height: '12px', backgroundColor: '#6dd4a8', borderRadius: '50%' }} />
                <span style={{ color: '#666' }}>전체 평균</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '12px', height: '12px', backgroundColor: '#5eb3d0', borderRadius: '50%' }} />
                <span style={{ color: '#666' }}>우수 학생</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '12px', height: '12px', backgroundColor: '#e85d75', borderRadius: '50%' }} />
                <span style={{ color: '#666' }}>관심 학생</span>
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{ 
              margin: '0 0 20px 0', 
              fontSize: '15px', 
              fontWeight: '500',
              color: '#333'
            }}>
              과목별 성취도
            </h3>

            <svg width="300" height="280" viewBox="0 0 300 280">
              {gridLevels.reverse().map((level, i) => {
                const radius = (level / 100) * radarMaxRadius;
                const points = radarData.map(d => {
                  const point = polarToCartesian(d.angle, radius);
                  return `${point.x},${point.y}`;
                }).join(' ');
                
                return (
                  <polygon
                    key={level}
                    points={points}
                    fill="none"
                    stroke="#e8e8e8"
                    strokeWidth="1"
                  />
                );
              })}
              
              {radarData.map((d) => {
                const point = polarToCartesian(d.angle, radarMaxRadius);
                return (
                  <line
                    key={d.subject}
                    x1={radarCenterX}
                    y1={radarCenterY}
                    x2={point.x}
                    y2={point.y}
                    stroke="#e8e8e8"
                    strokeWidth="1"
                  />
                );
              })}
              
              <path
                d={createRadarPath(radarData.map(d => d.target))}
                fill="rgba(94, 179, 208, 0.1)"
                stroke="#5eb3d0"
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />
              
              <path
                d={createRadarPath(radarData.map(d => d.current))}
                fill="rgba(235, 93, 117, 0.2)"
                stroke="#eb5d75"
                strokeWidth="2"
              />
              
              {radarData.map((d) => {
                const labelPoint = polarToCartesian(d.angle, radarMaxRadius + 25);
                return (
                  <text
                    key={d.subject}
                    x={labelPoint.x}
                    y={labelPoint.y}
                    fontSize="12"
                    fill="#666"
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {d.subject}
                  </text>
                );
              })}
            </svg>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '15px',
              marginTop: '10px',
              fontSize: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '12px', height: '12px', backgroundColor: 'rgba(235, 93, 117, 0.6)', borderRadius: '2px' }} />
                <span style={{ color: '#666' }}>현재 성취도</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '12px', height: '12px', backgroundColor: 'transparent', border: '1.5px dashed #5eb3d0', borderRadius: '2px' }} />
                <span style={{ color: '#666' }}>목표 성취도</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginBottom: '20px'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{ 
              margin: '0 0 20px 0', 
              fontSize: '15px', 
              fontWeight: '500',
              color: '#5eb3d0'
            }}>
              학습 패턴 분석
            </h3>
            <svg width="100%" height="200" viewBox="0 0 300 200">
              {learningPatternData.map((d, i) => {
                const barWidth = 25;
                const barHeight = (d.value / 100) * 140;
                const x = 40 + i * 32;
                const y = 160 - barHeight;
                
                return (
                  <g key={d.time}>
                    <rect
                      x={x}
                      y={y}
                      width={barWidth}
                      height={barHeight}
                      fill="#6dd4a8"
                      rx="4"
                    />
                    <text
                      x={x + barWidth / 2}
                      y="180"
                      fontSize="10"
                      fill="#666"
                      textAnchor="middle"
                    >
                      {d.time}
                    </text>
                    <text
                      x={x + barWidth / 2}
                      y={y - 5}
                      fontSize="10"
                      fill="#666"
                      textAnchor="middle"
                    >
                      {d.value}%
                    </text>
                  </g>
                );
              })}
              <line x1="30" y1="20" x2="30" y2="160" stroke="#e0e0e0" strokeWidth="1" />
              <line x1="30" y1="160" x2="290" y2="160" stroke="#e0e0e0" strokeWidth="1" />
              {[0, 20, 40, 60, 80, 100].map(val => (
                <text key={val} x="20" y={160 - (val / 100) * 140 + 4} fontSize="9" fill="#999" textAnchor="end">
                  {val}
                </text>
              ))}
            </svg>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{ 
              margin: '0 0 20px 0', 
              fontSize: '15px', 
              fontWeight: '500',
              color: '#5eb3d0'
            }}>
              난이도별 성취도
            </h3>
            <svg width="100%" height="200" viewBox="0 0 300 200">
              <g transform="translate(150, 100)">
                {(() => {
                  let currentAngle = 0;
                  const total = difficultyData.reduce((sum, d) => sum + d.value, 0);
                  const innerRadius = 50;
                  const outerRadius = 80;
                  
                  return difficultyData.map((d, i) => {
                    const startAngle = currentAngle;
                    const sweepAngle = (d.value / total) * 360;
                    const endAngle = startAngle + sweepAngle;
                    currentAngle = endAngle;
                    
                    const startRad = (startAngle - 90) * Math.PI / 180;
                    const endRad = (endAngle - 90) * Math.PI / 180;
                    
                    const x1 = Math.cos(startRad) * outerRadius;
                    const y1 = Math.sin(startRad) * outerRadius;
                    const x2 = Math.cos(endRad) * outerRadius;
                    const y2 = Math.sin(endRad) * outerRadius;
                    const x3 = Math.cos(endRad) * innerRadius;
                    const y3 = Math.sin(endRad) * innerRadius;
                    const x4 = Math.cos(startRad) * innerRadius;
                    const y4 = Math.sin(startRad) * innerRadius;
                    
                    const largeArc = sweepAngle > 180 ? 1 : 0;
                    
                    const path = [
                      `M ${x1} ${y1}`,
                      `A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2}`,
                      `L ${x3} ${y3}`,
                      `A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4}`,
                      'Z'
                    ].join(' ');
                    
                    return <path key={i} d={path} fill={d.color} />;
                  });
                })()}
              </g>
              <g transform="translate(10, 40)">
                {difficultyData.map((d, i) => (
                  <g key={i} transform={`translate(0, ${i * 20})`}>
                    <rect width="12" height="12" fill={d.color} rx="2" />
                    <text x="18" y="10" fontSize="11" fill="#666">{d.label}</text>
                  </g>
                ))}
              </g>
            </svg>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{ 
              margin: '0 0 20px 0', 
              fontSize: '15px', 
              fontWeight: '500',
              color: '#5eb3d0'
            }}>
              성취도 분포
            </h3>
            <svg width="100%" height="200" viewBox="0 0 300 200">
              {scoreDistributionData.map((d, i) => {
                const barWidth = 40;
                const barHeight = (d.value / 10) * 120;
                const x = 40 + i * 50;
                const y = 160 - barHeight;
                
                return (
                  <g key={d.range}>
                    <rect
                      x={x}
                      y={y}
                      width={barWidth}
                      height={barHeight}
                      fill="#5eb3d0"
                      rx="4"
                    />
                    <text
                      x={x + barWidth / 2}
                      y="180"
                      fontSize="10"
                      fill="#666"
                      textAnchor="middle"
                    >
                      {d.range}
                    </text>
                    <text
                      x={x + barWidth / 2}
                      y={y - 5}
                      fontSize="11"
                      fill="#666"
                      textAnchor="middle"
                      fontWeight="500"
                    >
                      {d.value}
                    </text>
                  </g>
                );
              })}
              <line x1="30" y1="40" x2="30" y2="160" stroke="#e0e0e0" strokeWidth="1" />
              <line x1="30" y1="160" x2="290" y2="160" stroke="#e0e0e0" strokeWidth="1" />
            </svg>
          </div>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          marginBottom: '20px'
        }}>
          <h3 style={{ 
            margin: '0 0 20px 0', 
            fontSize: '15px', 
            fontWeight: '500',
            color: '#333'
          }}>
            개별 학생 성취 현황
          </h3>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #f0f0f0' }}>
                <th style={{ padding: '12px 8px', textAlign: 'left', fontSize: '12px', color: '#999', fontWeight: '500' }}>이름</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', fontSize: '12px', color: '#999', fontWeight: '500' }}>전체 성취도</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', fontSize: '12px', color: '#999', fontWeight: '500' }}>수학</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', fontSize: '12px', color: '#999', fontWeight: '500' }}>과학</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', fontSize: '12px', color: '#999', fontWeight: '500' }}>영어</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', fontSize: '12px', color: '#999', fontWeight: '500' }}>학습 시간</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', fontSize: '12px', color: '#999', fontWeight: '500' }}>출석 현황</th>
                <th style={{ padding: '12px 8px', textAlign: 'center', fontSize: '12px', color: '#999', fontWeight: '500' }}>종합</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((student) => (
                <tr key={student.id} style={{ borderBottom: '1px solid #f5f5f5' }}>
                  <td style={{ padding: '15px 8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ 
                        width: '32px', 
                        height: '32px', 
                        borderRadius: '50%', 
                        backgroundColor: '#e8f4f8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px'
                      }}>
                        {student.avatar}
                      </div>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: '500', color: '#333' }}>{student.name}</div>
                        <div style={{ fontSize: '11px', color: '#999' }}>2024.01</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '15px 8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ fontSize: '12px', color: '#666', minWidth: '30px' }}>{student.overallAchievement}%</div>
                      <div style={{ 
                        flex: 1, 
                        height: '6px', 
                        backgroundColor: '#f0f0f0', 
                        borderRadius: '3px',
                        overflow: 'hidden',
                        maxWidth: '100px'
                      }}>
                        <div style={{ 
                          width: `${student.overallAchievement}%`, 
                          height: '100%', 
                          backgroundColor: '#6dd4a8',
                          borderRadius: '3px'
                        }} />
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '15px 8px', textAlign: 'center', fontSize: '13px', color: '#666' }}>{student.math}%</td>
                  <td style={{ padding: '15px 8px', textAlign: 'center', fontSize: '13px', color: '#666' }}>{student.science}%</td>
                  <td style={{ padding: '15px 8px', textAlign: 'center', fontSize: '13px', color: '#666' }}>{student.english}%</td>
                  <td style={{ padding: '15px 8px', textAlign: 'center', fontSize: '13px', color: '#666' }}>{student.studyTime}</td>
                  <td style={{ padding: '15px 8px', textAlign: 'center', fontSize: '13px', color: '#eb5d75' }}>{student.attendance}</td>
                  <td style={{ padding: '15px 8px', textAlign: 'center', fontSize: '13px', color: student.overall.startsWith('+') ? '#6dd4a8' : '#eb5d75', fontWeight: '500' }}>
                    {student.overall}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '20px'
          }}>
            <div style={{ fontSize: '13px', color: '#666' }}>
              {startIndex + 1}-{Math.min(endIndex, allStudentData.length)} / {allStudentData.length} 학생
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                style={{
                  padding: '6px 12px',
                  border: '1px solid #e0e0e0',
                  backgroundColor: currentPage === 1 ? '#f5f5f5' : 'white',
                  borderRadius: '4px',
                  fontSize: '12px',
                  color: currentPage === 1 ? '#ccc' : '#666',
                  cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
                }}
              >
                ‹ Previous
              </button>
              {[...Array(totalPages)].map((_, i) => {
                const page = i + 1;
                if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                  return (
                    <button 
                      key={page} 
                      onClick={() => handlePageChange(page)}
                      style={{
                        padding: '6px 12px',
                        border: page === currentPage ? 'none' : '1px solid #e0e0e0',
                        backgroundColor: page === currentPage ? '#5eb3d0' : 'white',
                        borderRadius: '4px',
                        fontSize: '12px',
                        color: page === currentPage ? 'white' : '#666',
                        cursor: 'pointer',
                        minWidth: '32px'
                      }}
                    >
                      {page}
                    </button>
                  );
                } else if (page === currentPage - 2 || page === currentPage + 2) {
                  return <span key={page} style={{ color: '#ccc', fontSize: '12px' }}>...</span>;
                }
                return null;
              })}
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                style={{
                  padding: '6px 12px',
                  border: '1px solid #e0e0e0',
                  backgroundColor: currentPage === totalPages ? '#f5f5f5' : 'white',
                  borderRadius: '4px',
                  fontSize: '12px',
                  color: currentPage === totalPages ? '#ccc' : '#666',
                  cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
                }}
              >
                Next ›
              </button>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          marginBottom: '20px'
        }}>
          <h3 style={{ 
            margin: '0 0 20px 0', 
            fontSize: '15px', 
            fontWeight: '500',
            color: '#333'
          }}>
            AI 학습 인사이트
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {aiInsights.map((insight) => (
              <div key={insight.id} style={{
                backgroundColor: insight.bgColor,
                padding: '20px',
                borderRadius: '10px',
                border: '1px solid rgba(0,0,0,0.05)',
                position: 'relative'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  {insight.icon && (
                    <div style={{ fontSize: '24px' }}>{insight.icon}</div>
                  )}
                  <div style={{ flex: 1 }}>
                    <h4 style={{ 
                      margin: '0 0 5px 0', 
                      fontSize: '14px', 
                      fontWeight: '600',
                      color: '#333'
                    }}>
                      {insight.title}
                    </h4>
                    {insight.subtitle && (
                      <div style={{ fontSize: '12px', color: '#999', marginBottom: '10px' }}>
                        {insight.subtitle}
                      </div>
                    )}
                    <p style={{ 
                      margin: '10px 0', 
                      fontSize: '13px', 
                      color: '#666',
                      lineHeight: '1.6'
                    }}>
                      {insight.content}
                    </p>
                    <div style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                      {insight.tags.map((tag, i) => (
                        <span key={i} style={{
                          padding: '4px 10px',
                          backgroundColor: 'rgba(255,255,255,0.7)',
                          borderRadius: '12px',
                          fontSize: '11px',
                          color: '#5eb3d0',
                          border: '1px solid rgba(94,179,208,0.2)'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    border: '2px solid #5eb3d0',
                    backgroundColor: 'white',
                    color: '#5eb3d0',
                    fontSize: '16px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    ✓
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginTop: '30px',
          marginBottom: '30px'
        }}>
          <button style={{
            padding: '12px 24px',
            backgroundColor: '#5eb3d0',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer'
          }}>
            상세 리포트 생성 +
          </button>
          <button style={{
            padding: '12px 24px',
            backgroundColor: 'white',
            color: '#5eb3d0',
            border: '2px solid #5eb3d0',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer'
          }}>
            데이터 리포트 복사
          </button>
          <button style={{
            padding: '12px 24px',
            backgroundColor: 'white',
            color: '#666',
            border: '2px solid #e0e0e0',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer'
          }}>
            결과 학생 제공 수정
          </button>
        </div>
      </div>
    </div>
  );
}

export default AchievementAnalysisPage;
