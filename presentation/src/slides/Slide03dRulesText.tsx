import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';

export function Slide03dRulesText() {
  return (
    <Slide>
      <PartLabel number="01" />
      <SlideTitle>用规则理解世界</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          {/* 核心概念 */}
          <Card variant="primary">
            <div style={{ padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.25rem', color: '#1e40af', marginBottom: '1rem' }}>
                观察现象 → 发现规律 → 抽象为规则
              </div>
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: '#3b82f6',
                  fontFamily: 'serif',
                  fontStyle: 'italic',
                  marginBottom: '0.5rem',
                }}
              >
                输入 → 输出
              </div>
              <div style={{ fontSize: '1.1rem', color: '#64748b' }}>
                无论是数学公式，还是生活经验，本质都是<strong>映射关系</strong>
              </div>
            </div>
          </Card>

          {/* 两个要点 */}
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Card title="规则的力量" variant="success">
              <div style={{ padding: '0.5rem 0' }}>
                <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: 1.8, color: '#1e293b' }}>
                  一旦掌握规则，就能<strong>准确推断任意输入的输出</strong>
                </p>
                <div style={{ marginTop: '1rem', fontSize: '1rem', color: '#64748b' }}>
                  • 知道 y = x，输入 100 就知道输出是 100
                  <br />
                  • 知道"下雨→打伞"，看到下雨就会带伞
                </div>
              </div>
            </Card>

            <Card title="规则的来源">
              <div style={{ padding: '0.5rem 0' }}>
                <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: 1.8, color: '#1e293b' }}>
                  规则来自于<strong>观察和归纳</strong>
                </p>
                <div style={{ marginTop: '1rem', fontSize: '1rem', color: '#64748b' }}>
                  • 看到 (1,1), (2,2), (3,3)... 归纳出 y = x
                  <br />
                  • 多次淋雨后学会"下雨要打伞"
                </div>
              </div>
            </Card>
          </div>

          {/* 核心结论 */}
          <div
            style={{
              padding: '1.5rem',
              backgroundColor: '#fef3c7',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #f59e0b',
              textAlign: 'center',
            }}
          >
            <p style={{ margin: 0, fontSize: '1.5rem', color: '#92400e', fontWeight: 600 }}>
              从现象归纳出规则 = 用规则理解世界
            </p>
            <p style={{ margin: '0.75rem 0 0', fontSize: '1.1rem', color: '#a16207' }}>
              这就是人类认知世界的传统方式
            </p>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="用规则理解世界" />
    </Slide>
  );
}
