import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';

export function Slide07cAttention() {
  return (
    <Slide>
      <PartLabel number="04" />
      <SlideTitle subtitle="Focus on What Matters">Attention Mechanism</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Real-life examples */}
          <Card variant="primary">
            <div style={{ padding: '0.5rem' }}>
              <div style={{ fontSize: '1.1rem', color: '#1e40af', marginBottom: '1rem', textAlign: 'center' }}>
                "Attention" in everyday life
              </div>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👀</div>
                  <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                    Looking at photos
                    <br />
                    <strong style={{ color: '#3b82f6' }}>Focus on faces first</strong>
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📖</div>
                  <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                    Reading articles
                    <br />
                    <strong style={{ color: '#3b82f6' }}>Read the title first</strong>
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯</div>
                  <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                    Looking for keys
                    <br />
                    <strong style={{ color: '#3b82f6' }}>Only check likely spots</strong>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Translation example */}
          <div
            style={{
              padding: '1.5rem',
              backgroundColor: '#f8fafc',
              borderRadius: '0.75rem',
            }}
          >
            <div style={{ fontSize: '1rem', color: '#475569', marginBottom: '1rem', textAlign: 'center' }}>
              When translating "The cat sat on the mat", which words should we <strong>focus on</strong> to translate "cat"?
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[
                { word: 'The', weight: 0.05 },
                { word: 'cat', weight: 0.85 },
                { word: 'sat', weight: 0.03 },
                { word: 'on', weight: 0.02 },
                { word: 'the', weight: 0.02 },
                { word: 'mat', weight: 0.03 },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    backgroundColor: `rgba(59, 130, 246, ${item.weight})`,
                    border: item.weight > 0.5 ? '2px solid #3b82f6' : '1px solid #e2e8f0',
                    fontWeight: item.weight > 0.5 ? 700 : 400,
                    color: item.weight > 0.5 ? '#1e40af' : '#64748b',
                  }}
                >
                  {item.word}
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
                    {(item.weight * 100).toFixed(0)}%
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: '#64748b' }}>
              → When translating "cat", almost all attention is on "cat"
            </div>
          </div>

          {/* Self-Attention */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Card title="Problem with Traditional Methods">
              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                Process word by word, <strong style={{ color: '#ef4444' }}>cannot see the big picture</strong>
                <div style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                  "bank" → River bank or financial institution?
                  <br />
                  Cannot determine without context
                </div>
              </div>
            </Card>
            <Card title="Advantage of Attention" variant="success">
              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                Each word can <strong style={{ color: '#22c55e' }}>see the entire sentence</strong>
                <div style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                  "I went to the bank to withdraw money" → Financial
                  <br />
                  "The river bank is steep" → River bank
                </div>
              </div>
            </Card>
          </div>

          {/* Conclusion */}
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#fef3c7',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #f59e0b',
              textAlign: 'center',
            }}
          >
            <p style={{ margin: 0, fontSize: '1.1rem', color: '#92400e', fontWeight: 600 }}>
              Attention = Letting the model learn "where to look", instead of treating all inputs equally
            </p>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Attention" />
    </Slide>
  );
}
