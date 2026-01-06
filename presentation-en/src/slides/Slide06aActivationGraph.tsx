import { useEffect, useState, useRef } from 'react';
import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

// Complex real-world data points
const complexPoints = [
  { x: -3.5, y: 0.3 },
  { x: -3, y: -0.5 },
  { x: -2.5, y: 0.8 },
  { x: -2, y: -1.2 },
  { x: -1.5, y: 0.5 },
  { x: -1, y: 1.8 },
  { x: -0.5, y: -0.3 },
  { x: 0, y: 1.5 },
  { x: 0.5, y: -0.8 },
  { x: 1, y: 2.2 },
  { x: 1.5, y: 0.5 },
  { x: 2, y: 2.8 },
  { x: 2.5, y: 1.2 },
  { x: 3, y: 2.5 },
  { x: 3.5, y: 1.0 },
];

// Large graph component
function LargeComplexGraph({
  animate = true,
  showCurve = false,
  title,
  color,
}: {
  animate?: boolean;
  showCurve?: boolean;
  title: string;
  color: string;
}) {
  const [progress, setProgress] = useState(animate ? 0 : 1);
  const [curveProgress, setCurveProgress] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!animate) {
      setProgress(1);
      if (showCurve) setCurveProgress(1);
      return;
    }

    let startTime: number | null = null;
    const pointsDuration = 2000;
    const curveDuration = 1500;

    const animateFrame = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed < pointsDuration) {
        const p = elapsed / pointsDuration;
        setProgress(1 - Math.pow(1 - p, 2));
      } else if (showCurve && elapsed < pointsDuration + curveDuration) {
        setProgress(1);
        const curveP = (elapsed - pointsDuration) / curveDuration;
        setCurveProgress(1 - Math.pow(1 - curveP, 3));
      } else {
        setProgress(1);
        if (showCurve) setCurveProgress(1);
        return;
      }

      animationRef.current = requestAnimationFrame(animateFrame);
    };

    setTimeout(() => {
      animationRef.current = requestAnimationFrame(animateFrame);
    }, 300);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate, showCurve]);

  const width = 420;
  const height = 320;
  const range = 4;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = (width - 60) / (range * 2);

  const toScreenX = (x: number) => centerX + x * scale;
  const toScreenY = (y: number) => centerY - y * scale;

  const visibleCount = Math.floor(complexPoints.length * progress);

  // Generate smooth curve path
  const generateCurvePath = () => {
    const points: string[] = [];
    for (let x = -3.5; x <= 3.5; x += 0.15) {
      const y = Math.sin(x * 1.2) * 1.5 + Math.cos(x * 0.5) * 0.8 + x * 0.3;
      points.push(`${toScreenX(x)},${toScreenY(y)}`);
    }
    return `M ${points.join(' L ')}`;
  };

  return (
    <div
      style={{
        padding: '1rem',
        backgroundColor: showCurve ? '#f0fdf4' : '#fef2f2',
        borderRadius: '0.75rem',
        border: `2px solid ${showCurve ? '#bbf7d0' : '#fecaca'}`,
      }}
    >
      <div
        style={{
          fontSize: '1.1rem',
          color: showCurve ? '#166534' : '#991b1b',
          marginBottom: '0.75rem',
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        {title}
      </div>
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
          stroke="#94a3b8"
          strokeWidth="1.5"
        />
        <line
          x1={toScreenX(0)}
          y1={toScreenY(-range)}
          x2={toScreenX(0)}
          y2={toScreenY(range)}
          stroke="#94a3b8"
          strokeWidth="1.5"
        />

        {/* Fitting curve */}
        {showCurve && curveProgress > 0 && (
          <path
            d={generateCurvePath()}
            fill="none"
            stroke="#22c55e"
            strokeWidth="3"
            strokeDasharray={`${curveProgress * 800} 800`}
            opacity="0.9"
          />
        )}

        {/* Attempt linear fitting (fails) */}
        {!showCurve && progress > 0.8 && (
          <line
            x1={toScreenX(-3.5)}
            y1={toScreenY(-0.5)}
            x2={toScreenX(3.5)}
            y2={toScreenY(2)}
            stroke="#ef4444"
            strokeWidth="2"
            strokeDasharray="6,6"
            opacity={(progress - 0.8) * 5}
          />
        )}

        {/* Data points */}
        {complexPoints.map((point, index) => {
          if (index >= visibleCount) return null;
          const pointProgress = Math.min((progress * complexPoints.length - index) / 1.5, 1);
          return (
            <circle
              key={index}
              cx={toScreenX(point.x)}
              cy={toScreenY(point.y)}
              r={5 * Math.min(pointProgress * 1.2, 1)}
              fill={color}
              opacity={0.9}
            />
          );
        })}
      </svg>
      <div
        style={{
          marginTop: '0.75rem',
          fontSize: '0.95rem',
          color: showCurve ? '#14532d' : '#7f1d1d',
          textAlign: 'center',
        }}
      >
        {showCurve ? 'Curves can pass through more data points' : 'Lines cannot fit these points well'}
      </div>
    </div>
  );
}

export function Slide06aActivationGraph() {
  return (
    <Slide>
      <PartLabel number="03" />
      <SlideTitle subtitle="Making Curves Bend">Activation Functions</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          {/* Two comparison graphs side by side */}
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <LargeComplexGraph animate={true} showCurve={false} title="Linear function: Can only draw lines" color="#ef4444" />
            <LargeComplexGraph animate={true} showCurve={true} title="Non-linear function: Can draw curves" color="#22c55e" />
          </div>

          {/* Core formula */}
          <div
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#eff6ff',
              borderRadius: '0.75rem',
              border: '2px solid #bfdbfe',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1rem', color: '#64748b', marginBottom: '0.5rem' }}>
              The secret: Wrap an "activation function" around the linear function
            </div>
            <div
              style={{
                fontSize: '2.5rem',
                fontFamily: 'serif',
                fontStyle: 'italic',
                fontWeight: 600,
                color: '#1e293b',
              }}
            >
              f(x) = <span style={{ color: '#3b82f6' }}>g</span>( wx + b )
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Activation Functions" />
    </Slide>
  );
}
