import React from "react";

interface ScheduleItem {
  id: number;
  time: string;
  title: string;
  sub: string;
  member?: string;
  active: boolean;
  date?: string;
}

interface Props {
  schedules: ScheduleItem[];
}

const TodaySchedule = ({ schedules }: Props) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.sectionTitle}>오늘의 일정</h3>

      {(!schedules || schedules.length === 0) && (
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            color: "#9CA3AF",
            fontSize: "14px",
          }}
        >
          일정이 없습니다.
        </div>
      )}

      <div style={styles.timelineContainer}>
        {schedules &&
          schedules.map((item, idx) => (
            <div key={item.id} style={styles.timelineItem}>
              <div
                style={{
                  ...styles.timeText,
                  color: item.active ? "#2DD4BF" : "#9CA3AF",
                  fontWeight: item.active ? "bold" : "500",
                }}
              >
                {item.time}
              </div>

              {idx !== schedules.length - 1 && (
                <div style={styles.timelineLine}></div>
              )}
              <div
                style={{
                  ...styles.timelineDot,
                  backgroundColor: item.active ? "#2DD4BF" : "#E5E7EB",
                  boxShadow: item.active
                    ? "0 0 0 4px rgba(45, 212, 191, 0.2)"
                    : "none",
                }}
              ></div>

              <div style={styles.contentBox}>
                <div
                  style={{
                    fontWeight: item.active ? "bold" : "600",
                    fontSize: "15px",
                    color: item.active ? "#111827" : "#9CA3AF",
                    marginBottom: "4px",
                  }}
                >
                  {item.title}
                </div>

                <div
                  style={{
                    fontSize: "13px",
                    color: item.active ? "#4B5563" : "#D1D5DB",
                    marginBottom: item.member ? "8px" : "0",
                  }}
                >
                  {item.sub}
                </div>

                {item.member && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <div style={styles.avatar}>👤</div>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "#6B7280",
                        fontWeight: "500",
                      }}
                    >
                      {item.member}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodaySchedule;

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.02)",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#375873",
    marginTop: 0,
    marginBottom: "20px",
  },
  timelineContainer: { display: "flex", flexDirection: "column" },
  timelineItem: {
    display: "flex",
    position: "relative",
    paddingBottom: "30px",
  },
  timeText: {
    width: "60px",
    textAlign: "right",
    paddingRight: "20px",
    fontSize: "14px",
  },
  timelineLine: {
    position: "absolute",
    left: "67px",
    top: "8px",
    bottom: "-8px",
    width: "1px",
    backgroundColor: "#E5E7EB",
  },
  timelineDot: {
    position: "absolute",
    left: "63px",
    top: "6px",
    width: "9px",
    height: "9px",
    borderRadius: "50%",
    zIndex: 1,
  },
  contentBox: { paddingLeft: "20px", flex: 1 },
  avatar: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#E5E7EB",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
  },
};
