import { useEffect, useState, useRef } from 'react';
import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

// Non-linear data points (more obvious S-curve, making linear fitting failure more prominent)
const nonLinearPoints = [
  { x: -3.5, y: -2.9 },
  { x: -3, y: -2.85 },
  { x: -2.5, y: -2.75 },
  { x: -2, y: -2.6 },
  { x: -1.5, y: -2.2 },
  { x: -1, y: -1.2 },
  { x: -0.5, y: 0 },
  { x: 0, y: 1.0 },
  { x: 0.5, y: 1.8 },
  { x: 1, y: 2.3 },
  { x: 1.5, y: 2.6 },
  { x: 2, y: 2.75 },
  { x: 2.5, y: 2.85 },
  { x: 3, y: 2.9 },
  { x: 3.5, y: 2.95 },
];

// Large graph component
function LargeNonLinearGraph({ animate = true }: { animate?: boolean }) {
  const [progress, setProgress] = useState(animate ? 0 : 1);
  const [lineProgress, setLineProgress] = useState(animate ? 0 : 1);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!animate) {
      setProgress(1);
      setLineProgress(1);
      return;
    }

    let startTime: number | null = null;
    const duration = 3500;

    const animateFrame = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed < duration * 0.5) {
        const p = elapsed / (duration * 0.5);
        setProgress(1 - Math.pow(1 - p, 2));
      } else {
        setProgress(1);
        const lineP = (elapsed - duration * 0.5) / (duration * 0.5);
        setLineProgress(Math.min(1, 1 - Math.pow(1 - lineP, 3)));
      }

      if (elapsed < duration) {
        animationRef.current = requestAnimationFrame(animateFrame);
      }
    };

    setTimeout(() => {
      animationRef.current = requestAnimationFrame(animateFrame);
    }, 300);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  const width = 600;
  const height = 450;
  const padding = 50;
  const range = 4;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = (width - padding * 2) / (range * 2);

  const toScreenX = (x: number) => centerX + x * scale;
  const toScreenY = (y: number) => centerY - y * scale;

  const lineY1 = -3.5 * 0.6;
  const lineY2 = 3.5 * 0.6;

  const visibleCount = Math.floor(nonLinearPoints.length * progress);

  return (
    <svg width={width} height={height} style={{ backgroundColor: 'white', borderRadius: '12px' }}>
      {/* Grid */}
      {[-3, -2, -1, 1, 2, 3].map((i) => (
        <g key={i}>
          <line
            x1={toScreenX(i)}
            y1={toScreenY(-range)}
            x2={toScreenX(i)}
            y2={toScreenY(range)}
            stroke="#e2e8f0"
            strokeWidth="1"
          />
          <line
            x1={toScreenX(-range)}
            y1={toScreenY(i)}
            x2={toScreenX(range)}
            y2={toScreenY(i)}
            stroke="#e2e8f0"
            strokeWidth="1"
          />
          {/* Scale labels */}
          <text x={toScreenX(i)} y={toScreenY(0) + 20} textAnchor="middle" fontSize="12" fill="#94a3b8">
            {i}
          </text>
          <text x={toScreenX(0) - 15} y={toScreenY(i) + 5} textAnchor="end" fontSize="12" fill="#94a3b8">
            {i}
          </text>
        </g>
      ))}

      {/* Axes */}
      <line
        x1={toScreenX(-range)}
        y1={toScreenY(0)}
        x2={toScreenX(range)}
        y2={toScreenY(0)}
        stroke="#475569"
        strokeWidth="2"
      />
      <line
        x1={toScreenX(0)}
        y1={toScreenY(-range)}
        x2={toScreenX(0)}
        y2={toScreenY(range)}
        stroke="#475569"
        strokeWidth="2"
      />
      <text x={toScreenX(range) - 10} y={toScreenY(0) - 15} fontSize="16" fontWeight="bold" fill="#475569">
        x
      </text>
      <text x={toScreenX(0) + 15} y={toScreenY(range) + 10} fontSize="16" fontWeight="bold" fill="#475569">
        y
      </text>

      {/* Attempt to fit with a line (fails) */}
      {lineProgress > 0 && (
        <line
          x1={toScreenX(-3.5)}
          y1={toScreenY(lineY1)}
          x2={toScreenX(-3.5 + 7 * lineProgress)}
          y2={toScreenY(lineY1 + (lineY2 - lineY1) * lineProgress)}
          stroke="#ef4444"
          strokeWidth="3"
          strokeDasharray="8,8"
          opacity="0.8"
        />
      )}

      {/* Non-linear data points */}
      {nonLinearPoints.map((point, index) => {
        if (index >= visibleCount) return null;
        const pointProgress = Math.min((progress * nonLinearPoints.length - index) / 1.5, 1);
        return (
          <g key={index}>
            <circle
              cx={toScreenX(point.x)}
              cy={toScreenY(point.y)}
              r={14 * pointProgress}
              fill="#3b82f6"
              opacity={0.15 * (1 - pointProgress * 0.5)}
            />
            <circle
              cx={toScreenX(point.x)}
              cy={toScreenY(point.y)}
              r={7 * Math.min(pointProgress * 1.2, 1)}
              fill="#3b82f6"
            />
          </g>
        );
      })}

      {/* Error markers */}
      {lineProgress > 0.7 &&
        nonLinearPoints.map((point, index) => {
          const lineYAtX = point.x * 0.6;
          const error = point.y - lineYAtX;
          if (Math.abs(error) < 0.3) return null;
          return (
            <line
              key={`err${index}`}
              x1={toScreenX(point.x)}
              y1={toScreenY(point.y)}
              x2={toScreenX(point.x)}
              y2={toScreenY(lineYAtX)}
              stroke="#ef4444"
              strokeWidth="2"
              opacity={(lineProgress - 0.7) * 3}
            />
          );
        })}

      {/* Labels */}
      {lineProgress > 0.9 && (
        <g opacity={(lineProgress - 0.9) * 10}>
          <rect x={toScreenX(1.5)} y={toScreenY(lineY2) - 45} width="140" height="30" fill="#fef2f2" rx="4" />
          <text x={toScreenX(1.5) + 70} y={toScreenY(lineY2) - 25} fontSize="14" fill="#dc2626" textAnchor="middle" fontWeight="600">
            Lines cannot fit curves!
          </text>
        </g>
      )}
    </svg>
  );
}

