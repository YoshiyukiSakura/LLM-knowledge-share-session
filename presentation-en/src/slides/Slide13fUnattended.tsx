import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide13fUnattended() {
  return (
    <Slide>
      <PartLabel number="06" />
      <SlideTitle subtitle="Let Ideas Grow Overnight">Unattended AI Workflow</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          {/* Left: Core Concept */}
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
                🎯 Core Objective
              </h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#e2e8f0' }}>
                Utilize <strong style={{ color: '#fbbf24' }}>human offline time</strong> (nights, weekends)
                <br />
                to achieve higher levels of <strong style={{ color: '#22c55e' }}>automated development</strong>
              </p>
            </div>

            {/* Three Phases */}
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
                🌱 Three-Phase Workflow
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
                  <div style={{ fontWeight: 700, color: '#92400e' }}>Phase 1: Plan (Seeding)</div>
                  <div style={{ fontSize: '0.8rem', color: '#b45309' }}>Seeder - Generate plans, sync to Linear</div>
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
                  In Dev
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
                  <div style={{ fontWeight: 600, color: '#475569' }}>Phase 2: Implement (Growing)</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Multi-threaded concurrent execution, overnight growth</div>
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
                  <div style={{ fontWeight: 600, color: '#475569' }}>Phase 3: Review (Harvesting)</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Select the best solution from multiple results</div>
                </div>
              </div>
            </div>

            {/* Hardware Support */}
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
                <strong>H100 x 8</strong> | 640GB VRAM | Available 24/7
              </div>
            </div>
          </div>

          {/* Right: New Work Style */}
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
                📅 New Work Rhythm
              </h4>
              <div style={{ fontSize: '0.8rem', color: '#3b82f6', marginTop: '0.25rem' }}>
                Seed on Friday, grow over weekend | Harvest in AM, seed in PM
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
              {/* Timeline */}
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
                    Fri
                  </div>
                  <div style={{ fontWeight: 600, color: '#1e40af', fontSize: '0.9rem' }}>Planning</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>8 hours focused planning</div>
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
                    Wknd
                  </div>
                  <div style={{ fontWeight: 600, color: '#475569', fontSize: '0.9rem' }}>Unattended</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>48 hours auto-execution</div>
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
                    Mon
                  </div>
                  <div style={{ fontWeight: 600, color: '#166534', fontSize: '0.9rem' }}>Review</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Select best results</div>
                </div>
              </div>

              {/* Multiple Results */}
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
                {['Result 1', 'Result 2', 'Result 3', 'Result 4'].map((r, i) => (
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
                    {i === 1 ? '⭐ Best' : r}
                  </div>
                ))}
              </div>
            </div>

            {/* Seeder Description */}
            <div
              style={{
                padding: '1rem',
                backgroundColor: '#fef3c7',
                borderRadius: '0.75rem',
                borderLeft: '4px solid #f59e0b',
              }}
            >
              <div style={{ fontWeight: 700, color: '#92400e', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                🌱 Seeder - First Subsystem
              </div>
              <div style={{ fontSize: '0.85rem', color: '#78350f' }}>
                Invokes Claude Code's <strong>Plan Mode</strong>
                <br />
                Results auto-sync to <strong>Linear</strong> platform
              </div>
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Unattended AI" />
    </Slide>
  );
}
