import { useState } from "react";

interface PaperDetailPageProps {
  paperId: string;
  onBack: () => void;
}

interface StudentPerformance {
  id: string;
  name: string;
  email: string;
  progress: string;
  correctRate: string;
  usageRate: string;
  preparedness: string;
  needsCounseling: boolean;
}

interface ProblemAnalysis {
  id: string;
  problemNumber: string;
  difficulty: "상" | "중" | "하";
  difficultyColor: string;
  incorrectRate: string;
  averageTime: string;
  concept: string;
}

interface StudentSolutionData {
  id: string;
  studentName: string;
  className: string;
  solveTime: string;
  status: string;
  statusColor: string;
  handwritingImage: string;
  wrongReason: string;
  errorPatterns: string[];
  learningPoints: string[];
}

function PaperDetailPage({ paperId, onBack }: PaperDetailPageProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [sortOrder, setSortOrder] = useState<"print" | "incorrect">("print");
  const [selectedProblem, setSelectedProblem] =
    useState<ProblemAnalysis | null>(null);
  const [selectedProblemForAnalysis, setSelectedProblemForAnalysis] =
    useState("21번");
  const tabs = ["학생별 성과", "문제별 분석", "개별 분석", "인사이트"];

  const studentData: StudentPerformance[] = [
    {
      id: "1",
      name: "김현성",
      email: "jane.cooper@example.com",
      progress: "8회차 3.4초",
      correctRate: "87%",
      usageRate: "66%",
      preparedness: "90%",
      needsCounseling: false,
    },
    {
      id: "2",
      name: "강민성",
      email: "jane.cooper@example.com",
      progress: "8회차 3.4초",
      correctRate: "87%",
      usageRate: "66%",
      preparedness: "90%",
      needsCounseling: false,
    },
    {
      id: "3",
      name: "김현성",
      email: "jane.cooper@example.com",
      progress: "8회차 3.4초",
      correctRate: "87%",
      usageRate: "66%",
      preparedness: "90%",
      needsCounseling: false,
    },
    {
      id: "4",
      name: "강민성",
      email: "jane.cooper@example.com",
      progress: "8회차 3.4초",
      correctRate: "87%",
      usageRate: "66%",
      preparedness: "90%",
      needsCounseling: false,
    },
    {
      id: "5",
      name: "김현성",
      email: "jane.cooper@example.com",
      progress: "8회차 3.4초",
      correctRate: "87%",
      usageRate: "66%",
      preparedness: "90%",
      needsCounseling: true,
    },
  ];

  const problemData: ProblemAnalysis[] = [
    {
      id: "1",
      problemNumber: "21번",
      difficulty: "상",
      difficultyColor: "#e74c3c",
      incorrectRate: "4/4",
      averageTime: "12분 3초",
      concept: "정적분의 활용",
    },
    {
      id: "2",
      problemNumber: "21번",
      difficulty: "중",
      difficultyColor: "#20c997",
      incorrectRate: "4/4",
      averageTime: "12분 3초",
      concept: "정적분의 활용",
    },
    {
      id: "3",
      problemNumber: "21번",
      difficulty: "하",
      difficultyColor: "#9b59b6",
      incorrectRate: "4/4",
      averageTime: "12분 3초",
      concept: "정적분의 활용",
    },
    {
      id: "4",
      problemNumber: "21번",
      difficulty: "상",
      difficultyColor: "#20c997",
      incorrectRate: "4/4",
      averageTime: "12분 3초",
      concept: "정적분의 활용",
    },
    {
      id: "5",
      problemNumber: "21번",
      difficulty: "상",
      difficultyColor: "#20c997",
      incorrectRate: "4/4",
      averageTime: "12분 3초",
      concept: "정적분의 활용",
    },
  ];

  const studentSolutions: StudentSolutionData[] = [
    {
      id: "1",
      studentName: "학생1",
      className: "3반 24번",
      solveTime: "문제 시간 9분",
      status: "틀림",
      statusColor: "#e74c3c",
      handwritingImage:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect fill='%23f9f9f9' width='300' height='200'/%3E%3Ctext x='10' y='30' font-family='Arial' font-size='14' fill='%23333'%3ELet s=%C2%B0%3C/text%3E%3Ctext x='10' y='50' font-family='Arial' font-size='14' fill='%23333'%3E∂f%C2%B0x = sx + ★ → ∫wx ξ%3C/text%3E%3Ctext x='10' y='70' font-family='Arial' font-size='14' fill='%23333'%3E∂L%C2%B0s st x%C2%B0L → ∫wx ξ%3C/text%3E%3Ctext x='10' y='100' font-family='Arial' font-size='14' fill='%23f39c12'%3E∂(wx(L,K)) x² + sx(L,K)* ∫ws f(wx)%3C/text%3E%3Ctext x='10' y='120' font-family='Arial' font-size='14' fill='%23333'%3Eby 부분적분%3C/text%3E%3Ctext x='10' y='150' font-family='Arial' font-size='14' fill='%23f39c12'%3E= ∫ws(wx) → [sx wx F: → ∫ws = 0%3C/text%3E%3Ctext x='10' y='170' font-family='Arial' font-size='14' fill='%23f39c12'%3E= ∫ws(wx) Let s=f(wx)%3C/text%3E%3C/svg%3E",
      wrongReason: "변수와 계산 이해",
      errorPatterns: [
        "미분계수의 기본 개념 복습 필요",
        "연쇄법칙 적용 연습 권장",
        "계산 연습은 안성 중요",
      ],
      learningPoints: [
        "적분의 정의와 초기 계산 복습 권장",
        "미분식의 기하학적 의미 이해",
        "심화 분제 반복 연습",
      ],
    },
    {
      id: "2",
      studentName: "학생2",
      className: "3반 25번",
      solveTime: "문제 시간 9분",
      status: "힌트있슴",
      statusColor: "#f39c12",
      handwritingImage:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect fill='%23f9f9f9' width='300' height='200'/%3E%3Ctext x='10' y='30' font-family='Arial' font-size='14' fill='%23333'%3ELet s=%C2%B0%3C/text%3E%3Ctext x='10' y='50' font-family='Arial' font-size='14' fill='%23333'%3E∂f%C2%B0x = sx + ★ → ∫wx ξ%3C/text%3E%3Ctext x='10' y='70' font-family='Arial' font-size='14' fill='%23333'%3E∂L%C2%B0s st x%C2%B0L → ∫wx ξ%3C/text%3E%3Ctext x='10' y='100' font-family='Arial' font-size='14' fill='%23f39c12'%3E∂(wx(L,K)) x² + sx(L,K)* ∫ws f(wx)%3C/text%3E%3Ctext x='10' y='120' font-family='Arial' font-size='14' fill='%23333'%3Eby 부분적분%3C/text%3E%3Ctext x='10' y='150' font-family='Arial' font-size='14' fill='%23f39c12'%3E= ∫ws(wx) → [sx wx F: → ∫ws = 0%3C/text%3E%3Ctext x='10' y='170' font-family='Arial' font-size='14' fill='%23f39c12'%3E= ∫ws(wx) Let s=f(wx)%3C/text%3E%3C/svg%3E",
      wrongReason: "항수와 극값 조건을 초기값 방법",
      errorPatterns: [
        "극값의 정의와 초기 재산 필요",
        "미분식의 기하학적 의미 이해",
        "심화 분제 반복 연습",
      ],
      learningPoints: [
        "극값의 정의와 초기 재산 필요",
        "미분식의 기하학적 의미 이해",
        "심화 분제 반복 연습",
      ],
    },
  ];

  const insightData = [
    { problemNumber: "21번", incorrectRate: 70, color: "#20c997" },
    { problemNumber: "28번", incorrectRate: 85, color: "#e74c3c" },
    { problemNumber: "29번", incorrectRate: 60, color: "#20c997" },
    { problemNumber: "30번", incorrectRate: 60, color: "#20c997" },
  ];

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#f8f9fa",
        minHeight: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "24px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={onBack}
            style={{
              padding: "8px 12px",
              backgroundColor: "transparent",
              border: "1px solid #ddd",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              color: "#666",
            }}
          >
            ← 뒤로
          </button>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "16px" }}>⭐</span>
              <h1 style={{ fontSize: "24px", fontWeight: "600", margin: 0 }}>
                수학 영역(나 형)
              </h1>
            </div>
            <p style={{ margin: "4px 0 0 0", fontSize: "13px", color: "#666" }}>
              2018년 9월 3일 모의고사 문제지
            </p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "white",
              border: "1px solid #20c997",
              borderRadius: "6px",
              color: "#20c997",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            상세 리포트
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#20c997",
              border: "none",
              borderRadius: "6px",
              color: "white",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            결과 공유
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: "6px",
              color: "#666",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            재출제
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        <span
          style={{
            backgroundColor: "#e8f5e9",
            color: "#2e7d32",
            padding: "6px 16px",
            borderRadius: "4px",
            fontSize: "13px",
            fontWeight: "500",
          }}
        >
          수학
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "16px",
            border: "1px solid #e0e0e0",
          }}
        >
          <div style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>
            출제일시
          </div>
          <div
            style={{ fontSize: "14px", fontWeight: "500", color: "#2c3e50" }}
          >
            2024년 10월 17일
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "16px",
            border: "1px solid #e0e0e0",
          }}
        >
          <div style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>
            문제 수
          </div>
          <div
            style={{ fontSize: "14px", fontWeight: "500", color: "#2c3e50" }}
          >
            45개
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "16px",
            border: "1px solid #e0e0e0",
          }}
        >
          <div style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>
            정답률
          </div>
          <div
            style={{ fontSize: "14px", fontWeight: "500", color: "#2c3e50" }}
          >
            87%
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "16px",
            border: "1px solid #e0e0e0",
          }}
        >
          <div style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>
            평균 소요시간
          </div>
          <div
            style={{ fontSize: "14px", fontWeight: "500", color: "#2c3e50" }}
          >
            1회 3.5초
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#e3f2fd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              😊
            </div>
            <div style={{ fontSize: "12px", color: "#999" }}>•••</div>
          </div>
          <div style={{ fontSize: "13px", color: "#999", marginBottom: "4px" }}>
            참여 학생
          </div>
          <div
            style={{ fontSize: "32px", fontWeight: "600", color: "#2196f3" }}
          >
            4
            <span
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#999",
                marginLeft: "4px",
              }}
            >
              명
            </span>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#e8f5e9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              📈
            </div>
            <div style={{ fontSize: "12px", color: "#999" }}>•••</div>
          </div>
          <div style={{ fontSize: "13px", color: "#999", marginBottom: "4px" }}>
            평균 정답률
          </div>
          <div
            style={{ fontSize: "32px", fontWeight: "600", color: "#4caf50" }}
          >
            87
            <span
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#999",
                marginLeft: "4px",
              }}
            >
              %
            </span>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#fce4ec",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              💡
            </div>
            <div style={{ fontSize: "12px", color: "#999" }}>•••</div>
          </div>
          <div style={{ fontSize: "13px", color: "#999", marginBottom: "4px" }}>
            힌트 사용률
          </div>
          <div
            style={{ fontSize: "32px", fontWeight: "600", color: "#e91e63" }}
          >
            66
            <span
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#999",
                marginLeft: "4px",
              }}
            >
              %
            </span>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#f3e5f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              ⏰
            </div>
            <div style={{ fontSize: "12px", color: "#999" }}>•••</div>
          </div>
          <div style={{ fontSize: "13px", color: "#999", marginBottom: "4px" }}>
            메타인지
          </div>
          <div
            style={{ fontSize: "32px", fontWeight: "600", color: "#9c27b0" }}
          >
            90
            <span
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#999",
                marginLeft: "4px",
              }}
            >
              %
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "24px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        }}
      >
        <div
          style={{
            borderBottom: "1px solid #e0e0e0",
            marginBottom: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "32px" }}>
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                style={{
                  padding: "12px 0",
                  backgroundColor: "transparent",
                  border: "none",
                  borderBottom:
                    activeTab === index
                      ? "2px solid #20c997"
                      : "2px solid transparent",
                  color: activeTab === index ? "#20c997" : "#666",
                  fontSize: "14px",
                  fontWeight: activeTab === index ? "600" : "400",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 0 && (
          <div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#2c3e50",
                marginBottom: "16px",
              }}
            >
              개별 학생 성과 리포트
            </h3>

            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr style={{ borderBottom: "2px solid #e0e0e0" }}>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#666",
                      }}
                    >
                      학생 정보 ▼
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#666",
                      }}
                    >
                      학습 경과 ▼
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "center",
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#666",
                      }}
                    >
                      문제 사용 빈도 ▼
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "center",
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#666",
                      }}
                    >
                      메타인지 ▼
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "center",
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#666",
                      }}
                    >
                      상담필요 ▼
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "center",
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#666",
                      }}
                    >
                      세부 ▼
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.map((student) => (
                    <tr
                      key={student.id}
                      style={{
                        borderBottom: "1px solid #f0f0f0",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#f8f9fa";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      <td style={{ padding: "16px" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              backgroundColor: "#e3f2fd",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "16px",
                              fontWeight: "600",
                              color: "#2196f3",
                            }}
                          >
                            {student.name.charAt(0)}
                          </div>
                          <div>
                            <div
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "#2c3e50",
                              }}
                            >
                              {student.name}
                            </div>
                            <div style={{ fontSize: "12px", color: "#999" }}>
                              {student.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: "16px" }}>
                        <div style={{ fontSize: "14px", color: "#2c3e50" }}>
                          {student.progress}
                        </div>
                      </td>
                      <td style={{ padding: "16px", textAlign: "center" }}>
                        <div
                          style={{
                            fontSize: "14px",
                            color: "#2c3e50",
                            fontWeight: "500",
                          }}
                        >
                          {student.correctRate}
                        </div>
                      </td>
                      <td style={{ padding: "16px", textAlign: "center" }}>
                        <div style={{ fontSize: "14px", color: "#2c3e50" }}>
                          {student.usageRate}
                        </div>
                      </td>
                      <td style={{ padding: "16px", textAlign: "center" }}>
                        <div style={{ fontSize: "14px", color: "#2c3e50" }}>
                          {student.preparedness}
                        </div>
                      </td>
                      <td style={{ padding: "16px", textAlign: "center" }}>
                        {student.needsCounseling ? (
                          <span
                            style={{
                              color: "#e91e63",
                              fontSize: "14px",
                              fontWeight: "500",
                            }}
                          >
                            ✕ 상담필요
                          </span>
                        ) : (
                          <span
                            style={{
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              backgroundColor: "#20c997",
                              display: "inline-block",
                            }}
                          ></span>
                        )}
                      </td>
                      <td style={{ padding: "16px", textAlign: "center" }}>
                        <button
                          style={{
                            padding: "6px 16px",
                            backgroundColor: "white",
                            border: "1px solid #20c997",
                            borderRadius: "4px",
                            color: "#20c997",
                            fontSize: "13px",
                            fontWeight: "500",
                            cursor: "pointer",
                          }}
                        >
                          상세
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                marginTop: "24px",
              }}
            >
              <button
                style={{
                  padding: "8px 12px",
                  backgroundColor: "transparent",
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                  color: "#666",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                ← Previous
              </button>
              <button
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#20c997",
                  border: "none",
                  borderRadius: "4px",
                  color: "white",
                  fontSize: "13px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                1
              </button>
              <button
                style={{
                  padding: "8px 12px",
                  backgroundColor: "transparent",
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                  color: "#666",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                2
              </button>
              <button
                style={{
                  padding: "8px 12px",
                  backgroundColor: "transparent",
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                  color: "#666",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                3
              </button>
              <button
                style={{
                  padding: "8px 12px",
                  backgroundColor: "transparent",
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                  color: "#666",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#2c3e50",
                  margin: 0,
                }}
              >
                문제별 상세 분석
              </h3>
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={() => setSortOrder("print")}
                  style={{
                    padding: "8px 16px",
                    backgroundColor:
                      sortOrder === "print" ? "#20c997" : "white",
                    border:
                      sortOrder === "print" ? "none" : "1px solid #e0e0e0",
                    borderRadius: "6px",
                    color: sortOrder === "print" ? "white" : "#666",
                    fontSize: "13px",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  빈출순 정렬
                </button>
                <button
                  onClick={() => setSortOrder("incorrect")}
                  style={{
                    padding: "8px 16px",
                    backgroundColor:
                      sortOrder === "incorrect" ? "#20c997" : "white",
                    border:
                      sortOrder === "incorrect" ? "none" : "1px solid #e0e0e0",
                    borderRadius: "6px",
                    color: sortOrder === "incorrect" ? "white" : "#666",
                    fontSize: "13px",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  오답순 정렬
                </button>
              </div>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr style={{ borderBottom: "2px solid #e0e0e0" }}>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#666",
                      }}
                    >
                      문항 ▼
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#666",
                      }}
                    >
                      난이도 ▼
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#666",
                      }}
                    >
                      오답률 ▼
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#666",
                      }}
                    >
                      평균 풀이시간 ▼
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#666",
                      }}
                    >
                      출제 개념 ▼
                    </th>
                    <th
                      style={{
                        padding: "12px 16px",
                        textAlign: "center",
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#666",
                      }}
                    >
                      액션 ▼
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {problemData.map((problem) => (
                    <tr
                      key={problem.id}
                      style={{
                        borderBottom: "1px solid #f0f0f0",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#f8f9fa";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      <td style={{ padding: "16px" }}>
                        <div
                          style={{
                            fontSize: "14px",
                            color: "#20c997",
                            fontWeight: "500",
                          }}
                        >
                          {problem.problemNumber}
                        </div>
                      </td>
                      <td style={{ padding: "16px" }}>
                        <span
                          style={{
                            padding: "4px 12px",
                            borderRadius: "4px",
                            fontSize: "13px",
                            fontWeight: "500",
                            color: "white",
                            backgroundColor: problem.difficultyColor,
                          }}
                        >
                          {problem.difficulty}
                        </span>
                      </td>
                      <td style={{ padding: "16px" }}>
                        <div
                          style={{
                            fontSize: "14px",
                            color: "#e74c3c",
                            fontWeight: "500",
                          }}
                        >
                          {problem.incorrectRate}
                        </div>
                      </td>
                      <td style={{ padding: "16px" }}>
                        <div
                          style={{
                            fontSize: "14px",
                            color: "#2c3e50",
                          }}
                        >
                          {problem.averageTime}
                        </div>
                      </td>
                      <td style={{ padding: "16px" }}>
                        <div
                          style={{
                            fontSize: "14px",
                            color: "#2c3e50",
                          }}
                        >
                          {problem.concept}
                        </div>
                      </td>
                      <td style={{ padding: "16px", textAlign: "center" }}>
                        <button
                          onClick={() => setSelectedProblem(problem)}
                          style={{
                            padding: "6px 16px",
                            backgroundColor: "#20c997",
                            border: "none",
                            borderRadius: "4px",
                            color: "white",
                            fontSize: "13px",
                            fontWeight: "500",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            margin: "0 auto",
                          }}
                        >
                          상세보기 +
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                marginTop: "24px",
              }}
            >
              <button
                style={{
                  padding: "8px 12px",
                  backgroundColor: "transparent",
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                  color: "#666",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                ← Previous
              </button>
              <button
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#20c997",
                  border: "none",
                  borderRadius: "4px",
                  color: "white",
                  fontSize: "13px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                1
              </button>
              <button
                style={{
                  padding: "8px 12px",
                  backgroundColor: "transparent",
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                  color: "#666",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                2
              </button>
              <button
                style={{
                  padding: "8px 12px",
                  backgroundColor: "transparent",
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                  color: "#666",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                3
              </button>
              <button
                style={{
                  padding: "8px 12px",
                  backgroundColor: "transparent",
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                  color: "#666",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                ...
              </button>
              <button
                style={{
                  padding: "8px 12px",
                  backgroundColor: "transparent",
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                  color: "#666",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div>
            <div style={{ marginBottom: "20px" }}>
              <select
                value={selectedProblemForAnalysis}
                onChange={(e) => setSelectedProblemForAnalysis(e.target.value)}
                style={{
                  padding: "10px 16px",
                  fontSize: "14px",
                  borderRadius: "6px",
                  border: "1px solid #e0e0e0",
                  backgroundColor: "white",
                  cursor: "pointer",
                  minWidth: "150px",
                }}
              >
                <option value="21번">21번</option>
                <option value="22번">22번</option>
                <option value="23번">23번</option>
              </select>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
                gap: "20px",
              }}
            >
              {studentSolutions.map((solution) => (
                <div
                  key={solution.id}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                    padding: "20px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      {solution.studentName.slice(-1)}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          margin: 0,
                          fontSize: "16px",
                          fontWeight: "600",
                          color: "#2c3e50",
                        }}
                      >
                        {solution.studentName}
                      </h3>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginTop: "4px",
                          fontSize: "13px",
                          color: "#666",
                        }}
                      >
                        <span>{solution.className}</span>
                        <span>•</span>
                        <span>{solution.solveTime}</span>
                        <span>•</span>
                        <span
                          style={{
                            color: solution.statusColor,
                            fontWeight: "500",
                          }}
                        >
                          {solution.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: "#f9f9f9",
                      borderRadius: "8px",
                      padding: "12px",
                      marginBottom: "16px",
                      minHeight: "200px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={solution.handwritingImage}
                      alt="학생 풀이"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      backgroundColor: "#fff0f5",
                      borderRadius: "8px",
                      padding: "12px",
                      marginBottom: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "8px",
                      }}
                    >
                      <div style={{ fontSize: "18px" }}>❌</div>
                      <h4
                        style={{
                          margin: 0,
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#e74c3c",
                        }}
                      >
                        틀린 이유
                      </h4>
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "13px",
                        color: "#555",
                        lineHeight: "1.5",
                      }}
                    >
                      • {solution.wrongReason}
                    </p>
                  </div>

                  <div
                    style={{
                      backgroundColor: "#fffbea",
                      borderRadius: "8px",
                      padding: "12px",
                      marginBottom: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "8px",
                      }}
                    >
                      <div style={{ fontSize: "18px" }}>⚠️</div>
                      <h4
                        style={{
                          margin: 0,
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#f39c12",
                        }}
                      >
                        주요 오류 패턴
                      </h4>
                    </div>
                    <ul
                      style={{
                        margin: 0,
                        paddingLeft: "20px",
                        fontSize: "13px",
                        color: "#555",
                        lineHeight: "1.8",
                      }}
                    >
                      {solution.errorPatterns.map((pattern, idx) => (
                        <li key={idx}>{pattern}</li>
                      ))}
                    </ul>
                  </div>

                  <div
                    style={{
                      backgroundColor: "#e0f7fa",
                      borderRadius: "8px",
                      padding: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "8px",
                      }}
                    >
                      <div style={{ fontSize: "18px" }}>💡</div>
                      <h4
                        style={{
                          margin: 0,
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#20c997",
                        }}
                      >
                        학습 제안 포인트
                      </h4>
                    </div>
                    <ul
                      style={{
                        margin: 0,
                        paddingLeft: "20px",
                        fontSize: "13px",
                        color: "#555",
                        lineHeight: "1.8",
                      }}
                    >
                      {solution.learningPoints.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 3 && (
          <div style={{ padding: "0" }}>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#20c997",
                marginBottom: "40px",
              }}
            >
              문제별 오답률 분석
            </h2>

            <div
              style={{
                position: "relative",
                padding: "20px 40px 60px",
                minHeight: "350px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 20,
                  bottom: 60,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  color: "#999",
                }}
              >
                <div>100%</div>
                <div>80%</div>
                <div>60%</div>
                <div>40%</div>
                <div>20%</div>
                <div>0%</div>
              </div>

              <div
                style={{
                  position: "absolute",
                  left: 40,
                  right: 40,
                  top: 20,
                  bottom: 60,
                  borderLeft: "1px solid #e0e0e0",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-around",
                    gap: "40px",
                    padding: "0 60px",
                  }}
                >
                  {insightData.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          maxWidth: "120px",
                          height: `${item.incorrectRate * 3}px`,
                          backgroundColor: item.color,
                          borderRadius: "4px 4px 0 0",
                          transition: "all 0.3s ease",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  position: "absolute",
                  left: 40,
                  right: 40,
                  bottom: 20,
                  display: "flex",
                  justifyContent: "space-around",
                  gap: "40px",
                  padding: "0 60px",
                }}
              >
                {insightData.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "14px",
                      color: "#333",
                      fontWeight: "500",
                    }}
                  >
                    {item.problemNumber}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {selectedProblem && (
        <div
          onClick={() => setSelectedProblem(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(200, 200, 200, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "32px",
              width: "90%",
              maxWidth: "500px",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#2c3e50",
                marginBottom: "24px",
                marginTop: 0,
              }}
            >
              {selectedProblem.problemNumber} 문제 상세 분석
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#fee",
                  borderRadius: "12px",
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    fontSize: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  📄
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#999",
                      marginBottom: "4px",
                    }}
                  >
                    문제 난이도
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#e74c3c",
                    }}
                  >
                    최상
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#e0f7fa",
                  borderRadius: "12px",
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    fontSize: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  💡
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#999",
                      marginBottom: "4px",
                    }}
                  >
                    틀린 개념
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#20c997",
                    }}
                  >
                    {selectedProblem.concept}
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#e3f2fd",
                  borderRadius: "12px",
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    fontSize: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  😊
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#999",
                      marginBottom: "4px",
                    }}
                  >
                    오답 인원
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#2196f3",
                    }}
                  >
                    28/29
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#f3e5f5",
                  borderRadius: "12px",
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    fontSize: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ⏰
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#999",
                      marginBottom: "4px",
                    }}
                  >
                    평균 시간
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#9c27b0",
                    }}
                  >
                    {selectedProblem.averageTime}
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#f0f8ff",
                borderRadius: "12px",
                padding: "16px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "12px",
                }}
              >
                <div style={{ fontSize: "20px" }}>📋</div>
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#2c3e50",
                    margin: 0,
                  }}
                >
                  문제 내용
                </h3>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#555",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                수직선 위에서 집 P의 위치 x가 다음 조건을 만족하는 미분방정식을
                구하는 문제입니다. 변위와 속도의 관계를 이용하여 미분계수의
                활용을 묻고 있습니다.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#fff0f0",
                borderRadius: "12px",
                padding: "16px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "12px",
                }}
              >
                <div style={{ fontSize: "20px" }}>🎯</div>
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#2c3e50",
                    margin: 0,
                  }}
                >
                  주요 오답 원인
                </h3>
              </div>
              <ul
                style={{
                  fontSize: "14px",
                  color: "#555",
                  lineHeight: "1.8",
                  margin: 0,
                  paddingLeft: "20px",
                }}
              >
                <li>미분계수의 물리적 의미 이해 부족</li>
                <li>변수 분리 과정에서의 계산 실수</li>
                <li>초기 조건 적용 오류</li>
              </ul>
            </div>

            <button
              onClick={() => setSelectedProblem(null)}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#20c997",
                border: "none",
                borderRadius: "8px",
                color: "white",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaperDetailPage;
