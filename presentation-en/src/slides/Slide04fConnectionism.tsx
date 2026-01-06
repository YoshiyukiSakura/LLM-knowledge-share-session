import { useEffect, useState, useRef } from 'react';
import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

// Simulating noisy but generally linear data (demonstrating the meaning of fitting)
const nearLinearPoints = [
  { x: -2.8, y: -2.4 },
  { x: -2.3, y: -1.6 },
  { x: -1.9, y: -2.1 },
  { x: -1.2, y: -0.8 },
  { x: -0.7, y: -1.1 },
  { x: -0.2, y: 0.2 },
  { x: 0.4, y: -0.1 },
  { x: 0.9, y: 0.6 },
  { x: 1.3, y: 1.5 },
  { x: 1.8, y: 1.2 },
  { x: 2.2, y: 2.4 },
  { x: 2.7, y: 1.9 },
  { x: 3.1, y: 2.7 },
];

function NearLinearGraph({ animate = true }: { animate?: boolean }) {
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
    const duration = 2500;

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

  const width = 320;
  const height = 240;
  const padding = 35;
  const range = 3.5;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = (width - padding * 2) / (range * 2);

  const toScreenX = (x: number) => centerX + x * scale;
  const toScreenY = (y: number) => centerY - y * scale;

  const visibleCount = Math.floor(nearLinearPoints.length * progress);

  return (
    <svg width={width} height={height} style={{ backgroundColor: 'white', borderRadius: '8px' }}>
      {/* Axes */}
      <line x1={toScreenX(-range)} y1={toScreenY(0)} x2={toScreenX(range)} y2={toScreenY(0)} stroke="#94a3b8" strokeWidth="1" />
      <line x1={toScreenX(0)} y1={toScreenY(-range)} x2={toScreenX(0)} y2={toScreenY(range)} stroke="#94a3b8" strokeWidth="1" />

      {/* Fitting line y = 0.95x */}
      {lineProgress > 0 && (
        <line
          x1={toScreenX(-3)}
          y1={toScreenY(-3 * 0.95)}
          x2={toScreenX(-3 + 6 * lineProgress)}
          y2={toScreenY((-3 + 6 * lineProgress) * 0.95)}
          stroke="#22c55e"
          strokeWidth="3"
          opacity="0.9"
        />
      )}

      {/* Data points */}
      {nearLinearPoints.map((point, index) => {
        if (index >= visibleCount) return null;
        const pointProgress = Math.min((progress * nearLinearPoints.length - index) / 1.5, 1);
        return (
          <circle
            key={index}
            cx={toScreenX(point.x)}
            cy={toScreenY(point.y)}
            r={5 * Math.min(pointProgress * 1.2, 1)}
            fill="#3b82f6"
          />
        );
      })}

      {/* Success label */}
      {lineProgress > 0.8 && (
        <g opacity={(lineProgress - 0.8) * 5}>
          <rect x={toScreenX(0.5)} y={toScreenY(2.8)} width="100" height="22" fill="#f0fdf4" rx="4" stroke="#22c55e" />
          <text x={toScreenX(0.5) + 50} y={toScreenY(2.8) + 15} fontSize="11" fill="#166534" textAnchor="middle" fontWeight="600">
            Fitting Success!
          </text>
        </g>
      )}
    </svg>
  );
}

