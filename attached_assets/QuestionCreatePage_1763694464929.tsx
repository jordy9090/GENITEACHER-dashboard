import { useState, useRef } from "react";

interface Question {
  id: number;
  number: number;
  content: string;
  options: string[];
  status: "completed" | "needsReview";
  isApproved: boolean;
}

function QuestionCreatePage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const file = files[0];
    const fileType = file.type;

    if (
      !fileType.includes("pdf") &&
      !fileType.includes("word") &&
      !fileType.includes("image")
    ) {
      alert("PDF, Word, 또는 이미지 파일만 업로드 가능합니다.");
      return;
    }

    const mockQuestions: Question[] = [
      {
        id: 1,
        number: 1,
        content: "다음 중 순환소수의 표현으로 옳지 않은 것은?",
        options: [
          "① 2.342342342… →2.34̇2̇",
          "② 1.999999… →1.9̇",
          "③ -3.14666… →-3.146̇",
          "④ 8.17217217… →8.172̇",
          "⑤ 0.3606060… →0.36̇0̇"
        ],
        status: "completed",
        isApproved: false
      },
      {
        id: 2,
        number: 1,
        content: "다음 중 순환소수의 표현으로 옳지 않은 것은?",
        options: [
          "① 2.342342342… →2.34̇2̇",
          "② 1.999999… →1.9̇",
          "③ -3.14666… →-3.146̇",
          "④ 8.17217217… →8.172̇",
          "⑤ 0.3606060… →0.36̇0̇"
        ],
        status: "completed",
        isApproved: false
      },
      {
        id: 3,
        number: 1,
        content: "다음 중 순환소수의 표현으로 옳지 않은 것은?",
        options: [
          "① 2.342342342… →2.34̇2̇",
          "② 1.999999… →1.9̇",
          "③ -3.14666… →-3.146̇",
          "④ 8.17217217… →8.172̇",
          "⑤ 0.3606060… →0.36̇0̇"
        ],
        status: "needsReview",
        isApproved: false
      },
      {
        id: 4,
        number: 1,
        content: "다음 중 순환소수의 표현으로 옳지 않은 것은?",
        options: [
          "① 2.342342342… →2.34̇2̇",
          "② 1.999999… →1.9̇",
          "③ -3.14666… →-3.146̇",
          "④ 8.17217217… →8.172̇",
          "⑤ 0.3606060… →0.36̇0̇"
        ],
        status: "completed",
        isApproved: false
      },
      {
        id: 5,
        number: 1,
        content: "다음 중 순환소수의 표현으로 옳지 않은 것은?",
        options: [
          "① 2.342342342… →2.34̇2̇",
          "② 1.999999… →1.9̇",
          "③ -3.14666… →-3.146̇",
          "④ 8.17217217… →8.172̇",
          "⑤ 0.3606060… →0.36̇0̇"
        ],
        status: "completed",
        isApproved: false
      },
      {
        id: 6,
        number: 1,
        content: "다음 중 순환소수의 표현으로 옳지 않은 것은?",
        options: [
          "① 2.342342342… →2.34̇2̇",
          "② 1.999999… →1.9̇",
          "③ -3.14666… →-3.146̇",
          "④ 8.17217217… →8.172̇",
          "⑤ 0.3606060… →0.36̇0̇"
        ],
        status: "completed",
        isApproved: false
      }
    ];

    setQuestions(mockQuestions);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const handleApprove = (id: number) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, isApproved: true } : q
    ));
  };

  const handleEdit = (id: number) => {
    alert(`문항 ${id} 수정 기능은 개발 예정입니다.`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        style={{
          border: `2px dashed ${isDragging ? "#1abc9c" : "#bdc3c7"}`,
          borderRadius: "8px",
          padding: "60px 20px",
          textAlign: "center",
          backgroundColor: isDragging ? "#ecf9f6" : "#f8f9fa",
          cursor: "pointer",
          marginBottom: "30px",
          transition: "all 0.3s ease"
        }}
      >
        <div style={{ fontSize: "48px", marginBottom: "15px", color: "#95a5a6" }}>
          📁
        </div>
        <div style={{ fontSize: "16px", color: "#1abc9c", marginBottom: "5px", fontWeight: "500" }}>
          Upload a file or drag and drop
        </div>
        <div style={{ fontSize: "14px", color: "#7f8c8d" }}>
          PDF, Word, Image
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx,image/*"
          onChange={(e) => handleFileUpload(e.target.files)}
          style={{ display: "none" }}
        />
      </div>

      {questions.length > 0 && (
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "10px", 
          marginBottom: "20px",
          padding: "10px",
          backgroundColor: "#fff3cd",
          borderRadius: "6px",
          border: "1px solid #ffc107"
        }}>
          <span style={{ fontSize: "18px" }}>ℹ️</span>
          <span style={{ fontSize: "14px", color: "#856404" }}>
            6개 문항이 자동 분리되었습니다. <strong>빨간</strong> 칸은 확인이 필요합니다.
          </span>
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {questions.map((question) => (
          <div
            key={question.id}
            style={{
              border: question.status === "needsReview" ? "2px solid #ffcdd2" : "1px solid #e0e0e0",
              borderRadius: "8px",
              padding: "20px",
              backgroundColor: question.status === "needsReview" ? "#ffebee" : "white",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <div style={{ 
              fontSize: "16px", 
              fontWeight: "bold",
              marginBottom: "8px"
            }}>
              {question.number}.
            </div>

            <div style={{ 
              fontSize: "14px", 
              lineHeight: "1.6",
              marginBottom: "10px",
              fontWeight: "500"
            }}>
              {question.content}
            </div>

            <div style={{ 
              fontSize: "13px", 
              lineHeight: "1.8",
              color: "#424242"
            }}>
              {question.options.map((option, idx) => (
                <div key={idx}>{option}</div>
              ))}
            </div>

            <div style={{ 
              marginTop: "auto",
              paddingTop: "12px",
              borderTop: "1px solid #e0e0e0"
            }}>
              <div style={{ 
                fontSize: "13px", 
                color: question.status === "completed" ? "#1abc9c" : "#e74c3c",
                marginBottom: "10px",
                fontWeight: "500"
              }}>
                {question.status === "completed" ? "인식완료" : "확인 필요"}
              </div>

              <div style={{ 
                display: "flex", 
                gap: "8px" 
              }}>
                <button
                  onClick={() => handleApprove(question.id)}
                  disabled={question.isApproved}
                  style={{
                    flex: 1,
                    padding: "8px 12px",
                    backgroundColor: question.isApproved ? "#95a5a6" : "#1abc9c",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: question.isApproved ? "not-allowed" : "pointer",
                    fontSize: "13px",
                    fontWeight: "500"
                  }}
                >
                  {question.isApproved ? "검수완료" : "검수완료"}
                </button>
                <button
                  onClick={() => handleEdit(question.id)}
                  style={{
                    flex: 1,
                    padding: "8px 12px",
                    backgroundColor: "white",
                    color: "#1abc9c",
                    border: "1px solid #1abc9c",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: "500"
                  }}
                >
                  수정하기
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionCreatePage;
