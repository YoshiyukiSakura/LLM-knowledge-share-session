import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide13cWildmetaStatus() {
  const skills = [
    { name: 'Crypto Market', desc: 'Real-time market data & analysis', icon: '📊' },
    { name: 'Crypto News', desc: 'News & sentiment analysis', icon: '📰' },
    { name: 'Crypto Backtest', desc: 'Historical strategy backtesting', icon: '⏪' },
    { name: 'Position Analysis', desc: 'Portfolio analysis', icon: '📈' },
    { name: 'AI Strategy Generator', desc: 'Intelligent strategy generation', icon: '🎯', highlight: true },
    { name: 'Bot Deployment', desc: 'Trading bot deployment', icon: '🤖', highlight: true },
  ];

  return (
    <Slide>
      <PartLabel number="06" />
      <SlideTitle subtitle="copilot.wildmeta.ai">Wildmeta AI Current Status</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {/* Left: Core Capabilities */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                padding: '1rem 1.25rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '0.75rem',
                borderLeft: '4px solid #22c55e',
                marginBottom: '1rem',
              }}
            >
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#166534', fontSize: '1.1rem' }}>
                Implemented Core Capabilities
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {/* Basic Capabilities */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  padding: '1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#3b82f6',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0,
                  }}
                >
                  💬
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#1e293b', fontSize: '1rem' }}>Chat Conversations</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                    Supports multiple LLM models (GPT-4, Claude, Gemini, etc.)
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  padding: '1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#8b5cf6',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0,
                  }}
                >
                  🔧
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#1e293b', fontSize: '1rem' }}>Rich MCP Tools</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                    Various crypto-related tool capabilities based on MCP protocol
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Skills List */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                padding: '1rem 1.25rem',
                backgroundColor: '#eff6ff',
                borderRadius: '0.75rem',
                borderLeft: '4px solid #3b82f6',
                marginBottom: '1rem',
              }}
            >
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#1e40af', fontSize: '1.1rem' }}>
                Skills Tool List
              </h3>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.5rem',
              }}
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  style={{
                    padding: '0.75rem',
                    backgroundColor: skill.highlight ? '#fef3c7' : '#f8fafc',
                    borderRadius: '0.5rem',
                    border: skill.highlight ? '2px solid #f59e0b' : '1px solid #e2e8f0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.1rem' }}>{skill.icon}</span>
                    <span
                      style={{
                        fontWeight: skill.highlight ? 700 : 500,
                        color: skill.highlight ? '#92400e' : '#1e293b',
                        fontSize: '0.85rem',
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem', marginLeft: '1.6rem' }}>
                    {skill.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Highlight */}
        <div
          style={{
            marginTop: '1rem',
            padding: '1rem 1.5rem',
            backgroundColor: '#fef3c7',
            borderRadius: '0.75rem',
            borderLeft: '4px solid #f59e0b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>🎯</div>
            <div style={{ fontWeight: 700, color: '#92400e' }}>AI Strategy Generator</div>
            <div style={{ fontSize: '0.8rem', color: '#b45309' }}>Intelligent strategy generation</div>
          </div>
          <div style={{ fontSize: '1.5rem', color: '#d97706' }}>+</div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>🤖</div>
            <div style={{ fontWeight: 700, color: '#92400e' }}>Bot Deployment</div>
            <div style={{ fontSize: '0.8rem', color: '#b45309' }}>One-click trading bot deployment</div>
          </div>
          <div style={{ fontSize: '0.95rem', color: '#92400e', marginLeft: '1rem' }}>
            ← <strong>Key Flagship Features</strong>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Wildmeta AI" />
    </Slide>
  );
}
