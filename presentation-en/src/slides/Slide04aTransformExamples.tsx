import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

// Slope change examples (different intensity/degree)
const slopeExamples = [
  { x: 'Average person exercises', y: '30 minutes' },
  { x: 'Athlete exercises', y: '3 hours' },
  { x: 'Student studies', y: '8 hours' },
  { x: 'Top student studies', y: '12 hours' },
];

// Intercept change examples (different baseline/preference)
const interceptExamples = [
  { x: 'NYC pizza', y: 'Fold it' },
  { x: 'Chicago pizza', y: 'Fork & knife' },
  { x: 'East Coast greeting', y: 'Handshake' },
  { x: 'West Coast greeting', y: 'Hug' },
];

// Combined change examples
const combinedExamples = [
  { x: 'Summer morning', y: 'Iced coffee' },
  { x: 'Winter evening', y: 'Hot chocolate' },
  { x: 'Young adult party', y: 'Energy drinks' },
  { x: 'Senior brunch', y: 'Tea' },
];

export function Slide04aTransformExamples() {
  return (
    <Slide>
      <PartLabel number="02" />
      <SlideTitle>Transforming Rules</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          {/* Leading question */}
          <div
            style={{
              fontSize: '1.5rem',
              color: '#1e40af',
              textAlign: 'center',
            }}
          >
            In reality, rules often have <strong>variations and differences</strong>
          </div>

          {/* Three types of change examples */}
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            {/* Slope change - different intensity */}
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: '#eff6ff',
                borderRadius: '1rem',
                border: '2px solid #bfdbfe',
                minWidth: '260px',
              }}
            >
              <div
                style={{
                  fontSize: '1.25rem',
                  color: '#1d4ed8',
                  marginBottom: '1rem',
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                Different Intensity
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {slopeExamples.map((ex, i) => (
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
                    <span style={{ color: '#1d4ed8', fontWeight: 500 }}>{ex.y}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Intercept change - different preference */}
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: '#f5f3ff',
                borderRadius: '1rem',
                border: '2px solid #ddd6fe',
                minWidth: '260px',
              }}
            >
              <div
                style={{
                  fontSize: '1.25rem',
                  color: '#7c3aed',
                  marginBottom: '1rem',
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                Different Preference
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {interceptExamples.map((ex, i) => (
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
                    <span style={{ color: '#8b5cf6', fontWeight: 500 }}>{ex.x}</span>
                    <span style={{ color: '#94a3b8', fontSize: '1.25rem' }}>→</span>
                    <span style={{ color: '#7c3aed', fontWeight: 500 }}>{ex.y}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Combined change */}
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
                Combined Differences
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {combinedExamples.map((ex, i) => (
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
                    <span style={{ color: '#22c55e', fontWeight: 500 }}>{ex.x}</span>
                    <span style={{ color: '#94a3b8', fontSize: '1.25rem' }}>→</span>
                    <span style={{ color: '#166534', fontWeight: 500 }}>{ex.y}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Discovery */}
          <div
            style={{
              padding: '1.25rem 2rem',
              backgroundColor: '#fef3c7',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #f59e0b',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.25rem', color: '#92400e' }}>
              The same input, due to <strong>different conditions</strong>, can produce <strong>different outputs</strong>
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Transforming Rules" />
    </Slide>
  );
}
