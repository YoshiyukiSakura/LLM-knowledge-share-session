import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide04eSoftware() {
  return (
    <Slide>
      <PartLabel number="02" />
      <SlideTitle>软件的诞生</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          {/* 核心观点 */}
          <div style={{ fontSize: '1.4rem', color: '#1e40af', textAlign: 'center' }}>
            当我们总结出规律，就可以用<strong>代码</strong>来表述它
          </div>

          {/* 代码示例 */}
          <div
            style={{
              padding: '1.5rem 2rem',
              backgroundColor: '#1e293b',
              borderRadius: '0.75rem',
              fontFamily: 'monospace',
              fontSize: '1.1rem',
              color: '#e2e8f0',
              maxWidth: '700px',
            }}
          >
            <div style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>// 一次交易所下单请求</div>
            <div>
              <span style={{ color: '#fbbf24' }}>request</span> = {'{'}
            </div>
            <div style={{ paddingLeft: '1.5rem' }}>
              <span style={{ color: '#a5b4fc' }}>coin</span>: <span style={{ color: '#86efac' }}>"BTC"</span>,
            </div>
            <div style={{ paddingLeft: '1.5rem' }}>
              <span style={{ color: '#a5b4fc' }}>isBuy</span>: <span style={{ color: '#f472b6' }}>true</span>,
            </div>
            <div style={{ paddingLeft: '1.5rem' }}>
              <span style={{ color: '#a5b4fc' }}>isMarket</span>: <span style={{ color: '#f472b6' }}>true</span>,
            </div>
            <div style={{ paddingLeft: '1.5rem' }}>
              <span style={{ color: '#a5b4fc' }}>size</span>: <span style={{ color: '#7dd3fc' }}>1</span>
            </div>
            <div>{'}'}</div>
            <div style={{ marginTop: '1rem', color: '#94a3b8' }}>
              // 输入 → 软件处理 → 输出（严格的 y = f(x)）
            </div>
          </div>

          {/* 点状对应 vs 连续 */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'stretch' }}>
            {/* 软件能做的 */}
            <div
              style={{
                flex: 1,
                padding: '1.25rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '0.75rem',
                border: '2px solid #bbf7d0',
              }}
            >
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#166534', marginBottom: '1rem', textAlign: 'center' }}>
                软件能做的：点状对应
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#3b82f6', fontWeight: 600 }}>x = 1（吃薯条）</span>
                  <span style={{ color: '#94a3b8' }}>→</span>
                  <span style={{ color: '#22c55e', fontWeight: 600 }}>y = 1（蘸番茄酱）</span>
                  <span style={{ color: '#22c55e' }}>✓</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#3b82f6', fontWeight: 600 }}>x = 2（下雨）</span>
                  <span style={{ color: '#94a3b8' }}>→</span>
                  <span style={{ color: '#22c55e', fontWeight: 600 }}>y = 2（打伞）</span>
                  <span style={{ color: '#22c55e' }}>✓</span>
                </div>
              </div>
            </div>

            {/* 软件不能做的 */}
            <div
              style={{
                flex: 1,
                padding: '1.25rem',
                backgroundColor: '#fef2f2',
                borderRadius: '0.75rem',
                border: '2px solid #fecaca',
              }}
            >
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#991b1b', marginBottom: '1rem', textAlign: 'center' }}>
                软件不能做的：未知的点
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#3b82f6', fontWeight: 600 }}>x = 0.5（？？？）</span>
                  <span style={{ color: '#94a3b8' }}>→</span>
                  <span style={{ color: '#ef4444', fontWeight: 600 }}>y = ???</span>
                  <span style={{ color: '#ef4444' }}>✗</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#3b82f6', fontWeight: 600 }}>x = 1.7（？？？）</span>
                  <span style={{ color: '#94a3b8' }}>→</span>
                  <span style={{ color: '#ef4444', fontWeight: 600 }}>y = ???</span>
                  <span style={{ color: '#ef4444' }}>✗</span>
                </div>
              </div>
            </div>
          </div>

          {/* 解题比喻 */}
          <div
            style={{
              padding: '1.25rem 2rem',
              backgroundColor: '#fef3c7',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #f59e0b',
              maxWidth: '800px',
            }}
          >
            <div style={{ fontSize: '1.2rem', color: '#92400e', fontWeight: 600, marginBottom: '0.5rem' }}>
              用解数学题来比喻：
            </div>
            <div style={{ fontSize: '1.1rem', color: '#78350f', lineHeight: 1.7 }}>
              传统软件 = 只能解<strong>题干已知、答案已知</strong>的题
              <br />
              题干有任何改变 → 软件就<strong>无法解答</strong>
            </div>
          </div>

          {/* 结论 */}
          <div
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#dbeafe',
              borderRadius: '0.75rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.3rem', color: '#1d4ed8', fontWeight: 600 }}>
              软件工程 = 对<strong>已发现的点状规律</strong>进行自动化
            </div>
          </div>

          {/* 符号主义总结 */}
          <div
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#faf5ff',
              borderRadius: '0.75rem',
              border: '2px solid #e9d5ff',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.1rem', color: '#7c3aed', fontWeight: 600, marginBottom: '0.25rem' }}>
              这种思想叫做「符号主义」
            </div>
            <div style={{ fontSize: '1rem', color: '#6b21a8' }}>
              凡事皆有准则规律，只要找到规则，机器就能执行
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="软件的诞生" />
    </Slide>
  );
}
