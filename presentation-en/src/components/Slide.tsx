import type { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
  className?: string;
}

export function Slide({ children, className = '' }: SlideProps) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '0 4rem 3rem',
        overflow: 'auto',
        animation: 'slideIn 0.3s ease-out',
      }}
      className={className}
    >
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
      {children}
    </div>
  );
}

interface PartLabelProps {
  number: string;
}

export function PartLabel({ number }: PartLabelProps) {
  return (
    <div
      style={{
        display: 'inline-block',
        padding: '0.25rem 0.75rem',
        backgroundColor: '#3b82f6',
        color: 'white',
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.1em',
        borderRadius: '4px',
        marginBottom: '1rem',
      }}
    >
      PART {number}
    </div>
  );
}

interface SlideTitleProps {
  children: ReactNode;
  subtitle?: string;
}

export function SlideTitle({ children, subtitle }: SlideTitleProps) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h1
        style={{
          fontSize: '2.25rem',
          fontWeight: 700,
          color: '#1a1a1a',
          marginBottom: subtitle ? '0.5rem' : 0,
        }}
      >
        {children}
      </h1>
      {subtitle && (
        <p style={{ fontSize: '1.125rem', color: '#64748b' }}>{subtitle}</p>
      )}
    </div>
  );
}

interface SlideContentProps {
  children: ReactNode;
}

export function SlideContent({ children }: SlideContentProps) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {children}
    </div>
  );
}

interface SlideFooterProps {
  title: string;
  section: string;
}

export function SlideFooter({ title, section }: SlideFooterProps) {
  return (
    <div
      style={{
        marginTop: 'auto',
        paddingTop: '1.5rem',
        borderTop: '1px solid #e2e8f0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.875rem',
        color: '#64748b',
      }}
    >
      <span>{title}</span>
      <span>• {section}</span>
    </div>
  );
}
