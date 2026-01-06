import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

// 斜率变化例子（程度/强度不同）
const slopeExamples = [
  { x: '普通人锻炼', y: '30分钟' },
  { x: '运动员锻炼', y: '3小时' },
  { x: '学生学习', y: '8小时' },
  { x: '学霸学习', y: '12小时' },
];

// 截距变化例子（基准/偏好不同）
const interceptExamples = [
  { x: '北方吃饺子', y: '蘸醋' },
  { x: '内蒙古吃饺子', y: '蘸酱油' },
  { x: '南方过年', y: '吃汤圆' },
  { x: '北方过年', y: '吃饺子' },
];

// 组合变化例子
const combinedExamples = [
  { x: '南方夏天', y: '喝凉茶' },
  { x: '北方冬天', y: '喝热酒' },
  { x: '年轻人熬夜', y: '喝咖啡' },
  { x: '老年人早起', y: '喝茶' },
];

export function Slide04aTransformExamples() {
  return (
    <Slide>
      <PartLabel number="02" />
      <SlideTitle>规则的变换</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          {/* 引导问题 */}
          <div
            style={{
              fontSize: '1.5rem',
              color: '#1e40af',
              textAlign: 'center',
            }}
          >
            现实中的规则，往往存在<strong>变化和差异</strong>
          </div>

          {/* 三类变化例子 */}
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            {/* 斜率变化 - 程度不同 */}
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: '#eff6ff',
                borderRadius: '1rem',
                border: '2px solid #bfdbfe',
                minWidth: '260px',
              }}
            >
              <div
                style={{
                  fontSize: '1.25rem',
                  color: '#1d4ed8',
                  marginBottom: '1rem',
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                程度不同
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {slopeExamples.map((ex, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: '1.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ color: '#3b82f6', fontWeight: 500 }}>{ex.x}</span>
                    <span style={{ color: '#94a3b8', fontSize: '1.25rem' }}>→</span>
                    <span style={{ color: '#1d4ed8', fontWeight: 500 }}>{ex.y}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 截距变化 - 偏好不同 */}
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: '#f5f3ff',
                borderRadius: '1rem',
                border: '2px solid #ddd6fe',
                minWidth: '260px',
              }}
            >
              <div
                style={{
                  fontSize: '1.25rem',
                  color: '#7c3aed',
                  marginBottom: '1rem',
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                偏好不同
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {interceptExamples.map((ex, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: '1.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ color: '#8b5cf6', fontWeight: 500 }}>{ex.x}</span>
                    <span style={{ color: '#94a3b8', fontSize: '1.25rem' }}>→</span>
                    <span style={{ color: '#7c3aed', fontWeight: 500 }}>{ex.y}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 组合变化 */}
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '1rem',
                border: '2px solid #bbf7d0',
                minWidth: '260px',
              }}
            >
              <div
                style={{
                  fontSize: '1.25rem',
                  color: '#166534',
                  marginBottom: '1rem',
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                综合差异
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {combinedExamples.map((ex, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: '1.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ color: '#22c55e', fontWeight: 500 }}>{ex.x}</span>
                    <span style={{ color: '#94a3b8', fontSize: '1.25rem' }}>→</span>
                    <span style={{ color: '#166534', fontWeight: 500 }}>{ex.y}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 发现 */}
          <div
            style={{
              padding: '1.25rem 2rem',
              backgroundColor: '#fef3c7',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #f59e0b',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.25rem', color: '#92400e' }}>
              同样的输入，因为<strong>条件不同</strong>，可能产生<strong>不同的输出</strong>
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="规则的变换" />
    </Slide>
  );
}
