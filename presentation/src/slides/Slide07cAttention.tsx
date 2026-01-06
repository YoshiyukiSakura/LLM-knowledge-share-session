import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';

export function Slide07cAttention() {
  return (
    <Slide>
      <PartLabel number="04" />
      <SlideTitle subtitle="关注什么更重要">Attention 机制</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* 生活例子 */}
          <Card variant="primary">
            <div style={{ padding: '0.5rem' }}>
              <div style={{ fontSize: '1.1rem', color: '#1e40af', marginBottom: '1rem', textAlign: 'center' }}>
                生活中的"注意力"
              </div>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👀</div>
                  <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                    看照片时
                    <br />
                    <strong style={{ color: '#3b82f6' }}>先看人脸</strong>
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📖</div>
                  <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                    读文章时
                    <br />
                    <strong style={{ color: '#3b82f6' }}>先看标题</strong>
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯</div>
                  <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                    找钥匙时
                    <br />
                    <strong style={{ color: '#3b82f6' }}>只看可能的地方</strong>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* 翻译例子 */}
          <div
            style={{
              padding: '1.5rem',
              backgroundColor: '#f8fafc',
              borderRadius: '0.75rem',
            }}
          >
            <div style={{ fontSize: '1rem', color: '#475569', marginBottom: '1rem', textAlign: 'center' }}>
              翻译 "The cat sat on the mat" 时，翻译 "猫" 这个词需要<strong>重点关注</strong>哪些词？
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
              → 翻译 "猫" 时，几乎全部注意力都在 "cat" 上
            </div>
          </div>

          {/* Self-Attention */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Card title="传统方法的问题">
              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                逐词处理，<strong style={{ color: '#ef4444' }}>看不到全局</strong>
                <div style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                  "银行" → 是河岸还是金融机构？
                  <br />
                  不看上下文无法判断
                </div>
              </div>
            </Card>
            <Card title="Attention 的优势" variant="success">
              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                每个词都能<strong style={{ color: '#22c55e' }}>看到整句话</strong>
                <div style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                  "我去银行取钱" → 金融机构
                  <br />
                  "河边的银行很陡" → 河岸
                </div>
              </div>
            </Card>
          </div>

          {/* 结论 */}
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
              Attention = 让模型学会"该看哪里"，而不是平等对待所有输入
            </p>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="Attention" />
    </Slide>
  );
}
