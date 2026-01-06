import { useState, useEffect } from 'react';
import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

// 生活经验例子
const lifeExamples = [
  { x: '吃薯条', y: '蘸番茄酱' },
  { x: '下雨', y: '打伞' },
  { x: '天冷', y: '穿外套' },
  { x: '困了', y: '睡觉' },
];

// 笠翁对韵例子
const literaryExamples = [
  { x: '天', y: '地' },
  { x: '雨', y: '风' },
  { x: '山花', y: '海树' },
  { x: '赤日', y: '苍穹' },
];

// 网络热梗例子
const memeExamples = [
  { x: '鸡你太', y: '美' },
  { x: '奥利给', y: '干了' },
  { x: '有内', y: '味了' },
  { x: '听君一席话', y: '如听一席话' },
];

export function Slide03aRulesExamples() {
  // 模糊度状态：从 5px 模糊逐渐变为 0（清晰），持续 10 秒
  const [blurAmount, setBlurAmount] = useState(5);

  useEffect(() => {
    const duration = 10000; // 10秒
    const startTime = Date.now();
    const startBlur = 5;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // 使用 easeOut 让后期变化更平滑
      const easeProgress = 1 - Math.pow(1 - progress, 2);
      const currentBlur = startBlur * (1 - easeProgress);
      setBlurAmount(currentBlur);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // 输出文字的模糊样式
  const outputTextStyle = {
    filter: `blur(${blurAmount}px)`,
    transition: 'filter 0.1s ease-out',
  };

  return (
    <Slide>
      <PartLabel number="01" />
      <SlideTitle>用规则理解世界</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          {/* 引导问题 */}
          <div
            style={{
              fontSize: '1.5rem',
              color: '#1e40af',
              textAlign: 'center',
            }}
          >
            生活中处处存在<strong>对应关系</strong>，你能发现吗？
          </div>

          {/* 三类例子 */}
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            {/* 生活经验 */}
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '1rem',
                border: '2px solid #bbf7d0',
                minWidth: '260px',
              }}
            >
              <div
                style={{
                  fontSize: '1.25rem',
                  color: '#166534',
                  marginBottom: '1rem',
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                生活经验
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {lifeExamples.map((ex, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: '1.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ color: '#3b82f6', fontWeight: 500 }}>{ex.x}</span>
                    <span style={{ color: '#94a3b8', fontSize: '1.25rem' }}>→</span>
                    <span style={{ color: '#22c55e', fontWeight: 500, ...outputTextStyle }}>{ex.y}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 笠翁对韵 */}
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: '#fef7ed',
                borderRadius: '1rem',
                border: '2px solid #fed7aa',
                minWidth: '260px',
              }}
            >
              <div
                style={{
                  fontSize: '1.25rem',
                  color: '#9a3412',
                  marginBottom: '1rem',
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                《笠翁对韵》
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {literaryExamples.map((ex, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: '1.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ color: '#ea580c', fontWeight: 500 }}>{ex.x}</span>
                    <span style={{ color: '#94a3b8' }}>对</span>
                    <span style={{ color: '#dc2626', fontWeight: 500, ...outputTextStyle }}>{ex.y}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 网络热梗 */}
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: '#fdf4ff',
                borderRadius: '1rem',
                border: '2px solid #f5d0fe',
                minWidth: '260px',
              }}
            >
              <div
                style={{
                  fontSize: '1.25rem',
                  color: '#86198f',
                  marginBottom: '1rem',
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                网络热梗
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {memeExamples.map((ex, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: '1.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ color: '#a855f7', fontWeight: 500 }}>{ex.x}</span>
                    <span style={{ color: '#94a3b8' }}>...</span>
                    <span style={{ color: '#ec4899', fontWeight: 500, ...outputTextStyle }}>{ex.y}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 发现 */}
          <div
            style={{
              padding: '1.25rem 2rem',
              backgroundColor: '#dbeafe',
              borderRadius: '0.75rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.25rem', color: '#1d4ed8' }}>
              这些都是 <strong>输入 → 输出</strong> 的对应关系
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="用规则理解世界" />
    </Slide>
  );
}
