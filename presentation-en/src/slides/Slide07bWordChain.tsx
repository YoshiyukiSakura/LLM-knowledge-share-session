import { useState, useEffect } from 'react';
import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide07bWordChain() {
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Word chain sequence
  const sequence = ['I', ' ', 'l', 'o', 'v', 'e', ' ', 'i', 't'];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setStep((prev) => (prev + 1) % (sequence.length - 2));
        setIsAnimating(false);
      }, 800);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  // Current input characters
  const inputChars = sequence.slice(0, step + 3);
  // Current output character
  const outputChar = sequence[step + 3] || sequence[3];

  return (
    <Slide>
      <PartLabel number="04" />
      <SlideTitle subtitle="Back to Our Original Goal">Let's Forget Some Concepts</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>

          {/* Introduction */}
          <div
            style={{
              padding: '1rem 1.5rem',
              backgroundColor: '#fef3c7',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #f59e0b',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '1.1rem', color: '#92400e' }}>
              Let's forget about neurons and activation functions for now, and revisit what we originally wanted to do
            </span>
          </div>

          {/* Goal Description */}
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#eff6ff',
              borderRadius: '0.75rem',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '1.15rem', color: '#1e40af', fontWeight: 600 }}>
              We want to find a function: Input some text → Output the corresponding related text
            </span>
          </div>

          {/* Animation Area */}
          <div
            style={{
              padding: '2rem',
              backgroundColor: '#f8fafc',
              borderRadius: '1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
              minHeight: '200px',
            }}
          >
            <style>{`
              @keyframes slideIn {
                from {
                  opacity: 0;
                  transform: translateY(-20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
              }
              @keyframes moveToInput {
                0% {
                  transform: translateX(0);
                  opacity: 1;
                }
                50% {
                  transform: translateX(-80px);
                  opacity: 0.5;
                }
                100% {
                  transform: translateX(-160px);
                  opacity: 0;
                }
              }
            `}</style>

            {/* Main Animation Area */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* Input Characters */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {inputChars.map((char, index) => (
                  <div
                    key={`${step}-${index}`}
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#3b82f6',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      animation: index === inputChars.length - 1 && step > 0 ? 'slideIn 0.5s ease-out' : 'none',
                    }}
                  >
                    {char}
                  </div>
                ))}
              </div>

              {/* Arrow */}
              <div style={{ color: '#94a3b8', fontSize: '1.5rem', margin: '0 0.5rem' }}>→</div>

              {/* Function Box */}
              <div
                style={{
                  width: '100px',
                  height: '80px',
                  backgroundColor: '#22c55e',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  animation: isAnimating ? 'pulse 0.8s ease-in-out' : 'none',
                  boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
                }}
              >
                f(x)
              </div>

              {/* Arrow */}
              <div style={{ color: '#94a3b8', fontSize: '1.5rem', margin: '0 0.5rem' }}>→</div>

              {/* Output Character */}
              <div
                key={`output-${step}`}
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#3b82f6',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  animation: 'slideIn 0.5s ease-out',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                }}
              >
                {outputChar}
              </div>
            </div>

            {/* Loop Indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#64748b',
                fontSize: '0.95rem',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 1l4 4-4 4" />
                <path d="M3 11V9a4 4 0 014-4h14" />
                <path d="M7 23l-4-4 4-4" />
                <path d="M21 13v2a4 4 0 01-4 4H3" />
              </svg>
              <span>Output joins input, loop continues</span>
            </div>
          </div>

          {/* Bottom Description */}
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: '#f0fdf4',
              borderRadius: '0.75rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.25rem', color: '#166534', fontWeight: 600, marginBottom: '0.5rem' }}>
              In short: A Word Chain Game
            </div>
            <div style={{ fontSize: '0.95rem', color: '#64748b' }}>
              Predict the next most likely character each time, add it to the input, predict again... and repeat
            </div>
          </div>
        </div>
      </SlideContent>

      <SlideFooter title="Understanding LLMs" section="Word Chain" />
    </Slide>
  );
}
