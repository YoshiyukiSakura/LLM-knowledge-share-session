import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';

export function Slide05bLinearLimitText() {
  return (
    <Slide>
      <PartLabel number="03" />
      <SlideTitle>Limitations of Linear Functions</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          {/* Problem */}
          <Card variant="error">
            <div style={{ padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1rem', color: '#dc2626', marginBottom: '0.5rem' }}>Problem</div>
              <div
                style={{
                  fontSize: '2rem',
                  fontFamily: 'serif',
                  fontStyle: 'italic',
                  fontWeight: 600,
                  color: '#1e293b',
                  marginBottom: '0.5rem',
                }}
              >
                f(x) = kx + b
              </div>
              <div style={{ fontSize: '1.25rem', color: '#7f1d1d' }}>
                Linear functions can only express <strong>straight-line relationships</strong>, unable to fit curves
              </div>
            </div>
          </Card>

          {/* Complexity of real world */}
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: '#fff7ed',
              borderRadius: '0.75rem',
              border: '1px solid #fed7aa',
            }}
          >
            <div style={{ fontSize: '1.1rem', color: '#9a3412', marginBottom: '1rem', fontWeight: 600 }}>
              The real world is far more complex than a straight line:
            </div>
            <div style={{ fontSize: '1.1rem', color: '#7c2d12', lineHeight: 1.8 }}>
              • <strong>Same input</strong> may have <strong>different outputs</strong> in different contexts
              <br />
              • <strong>Cold weather</strong> → Wear a jacket? Turn on heater? Drink hot water? Or go exercise?
              <br />
              • <strong>Hungry</strong> → Eat? Order delivery? Have a snack? Or keep working?
            </div>
          </div>

          {/* Solution */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <Card variant="success">
                <div style={{ padding: '1rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1rem', color: '#16a34a', marginBottom: '0.5rem' }}>Solution</div>
                  <div
                    style={{
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: '#1e293b',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Non-linear Functions
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#15803d' }}>
                    Let functions <strong>"bend"</strong>!
                  </div>
                </div>
              </Card>
            </div>

            <div style={{ fontSize: '3rem', color: '#64748b' }}>→</div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  padding: '1.25rem',
                  backgroundColor: '#dbeafe',
                  borderRadius: '0.75rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '1.1rem', color: '#1d4ed8', fontWeight: 600 }}>Next Step</div>
                <div style={{ fontSize: '1.5rem', color: '#1e40af', fontWeight: 700, marginTop: '0.5rem' }}>
                  Introduce Activation Functions
                </div>
                <div style={{ fontSize: '1rem', color: '#1d4ed8', marginTop: '0.5rem' }}>
                  This is key to neural networks!
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Linear Limitations" />
    </Slide>
  );
}
