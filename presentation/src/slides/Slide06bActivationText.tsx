import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';

export function Slide06bActivationText() {
  return (
    <Slide>
      <PartLabel number="03" />
      <SlideTitle subtitle="让曲线「弯曲」">激活函数</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '950px', margin: '0 auto' }}>
          {/* 三个阶段对比 */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Card>
              <div style={{ padding: '0.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.5rem' }}>线性</div>
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    marginBottom: '0.5rem',
                    color: '#1e293b',
                  }}
                >
                  wx + b
                </div>
                <div style={{ color: '#ef4444', fontSize: '1.1rem', fontWeight: 600 }}>永远是直线</div>
              </div>
            </Card>

            <div style={{ display: 'flex', alignItems: 'center', fontSize: '2rem', color: '#64748b' }}>→</div>

            <Card variant="primary">
              <div style={{ padding: '0.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.5rem' }}>加激活函数</div>
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    marginBottom: '0.5rem',
                    color: '#1e293b',
                  }}
                >
                  <span style={{ color: '#3b82f6' }}>g</span>(wx + b)
                </div>
                <div style={{ color: '#3b82f6', fontSize: '1.1rem', fontWeight: 600 }}>可以弯曲</div>
              </div>
            </Card>

            <div style={{ display: 'flex', alignItems: 'center', fontSize: '2rem', color: '#64748b' }}>→</div>

            <Card variant="success">
              <div style={{ padding: '0.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.5rem' }}>多层组合</div>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🔗🔗🔗</div>
                <div style={{ color: '#22c55e', fontSize: '1.1rem', fontWeight: 600 }}>任意复杂曲线</div>
              </div>
            </Card>
          </div>

          {/* 常见激活函数 */}
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: '#f8fafc',
              borderRadius: '0.75rem',
              border: '1px solid #e2e8f0',
            }}
          >
            <div style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '1rem', fontWeight: 600 }}>
              常见的激活函数：
            </div>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
              {[
                { name: 'ReLU', formula: 'max(0, x)', desc: '简单高效，最常用' },
                { name: 'Sigmoid', formula: '1/(1+e⁻ˣ)', desc: '输出 0~1 之间' },
                { name: 'Tanh', formula: '双曲正切', desc: '输出 -1~1 之间' },
              ].map((fn, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#3b82f6', marginBottom: '0.25rem' }}>
                    {fn.name}
                  </div>
                  <div style={{ fontSize: '1rem', fontFamily: 'serif', fontStyle: 'italic', color: '#64748b' }}>
                    {fn.formula}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.25rem' }}>{fn.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 为什么需要非线性 */}
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: '#fff7ed',
              borderRadius: '0.75rem',
              border: '1px solid #fed7aa',
            }}
          >
            <div style={{ fontSize: '1.1rem', color: '#9a3412', marginBottom: '0.75rem', fontWeight: 600 }}>
              为什么需要非线性？现实世界的映射很复杂：
            </div>
            <div style={{ fontSize: '1.05rem', color: '#7c2d12', lineHeight: 1.7, display: 'flex', gap: '2rem' }}>
              <span>• 心情好 → 可能大笑，也可能微笑，也可能什么都不做</span>
              <span>• 饿了 → 可能吃饭，可能叫外卖，可能忍着继续工作</span>
            </div>
          </div>

          {/* 核心结论 */}
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: '#dbeafe',
              borderRadius: '0.75rem',
              textAlign: 'center',
            }}
          >
            <p style={{ margin: 0, fontSize: '1.5rem', color: '#1d4ed8', fontWeight: 600 }}>
              激活函数 = 神经网络能够学习复杂规律的关键
            </p>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="激活函数" />
    </Slide>
  );
}
