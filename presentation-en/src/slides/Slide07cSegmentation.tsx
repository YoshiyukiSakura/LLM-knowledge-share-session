import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide07cSegmentation() {
  return (
    <Slide>
      <PartLabel number="04" />
      <SlideTitle subtitle="When Input Becomes Very Long">An Obvious Problem</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '950px', margin: '0 auto' }}>

          {/* Problem Introduction */}
          <div
            style={{
              padding: '1rem 1.5rem',
              backgroundColor: '#fef2f2',
              borderRadius: '0.75rem',
              border: '1px solid #fecaca',
            }}
          >
            <div style={{ fontSize: '1.1rem', color: '#991b1b', textAlign: 'center' }}>
              The more input text there is, the harder it becomes to predict the next character
            </div>
          </div>

          {/* Problem Explanation */}
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
            {/* Long Input Illustration */}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.75rem' }}>
                {['Once', 'upon', 'a', 'time', '...', '...', '...'].map((char, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '0.25rem 0.5rem',
                      backgroundColor: i < 4 ? '#fee2e2' : '#e2e8f0',
                      borderRadius: '4px',
                      fontSize: '0.9rem',
                      color: i < 4 ? '#991b1b' : '#64748b',
                      opacity: i >= 4 ? 0.5 : 1,
                    }}
                  >
                    {char}
                  </span>
                ))}
                <span style={{ color: '#64748b', fontSize: '0.85rem', alignSelf: 'center' }}>(800 words later)</span>
                {['he', 'said'].map((char, i) => (
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
                  ?
                </span>
              </div>
              <div style={{ fontSize: '0.95rem', color: '#64748b' }}>
                When you input 1000 words, the first 800 words are likely <strong style={{ color: '#991b1b' }}>completely irrelevant</strong> to the next word
              </div>
            </div>
          </div>

          {/* Core Insight */}
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
              Redundant input → With proper training, unrelated content won't be connected together
            </span>
          </div>

          {/* Solution Approach: Segmentation */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            {/* Left: Problem */}
            <div
              style={{
                flex: 1,
                padding: '1rem',
                backgroundColor: '#fef2f2',
                borderRadius: '0.75rem',
              }}
            >
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.5rem' }}>Training Dataset</div>
              <div style={{ fontSize: '1rem', color: '#991b1b' }}>
                Bigger is better
              </div>
            </div>

            {/* Middle Arrow */}
            <div style={{ display: 'flex', alignItems: 'center', color: '#94a3b8', fontSize: '1.5rem' }}>
              vs
            </div>

            {/* Right: Solution */}
            <div
              style={{
                flex: 1,
                padding: '1rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '0.75rem',
              }}
            >
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.5rem' }}>Specific Training Tasks</div>
              <div style={{ fontSize: '1rem', color: '#166534', fontWeight: 600 }}>
                Need "Segmentation"
              </div>
            </div>
          </div>

          {/* Example: Handwritten Digit Recognition */}
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: '#eff6ff',
              borderRadius: '0.75rem',
            }}
          >
            <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1rem' }}>Example: Handwritten Digit Recognition</div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              {/* Original Approach */}
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
                  Train as whole
                </div>
              </div>

              <div style={{ color: '#94a3b8', fontSize: '1.25rem' }}>→</div>

              {/* Segmented Approach */}
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
                    Train separately
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
                    Train separately
                  </div>
                </div>
              </div>

              <div style={{ color: '#94a3b8', fontSize: '1.25rem' }}>→</div>

              {/* Combined Result */}
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
                  Integrate later
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
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
              Segmented Training + Later Integration = Better Training Results
            </span>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Segmentation & Integration" />
    </Slide>
  );
}
