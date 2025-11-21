import { useState } from 'react';

type PageType = 'dashboard' | 'problem' | 'class' | 'schedule' | 'library';

interface TopbarProps {
  currentPage: PageType;
}

function Topbar({ currentPage }: TopbarProps) {
  const [activeTab, setActiveTab] = useState('공석');
  
  const showTabs = currentPage === 'class';

  return (
    <header style={{
      backgroundColor: 'white',
      borderBottom: '1px solid #e0e0e0'
    }}>
      <div style={{
        height: '60px',
        padding: '0 30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#3498db',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold'
          }}>
            안
          </div>
          <div>
            <div style={{ fontSize: '16px', fontWeight: '600' }}>안성이</div>
            <div style={{ fontSize: '12px', color: '#999' }}>선생님</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={{ fontSize: '16px' }}>🌐</span>
          <span style={{ fontSize: '14px' }}>한국어</span>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#9b59b6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            안
          </div>
          <span style={{ fontSize: '14px' }}>안성이(Operator)</span>
        </div>
      </div>

      {showTabs && (
        <div style={{
          padding: '0 30px',
          display: 'flex',
          gap: '20px',
          borderTop: '1px solid #f0f0f0'
        }}>
          {['공석', '과제'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '12px 0',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: activeTab === tab ? '2px solid #3498db' : '2px solid transparent',
                color: activeTab === tab ? '#3498db' : '#666',
                fontSize: '14px',
                fontWeight: activeTab === tab ? '600' : '400',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export default Topbar;
