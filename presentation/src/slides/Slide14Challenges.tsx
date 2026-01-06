import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card, CardGrid } from '../components/common';

export function Slide14Challenges() {
  return (
    <Slide>
      <PartLabel number="07" />
      <SlideTitle>Agent 开发的当前挑战</SlideTitle>

      <SlideContent>
        <CardGrid columns={3}>
          <Card variant="warning">
            <div style={{ marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#d97706', margin: 0 }}>
                ⚠️ Context 快速消耗
              </h3>
            </div>
            <div style={{ fontSize: '0.8rem', marginBottom: '0.75rem' }}>
              <div style={{ color: '#64748b', marginBottom: '0.25rem' }}>ReAct 循环示例：</div>
              <div
                style={{
                  padding: '0.5rem',
                  backgroundColor: 'white',
                  borderRadius: '0.25rem',
                  fontFamily: 'monospace',
                  fontSize: '0.7rem',
                }}
              >
                思考 → 行动 → 观察 ↺
              </div>
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748b' }}>
              每次工具调用都会将完整的输入输出加入上下文。复杂任务可能需要几十次调用，Context 窗口很快被填满。
            </p>
            <div style={{ marginTop: '0.5rem', fontSize: '0.7rem', color: '#b45309' }}>
              💸 Token 成本急剧上升<br />
              🐌 响应延迟显著增加
            </div>
          </Card>

          <Card variant="primary">
            <div style={{ marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#3b82f6', margin: 0 }}>
                🎯 工具选择与编排
              </h3>
            </div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.8rem', color: '#64748b' }}>
              当可用工具数量增多时，LLM 需要准确判断：
            </p>
            <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.75rem', color: '#475569' }}>
              <li>该调用哪个工具？</li>
              <li>参数该怎么填？</li>
              <li>调用顺序是什么？</li>
              <li>结果如何组合？</li>
            </ul>
            <div style={{ marginTop: '0.5rem', fontSize: '0.7rem', color: '#dc2626' }}>
              选错工具 = 任务失败<br />
              参数错误 = 执行异常
            </div>
          </Card>

          <Card>
            <div style={{ marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#64748b', margin: 0 }}>
                🔧 其他工程难题
              </h3>
            </div>
            <div style={{ fontSize: '0.75rem' }}>
              {[
                { title: '错误恢复', desc: '工具调用失败时如何优雅降级' },
                { title: '状态管理', desc: '长对话中保持一致的记忆与状态' },
                { title: '安全控制', desc: '防止恶意prompt触发危险操作' },
                { title: '可观测性', desc: '调试黑箱行为、追踪决策链路' },
              ].map((item, index) => (
                <div key={index} style={{ marginBottom: '0.5rem' }}>
                  <strong style={{ color: '#475569' }}>{item.title}</strong>
                  <p style={{ margin: '0.125rem 0 0 0', fontSize: '0.7rem', color: '#94a3b8' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </CardGrid>

        <div
          style={{
            padding: '1rem',
            backgroundColor: '#dbeafe',
            borderRadius: '0.75rem',
            textAlign: 'center',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#1e40af' }}>
            这些挑战正是各类 Agent 框架努力解决的方向：
            <br />
            <span style={{ fontSize: '0.85rem' }}>
              <strong>LangChain</strong>、<strong>AutoGen</strong>、<strong>Semantic Kernel</strong>、
              <strong style={{ color: '#7c3aed' }}>Claude Agent SDK</strong>
            </span>
          </p>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="Agent 挑战" />
    </Slide>
  );
}
