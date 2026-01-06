import { Slide, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card, CardGrid } from '../components/common';

const topics = [
  { icon: '📐', title: 'Understanding the World Through Rules', desc: 'From life phenomena to mathematical expression y = x' },
  { icon: '🔀', title: 'Transforming Rules & Software Limits', desc: 'y = kx + b and the limitations of traditional software' },
  { icon: '📈', title: 'Breaking Linear Boundaries', desc: 'Activation functions make curves "bend"' },
  { icon: '🧠', title: 'From Neurons to Transformers', desc: 'Deep learning and the Attention mechanism' },
  { icon: '✨', title: 'The Essence of LLMs', desc: 'The capabilities and limits of super text completers' },
  { icon: '🚗', title: 'Agents & Tool Calling', desc: 'Function Call and MCP Protocol' },
  { icon: '🎯', title: 'Challenges & Summary', desc: 'The present and future of Agent development' },
];

export function Slide02Overview() {
  return (
    <Slide>
      <SlideTitle>Overview</SlideTitle>

      <SlideContent>
        <CardGrid columns={2}>
          {topics.map((topic, index) => (
            <Card key={index} variant="default">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span style={{ fontSize: '2rem' }}>{topic.icon}</span>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                    {topic.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>
                    {topic.desc}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </CardGrid>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Overview" />
    </Slide>
  );
}
