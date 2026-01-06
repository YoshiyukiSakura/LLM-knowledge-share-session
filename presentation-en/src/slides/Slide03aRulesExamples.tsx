import { useState, useEffect } from 'react';
import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

// Life experience examples
const lifeExamples = [
  { x: 'Eating fries', y: 'Dip in ketchup' },
  { x: 'Raining', y: 'Use umbrella' },
  { x: 'Cold weather', y: 'Wear jacket' },
  { x: 'Feeling tired', y: 'Go to sleep' },
];

// Classic word associations
const literaryExamples = [
  { x: 'Day', y: 'Night' },
  { x: 'Hot', y: 'Cold' },
  { x: 'Black', y: 'White' },
  { x: 'Up', y: 'Down' },
];

// Internet meme examples
const memeExamples = [
  { x: 'To be or not', y: 'to be' },
  { x: 'This is', y: 'the way' },
  { x: 'One does not', y: 'simply walk...' },
  { x: 'It is what', y: 'it is' },
];

export function Slide03aRulesExamples() {
  // Blur state: gradually goes from 5px blur to 0 (clear) over 10 seconds
  const [blurAmount, setBlurAmount] = useState(5);

  useEffect(() => {
    const duration = 10000; // 10 seconds
    const startTime = Date.now();
    const startBlur = 5;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Use easeOut for smoother transition at the end
      const easeProgress = 1 - Math.pow(1 - progress, 2);
      const currentBlur = startBlur * (1 - easeProgress);
      setBlurAmount(currentBlur);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Blur style for output text
  const outputTextStyle = {
    filter: `blur(${blurAmount}px)`,
    transition: 'filter 0.1s ease-out',
  };

  return (
    <Slide>
      <PartLabel number="01" />
      <SlideTitle>Understanding the World Through Rules</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          {/* Leading question */}
          <div
            style={{
              fontSize: '1.5rem',
              color: '#1e40af',
              textAlign: 'center',
            }}
          >
            <strong>Correspondences</strong> exist everywhere in life. Can you spot them?
          </div>

          {/* Three types of examples */}
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            {/* Life experience */}
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '1rem',
                border: '2px solid #bbf7d0',
                minWidth: '260px',
              }}
            >
              <div
                style={{
                  fontSize: '1.25rem',
                  color: '#166534',
                  marginBottom: '1rem',
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                Life Experience
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {lifeExamples.map((ex, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: '1.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ color: '#3b82f6', fontWeight: 500 }}>{ex.x}</span>
                    <span style={{ color: '#94a3b8', fontSize: '1.25rem' }}>→</span>
                    <span style={{ color: '#22c55e', fontWeight: 500, ...outputTextStyle }}>{ex.y}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Word associations */}
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: '#fef7ed',
                borderRadius: '1rem',
                border: '2px solid #fed7aa',
                minWidth: '260px',
              }}
            >
              <div
                style={{
                  fontSize: '1.25rem',
                  color: '#9a3412',
                  marginBottom: '1rem',
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                Word Associations
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {literaryExamples.map((ex, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: '1.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ color: '#ea580c', fontWeight: 500 }}>{ex.x}</span>
                    <span style={{ color: '#94a3b8' }}>vs</span>
                    <span style={{ color: '#dc2626', fontWeight: 500, ...outputTextStyle }}>{ex.y}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Internet memes */}
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: '#fdf4ff',
                borderRadius: '1rem',
                border: '2px solid #f5d0fe',
                minWidth: '260px',
              }}
            >
              <div
                style={{
                  fontSize: '1.25rem',
                  color: '#86198f',
                  marginBottom: '1rem',
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                Internet Memes
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {memeExamples.map((ex, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: '1.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ color: '#a855f7', fontWeight: 500 }}>{ex.x}</span>
                    <span style={{ color: '#94a3b8' }}>...</span>
                    <span style={{ color: '#ec4899', fontWeight: 500, ...outputTextStyle }}>{ex.y}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Discovery */}
          <div
            style={{
              padding: '1.25rem 2rem',
              backgroundColor: '#dbeafe',
              borderRadius: '0.75rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.25rem', color: '#1d4ed8' }}>
              These are all <strong>Input → Output</strong> correspondences
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Understanding the World Through Rules" />
    </Slide>
  );
}
