import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide04eSoftware() {
  return (
    <Slide>
      <PartLabel number="02" />
      <SlideTitle>The Birth of Software</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          {/* Core concept */}
          <div style={{ fontSize: '1.4rem', color: '#1e40af', textAlign: 'center' }}>
            Once we identify patterns, we can express them with <strong>code</strong>
          </div>

          {/* Code example */}
          <div
            style={{
              padding: '1.5rem 2rem',
              backgroundColor: '#1e293b',
              borderRadius: '0.75rem',
              fontFamily: 'monospace',
              fontSize: '1.1rem',
              color: '#e2e8f0',
              maxWidth: '700px',
            }}
          >
            <div style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>// An exchange order request</div>
            <div>
              <span style={{ color: '#fbbf24' }}>request</span> = {'{'}
            </div>
            <div style={{ paddingLeft: '1.5rem' }}>
              <span style={{ color: '#a5b4fc' }}>coin</span>: <span style={{ color: '#86efac' }}>"BTC"</span>,
            </div>
            <div style={{ paddingLeft: '1.5rem' }}>
              <span style={{ color: '#a5b4fc' }}>isBuy</span>: <span style={{ color: '#f472b6' }}>true</span>,
            </div>
            <div style={{ paddingLeft: '1.5rem' }}>
              <span style={{ color: '#a5b4fc' }}>isMarket</span>: <span style={{ color: '#f472b6' }}>true</span>,
            </div>
            <div style={{ paddingLeft: '1.5rem' }}>
              <span style={{ color: '#a5b4fc' }}>size</span>: <span style={{ color: '#7dd3fc' }}>1</span>
            </div>
            <div>{'}'}</div>
            <div style={{ marginTop: '1rem', color: '#94a3b8' }}>
              // Input → Software processing → Output (strict y = f(x))
            </div>
          </div>

          {/* Point mapping vs continuous */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'stretch' }}>
            {/* What software can do */}
            <div
              style={{
                flex: 1,
                padding: '1.25rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '0.75rem',
                border: '2px solid #bbf7d0',
              }}
            >
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#166534', marginBottom: '1rem', textAlign: 'center' }}>
                What software can do: Point mapping
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#3b82f6', fontWeight: 600 }}>x = 1 (eating fries)</span>
                  <span style={{ color: '#94a3b8' }}>→</span>
                  <span style={{ color: '#22c55e', fontWeight: 600 }}>y = 1 (dip in ketchup)</span>
                  <span style={{ color: '#22c55e' }}>✓</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#3b82f6', fontWeight: 600 }}>x = 2 (raining)</span>
                  <span style={{ color: '#94a3b8' }}>→</span>
                  <span style={{ color: '#22c55e', fontWeight: 600 }}>y = 2 (use umbrella)</span>
                  <span style={{ color: '#22c55e' }}>✓</span>
                </div>
              </div>
            </div>

            {/* What software cannot do */}
            <div
              style={{
                flex: 1,
                padding: '1.25rem',
                backgroundColor: '#fef2f2',
                borderRadius: '0.75rem',
                border: '2px solid #fecaca',
              }}
            >
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#991b1b', marginBottom: '1rem', textAlign: 'center' }}>
                What software cannot do: Unknown points
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#3b82f6', fontWeight: 600 }}>x = 0.5 (???)</span>
                  <span style={{ color: '#94a3b8' }}>→</span>
                  <span style={{ color: '#ef4444', fontWeight: 600 }}>y = ???</span>
                  <span style={{ color: '#ef4444' }}>✗</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#3b82f6', fontWeight: 600 }}>x = 1.7 (???)</span>
                  <span style={{ color: '#94a3b8' }}>→</span>
                  <span style={{ color: '#ef4444', fontWeight: 600 }}>y = ???</span>
                  <span style={{ color: '#ef4444' }}>✗</span>
                </div>
              </div>
            </div>
          </div>

          {/* Math problem analogy */}
          <div
            style={{
              padding: '1.25rem 2rem',
              backgroundColor: '#fef3c7',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #f59e0b',
              maxWidth: '800px',
            }}
          >
            <div style={{ fontSize: '1.2rem', color: '#92400e', fontWeight: 600, marginBottom: '0.5rem' }}>
              Using math problems as an analogy:
            </div>
            <div style={{ fontSize: '1.1rem', color: '#78350f', lineHeight: 1.7 }}>
              Traditional software = can only solve problems with <strong>known inputs and known answers</strong>
              <br />
              Any change to the input → software <strong>cannot solve it</strong>
            </div>
          </div>

          {/* Conclusion */}
          <div
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#dbeafe',
              borderRadius: '0.75rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.3rem', color: '#1d4ed8', fontWeight: 600 }}>
              Software engineering = automating <strong>discovered point-to-point patterns</strong>
            </div>
          </div>

          {/* Symbolism summary */}
          <div
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#faf5ff',
              borderRadius: '0.75rem',
              border: '2px solid #e9d5ff',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.1rem', color: '#7c3aed', fontWeight: 600, marginBottom: '0.25rem' }}>
              This philosophy is called "Symbolism"
            </div>
            <div style={{ fontSize: '1rem', color: '#6b21a8' }}>
              Everything follows rules and patterns; once we find the rules, machines can execute
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Birth of Software" />
    </Slide>
  );
}
