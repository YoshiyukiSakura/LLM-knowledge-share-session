import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card, CardGrid } from '../components/common';

export function Slide10Agent() {
  return (
    <Slide>
      <PartLabel number="06" />
      <SlideTitle>Agent：为引擎装上外壳</SlideTitle>

      <SlideContent>
        <CardGrid columns={3}>
          <Card>
            <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>⚙️</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#3b82f6', marginBottom: '0.5rem' }}>
                发动机 = LLM
              </h3>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>
                唯一的能力：转动输出轴
              </p>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.8rem', color: '#94a3b8' }}>
                本身没有任何实际功能
              </p>
            </div>
          </Card>

          <Card>
            <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🛠️</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#8b5cf6', marginBottom: '0.5rem' }}>
                外壳 = Agent 框架
              </h3>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>
                工具调用、记忆管理
              </p>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.8rem', color: '#94a3b8' }}>
                上下文控制、交互界面
              </p>
            </div>
          </Card>

          <Card variant="success">
            <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🚀</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#16a34a', marginBottom: '0.5rem' }}>
                产品 = Agent
              </h3>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>
                具有实际功能的
              </p>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', fontWeight: 600 }}>
                智能应用
              </p>
            </div>
          </Card>
        </CardGrid>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            padding: '1.5rem',
            backgroundColor: '#f8fafc',
            borderRadius: '0.75rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ textAlign: 'center', padding: '0.5rem 1rem', backgroundColor: '#dbeafe', borderRadius: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>LLM + 网页界面 = </span>
            <strong style={{ color: '#3b82f6' }}>ChatGPT</strong>
          </div>
          <div style={{ textAlign: 'center', padding: '0.5rem 1rem', backgroundColor: '#f3e8ff', borderRadius: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>LLM + 对话界面 = </span>
            <strong style={{ color: '#8b5cf6' }}>Claude.ai</strong>
          </div>
          <div style={{ textAlign: 'center', padding: '0.5rem 1rem', backgroundColor: '#dcfce7', borderRadius: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>LLM + 终端工具 = </span>
            <strong style={{ color: '#22c55e' }}>Claude Code</strong>
          </div>
        </div>

        <div
          style={{
            padding: '1rem 1.25rem',
            backgroundColor: '#fef3c7',
            borderRadius: '0.75rem',
            borderLeft: '4px solid #f59e0b',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#92400e' }}>
            💡 <strong>核心观点：</strong>任何对 LLM 的调用本身就构成了一个 Agent ——
            哪怕只是在终端里测试一下，那个 Shell 就是最简单的 Agent
          </p>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="Agent 概念" />
    </Slide>
  );
}
