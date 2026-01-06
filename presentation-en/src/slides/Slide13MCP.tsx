import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';

export function Slide13MCP() {
  return (
    <Slide>
      <PartLabel number="06" />
      <SlideTitle subtitle="Unified Tool Calling Protocol">MCP</SlideTitle>

      <SlideContent>
        <Card variant="primary">
          <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#3b82f6', margin: '0 0 0.5rem 0' }}>
              MCP (Model Context Protocol)
            </h3>
            <p style={{ margin: 0, color: '#64748b' }}>
              Open standard proposed by Anthropic - <strong>Claude Code</strong> connects to various tools based on this protocol
            </p>
          </div>
        </Card>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            padding: '2rem',
            backgroundColor: '#f8fafc',
            borderRadius: '0.75rem',
          }}
        >
          {/* Architecture diagram */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              justifyContent: 'center',
            }}
          >
            {/* LLM */}
            <div
              style={{
                padding: '1rem 1.5rem',
                backgroundColor: '#dbeafe',
                borderRadius: '0.5rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>🧠</div>
              <div style={{ fontWeight: 600, color: '#1e40af' }}>LLM</div>
            </div>

            <div style={{ fontSize: '1.5rem', color: '#64748b' }}>↔</div>

            {/* MCP Client */}
            <div
              style={{
                padding: '1rem 1.5rem',
                backgroundColor: '#f3e8ff',
                borderRadius: '0.5rem',
                textAlign: 'center',
                border: '2px dashed #a78bfa',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>🔌</div>
              <div style={{ fontWeight: 600, color: '#6d28d9' }}>MCP Client</div>
              <div style={{ fontSize: '0.75rem', color: '#7c3aed', marginTop: '0.25rem' }}>
                (Part of Agent)
              </div>
            </div>

            <div style={{ fontSize: '1.5rem', color: '#64748b' }}>↔</div>

            {/* MCP Servers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['📁 File System', '🌐 Network Requests', '💾 Database', '🔧 Custom Tools'].map((tool, index) => (
                <div
                  key={index}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#dcfce7',
                    borderRadius: '0.25rem',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: '#166534',
                  }}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#3b82f6' }}>Unified Interface Standard</h4>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>
                Tool registration, call forwarding, result handling - one protocol handles all
              </p>
            </div>
          </Card>

          <Card>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#22c55e' }}>Plug and Play</h4>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>
                Community has hundreds of MCP Servers: Git, databases, browsers...
              </p>
            </div>
          </Card>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="MCP Architecture" />
    </Slide>
  );
}
