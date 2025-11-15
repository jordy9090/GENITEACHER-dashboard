import { type ReactNode } from 'react';
import Card from './Card';

interface ChartCardProps {
  title: string;
  children: ReactNode;
}

function ChartCard({ title, children }: ChartCardProps) {
  return (
    <Card title={title}>
      <div style={{ minHeight: '200px' }}>
        {children}
      </div>
    </Card>
  );
}

export default ChartCard;
