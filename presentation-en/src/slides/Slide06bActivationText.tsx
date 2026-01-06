import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';

export function Slide06bActivationText() {
  return (
    <Slide>
      <PartLabel number="03" />
      <SlideTitle subtitle="Making Curves Bend">Activation Functions</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '950px', margin: '0 auto' }}>
          {/* Three stages comparison */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Card>
              <div style={{ padding: '0.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.5rem' }}>Linear</div>
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    marginBottom: '0.5rem',
                    color: '#1e293b',
                  }}
                >
                  wx + b
                </div>
                <div style={{ color: '#ef4444', fontSize: '1.1rem', fontWeight: 600 }}>Always a straight line</div>
              </div>
            </Card>

            <div style={{ display: 'flex', alignItems: 'center', fontSize: '2rem', color: '#64748b' }}>→</div>

            <Card variant="primary">
              <div style={{ padding: '0.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.5rem' }}>Add activation</div>
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    marginBottom: '0.5rem',
                    color: '#1e293b',
                  }}
                >
                  <span style={{ color: '#3b82f6' }}>g</span>(wx + b)
                </div>
                <div style={{ color: '#3b82f6', fontSize: '1.1rem', fontWeight: 600 }}>Can bend</div>
              </div>
            </Card>

            <div style={{ display: 'flex', alignItems: 'center', fontSize: '2rem', color: '#64748b' }}>→</div>

            <Card variant="success">
              <div style={{ padding: '0.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.5rem' }}>Multi-layer</div>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🔗🔗🔗</div>
                <div style={{ color: '#22c55e', fontSize: '1.1rem', fontWeight: 600 }}>Any complex curve</div>
              </div>
            </Card>
          </div>

          {/* Common activation functions */}
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: '#f8fafc',
              borderRadius: '0.75rem',
              border: '1px solid #e2e8f0',
            }}
          >
            <div style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '1rem', fontWeight: 600 }}>
              Common activation functions:
            </div>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
              {[
                { name: 'ReLU', formula: 'max(0, x)', desc: 'Simple & efficient, most common' },
                { name: 'Sigmoid', formula: '1/(1+e⁻ˣ)', desc: 'Output between 0~1' },
                { name: 'Tanh', formula: 'Hyperbolic tangent', desc: 'Output between -1~1' },
              ].map((fn, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#3b82f6', marginBottom: '0.25rem' }}>
                    {fn.name}
                  </div>
                  <div style={{ fontSize: '1rem', fontFamily: 'serif', fontStyle: 'italic', color: '#64748b' }}>
                    {fn.formula}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.25rem' }}>{fn.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Why non-linearity is needed */}
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: '#fff7ed',
              borderRadius: '0.75rem',
              border: '1px solid #fed7aa',
            }}
          >
            <div style={{ fontSize: '1.1rem', color: '#9a3412', marginBottom: '0.75rem', fontWeight: 600 }}>
              Why do we need non-linearity? Real-world mappings are complex:
            </div>
            <div style={{ fontSize: '1.05rem', color: '#7c2d12', lineHeight: 1.7, display: 'flex', gap: '2rem' }}>
              <span>• Happy mood → might laugh, smile, or do nothing</span>
              <span>• Hungry → might eat, order delivery, or keep working</span>
            </div>
          </div>

          {/* Core conclusion */}
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: '#dbeafe',
              borderRadius: '0.75rem',
              textAlign: 'center',
            }}
          >
            <p style={{ margin: 0, fontSize: '1.5rem', color: '#1d4ed8', fontWeight: 600 }}>
              Activation functions = the key to neural networks learning complex patterns
            </p>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Activation Functions" />
    </Slide>
  );
}
