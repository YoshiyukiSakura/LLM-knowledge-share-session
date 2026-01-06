import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';

export function Slide07bDeepLearning() {
  return (
    <Slide>
      <PartLabel number="04" />
      <SlideTitle subtitle="The Power of Multi-layer Stacking">Deep Learning</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Core formula */}
          <Card variant="primary">
            <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
              <div style={{ fontSize: '1rem', color: '#64748b', marginBottom: '0.75rem' }}>
                Mathematical essence of neural networks: Nested functions
              </div>
              <div
                style={{
                  fontSize: '1.5rem',
                  fontFamily: 'serif',
                  fontStyle: 'italic',
                  color: '#1e293b',
                }}
              >
                <span style={{ color: '#22c55e' }}>g₃</span>(
                <span style={{ color: '#8b5cf6' }}>g₂</span>(
                <span style={{ color: '#3b82f6' }}>g₁</span>( w₁x + b₁ ) · w₂ + b₂ ) · w₃ + b₃ )
              </div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.75rem' }}>
                Each layer is a "transformation", nested layer by layer, forming complex mappings
              </div>
            </div>
          </Card>

          {/* Layer visualization */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '1.5rem',
              backgroundColor: '#f8fafc',
              borderRadius: '0.75rem',
            }}
          >
            {/* Input layer */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>Input Layer</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#dbeafe',
                      border: '2px solid #3b82f6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#3b82f6',
                    }}
                  >
                    x{i}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ color: '#94a3b8', fontSize: '1.5rem' }}>→</div>

            {/* Hidden layer 1 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>Hidden Layer 1</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#f3e8ff',
                      border: '2px solid #8b5cf6',
                    }}
                  />
                ))}
              </div>
            </div>

            <div style={{ color: '#94a3b8', fontSize: '1.5rem' }}>→</div>

            {/* Hidden layer 2 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>Hidden Layer 2</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#fef3c7',
                      border: '2px solid #f59e0b',
                    }}
                  />
                ))}
              </div>
            </div>

            <div style={{ color: '#94a3b8', fontSize: '1.5rem' }}>→</div>

            {/* Output layer */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>Output Layer</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#dcfce7',
                      border: '2px solid #22c55e',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#22c55e',
                    }}
                  >
                    y{i}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why go deep */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Card title="Shallow Network">
              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                Can only learn simple patterns
                <div style={{ marginTop: '0.5rem', color: '#ef4444' }}>
                  "This is a cat" ✗
                </div>
              </div>
            </Card>
            <Card title="Deep Network" variant="success">
              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                Layer-by-layer abstraction, learns complex features
                <div style={{ marginTop: '0.5rem', color: '#22c55e' }}>
                  Edges → Textures → Parts → Objects ✓
                </div>
              </div>
            </Card>
          </div>

          {/* Conclusion */}
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#dbeafe',
              borderRadius: '0.75rem',
              textAlign: 'center',
            }}
          >
            <p style={{ margin: 0, fontSize: '1.1rem', color: '#1e40af', fontWeight: 600 }}>
              "Deep" learning = Enough layers → Can express arbitrarily complex input-output relationships
            </p>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Deep Learning" />
    </Slide>
  );
}
