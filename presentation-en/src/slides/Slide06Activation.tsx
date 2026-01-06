import { useEffect, useState, useRef } from 'react';
import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card, CardGrid } from '../components/common';

// Complex real-world data points (simulating non-linear, noisy data)
const complexPoints = [
  { x: -3.5, y: 0.5 },
  { x: -3, y: -0.8 },
  { x: -2.5, y: 1.2 },
  { x: -2, y: -1.5 },
  { x: -1.5, y: 0.3 },
  { x: -1, y: 2.1 },
  { x: -0.5, y: -0.5 },
  { x: 0, y: 1.8 },
  { x: 0.5, y: -1.2 },
  { x: 1, y: 2.5 },
  { x: 1.5, y: 0.2 },
  { x: 2, y: 3.0 },
  { x: 2.5, y: 1.5 },
  { x: 3, y: 2.8 },
  { x: 3.5, y: 0.8 },
];

// Complex data graph component
function ComplexDataGraph({ animate = true, showCurve = false }: { animate?: boolean; showCurve?: boolean }) {
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
    const pointsDuration = 1500;
    const curveDuration = 1000;

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
    }, 200);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate, showCurve]);

  const width = 200;
  const height = 150;
  const range = 4;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = (width - 40) / (range * 2);

  const toScreenX = (x: number) => centerX + x * scale;
  const toScreenY = (y: number) => centerY - y * scale;

  const visibleCount = Math.floor(complexPoints.length * progress);

  // Generate smooth curve path (simulating neural network fitting)
  const generateCurvePath = () => {
    const points: string[] = [];
    for (let x = -3.5; x <= 3.5; x += 0.2) {
      // Simulate a complex non-linear function
      const y = Math.sin(x * 1.2) * 1.5 + Math.cos(x * 0.5) * 0.8 + x * 0.3;
      points.push(`${toScreenX(x)},${toScreenY(y)}`);
    }
    return `M ${points.join(' L ')}`;
  };

  return (
    <svg width={width} height={height} style={{ backgroundColor: 'white', borderRadius: '6px' }}>
      {/* Simplified grid */}
      <line x1={toScreenX(-range)} y1={toScreenY(0)} x2={toScreenX(range)} y2={toScreenY(0)} stroke="#cbd5e1" strokeWidth="1" />
      <line x1={toScreenX(0)} y1={toScreenY(-range)} x2={toScreenX(0)} y2={toScreenY(range)} stroke="#cbd5e1" strokeWidth="1" />

      {/* Fitting curve (if enabled) */}
      {showCurve && curveProgress > 0 && (
        <path
          d={generateCurvePath()}
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
          strokeDasharray={`${curveProgress * 500} 500`}
          opacity="0.8"
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
            r={3 * Math.min(pointProgress * 1.2, 1)}
            fill={showCurve ? '#22c55e' : '#ef4444'}
            opacity={0.8}
          />
        );
      })}
    </svg>
  );
}

export function Slide06Activation() {
  return (
    <Slide>
      <PartLabel number="02" />
      <SlideTitle subtitle="Making Curves 'Bend'">Activation Functions</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {/* Left: Comparison Diagrams */}
          <div style={{ flex: '0 0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {/* Linear Cannot Fit */}
              <div
                style={{
                  padding: '0.5rem',
                  backgroundColor: '#fef2f2',
                  borderRadius: '0.5rem',
                  border: '1px solid #fecaca',
                }}
              >
                <div style={{ fontSize: '0.65rem', color: '#991b1b', marginBottom: '0.25rem', fontWeight: 600, textAlign: 'center' }}>
                  Real Data: Complex & Irregular
                </div>
                <ComplexDataGraph animate={true} showCurve={false} />
                <div style={{ fontSize: '0.55rem', color: '#7f1d1d', textAlign: 'center', marginTop: '0.25rem' }}>
                  Straight lines cannot fit these points
                </div>
              </div>

              {/* Non-linear Can Fit */}
              <div
                style={{
                  padding: '0.5rem',
                  backgroundColor: '#f0fdf4',
                  borderRadius: '0.5rem',
                  border: '1px solid #bbf7d0',
                }}
              >
                <div style={{ fontSize: '0.65rem', color: '#166534', marginBottom: '0.25rem', fontWeight: 600, textAlign: 'center' }}>
                  Activation Functions: Curve Fitting
                </div>
                <ComplexDataGraph animate={true} showCurve={true} />
                <div style={{ fontSize: '0.55rem', color: '#14532d', textAlign: 'center', marginTop: '0.25rem' }}>
                  Curves can pass through more points
                </div>
              </div>
            </div>
          </div>

          {/* Right: Explanation */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <Card variant="primary">
              <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.35rem' }}>
                  Secret: Wrap an "activation function" g around the linear function
                </div>
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    fontWeight: 600,
                    color: '#1e293b',
                  }}
                >
                  f(x) = <span style={{ color: '#3b82f6' }}>g</span>( wx + b )
                </div>
              </div>
            </Card>

            <CardGrid columns={3}>
              <Card>
                <div style={{ textAlign: 'center', padding: '0.25rem 0' }}>
                  <div style={{ fontSize: '0.65rem', color: '#64748b', marginBottom: '0.25rem' }}>
                    Linear
                  </div>
                  <div style={{ fontSize: '1rem', fontFamily: 'serif', fontStyle: 'italic', marginBottom: '0.25rem' }}>
                    wx + b
                  </div>
                  <div style={{ color: '#ef4444', fontSize: '0.7rem' }}>Can only draw lines</div>
                </div>
              </Card>

              <Card>
                <div style={{ textAlign: 'center', padding: '0.25rem 0' }}>
                  <div style={{ fontSize: '0.65rem', color: '#64748b', marginBottom: '0.25rem' }}>
                    Activation Function
                  </div>
                  <div style={{ fontSize: '1rem', fontFamily: 'serif', fontStyle: 'italic', marginBottom: '0.25rem' }}>
                    sigmoid / ReLU
                  </div>
                  <div style={{ color: '#22c55e', fontSize: '0.7rem' }}>Makes lines bend</div>
                </div>
              </Card>

              <Card>
                <div style={{ textAlign: 'center', padding: '0.25rem 0' }}>
                  <div style={{ fontSize: '0.65rem', color: '#64748b', marginBottom: '0.25rem' }}>
                    Multi-layer
                  </div>
                  <div style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>
                    🔗🔗🔗
                  </div>
                  <div style={{ color: '#8b5cf6', fontSize: '0.7rem' }}>Any complex curve</div>
                </div>
              </Card>
            </CardGrid>

            {/* Real-world non-linear relationships */}
            <div
              style={{
                padding: '0.6rem',
                backgroundColor: '#fff7ed',
                borderRadius: '0.5rem',
                border: '1px solid #fed7aa',
              }}
            >
              <div style={{ fontSize: '0.7rem', color: '#9a3412', marginBottom: '0.35rem', fontWeight: 600 }}>
                Why do we need non-linearity? The real world is complex:
              </div>
              <div style={{ fontSize: '0.65rem', color: '#7c2d12', lineHeight: 1.5, display: 'flex', gap: '0.75rem' }}>
                <span>Happy mood → Might laugh loud or just smile</span>
                <span>Hungry → Might eat or drink water first</span>
              </div>
            </div>

            <div
              style={{
                padding: '0.6rem',
                backgroundColor: '#dbeafe',
                borderRadius: '0.5rem',
                textAlign: 'center',
              }}
            >
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#1d4ed8' }}>
                <strong>Activation Functions</strong> = The key to neural networks learning complex patterns
              </p>
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Activation Functions" />
    </Slide>
  );
}
