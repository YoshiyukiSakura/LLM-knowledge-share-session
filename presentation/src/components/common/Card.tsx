import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  title?: string;
  icon?: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'primary';
  className?: string;
}

const variantStyles = {
  default: {
    backgroundColor: '#f8fafc',
    borderColor: '#e2e8f0',
  },
  success: {
    backgroundColor: '#f0fdf4',
    borderColor: '#86efac',
  },
  warning: {
    backgroundColor: '#fffbeb',
    borderColor: '#fcd34d',
  },
  error: {
    backgroundColor: '#fef2f2',
    borderColor: '#fca5a5',
  },
  primary: {
    backgroundColor: '#eff6ff',
    borderColor: '#93c5fd',
  },
};

export function Card({ children, title, icon, variant = 'default', className = '' }: CardProps) {
  const styles = variantStyles[variant];

  return (
    <div
      className={className}
      style={{
        padding: '1.25rem',
        borderRadius: '0.75rem',
        border: `1px solid ${styles.borderColor}`,
        backgroundColor: styles.backgroundColor,
      }}
    >
      {(title || icon) && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '0.75rem',
          }}
        >
          {icon}
          {title && (
            <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0 }}>{title}</h3>
          )}
        </div>
      )}
      {children}
    </div>
  );
}

interface CardGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
}

export function CardGrid({ children, columns = 2 }: CardGridProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '1rem',
      }}
    >
      {children}
    </div>
  );
}
