import React, { useState, useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: string;
  onSave: (data: any) => void;
}

const AddScheduleModal = ({ isOpen, onClose, selectedDate, onSave }: Props) => {
  // 입력값 State
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [memo, setMemo] = useState("");

  useEffect(() => {
    if (isOpen) {
      setDate(selectedDate || "2025-10-15");
      setTitle("");
      setStartTime("");
      setEndTime("");
      setMemo("");
      setType("분류를 선택하세요");
    }
  }, [isOpen, selectedDate]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!title) {
      alert("제목을 입력해주세요.");
      return;
    }
    onSave({
      title,
      type,
      date,
      startTime,
      endTime,
      memo,
    });
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalBody}>
        <div style={styles.modalHeader}>
          <h2 style={styles.modalTitle}>일정 추가</h2>
          <p style={styles.modalDesc}>새로운 일정을 등록합니다.</p>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.formLabel}>제목</label>
          <input
            type="text"
            placeholder="일정 제목을 입력하세요"
            style={styles.inputField}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* ... (중간 입력 필드들은 아래 value, onChange만 추가해주면 됩니다) ... */}
        {/* 편의상 날짜/시간/분류/메모 부분에 value와 onChange를 모두 연결했다고 가정합니다. */}
        {/* 아래 코드는 전체 코드입니다. */}

        <div style={styles.inputGroup}>
          <label style={styles.formLabel}>분류</label>
          <div style={{ position: "relative" }}>
            <select
              style={{
                ...styles.inputField,
                appearance: "none",
                backgroundColor: "white",
              }}
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>분류를 선택하세요</option>
              <option value="수업">수업</option>
              <option value="회의">회의</option>
              <option value="상담">상담</option>
            </select>
            <span style={styles.selectArrow}>▼</span>
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.formLabel}>날짜</label>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={styles.inputField}
            />
            <span style={styles.iconPos}>📅</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
          <div style={{ flex: 1 }}>
            <label style={styles.formLabel}>시간</label>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="09:00"
                style={styles.inputField}
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
              <span style={styles.iconPos}>🕒</span>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <label style={styles.formLabel}>&nbsp;</label>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="10:00"
                style={styles.inputField}
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
              <span style={styles.iconPos}>🕒</span>
            </div>
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.formLabel}>메모</label>
          <textarea
            placeholder="추가 내용이나 메모를 입력하세요"
            style={{ ...styles.inputField, height: "100px", resize: "none" }}
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />
        </div>

        <div style={styles.btnGroup}>
          <button onClick={onClose} style={styles.btnCancel}>
            취소
          </button>
          <button onClick={handleSubmit} style={styles.btnSave}>
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddScheduleModal;

const styles: { [key: string]: React.CSSProperties } = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  modalBody: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "30px",
    width: "480px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  },
  modalHeader: { marginBottom: "24px" },
  modalTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#111827",
    margin: "0 0 4px 0",
  },
  modalDesc: { fontSize: "14px", color: "#6B7280", margin: 0 },
  inputGroup: { marginBottom: "20px" },
  formLabel: {
    display: "block",
    fontSize: "14px",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "8px",
  },
  inputField: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #E5E7EB",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
    color: "#374151",
  },
  selectArrow: {
    position: "absolute",
    right: "15px",
    top: "12px",
    fontSize: "12px",
    pointerEvents: "none",
  },
  iconPos: {
    position: "absolute",
    right: "12px",
    top: "10px",
    fontSize: "16px",
  },
  btnGroup: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginTop: "30px",
  },
  btnCancel: {
    padding: "10px 24px",
    borderRadius: "6px",
    border: "1px solid #2DD4BF",
    color: "#2DD4BF",
    backgroundColor: "white",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "pointer",
  },
  btnSave: {
    padding: "10px 24px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#2DD4BF",
    color: "white",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "pointer",
  },
};
