import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide07dTransformer() {
  const inputChars = ['I', 'like', '...'];
  const outputProbs = [
    { char: 'cats', prob: '45%' },
    { char: 'dogs', prob: '42%' },
    { char: 'food', prob: '6%' },
    { char: 'it', prob: '4%' },
  ];

  return (
    <Slide>
      <PartLabel number="04" />
      <SlideTitle subtitle="Google Scientists' Solution">Teaching Models "Where to Look"</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Introduction from previous slide */}
          <div
            style={{
              padding: '0.75rem 1rem',
              backgroundColor: '#fef3c7',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #f59e0b',
            }}
          >
            <span style={{ fontSize: '1rem', color: '#92400e' }}>
              In 2017, Google scientists proposed a key idea to address "long text understanding":
            </span>
          </div>

          {/* Core idea */}
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#eff6ff',
              borderRadius: '0.75rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.15rem', color: '#1e40af', fontWeight: 600 }}>
              Instead of processing all information, let the model learn <span style={{ color: '#dc2626' }}>"where to look"</span>
            </div>
            <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.5rem' }}>
              This mechanism is called <strong style={{ color: '#7c3aed' }}>Attention</strong>
            </div>
          </div>

          {/* Workflow */}
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
            {/* Step 1: Embedding */}
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
                        fontSize: '0.7rem',
                        fontWeight: 600,
                      }}
                    >
                      {char}
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: 'center', fontSize: '1rem', color: '#94a3b8' }}>↓</div>
                <div style={{ textAlign: 'center', fontSize: '0.75rem', color: '#1e40af', marginTop: '0.25rem' }}>
                  Convert to vectors
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', color: '#94a3b8', fontSize: '1.25rem' }}>→</div>

            {/* Step 2: Attention */}
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
                        fontSize: '0.6rem',
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
                  Each word "looks back" at previous words
                  <br />
                  Learns which words matter more
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', color: '#94a3b8', fontSize: '1.25rem' }}>→</div>

            {/* Step 3: Output */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem', fontWeight: 600 }}>
                3. Predict next word
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
                        fontSize: '0.6rem',
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

          {/* Results */}
          <div
            style={{
              padding: '0.75rem 1rem',
              backgroundColor: '#f0fdf4',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #22c55e',
            }}
          >
            <div style={{ fontSize: '0.95rem', color: '#166534' }}>
              <strong>Result:</strong> This approach significantly outperformed all previous models on translation, Q&A, and other tasks, with faster training too
            </div>
          </div>

          {/* Reveal */}
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#1e40af',
              borderRadius: '0.75rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.1rem', color: 'white', marginBottom: '0.5rem' }}>
              This architecture is called <strong style={{ fontSize: '1.3rem' }}>Transformer</strong>
            </div>
            <div style={{ fontSize: '0.9rem', color: '#93c5fd' }}>
              To this day, GPT, Claude, Gemini and all major LLMs are built on it
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Transformer" />
    </Slide>
  );
}
