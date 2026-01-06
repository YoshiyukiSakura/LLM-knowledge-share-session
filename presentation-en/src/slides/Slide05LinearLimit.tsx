import { useEffect, useState, useRef } from 'react';
import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';

// Non-linear data points (simulating S-curve)
const nonLinearPoints = [
  { x: -3, y: -2.5 },
  { x: -2, y: -2 },
  { x: -1, y: -1 },
  { x: 0, y: 0 },
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 3, y: 2.5 },
];

// Real-world non-linear examples
const nonLinearExamples = [
  {
    title: 'Learning Curve',
    desc: 'Fast at first, then slows',
    icon: '📚',
    color: '#3b82f6',
  },
  {
    title: 'Diminishing Returns',
    desc: 'First bite tastes best',
    icon: '🍰',
    color: '#8b5cf6',
  },
  {
    title: 'Emotional Waves',
    desc: 'Happy/sad not linear',
    icon: '🎭',
    color: '#f59e0b',
  },
];

// Non-linear graph component
function NonLinearGraph({ animate = true }: { animate?: boolean }) {
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
        // Show points first
        const p = elapsed / (duration * 0.5);
        setProgress(1 - Math.pow(1 - p, 2));
      } else {
        // Then draw the line
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

  const width = 260;
  const height = 200;
  const padding = 30;
  const range = 4;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = (width - padding * 2) / (range * 2);

  const toScreenX = (x: number) => centerX + x * scale;
  const toScreenY = (y: number) => centerY - y * scale;

  // Best fit line (actually can't fit well)
  const lineY1 = -3 * 0.7;
  const lineY2 = 3 * 0.7;

  const visibleCount = Math.floor(nonLinearPoints.length * progress);

  return (
    <svg width={width} height={height} style={{ backgroundColor: 'white', borderRadius: '8px' }}>
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

      {/* Try to fit with a line (fails) */}
      {lineProgress > 0 && (
        <line
          x1={toScreenX(-3)}
          y1={toScreenY(lineY1)}
          x2={toScreenX(-3 + 6 * lineProgress)}
          y2={toScreenY(lineY1 + (lineY2 - lineY1) * lineProgress)}
          stroke="#ef4444"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.7"
        />
      )}

      {/* Non-linear data points */}
      {nonLinearPoints.map((point, index) => {
        if (index >= visibleCount) return null;
        const pointProgress = Math.min((progress * nonLinearPoints.length - index) / 1, 1);
        return (
          <g key={index}>
            <circle
              cx={toScreenX(point.x)}
              cy={toScreenY(point.y)}
              r={10 * pointProgress}
              fill="#3b82f6"
              opacity={0.2 * (1 - pointProgress * 0.5)}
            />
            <circle
              cx={toScreenX(point.x)}
              cy={toScreenY(point.y)}
              r={5 * Math.min(pointProgress * 1.2, 1)}
              fill="#3b82f6"
            />
          </g>
        );
      })}

      {/* Error markers */}
      {lineProgress > 0.8 &&
        nonLinearPoints.map((point, index) => {
          const lineYAtX = point.x * 0.7;
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
              strokeWidth="1.5"
              opacity={(lineProgress - 0.8) * 5}
            />
          );
        })}

      {/* Label */}
      {lineProgress > 0.9 && (
        <text
          x={toScreenX(2)}
          y={toScreenY(lineY2) - 8}
          fontSize="10"
          fill="#ef4444"
          opacity={(lineProgress - 0.9) * 10}
        >
          Line can't fit!
        </text>
      )}
    </svg>
  );
}

