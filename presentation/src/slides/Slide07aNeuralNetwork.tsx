import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide07aNeuralNetwork() {
  return (
    <Slide>
      <PartLabel number="04" />
      <SlideTitle subtitle="量变产生质变">一个不够？那就多来亿个</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '950px', margin: '0 auto' }}>

          {/* 问题引出 */}
          <div
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#fef2f2',
              borderRadius: '0.75rem',
              border: '1px solid #fecaca',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '1.05rem', color: '#991b1b' }}>
              一个 <span style={{ fontFamily: 'serif', fontStyle: 'italic' }}>g(wx + b)</span> 能弯曲，但程度有限。现实世界的规律要复杂得多...
            </span>
          </div>

          {/* 公式表述 */}
          <div
            style={{
              padding: '0.75rem',
              backgroundColor: '#fff',
              borderRadius: '0.5rem',
              border: '1px solid #e2e8f0',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '0.9rem', color: '#64748b' }}>数学本质：</span>
            <span
              style={{
                fontSize: '1.1rem',
                fontFamily: 'serif',
                fontStyle: 'italic',
                color: '#1e293b',
                marginLeft: '0.5rem',
              }}
            >
              <span style={{ color: '#8b5cf6' }}>g₁</span>(
              <span style={{ color: '#f59e0b' }}>g₂</span>(
              <span style={{ color: '#22c55e' }}>g₃</span>( x ) ) )
            </span>
            <span style={{ fontSize: '0.9rem', color: '#64748b', marginLeft: '0.75rem' }}>— 函数的嵌套</span>
          </div>

          {/* 网络结构图 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              padding: '1.25rem',
              backgroundColor: '#f8fafc',
              borderRadius: '0.75rem',
            }}
          >
            {/* 输入 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>输入</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#dbeafe',
                      border: '2px solid #3b82f6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#3b82f6',
                    }}
                  >
                    x{i}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ color: '#94a3b8', fontSize: '1.25rem' }}>→</div>

            {/* 第一层 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>第1层</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#f3e8ff',
                      border: '2px solid #8b5cf6',
                    }}
                  />
                ))}
              </div>
            </div>

            <div style={{ color: '#94a3b8', fontSize: '1.25rem' }}>→</div>

            {/* 第二层 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>第2层</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#fef3c7',
                      border: '2px solid #f59e0b',
                    }}
                  />
                ))}
              </div>
            </div>

            <div style={{ color: '#94a3b8', fontSize: '1.25rem' }}>→</div>

            {/* 省略 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>&nbsp;</div>
              <div style={{ fontSize: '1.5rem', color: '#94a3b8', padding: '2rem 0' }}>...</div>
            </div>

            <div style={{ color: '#94a3b8', fontSize: '1.25rem' }}>→</div>

            {/* 输出 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>输出</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#dcfce7',
                      border: '2px solid #22c55e',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#22c55e',
                    }}
                  >
                    y{i}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 命名说明 */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div
              style={{
                flex: 1,
                padding: '1rem',
                backgroundColor: '#eff6ff',
                borderRadius: '0.75rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '1.1rem', color: '#1e40af', fontWeight: 600 }}>
                每个圆圈 = 一个 g(wx+b)
              </div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem' }}>
                业内叫它「神经元」
              </div>
            </div>
            <div
              style={{
                flex: 1,
                padding: '1rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '0.75rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '1.1rem', color: '#166534', fontWeight: 600 }}>
                堆叠更多层 → 拟合更复杂的规律
              </div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem' }}>
                「深度」= 层数，故名「深度学习」
              </div>
            </div>
          </div>

          {/* 底部强调 */}
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#fef3c7',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #f59e0b',
            }}
          >
            <div style={{ fontSize: '1.05rem', color: '#92400e', textAlign: 'center' }}>
              用简单的变换层层堆叠，去拟合现实世界的复杂规律 —— 这就是深度学习
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="神经网络" />
    </Slide>
  );
}
