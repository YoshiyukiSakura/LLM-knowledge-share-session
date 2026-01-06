import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide13cWildmetaStatus() {
  const skills = [
    { name: 'Crypto Market', desc: '实时行情数据与分析', icon: '📊' },
    { name: 'Crypto News', desc: '新闻与情绪分析', icon: '📰' },
    { name: 'Crypto Backtest', desc: '历史策略回测', icon: '⏪' },
    { name: 'Position Analysis', desc: '持仓分析', icon: '📈' },
    { name: 'AI Strategy Generator', desc: '智能策略生成', icon: '🎯', highlight: true },
    { name: 'Bot Deployment', desc: '交易机器人部署', icon: '🤖', highlight: true },
  ];

  return (
    <Slide>
      <PartLabel number="06" />
      <SlideTitle subtitle="copilot.wildmeta.ai">Wildmeta AI 现状</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {/* 左侧：核心能力 */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                padding: '1rem 1.25rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '0.75rem',
                borderLeft: '4px solid #22c55e',
                marginBottom: '1rem',
              }}
            >
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#166534', fontSize: '1.1rem' }}>
                已实现的核心能力
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {/* 基础能力 */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  padding: '1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#3b82f6',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0,
                  }}
                >
                  💬
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#1e293b', fontSize: '1rem' }}>对话聊天</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                    支持切换多种 LLM 型号（GPT-4、Claude、Gemini 等）
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  padding: '1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#8b5cf6',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0,
                  }}
                >
                  🔧
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#1e293b', fontSize: '1rem' }}>丰富的 MCP Tools</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                    多种 Crypto 相关工具能力，基于 MCP 协议
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：Skills 列表 */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                padding: '1rem 1.25rem',
                backgroundColor: '#eff6ff',
                borderRadius: '0.75rem',
                borderLeft: '4px solid #3b82f6',
                marginBottom: '1rem',
              }}
            >
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#1e40af', fontSize: '1.1rem' }}>
                Skills 工具列表
              </h3>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.5rem',
              }}
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  style={{
                    padding: '0.75rem',
                    backgroundColor: skill.highlight ? '#fef3c7' : '#f8fafc',
                    borderRadius: '0.5rem',
                    border: skill.highlight ? '2px solid #f59e0b' : '1px solid #e2e8f0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.1rem' }}>{skill.icon}</span>
                    <span
                      style={{
                        fontWeight: skill.highlight ? 700 : 500,
                        color: skill.highlight ? '#92400e' : '#1e293b',
                        fontSize: '0.85rem',
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem', marginLeft: '1.6rem' }}>
                    {skill.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 底部重点 */}
        <div
          style={{
            marginTop: '1rem',
            padding: '1rem 1.5rem',
            backgroundColor: '#fef3c7',
            borderRadius: '0.75rem',
            borderLeft: '4px solid #f59e0b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>🎯</div>
            <div style={{ fontWeight: 700, color: '#92400e' }}>AI Strategy Generator</div>
            <div style={{ fontSize: '0.8rem', color: '#b45309' }}>智能策略生成</div>
          </div>
          <div style={{ fontSize: '1.5rem', color: '#d97706' }}>+</div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>🤖</div>
            <div style={{ fontWeight: 700, color: '#92400e' }}>Bot Deployment</div>
            <div style={{ fontSize: '0.8rem', color: '#b45309' }}>一键部署交易机器人</div>
          </div>
          <div style={{ fontSize: '0.95rem', color: '#92400e', marginLeft: '1rem' }}>
            ← <strong>主推核心能力</strong>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="Wildmeta AI" />
    </Slide>
  );
}
