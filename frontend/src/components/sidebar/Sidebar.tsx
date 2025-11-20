type PageType = "dashboard" | "problem" | "class" | "schedule" | "library";

interface SidebarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const menuItems: Array<{ page: PageType; label: string; icon: string }> = [
    { page: "dashboard", label: "대시보드", icon: "📊" },
    { page: "problem", label: "문항 만들기", icon: "📑" },
    { page: "schedule", label: "일정 관리", icon: "📅" },
    { page: "class", label: "학생/반", icon: "👥" },
    { page: "library", label: "자료실", icon: "📚" },
  ];

  return (
    <aside
      style={{
        width: "250px",
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "30px", fontSize: "20px" }}>GENITEACHER</h2>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {menuItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <li key={item.page} style={{ marginBottom: "10px" }}>
                <button
                  onClick={() => onNavigate(item.page)}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "5px",
                    backgroundColor: isActive
                      ? "rgba(255,255,255,0.1)"
                      : "transparent",
                    transition: "background-color 0.2s",
                    border: "none",
                    width: "100%",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  <span style={{ marginRight: "10px" }}>{item.icon}</span>
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
