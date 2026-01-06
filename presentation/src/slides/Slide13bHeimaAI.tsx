import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide13bHeimaAI() {
  const useCases = [
    { tech: 'Rust', desc: '区块链开发', color: '#f97316' },
    { tech: 'Golang', desc: '服务器后端', color: '#06b6d4' },
    { tech: 'JavaScript', desc: '客户端界面', color: '#eab308' },
    { tech: 'DevOps', desc: '服务器运维', color: '#22c55e' },
    { tech: 'Slack Bot', desc: '团队自动化', color: '#8b5cf6' },
  ];

  return (
    <Slide>
      <PartLabel number="06" />
      <SlideTitle subtitle="Heima 团队的 AI 实践">我们与 AI 的关系</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', gap: '1.5rem', height: '100%' }}>
          {/* 左侧：Claude Code */}
          <div
            style={{
              flex: 1,
              padding: '1.5rem',
              backgroundColor: '#f8fafc',
              borderRadius: '1rem',
              border: '2px solid #3b82f6',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#3b82f6',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}
              >
                🛠️
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#1e40af' }}>使用 AI 工具</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>Claude Code 日常开发</p>
              </div>
            </div>

            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {useCases.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'white',
                    borderRadius: '0.75rem',
                    borderLeft: `4px solid ${item.color}`,
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      color: item.color,
                      fontSize: '1.1rem',
                      minWidth: '90px',
                    }}
                  >
                    {item.tech}
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#475569' }}>{item.desc}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '1rem',
                padding: '0.75rem',
                backgroundColor: '#dbeafe',
                borderRadius: '0.5rem',
                textAlign: 'center',
                fontSize: '0.9rem',
                color: '#1e40af',
              }}
            >
              团队每个人都在<strong>重度依赖</strong> Claude Code
            </div>
          </div>

          {/* 右侧：Wildmeta AI */}
          <div
            style={{
              flex: 1,
              padding: '1.5rem',
              backgroundColor: '#faf5ff',
              borderRadius: '1rem',
              border: '2px solid #8b5cf6',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#8b5cf6',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}
              >
                🚀
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#6d28d9' }}>创造 AI 产品</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>Wildmeta AI</p>
              </div>
            </div>

            {/* 意义 A */}
            <div
              style={{
                flex: 1,
                padding: '1.25rem',
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                marginBottom: '1rem',
                borderLeft: '4px solid #22c55e',
              }}
            >
              <h4 style={{ margin: '0 0 0.75rem 0', color: '#166534', fontSize: '1.1rem' }}>
                AI 聊天 = 万能 UI
              </h4>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569', lineHeight: 1.6 }}>
                不再需要前端团队为每个功能定制 UI 和绑定逻辑
              </p>
              <p
                style={{
                  margin: '0.75rem 0 0 0',
                  fontSize: '0.9rem',
                  color: '#166534',
                  fontWeight: 600,
                }}
              >
                用户语言能表达的 + 工具支持的 = 都能实现
              </p>
            </div>

            {/* 意义 B */}
            <div
              style={{
                flex: 1,
                padding: '1.25rem',
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                borderLeft: '4px solid #3b82f6',
              }}
            >
              <h4 style={{ margin: '0 0 0.75rem 0', color: '#1e40af', fontSize: '1.1rem' }}>
                智能 Crypto 交易助手
              </h4>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569', lineHeight: 1.6 }}>
                用户获得可以<strong>沟通交流</strong>的智能助手
              </p>
              <p
                style={{
                  margin: '0.5rem 0 0 0',
                  fontSize: '0.95rem',
                  color: '#475569',
                  lineHeight: 1.6,
                }}
              >
                同时具备<strong>代为执行操作</strong>的实体能力
              </p>
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="Heima 实践" />
    </Slide>
  );
}
