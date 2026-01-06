import { Slide, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card, CardGrid } from '../components/common';

const topics = [
  { icon: '📐', title: '用规则理解世界', desc: '从生活现象到数学表达 y = x' },
  { icon: '🔀', title: '规则的变换与软件边界', desc: 'y = kx + b 与传统软件的局限' },
  { icon: '📈', title: '突破线性的边界', desc: '激活函数让曲线"弯曲"' },
  { icon: '🧠', title: '从神经元到 Transformer', desc: '深度学习与 Attention 机制' },
  { icon: '✨', title: '大语言模型的本质', desc: '超级文字补全器的能力边界' },
  { icon: '🚗', title: 'Agent 与工具调用', desc: 'Function Call 与 MCP 协议' },
  { icon: '🎯', title: '挑战与总结', desc: 'Agent 开发的现状与未来' },
];

export function Slide02Overview() {
  return (
    <Slide>
      <SlideTitle>内容概览</SlideTitle>

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

      <SlideFooter title="深入浅出大语言模型" section="内容概览" />
    </Slide>
  );
}
