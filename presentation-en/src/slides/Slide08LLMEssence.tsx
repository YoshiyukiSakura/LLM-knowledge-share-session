import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card, CardGrid } from '../components/common';

export function Slide08LLMEssence() {
  return (
    <Slide>
      <PartLabel number="05" />
      <SlideTitle subtitle="Text Completion">The Essence of LLMs</SlideTitle>

      <SlideContent>
        {/* Flow diagram */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            padding: '1rem',
            backgroundColor: '#f8fafc',
            borderRadius: '0.75rem',
          }}
        >
          <div
            style={{
              padding: '0.75rem 1.25rem',
              backgroundColor: '#dbeafe',
              borderRadius: '0.5rem',
              fontWeight: 500,
            }}
          >
            Input: "The weather today"
          </div>
          <span style={{ fontSize: '1.5rem', color: '#64748b' }}>→</span>
          <div
            style={{
              padding: '0.75rem 1.25rem',
              backgroundColor: '#f3e8ff',
              borderRadius: '0.5rem',
              fontWeight: 500,
            }}
          >
            Model computes: Based on patterns in training data
          </div>
          <span style={{ fontSize: '1.5rem', color: '#64748b' }}>→</span>
          <div
            style={{
              padding: '0.75rem 1.25rem',
              backgroundColor: '#dcfce7',
              borderRadius: '0.5rem',
              fontWeight: 500,
            }}
          >
            Output: "is nice" (highest probability next word)
          </div>
        </div>

        <Card title="Core Principle (Highly Simplified)">
          <CardGrid columns={3}>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{ fontSize: '1.25rem', fontWeight: 600, color: '#3b82f6', marginBottom: '0.5rem' }}
              >
                Training
              </div>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>
                Read massive text, learn "patterns of word relationships"
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{ fontSize: '1.25rem', fontWeight: 600, color: '#8b5cf6', marginBottom: '0.5rem' }}
              >
                Inference
              </div>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>
                Given context, predict the most likely next word
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{ fontSize: '1.25rem', fontWeight: 600, color: '#22c55e', marginBottom: '0.5rem' }}
              >
                Loop
              </div>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>
                Add predicted word to context, continue predicting until complete response
              </p>
            </div>
          </CardGrid>
        </Card>

        <div
          style={{
            padding: '1.25rem',
            backgroundColor: '#fef3c7',
            borderRadius: '0.75rem',
            borderLeft: '4px solid #f59e0b',
          }}
        >
          <h4 style={{ margin: '0 0 0.5rem 0', color: '#92400e' }}>Key Insight</h4>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#78350f' }}>
            LLMs are essentially <strong>super sophisticated autocomplete systems</strong>. They don't have a concept of "understanding" -
            they simply predict the most likely next word based on statistical patterns.
          </p>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem', color: '#78350f' }}>
            But when models are large enough with sufficient training data, this "completion" emerges as remarkably intelligent behavior.
          </p>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Text Completion" />
    </Slide>
  );
}
