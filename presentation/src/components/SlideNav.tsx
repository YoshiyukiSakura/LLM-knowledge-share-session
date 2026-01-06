import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
}

export function SlideNav({ current, total, onPrev, onNext, onGoTo }: SlideNavProps) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '9999px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        zIndex: 1000,
      }}
    >
      <button
        onClick={onPrev}
        disabled={current === 0}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '2rem',
          height: '2rem',
          border: 'none',
          borderRadius: '50%',
          backgroundColor: current === 0 ? '#e2e8f0' : '#3b82f6',
          color: current === 0 ? '#94a3b8' : 'white',
          cursor: current === 0 ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s',
        }}
      >
        <ChevronLeft size={18} />
      </button>

      <div style={{ display: 'flex', gap: '0.375rem', alignItems: 'center' }}>
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            onClick={() => onGoTo(index)}
            style={{
              width: index === current ? '1.5rem' : '0.5rem',
              height: '0.5rem',
              border: 'none',
              borderRadius: '9999px',
              backgroundColor: index === current ? '#3b82f6' : '#e2e8f0',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            title={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={current === total - 1}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '2rem',
          height: '2rem',
          border: 'none',
          borderRadius: '50%',
          backgroundColor: current === total - 1 ? '#e2e8f0' : '#3b82f6',
          color: current === total - 1 ? '#94a3b8' : 'white',
          cursor: current === total - 1 ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s',
        }}
      >
        <ChevronRight size={18} />
      </button>

      <span
        style={{
          marginLeft: '0.5rem',
          fontSize: '0.875rem',
          color: '#64748b',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {current + 1} / {total}
      </span>
    </div>
  );
}
