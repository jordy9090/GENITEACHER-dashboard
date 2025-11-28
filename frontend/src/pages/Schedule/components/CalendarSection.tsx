import React from "react";

interface Props {
  currentDate: Date; // 현재 날짜 객체
  onPrevMonth: () => void; // 이전 달 함수
  onNextMonth: () => void; // 다음 달 함수
  onDateClick: (day: number) => void;
}

const CalendarSection = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
  onDateClick,
}: Props) => {
  // --- [로직] 달력 생성 알고리즘 ---
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0 ~ 11

  // 이번 달의 마지막 날짜
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // 이번 달 1일의 요일 (0: 일요일 ~ 6: 토요일)
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  // 이전 달의 마지막 날짜 (빈칸 채우기용)
  const prevMonthLastDate = new Date(year, month, 0).getDate();

  // 날짜 배열 생성
  const days = [];

  // 1. 지난달 날짜 채우기 (회색 처리)
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push({
      day: prevMonthLastDate - firstDayOfWeek + 1 + i,
      type: "prev",
    });
  }

  // 2. 이번 달 날짜 채우기
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, type: "current" });
  }

  // 3. 다음 달 날짜 채우기 (나머지 칸 - 총 35칸 또는 42칸 맞추기)
  const remainingCells = 42 - days.length;
  for (let i = 1; i <= remainingCells; i++) {
    days.push({ day: i, type: "next" });
  }

  const showDemoEvents = year === 2025 && month === 10;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div style={styles.mainContent}>
      <div style={styles.calendarHeader}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button style={styles.navBtn} onClick={onPrevMonth}>
            ❮
          </button>

          <span style={styles.headerTitle}>
            {monthNames[month]}, {year}
          </span>

          <button style={styles.navBtn} onClick={onNextMonth}>
            ❯
          </button>
        </div>
        <button
          style={styles.addBtn}
          onClick={() => onDateClick(new Date().getDate())}
        >
          일정추가{" "}
          <span style={{ fontSize: "16px", marginLeft: "4px" }}>+</span>
        </button>
      </div>

      <div style={styles.gridHeader}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => (
          <div
            key={day}
            style={{
              ...styles.gridHeaderCell,
              color: idx === 0 ? "#EF4444" : "#9CA3AF",
            }}
          >
            {day}
          </div>
        ))}
      </div>

      <div style={styles.gridBody}>
        {days.map((item, index) => {
          const isCurrentMonth = item.type === "current";
          const isSunday = index % 7 === 0;

          let textColor = "#374151";
          if (!isCurrentMonth) textColor = "#E5E7EB";
          else if (isSunday) textColor = "#EF4444";

          return (
            <div
              key={index}
              style={{
                ...styles.cell,
                backgroundColor:
                  showDemoEvents && item.day === 15 && isCurrentMonth
                    ? "#F0FDFA"
                    : "transparent",
              }}
              onClick={() => isCurrentMonth && onDateClick(item.day)}
            >
              <span
                style={{
                  ...styles.dateNum,
                  color: textColor,
                  fontWeight:
                    showDemoEvents && item.day === 15 && isCurrentMonth
                      ? "bold"
                      : "500",
                }}
              >
                {item.day}
              </span>

              {showDemoEvents && isCurrentMonth && item.day === 13 && (
                <>
                  <div style={styles.eventText}>• 9AM 1반 수학</div>
                  <div style={styles.eventText}>• 11AM 3반 수학</div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarSection;

const styles: { [key: string]: React.CSSProperties } = {
  mainContent: {
    flex: 3,
    backgroundColor: "#FFFFFF",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.02)",
    display: "flex",
    flexDirection: "column",
  },
  calendarHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },
  headerTitle: { fontSize: "24px", fontWeight: "700", color: "#1F2937" },
  navBtn: {
    background: "white",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    width: "32px",
    height: "32px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    color: "#6B7280",
  },
  addBtn: {
    backgroundColor: "#2DD4BF",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "8px 16px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "pointer",
  },
  gridHeader: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    marginBottom: "10px",
  },
  gridHeaderCell: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: "14px",
    paddingBottom: "10px",
  },

  // Grid Body를 CSS Grid로 변경하여 7열 자동 배치
  gridBody: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)", // 7열 고정
    borderTop: "1px solid #E5E7EB",
    borderLeft: "1px solid #E5E7EB", // 외곽선 보강
  },
  cell: {
    padding: "10px",
    borderRight: "1px solid #F3F4F6",
    borderBottom: "1px solid #F3F4F6", // Grid 아이템마다 하단 선
    cursor: "pointer",
    position: "relative",
    minHeight: "100px", // 높이 확보
  },
  dateNum: {
    fontSize: "14px",
    marginBottom: "6px",
    display: "inline-block",
    width: "24px",
    height: "24px",
    lineHeight: "24px",
    textAlign: "center",
    borderRadius: "50%",
  },
  eventText: {
    fontSize: "11px",
    color: "#4B5563",
    marginBottom: "2px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};
