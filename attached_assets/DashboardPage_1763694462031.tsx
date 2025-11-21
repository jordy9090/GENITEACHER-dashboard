import { useState } from "react";
import Card from "../../components/common/Card";

interface Schedule {
  time: string;
  description: string;
  hour: number;
}

function DashboardPage() {
  const [currentMonth] = useState("October");
  const [schedules] = useState<Schedule[]>([
    { time: "AM 9:30", description: "1반 수학 수업", hour: 9.5 },
    { time: "AM 11:00", description: "3반 수학 수업", hour: 11 },
    { time: "PM 14:00", description: "중간고사 감독", hour: 14 },
    { time: "PM 16:00", description: "학부모 상담", hour: 16 },
  ]);

  const getCurrentHour = () => {
    const now = new Date();
    return now.getHours() + now.getMinutes() / 60;
  };

  const getScheduleStatus = (scheduleHour: number) => {
    const currentHour = getCurrentHour();
    if (scheduleHour < currentHour - 1) {
      return "past";
    } else if (scheduleHour >= currentHour - 1 && scheduleHour <= currentHour + 1) {
      return "current";
    } else {
      return "upcoming";
    }
  };

  const monthlyData = [
    { month: "1월", value: 45 },
    { month: "2월", value: 35 },
    { month: "3월", value: 55 },
    { month: "4월", value: 40 },
    { month: "5월", value: 30 },
    { month: "6월", value: 48 },
    { month: "7월", value: 38 },
    { month: "8월", value: 52 },
    { month: "9월", value: 42 },
    { month: "10월", value: 50 },
    { month: "11월", value: 0 },
    { month: "12월", value: 0 },
  ];

  const calendar = [
    [null, null, null, null, null, 1, 2],
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30],
    [31, null, null, null, null, null, null],
  ];

  return (
    <div style={{ display: "flex", gap: "20px", height: "100vh", overflow: "hidden" }}>
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div
          style={{
            position: "relative",
            backgroundColor: "#f8f9fa",
            padding: "12px 20px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ color: "#95a5a6" }}>🔍</span>
          <input
            type="text"
            placeholder="Search or type command..."
            style={{
              border: "none",
              backgroundColor: "transparent",
              outline: "none",
              flex: 1,
              fontSize: "14px",
            }}
          />
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, #4FC3F7 0%, #29B6F6 100%)",
            borderRadius: "12px",
            padding: "28px 30px",
            color: "white",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              zIndex: 1,
              flex: 1,
              paddingRight: "120px",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                marginBottom: "10px",
                fontWeight: "bold",
                margin: 0,
              }}
            >
              Welcome back, 쌤이님👋
            </h2>
            <div style={{ fontSize: "13px", lineHeight: "1.6", opacity: 0.95 }}>
              오늘도 열정의 하루를 시작합니다!
              <br />
              오늘도 GeniTeacher 선생님 모드에서 AI가 제공하는 스마트한 수업으로
              학생의 성장을 돕고, 수업의 질을 한 단계 업그레이드하세요.
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              right: "30px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "90px",
              opacity: 0.2,
            }}
          >
            👩‍🏫
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          <Card>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  backgroundColor: "#E3F2FD",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                }}
              >
                😊
              </div>
              <div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#95a5a6",
                    marginBottom: "4px",
                  }}
                >
                  활성 학생
                </div>
                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "#2c3e50",
                  }}
                >
                  87
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  backgroundColor: "#E8F5E9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                }}
              >
                📝
              </div>
              <div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#95a5a6",
                    marginBottom: "4px",
                  }}
                >
                  과제 현황
                </div>
                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "#2c3e50",
                  }}
                >
                  12
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  backgroundColor: "#FCE4EC",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                }}
              >
                🔔
              </div>
              <div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#95a5a6",
                    marginBottom: "4px",
                  }}
                >
                  새 알림
                </div>
                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "#2c3e50",
                  }}
                >
                  5
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
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
                  fontWeight: "bold",
                  color: "#1abc9c",
                }}
              >
                최근 정답률 추이
              </h3>
              <button
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                ⋮
              </button>
            </div>
            <div style={{ position: "relative", height: "200px" }}>
              <svg
                width="100%"
                height="180"
                viewBox="0 0 600 180"
                preserveAspectRatio="none"
                style={{ overflow: "visible" }}
              >
                <polyline
                  points={monthlyData
                    .map((d, i) => `${(i / 11) * 600},${180 - d.value * 1.8}`)
                    .join(" ")}
                  fill="none"
                  stroke="#1abc9c"
                  strokeWidth="3"
                />
                {monthlyData.map((d, i) => (
                  <circle
                    key={i}
                    cx={(i / 11) * 600}
                    cy={180 - d.value * 1.8}
                    r="4"
                    fill="#1abc9c"
                  />
                ))}
              </svg>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  fontSize: "11px",
                  color: "#95a5a6",
                }}
              >
                {monthlyData.map((d) => (
                  <span key={d.month}>{d.month}</span>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
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
                  fontWeight: "bold",
                  color: "#1abc9c",
                }}
              >
                주요 취약 개념
              </h3>
              <button
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                ⋮
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "150px",
                  height: "150px",
                }}
              >
                <svg
                  width="150"
                  height="150"
                  style={{ transform: "rotate(-90deg)" }}
                >
                  <circle
                    cx="75"
                    cy="75"
                    r="60"
                    fill="none"
                    stroke="#e0e0e0"
                    strokeWidth="12"
                  />
                  <circle
                    cx="75"
                    cy="75"
                    r="60"
                    fill="none"
                    stroke="#1abc9c"
                    strokeWidth="12"
                    strokeDasharray={`${2 * Math.PI * 60 * 0.65} ${2 * Math.PI * 60}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      fontWeight: "bold",
                      color: "#1abc9c",
                    }}
                  >
                    65%
                  </div>
                  <div style={{ fontSize: "12px", color: "#95a5a6" }}>
                    이차함수
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "320px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          height: "100vh",
          overflowY: "auto",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <button
              style={{
                background: "none",
                border: "none",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              ‹
            </button>
            <span style={{ fontWeight: "bold", color: "#2c3e50", fontSize: "14px" }}>
              {currentMonth}
            </span>
            <button
              style={{
                background: "none",
                border: "none",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              ›
            </button>
          </div>
          <div style={{ fontSize: "10px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: "3px",
                textAlign: "center",
                color: "#95a5a6",
                marginBottom: "6px",
              }}
            >
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>
            {calendar.map((week, weekIdx) => (
              <div
                key={weekIdx}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7, 1fr)",
                  gap: "3px",
                  textAlign: "center",
                  marginBottom: "3px",
                }}
              >
                {week.map((day, dayIdx) => (
                  <div
                    key={dayIdx}
                    style={{
                      padding: "4px",
                      borderRadius: "4px",
                      backgroundColor: day === 15 ? "#1abc9c" : "transparent",
                      color:
                        day === 15 ? "white" : day ? "#2c3e50" : "transparent",
                      fontWeight: day === 15 ? "bold" : "normal",
                    }}
                  >
                    {day || ""}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <h3
              style={{ fontSize: "16px", fontWeight: "bold", color: "#1abc9c" }}
            >
              오늘의 일정
            </h3>
            <button
              style={{
                padding: "6px 12px",
                backgroundColor: "#1abc9c",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontSize: "12px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              더보기 +
            </button>
          </div>
          <div 
            style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "0",
              maxHeight: "200px",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            {schedules.map((schedule, idx) => {
              const status = getScheduleStatus(schedule.hour);
              const isPast = status === "past";
              const isCurrent = status === "current";
              
              return (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 16px",
                    backgroundColor: isCurrent ? "#E8F5F1" : "transparent",
                    borderBottom: idx < schedules.length - 1 ? "1px solid #f0f0f0" : "none",
                    opacity: isPast ? 0.4 : 1,
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: isPast ? "normal" : "500",
                      color: isPast ? "#95a5a6" : "#2c3e50",
                    }}
                  >
                    {schedule.time}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: isPast ? "#95a5a6" : "#2c3e50",
                    }}
                  >
                    {schedule.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: "4px",
              marginBottom: "8px",
            }}
          >
            <h3
              style={{ fontSize: "16px", fontWeight: "bold", color: "#1abc9c" }}
            >
              AI 인사이트
            </h3>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "14px",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "#2c3e50",
                marginBottom: "4px",
              }}
            >
              오답 패턴 발견
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "#7f8c8d",
                lineHeight: "1.5",
              }}
            >
              3반 학생들이 확률 단원에서 공통된 오답을 보이고 있습니다.
            </div>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "14px",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "#2c3e50",
                marginBottom: "4px",
              }}
            >
              학습 추천
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "#7f8c8d",
                lineHeight: "1.5",
              }}
            >
              소인수분해 보충 수업을 학생별 맞춤 문제를 추천합니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
