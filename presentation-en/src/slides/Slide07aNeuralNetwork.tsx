import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide07aNeuralNetwork() {
  return (
    <Slide>
      <PartLabel number="04" />
      <SlideTitle subtitle="Quantitative Change Leads to Qualitative Change">One Not Enough? Add Millions More</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '950px', margin: '0 auto' }}>

          {/* Problem introduction */}
          <div
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#fef2f2',
              borderRadius: '0.75rem',
              border: '1px solid #fecaca',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '1.05rem', color: '#991b1b' }}>
              A single <span style={{ fontFamily: 'serif', fontStyle: 'italic' }}>g(wx + b)</span> can bend, but only to a limited extent. Real-world patterns are much more complex...
            </span>
          </div>

          {/* Formula expression */}
          <div
            style={{
              padding: '0.75rem',
              backgroundColor: '#fff',
              borderRadius: '0.5rem',
              border: '1px solid #e2e8f0',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Mathematical essence:</span>
            <span
              style={{
                fontSize: '1.1rem',
                fontFamily: 'serif',
                fontStyle: 'italic',
                color: '#1e293b',
                marginLeft: '0.5rem',
              }}
            >
              <span style={{ color: '#8b5cf6' }}>g₁</span>(
              <span style={{ color: '#f59e0b' }}>g₂</span>(
              <span style={{ color: '#22c55e' }}>g₃</span>( x ) ) )
            </span>
            <span style={{ fontSize: '0.9rem', color: '#64748b', marginLeft: '0.75rem' }}>— Nested functions</span>
          </div>

          {/* Network structure diagram */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              padding: '1.25rem',
              backgroundColor: '#f8fafc',
              borderRadius: '0.75rem',
            }}
          >
            {/* Input */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>Input</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#dbeafe',
                      border: '2px solid #3b82f6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#3b82f6',
                    }}
                  >
                    x{i}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ color: '#94a3b8', fontSize: '1.25rem' }}>→</div>

            {/* Layer 1 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>Layer 1</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#f3e8ff',
                      border: '2px solid #8b5cf6',
                    }}
                  />
                ))}
              </div>
            </div>

            <div style={{ color: '#94a3b8', fontSize: '1.25rem' }}>→</div>

            {/* Layer 2 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>Layer 2</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#fef3c7',
                      border: '2px solid #f59e0b',
                    }}
                  />
                ))}
              </div>
            </div>

            <div style={{ color: '#94a3b8', fontSize: '1.25rem' }}>→</div>

            {/* Ellipsis */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>&nbsp;</div>
              <div style={{ fontSize: '1.5rem', color: '#94a3b8', padding: '2rem 0' }}>...</div>
            </div>

            <div style={{ color: '#94a3b8', fontSize: '1.25rem' }}>→</div>

            {/* Output */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>Output</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#dcfce7',
                      border: '2px solid #22c55e',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
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

          {/* Naming explanation */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div
              style={{
                flex: 1,
                padding: '1rem',
                backgroundColor: '#eff6ff',
                borderRadius: '0.75rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '1.1rem', color: '#1e40af', fontWeight: 600 }}>
                Each circle = one g(wx+b)
              </div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem' }}>
                Called a "neuron" in the field
              </div>
            </div>
            <div
              style={{
                flex: 1,
                padding: '1rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '0.75rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '1.1rem', color: '#166534', fontWeight: 600 }}>
                Stack more layers → Fit more complex patterns
              </div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem' }}>
                "Depth" = number of layers, hence "Deep Learning"
              </div>
            </div>
          </div>

          {/* Bottom emphasis */}
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#fef3c7',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #f59e0b',
            }}
          >
            <div style={{ fontSize: '1.05rem', color: '#92400e', textAlign: 'center' }}>
              Stacking simple transformations layer by layer to fit complex real-world patterns — this is Deep Learning
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Neural Networks" />
    </Slide>
  );
}
