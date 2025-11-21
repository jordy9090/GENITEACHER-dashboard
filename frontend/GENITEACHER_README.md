# GENITEACHER - 한국어 교사 관리 시스템

종합적인 한국어 교사 관리 시스템입니다. React, TypeScript, Vite를 사용하여 구축되었습니다.

## 📋 주요 기능

### 1. 대시보드 (Dashboard)
- 환영 배너 및 검색 기능
- 통계 카드 (활성 학생, 과제, 알림)
- 월별 정확도 추이 라인 차트
- 취약 개념 도넛 차트
- 일정 캘린더
- AI 인사이트

### 2. 문항 만들기 (Question Create)
- 드래그 앤 드롭 파일 업로드
- PDF, Word, Image 파일 지원
- 자동 문항 분리 (6개 문항)
- 문항별 검수 시스템
- 상태 표시기 (완료/검토 필요)
- 4열 그리드 레이아웃

### 3. 학생/반 관리 (Class Management)
- 반 목록 및 상세 정보
- 학생 목록 관리
- 학생 상세 프로필
- 성취도 분석
  - 레이더 차트
  - 라인 차트
  - 바 차트
  - 도넛 차트

### 4. 일정 관리 (Schedule)
- 캘린더 뷰
- 오늘의 일정
- 주간 요약
- 예정된 이벤트
- 일정 추가 모달

### 5. 자료실 (Library)
- 문제지 목록
- 문제지 상세 정보
- 문제 목록 및 통계

## 🛠️ 기술 스택

- **Frontend Framework**: React 19.0.0
- **Language**: TypeScript
- **Build Tool**: Vite 7.2.2
- **Charts**: Recharts 2.15.0
- **Navigation**: 상태 기반 네비게이션 (React Router 없이 구현)
- **UI**: CSS-in-JS (인라인 스타일)

## 📁 프로젝트 구조

```
frontend/
├── src/
│   ├── components/
│   │   ├── common/          # 재사용 가능한 컴포넌트
│   │   │   ├── Card.tsx
│   │   │   ├── ChartCard.tsx
│   │   │   ├── StudentClassCard.tsx
│   │   │   ├── TabBar.tsx
│   │   │   └── Table.tsx
│   │   ├── class/           # 반 관련 컴포넌트
│   │   │   └── ClassCard.tsx
│   │   ├── library/         # 자료실 컴포넌트
│   │   │   └── PaperCard.tsx
│   │   ├── header/          # 헤더 컴포넌트
│   │   │   └── Topbar.tsx
│   │   └── sidebar/         # 사이드바 컴포넌트
│   │       └── Sidebar.tsx
│   ├── layouts/
│   │   └── DashboardLayout.tsx  # 메인 레이아웃
│   ├── pages/
│   │   ├── Dashboard/
│   │   │   └── DashboardPage.tsx
│   │   ├── Class/
│   │   │   ├── ClassListPage.tsx
│   │   │   ├── ClassDetailPage.tsx
│   │   │   ├── StudentListPage.tsx
│   │   │   ├── StudentDetailPage.tsx
│   │   │   └── AchievementAnalysisPage.tsx
│   │   ├── Library/
│   │   │   ├── LibraryListPage.tsx
│   │   │   ├── PaperDetailPage.tsx
│   │   │   └── QuestionCreatePage.tsx
│   │   └── Schedule/
│   │       ├── SchedulePage.tsx
│   │       └── components/
│   │           ├── AddScheduleModal.tsx
│   │           ├── CalendarSection.tsx
│   │           ├── TodaySchedule.tsx
│   │           ├── UpcomingEvents.tsx
│   │           └── WeeklySummary.tsx
│   ├── App.tsx              # 메인 앱 컴포넌트 (네비게이션)
│   ├── main.tsx             # 진입점
│   └── index.css            # 글로벌 스타일
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 설치 및 실행

### 필수 요구사항
- Node.js 18 이상
- npm 또는 yarn

### 설치
```bash
cd frontend
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

브라우저에서 `http://localhost:5000` 으로 접속

### 프로덕션 빌드
```bash
npm run build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다.

### 프로덕션 미리보기
```bash
npm run preview
```

## 🎨 디자인 특징

- **한국어 인터페이스**: 모든 UI가 한국어로 제공
- **반응형 디자인**: 다양한 화면 크기 지원
- **일관된 색상 팔레트**: 
  - 주요 색상: #3498db (파란색)
  - 보조 색상: #2ecc71 (초록색), #e74c3c (빨간색)
  - 배경: #f5f7fa
- **카드 기반 레이아웃**: 모든 주요 섹션이 카드로 구성
- **차트 시각화**: Recharts를 사용한 데이터 시각화

## 🧭 네비게이션 시스템

상태 기반 네비게이션 시스템을 사용하여 React Router 없이 구현:

```typescript
type PageType = 
  | 'dashboard'        // 대시보드
  | 'problem'          // 문항 만들기
  | 'class'            // 반 목록
  | 'classDetail'      // 반 상세
  | 'studentList'      // 학생 목록
  | 'studentDetail'    // 학생 상세
  | 'achievementAnalysis'  // 성취도 분석
  | 'schedule'         // 일정 관리
  | 'library'          // 자료실
  | 'paperDetail';     // 문제지 상세
```

## 📊 주요 컴포넌트

### 차트 컴포넌트
- **LineChart**: 월별 정확도 추이
- **BarChart**: 단원별 성취도, 주간 활동
- **RadarChart**: 영역별 분석
- **DonutChart**: 취약 개념, 문항 유형 분포

### 재사용 가능한 컴포넌트
- **Card**: 기본 카드 컴포넌트
- **ChartCard**: 차트를 포함한 카드
- **StudentClassCard**: 학생/반 카드
- **Table**: 데이터 테이블
- **TabBar**: 탭 네비게이션

## 📝 개발 노트

- **타입 안전성**: 전체 프로젝트에서 TypeScript 사용
- **컴포넌트 구조**: 기능별로 폴더 분리
- **상태 관리**: React의 useState/Props를 사용한 간단한 상태 관리
- **스타일링**: CSS-in-JS 패턴으로 컴포넌트별 스타일 캡슐화

## 🔧 향후 개선 사항

- [ ] React Router 또는 Next.js로 마이그레이션
- [ ] 전역 상태 관리 (Redux, Zustand 등)
- [ ] API 연동 및 백엔드 통합
- [ ] 사용자 인증 및 권한 관리
- [ ] 반응형 모바일 최적화
- [ ] 다크 모드 지원
- [ ] 국제화 (i18n) 지원

## 📄 라이선스

이 프로젝트는 교육 목적으로 개발되었습니다.

## 👨‍💻 개발자

GENITEACHER Team

---

**Last Updated**: November 21, 2025
