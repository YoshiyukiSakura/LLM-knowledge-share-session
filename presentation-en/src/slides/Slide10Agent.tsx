import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card, CardGrid } from '../components/common';

export function Slide10Agent() {
  return (
    <Slide>
      <PartLabel number="06" />
      <SlideTitle>Agent: Adding a Shell to the Engine</SlideTitle>

      <SlideContent>
        <CardGrid columns={3}>
          <Card>
            <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>⚙️</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#3b82f6', marginBottom: '0.5rem' }}>
                Engine = LLM
              </h3>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>
                Only capability: rotating the output shaft
              </p>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.8rem', color: '#94a3b8' }}>
                No practical function on its own
              </p>
            </div>
          </Card>

          <Card>
            <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🛠️</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#8b5cf6', marginBottom: '0.5rem' }}>
                Shell = Agent Framework
              </h3>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>
                Tool calling, memory management
              </p>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.8rem', color: '#94a3b8' }}>
                Context control, user interface
              </p>
            </div>
          </Card>

          <Card variant="success">
            <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🚀</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#16a34a', marginBottom: '0.5rem' }}>
                Product = Agent
              </h3>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>
                With practical functionality
              </p>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', fontWeight: 600 }}>
                Intelligent Application
              </p>
            </div>
          </Card>
        </CardGrid>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            padding: '1.5rem',
            backgroundColor: '#f8fafc',
            borderRadius: '0.75rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ textAlign: 'center', padding: '0.5rem 1rem', backgroundColor: '#dbeafe', borderRadius: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>LLM + Web Interface = </span>
            <strong style={{ color: '#3b82f6' }}>ChatGPT</strong>
          </div>
          <div style={{ textAlign: 'center', padding: '0.5rem 1rem', backgroundColor: '#f3e8ff', borderRadius: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>LLM + Chat Interface = </span>
            <strong style={{ color: '#8b5cf6' }}>Claude.ai</strong>
          </div>
          <div style={{ textAlign: 'center', padding: '0.5rem 1rem', backgroundColor: '#dcfce7', borderRadius: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>LLM + Terminal Tools = </span>
            <strong style={{ color: '#22c55e' }}>Claude Code</strong>
          </div>
        </div>

        <div
          style={{
            padding: '1rem 1.25rem',
            backgroundColor: '#fef3c7',
            borderRadius: '0.75rem',
            borderLeft: '4px solid #f59e0b',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#92400e' }}>
            <strong>Core Insight:</strong> Any invocation of an LLM constitutes an Agent -
            even just testing in a terminal, that shell is the simplest Agent
          </p>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Agent Concept" />
    </Slide>
  );
}
