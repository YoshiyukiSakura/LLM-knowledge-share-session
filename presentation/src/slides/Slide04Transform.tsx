import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card, CardGrid } from '../components/common';
import { LineGraph } from '../components/LineGraph';

const transforms = [
  {
    title: '斜率变化',
    formula: 'y = 2x',
    desc: '斜率从 1 变为 2\n直线变得更陡峭',
    color: '#3b82f6',
    k: 2,
    b: 0,
    extraLines: [{ k: 1, b: 0, color: '#94a3b8', dashed: true }],
    // 现实例子：程度/强度的变化
    realExample: {
      title: '程度变化',
      items: [
        { condition: '普通人', rule: '运动30分钟' },
        { condition: '运动员', rule: '运动3小时' },
      ],
    },
  },
  {
    title: '垂直平移',
    formula: 'y = x + 1',
    desc: '截距从 0 变为 1\n直线向上平移',
    color: '#8b5cf6',
    k: 1,
    b: 1,
    extraLines: [{ k: 1, b: 0, color: '#94a3b8', dashed: true }],
    // 现实例子：基准/偏好的不同
    realExample: {
      title: '地区差异',
      items: [
        { condition: '大部分地区', rule: '饺子蘸醋' },
        { condition: '内蒙古', rule: '饺子蘸酱油' },
      ],
    },
  },
  {
    title: '组合变换',
    formula: 'y = kx + b',
    desc: 'k 控制斜率，b 控制截距\n任何直线都能表达',
    color: '#22c55e',
    k: 1.5,
    b: -1,
    extraLines: [
      { k: 1, b: 0, color: '#94a3b8', dashed: true },
      { k: 0.5, b: 2, color: '#fbbf24', dashed: true },
    ],
    // 现实例子：多因素组合
    realExample: {
      title: '多因素组合',
      items: [
        { condition: '南方夏天', rule: '喝凉茶' },
        { condition: '北方冬天', rule: '喝热酒' },
      ],
    },
  },
];

export function Slide04Transform() {
  return (
    <Slide>
      <PartLabel number="01" />
      <SlideTitle>规则的变换</SlideTitle>

      <SlideContent>
        <CardGrid columns={3}>
          {transforms.map((t, index) => (
            <Card key={index}>
              <div style={{ textAlign: 'center', padding: '0.25rem 0' }}>
                <h3 style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.5rem' }}>
                  {t.title}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
                  <LineGraph
                    k={t.k}
                    b={t.b}
                    width={180}
                    height={140}
                    lineColor={t.color}
                    animate={true}
                    animationDuration={1200 + index * 300}
                    showGrid={true}
                    showPoints={false}
                    range={4}
                    extraLines={t.extraLines}
                  />
                </div>
                <div
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: t.color,
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    marginBottom: '0.25rem',
                  }}
                >
                  {t.formula}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: '0.7rem',
                    color: '#64748b',
                    whiteSpace: 'pre-line',
                    lineHeight: 1.4,
                    marginBottom: '0.5rem',
                  }}
                >
                  {t.desc}
                </p>

                {/* 现实世界例子 */}
                <div
                  style={{
                    marginTop: '0.5rem',
                    padding: '0.5rem',
                    backgroundColor: '#f8fafc',
                    borderRadius: '0.375rem',
                    borderTop: `2px solid ${t.color}`,
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.65rem',
                      color: '#64748b',
                      marginBottom: '0.35rem',
                      fontWeight: 600,
                    }}
                  >
                    {t.realExample.title}
                  </div>
                  {t.realExample.items.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        fontSize: '0.6rem',
                        color: '#475569',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.25rem',
                        marginBottom: '0.15rem',
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: i === 0 ? '#e2e8f0' : '#fef3c7',
                          padding: '0.1rem 0.3rem',
                          borderRadius: '0.25rem',
                          fontSize: '0.55rem',
                        }}
                      >
                        {item.condition}
                      </span>
                      <span style={{ color: '#94a3b8' }}>→</span>
                      <span style={{ fontWeight: 500, color: t.color }}>{item.rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </CardGrid>

        <div
          style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#fef3c7',
            borderRadius: '0.5rem',
            borderLeft: '4px solid #f59e0b',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#92400e', textAlign: 'center' }}>
            <strong>现实世界的规则比 y = x 复杂得多</strong>
            <br />
            <span style={{ fontSize: '0.8rem' }}>
              通过调整参数 <strong style={{ color: '#3b82f6' }}>k</strong>（程度）和{' '}
              <strong style={{ color: '#8b5cf6' }}>b</strong>（基准），可以表达各种变化
            </span>
          </p>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="规则的变换" />
    </Slide>
  );
}
