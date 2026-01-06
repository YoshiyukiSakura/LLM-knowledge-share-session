import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';

export function Slide03dRulesText() {
  return (
    <Slide>
      <PartLabel number="01" />
      <SlideTitle>Understanding the World Through Rules</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          {/* Core concept */}
          <Card variant="primary">
            <div style={{ padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.25rem', color: '#1e40af', marginBottom: '1rem' }}>
                Observe phenomena → Find patterns → Abstract into rules
              </div>
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
                Input → Output
              </div>
              <div style={{ fontSize: '1.1rem', color: '#64748b' }}>
                Whether mathematical formulas or life experiences, they are all essentially <strong>mapping relationships</strong>
              </div>
            </div>
          </Card>

          {/* Two key points */}
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Card title="The Power of Rules" variant="success">
              <div style={{ padding: '0.5rem 0' }}>
                <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: 1.8, color: '#1e293b' }}>
                  Once you master a rule, you can <strong>accurately predict the output for any input</strong>
                </p>
                <div style={{ marginTop: '1rem', fontSize: '1rem', color: '#64748b' }}>
                  • Knowing y = x, input 100 means output is 100
                  <br />
                  • Knowing "rain → umbrella", you bring one when it rains
                </div>
              </div>
            </Card>

            <Card title="The Origin of Rules">
              <div style={{ padding: '0.5rem 0' }}>
                <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: 1.8, color: '#1e293b' }}>
                  Rules come from <strong>observation and induction</strong>
                </p>
                <div style={{ marginTop: '1rem', fontSize: '1rem', color: '#64748b' }}>
                  • Seeing (1,1), (2,2), (3,3)... we derive y = x
                  <br />
                  • After getting wet several times, we learn to bring an umbrella
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
              Deriving rules from phenomena = Understanding the world through rules
            </p>
            <p style={{ margin: '0.75rem 0 0', fontSize: '1.1rem', color: '#a16207' }}>
              This is the traditional way humans understand the world
            </p>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Understanding the World Through Rules" />
    </Slide>
  );
}
