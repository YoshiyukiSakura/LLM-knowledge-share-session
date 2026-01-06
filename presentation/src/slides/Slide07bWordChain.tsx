import { useState, useEffect } from 'react';
import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide07bWordChain() {
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // 文字接龙序列
  const sequence = ['我', '喜', '欢', '这', '样', '的', '方', '式'];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setStep((prev) => (prev + 1) % (sequence.length - 2));
        setIsAnimating(false);
      }, 800);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  // 当前输入的字
  const inputChars = sequence.slice(0, step + 3);
  // 当前输出的字
  const outputChar = sequence[step + 3] || sequence[3];

  return (
    <Slide>
      <PartLabel number="04" />
      <SlideTitle subtitle="回到我们的初心">让我们忘掉一些概念</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>

          {/* 引言 */}
          <div
            style={{
              padding: '1rem 1.5rem',
              backgroundColor: '#fef3c7',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #f59e0b',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '1.1rem', color: '#92400e' }}>
              现在让我们忘掉神经元、激活函数这些概念，重新拾起我们最初想要做的事情
            </span>
          </div>

          {/* 目标说明 */}
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#eff6ff',
              borderRadius: '0.75rem',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '1.15rem', color: '#1e40af', fontWeight: 600 }}>
              我们想要找到一个函数：输入一些文字 → 输出对应的关联文字
            </span>
          </div>

          {/* 动画区域 */}
          <div
            style={{
              padding: '2rem',
              backgroundColor: '#f8fafc',
              borderRadius: '1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
              minHeight: '200px',
            }}
          >
            <style>{`
              @keyframes slideIn {
                from {
                  opacity: 0;
                  transform: translateY(-20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
              }
              @keyframes moveToInput {
                0% {
                  transform: translateX(0);
                  opacity: 1;
                }
                50% {
                  transform: translateX(-80px);
                  opacity: 0.5;
                }
                100% {
                  transform: translateX(-160px);
                  opacity: 0;
                }
              }
            `}</style>

            {/* 主要动画区域 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* 输入字符 */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {inputChars.map((char, index) => (
                  <div
                    key={`${step}-${index}`}
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#3b82f6',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      animation: index === inputChars.length - 1 && step > 0 ? 'slideIn 0.5s ease-out' : 'none',
                    }}
                  >
                    {char}
                  </div>
                ))}
              </div>

              {/* 箭头 */}
              <div style={{ color: '#94a3b8', fontSize: '1.5rem', margin: '0 0.5rem' }}>→</div>

              {/* 函数盒子 */}
              <div
                style={{
                  width: '100px',
                  height: '80px',
                  backgroundColor: '#22c55e',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  animation: isAnimating ? 'pulse 0.8s ease-in-out' : 'none',
                  boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
                }}
              >
                函数
              </div>

              {/* 箭头 */}
              <div style={{ color: '#94a3b8', fontSize: '1.5rem', margin: '0 0.5rem' }}>→</div>

              {/* 输出字符 */}
              <div
                key={`output-${step}`}
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#3b82f6',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  animation: 'slideIn 0.5s ease-out',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                }}
              >
                {outputChar}
              </div>
            </div>

            {/* 循环指示 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#64748b',
                fontSize: '0.95rem',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 1l4 4-4 4" />
                <path d="M3 11V9a4 4 0 014-4h14" />
                <path d="M7 23l-4-4 4-4" />
                <path d="M21 13v2a4 4 0 01-4 4H3" />
              </svg>
              <span>输出加入输入，循环继续</span>
            </div>
          </div>

          {/* 底部说明 */}
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: '#f0fdf4',
              borderRadius: '0.75rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.25rem', color: '#166534', fontWeight: 600, marginBottom: '0.5rem' }}>
              简称：文字接龙游戏
            </div>
            <div style={{ fontSize: '0.95rem', color: '#64748b' }}>
              每次预测下一个最可能的字，然后把它加入输入，再次预测... 如此循环
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="文字接龙" />
    </Slide>
  );
}
