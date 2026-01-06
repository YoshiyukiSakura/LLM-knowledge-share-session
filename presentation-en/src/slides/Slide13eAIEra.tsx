import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide13eAIEra() {
  const examples = [
    { name: 'Surf.ai', people: 'Small team', achievement: 'AI Crypto trading assistant, rapid rise', color: '#8b5cf6' },
    { name: 'Photon', people: 'Small team', achievement: 'Solana trading bot, massive daily volume', color: '#f59e0b' },
    { name: 'Cursor', people: '~12 people', achievement: 'AI code editor, $400M valuation', color: '#3b82f6' },
    { name: 'Midjourney', people: '~11 people', achievement: '$200M+ annual revenue, no funding', color: '#06b6d4' },
  ];

  return (
    <Slide>
      <PartLabel number="06" />
      <SlideTitle subtitle="Software Development in the AI Era">Code is Cheap, Show Me the Prompt</SlideTitle>

      <SlideContent>
        {/* Era Change */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            backgroundColor: '#1e293b',
            borderRadius: '1rem',
            marginBottom: '1rem',
          }}
        >
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '1.3rem',
              color: '#94a3b8',
              textAlign: 'center',
            }}
          >
            <span style={{ textDecoration: 'line-through', color: '#64748b' }}>"Talk is cheap, show me the code"</span>
            <span style={{ color: '#64748b', margin: '0 1rem' }}>→</span>
            <span style={{ color: '#22c55e', fontWeight: 700 }}>"Code is cheap, show me the prompt"</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1.25rem' }}>
          {/* Left: Small Teams, Big Achievements */}
          <div style={{ flex: 1.2 }}>
            <div
              style={{
                padding: '0.75rem 1rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '0.5rem',
                borderLeft: '4px solid #22c55e',
                marginBottom: '0.75rem',
              }}
            >
              <h3 style={{ margin: 0, color: '#166534', fontSize: '1rem' }}>
                Small Teams, Big Achievements
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {examples.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.85rem 1rem',
                    backgroundColor: '#f8fafc',
                    borderRadius: '0.75rem',
                    borderLeft: `4px solid ${item.color}`,
                    gap: '1rem',
                  }}
                >
                  <div style={{ minWidth: '100px' }}>
                    <div style={{ fontWeight: 700, color: item.color, fontSize: '1rem' }}>{item.name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{item.people}</div>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#475569' }}>{item.achievement}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '0.75rem',
                padding: '0.75rem',
                backgroundColor: '#dbeafe',
                borderRadius: '0.5rem',
                fontSize: '0.85rem',
                color: '#1e40af',
                textAlign: 'center',
              }}
            >
              With AI assistance, achieving what previously required <strong>hundreds of people</strong> or <strong>years of work</strong>
            </div>
          </div>

          {/* Right: Where We Stand */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                padding: '0.75rem 1rem',
                backgroundColor: '#fef2f2',
                borderRadius: '0.5rem',
                borderLeft: '4px solid #ef4444',
                marginBottom: '0.75rem',
              }}
            >
              <h3 style={{ margin: 0, color: '#dc2626', fontSize: '1rem' }}>
                Where We Stand
              </h3>
            </div>

            <div
              style={{
                padding: '1.5rem',
                backgroundColor: '#f8fafc',
                borderRadius: '1rem',
                height: 'calc(100% - 3rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {/* F1 vs Steam Engine Comparison */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginBottom: '1.5rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🏎️</div>
                  <div style={{ fontWeight: 700, color: '#166534', fontSize: '1rem' }}>Industry Pioneers</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>F1 Racing</div>
                  <div style={{ fontSize: '0.75rem', color: '#22c55e', marginTop: '0.25rem' }}>Already racing</div>
                </div>

                <div style={{ fontSize: '1.5rem', color: '#94a3b8' }}>vs</div>

                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🚂</div>
                  <div style={{ fontWeight: 700, color: '#dc2626', fontSize: '1rem' }}>Heima</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Steam Locomotive</div>
                  <div style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem' }}>Still exploring</div>
                </div>
              </div>

              <div
                style={{
                  padding: '1rem',
                  backgroundColor: '#fef3c7',
                  borderRadius: '0.75rem',
                  textAlign: 'center',
                }}
              >
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#92400e' }}>
                  We both have the <strong>Engine (LLM)</strong>
                  <br />
                  But we haven't yet unleashed its full potential
                </p>
              </div>
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="AI Era" />
    </Slide>
  );
}
