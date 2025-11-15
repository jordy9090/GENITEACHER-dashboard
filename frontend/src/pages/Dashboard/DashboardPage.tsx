import Card from '../../components/common/Card';
import ChartCard from '../../components/common/ChartCard';

function DashboardPage() {
  return (
    <div>
      <h1>대시보드</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
        <Card title="오늘의 일정">
          <p>등록된 일정이 없습니다.</p>
        </Card>
        <Card title="학생 현황">
          <p>총 학생 수: 0명</p>
        </Card>
        <ChartCard title="최근 성적 통계">
          <p>차트가 표시됩니다.</p>
        </ChartCard>
      </div>
    </div>
  );
}

export default DashboardPage;
