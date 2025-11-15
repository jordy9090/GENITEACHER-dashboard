import { type ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {title && <h3 style={{ marginTop: 0 }}>{title}</h3>}
      {children}
    </div>
  );
}

export default Card;