export function Slide05LinearLimit() {
  return (
    <Slide>
      <PartLabel number="02" />
      <SlideTitle>Limitations of Linear Functions</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'stretch' }}>
          {/* Left: Problem visualization */}
          <div style={{ flex: 1 }}>
            <Card>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '0.5rem 0',
                }}
              >
                <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.75rem' }}>
                  Real-world data is often <strong>non-linear</strong>:
                </div>
                <NonLinearGraph animate={true} />
                <div
                  style={{
                    marginTop: '0.75rem',
                    fontSize: '0.8rem',
                    color: '#ef4444',
                    textAlign: 'center',
                  }}
                >
                  No matter how we adjust <strong>k</strong> and <strong>b</strong>
                  <br />
                  A straight line cannot fit curve-shaped data well
                </div>
              </div>
            </Card>

            {/* Real-world non-linear examples */}
            <div
              style={{
                marginTop: '0.75rem',
                display: 'flex',
                gap: '0.4rem',
              }}
            >
              {nonLinearExamples.map((example, index) => (
                <div
                  key={index}
                  style={{
                    flex: 1,
                    padding: '0.5rem',
                    backgroundColor: '#fef2f2',
                    borderRadius: '0.5rem',
                    border: '1px solid #fecaca',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{example.icon}</div>
                  <div
                    style={{ fontSize: '0.65rem', fontWeight: 600, color: '#991b1b', marginBottom: '0.15rem' }}
                  >
                    {example.title}
                  </div>
                  <div style={{ fontSize: '0.55rem', color: '#7f1d1d' }}>{example.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Problem and solution */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Card variant="error">
              <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
                <div style={{ fontSize: '0.75rem', color: '#dc2626', marginBottom: '0.25rem' }}>
                  Problem with Linear Functions
                </div>
                <div
                  style={{
                    fontSize: '1.25rem',
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    fontWeight: 600,
                    color: '#1e293b',
                  }}
                >
                  f(x) = kx + b
                </div>
                <div style={{ marginTop: '0.35rem', color: '#64748b', fontSize: '0.8rem' }}>
                  Can only express <strong>straight line</strong> relationships
                </div>
              </div>
            </Card>

            {/* Limitation Explanation */}
            <div
              style={{
                padding: '0.75rem',
                backgroundColor: '#fff7ed',
                borderRadius: '0.5rem',
                border: '1px solid #fed7aa',
              }}
            >
              <div style={{ fontSize: '0.75rem', color: '#9a3412', marginBottom: '0.5rem', fontWeight: 600 }}>
                Real world is more complex:
              </div>
              <div style={{ fontSize: '0.7rem', color: '#7c2d12', lineHeight: 1.6 }}>
                <strong>Same input</strong>, different contexts have <strong>different outputs</strong>
                <br />
                <strong>Cold weather</strong> → Wear jacket? Turn on heater? Drink hot tea?
                <br />
                <strong>Eat fries</strong> → Dip in ketchup? Mayo? Or plain?
              </div>
            </div>

            <div style={{ textAlign: 'center', fontSize: '1.5rem', color: '#64748b' }}>↓</div>

            <Card variant="success">
              <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
                <div style={{ fontSize: '0.75rem', color: '#16a34a', marginBottom: '0.25rem' }}>
                  We need
                </div>
                <div
                  style={{
                    fontSize: '1.25rem',
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    fontWeight: 600,
                    color: '#1e293b',
                  }}
                >
                  Non-linear Functions
                </div>
                <div style={{ marginTop: '0.35rem', color: '#64748b', fontSize: '0.8rem' }}>
                  Let the function <strong>"bend"</strong>!
                </div>
              </div>
            </Card>

            <div
              style={{
                padding: '0.75rem',
                backgroundColor: '#dbeafe',
                borderRadius: '0.5rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '0.8rem', color: '#1d4ed8', fontWeight: 600 }}>
                How do we turn a line into a curve?
              </div>
              <div style={{ fontSize: '0.7rem', color: '#1e40af', marginTop: '0.25rem' }}>
                Introduce <strong>Activation Functions</strong> → Key to neural networks!
              </div>
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Linear Limitations" />
    </Slide>
  );
}
