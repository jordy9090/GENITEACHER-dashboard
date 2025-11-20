import React, { useState } from "react";
import CalendarSection from "./components/CalendarSection";
import TodaySchedule from "./components/TodaySchedule";
import WeeklySummary from "./components/WeeklySummary";
import UpcomingEvents from "./components/UpcomingEvents";
import AddScheduleModal from "./components/AddScheduleModal";

function SchedulePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  // [추가] 현재 보고 있는 달력의 기준 날짜 (기본값: 2025년 10월 1일)
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 1));

  // [추가] 이전 달로 이동
  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  // [추가] 다음 달로 이동
  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  // 날짜 클릭 시 모달 열기
  const handleDateClick = (day: number) => {
    // 선택된 연/월/일을 조합해서 state 저장
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

    setSelectedDate(formattedDate);
    setIsModalOpen(true);
  };

  return (
    <div style={styles.container}>
      {/* 1. 캘린더 영역에 필요한 데이터와 함수 전달 */}
      <CalendarSection
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        onDateClick={handleDateClick}
      />

      {/* 2. 사이드바 영역 */}
      <div style={styles.sidebar}>
        <TodaySchedule />
        <WeeklySummary />
        <UpcomingEvents />
      </div>

      {/* 3. 모달 영역 */}
      <AddScheduleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedDate={selectedDate}
      />
    </div>
  );
}

export default SchedulePage;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    backgroundColor: "#F5F7FA",
    minHeight: "100vh",
    padding: "20px",
    gap: "20px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Pretendard", "Apple SD Gothic Neo", "Segoe UI", sans-serif',
    color: "#333",
  },
  sidebar: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    minWidth: "300px",
  },
};
