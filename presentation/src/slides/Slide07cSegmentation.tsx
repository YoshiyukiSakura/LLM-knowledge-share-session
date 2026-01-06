import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide07cSegmentation() {
  return (
    <Slide>
      <PartLabel number="04" />
      <SlideTitle subtitle="当输入变得很长时">一个显而易见的问题</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '950px', margin: '0 auto' }}>

          {/* 问题引出 */}
          <div
            style={{
              padding: '1rem 1.5rem',
              backgroundColor: '#fef2f2',
              borderRadius: '0.75rem',
              border: '1px solid #fecaca',
            }}
          >
            <div style={{ fontSize: '1.1rem', color: '#991b1b', textAlign: 'center' }}>
              输入的文字越多，要补全下一个字就越难
            </div>
          </div>

          {/* 问题解释 */}
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: '#f8fafc',
              borderRadius: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            {/* 长输入示意 */}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.75rem' }}>
                {['从', '前', '有', '座', '山', '...', '...', '...'].map((char, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '0.25rem 0.5rem',
                      backgroundColor: i < 5 ? '#fee2e2' : '#e2e8f0',
                      borderRadius: '4px',
                      fontSize: '0.9rem',
                      color: i < 5 ? '#991b1b' : '#64748b',
                      opacity: i >= 5 ? 0.5 : 1,
                    }}
                  >
                    {char}
                  </span>
                ))}
                <span style={{ color: '#64748b', fontSize: '0.85rem', alignSelf: 'center' }}>（800字后）</span>
                {['他', '说'].map((char, i) => (
                  <span
                    key={`end-${i}`}
                    style={{
                      padding: '0.25rem 0.5rem',
                      backgroundColor: '#dcfce7',
                      borderRadius: '4px',
                      fontSize: '0.9rem',
                      color: '#166534',
                    }}
                  >
                    {char}
                  </span>
                ))}
                <span
                  style={{
                    padding: '0.25rem 0.5rem',
                    backgroundColor: '#3b82f6',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    color: 'white',
                    fontWeight: 600,
                  }}
                >
                  ？
                </span>
              </div>
              <div style={{ fontSize: '0.95rem', color: '#64748b' }}>
                当你输入了1000字，很可能前面800字和接下来要出现的字<strong style={{ color: '#991b1b' }}>毫无关系</strong>
              </div>
            </div>
          </div>

          {/* 核心洞察 */}
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#fef3c7',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #f59e0b',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '1.05rem', color: '#92400e' }}>
              冗余的输入 → 在良好的训练中，不会把无关内容联结到一起
            </span>
          </div>

          {/* 解决思路：拆分 */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            {/* 左侧：问题 */}
            <div
              style={{
                flex: 1,
                padding: '1rem',
                backgroundColor: '#fef2f2',
                borderRadius: '0.75rem',
              }}
            >
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.5rem' }}>训练数据集</div>
              <div style={{ fontSize: '1rem', color: '#991b1b' }}>
                规模越大越好
              </div>
            </div>

            {/* 中间箭头 */}
            <div style={{ display: 'flex', alignItems: 'center', color: '#94a3b8', fontSize: '1.5rem' }}>
              vs
            </div>

            {/* 右侧：解决方案 */}
            <div
              style={{
                flex: 1,
                padding: '1rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '0.75rem',
              }}
            >
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.5rem' }}>具体训练任务</div>
              <div style={{ fontSize: '1rem', color: '#166534', fontWeight: 600 }}>
                需要「拆分」
              </div>
            </div>
          </div>

          {/* 例子：手写数字识别 */}
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: '#eff6ff',
              borderRadius: '0.75rem',
            }}
          >
            <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1rem' }}>例：手写数字图像识别</div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              {/* 原始方式 */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '80px',
                    height: '60px',
                    backgroundColor: '#fee2e2',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#991b1b',
                    fontFamily: 'cursive',
                    border: '2px solid #fecaca',
                  }}
                >
                  35
                </div>
                <div style={{ fontSize: '0.8rem', color: '#991b1b', marginTop: '0.5rem' }}>
                  整体训练
                </div>
              </div>

              <div style={{ color: '#94a3b8', fontSize: '1.25rem' }}>→</div>

              {/* 拆分方式 */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: '50px',
                      height: '60px',
                      backgroundColor: '#dcfce7',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#166534',
                      fontFamily: 'cursive',
                      border: '2px solid #bbf7d0',
                    }}
                  >
                    3
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#166534', marginTop: '0.5rem' }}>
                    单独训练
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: '50px',
                      height: '60px',
                      backgroundColor: '#dcfce7',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#166534',
                      fontFamily: 'cursive',
                      border: '2px solid #bbf7d0',
                    }}
                  >
                    5
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#166534', marginTop: '0.5rem' }}>
                    单独训练
                  </div>
                </div>
              </div>

              <div style={{ color: '#94a3b8', fontSize: '1.25rem' }}>→</div>

              {/* 整合结果 */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '80px',
                    height: '60px',
                    backgroundColor: '#dbeafe',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#1e40af',
                    border: '2px solid #93c5fd',
                  }}
                >
                  35
                </div>
                <div style={{ fontSize: '0.8rem', color: '#1e40af', marginTop: '0.5rem' }}>
                  后期整合
                </div>
              </div>
            </div>
          </div>

          {/* 结论 */}
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#f0fdf4',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #22c55e',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '1.1rem', color: '#166534', fontWeight: 600 }}>
              拆分训练 + 后期整合 = 更好的训练效果
            </span>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="拆分与整合" />
    </Slide>
  );
}
