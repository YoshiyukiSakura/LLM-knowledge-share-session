import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

// 抽象成数字的例子
const abstractExamples = [
  { thing: '吃薯条', x: 1, result: '蘸番茄酱', y: 1 },
  { thing: '下雨', x: 2, result: '打伞', y: 2 },
  { thing: '天冷', x: 3, result: '穿外套', y: 3 },
  { thing: '困了', x: 4, result: '睡觉', y: 4 },
];

export function Slide03bRulesAbstract() {
  return (
    <Slide>
      <PartLabel number="01" />
      <SlideTitle>用规则理解世界</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          {/* 引导 */}
          <div style={{ fontSize: '1.4rem', color: '#1e40af', textAlign: 'center' }}>
            如果我们把这些对应关系<strong>抽象成数字</strong>...
          </div>

          {/* 抽象过程表格 */}
          <div
            style={{
              backgroundColor: '#f8fafc',
              borderRadius: '1rem',
              padding: '2rem',
              border: '2px solid #e2e8f0',
            }}
          >
            <table style={{ borderCollapse: 'collapse', fontSize: '1.15rem' }}>
              <thead>
                <tr>
                  <th style={{ padding: '0.75rem 1.5rem', color: '#64748b', fontWeight: 600 }}>输入</th>
                  <th style={{ padding: '0.75rem 1.5rem', color: '#3b82f6', fontWeight: 600 }}>令 x =</th>
                  <th style={{ padding: '0.75rem 1.5rem', color: '#64748b' }}></th>
                  <th style={{ padding: '0.75rem 1.5rem', color: '#64748b', fontWeight: 600 }}>输出</th>
                  <th style={{ padding: '0.75rem 1.5rem', color: '#22c55e', fontWeight: 600 }}>令 y =</th>
                  <th style={{ padding: '0.75rem 1.5rem', color: '#8b5cf6', fontWeight: 600 }}>坐标点</th>
                </tr>
              </thead>
              <tbody>
                {abstractExamples.map((ex, i) => (
                  <tr key={i} style={{ borderTop: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.75rem 1.5rem', textAlign: 'center' }}>{ex.thing}</td>
                    <td
                      style={{
                        padding: '0.75rem 1.5rem',
                        textAlign: 'center',
                        color: '#3b82f6',
                        fontWeight: 700,
                        fontSize: '1.25rem',
                      }}
                    >
                      {ex.x}
                    </td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#94a3b8', fontSize: '1.5rem' }}>
                      →
                    </td>
                    <td style={{ padding: '0.75rem 1.5rem', textAlign: 'center' }}>{ex.result}</td>
                    <td
                      style={{
                        padding: '0.75rem 1.5rem',
                        textAlign: 'center',
                        color: '#22c55e',
                        fontWeight: 700,
                        fontSize: '1.25rem',
                      }}
                    >
                      {ex.y}
                    </td>
                    <td
                      style={{
                        padding: '0.75rem 1.5rem',
                        textAlign: 'center',
                        color: '#8b5cf6',
                        fontWeight: 600,
                        fontFamily: 'serif',
                        fontSize: '1.2rem',
                      }}
                    >
                      ({ex.x}, {ex.y})
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 发现规律 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div
              style={{
                padding: '1.5rem 2rem',
                backgroundColor: '#fef3c7',
                borderRadius: '0.75rem',
                borderLeft: '4px solid #f59e0b',
              }}
            >
              <div style={{ fontSize: '1.1rem', color: '#92400e', marginBottom: '0.5rem' }}>观察这些坐标点：</div>
              <div style={{ fontSize: '1.5rem', color: '#78350f', fontWeight: 600 }}>
                (1,1), (2,2), (3,3), (4,4) ...
              </div>
            </div>

            <div style={{ fontSize: '2.5rem', color: '#64748b' }}>→</div>

            <div
              style={{
                padding: '1.5rem 2rem',
                backgroundColor: '#dbeafe',
                borderRadius: '0.75rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '1.1rem', color: '#1d4ed8', marginBottom: '0.5rem' }}>发现规律：</div>
              <div
                style={{
                  fontSize: '2.5rem',
                  color: '#1e40af',
                  fontWeight: 700,
                  fontFamily: 'serif',
                  fontStyle: 'italic',
                }}
              >
                y = x
              </div>
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="用规则理解世界" />
    </Slide>
  );
}
