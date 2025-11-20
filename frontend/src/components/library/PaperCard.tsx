interface PaperCardProps {
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
  onDetail: (id: string) => void;
}

function PaperCard({
  id,
  imageUrl,
  subject,
  title,
  description,
  stats,
  onDetail,
}: PaperCardProps) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "none",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* 이미지 섹션 */}
      <div
        style={{
          position: "relative",
          height: "200px",
          backgroundColor: "#f0f0f0",
          overflow: "hidden",
          border: "1px solid #ddd",
          borderRadius: "8px",
          margin: "24px 24px 0 24px",
        }}
      >
        <img
          src={imageUrl}
          alt={title}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* 카드 내용 섹션 */}
      <div
        style={{
          padding: "20px 24px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* subject 태그 */}
        <div
          style={{
            display: "inline-block",
            backgroundColor: "#ECFEFF",
            color: "#0891B2",
            padding: "4px 12px",
            borderRadius: "10px",
            fontSize: "12px",
            fontWeight: "500",
            marginBottom: "8px",
            alignSelf: "flex-start",
          }}
        >
          {subject}
        </div>

        {/* title + 상세보기 버튼 flex */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#14B8A6",
              lineHeight: "1.4",
              margin: 0,
            }}
          >
            {title}
          </h3>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onDetail(id);
            }}
            style={{
              padding: "10px 16px",
              backgroundColor: "#14B8A6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0891B2";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#14B8A6";
            }}
          >
            상세보기 +
          </button>
        </div>

        {/* description */}
        <p
          style={{
            fontSize: "13px",
            color: "#666",
            marginBottom: "12px",
            lineHeight: "1.4",
          }}
        >
          {description}
        </p>

        {/* stats */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end", // 오른쪽 정렬
            gap: "12px",
            fontSize: "12px",
            marginBottom: "16px",
            marginTop: "auto",
          }}
        >
          <span style={{ color: "#0891B2" }}>
            노출률 <span style={{ fontWeight: "600" }}>{stats.submission}</span>
          </span>
          <span style={{ color: "#F43F5E" }}>
            정답률 <span style={{ fontWeight: "600" }}>{stats.correct}</span>
          </span>
          <span style={{ color: "#9333EA" }}>
            학생 피드백{" "}
            <span style={{ fontWeight: "600" }}>{stats.difficulty}</span>
          </span>
        </div>
        <div
          style={{
            borderTop: "1px solid #e0e0e0",
            paddingTop: "12px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {/* 왼쪽 아바타 */}
          <div
            style={{
              width: "36px",
              height: "36px",
              backgroundColor: "#9b59b6",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              color: "white",
              fontSize: "14px",
              flexShrink: 0,
            }}
          >
            안
          </div>

          {/* 오른쪽 이름 + 날짜 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "12px",
            }}
          >
            <span style={{ fontWeight: "500", color: "#181D27" }}>안샘이</span>
            <span style={{ fontWeight: "400", color: "#535862" }}>
              20 Jan 2025
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaperCard;
