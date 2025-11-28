import React from "react";

interface Props {
  currentDate: Date;
  selectedDate: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onDateSelect: (day: number) => void;
  onAddSchedule: () => void;
}

const CalendarSection = ({
  currentDate,
  selectedDate,
  onPrevMonth,
  onNextMonth,
  onDateSelect,
  onAddSchedule,
}: Props) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const prevMonthLastDate = new Date(year, month, 0).getDate();

  const days = [];

  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push({
      day: prevMonthLastDate - firstDayOfWeek + 1 + i,
      type: "prev",
    });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, type: "current" });
  }

  const remainingCells = 42 - days.length;
  for (let i = 1; i <= remainingCells; i++) {
    days.push({ day: i, type: "next" });
  }

  const isSelectedDate = (day: number, type: string) => {
    if (type !== "current") return false;
    const formattedDate = `${year}-${(month + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
    return formattedDate === selectedDate;
  };

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
        <button style={styles.addBtn} onClick={onAddSchedule}>
          일정추가 <span style={{ fontSize: "16px", marginLeft: "4px" }}>+</span>
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
          const isSelected = isSelectedDate(item.day, item.type);

          let textColor = "#374151";
          if (!isCurrentMonth) textColor = "#E5E7EB";
          else if (isSunday) textColor = "#EF4444";

          return (
            <div
              key={index}
              style={{
                ...styles.cell,
                backgroundColor: isSelected ? "#E6FAF8" : "transparent",
                borderLeft: isSelected ? "3px solid #2DD4BF" : "none",
              }}
              onClick={() => isCurrentMonth && onDateSelect(item.day)}
            >
              <span
                style={{
                  ...styles.dateNum,
                  fontWeight: isSelected ? "bold" : "500",
                  backgroundColor: isSelected ? "#2DD4BF" : "transparent",
                  color: isSelected ? "#fff" : textColor,
                }}
              >
                {item.day}
              </span>
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
  gridBody: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    borderTop: "1px solid #E5E7EB",
    borderLeft: "1px solid #E5E7EB",
  },
  cell: {
    padding: "10px",
    borderRight: "1px solid #F3F4F6",
    borderBottom: "1px solid #F3F4F6",
    cursor: "pointer",
    position: "relative",
    minHeight: "100px",
    transition: "background-color 0.2s ease",
  },
  dateNum: {
    fontSize: "14px",
    marginBottom: "6px",
    display: "inline-block",
    width: "28px",
    height: "28px",
    lineHeight: "28px",
    textAlign: "center",
    borderRadius: "50%",
  },
};
