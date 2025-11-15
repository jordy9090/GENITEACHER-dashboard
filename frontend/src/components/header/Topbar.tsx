function Topbar() {
  return (
    <header style={{
      height: '60px',
      backgroundColor: '#ecf0f1',
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #bdc3c7'
    }}>
      <h1 style={{ fontSize: '20px', margin: 0 }}>대시보드</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <span>🔔</span>
        <span>선생님 이름</span>
      </div>
    </header>
  );
}

export default Topbar;
