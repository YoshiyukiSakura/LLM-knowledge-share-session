import { useEffect, useState, useRef } from 'react';
import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';

// 非线性数据点（模拟 S 曲线）
const nonLinearPoints = [
  { x: -3, y: -2.5 },
  { x: -2, y: -2 },
  { x: -1, y: -1 },
  { x: 0, y: 0 },
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 3, y: 2.5 },
];

// 现实世界中的非线性例子
const nonLinearExamples = [
  {
    title: '学习曲线',
    desc: '刚学很快，后来变慢',
    icon: '📚',
    color: '#3b82f6',
  },
  {
    title: '边际效用递减',
    desc: '第一口蛋糕最香',
    icon: '🍰',
    color: '#8b5cf6',
  },
  {
    title: '情绪波动',
    desc: '开心/难过不是线性变化',
    icon: '🎭',
    color: '#f59e0b',
  },
];

// 非线性图形组件
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
        // 先显示点
        const p = elapsed / (duration * 0.5);
        setProgress(1 - Math.pow(1 - p, 2));
      } else {
        // 再画线
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

  // 最佳拟合直线（实际上无法很好拟合）
  const lineY1 = -3 * 0.7;
  const lineY2 = 3 * 0.7;

  const visibleCount = Math.floor(nonLinearPoints.length * progress);

  return (
    <svg width={width} height={height} style={{ backgroundColor: 'white', borderRadius: '8px' }}>
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

      {/* 尝试用直线拟合（失败） */}
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

      {/* 非线性数据点 */}
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

      {/* 误差标记 */}
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

      {/* 标签 */}
      {lineProgress > 0.9 && (
        <text
          x={toScreenX(2)}
          y={toScreenY(lineY2) - 8}
          fontSize="10"
          fill="#ef4444"
          opacity={(lineProgress - 0.9) * 10}
        >
          直线无法拟合!
        </text>
      )}
    </svg>
  );
}

export function Slide05LinearLimit() {
  return (
    <Slide>
      <PartLabel number="02" />
      <SlideTitle>线性函数的局限</SlideTitle>

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
                  现实数据往往是<strong>非线性</strong>的：
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
                  无论怎么调整 <strong>k</strong> 和 <strong>b</strong>
                  <br />
                  直线都无法很好拟合曲线形状的数据
                </div>
              </div>
            </Card>

            {/* 现实中的非线性例子 */}
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
                  线性函数的问题
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
                  只能表达<strong>直线</strong>关系
                </div>
              </div>
            </Card>

            {/* 局限性说明 */}
            <div
              style={{
                padding: '0.75rem',
                backgroundColor: '#fff7ed',
                borderRadius: '0.5rem',
                border: '1px solid #fed7aa',
              }}
            >
              <div style={{ fontSize: '0.75rem', color: '#9a3412', marginBottom: '0.5rem', fontWeight: 600 }}>
                现实世界更复杂：
              </div>
              <div style={{ fontSize: '0.7rem', color: '#7c2d12', lineHeight: 1.6 }}>
                • <strong>同样输入</strong>，不同场景有<strong>不同输出</strong>
                <br />
                • <strong>天冷</strong> → 穿外套？还是开暖气？还是喝热水？
                <br />
                • <strong>吃薯条</strong> → 蘸番茄酱？还是蘸甜辣酱？还是不蘸？
              </div>
            </div>

            <div style={{ textAlign: 'center', fontSize: '1.5rem', color: '#64748b' }}>↓</div>

            <Card variant="success">
              <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
                <div style={{ fontSize: '0.75rem', color: '#16a34a', marginBottom: '0.25rem' }}>
                  我们需要
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
                  非线性函数
                </div>
                <div style={{ marginTop: '0.35rem', color: '#64748b', fontSize: '0.8rem' }}>
                  让函数能够<strong>"弯曲"</strong>起来！
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
                如何让直线变成曲线？
              </div>
              <div style={{ fontSize: '0.7rem', color: '#1e40af', marginTop: '0.25rem' }}>
                引入<strong>激活函数</strong> → 神经网络的关键！
              </div>
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="线性的局限" />
    </Slide>
  );
}
