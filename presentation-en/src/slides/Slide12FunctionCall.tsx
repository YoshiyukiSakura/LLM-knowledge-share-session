import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card, CardGrid } from '../components/common';

export function Slide12FunctionCall() {
  return (
    <Slide>
      <PartLabel number="06" />
      <SlideTitle subtitle="Why Is It Essential?">Function Call</SlideTitle>

      <SlideContent>
        <div
          style={{
            padding: '0.75rem 1rem',
            backgroundColor: '#f8fafc',
            borderRadius: '0.5rem',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: '0.9rem', color: '#64748b' }}>
            Scenario: User asks <strong>"What's the weather like in Beijing today?"</strong> - LLM needs to call weather API to answer
          </span>
        </div>

        <CardGrid columns={2}>
          <Card variant="error" title="Without Function Call">
            <div style={{ marginBottom: '0.75rem' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem' }}>
                LLM Output (Plain Text):
              </div>
              <div
                style={{
                  padding: '0.5rem',
                  backgroundColor: 'white',
                  borderRadius: '0.25rem',
                  fontSize: '0.8rem',
                  fontStyle: 'italic',
                  color: '#64748b',
                }}
              >
                "I need to call the weather API to query Beijing's weather. Please visit api.weather.com and pass parameter city=beijing..."
              </div>
            </div>
            <div
              style={{
                padding: '0.5rem',
                backgroundColor: '#fef2f2',
                borderRadius: '0.25rem',
                fontSize: '0.8rem',
              }}
            >
              <strong style={{ color: '#dc2626' }}>Problem:</strong>
              <span style={{ color: '#7f1d1d' }}> This is just "descriptive text"! Programs cannot parse and execute it</span>
            </div>
            <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#ef4444', textAlign: 'center' }}>
              Result: Can only "say", cannot "do"
            </div>
          </Card>

          <Card variant="success" title="With Function Call">
            <div style={{ marginBottom: '0.75rem' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem' }}>
                LLM Output (Structured JSON):
              </div>
              <div
                style={{
                  padding: '0.5rem',
                  backgroundColor: '#1e293b',
                  borderRadius: '0.25rem',
                  fontFamily: 'monospace',
                  fontSize: '0.7rem',
                  color: '#e2e8f0',
                }}
              >
                {`{
  "function": "get_weather",
  "arguments": {
    "city": "Beijing",
    "date": "today"
  }
}`}
              </div>
            </div>
            <div
              style={{
                padding: '0.5rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '0.25rem',
                fontSize: '0.8rem',
              }}
            >
              <strong style={{ color: '#16a34a' }}>Advantage:</strong>
              <span style={{ color: '#14532d' }}> Structured data, programs can directly parse and execute</span>
            </div>
            <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#22c55e', textAlign: 'center' }}>
              Result: Can "think" and "do"
            </div>
          </Card>
        </CardGrid>

        <div
          style={{
            padding: '1rem',
            backgroundColor: '#dbeafe',
            borderRadius: '0.75rem',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#1e40af' }}>
            <strong>Complete Flow: Function Call turns LLM's "thoughts" into "actions"</strong>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontSize: '0.8rem',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'white', borderRadius: '0.25rem' }}>
              User Question
            </span>
            <span style={{ color: '#3b82f6' }}>→</span>
            <span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'white', borderRadius: '0.25rem' }}>
              LLM Generates Call
            </span>
            <span style={{ color: '#3b82f6' }}>→</span>
            <span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'white', borderRadius: '0.25rem' }}>
              Agent Executes Function
            </span>
            <span style={{ color: '#3b82f6' }}>→</span>
            <span style={{ padding: '0.25rem 0.5rem', backgroundColor: '#dcfce7', borderRadius: '0.25rem' }}>
              Returns: Sunny 25C
            </span>
            <span style={{ color: '#3b82f6' }}>→</span>
            <span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'white', borderRadius: '0.25rem' }}>
              LLM Composes Answer
            </span>
          </div>
          <div style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.8rem', color: '#64748b' }}>
            This is the core principle behind ChatGPT plugins, Claude tool calling, and Claude Code
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Function Call" />
    </Slide>
  );
}
