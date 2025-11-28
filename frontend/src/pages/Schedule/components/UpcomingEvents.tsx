import React from "react";

interface EventItem {
  id: number;
  date: string;
  title: string;
  tag: string;
}

interface Props {
  events: EventItem[];
}

const UpcomingEvents = ({ events }: Props) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.sectionTitle}>다가오는 중요일정</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {events &&
          events.map((event, idx) => (
            <div
              key={event.id}
              style={{
                ...styles.upcomingRow,
                borderBottom:
                  idx === events.length - 1 ? "none" : "1px solid #F3F4F6",
              }}
            >
              <div style={styles.dateBadge}>
                <span>📅</span>
                <span>{event.date}</span>
              </div>
              <div style={styles.eventTitle}>{event.title}</div>
              <div style={styles.tagBadge}>{event.tag}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;

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
  upcomingRow: { display: "flex", alignItems: "center", padding: "16px 0" },
  dateBadge: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    color: "#2DD4BF",
    fontWeight: "bold",
    fontSize: "15px",
    minWidth: "80px",
  },
  eventTitle: { flex: 1, fontSize: "14px", color: "#374151" },
  tagBadge: {
    backgroundColor: "#FFF1F2",
    color: "#F43F5E",
    fontSize: "12px",
    fontWeight: "600",
    padding: "6px 10px",
    borderRadius: "6px",
    whiteSpace: "nowrap",
  },
};
