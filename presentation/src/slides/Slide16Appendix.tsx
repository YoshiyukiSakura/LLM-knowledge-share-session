import { Slide, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';

export function Slide16Appendix() {
  return (
    <Slide>
      <SlideTitle subtitle="用数学题理解 Token 补全">附录</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {/* Left: Math problem */}
          <div style={{ flex: 1 }}>
            <Card variant="primary">
              <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', color: '#1e40af' }}>
                📝 水果店进货问题
              </h3>
              <div style={{ fontSize: '0.9rem', lineHeight: 1.8 }}>
                <p style={{ margin: '0 0 0.75rem 0' }}>
                  某水果店进了一批苹果，进货价为每斤 4 元。
                </p>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong>(1)</strong> 店主将苹果定价为进货价的 150%，求每斤售价。
                  <br />
                  <span style={{ color: '#22c55e' }}>答：4 × 150% = <strong>6 元/斤</strong></span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong>(2)</strong> 顾客买了 3 斤，店主打了 8 折，求实付金额。
                  <br />
                  <span style={{ color: '#22c55e' }}>
                    答：<span style={{ color: '#3b82f6', fontWeight: 600 }}>6</span> × 3 × 0.8 ={' '}
                    <strong>14.4 元</strong>
                  </span>
                </div>
                <div>
                  <strong>(3)</strong> 求店主在这笔交易中赚了多少钱？
                  <br />
                  <span style={{ color: '#22c55e' }}>
                    答：<span style={{ color: '#3b82f6', fontWeight: 600 }}>14.4</span> - 4×3 ={' '}
                    <strong>2.4 元</strong>
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
                • 第(2)题必须用第(1)题的「<span style={{ color: '#3b82f6' }}>6元</span>」才能计算
                <br />• 第(3)题必须用第(2)题的「<span style={{ color: '#3b82f6' }}>14.4元</span>
                」才能计算
              </div>
            </Card>
          </div>

          {/* Right: LLM analogy */}
          <div style={{ flex: 1 }}>
            <Card>
              <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', color: '#8b5cf6' }}>
                💡 与 LLM 的类比
              </h3>
              <div style={{ fontSize: '0.85rem' }}>
                {[
                  {
                    left: '题干',
                    right: 'System Prompt + 历史对话',
                    desc: '所有已知条件，构成了初始上下文 Context',
                  },
                  {
                    left: '第(1)题答案',
                    right: '第一轮生成的 Tokens',
                    desc: '生成的内容被追加到 Context 中',
                  },
                  {
                    left: '第(2)题答案',
                    right: '第二轮生成的 Tokens',
                    desc: '必须「看到」前一轮的结果才能继续',
                  },
                  {
                    left: '第(3)题答案',
                    right: '第三轮生成的 Tokens',
                    desc: '每一步都在前一步基础上「补全」',
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
                → <strong>Context Window = 学生的「工作记忆」</strong>
                <br />
                <span style={{ fontSize: '0.8rem' }}>
                  如果学生只能记住最近3行字，到第3题时已忘了题干...
                </span>
              </p>
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="数学题类比" />
    </Slide>
  );
}
