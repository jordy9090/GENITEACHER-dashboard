interface TableColumn {
  header: string;
  key: string;
}

interface TableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
}

function Table({ columns, data }: TableProps) {
  return (
    <table style={{
      width: '100%',
      borderCollapse: 'collapse'
    }}>
      <thead>
        <tr style={{ backgroundColor: '#f8f9fa' }}>
          {columns.map((col) => (
            <th key={col.key} style={{
              padding: '12px',
              textAlign: 'left',
              borderBottom: '2px solid #dee2e6'
            }}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} style={{
            borderBottom: '1px solid #dee2e6'
          }}>
            {columns.map((col) => (
              <td key={col.key} style={{
                padding: '12px'
              }}>
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
