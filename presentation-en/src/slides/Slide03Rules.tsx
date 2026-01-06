import { useState } from 'react';
import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';
import { LineGraph } from '../components/LineGraph';

// Real-world correspondence rule examples
const realWorldExamples = [
  { x: 'Eat fries', y: 'Dip in ketchup' },
  { x: 'Raining', y: 'Use umbrella' },
  { x: 'Cold weather', y: 'Wear jacket' },
];

// Literary pairing rules (antithesis)
const literaryExamples = [
  { x: 'Heaven', y: 'Earth' },
  { x: 'Rain', y: 'Wind' },
  { x: 'Mountain flower', y: 'Sea tree' },
];

// Internet meme completion rules
const memeExamples = [
  { x: 'To be or', y: 'not to be' },
  { x: 'Winter is', y: 'coming' },
  { x: 'Just do', y: 'it' },
];

export function Slide03Rules() {
  const [formulaRevealed, setFormulaRevealed] = useState(false);

  return (
    <Slide>
      <PartLabel number="01" />
      <SlideTitle>Understanding the World Through Rules</SlideTitle>

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

            {/* Real World Examples */}
            <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.4rem' }}>
              {/* Life Experience */}
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
                  Life Experience
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

              {/* Literary Pairings */}
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
                  Literary Pairs
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
                      <span style={{ color: '#94a3b8' }}>vs</span>
                      <span style={{ color: '#dc2626', fontWeight: 500 }}>{example.y}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Internet Memes */}
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
                  Famous Phrases
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
            <Card title="Observe Phenomena -> Discover Patterns">
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7 }}>
                Whether it's coordinate points in math or life experiences:
                <br />
                <span style={{ color: '#64748b' }}>
                  (1,1), (2,2), (3,3)... or [Raining→Umbrella], [Cold→Jacket]...
                </span>
                <br />
                We always find: <strong>There's a correspondence between input and output</strong>
              </p>
            </Card>

            <Card title="Abstract into Rules" variant="success">
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7 }}>
                Abstract these correspondences into <strong>formulas or rules</strong>
                <br />
                Once you master the rules, you can <strong>accurately predict output for any input</strong>
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
                <strong>Inducing rules from phenomena = Understanding the world through rules</strong>
                <br />
                <span style={{ fontSize: '0.8rem', opacity: 0.9 }}>
                  This is the traditional way humans understand the world
                </span>
              </p>
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Rules" />
    </Slide>
  );
}
