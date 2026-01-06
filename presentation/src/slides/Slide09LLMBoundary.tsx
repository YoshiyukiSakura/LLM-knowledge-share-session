import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';

const goodAt = [
  { icon: '📝', title: '文本生成与改写', desc: '写作、翻译、摘要 — ChatGPT/Claude 的日常' },
  { icon: '💬', title: '对话与问答', desc: '客服、咨询、知识检索 — 最常见的应用场景' },
  { icon: '💻', title: '代码辅助', desc: '代码生成、解释、调试 — Claude Code 的核心能力' },
  { icon: '🎨', title: '创意工作', desc: '故事创作、头脑风暴、方案设计' },
];

const badAt = [
  { icon: '🔢', title: '精确数学计算', desc: '23456 × 78901 = ? 会出错！' },
  { icon: '📊', title: '实时信息获取', desc: '无法访问互联网获取最新数据' },
  { icon: '🔗', title: '外部系统交互', desc: '无法发邮件、操作文件、调API' },
  { icon: '🧮', title: '长程逻辑推理', desc: '复杂的多步推理容易出错' },
];

export function Slide09LLMBoundary() {
  return (
    <Slide>
      <PartLabel number="05" />
      <SlideTitle>LLM 的能力边界</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {/* Good at */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              <span style={{ color: '#22c55e', fontSize: '1.25rem' }}>✓</span>
              <h3 style={{ margin: 0, fontSize: '1.125rem', color: '#16a34a' }}>擅长的任务</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {goodAt.map((item, index) => (
                <Card key={index} variant="success">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                    <div>
                      <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.95rem' }}>{item.title}</h4>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>{item.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Bad at */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
              <h3 style={{ margin: 0, fontSize: '1.125rem', color: '#dc2626' }}>不擅长的任务</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {badAt.map((item, index) => (
                <Card key={index} variant="error">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                    <div>
                      <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.95rem' }}>{item.title}</h4>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>{item.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            padding: '1rem',
            backgroundColor: '#fef3c7',
            borderRadius: '0.75rem',
            borderLeft: '4px solid #f59e0b',
            textAlign: 'center',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#92400e' }}>
            <strong>如何突破这些限制？</strong> 给 LLM 装上"工具"——让它能调用计算器、搜索引擎、API...
            <br />
            <span style={{ fontSize: '0.85rem', color: '#b45309' }}>这就是 <strong>Agent</strong> 的核心思想 →</span>
          </p>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="能力边界" />
    </Slide>
  );
}
