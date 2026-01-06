import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide07dTransformer() {
  const inputChars = ['我', '喜', '欢'];
  const outputProbs = [
    { char: '三', prob: '45%' },
    { char: '这', prob: '42%' },
    { char: '喜', prob: '6%' },
    { char: '欢', prob: '4%' },
  ];

  return (
    <Slide>
      <PartLabel number="04" />
      <SlideTitle subtitle="Google 科学家的方案">让模型学会「看哪里」</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* 承接上页 */}
          <div
            style={{
              padding: '0.75rem 1rem',
              backgroundColor: '#fef3c7',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #f59e0b',
            }}
          >
            <span style={{ fontSize: '1rem', color: '#92400e' }}>
              2017年，Google 的科学家们针对"长文本理解"问题，提出了一个关键想法：
            </span>
          </div>

          {/* 核心思想 */}
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#eff6ff',
              borderRadius: '0.75rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.15rem', color: '#1e40af', fontWeight: 600 }}>
              与其处理所有信息，不如让模型自己学会<span style={{ color: '#dc2626' }}>「该看哪里」</span>
            </div>
            <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.5rem' }}>
              这个机制叫做 <strong style={{ color: '#7c3aed' }}>Attention（注意力）</strong>
            </div>
          </div>

          {/* 工作流程 */}
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              padding: '1.25rem',
              backgroundColor: '#f8fafc',
              borderRadius: '1rem',
              alignItems: 'stretch',
            }}
          >
            {/* 步骤1: Embedding */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem', fontWeight: 600 }}>
                1. Embedding
              </div>
              <div
                style={{
                  padding: '0.75rem',
                  backgroundColor: '#dbeafe',
                  borderRadius: '0.75rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                <div style={{ display: 'flex', gap: '0.35rem', justifyContent: 'center', marginBottom: '0.5rem' }}>
                  {inputChars.map((char, i) => (
                    <div
                      key={i}
                      style={{
                        width: '36px',
                        height: '36px',
                        backgroundColor: '#3b82f6',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '1rem',
                        fontWeight: 600,
                      }}
                    >
                      {char}
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: 'center', fontSize: '1rem', color: '#94a3b8' }}>↓</div>
                <div style={{ textAlign: 'center', fontSize: '0.75rem', color: '#1e40af', marginTop: '0.25rem' }}>
                  转成向量
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', color: '#94a3b8', fontSize: '1.25rem' }}>→</div>

            {/* 步骤2: Attention */}
            <div style={{ flex: 1.3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem', fontWeight: 600 }}>
                2. Attention
              </div>
              <div
                style={{
                  padding: '0.75rem',
                  backgroundColor: '#f3e8ff',
                  borderRadius: '0.75rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                  {inputChars.map((char, i) => (
                    <div
                      key={i}
                      style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: '#8b5cf6',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        position: 'relative',
                      }}
                    >
                      {char}
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    color: '#7c3aed',
                    textAlign: 'center',
                    padding: '0.25rem 0.5rem',
                    backgroundColor: '#ede9fe',
                    borderRadius: '4px',
                  }}
                >
                  每个字"回头看"前面的字
                  <br />
                  学会哪些字更重要
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', color: '#94a3b8', fontSize: '1.25rem' }}>→</div>

            {/* 步骤3: 输出 */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem', fontWeight: 600 }}>
                3. 预测下一个字
              </div>
              <div
                style={{
                  padding: '0.75rem',
                  backgroundColor: '#dcfce7',
                  borderRadius: '0.75rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                {outputProbs.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      marginBottom: i < 3 ? '0.25rem' : 0,
                    }}
                  >
                    <div
                      style={{
                        width: '26px',
                        height: '26px',
                        backgroundColor: i === 0 ? '#22c55e' : '#86efac',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: i === 0 ? 'white' : '#166534',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                      }}
                    >
                      {item.char}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        height: '12px',
                        backgroundColor: '#bbf7d0',
                        borderRadius: '3px',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          width: item.prob,
                          height: '100%',
                          backgroundColor: i === 0 ? '#22c55e' : '#4ade80',
                        }}
                      />
                    </div>
                    <span style={{ fontSize: '0.7rem', color: '#166534', width: '28px' }}>{item.prob}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 效果 */}
          <div
            style={{
              padding: '0.75rem 1rem',
              backgroundColor: '#f0fdf4',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #22c55e',
            }}
          >
            <div style={{ fontSize: '0.95rem', color: '#166534' }}>
              <strong>效果：</strong>这种方法在翻译、问答等任务上大幅超越了之前的所有模型，训练速度也更快
            </div>
          </div>

          {/* 揭示 */}
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#1e40af',
              borderRadius: '0.75rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.1rem', color: 'white', marginBottom: '0.5rem' }}>
              这个架构就叫做 <strong style={{ fontSize: '1.3rem' }}>Transformer</strong>
            </div>
            <div style={{ fontSize: '0.9rem', color: '#93c5fd' }}>
              时至今日，GPT、Claude、Gemini 等所有大语言模型的底层都是它
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="Transformer" />
    </Slide>
  );
}
