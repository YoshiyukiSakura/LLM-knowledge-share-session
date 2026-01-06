import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';
import { Card } from '../components/common';

export function Slide07bDeepLearning() {
  return (
    <Slide>
      <PartLabel number="04" />
      <SlideTitle subtitle="多层堆叠的力量">深度学习</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* 核心公式 */}
          <Card variant="primary">
            <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
              <div style={{ fontSize: '1rem', color: '#64748b', marginBottom: '0.75rem' }}>
                神经网络的数学本质：函数的嵌套
              </div>
              <div
                style={{
                  fontSize: '1.5rem',
                  fontFamily: 'serif',
                  fontStyle: 'italic',
                  color: '#1e293b',
                }}
              >
                <span style={{ color: '#22c55e' }}>g₃</span>(
                <span style={{ color: '#8b5cf6' }}>g₂</span>(
                <span style={{ color: '#3b82f6' }}>g₁</span>( w₁x + b₁ ) · w₂ + b₂ ) · w₃ + b₃ )
              </div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.75rem' }}>
                每一层都是一次"变换"，层层嵌套，形成复杂的映射关系
              </div>
            </div>
          </Card>

          {/* 层的可视化 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '1.5rem',
              backgroundColor: '#f8fafc',
              borderRadius: '0.75rem',
            }}
          >
            {/* 输入层 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>输入层</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#dbeafe',
                      border: '2px solid #3b82f6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#3b82f6',
                    }}
                  >
                    x{i}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ color: '#94a3b8', fontSize: '1.5rem' }}>→</div>

            {/* 隐藏层1 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>隐藏层 1</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#f3e8ff',
                      border: '2px solid #8b5cf6',
                    }}
                  />
                ))}
              </div>
            </div>

            <div style={{ color: '#94a3b8', fontSize: '1.5rem' }}>→</div>

            {/* 隐藏层2 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>隐藏层 2</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#fef3c7',
                      border: '2px solid #f59e0b',
                    }}
                  />
                ))}
              </div>
            </div>

            <div style={{ color: '#94a3b8', fontSize: '1.5rem' }}>→</div>

            {/* 输出层 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>输出层</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#dcfce7',
                      border: '2px solid #22c55e',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
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

          {/* 为什么要深 */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Card title="浅层网络">
              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                只能学习简单的模式
                <div style={{ marginTop: '0.5rem', color: '#ef4444' }}>
                  "这是猫" ✗
                </div>
              </div>
            </Card>
            <Card title="深层网络" variant="success">
              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                逐层抽象，学习复杂特征
                <div style={{ marginTop: '0.5rem', color: '#22c55e' }}>
                  边缘 → 纹理 → 部件 → 物体 ✓
                </div>
              </div>
            </Card>
          </div>

          {/* 结论 */}
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#dbeafe',
              borderRadius: '0.75rem',
              textAlign: 'center',
            }}
          >
            <p style={{ margin: 0, fontSize: '1.1rem', color: '#1e40af', fontWeight: 600 }}>
              "深度"学习 = 层数够多 → 能表达任意复杂的输入-输出关系
            </p>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="深度学习" />
    </Slide>
  );
}
