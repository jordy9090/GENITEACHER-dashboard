import { useState } from "react";
import PaperCard from "../../components/library/PaperCard";

interface Paper {
  id: string;
  imageUrl: string;
  subject: string;
  title: string;
  description: string;
  stats: {
    submission: string;
    correct: string;
    difficulty: string;
  };
}

interface TeacherProfile {
  name: string;
  subjects: string[];
  avatarColor: string;
}

interface LibraryListPageProps {
  onNavigateToPaper: (paperInfo: { id: string; subject: string; title: string; description: string }) => void;
}

function LibraryListPage({ onNavigateToPaper }: LibraryListPageProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const teacher: TeacherProfile = {
    name: "안샘이",
    subjects: ["수학", "과학"],
    avatarColor: "#9b59b6",
  };

  const papers: Paper[] = Array.from({ length: 7 }, (_, i) => {
    const subject = i % 2 === 0 ? "수학" : "과학";
    return {
      id: `${i + 1}`,
      imageUrl: "/paper-math.png",
      subject,
      title: `${subject} 영역(나 형) ${i + 1}`,
      description: "2018년 9월 3일 모의고사 문제지 (30문제)",
      stats: {
        submission: `${Math.floor(Math.random() * 100)}%`,
        correct: `${Math.floor(Math.random() * 100)}%`,
        difficulty: (Math.random() * 5).toFixed(1),
      },
    };
  });

  const handlePaperDetail = (paperId: string) => {
    const paper = papers.find(p => p.id === paperId);
    if (paper) {
      onNavigateToPaper({
        id: paper.id,
        subject: paper.subject,
        title: paper.title,
        description: paper.description
      });
    }
  };

  const handleRegisterPaper = () => {
    console.log("문제지 등록하기");
  };

  const filteredPapers = papers.filter(
    (paper) =>
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.subject.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#f8f9fa",
        minHeight: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "18px",
          marginBottom: "24px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          boxShadow: "none",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "8px",
            backgroundColor: teacher.avatarColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "24px",
            fontWeight: "600",
            flexShrink: 0,
          }}
        >
          {teacher.name.charAt(0)}
        </div>
        <div>
          <h2
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#2c3e50",
              marginBottom: "4px",
            }}
          >
            {teacher.name}
          </h2>
          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            {teacher.subjects.map((subject, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "transparent",
                  color: "#0891B2",
                  padding: "4px 12px",
                  borderRadius: "4px",
                  fontSize: "13px",
                  fontWeight: "500",
                  border: "1px solid #E2E8F0",
                }}
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          marginBottom: "24px",
          position: "relative",
        }}
      >
        <input
          type="text"
          placeholder="Search or type command..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "14px 20px 14px 48px",
            fontSize: "14px",
            border: "1px solid transparent",
            borderRadius: "8px",
            backgroundColor: "white",
            outline: "none",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "#20c997";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "transparent";
          }}
        />
        <span
          style={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "20px",
            color: "#999",
          }}
        >
          🔍
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
          gap: "24px",
          marginBottom: "24px",
        }}
      >
        {filteredPapers.map((paper) => (
          <PaperCard
            key={paper.id}
            id={paper.id}
            imageUrl={paper.imageUrl}
            subject={paper.subject}
            title={paper.title}
            description={paper.description}
            stats={paper.stats}
            onDetail={handlePaperDetail}
          />
        ))}
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "40px",
          right: "40px",
          zIndex: 1000,
        }}
      >
        <button
          onClick={handleRegisterPaper}
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "#20c997",
            color: "white",
            border: "none",
            fontSize: "28px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(32, 201, 151, 0.4)",
            transition: "all 0.2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#1ba87f";
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow =
              "0 6px 16px rgba(32, 201, 151, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#20c997";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(32, 201, 151, 0.4)";
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default LibraryListPage;
