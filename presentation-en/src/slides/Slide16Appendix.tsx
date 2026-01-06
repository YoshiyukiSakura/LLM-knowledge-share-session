import { Slide, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';

export function Slide16Appendix() {
  return (
    <Slide>
      <SlideTitle subtitle="Understanding Token Completion with Math">Appendix</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {/* Left: Math problem */}
          <div style={{ flex: 1 }}>
            <Card variant="primary">
              <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', color: '#1e40af' }}>
                Fruit Store Purchase Problem
              </h3>
              <div style={{ fontSize: '0.9rem', lineHeight: 1.8 }}>
                <p style={{ margin: '0 0 0.75rem 0' }}>
                  A fruit store bought a batch of apples at $4 per pound.
                </p>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong>(1)</strong> The owner priced apples at 150% of purchase price. Find the selling price per pound.
                  <br />
                  <span style={{ color: '#22c55e' }}>Answer: 4 x 150% = <strong>$6/pound</strong></span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong>(2)</strong> A customer bought 3 pounds with 20% discount. Find the amount paid.
                  <br />
                  <span style={{ color: '#22c55e' }}>
                    Answer: <span style={{ color: '#3b82f6', fontWeight: 600 }}>6</span> x 3 x 0.8 ={' '}
                    <strong>$14.4</strong>
                  </span>
                </div>
                <div>
                  <strong>(3)</strong> Find the profit from this transaction.
                  <br />
                  <span style={{ color: '#22c55e' }}>
                    Answer: <span style={{ color: '#3b82f6', fontWeight: 600 }}>14.4</span> - 4x3 ={' '}
                    <strong>$2.4</strong>
                  </span>
                </div>
              </div>
              <div
                style={{
                  marginTop: '1rem',
                  padding: '0.5rem',
                  backgroundColor: 'white',
                  borderRadius: '0.25rem',
                  fontSize: '0.8rem',
                  color: '#64748b',
                }}
              >
                - Q(2) must use "<span style={{ color: '#3b82f6' }}>$6</span>" from Q(1) to calculate
                <br />- Q(3) must use "<span style={{ color: '#3b82f6' }}>$14.4</span>
                " from Q(2) to calculate
              </div>
            </Card>
          </div>

          {/* Right: LLM analogy */}
          <div style={{ flex: 1 }}>
            <Card>
              <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', color: '#8b5cf6' }}>
                LLM Analogy
              </h3>
              <div style={{ fontSize: '0.85rem' }}>
                {[
                  {
                    left: 'Problem Statement',
                    right: 'System Prompt + History',
                    desc: 'All known conditions form the initial context',
                  },
                  {
                    left: 'Q(1) Answer',
                    right: 'First Round Tokens',
                    desc: 'Generated content is appended to context',
                  },
                  {
                    left: 'Q(2) Answer',
                    right: 'Second Round Tokens',
                    desc: 'Must "see" previous result to continue',
                  },
                  {
                    left: 'Q(3) Answer',
                    right: 'Third Round Tokens',
                    desc: 'Each step "completes" based on previous',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      marginBottom: '0.75rem',
                      paddingBottom: '0.75rem',
                      borderBottom: index < 3 ? '1px solid #e2e8f0' : 'none',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontWeight: 600, color: '#475569' }}>{item.left}</span>
                      <span style={{ color: '#94a3b8' }}>=</span>
                      <span style={{ fontWeight: 600, color: '#8b5cf6' }}>{item.right}</span>
                    </div>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.75rem', color: '#94a3b8' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <div
              style={{
                marginTop: '1rem',
                padding: '1rem',
                backgroundColor: '#fef3c7',
                borderRadius: '0.5rem',
                textAlign: 'center',
              }}
            >
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#92400e' }}>
                -&gt; <strong>Context Window = Student's "Working Memory"</strong>
                <br />
                <span style={{ fontSize: '0.8rem' }}>
                  If a student can only remember the last 3 lines, they would forget the problem by Q(3)...
                </span>
              </p>
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Math Analogy" />
    </Slide>
  );
}
