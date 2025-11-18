interface TabBarProps {
  tabs: string[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

function TabBar({ tabs, activeTab, onTabChange }: TabBarProps) {
  return (
    <div
      style={{
        display: "flex",
        borderBottom: "2px solid #e0e0e0",
        gap: "10px",
      }}
    >
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onTabChange(index)}
          style={{
            padding: "10px 20px",
            border: "none",
            background: "none",
            cursor: "pointer",
            borderBottom: activeTab === index ? "2px solid #3498db" : "none",
            color: activeTab === index ? "#3498db" : "#7f8c8d",
            fontWeight: activeTab === index ? "bold" : "normal",
            marginBottom: "-2px",
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default TabBar;
