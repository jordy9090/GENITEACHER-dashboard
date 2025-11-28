import React from "react";

interface StatItem {
  label: string;
  count: number;
}

interface Props {
  stats: StatItem[];
}

const WeeklySummary = ({ stats }: Props) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.sectionTitle}>이번 주 요약</h3>
      <div style={styles.summaryGrid}>
        {stats &&
          stats.map((stat) => (
            <div key={stat.label} style={styles.summaryBox}>
              <div style={styles.summaryLabel}>{stat.label}</div>
              <div style={styles.summaryCount}>{stat.count}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WeeklySummary;

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
  summaryGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "10px",
  },
  summaryBox: {
    backgroundColor: "#F0FDFA",
    borderRadius: "8px",
    padding: "15px 5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
  summaryLabel: { fontSize: "13px", color: "#4B5563", fontWeight: "600" },
  summaryCount: { fontSize: "24px", fontWeight: "bold", color: "#2DD4BF" },
};
