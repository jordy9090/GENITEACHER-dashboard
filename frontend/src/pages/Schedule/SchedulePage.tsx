import React, { useState, useEffect } from "react";
import CalendarSection from "./components/CalendarSection";
import TodaySchedule from "./components/TodaySchedule";
import WeeklySummary from "./components/WeeklySummary";
import UpcomingEvents from "./components/UpcomingEvents";
import AddScheduleModal from "./components/AddScheduleModal";

// --- [Type 정의] ---
export interface ScheduleItem {
  id: number;
  time: string;
  title: string;
  sub: string;
  member?: string;
  active: boolean;
  date?: string;
}

export interface EventItem {
  id: number;
  date: string;
  title: string;
  tag: string;
}

export interface StatItem {
  label: string;
  count: number;
}

// --- [목업 데이터 (가짜 DB)] ---
let MOCK_SCHEDULES: ScheduleItem[] = [
  {
    id: 1,
    time: "09:00",
    title: "1반 수학 수업",
    sub: "미분과 적분 단원",
    active: false,
    date: "2025-10-15",
  },
  {
    id: 2,
    time: "11:00",
    title: "3반 수학 수업",
    sub: "함수의 극한",
    active: true,
    date: "2025-10-15",
  },
  {
    id: 3,
    time: "14:00",
    title: "중간고사 감독",
    sub: "2학년 수학 시험",
    active: false,
    date: "2025-10-15",
  },
  {
    id: 4,
    time: "16:00",
    title: "학부모 상담",
    sub: "김하성 학부모님",
    member: "김하성",
    active: false,
    date: "2025-10-15",
  },
];

const MOCK_EVENTS: EventItem[] = [
  { id: 1, date: "10.15", title: "1반, 3반 수학 과제", tag: "수행평가 마감" },
  { id: 2, date: "10.18", title: "중간고사 결과 검토", tag: "교사 회의" },
  { id: 3, date: "10.22", title: "2024년 2학기", tag: "학부모 간담회" },
  { id: 4, date: "10.31", title: "축제준비", tag: "교사 회의" },
];

const MOCK_STATS: StatItem[] = [
  { label: "수업", count: 12 },
  { label: "시험", count: 3 },
  { label: "상담", count: 5 },
  { label: "회의", count: 2 },
];

function SchedulePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 1));

  // --- [State] 서버에서 받아온 데이터를 저장 ---
  const [todaySchedules, setTodaySchedules] = useState<ScheduleItem[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<EventItem[]>([]);
  const [weeklyStats, setWeeklyStats] = useState<StatItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // --- [GET 시뮬레이션] 데이터 불러오기 ---
  useEffect(() => {
    // 실제라면: axios.get('/api/schedule')...
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        setTodaySchedules([...MOCK_SCHEDULES]);
        setUpcomingEvents([...MOCK_EVENTS]);
        setWeeklyStats([...MOCK_STATS]);
      } catch (e) {
        console.error("데이터 로딩 실패", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentDate]);

  // --- [POST 시뮬레이션] 데이터 저장하기 ---
  const handleSaveSchedule = async (newData: any) => {
    // 로딩 시작 (선택사항)
    // setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      const newId = MOCK_SCHEDULES.length + 1;
      const newSchedule: ScheduleItem = {
        id: newId,
        time: newData.startTime || "00:00",
        title: newData.title,
        sub: newData.memo || "추가된 일정",
        active: false,
        date: newData.date,
      };
      MOCK_SCHEDULES.push(newSchedule);

      setTodaySchedules([...MOCK_SCHEDULES]);

      setIsModalOpen(false);
      alert("일정이 서버에 저장되었습니다!");
    } catch (e) {
      alert("저장 실패");
    }
  };

  // 캘린더 이동 함수
  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };
  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };
  const handleDateClick = (day: number) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
    setSelectedDate(formattedDate);
    setIsModalOpen(true);
  };

  return (
    <div style={styles.container}>
      <CalendarSection
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        onDateClick={handleDateClick}
      />

      <div style={styles.sidebar}>
        {isLoading ? (
          <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
            데이터 불러오는 중...
          </div>
        ) : (
          <>
            <TodaySchedule schedules={todaySchedules} />
            <WeeklySummary stats={weeklyStats} />
            <UpcomingEvents events={upcomingEvents} />
          </>
        )}
      </div>

      <AddScheduleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedDate={selectedDate}
        onSave={handleSaveSchedule}
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
