import { Slide, PartLabel, SlideTitle, SlideContent, SlideFooter } from '../components/Slide';

export function Slide04bTransformAbstract() {
  return (
    <Slide>
      <PartLabel number="02" />
      <SlideTitle>Transforming Rules</SlideTitle>

      <SlideContent>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          {/* Leading statement */}
          <div style={{ fontSize: '1.4rem', color: '#1e40af', textAlign: 'center' }}>
            How can we use math to <strong>describe these variations</strong>?
          </div>

          {/* Three types of transformation abstraction */}
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            {/* Slope change */}
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
                <div style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '0.5rem' }}>Different intensity = </div>
                <div
                  style={{
                    fontSize: '1.5rem',
                    color: '#1d4ed8',
                    fontWeight: 700,
                  }}
                >
                  Different slope k
                </div>
              </div>

              <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#64748b' }}>Average person</span>
                  <span style={{ color: '#3b82f6', fontWeight: 600 }}>y = 1x</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b' }}>Athlete</span>
                  <span style={{ color: '#1d4ed8', fontWeight: 600 }}>y = 2x</span>
                </div>
              </div>

              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Coordinate change</div>
                <div style={{ fontSize: '1.1rem', color: '#1d4ed8', fontWeight: 500 }}>
                  (1,1) → (1,2)
                </div>
              </div>
            </div>

            {/* Intercept change */}
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
                <div style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '0.5rem' }}>Different preference = </div>
                <div
                  style={{
                    fontSize: '1.5rem',
                    color: '#7c3aed',
                    fontWeight: 700,
                  }}
                >
                  Different intercept b
                </div>
              </div>

              <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#64748b' }}>Most regions</span>
                  <span style={{ color: '#8b5cf6', fontWeight: 600 }}>y = x + 0</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b' }}>Some regions</span>
                  <span style={{ color: '#7c3aed', fontWeight: 600 }}>y = x + 1</span>
                </div>
              </div>

              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Coordinate change</div>
                <div style={{ fontSize: '1.1rem', color: '#7c3aed', fontWeight: 500 }}>
                  (1,1) → (1,2)
                </div>
              </div>
            </div>

            {/* Combined change */}
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
                <div style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '0.5rem' }}>Combined differences = </div>
                <div
                  style={{
                    fontSize: '1.5rem',
                    color: '#166534',
                    fontWeight: 700,
                  }}
                >
                  Both k and b change
                </div>
              </div>

              <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#64748b' }}>Summer morning</span>
                  <span style={{ color: '#22c55e', fontWeight: 600 }}>y = 1x + 0</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b' }}>Winter evening</span>
                  <span style={{ color: '#166534', fontWeight: 600 }}>y = 1.5x - 1</span>
                </div>
              </div>

              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>More complex transformation</div>
                <div style={{ fontSize: '1.1rem', color: '#166534', fontWeight: 500 }}>
                  Changes both slope and starting point
                </div>
              </div>
            </div>
          </div>

          {/* Summary formula */}
          <div
            style={{
              padding: '1.5rem 3rem',
              backgroundColor: '#dbeafe',
              borderRadius: '0.75rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.1rem', color: '#1d4ed8', marginBottom: '0.75rem' }}>
              All these variations can be expressed with one formula:
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

      <SlideFooter title="Understanding LLMs" section="Transforming Rules" />
    </Slide>
  );
}
