import { useState } from 'react';
import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { LineGraph } from '../components/LineGraph';

export function Slide03cRulesGraph() {
  const [formulaRevealed, setFormulaRevealed] = useState(false);

  return (
    <Slide>
      <PartLabel number="01" />
      <SlideTitle>用规则理解世界</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          {/* 引导 */}
          <div style={{ fontSize: '1.3rem', color: '#1e40af', textAlign: 'center' }}>
            把这些坐标点画在图上，用一条线连接它们...
          </div>

          {/* 大图形 */}
          <div
            style={{
              padding: '1.5rem 2rem',
              backgroundColor: '#eff6ff',
              borderRadius: '1rem',
              border: '2px solid #bfdbfe',
            }}
          >
            <LineGraph
              k={1}
              b={0}
              width={550}
              height={420}
              lineColor="#3b82f6"
              animate={true}
              animationDuration={3500}
              animationMode="discover"
              showGrid={true}
              range={4}
              onFormulaReveal={() => setFormulaRevealed(true)}
            />
          </div>

          {/* 公式展示 */}
          <div
            style={{
              opacity: formulaRevealed ? 1 : 0,
              transform: formulaRevealed ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '3.5rem',
                fontWeight: 700,
                color: '#3b82f6',
                fontFamily: 'serif',
                fontStyle: 'italic',
                marginBottom: '0.5rem',
              }}
            >
              y = x
            </div>
            <div style={{ fontSize: '1.25rem', color: '#64748b' }}>
              从数据点中<strong>归纳</strong>出规则，这就是<strong>用规则理解世界</strong>！
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="用规则理解世界" />
    </Slide>
  );
}