export function Slide04fConnectionism() {
  return (
    <Slide>
      <PartLabel number="02" />
      <SlideTitle>The Dawn of Connectionism</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          {/* Core concept */}
          <div
            style={{
              padding: '1rem 1.5rem',
              backgroundColor: '#eff6ff',
              borderRadius: '0.75rem',
              border: '2px solid #bfdbfe',
              maxWidth: '850px',
            }}
          >
            <div style={{ fontSize: '1.2rem', color: '#1e40af', textAlign: 'center' }}>
              <strong>Connectionism</strong>: Using <span style={{ fontFamily: 'monospace', backgroundColor: '#dbeafe', padding: '0.1rem 0.5rem', borderRadius: '4px' }}>y = kx + b</span> to fit
              <strong> nearly-linear curve distributions</strong>
            </div>
          </div>

          {/* Three-column layout: Graph → Handwriting recognition → Success cases */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'stretch' }}>
            {/* Left: Graph (core concept first) */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <NearLinearGraph animate={true} />
              <div style={{ fontSize: '0.85rem', color: '#64748b', textAlign: 'center', maxWidth: '280px' }}>
                Data is noisy, but linear fitting can still capture the overall trend
              </div>
            </div>

            {/* Middle: Handwriting recognition illustration */}
            <div
              style={{
                padding: '1rem',
                backgroundColor: '#fefce8',
                borderRadius: '0.75rem',
                border: '2px solid #fde047',
                minWidth: '220px',
              }}
            >
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#a16207', marginBottom: '0.75rem', textAlign: 'center' }}>
                Tolerance for Fuzzy Input
              </div>
              {/* Handwritten character illustration */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {/* Multiple writing styles */}
                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                  {['A', 'A', 'A'].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: '45px',
                        height: '45px',
                        backgroundColor: 'white',
                        border: '2px solid #d4d4d4',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: i === 0 ? 'cursive' : i === 1 ? 'serif' : 'Comic Sans MS, cursive',
                        fontSize: i === 1 ? '1.5rem' : '1.3rem',
                        fontWeight: i === 0 ? 400 : i === 1 ? 700 : 400,
                        fontStyle: i === 2 ? 'italic' : 'normal',
                        color: '#374151',
                        transform: i === 0 ? 'rotate(-5deg)' : i === 2 ? 'rotate(3deg) skewX(-5deg)' : 'none',
                      }}
                    >
                      A
                    </div>
                  ))}
                </div>
                {/* Arrow */}
                <div style={{ textAlign: 'center', fontSize: '1.2rem', color: '#a16207' }}>↓</div>
                {/* Unified output */}
                <div
                  style={{
                    padding: '0.5rem',
                    backgroundColor: '#22c55e',
                    borderRadius: '6px',
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                  }}
                >
                  Output: "A"
                </div>
                <div style={{ fontSize: '0.8rem', color: '#78716c', textAlign: 'center', marginTop: '0.25rem' }}>
                  Different styles → Same result
                </div>
              </div>
            </div>

            {/* Right: Success cases */}
            <div
              style={{
                padding: '1rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '0.75rem',
                border: '2px solid #bbf7d0',
                minWidth: '200px',
              }}
            >
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#166534', marginBottom: '0.75rem', textAlign: 'center' }}>
                Real Applications
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  { icon: '✍️', title: 'Handwriting Input' },
                  { icon: '🎤', title: 'Speech to Text' },
                  { icon: '📊', title: 'Trend Prediction' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                    <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                    <span style={{ color: '#166534', fontWeight: 500 }}>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Confidence and limitations */}
          <div style={{ display: 'flex', gap: '1.5rem', width: '100%', maxWidth: '850px' }}>
            {/* Confidence */}
            <div
              style={{
                flex: 1,
                padding: '1rem 1.25rem',
                backgroundColor: '#fef3c7',
                borderRadius: '0.75rem',
                borderLeft: '4px solid #f59e0b',
              }}
            >
              <div style={{ fontSize: '1.1rem', color: '#92400e', fontWeight: 600, marginBottom: '0.5rem' }}>
                Gave people confidence
              </div>
              <div style={{ fontSize: '1rem', color: '#78350f', lineHeight: 1.6 }}>
                Machines <strong>can learn</strong> patterns!<br />
                No need to enumerate every point, just adjust k and b
              </div>
            </div>

            {/* Limitations */}
            <div
              style={{
                flex: 1,
                padding: '1rem 1.25rem',
                backgroundColor: '#fef2f2',
                borderRadius: '0.75rem',
                borderLeft: '4px solid #ef4444',
              }}
            >
              <div style={{ fontSize: '1.1rem', color: '#991b1b', fontWeight: 600, marginBottom: '0.5rem' }}>
                But soon hit a bottleneck
              </div>
              <div style={{ fontSize: '1rem', color: '#7f1d1d', lineHeight: 1.6 }}>
                More complex, more <strong>discrete</strong> problems completely failed<br />
                For example: Is this photo a <strong>cat</strong> or a <strong>dog</strong>?
              </div>
            </div>
          </div>

          {/* Summary */}
          <div
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#f1f5f9',
              borderRadius: '0.75rem',
              textAlign: 'center',
              maxWidth: '700px',
            }}
          >
            <div style={{ fontSize: '1.15rem', color: '#475569' }}>
              Connectionism proved machine learning is feasible, but <strong>linear functions</strong> have limited expressive power
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Connectionism" />
    </Slide>
  );
}
