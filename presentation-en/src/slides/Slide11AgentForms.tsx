import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card, CardGrid } from '../components/common';

export function Slide11AgentForms() {
  return (
    <Slide>
      <PartLabel number="06" />
      <SlideTitle>Various Forms of Agent</SlideTitle>

      <SlideContent>
        <CardGrid columns={3}>
          <Card>
            <div style={{ marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#3b82f6', margin: 0 }}>
                Command Line Agent
              </h3>
              <p style={{ fontSize: '0.75rem', color: '#64748b', margin: '0.25rem 0 0 0' }}>
                <strong>Claude Code</strong>、GitHub Copilot CLI
              </p>
            </div>
            <div
              style={{
                backgroundColor: '#1e293b',
                borderRadius: '0.5rem',
                padding: '0.75rem',
                fontFamily: 'monospace',
                fontSize: '0.75rem',
                color: '#e2e8f0',
              }}
            >
              <div style={{ color: '#94a3b8' }}>$ claude</div>
              <div style={{ color: '#60a5fa' }}>&gt; Help me refactor this function</div>
              <div style={{ color: '#a78bfa', marginTop: '0.25rem' }}>Reading files, executing edits...</div>
            </div>
          </Card>

          <Card>
            <div style={{ marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#8b5cf6', margin: 0 }}>
                Web Service Agent
              </h3>
              <p style={{ fontSize: '0.75rem', color: '#64748b', margin: '0.25rem 0 0 0' }}>
                <strong>ChatGPT</strong>、<strong>Claude.ai</strong>、Gemini
              </p>
            </div>
            <div
              style={{
                backgroundColor: '#f8fafc',
                borderRadius: '0.5rem',
                padding: '0.75rem',
                fontSize: '0.8rem',
              }}
            >
              <div style={{ color: '#64748b', marginBottom: '0.25rem' }}>User: Help me analyze this data</div>
              <div
                style={{
                  color: '#22c55e',
                  backgroundColor: '#f0fdf4',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '0.25rem',
                }}
              >
                Calling code interpreter...
              </div>
            </div>
          </Card>

          <Card>
            <div style={{ marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#22c55e', margin: 0 }}>
                API Backend Agent
              </h3>
              <p style={{ fontSize: '0.75rem', color: '#64748b', margin: '0.25rem 0 0 0' }}>
                <strong>OpenAI API</strong>、<strong>Claude API</strong>
              </p>
            </div>
            <div
              style={{
                backgroundColor: '#f8fafc',
                borderRadius: '0.5rem',
                padding: '0.5rem',
                fontFamily: 'monospace',
                fontSize: '0.65rem',
              }}
            >
              <div style={{ color: '#3b82f6' }}>POST /v1/messages</div>
              <div style={{ color: '#64748b' }}>{'{ "tools": [...] }'}</div>
              <div style={{ color: '#22c55e', marginTop: '0.25rem' }}>{'{ "tool_use": {...} }'}</div>
            </div>
          </Card>
        </CardGrid>

        <div
          style={{
            padding: '1rem',
            backgroundColor: '#fef3c7',
            borderRadius: '0.75rem',
            borderLeft: '4px solid #f59e0b',
            textAlign: 'center',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#92400e' }}>
            <strong>Common Ground:</strong> All are combinations of LLM + tool calling - the key is <strong>how to make LLM call tools?</strong>
          </p>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Agent Forms" />
    </Slide>
  );
}
