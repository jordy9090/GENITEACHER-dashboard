import { useState } from "react";

interface PaperDetailPageProps {
  paperId: string;
  subject: string;
  title: string;
  description: string;
  onBack: () => void;
}

interface StudentPerformance {
  id: string;
  name: string;
  className: string;
  time: string;
  correctRate: string;
  hintUsage: string;
  metacognition: string;
  wrongNoteCompleted: boolean;
  status: "완료" | "관심필요";
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

interface AnalysisNote {
  questionId: number;
  studentId: number;
  studentName: string;
  className: string;
  handwriting: string;
  reasonWrong: string;
  errorPattern: string;
  suggestion: string;
}

interface InsightItem {
  questionId: number;
  index: number;
  wrongRate: number;
}

function PaperDetailPage({
  paperId,
  subject,
  title,
  description,
  onBack,
}: PaperDetailPageProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [sortOrder, setSortOrder] = useState<"print" | "incorrect">("print");
  const [selectedProblem, setSelectedProblem] =
    useState<ProblemAnalysis | null>(null);
  const [selectedStudentFilter, setSelectedStudentFilter] = useState<string>("all");
  const [selectedQuestionFilter, setSelectedQuestionFilter] = useState<string>("all");
  
  const tabs = ["학생별 성과", "문제별 분석", "풀이 분석", "오답률 분석"];

  const studentData: StudentPerformance[] = [
    {
      id: "1",
      name: "김현성",
      className: "3학년 7반",
      time: "88분 34초",
      correctRate: "87%",
      hintUsage: "66%",
      metacognition: "90%",
      wrongNoteCompleted: true,
      status: "완료",
    },
    {
      id: "2",
      name: "강민성",
      className: "3학년 7반",
      time: "88분 34초",
      correctRate: "87%",
      hintUsage: "66%",
      metacognition: "90%",
      wrongNoteCompleted: true,
      status: "완료",
    },
    {
      id: "3",
      name: "박지훈",
      className: "3학년 7반",
      time: "88분 34초",
      correctRate: "87%",
      hintUsage: "66%",
      metacognition: "90%",
      wrongNoteCompleted: true,
      status: "완료",
    },
    {
      id: "4",
      name: "이서연",
      className: "3학년 7반",
      time: "88분 34초",
      correctRate: "87%",
      hintUsage: "66%",
      metacognition: "90%",
      wrongNoteCompleted: true,
      status: "완료",
    },
    {
      id: "5",
      name: "최유나",
      className: "3학년 7반",
      time: "88분 34초",
      correctRate: "87%",
      hintUsage: "66%",
      metacognition: "90%",
      wrongNoteCompleted: false,
      status: "관심필요",
    },
  ];

  const problemData: ProblemAnalysis[] = Array.from({ length: 30 }, (_, i) => {
    const difficulties: Array<"상" | "중" | "하"> = ["상", "중", "하"];
    const colors = ["#e74c3c", "#f39c12", "#20c997"];
    const concepts = [
      "정적분의 활용",
      "미분계수의 정의",
      "도함수의 활용",
      "삼각함수의 극한",
      "지수함수와 로그함수",
      "수열의 극한",
      "함수의 극한",
      "연속함수",
    ];
    const diffIndex = i % 3;
    
    return {
      id: String(i + 1),
      problemNumber: `${i + 1}번`,
      difficulty: difficulties[diffIndex],
      difficultyColor: colors[diffIndex],
      incorrectRate: `${Math.floor(Math.random() * 10)}/${Math.floor(Math.random() * 10) + 10}`,
      averageTime: `${Math.floor(Math.random() * 15) + 5}분 ${Math.floor(Math.random() * 60)}초`,
      concept: concepts[i % concepts.length],
    };
  });

  const analysisNotes: AnalysisNote[] = [
    {
      questionId: 1,
      studentId: 101,
      studentName: "김현성",
      className: "3반 24번",
      handwriting: "x = 2라고 가정하면... ∫f(x)dx = F(x) + C",
      reasonWrong: "계산 실수",
      errorPattern: "부정확한 연산",
      suggestion: "기초 연산 반복 추천",
    },
    {
      questionId: 1,
      studentId: 102,
      studentName: "강민성",
      className: "3반 25번",
      handwriting: "lim(x→0) f(x) = ... 극한값 계산",
      reasonWrong: "극한 개념 이해 부족",
      errorPattern: "극한 정의 미숙",
      suggestion: "극한 기초 개념 복습 권장",
    },
    {
      questionId: 2,
      studentId: 101,
      studentName: "김현성",
      className: "3반 24번",
      handwriting: "극값에서 부호가 바뀜... f'(x) = 0",
      reasonWrong: "그래프 해석 오류",
      errorPattern: "시각 자료 해석 미숙",
      suggestion: "그래프 읽기 연습 문제 추천",
    },
    {
      questionId: 2,
      studentId: 103,
      studentName: "박지훈",
      className: "3반 26번",
      handwriting: "dy/dx = 2x + 3... 도함수 적용",
      reasonWrong: "미분 공식 적용 오류",
      errorPattern: "연쇄법칙 미적용",
      suggestion: "연쇄법칙 집중 연습 필요",
    },
    {
      questionId: 3,
      studentId: 102,
      studentName: "강민성",
      className: "3반 25번",
      handwriting: "∑(n=1 to ∞) 1/n² = π²/6",
      reasonWrong: "급수 수렴 조건 혼동",
      errorPattern: "수열/급수 개념 혼동",
      suggestion: "수열과 급수 구분 학습 권장",
    },
    {
      questionId: 5,
      studentId: 104,
      studentName: "이서연",
      className: "3반 27번",
      handwriting: "sin²x + cos²x = 1 활용...",
      reasonWrong: "삼각함수 공식 적용 실수",
      errorPattern: "공식 암기 부정확",
      suggestion: "삼각함수 공식 반복 암기",
    },
    {
      questionId: 7,
      studentId: 105,
      studentName: "최유나",
      className: "3반 28번",
      handwriting: "ln(ab) = ln(a) + ln(b)...",
      reasonWrong: "로그 법칙 적용 오류",
      errorPattern: "로그 연산 규칙 혼동",
      suggestion: "로그 기본 법칙 복습",
    },
    {
      questionId: 10,
      studentId: 101,
      studentName: "김현성",
      className: "3반 24번",
      handwriting: "치환적분 u = x² + 1...",
      reasonWrong: "치환 후 범위 변환 누락",
      errorPattern: "적분 범위 처리 미숙",
      suggestion: "정적분 치환 연습 권장",
    },
  ];

  const insightData: InsightItem[] = Array.from({ length: 30 }, (_, i) => ({
    questionId: i + 1,
    index: i + 1,
    wrongRate: Math.random() * 0.8 + 0.1,
  })).sort((a, b) => b.wrongRate - a.wrongRate);

  const getFilteredNotes = () => {
    let filtered = [...analysisNotes];
    
    if (selectedStudentFilter !== "all") {
      filtered = filtered.filter(note => note.studentId.toString() === selectedStudentFilter);
    }
    
    if (selectedQuestionFilter !== "all") {
      filtered = filtered.filter(note => note.questionId.toString() === selectedQuestionFilter);
    }
    
    return filtered;
  };

  const uniqueStudents = Array.from(
    new Map(analysisNotes.map(note => [note.studentId, { id: note.studentId, name: note.studentName }])).values()
  );

  const uniqueQuestions = Array.from(
    new Set(analysisNotes.map(note => note.questionId))
  ).sort((a, b) => a - b);

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#f8f9fa",
        minHeight: "100%",
      }}
    >
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
          marginBottom: "16px",
        }}
      >
        ← 뒤로
      </button>

      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "32px",
          marginBottom: "24px",
          boxShadow: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "24px",
          }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span style={{ fontSize: "20px" }}>⭐</span>
                <h1 style={{ fontSize: "20px", fontWeight: "700", margin: 0 }}>
                  {title}
                </h1>
              </div>
              <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>
                {description}
              </p>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <span
                style={{
                  backgroundColor: "#ECFEFF",
                  color: "#0891B2",
                  padding: "6px 16px",
                  borderRadius: "130px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                {subject}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#14B8A6",
                border: "1px solid #14B8A6",
                borderRadius: "6px",
                color: "#FAFAFA",
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
                backgroundColor: "transparent",
                border: "1px solid #14B8A6",
                borderRadius: "6px",
                color: "#14B8A6",
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
                backgroundColor: "transparent",
                border: "1px solid #14B8A6",
                borderRadius: "6px",
                color: "#14B8A6",
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
            gap: "16px",
            justifyContent: "flex-start",
            maxWidth: "600px",
          }}
        >
          <div
            style={{
              backgroundColor: "#F0FDFA",
              borderRadius: "8px",
              padding: "16px",
              flex: 1,
              minWidth: 0,
            }}
          >
            <div
              style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}
            >
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
              backgroundColor: "#FFF1F2",
              borderRadius: "8px",
              padding: "16px",
              flex: 1,
              minWidth: 0,
            }}
          >
            <div
              style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}
            >
              문제 수
            </div>
            <div
              style={{ fontSize: "14px", fontWeight: "500", color: "#2c3e50" }}
            >
              30개
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#ECFEFF",
              borderRadius: "8px",
              padding: "16px",
              flex: 1,
              minWidth: 0,
            }}
          >
            <div
              style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}
            >
              참여학생
            </div>
            <div
              style={{ fontSize: "14px", fontWeight: "500", color: "#2c3e50" }}
            >
              29명
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#FAF5FF",
              borderRadius: "8px",
              padding: "16px",
              flex: 1,
              minWidth: 0,
            }}
          >
            <div
              style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}
            >
              평균 소요시간
            </div>
            <div
              style={{ fontSize: "14px", fontWeight: "500", color: "#2c3e50" }}
            >
              45분
            </div>
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
            boxShadow: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
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

            <div style={{ display: "flex", flexDirection: "column", flex: 1, textAlign: "right" }}>
              <span style={{ fontSize: "13px", color: "#999" }}>참여 학생</span>
              <span style={{ fontSize: "32px", fontWeight: "600", color: "#2196f3" }}>
                29
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
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
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
            <div style={{ display: "flex", flexDirection: "column", flex: 1, textAlign: "right" }}>
              <span style={{ fontSize: "13px", color: "#999" }}>평균 정답률</span>
              <span style={{ fontSize: "32px", fontWeight: "600", color: "#4caf50" }}>
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
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
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
            <div style={{ display: "flex", flexDirection: "column", flex: 1, textAlign: "right" }}>
              <span style={{ fontSize: "13px", color: "#999" }}>힌트 사용률</span>
              <span style={{ fontSize: "32px", fontWeight: "600", color: "#e91e63" }}>
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
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
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
            <div style={{ display: "flex", flexDirection: "column", flex: 1, textAlign: "right" }}>
              <span style={{ fontSize: "13px", color: "#999" }}>메타인지</span>
              <span style={{ fontSize: "32px", fontWeight: "600", color: "#9c27b0" }}>
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
              </span>
            </div>
          </div>
        </div>
      </div>


      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "24px",
          boxShadow: "none",
        }}
      >
        <div
          style={{
            borderBottom: "1px solid #e0e0e0",
            marginBottom: "24px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", gap: "0" }}>
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                style={{
                  flex: 1,
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
                color: "#0891B2",
                marginBottom: "16px",
              }}
            >
              개별 학생 성취 현황
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
                        textAlign: "center",
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#666",
                      }}
                    >
                      시간 ▼
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
                      정답률 ▼
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
                      힌트사용률 ▼
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
                      오답노트 ▼
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
                      상태 ▼
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
                              width: "36px",
                              height: "36px",
                              borderRadius: "50%",
                              backgroundColor: "#20c997",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "white",
                              fontWeight: "600",
                              fontSize: "14px",
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
                              {student.className}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        style={{
                          padding: "16px",
                          textAlign: "center",
                          fontSize: "14px",
                          color: "#2c3e50",
                        }}
                      >
                        {student.time}
                      </td>
                      <td
                        style={{
                          padding: "16px",
                          textAlign: "center",
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#4caf50",
                        }}
                      >
                        {student.correctRate}
                      </td>
                      <td
                        style={{
                          padding: "16px",
                          textAlign: "center",
                          fontSize: "14px",
                          color: "#2c3e50",
                        }}
                      >
                        {student.hintUsage}
                      </td>
                      <td
                        style={{
                          padding: "16px",
                          textAlign: "center",
                          fontSize: "14px",
                          color: "#2c3e50",
                        }}
                      >
                        {student.metacognition}
                      </td>
                      <td style={{ padding: "16px", textAlign: "center" }}>
                        {student.wrongNoteCompleted ? (
                          <span
                            style={{
                              color: "#20c997",
                              fontSize: "18px",
                            }}
                          >
                            ✓
                          </span>
                        ) : (
                          <span
                            style={{
                              color: "#e74c3c",
                              fontSize: "18px",
                            }}
                          >
                            ✗
                          </span>
                        )}
                      </td>
                      <td style={{ padding: "16px", textAlign: "center" }}>
                        <span
                          style={{
                            padding: "4px 12px",
                            borderRadius: "4px",
                            fontSize: "12px",
                            fontWeight: "500",
                            color:
                              student.status === "완료" ? "#20c997" : "#e74c3c",
                            backgroundColor:
                              student.status === "완료"
                                ? "#e0f7f4"
                                : "#fce4ec",
                          }}
                        >
                          {student.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                Next →
              </button>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#0891B2",
                  margin: 0,
                }}
              >
                학생 풀이 흔적 및 오류 패턴 분석
              </h3>
              <div style={{ display: "flex", gap: "12px" }}>
                <select
                  value={selectedStudentFilter}
                  onChange={(e) => setSelectedStudentFilter(e.target.value)}
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
                  <option value="all">전체 학생</option>
                  {uniqueStudents.map((student) => (
                    <option key={student.id} value={student.id.toString()}>
                      {student.name}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedQuestionFilter}
                  onChange={(e) => setSelectedQuestionFilter(e.target.value)}
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
                  <option value="all">전체 문항</option>
                  {uniqueQuestions.map((qId) => (
                    <option key={qId} value={qId.toString()}>
                      {qId}번 문항
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {getFilteredNotes().length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "60px 20px",
                  color: "#999",
                }}
              >
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>📝</div>
                <div style={{ fontSize: "16px" }}>
                  선택한 조건에 해당하는 분석 데이터가 없습니다.
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                  gap: "20px",
                }}
              >
                {getFilteredNotes().map((note, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: "#fafafa",
                      borderRadius: "12px",
                      padding: "24px",
                      border: "1px solid #e8e8e8",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "16px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #20c997 0%, #0891B2 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontSize: "14px",
                            fontWeight: "600",
                          }}
                        >
                          {note.studentName.slice(-1)}
                        </div>
                        <div>
                          <div style={{ fontSize: "15px", fontWeight: "600", color: "#2c3e50" }}>
                            {note.studentName}
                          </div>
                          <div style={{ fontSize: "12px", color: "#999" }}>
                            {note.className}
                          </div>
                        </div>
                      </div>
                      <span
                        style={{
                          padding: "4px 12px",
                          borderRadius: "20px",
                          fontSize: "12px",
                          fontWeight: "600",
                          color: "#0891B2",
                          backgroundColor: "#E0F7FA",
                        }}
                      >
                        {note.questionId}번 문항
                      </span>
                    </div>

                    <div
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        padding: "16px",
                        marginBottom: "16px",
                        border: "1px solid #e8e8e8",
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
                        <span style={{ fontSize: "16px" }}>✏️</span>
                        <span style={{ fontSize: "13px", fontWeight: "600", color: "#666" }}>
                          필기 내용
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          color: "#2c3e50",
                          lineHeight: "1.6",
                          fontFamily: "'Nanum Pen Script', cursive, sans-serif",
                          fontStyle: "italic",
                        }}
                      >
                        "{note.handwriting}"
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: "#FFF1F2",
                        borderRadius: "8px",
                        padding: "12px 16px",
                        marginBottom: "12px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                        <span style={{ fontSize: "14px" }}>❌</span>
                        <span style={{ fontSize: "12px", fontWeight: "600", color: "#e74c3c" }}>
                          틀린 이유
                        </span>
                      </div>
                      <div style={{ fontSize: "13px", color: "#555" }}>
                        {note.reasonWrong}
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: "#FFF8E1",
                        borderRadius: "8px",
                        padding: "12px 16px",
                        marginBottom: "12px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                        <span style={{ fontSize: "14px" }}>⚠️</span>
                        <span style={{ fontSize: "12px", fontWeight: "600", color: "#f39c12" }}>
                          오류 패턴
                        </span>
                      </div>
                      <div style={{ fontSize: "13px", color: "#555" }}>
                        {note.errorPattern}
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: "#E0F7FA",
                        borderRadius: "8px",
                        padding: "12px 16px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                        <span style={{ fontSize: "14px" }}>💡</span>
                        <span style={{ fontSize: "12px", fontWeight: "600", color: "#0891B2" }}>
                          학습 제안
                        </span>
                      </div>
                      <div style={{ fontSize: "13px", color: "#555" }}>
                        {note.suggestion}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 3 && (
          <div style={{ padding: "0" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "32px",
              }}
            >
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#20c997",
                  margin: 0,
                }}
              >
                문항별 오답률 차트
              </h2>
              <span style={{ fontSize: "13px", color: "#999" }}>
                상위 10개 문항 (오답률 높은 순)
              </span>
            </div>

            <div
              style={{
                backgroundColor: "#fafafa",
                borderRadius: "12px",
                padding: "32px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {insightData.slice(0, 10).map((item, index) => {
                  const barColor = item.wrongRate >= 0.6 ? "#e74c3c" : item.wrongRate >= 0.4 ? "#f39c12" : "#20c997";
                  
                  return (
                    <div
                      key={item.questionId}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                      }}
                    >
                      <div
                        style={{
                          width: "60px",
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#2c3e50",
                          textAlign: "right",
                        }}
                      >
                        {item.index}번
                      </div>
                      <div
                        style={{
                          flex: 1,
                          height: "32px",
                          backgroundColor: "#e8e8e8",
                          borderRadius: "6px",
                          overflow: "hidden",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            width: `${item.wrongRate * 100}%`,
                            height: "100%",
                            backgroundColor: barColor,
                            borderRadius: "6px",
                            transition: "width 0.5s ease",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            paddingRight: "8px",
                          }}
                        >
                          {item.wrongRate >= 0.15 && (
                            <span
                              style={{
                                fontSize: "12px",
                                fontWeight: "600",
                                color: "white",
                              }}
                            >
                              {(item.wrongRate * 100).toFixed(0)}%
                            </span>
                          )}
                        </div>
                        {item.wrongRate < 0.15 && (
                          <span
                            style={{
                              position: "absolute",
                              right: "8px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              fontSize: "12px",
                              fontWeight: "600",
                              color: "#666",
                            }}
                          >
                            {(item.wrongRate * 100).toFixed(0)}%
                          </span>
                        )}
                      </div>
                      <div
                        style={{
                          width: "80px",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        {index === 0 && (
                          <span
                            style={{
                              padding: "2px 8px",
                              backgroundColor: "#e74c3c",
                              color: "white",
                              borderRadius: "4px",
                              fontSize: "11px",
                              fontWeight: "600",
                            }}
                          >
                            최다 오답
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                style={{
                  marginTop: "32px",
                  paddingTop: "24px",
                  borderTop: "1px solid #e0e0e0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "32px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "4px",
                        backgroundColor: "#e74c3c",
                      }}
                    />
                    <span style={{ fontSize: "13px", color: "#666" }}>
                      60% 이상 (주의 필요)
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "4px",
                        backgroundColor: "#f39c12",
                      }}
                    />
                    <span style={{ fontSize: "13px", color: "#666" }}>
                      40~60% (보통)
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "4px",
                        backgroundColor: "#20c997",
                      }}
                    />
                    <span style={{ fontSize: "13px", color: "#666" }}>
                      40% 미만 (양호)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: "24px",
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "24px",
                border: "1px solid #e8e8e8",
              }}
            >
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#2c3e50",
                  marginTop: 0,
                  marginBottom: "16px",
                }}
              >
                전체 문항 오답률 상세
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
                        순위
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
                        문항 번호
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
                        오답률
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
                        상태
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {insightData.map((item, idx) => {
                      const statusColor = item.wrongRate >= 0.6 ? "#e74c3c" : item.wrongRate >= 0.4 ? "#f39c12" : "#20c997";
                      const statusText = item.wrongRate >= 0.6 ? "주의 필요" : item.wrongRate >= 0.4 ? "보통" : "양호";
                      const statusBg = item.wrongRate >= 0.6 ? "#fce4ec" : item.wrongRate >= 0.4 ? "#fff8e1" : "#e0f7f4";
                      
                      return (
                        <tr
                          key={item.questionId}
                          style={{
                            borderBottom: "1px solid #f0f0f0",
                          }}
                        >
                          <td style={{ padding: "12px 16px", fontSize: "14px", color: "#999" }}>
                            {idx + 1}
                          </td>
                          <td style={{ padding: "12px 16px", fontSize: "14px", fontWeight: "500", color: "#20c997" }}>
                            {item.index}번
                          </td>
                          <td style={{ padding: "12px 16px", fontSize: "14px", fontWeight: "600", color: statusColor }}>
                            {(item.wrongRate * 100).toFixed(1)}%
                          </td>
                          <td style={{ padding: "12px 16px" }}>
                            <span
                              style={{
                                padding: "4px 12px",
                                borderRadius: "4px",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: statusColor,
                                backgroundColor: statusBg,
                              }}
                            >
                              {statusText}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {selectedProblem && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={() => setSelectedProblem(null)}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "32px",
              maxWidth: "600px",
              width: "90%",
              maxHeight: "80vh",
              overflow: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <h2 style={{ margin: 0, fontSize: "20px", color: "#2c3e50" }}>
                {selectedProblem.problemNumber} 상세 정보
              </h2>
              <button
                onClick={() => setSelectedProblem(null)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "#999",
                }}
              >
                ×
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <strong>난이도:</strong>{" "}
                <span style={{ color: selectedProblem.difficultyColor }}>
                  {selectedProblem.difficulty}
                </span>
              </div>
              <div>
                <strong>오답률:</strong> {selectedProblem.incorrectRate}
              </div>
              <div>
                <strong>평균 풀이시간:</strong> {selectedProblem.averageTime}
              </div>
              <div>
                <strong>출제 개념:</strong> {selectedProblem.concept}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaperDetailPage;
