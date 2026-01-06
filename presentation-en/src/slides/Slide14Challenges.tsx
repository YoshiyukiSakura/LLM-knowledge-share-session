import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card, CardGrid } from '../components/common';

export function Slide14Challenges() {
  return (
    <Slide>
      <PartLabel number="07" />
      <SlideTitle>Current Challenges in Agent Development</SlideTitle>

      <SlideContent>
        <CardGrid columns={3}>
          <Card variant="warning">
            <div style={{ marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#d97706', margin: 0 }}>
                Context Consumption
              </h3>
            </div>
            <div style={{ fontSize: '0.8rem', marginBottom: '0.75rem' }}>
              <div style={{ color: '#64748b', marginBottom: '0.25rem' }}>ReAct Loop Example:</div>
              <div
                style={{
                  padding: '0.5rem',
                  backgroundColor: 'white',
                  borderRadius: '0.25rem',
                  fontFamily: 'monospace',
                  fontSize: '0.7rem',
                }}
              >
                Think -&gt; Act -&gt; Observe ↺
              </div>
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748b' }}>
              Every tool call adds full input/output to context. Complex tasks may need dozens of calls, filling up the context window quickly.
            </p>
            <div style={{ marginTop: '0.5rem', fontSize: '0.7rem', color: '#b45309' }}>
              Token costs rise dramatically<br />
              Response latency increases significantly
            </div>
          </Card>

          <Card variant="primary">
            <div style={{ marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#3b82f6', margin: 0 }}>
                Tool Selection & Orchestration
              </h3>
            </div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.8rem', color: '#64748b' }}>
              When available tools increase, LLM must accurately determine:
            </p>
            <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.75rem', color: '#475569' }}>
              <li>Which tool to call?</li>
              <li>How to fill parameters?</li>
              <li>What's the call sequence?</li>
              <li>How to combine results?</li>
            </ul>
            <div style={{ marginTop: '0.5rem', fontSize: '0.7rem', color: '#dc2626' }}>
              Wrong tool = Task failure<br />
              Wrong parameters = Execution error
            </div>
          </Card>

          <Card>
            <div style={{ marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#64748b', margin: 0 }}>
                Other Engineering Challenges
              </h3>
            </div>
            <div style={{ fontSize: '0.75rem' }}>
              {[
                { title: 'Error Recovery', desc: 'How to gracefully degrade when tool calls fail' },
                { title: 'State Management', desc: 'Maintain consistent memory and state in long conversations' },
                { title: 'Security Control', desc: 'Prevent malicious prompts from triggering dangerous operations' },
                { title: 'Observability', desc: 'Debug black-box behavior, trace decision chains' },
              ].map((item, index) => (
                <div key={index} style={{ marginBottom: '0.5rem' }}>
                  <strong style={{ color: '#475569' }}>{item.title}</strong>
                  <p style={{ margin: '0.125rem 0 0 0', fontSize: '0.7rem', color: '#94a3b8' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </CardGrid>

        <div
          style={{
            padding: '1rem',
            backgroundColor: '#dbeafe',
            borderRadius: '0.75rem',
            textAlign: 'center',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#1e40af' }}>
            These challenges are exactly what various Agent frameworks are working to solve:
            <br />
            <span style={{ fontSize: '0.85rem' }}>
              <strong>LangChain</strong>、<strong>AutoGen</strong>、<strong>Semantic Kernel</strong>、
              <strong style={{ color: '#7c3aed' }}>Claude Agent SDK</strong>
            </span>
          </p>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Agent Challenges" />
    </Slide>
  );
}
