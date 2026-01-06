import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide04bTransformAbstract() {
  return (
    <Slide>
      <PartLabel number="02" />
      <SlideTitle>规则的变换</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          {/* 引导 */}
          <div style={{ fontSize: '1.4rem', color: '#1e40af', textAlign: 'center' }}>
            如何用数学来<strong>描述这些变化</strong>？
          </div>

          {/* 三种变换的抽象 */}
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            {/* 斜率变化 */}
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: '#eff6ff',
                borderRadius: '1rem',
                border: '2px solid #bfdbfe',
                minWidth: '280px',
              }}
            >
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '0.5rem' }}>程度不同 = </div>
                <div
                  style={{
                    fontSize: '1.5rem',
                    color: '#1d4ed8',
                    fontWeight: 700,
                  }}
                >
                  斜率 k 不同
                </div>
              </div>

              <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#64748b' }}>普通人</span>
                  <span style={{ color: '#3b82f6', fontWeight: 600 }}>y = 1x</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b' }}>运动员</span>
                  <span style={{ color: '#1d4ed8', fontWeight: 600 }}>y = 2x</span>
                </div>
              </div>

              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>坐标点变化</div>
                <div style={{ fontSize: '1.1rem', color: '#1d4ed8', fontWeight: 500 }}>
                  (1,1) → (1,2)
                </div>
              </div>
            </div>

            {/* 截距变化 */}
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: '#f5f3ff',
                borderRadius: '1rem',
                border: '2px solid #ddd6fe',
                minWidth: '280px',
              }}
            >
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '0.5rem' }}>偏好不同 = </div>
                <div
                  style={{
                    fontSize: '1.5rem',
                    color: '#7c3aed',
                    fontWeight: 700,
                  }}
                >
                  截距 b 不同
                </div>
              </div>

              <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#64748b' }}>大部分地区</span>
                  <span style={{ color: '#8b5cf6', fontWeight: 600 }}>y = x + 0</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b' }}>内蒙古</span>
                  <span style={{ color: '#7c3aed', fontWeight: 600 }}>y = x + 1</span>
                </div>
              </div>

              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>坐标点变化</div>
                <div style={{ fontSize: '1.1rem', color: '#7c3aed', fontWeight: 500 }}>
                  (1,1) → (1,2)
                </div>
              </div>
            </div>

            {/* 组合变化 */}
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '1rem',
                border: '2px solid #bbf7d0',
                minWidth: '280px',
              }}
            >
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '0.5rem' }}>综合差异 = </div>
                <div
                  style={{
                    fontSize: '1.5rem',
                    color: '#166534',
                    fontWeight: 700,
                  }}
                >
                  k 和 b 都变
                </div>
              </div>

              <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#64748b' }}>南方夏天</span>
                  <span style={{ color: '#22c55e', fontWeight: 600 }}>y = 1x + 0</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b' }}>北方冬天</span>
                  <span style={{ color: '#166534', fontWeight: 600 }}>y = 1.5x - 1</span>
                </div>
              </div>

              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>更复杂的变换</div>
                <div style={{ fontSize: '1.1rem', color: '#166534', fontWeight: 500 }}>
                  同时改变斜率和起点
                </div>
              </div>
            </div>
          </div>

          {/* 总结公式 */}
          <div
            style={{
              padding: '1.5rem 3rem',
              backgroundColor: '#dbeafe',
              borderRadius: '0.75rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.1rem', color: '#1d4ed8', marginBottom: '0.75rem' }}>
              所有这些变化，都可以用一个公式表达：
            </div>
            <div
              style={{
                fontSize: '3rem',
                fontWeight: 700,
                color: '#1e293b',
                fontFamily: 'serif',
                fontStyle: 'italic',
              }}
            >
              y = <span style={{ color: '#3b82f6' }}>k</span>x + <span style={{ color: '#8b5cf6' }}>b</span>
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="规则的变换" />
    </Slide>
  );
}
