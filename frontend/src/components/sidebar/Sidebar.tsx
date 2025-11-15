function Sidebar() {
  return (
    <aside style={{
      width: '250px',
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '20px'
    }}>
      <h2 style={{ marginBottom: '30px' }}>GeniTeacher</h2>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '15px' }}>
            <a href="/" style={{ color: 'white', textDecoration: 'none' }}>대시보드</a>
          </li>
          <li style={{ marginBottom: '15px' }}>
            <a href="/schedule" style={{ color: 'white', textDecoration: 'none' }}>일정 관리</a>
          </li>
          <li style={{ marginBottom: '15px' }}>
            <a href="/class" style={{ color: 'white', textDecoration: 'none' }}>학생/반</a>
          </li>
          <li style={{ marginBottom: '15px' }}>
            <a href="/library" style={{ color: 'white', textDecoration: 'none' }}>자료실</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
