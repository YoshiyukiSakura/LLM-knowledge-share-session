import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card, CardGrid } from '../components/common';

export function Slide12FunctionCall() {
  return (
    <Slide>
      <PartLabel number="06" />
      <SlideTitle subtitle="为什么必不可少？">Function Call</SlideTitle>

      <SlideContent>
        <div
          style={{
            padding: '0.75rem 1rem',
            backgroundColor: '#f8fafc',
            borderRadius: '0.5rem',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: '0.9rem', color: '#64748b' }}>
            场景：用户问 <strong>"北京今天天气怎么样？"</strong> —— LLM 需要调用天气 API 才能回答
          </span>
        </div>

        <CardGrid columns={2}>
          <Card variant="error" title="没有 Function Call">
            <div style={{ marginBottom: '0.75rem' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem' }}>
                LLM 输出（纯文本）：
              </div>
              <div
                style={{
                  padding: '0.5rem',
                  backgroundColor: 'white',
                  borderRadius: '0.25rem',
                  fontSize: '0.8rem',
                  fontStyle: 'italic',
                  color: '#64748b',
                }}
              >
                "我需要调用天气API来查询北京的天气。请访问 api.weather.com 并传入参数 city=beijing..."
              </div>
            </div>
            <div
              style={{
                padding: '0.5rem',
                backgroundColor: '#fef2f2',
                borderRadius: '0.25rem',
                fontSize: '0.8rem',
              }}
            >
              <strong style={{ color: '#dc2626' }}>问题：</strong>
              <span style={{ color: '#7f1d1d' }}> 这只是一段"描述文字"！程序无法解析执行</span>
            </div>
            <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#ef4444', textAlign: 'center' }}>
              结果：只能"说"，不能"做"
            </div>
          </Card>

          <Card variant="success" title="有 Function Call">
            <div style={{ marginBottom: '0.75rem' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem' }}>
                LLM 输出（结构化 JSON）：
              </div>
              <div
                style={{
                  padding: '0.5rem',
                  backgroundColor: '#1e293b',
                  borderRadius: '0.25rem',
                  fontFamily: 'monospace',
                  fontSize: '0.7rem',
                  color: '#e2e8f0',
                }}
              >
                {`{
  "function": "get_weather",
  "arguments": {
    "city": "北京",
    "date": "today"
  }
}`}
              </div>
            </div>
            <div
              style={{
                padding: '0.5rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '0.25rem',
                fontSize: '0.8rem',
              }}
            >
              <strong style={{ color: '#16a34a' }}>优势：</strong>
              <span style={{ color: '#14532d' }}> 结构化数据，程序可直接解析执行</span>
            </div>
            <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#22c55e', textAlign: 'center' }}>
              结果：能"想"也能"做"
            </div>
          </Card>
        </CardGrid>

        <div
          style={{
            padding: '1rem',
            backgroundColor: '#dbeafe',
            borderRadius: '0.75rem',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#1e40af' }}>
            <strong>完整流程：Function Call 让 LLM 的"想法"变成"行动"</strong>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontSize: '0.8rem',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'white', borderRadius: '0.25rem' }}>
              用户提问
            </span>
            <span style={{ color: '#3b82f6' }}>→</span>
            <span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'white', borderRadius: '0.25rem' }}>
              LLM 生成调用
            </span>
            <span style={{ color: '#3b82f6' }}>→</span>
            <span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'white', borderRadius: '0.25rem' }}>
              Agent 执行函数
            </span>
            <span style={{ color: '#3b82f6' }}>→</span>
            <span style={{ padding: '0.25rem 0.5rem', backgroundColor: '#dcfce7', borderRadius: '0.25rem' }}>
              返回: 晴 25°C
            </span>
            <span style={{ color: '#3b82f6' }}>→</span>
            <span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'white', borderRadius: '0.25rem' }}>
              LLM 组织回答
            </span>
          </div>
          <div style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.8rem', color: '#64748b' }}>
            这就是 ChatGPT 插件、Claude 工具调用、Claude Code 的核心原理
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="Function Call" />
    </Slide>
  );
}
