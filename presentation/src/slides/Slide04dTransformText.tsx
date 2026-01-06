import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';

export function Slide04dTransformText() {
  return (
    <Slide>
      <PartLabel number="02" />
      <SlideTitle>规则的变换</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          {/* 核心公式 */}
          <Card variant="primary">
            <div style={{ padding: '1rem', textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: '#1e293b',
                  fontFamily: 'serif',
                  fontStyle: 'italic',
                  marginBottom: '0.75rem',
                }}
              >
                y = <span style={{ color: '#3b82f6' }}>k</span>x +{' '}
                <span style={{ color: '#8b5cf6' }}>b</span>
              </div>
              <div style={{ fontSize: '1.2rem', color: '#64748b' }}>
                通过调整参数，可以表达各种不同的规则
              </div>
            </div>
          </Card>

          {/* 参数含义 */}
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Card>
              <div style={{ padding: '0.75rem', textAlign: 'center' }}>
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
                  k
                </div>
                <div style={{ fontSize: '1.25rem', color: '#1e293b', fontWeight: 600, marginBottom: '0.5rem' }}>
                  斜率 = 程度/强度
                </div>
                <div style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.6 }}>
                  普通人运动 30 分钟
                  <br />
                  运动员运动 3 小时
                  <br />
                  <span style={{ color: '#3b82f6' }}>→ 强度不同</span>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{ padding: '0.75rem', textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: '#8b5cf6',
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    marginBottom: '0.5rem',
                  }}
                >
                  b
                </div>
                <div style={{ fontSize: '1.25rem', color: '#1e293b', fontWeight: 600, marginBottom: '0.5rem' }}>
                  截距 = 基准/偏好
                </div>
                <div style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.6 }}>
                  大部分地区：饺子蘸醋
                  <br />
                  内蒙古：饺子蘸酱油
                  <br />
                  <span style={{ color: '#8b5cf6' }}>→ 偏好不同</span>
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
              现实世界的规则比 y = x 复杂得多
            </p>
            <p style={{ margin: '0.75rem 0 0', fontSize: '1.1rem', color: '#a16207' }}>
              但只要调整参数 k 和 b，线性函数就能表达各种直线关系
            </p>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="规则的变换" />
    </Slide>
  );
}
