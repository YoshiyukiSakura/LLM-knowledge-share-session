import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';

export function Slide05bLinearLimitText() {
  return (
    <Slide>
      <PartLabel number="03" />
      <SlideTitle>线性函数的局限</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          {/* 问题 */}
          <Card variant="error">
            <div style={{ padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1rem', color: '#dc2626', marginBottom: '0.5rem' }}>问题</div>
              <div
                style={{
                  fontSize: '2rem',
                  fontFamily: 'serif',
                  fontStyle: 'italic',
                  fontWeight: 600,
                  color: '#1e293b',
                  marginBottom: '0.5rem',
                }}
              >
                f(x) = kx + b
              </div>
              <div style={{ fontSize: '1.25rem', color: '#7f1d1d' }}>
                线性函数只能表达<strong>直线关系</strong>，无法拟合曲线
              </div>
            </div>
          </Card>

          {/* 现实世界的复杂性 */}
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: '#fff7ed',
              borderRadius: '0.75rem',
              border: '1px solid #fed7aa',
            }}
          >
            <div style={{ fontSize: '1.1rem', color: '#9a3412', marginBottom: '1rem', fontWeight: 600 }}>
              现实世界远比直线复杂：
            </div>
            <div style={{ fontSize: '1.1rem', color: '#7c2d12', lineHeight: 1.8 }}>
              • <strong>同样的输入</strong>，在不同场景可能有<strong>不同的输出</strong>
              <br />
              • <strong>天冷了</strong> → 穿外套？开暖气？喝热水？还是去健身？
              <br />
              • <strong>肚子饿</strong> → 吃饭？叫外卖？吃零食？还是继续工作？
            </div>
          </div>

          {/* 解决方案 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <Card variant="success">
                <div style={{ padding: '1rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1rem', color: '#16a34a', marginBottom: '0.5rem' }}>解决方案</div>
                  <div
                    style={{
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: '#1e293b',
                      marginBottom: '0.5rem',
                    }}
                  >
                    非线性函数
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#15803d' }}>
                    让函数能够<strong>"弯曲"</strong>起来！
                  </div>
                </div>
              </Card>
            </div>

            <div style={{ fontSize: '3rem', color: '#64748b' }}>→</div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  padding: '1.25rem',
                  backgroundColor: '#dbeafe',
                  borderRadius: '0.75rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '1.1rem', color: '#1d4ed8', fontWeight: 600 }}>下一步</div>
                <div style={{ fontSize: '1.5rem', color: '#1e40af', fontWeight: 700, marginTop: '0.5rem' }}>
                  引入激活函数
                </div>
                <div style={{ fontSize: '1rem', color: '#1d4ed8', marginTop: '0.5rem' }}>
                  这是神经网络的关键！
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="线性的局限" />
    </Slide>
  );
}
