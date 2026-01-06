import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide13dWildmetaNext() {
  const problems = [
    { title: '对话性能', desc: '响应速度、稳定性还有较大优化空间' },
    { title: '通用 LLM', desc: '商业 API 人人可用，形成不了差异化特色' },
    { title: '功能同质化', desc: '市面上类似产品众多，缺乏独特卖点' },
    { title: '无护城河', desc: '技术壁垒不足，容易被复制' },
  ];

  const nextSteps = [
    { icon: '🗄️', title: 'RAG 向量数据库', desc: '私有知识库，增强专业领域理解' },
    { icon: '🧠', title: '增强学习', desc: '从用户反馈中持续优化策略' },
    { icon: '⚡', title: '性能优化', desc: '提升响应速度和系统鲁棒性' },
    { icon: '🔒', title: '构建护城河', desc: '独特数据、专有模型、用户粘性' },
  ];

  return (
    <Slide>
      <PartLabel number="06" />
      <SlideTitle subtitle="挑战与机遇">Wildmeta AI 下一步</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {/* 左侧：当前问题 */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                padding: '1rem 1.25rem',
                backgroundColor: '#fef2f2',
                borderRadius: '0.75rem',
                borderLeft: '4px solid #ef4444',
                marginBottom: '1rem',
              }}
            >
              <h3 style={{ margin: 0, color: '#dc2626', fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>⚠️</span> 当前面临的问题
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {problems.map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: '1rem 1.25rem',
                    backgroundColor: '#fff',
                    borderRadius: '0.75rem',
                    border: '1px solid #fecaca',
                    borderLeft: '4px solid #f87171',
                  }}
                >
                  <div style={{ fontWeight: 600, color: '#991b1b', fontSize: '1rem', marginBottom: '0.25rem' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#64748b' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：下一步计划 */}
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
              <h3 style={{ margin: 0, color: '#166534', fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>🚀</span> 下一步计划
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {nextSteps.map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: '1rem 1.25rem',
                    backgroundColor: '#fff',
                    borderRadius: '0.75rem',
                    border: '1px solid #bbf7d0',
                    borderLeft: '4px solid #4ade80',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#dcfce7',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#166534', fontSize: '1rem', marginBottom: '0.25rem' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#64748b' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 底部目标 */}
        <div
          style={{
            marginTop: '1rem',
            padding: '1.25rem',
            backgroundColor: '#eff6ff',
            borderRadius: '0.75rem',
            textAlign: 'center',
          }}
        >
          <p style={{ margin: 0, fontSize: '1.1rem', color: '#1e40af' }}>
            <strong>目标：</strong>打造更多<span style={{ color: '#7c3aed', fontWeight: 700 }}>有特色</span>、
            <span style={{ color: '#059669', fontWeight: 700 }}>高度实用</span>的新功能，形成竞争壁垒
          </p>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="Wildmeta AI" />
    </Slide>
  );
}
