import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide13bHeimaAI() {
  const useCases = [
    { tech: 'Rust', desc: 'Blockchain development', color: '#f97316' },
    { tech: 'Golang', desc: 'Server backend', color: '#06b6d4' },
    { tech: 'JavaScript', desc: 'Client interface', color: '#eab308' },
    { tech: 'DevOps', desc: 'Server operations', color: '#22c55e' },
    { tech: 'Slack Bot', desc: 'Team automation', color: '#8b5cf6' },
  ];

  return (
    <Slide>
      <PartLabel number="06" />
      <SlideTitle subtitle="Heima Team's AI Practice">Our Relationship with AI</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', gap: '1.5rem', height: '100%' }}>
          {/* Left: Claude Code */}
          <div
            style={{
              flex: 1,
              padding: '1.5rem',
              backgroundColor: '#f8fafc',
              borderRadius: '1rem',
              border: '2px solid #3b82f6',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#3b82f6',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}
              >
                🛠️
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#1e40af' }}>Using AI Tools</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>Claude Code for daily development</p>
              </div>
            </div>

            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {useCases.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'white',
                    borderRadius: '0.75rem',
                    borderLeft: `4px solid ${item.color}`,
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      color: item.color,
                      fontSize: '1.1rem',
                      minWidth: '90px',
                    }}
                  >
                    {item.tech}
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#475569' }}>{item.desc}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '1rem',
                padding: '0.75rem',
                backgroundColor: '#dbeafe',
                borderRadius: '0.5rem',
                textAlign: 'center',
                fontSize: '0.9rem',
                color: '#1e40af',
              }}
            >
              Everyone on the team <strong>heavily relies</strong> on Claude Code
            </div>
          </div>

          {/* Right: Wildmeta AI */}
          <div
            style={{
              flex: 1,
              padding: '1.5rem',
              backgroundColor: '#faf5ff',
              borderRadius: '1rem',
              border: '2px solid #8b5cf6',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#8b5cf6',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}
              >
                🚀
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#6d28d9' }}>Creating AI Products</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>Wildmeta AI</p>
              </div>
            </div>

            {/* Significance A */}
            <div
              style={{
                flex: 1,
                padding: '1.25rem',
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                marginBottom: '1rem',
                borderLeft: '4px solid #22c55e',
              }}
            >
              <h4 style={{ margin: '0 0 0.75rem 0', color: '#166534', fontSize: '1.1rem' }}>
                AI Chat = Universal UI
              </h4>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569', lineHeight: 1.6 }}>
                No more need for frontend teams to customize UI and bind logic for each feature
              </p>
              <p
                style={{
                  margin: '0.75rem 0 0 0',
                  fontSize: '0.9rem',
                  color: '#166534',
                  fontWeight: 600,
                }}
              >
                What users can express + What tools support = All achievable
              </p>
            </div>

            {/* Significance B */}
            <div
              style={{
                flex: 1,
                padding: '1.25rem',
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                borderLeft: '4px solid #3b82f6',
              }}
            >
              <h4 style={{ margin: '0 0 0.75rem 0', color: '#1e40af', fontSize: '1.1rem' }}>
                Intelligent Crypto Trading Assistant
              </h4>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569', lineHeight: 1.6 }}>
                Users get an intelligent assistant they can <strong>communicate with</strong>
              </p>
              <p
                style={{
                  margin: '0.5rem 0 0 0',
                  fontSize: '0.95rem',
                  color: '#475569',
                  lineHeight: 1.6,
                }}
              >
                With the ability to <strong>execute operations on their behalf</strong>
              </p>
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Heima Practice" />
    </Slide>
  );
}
