import { useState } from 'react';
import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';
import { LineGraph } from '../components/LineGraph';

// 现实生活中的对应规则例子
const realWorldExamples = [
  { x: '吃薯条', y: '蘸番茄酱' },
  { x: '下雨', y: '打伞' },
  { x: '天冷', y: '穿外套' },
];

// 笠翁对韵中的对仗规则
const literaryExamples = [
  { x: '天', y: '地' },
  { x: '雨', y: '风' },
  { x: '山花', y: '海树' },
];

// 网络亚文化中的接梗规则
const memeExamples = [
  { x: '鸡你太', y: '美' },
  { x: '奥利给', y: '干了' },
  { x: '有内', y: '味了' },
];

export function Slide03Rules() {
  const [formulaRevealed, setFormulaRevealed] = useState(false);

  return (
    <Slide>
      <PartLabel number="01" />
      <SlideTitle>用规则理解世界</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'stretch' }}>
          {/* Left: Graph visualization */}
          <div style={{ flex: 1 }}>
            <Card variant="primary">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.5rem 0',
                }}
              >
                <LineGraph
                  k={1}
                  b={0}
                  width={280}
                  height={220}
                  lineColor="#3b82f6"
                  animate={true}
                  animationDuration={3000}
                  animationMode="discover"
                  showGrid={true}
                  range={4}
                  onFormulaReveal={() => setFormulaRevealed(true)}
                />
                <div
                  style={{
                    marginTop: '0.75rem',
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: '#3b82f6',
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    opacity: formulaRevealed ? 1 : 0,
                    transform: formulaRevealed ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'all 0.5s ease-out',
                  }}
                >
                  y = x
                </div>
              </div>
            </Card>

            {/* 现实世界例子 */}
            <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.4rem' }}>
              {/* 生活经验 */}
              <div
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  backgroundColor: '#f0fdf4',
                  borderRadius: '0.5rem',
                  border: '1px solid #bbf7d0',
                }}
              >
                <div
                  style={{
                    fontSize: '0.65rem',
                    color: '#166534',
                    marginBottom: '0.4rem',
                    fontWeight: 600,
                  }}
                >
                  生活经验
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  {realWorldExamples.map((example, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.2rem',
                        fontSize: '0.65rem',
                      }}
                    >
                      <span style={{ color: '#3b82f6', fontWeight: 500 }}>{example.x}</span>
                      <span style={{ color: '#94a3b8' }}>→</span>
                      <span style={{ color: '#22c55e', fontWeight: 500 }}>{example.y}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 笠翁对韵 */}
              <div
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  backgroundColor: '#fef7ed',
                  borderRadius: '0.5rem',
                  border: '1px solid #fed7aa',
                }}
              >
                <div
                  style={{
                    fontSize: '0.65rem',
                    color: '#9a3412',
                    marginBottom: '0.4rem',
                    fontWeight: 600,
                  }}
                >
                  笠翁对韵
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  {literaryExamples.map((example, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.2rem',
                        fontSize: '0.65rem',
                      }}
                    >
                      <span style={{ color: '#ea580c', fontWeight: 500 }}>{example.x}</span>
                      <span style={{ color: '#94a3b8' }}>对</span>
                      <span style={{ color: '#dc2626', fontWeight: 500 }}>{example.y}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 网络流行语 */}
              <div
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  backgroundColor: '#fdf4ff',
                  borderRadius: '0.5rem',
                  border: '1px solid #f5d0fe',
                }}
              >
                <div
                  style={{
                    fontSize: '0.65rem',
                    color: '#86198f',
                    marginBottom: '0.4rem',
                    fontWeight: 600,
                  }}
                >
                  网络热梗
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  {memeExamples.map((example, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.2rem',
                        fontSize: '0.65rem',
                      }}
                    >
                      <span style={{ color: '#a855f7', fontWeight: 500 }}>{example.x}</span>
                      <span style={{ color: '#94a3b8' }}>...</span>
                      <span style={{ color: '#ec4899', fontWeight: 500 }}>{example.y}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Explanation */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Card title="观察现象 → 发现规律">
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7 }}>
                无论是数学中的坐标点，还是生活中的经验：
                <br />
                <span style={{ color: '#64748b' }}>
                  (1,1), (2,2), (3,3)... 或 [下雨→打伞], [天冷→穿外套]...
                </span>
                <br />
                我们总能发现：<strong>输入与输出之间存在对应关系</strong>
              </p>
            </Card>

            <Card title="抽象为规则" variant="success">
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7 }}>
                将这些对应关系抽象成<strong>公式或规则</strong>
                <br />
                掌握规则后，就能<strong>准确推断任意输入的输出</strong>
              </p>
            </Card>

            <div
              style={{
                padding: '1rem',
                backgroundColor: '#fef3c7',
                borderRadius: '0.5rem',
                borderLeft: '4px solid #f59e0b',
              }}
            >
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#92400e' }}>
                <strong>从现象归纳出规则 = 用规则理解世界</strong>
                <br />
                <span style={{ fontSize: '0.8rem', opacity: 0.9 }}>
                  这就是人类认知世界的传统方式
                </span>
              </p>
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="用规则理解世界" />
    </Slide>
  );
}
