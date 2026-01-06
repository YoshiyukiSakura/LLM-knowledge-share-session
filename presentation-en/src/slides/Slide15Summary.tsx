import { Slide, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide15Summary() {
  return (
    <Slide>
      <SlideTitle>Summary: From Rules to Intelligence</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          {/* Left: Technical Journey */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                padding: '0.75rem 1rem',
                backgroundColor: '#eff6ff',
                borderRadius: '0.5rem',
                borderLeft: '4px solid #3b82f6',
                marginBottom: '0.75rem',
              }}
            >
              <h3 style={{ margin: 0, color: '#1e40af', fontSize: '1rem' }}>Technical Journey</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { num: '01', title: 'Rules -> Functions -> Neural Networks', color: '#3b82f6' },
                { num: '02', title: 'Transformer & Attention', color: '#8b5cf6' },
                { num: '03', title: 'LLM: Super Text Completer', color: '#f59e0b' },
                { num: '04', title: 'Agent = LLM + Tool Calling', color: '#22c55e' },
                { num: '05', title: 'Function Call + MCP Protocol', color: '#06b6d4' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.6rem 1rem',
                    backgroundColor: '#f8fafc',
                    borderRadius: '0.5rem',
                    borderLeft: `4px solid ${item.color}`,
                  }}
                >
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      backgroundColor: item.color,
                      borderRadius: '50%',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {item.num}
                  </div>
                  <span style={{ fontSize: '0.9rem', color: '#1e293b' }}>{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Heima Practice */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                padding: '0.75rem 1rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '0.5rem',
                borderLeft: '4px solid #22c55e',
                marginBottom: '0.75rem',
              }}
            >
              <h3 style={{ margin: 0, color: '#166534', fontSize: '1rem' }}>Heima Practice</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div
                style={{
                  padding: '0.75rem 1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '0.5rem',
                  borderLeft: '4px solid #3b82f6',
                }}
              >
                <div style={{ fontWeight: 600, color: '#1e40af', fontSize: '0.9rem' }}>Using AI Tools</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Claude Code empowers daily development</div>
              </div>

              <div
                style={{
                  padding: '0.75rem 1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '0.5rem',
                  borderLeft: '4px solid #8b5cf6',
                }}
              >
                <div style={{ fontWeight: 600, color: '#6d28d9', fontSize: '0.9rem' }}>Creating AI Products</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Wildmeta AI - Intelligent Crypto Assistant</div>
              </div>

              <div
                style={{
                  padding: '0.75rem 1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '0.5rem',
                  borderLeft: '4px solid #f59e0b',
                }}
              >
                <div style={{ fontWeight: 600, color: '#92400e', fontSize: '0.9rem' }}>Changing How We Work</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Unattended AI workflows, let ideas grow overnight</div>
              </div>

              <div
                style={{
                  padding: '0.75rem 1rem',
                  backgroundColor: '#fef2f2',
                  borderRadius: '0.5rem',
                  borderLeft: '4px solid #ef4444',
                }}
              >
                <div style={{ fontWeight: 600, color: '#dc2626', fontSize: '0.9rem' }}>Keep Evolving</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>From steam locomotive to F1 racing car</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            marginTop: '1rem',
            padding: '1.25rem',
            backgroundColor: '#1e293b',
            borderRadius: '0.75rem',
            textAlign: 'center',
          }}
        >
          <p style={{ margin: 0, fontSize: '1.1rem', color: '#e2e8f0' }}>
            <span style={{ color: '#94a3b8', textDecoration: 'line-through' }}>Talk is cheap, show me the code</span>
            <span style={{ color: '#64748b', margin: '0 0.75rem' }}>→</span>
            <span style={{ color: '#22c55e', fontWeight: 700 }}>Code is cheap, show me the prompt</span>
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <span style={{ fontSize: '1.75rem', fontWeight: 700, color: '#3b82f6' }}>
            Thank You
          </span>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Summary" />
    </Slide>
  );
}
