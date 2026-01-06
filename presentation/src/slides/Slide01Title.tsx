import { Slide } from '../components/Slide';

export function Slide01Title() {
  return (
    <Slide>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: '0.875rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            color: '#3b82f6',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
          }}
        >
          Technical Deep Dive
        </div>

        <h1
          style={{
            fontSize: '3.5rem',
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}
        >
          深入浅出大语言模型
        </h1>

        <p
          style={{
            fontSize: '1.5rem',
            color: '#64748b',
            marginBottom: '3rem',
          }}
        >
          从函数拟合到智能Agent的完整旅程
        </p>

        <div
          style={{
            fontSize: '1rem',
            color: '#94a3b8',
            fontStyle: 'italic',
          }}
        >
          From Rules to Intelligence
        </div>
      </div>
    </Slide>
  );
}
