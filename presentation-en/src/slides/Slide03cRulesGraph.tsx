import { useState } from 'react';
import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { LineGraph } from '../components/LineGraph';

export function Slide03cRulesGraph() {
  const [formulaRevealed, setFormulaRevealed] = useState(false);

  return (
    <Slide>
      <PartLabel number="01" />
      <SlideTitle>Understanding the World Through Rules</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          {/* Leading statement */}
          <div style={{ fontSize: '1.3rem', color: '#1e40af', textAlign: 'center' }}>
            Plot these coordinates on a graph and connect them with a line...
          </div>

          {/* Main graph */}
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

          {/* Formula display */}
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
              <strong>Deriving</strong> rules from data points - this is <strong>understanding the world through rules</strong>!
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Understanding the World Through Rules" />
    </Slide>
  );
}
