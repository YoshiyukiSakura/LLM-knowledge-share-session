import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';

const goodAt = [
  { icon: '📝', title: 'Text Generation & Rewriting', desc: 'Writing, translation, summarization - ChatGPT/Claude everyday tasks' },
  { icon: '💬', title: 'Dialogue & Q&A', desc: 'Customer service, consulting, knowledge retrieval - most common use cases' },
  { icon: '💻', title: 'Code Assistance', desc: 'Code generation, explanation, debugging - Claude Code core capability' },
  { icon: '🎨', title: 'Creative Work', desc: 'Story writing, brainstorming, solution design' },
];

const badAt = [
  { icon: '🔢', title: 'Precise Math Calculations', desc: '23456 x 78901 = ? Will make mistakes!' },
  { icon: '📊', title: 'Real-time Information', desc: 'Cannot access internet for latest data' },
  { icon: '🔗', title: 'External System Interaction', desc: 'Cannot send emails, manipulate files, call APIs' },
  { icon: '🧮', title: 'Long-chain Logical Reasoning', desc: 'Complex multi-step reasoning prone to errors' },
];

export function Slide09LLMBoundary() {
  return (
    <Slide>
      <PartLabel number="05" />
      <SlideTitle>LLM Capability Boundaries</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {/* Good at */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              <span style={{ color: '#22c55e', fontSize: '1.25rem' }}>✓</span>
              <h3 style={{ margin: 0, fontSize: '1.125rem', color: '#16a34a' }}>Good At</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {goodAt.map((item, index) => (
                <Card key={index} variant="success">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                    <div>
                      <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.95rem' }}>{item.title}</h4>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>{item.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Bad at */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
              <h3 style={{ margin: 0, fontSize: '1.125rem', color: '#dc2626' }}>Not Good At</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {badAt.map((item, index) => (
                <Card key={index} variant="error">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                    <div>
                      <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.95rem' }}>{item.title}</h4>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>{item.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

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
            <strong>How to break through these limitations?</strong> Equip LLM with "tools" - let it call calculators, search engines, APIs...
            <br />
            <span style={{ fontSize: '0.85rem', color: '#b45309' }}>This is the core idea behind <strong>Agent</strong> -&gt;</span>
          </p>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Capability Boundaries" />
    </Slide>
  );
}
