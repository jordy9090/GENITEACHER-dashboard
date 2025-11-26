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
        backgroundColor: "white",
        color: "white",
        padding: "20px",
      }}
    >
      <div style={{ marginBottom: "30px" }}>
        <img
          src="/logo.png"
          alt="GENITEACHER"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "210px",
          }}
        />
      </div>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {menuItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <li key={item.page} style={{ marginBottom: "10px" }}>
                <button
                  onClick={() => onNavigate(item.page)}
                  style={{
                    color: isActive ? "#0891B2" : "#475467",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "5px",
                    backgroundColor: isActive ? "#ECFEFF" : "transparent",
                    transition: "background-color 0.2s",
                    border: "none",
                    width: "100%",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: isActive ? "500" : "400",
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
