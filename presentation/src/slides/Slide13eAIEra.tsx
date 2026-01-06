import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide13eAIEra() {
  const examples = [
    { name: 'Surf.ai', people: '小团队', achievement: 'AI Crypto 交易助手，快速崛起', color: '#8b5cf6' },
    { name: 'Photon', people: '小团队', achievement: 'Solana 交易机器人，日交易量巨大', color: '#f59e0b' },
    { name: 'Cursor', people: '~12人', achievement: 'AI 代码编辑器，估值 $4亿', color: '#3b82f6' },
    { name: 'Midjourney', people: '~11人', achievement: '年收入 $2亿+，无融资', color: '#06b6d4' },
  ];

  return (
    <Slide>
      <PartLabel number="06" />
      <SlideTitle subtitle="AI 时代的软件开发">Code is Cheap, Show Me the Prompt</SlideTitle>

      <SlideContent>
        {/* 时代变化 */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            backgroundColor: '#1e293b',
            borderRadius: '1rem',
            marginBottom: '1rem',
          }}
        >
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '1.3rem',
              color: '#94a3b8',
              textAlign: 'center',
            }}
          >
            <span style={{ textDecoration: 'line-through', color: '#64748b' }}>"Talk is cheap, show me the code"</span>
            <span style={{ color: '#64748b', margin: '0 1rem' }}>→</span>
            <span style={{ color: '#22c55e', fontWeight: 700 }}>"Code is cheap, show me the prompt"</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1.25rem' }}>
          {/* 左侧：小团队大成就 */}
          <div style={{ flex: 1.2 }}>
            <div
              style={{
                padding: '0.75rem 1rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '0.5rem',
                borderLeft: '4px solid #22c55e',
                marginBottom: '0.75rem',
              }}
            >
              <h3 style={{ margin: 0, color: '#166534', fontSize: '1rem' }}>
                小团队，大成就
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {examples.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.85rem 1rem',
                    backgroundColor: '#f8fafc',
                    borderRadius: '0.75rem',
                    borderLeft: `4px solid ${item.color}`,
                    gap: '1rem',
                  }}
                >
                  <div style={{ minWidth: '100px' }}>
                    <div style={{ fontWeight: 700, color: item.color, fontSize: '1rem' }}>{item.name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{item.people}</div>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#475569' }}>{item.achievement}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '0.75rem',
                padding: '0.75rem',
                backgroundColor: '#dbeafe',
                borderRadius: '0.5rem',
                fontSize: '0.85rem',
                color: '#1e40af',
                textAlign: 'center',
              }}
            >
              AI 辅助下，实现了过往<strong>上百人团队</strong>或<strong>数年时间</strong>才能完成的软件
            </div>
          </div>

          {/* 右侧：我们的位置 */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                padding: '0.75rem 1rem',
                backgroundColor: '#fef2f2',
                borderRadius: '0.5rem',
                borderLeft: '4px solid #ef4444',
                marginBottom: '0.75rem',
              }}
            >
              <h3 style={{ margin: 0, color: '#dc2626', fontSize: '1rem' }}>
                我们的位置
              </h3>
            </div>

            <div
              style={{
                padding: '1.5rem',
                backgroundColor: '#f8fafc',
                borderRadius: '1rem',
                height: 'calc(100% - 3rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {/* F1 vs 蒸汽机 对比 */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginBottom: '1.5rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🏎️</div>
                  <div style={{ fontWeight: 700, color: '#166534', fontSize: '1rem' }}>行业先驱</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>F1 方程式</div>
                  <div style={{ fontSize: '0.75rem', color: '#22c55e', marginTop: '0.25rem' }}>已经飞驰</div>
                </div>

                <div style={{ fontSize: '1.5rem', color: '#94a3b8' }}>vs</div>

                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🚂</div>
                  <div style={{ fontWeight: 700, color: '#dc2626', fontSize: '1rem' }}>Heima</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>蒸汽机车</div>
                  <div style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem' }}>还在摸索</div>
                </div>
              </div>

              <div
                style={{
                  padding: '1rem',
                  backgroundColor: '#fef3c7',
                  borderRadius: '0.75rem',
                  textAlign: 'center',
                }}
              >
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#92400e' }}>
                  同样拥有 <strong>Engine (LLM)</strong>
                  <br />
                  但我们还远未释放它的全部潜力
                </p>
              </div>
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="AI 时代" />
    </Slide>
  );
}
