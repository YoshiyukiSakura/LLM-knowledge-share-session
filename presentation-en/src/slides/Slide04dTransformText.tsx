import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';

export function Slide04dTransformText() {
  return (
    <Slide>
      <PartLabel number="02" />
      <SlideTitle>Transforming Rules</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          {/* Core formula */}
          <Card variant="primary">
            <div style={{ padding: '1rem', textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: '#1e293b',
                  fontFamily: 'serif',
                  fontStyle: 'italic',
                  marginBottom: '0.75rem',
                }}
              >
                y = <span style={{ color: '#3b82f6' }}>k</span>x +{' '}
                <span style={{ color: '#8b5cf6' }}>b</span>
              </div>
              <div style={{ fontSize: '1.2rem', color: '#64748b' }}>
                By adjusting parameters, we can express various different rules
              </div>
            </div>
          </Card>

          {/* Parameter meanings */}
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Card>
              <div style={{ padding: '0.75rem', textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: '#3b82f6',
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    marginBottom: '0.5rem',
                  }}
                >
                  k
                </div>
                <div style={{ fontSize: '1.25rem', color: '#1e293b', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Slope = Intensity/Degree
                </div>
                <div style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.6 }}>
                  Average person: 30 min exercise
                  <br />
                  Athlete: 3 hours exercise
                  <br />
                  <span style={{ color: '#3b82f6' }}>→ Different intensity</span>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ padding: '0.75rem', textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: '#8b5cf6',
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    marginBottom: '0.5rem',
                  }}
                >
                  b
                </div>
                <div style={{ fontSize: '1.25rem', color: '#1e293b', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Intercept = Baseline/Preference
                </div>
                <div style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.6 }}>
                  NYC pizza: fold it
                  <br />
                  Chicago pizza: fork & knife
                  <br />
                  <span style={{ color: '#8b5cf6' }}>→ Different preference</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Core conclusion */}
          <div
            style={{
              padding: '1.5rem',
              backgroundColor: '#fef3c7',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #f59e0b',
              textAlign: 'center',
            }}
          >
            <p style={{ margin: 0, fontSize: '1.5rem', color: '#92400e', fontWeight: 600 }}>
              Real-world rules are much more complex than y = x
            </p>
            <p style={{ margin: '0.75rem 0 0', fontSize: '1.1rem', color: '#a16207' }}>
              But by adjusting parameters k and b, linear functions can express various straight-line relationships
            </p>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Transforming Rules" />
    </Slide>
  );
}
