import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card, CardGrid } from '../components/common';
import { LineGraph } from '../components/LineGraph';

const transforms = [
  {
    title: 'Slope Change',
    formula: 'y = 2x',
    desc: 'Slope changes from 1 to 2\nLine becomes steeper',
    color: '#3b82f6',
    k: 2,
    b: 0,
    extraLines: [{ k: 1, b: 0, color: '#94a3b8', dashed: true }],
    // Real example: degree/intensity change
    realExample: {
      title: 'Intensity Change',
      items: [
        { condition: 'Average person', rule: 'Exercise 30 min' },
        { condition: 'Athlete', rule: 'Exercise 3 hours' },
      ],
    },
  },
  {
    title: 'Vertical Shift',
    formula: 'y = x + 1',
    desc: 'Intercept changes from 0 to 1\nLine shifts upward',
    color: '#8b5cf6',
    k: 1,
    b: 1,
    extraLines: [{ k: 1, b: 0, color: '#94a3b8', dashed: true }],
    // Real example: baseline/preference differences
    realExample: {
      title: 'Regional Differences',
      items: [
        { condition: 'Most places', rule: 'Coffee with cream' },
        { condition: 'Italy', rule: 'Espresso only' },
      ],
    },
  },
  {
    title: 'Combined Transform',
    formula: 'y = kx + b',
    desc: 'k controls slope, b controls intercept\nCan express any line',
    color: '#22c55e',
    k: 1.5,
    b: -1,
    extraLines: [
      { k: 1, b: 0, color: '#94a3b8', dashed: true },
      { k: 0.5, b: 2, color: '#fbbf24', dashed: true },
    ],
    // Real example: multi-factor combination
    realExample: {
      title: 'Multi-Factor',
      items: [
        { condition: 'Summer day', rule: 'Iced coffee' },
        { condition: 'Winter night', rule: 'Hot cocoa' },
      ],
    },
  },
];

export function Slide04Transform() {
  return (
    <Slide>
      <PartLabel number="01" />
      <SlideTitle>Transformation of Rules</SlideTitle>

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

                {/* Real World Example */}
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
            <strong>Real-world rules are much more complex than y = x</strong>
            <br />
            <span style={{ fontSize: '0.8rem' }}>
              By adjusting parameters <strong style={{ color: '#3b82f6' }}>k</strong> (intensity) and{' '}
              <strong style={{ color: '#8b5cf6' }}>b</strong> (baseline), we can express various changes
            </span>
          </p>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Rule Transformation" />
    </Slide>
  );
}
