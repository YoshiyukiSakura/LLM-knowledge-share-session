import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide13fUnattended() {
  return (
    <Slide>
      <PartLabel number="06" />
      <SlideTitle subtitle="让想法在夜间生长">无人值守 AI 工作流</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          {/* 左侧：核心理念 */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                padding: '1rem',
                backgroundColor: '#1e293b',
                borderRadius: '0.75rem',
                marginBottom: '0.75rem',
              }}
            >
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#22c55e', fontSize: '1rem' }}>
                🎯 核心目标
              </h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#e2e8f0' }}>
                利用<strong style={{ color: '#fbbf24' }}>人类离线时间</strong>（夜间、周末）
                <br />
                实现更高比例的<strong style={{ color: '#22c55e' }}>自动化开发</strong>
              </p>
            </div>

            {/* 三阶段 */}
            <div
              style={{
                padding: '0.75rem 1rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '0.5rem',
                borderLeft: '4px solid #22c55e',
                marginBottom: '0.75rem',
              }}
            >
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#166534', fontSize: '0.95rem' }}>
                🌱 三阶段工作流
              </h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#fef3c7',
                  borderRadius: '0.5rem',
                  borderLeft: '4px solid #f59e0b',
                  gap: '0.75rem',
                }}
              >
                <div style={{ fontSize: '1.5rem' }}>🌱</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#92400e' }}>阶段1：Plan（播种）</div>
                  <div style={{ fontSize: '0.8rem', color: '#b45309' }}>Seeder - 生成计划，同步到 Linear</div>
                </div>
                <div
                  style={{
                    marginLeft: 'auto',
                    padding: '0.25rem 0.5rem',
                    backgroundColor: '#22c55e',
                    color: 'white',
                    borderRadius: '0.25rem',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                  }}
                >
                  开发中
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '0.5rem',
                  borderLeft: '4px solid #94a3b8',
                  gap: '0.75rem',
                }}
              >
                <div style={{ fontSize: '1.5rem' }}>🌳</div>
                <div>
                  <div style={{ fontWeight: 600, color: '#475569' }}>阶段2：Implement（成长）</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>多线程并发执行，夜间自动生长</div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '0.5rem',
                  borderLeft: '4px solid #94a3b8',
                  gap: '0.75rem',
                }}
              >
                <div style={{ fontSize: '1.5rem' }}>🍎</div>
                <div>
                  <div style={{ fontWeight: 600, color: '#475569' }}>阶段3：Review（收获）</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>从多个结果中选取最佳方案</div>
                </div>
              </div>
            </div>

            {/* 硬件支持 */}
            <div
              style={{
                marginTop: '0.75rem',
                padding: '0.75rem 1rem',
                backgroundColor: '#dbeafe',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <div style={{ fontSize: '1.25rem' }}>🖥️</div>
              <div style={{ fontSize: '0.85rem', color: '#1e40af' }}>
                <strong>H100 × 8</strong> | 640G 显存 | 7×24 小时可用
              </div>
            </div>
          </div>

          {/* 右侧：新工作方式 */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                padding: '0.75rem 1rem',
                backgroundColor: '#eff6ff',
                borderRadius: '0.5rem',
                borderLeft: '4px solid #3b82f6',
                marginBottom: '0.75rem',
              }}
            >
              <h4 style={{ margin: 0, color: '#1e40af', fontSize: '0.95rem' }}>
                📅 新工作节奏
              </h4>
              <div style={{ fontSize: '0.8rem', color: '#3b82f6', marginTop: '0.25rem' }}>
                周五播种，周末生长 | 上午收获，下午播种
              </div>
            </div>

            <div
              style={{
                padding: '1.25rem',
                backgroundColor: '#f8fafc',
                borderRadius: '1rem',
                marginBottom: '0.75rem',
              }}
            >
              {/* 时间线 */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: '#3b82f6',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 0.5rem',
                      color: 'white',
                      fontWeight: 700,
                    }}
                  >
                    周五
                  </div>
                  <div style={{ fontWeight: 600, color: '#1e40af', fontSize: '0.9rem' }}>Planning</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>8小时专注规划</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', color: '#94a3b8' }}>→</div>

                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: '#1e293b',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 0.5rem',
                      color: '#fbbf24',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                    }}
                  >
                    周末
                  </div>
                  <div style={{ fontWeight: 600, color: '#475569', fontSize: '0.9rem' }}>无人值守</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>48小时自动执行</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', color: '#94a3b8' }}>→</div>

                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: '#22c55e',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 0.5rem',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                    }}
                  >
                    周一
                  </div>
                  <div style={{ fontWeight: 600, color: '#166534', fontSize: '0.9rem' }}>Review</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>选取最佳结果</div>
                </div>
              </div>

              {/* 多结果 */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  backgroundColor: '#fef3c7',
                  borderRadius: '0.5rem',
                }}
              >
                {['结果1', '结果2', '结果3', '结果4'].map((r, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '0.35rem 0.75rem',
                      backgroundColor: i === 1 ? '#fbbf24' : '#fff',
                      borderRadius: '1rem',
                      fontSize: '0.75rem',
                      fontWeight: i === 1 ? 700 : 400,
                      color: i === 1 ? '#78350f' : '#64748b',
                      border: i === 1 ? '2px solid #f59e0b' : '1px solid #e2e8f0',
                    }}
                  >
                    {i === 1 ? '⭐ 最佳' : r}
                  </div>
                ))}
              </div>
            </div>

            {/* Seeder 说明 */}
            <div
              style={{
                padding: '1rem',
                backgroundColor: '#fef3c7',
                borderRadius: '0.75rem',
                borderLeft: '4px solid #f59e0b',
              }}
            >
              <div style={{ fontWeight: 700, color: '#92400e', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                🌱 Seeder（播种机）- 第一个子系统
              </div>
              <div style={{ fontSize: '0.85rem', color: '#78350f' }}>
                • 调用 Claude Code 的 <strong>Plan Mode</strong>
                <br />
                • 结果自动同步到 <strong>Linear</strong> 平台
              </div>
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="深入浅出大语言模型" section="无人值守" />
    </Slide>
  );
}