export function Slide05aLinearLimitGraph() {
  return (
    <Slide>
      <PartLabel number="03" />
      <SlideTitle>Limitations of Linear Functions</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          {/* Large graph area */}
          <div
            style={{
              padding: '1.5rem',
              backgroundColor: '#fef2f2',
              borderRadius: '1rem',
              border: '2px solid #fecaca',
            }}
          >
            <div style={{ fontSize: '1.2rem', color: '#991b1b', marginBottom: '1rem', textAlign: 'center' }}>
              Real-world data is often <strong>non-linear</strong> — no matter how you adjust k and b, a line cannot fit well
            </div>
            <LargeNonLinearGraph animate={true} />
          </div>

          {/* Real-world examples */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            {[
              {
                title: 'Learning English',
                desc: 'First 100 words: 1 week',
                desc2: 'Next 1000 words: 1 year',
                color: '#3b82f6',
                bg: '#eff6ff',
                border: '#bfdbfe',
              },
              {
                title: 'Drinking Boba',
                desc: 'First cup: Super satisfying!',
                desc2: 'Third cup: Feel sick...',
                color: '#8b5cf6',
                bg: '#f5f3ff',
                border: '#ddd6fe',
              },
              {
                title: 'Overtime Work',
                desc: 'First 2 hours: Max efficiency',
                desc2: 'Hour 8: Slacking off',
                color: '#f59e0b',
                bg: '#fffbeb',
                border: '#fde68a',
              },
              {
                title: 'Salary Raise',
                desc: '$3k to $4k: Thrilled!',
                desc2: '$30k to $31k: Meh',
                color: '#22c55e',
                bg: '#f0fdf4',
                border: '#bbf7d0',
              },
            ].map((ex, i) => (
              <div
                key={i}
                style={{
                  padding: '1rem 1.25rem',
                  backgroundColor: ex.bg,
                  borderRadius: '0.75rem',
                  border: `2px solid ${ex.border}`,
                  textAlign: 'center',
                  minWidth: '180px',
                }}
              >
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: ex.color, marginBottom: '0.75rem' }}>
                  {ex.title}
                </div>
                <div style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '0.25rem' }}>{ex.desc}</div>
                <div style={{ fontSize: '0.95rem', color: '#94a3b8' }}>{ex.desc2}</div>
              </div>
            ))}
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Linear Limitations" />
    </Slide>
  );
}
