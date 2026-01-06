import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card, CardGrid } from '../components/common';

export function Slide08LLMEssence() {
  return (
    <Slide>
      <PartLabel number="05" />
      <SlideTitle subtitle="文字补全">大语言模型的本质</SlideTitle>

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
            输入："今天天气"
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
            模型计算：根据训练数据中的模式
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
            输出："很好"（概率最高的下一个词）
          </div>
        </div>

        <Card title="核心原理（高度简化）">
          <CardGrid columns={3}>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{ fontSize: '1.25rem', fontWeight: 600, color: '#3b82f6', marginBottom: '0.5rem' }}
              >
                训练
              </div>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>
                阅读海量文本，学习"词与词之间的关系模式"
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{ fontSize: '1.25rem', fontWeight: 600, color: '#8b5cf6', marginBottom: '0.5rem' }}
              >
                推理
              </div>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>
                给定前文，预测最可能出现的下一个词
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{ fontSize: '1.25rem', fontWeight: 600, color: '#22c55e', marginBottom: '0.5rem' }}
              >
                循环
              </div>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>
                将预测的词加入前文，继续预测，直到生成完整回答
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
          <h4 style={{ margin: '0 0 0.5rem 0', color: '#92400e' }}>关键洞察</h4>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#78350f' }}>
            LLM 本质上是一个 <strong>超级复杂的自动补全器</strong>。它没有"理解"的概念，
            只是根据统计规律预测下一个最可能的词。
          </p>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem', color: '#78350f' }}>
            但当模型足够大、训练数据足够多时，这种"补全"就涌现出了令人惊叹的智能表现。
          </p>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="文字补全" />
    </Slide>
  );
}
