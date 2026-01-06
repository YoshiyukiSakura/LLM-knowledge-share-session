import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide13dWildmetaNext() {
  const problems = [
    { title: 'Conversation Performance', desc: 'Response speed and stability still have room for optimization' },
    { title: 'Generic LLM', desc: 'Commercial APIs available to everyone, hard to differentiate' },
    { title: 'Feature Homogenization', desc: 'Many similar products on the market, lack of unique selling points' },
    { title: 'No Moat', desc: 'Insufficient technical barriers, easy to replicate' },
  ];

  const nextSteps = [
    { icon: '🗄️', title: 'RAG Vector Database', desc: 'Private knowledge base, enhanced domain understanding' },
    { icon: '🧠', title: 'Reinforcement Learning', desc: 'Continuously optimize strategies from user feedback' },
    { icon: '⚡', title: 'Performance Optimization', desc: 'Improve response speed and system robustness' },
    { icon: '🔒', title: 'Build a Moat', desc: 'Unique data, proprietary models, user stickiness' },
  ];

  return (
    <Slide>
      <PartLabel number="06" />
      <SlideTitle subtitle="Challenges & Opportunities">Wildmeta AI Next Steps</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {/* Left: Current Problems */}
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
                <span>⚠️</span> Current Challenges
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

          {/* Right: Next Steps */}
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
                <span>🚀</span> Next Steps
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

        {/* Bottom Goal */}
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
            <strong>Goal:</strong> Build more <span style={{ color: '#7c3aed', fontWeight: 700 }}>distinctive</span> and{' '}
            <span style={{ color: '#059669', fontWeight: 700 }}>highly practical</span> new features to create competitive barriers
          </p>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Wildmeta AI" />
    </Slide>
  );
}
