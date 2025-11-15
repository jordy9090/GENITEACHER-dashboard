import { useState } from 'react';
import TabBar from '../../components/common/TabBar';

function PaperDetailPage() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['문항', '출제이력', '정답률', '통계'];

  return (
    <div>
      <h1>문제지 상세</h1>
      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <div style={{ marginTop: '20px' }}>
        {activeTab === 0 && <div>문항 내용</div>}
        {activeTab === 1 && <div>출제이력</div>}
        {activeTab === 2 && <div>정답률</div>}
        {activeTab === 3 && <div>통계</div>}
      </div>
    </div>
  );
}

export default PaperDetailPage;
