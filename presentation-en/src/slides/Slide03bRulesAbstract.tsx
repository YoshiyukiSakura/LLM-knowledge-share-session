import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

// Abstracting to numbers examples
const abstractExamples = [
  { thing: 'Eating fries', x: 1, result: 'Dip in ketchup', y: 1 },
  { thing: 'Raining', x: 2, result: 'Use umbrella', y: 2 },
  { thing: 'Cold weather', x: 3, result: 'Wear jacket', y: 3 },
  { thing: 'Feeling tired', x: 4, result: 'Go to sleep', y: 4 },
];

export function Slide03bRulesAbstract() {
  return (
    <Slide>
      <PartLabel number="01" />
      <SlideTitle>Understanding the World Through Rules</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          {/* Leading statement */}
          <div style={{ fontSize: '1.4rem', color: '#1e40af', textAlign: 'center' }}>
            What if we <strong>abstract these correspondences into numbers</strong>...
          </div>

          {/* Abstraction process table */}
          <div
            style={{
              backgroundColor: '#f8fafc',
              borderRadius: '1rem',
              padding: '2rem',
              border: '2px solid #e2e8f0',
            }}
          >
            <table style={{ borderCollapse: 'collapse', fontSize: '1.15rem' }}>
              <thead>
                <tr>
                  <th style={{ padding: '0.75rem 1.5rem', color: '#64748b', fontWeight: 600 }}>Input</th>
                  <th style={{ padding: '0.75rem 1.5rem', color: '#3b82f6', fontWeight: 600 }}>Let x =</th>
                  <th style={{ padding: '0.75rem 1.5rem', color: '#64748b' }}></th>
                  <th style={{ padding: '0.75rem 1.5rem', color: '#64748b', fontWeight: 600 }}>Output</th>
                  <th style={{ padding: '0.75rem 1.5rem', color: '#22c55e', fontWeight: 600 }}>Let y =</th>
                  <th style={{ padding: '0.75rem 1.5rem', color: '#8b5cf6', fontWeight: 600 }}>Coordinate</th>
                </tr>
              </thead>
              <tbody>
                {abstractExamples.map((ex, i) => (
                  <tr key={i} style={{ borderTop: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.75rem 1.5rem', textAlign: 'center' }}>{ex.thing}</td>
                    <td
                      style={{
                        padding: '0.75rem 1.5rem',
                        textAlign: 'center',
                        color: '#3b82f6',
                        fontWeight: 700,
                        fontSize: '1.25rem',
                      }}
                    >
                      {ex.x}
                    </td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#94a3b8', fontSize: '1.5rem' }}>
                      →
                    </td>
                    <td style={{ padding: '0.75rem 1.5rem', textAlign: 'center' }}>{ex.result}</td>
                    <td
                      style={{
                        padding: '0.75rem 1.5rem',
                        textAlign: 'center',
                        color: '#22c55e',
                        fontWeight: 700,
                        fontSize: '1.25rem',
                      }}
                    >
                      {ex.y}
                    </td>
                    <td
                      style={{
                        padding: '0.75rem 1.5rem',
                        textAlign: 'center',
                        color: '#8b5cf6',
                        fontWeight: 600,
                        fontFamily: 'serif',
                        fontSize: '1.2rem',
                      }}
                    >
                      ({ex.x}, {ex.y})
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Discover pattern */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div
              style={{
                padding: '1.5rem 2rem',
                backgroundColor: '#fef3c7',
                borderRadius: '0.75rem',
                borderLeft: '4px solid #f59e0b',
              }}
            >
              <div style={{ fontSize: '1.1rem', color: '#92400e', marginBottom: '0.5rem' }}>Observe these coordinates:</div>
              <div style={{ fontSize: '1.5rem', color: '#78350f', fontWeight: 600 }}>
                (1,1), (2,2), (3,3), (4,4) ...
              </div>
            </div>

            <div style={{ fontSize: '2.5rem', color: '#64748b' }}>→</div>

            <div
              style={{
                padding: '1.5rem 2rem',
                backgroundColor: '#dbeafe',
                borderRadius: '0.75rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '1.1rem', color: '#1d4ed8', marginBottom: '0.5rem' }}>Discover the pattern:</div>
              <div
                style={{
                  fontSize: '2.5rem',
                  color: '#1e40af',
                  fontWeight: 700,
                  fontFamily: 'serif',
                  fontStyle: 'italic',
                }}
              >
                y = x
              </div>
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Understanding the World Through Rules" />
    </Slide>
  );
}
