import { useEffect, useState, useRef } from 'react';
import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

// 模拟有噪声但整体线性的数据（体现拟合的意义）
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
      {/* 坐标轴 */}
      <line x1={toScreenX(-range)} y1={toScreenY(0)} x2={toScreenX(range)} y2={toScreenY(0)} stroke="#94a3b8" strokeWidth="1" />
      <line x1={toScreenX(0)} y1={toScreenY(-range)} x2={toScreenX(0)} y2={toScreenY(range)} stroke="#94a3b8" strokeWidth="1" />

      {/* 拟合直线 y = 0.95x */}
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

      {/* 数据点 */}
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

      {/* 成功标签 */}
      {lineProgress > 0.8 && (
        <g opacity={(lineProgress - 0.8) * 5}>
          <rect x={toScreenX(0.5)} y={toScreenY(2.8)} width="100" height="22" fill="#f0fdf4" rx="4" stroke="#22c55e" />
          <text x={toScreenX(0.5) + 50} y={toScreenY(2.8) + 15} fontSize="11" fill="#166534" textAnchor="middle" fontWeight="600">
            近似拟合成功!
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
      <SlideTitle>联结主义的曙光</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          {/* 核心概念 */}
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
              <strong>联结主义</strong>：用 <span style={{ fontFamily: 'monospace', backgroundColor: '#dbeafe', padding: '0.1rem 0.5rem', borderRadius: '4px' }}>y = kx + b</span> 去拟合
              <strong>接近直线的微曲线分布</strong>
            </div>
          </div>

          {/* 三列布局：图形 → 手写识别示意 → 成功案例 */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'stretch' }}>
            {/* 左侧：图形（核心概念先行） */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <NearLinearGraph animate={true} />
              <div style={{ fontSize: '0.85rem', color: '#64748b', textAlign: 'center', maxWidth: '280px' }}>
                数据有噪声，但线性拟合仍能捕捉整体趋势
              </div>
            </div>

            {/* 中间：手写文字识别示意 */}
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
                对模糊输入的宽容
              </div>
              {/* 手写字符示意 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {/* 多种写法 */}
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
                {/* 箭头 */}
                <div style={{ textAlign: 'center', fontSize: '1.2rem', color: '#a16207' }}>↓</div>
                {/* 统一输出 */}
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
                  输出: "A"
                </div>
                <div style={{ fontSize: '0.8rem', color: '#78716c', textAlign: 'center', marginTop: '0.25rem' }}>
                  不同写法 → 同一结果
                </div>
              </div>
            </div>

            {/* 右侧：成功案例 */}
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
                实际应用
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  { icon: '✍️', title: '手写输入法' },
                  { icon: '🎤', title: '语音转文字' },
                  { icon: '📊', title: '趋势预测' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                    <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                    <span style={{ color: '#166534', fontWeight: 500 }}>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 信心与局限 */}
          <div style={{ display: 'flex', gap: '1.5rem', width: '100%', maxWidth: '850px' }}>
            {/* 信心 */}
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
                给了人们信心
              </div>
              <div style={{ fontSize: '1rem', color: '#78350f', lineHeight: 1.6 }}>
                机器<strong>可以学习</strong>规律！<br />
                不需要人类穷举每个点，只需要调整 k 和 b
              </div>
            </div>

            {/* 局限 */}
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
                但很快遇到瓶颈
              </div>
              <div style={{ fontSize: '1rem', color: '#7f1d1d', lineHeight: 1.6 }}>
                更复杂、更<strong>离散</strong>的问题完全失灵<br />
                例如：判断一张照片是<strong>猫</strong>还是<strong>狗</strong>？
              </div>
            </div>
          </div>

          {/* 总结 */}
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
              联结主义证明了机器学习的可行性，但<strong>线性函数</strong>的表达能力有限
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="联结主义" />
    </Slide>
  );
}
