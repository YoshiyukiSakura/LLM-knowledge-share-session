import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { LineGraph } from '../components/LineGraph';

const transforms = [
  {
    title: '斜率变化',
    formula: 'y = 2x',
    color: '#3b82f6',
    k: 2,
    b: 0,
    extraLines: [{ k: 1, b: 0, color: '#94a3b8', dashed: true }],
    example: { condition: '运动员', result: '运动3小时', base: '普通人30分钟' },
  },
  {
    title: '垂直平移',
    formula: 'y = x + 1',
    color: '#8b5cf6',
    k: 1,
    b: 1,
    extraLines: [{ k: 1, b: 0, color: '#94a3b8', dashed: true }],
    example: { condition: '内蒙古', result: '饺子蘸酱油', base: '其他地区蘸醋' },
  },
  {
    title: '组合变换',
    formula: 'y = kx + b',
    color: '#22c55e',
    k: 1.5,
    b: -1,
    extraLines: [
      { k: 1, b: 0, color: '#94a3b8', dashed: true },
      { k: 0.5, b: 2, color: '#fbbf24', dashed: true },
    ],
    example: { condition: '北方冬天', result: '喝热酒', base: '南方夏天喝凉茶' },
  },
];

export function Slide04cTransformGraph() {
  return (
    <Slide>
      <PartLabel number="02" />
      <SlideTitle>规则的变换</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          {transforms.map((t, index) => (
            <div
              key={index}
              style={{
                padding: '1rem',
                backgroundColor: '#f8fafc',
                borderRadius: '0.75rem',
                border: `2px solid ${t.color}20`,
                textAlign: 'center',
              }}
            >
              <h3 style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '0.75rem' }}>{t.title}</h3>

              <LineGraph
                k={t.k}
                b={t.b}
                width={280}
                height={220}
                lineColor={t.color}
                animate={true}
                animationDuration={1500 + index * 400}
                showGrid={true}
                showPoints={false}
                range={4}
                extraLines={t.extraLines}
              />

              <div
                style={{
                  marginTop: '0.75rem',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: t.color,
                  fontFamily: 'serif',
                  fontStyle: 'italic',
                }}
              >
                {t.formula}
              </div>

              {/* 现实例子 */}
              <div
                style={{
                  marginTop: '0.75rem',
                  padding: '0.75rem',
                  backgroundColor: `${t.color}10`,
                  borderRadius: '0.5rem',
                }}
              >
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.35rem' }}>
                  {t.example.base}
                </div>
                <div style={{ fontSize: '0.9rem' }}>
                  <span
                    style={{
                      backgroundColor: '#fef3c7',
                      padding: '0.15rem 0.4rem',
                      borderRadius: '0.25rem',
                      fontSize: '0.8rem',
                    }}
                  >
                    {t.example.condition}
                  </span>
                  <span style={{ color: '#94a3b8', margin: '0 0.35rem' }}>→</span>
                  <span style={{ fontWeight: 600, color: t.color }}>{t.example.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="规则的变换" />
    </Slide>
  );
}
