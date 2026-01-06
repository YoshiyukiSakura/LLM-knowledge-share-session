import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';

export function Slide13MCP() {
  return (
    <Slide>
      <PartLabel number="06" />
      <SlideTitle subtitle="统一的工具调用协议">MCP</SlideTitle>

      <SlideContent>
        <Card variant="primary">
          <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#3b82f6', margin: '0 0 0.5rem 0' }}>
              MCP (Model Context Protocol)
            </h3>
            <p style={{ margin: 0, color: '#64748b' }}>
              Anthropic 提出的开放标准 —— <strong>Claude Code</strong> 正是基于此协议连接各种工具
            </p>
          </div>
        </Card>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            padding: '2rem',
            backgroundColor: '#f8fafc',
            borderRadius: '0.75rem',
          }}
        >
          {/* Architecture diagram */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              justifyContent: 'center',
            }}
          >
            {/* LLM */}
            <div
              style={{
                padding: '1rem 1.5rem',
                backgroundColor: '#dbeafe',
                borderRadius: '0.5rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>🧠</div>
              <div style={{ fontWeight: 600, color: '#1e40af' }}>LLM</div>
            </div>

            <div style={{ fontSize: '1.5rem', color: '#64748b' }}>↔</div>

            {/* MCP Client */}
            <div
              style={{
                padding: '1rem 1.5rem',
                backgroundColor: '#f3e8ff',
                borderRadius: '0.5rem',
                textAlign: 'center',
                border: '2px dashed #a78bfa',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>🔌</div>
              <div style={{ fontWeight: 600, color: '#6d28d9' }}>MCP Client</div>
              <div style={{ fontSize: '0.75rem', color: '#7c3aed', marginTop: '0.25rem' }}>
                (Agent 的一部分)
              </div>
            </div>

            <div style={{ fontSize: '1.5rem', color: '#64748b' }}>↔</div>

            {/* MCP Servers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['📁 文件系统', '🌐 网络请求', '💾 数据库', '🔧 自定义工具'].map((tool, index) => (
                <div
                  key={index}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#dcfce7',
                    borderRadius: '0.25rem',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: '#166534',
                  }}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#3b82f6' }}>统一的接口标准</h4>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>
                工具注册、调用转发、结果处理 —— 一套协议搞定
              </p>
            </div>
          </Card>

          <Card>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#22c55e' }}>即插即用</h4>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>
                社区已有数百个 MCP Server：Git、数据库、浏览器...
              </p>
            </div>
          </Card>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="MCP 架构" />
    </Slide>
  );
}
