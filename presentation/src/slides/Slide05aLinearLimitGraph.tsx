import { useEffect, useState, useRef } from 'react';
import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

// 非线性数据点（更明显的 S 曲线，让直线拟合失败更突出）
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

// 大图形组件
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
      {/* 网格 */}
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
          {/* 刻度标签 */}
          <text x={toScreenX(i)} y={toScreenY(0) + 20} textAnchor="middle" fontSize="12" fill="#94a3b8">
            {i}
          </text>
          <text x={toScreenX(0) - 15} y={toScreenY(i) + 5} textAnchor="end" fontSize="12" fill="#94a3b8">
            {i}
          </text>
        </g>
      ))}

      {/* 坐标轴 */}
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

      {/* 尝试用直线拟合（失败） */}
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

      {/* 非线性数据点 */}
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

      {/* 误差标记 */}
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

      {/* 标签 */}
      {lineProgress > 0.9 && (
        <g opacity={(lineProgress - 0.9) * 10}>
          <rect x={toScreenX(1.5)} y={toScreenY(lineY2) - 45} width="140" height="30" fill="#fef2f2" rx="4" />
          <text x={toScreenX(1.5) + 70} y={toScreenY(lineY2) - 25} fontSize="14" fill="#dc2626" textAnchor="middle" fontWeight="600">
            直线无法拟合曲线!
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
      <SlideTitle>线性函数的局限</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          {/* 大图形区域 */}
          <div
            style={{
              padding: '1.5rem',
              backgroundColor: '#fef2f2',
              borderRadius: '1rem',
              border: '2px solid #fecaca',
            }}
          >
            <div style={{ fontSize: '1.2rem', color: '#991b1b', marginBottom: '1rem', textAlign: 'center' }}>
              现实数据往往是<strong>非线性</strong>的 — 无论怎么调整 k 和 b，直线都无法很好拟合
            </div>
            <LargeNonLinearGraph animate={true} />
          </div>

          {/* 现实例子 */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            {[
              {
                title: '学英语',
                desc: '前100个单词一周学会',
                desc2: '后面1000个单词要一年',
                color: '#3b82f6',
                bg: '#eff6ff',
                border: '#bfdbfe',
              },
              {
                title: '喝奶茶',
                desc: '第一杯：超级满足！',
                desc2: '第三杯：想吐...',
                color: '#8b5cf6',
                bg: '#f5f3ff',
                border: '#ddd6fe',
              },
              {
                title: '加班',
                desc: '前2小时：效率拉满',
                desc2: '第8小时：摸鱼模式',
                color: '#f59e0b',
                bg: '#fffbeb',
                border: '#fde68a',
              },
              {
                title: '涨工资',
                desc: '月薪3k涨1k：开心死了',
                desc2: '月薪3w涨1k：无感',
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

      <SlideFooter title="深入浅出大语言模型" section="线性的局限" />
    </Slide>
  );
}
