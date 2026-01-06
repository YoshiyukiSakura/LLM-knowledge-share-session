import type { ReactNode } from 'react';

interface CodeBlockProps {
  children: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ children, language, title }: CodeBlockProps) {
  return (
    <div
      style={{
        borderRadius: '0.75rem',
        overflow: 'hidden',
        border: '1px solid #e2e8f0',
      }}
    >
      {(language || title) && (
        <div
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#f1f5f9',
            borderBottom: '1px solid #e2e8f0',
            fontSize: '0.75rem',
            fontWeight: 500,
            color: '#64748b',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {title || language}
        </div>
      )}
      <pre
        style={{
          margin: 0,
          padding: '1rem',
          backgroundColor: '#f8fafc',
          overflow: 'auto',
          fontSize: '0.875rem',
          lineHeight: 1.6,
        }}
      >
        <code
          style={{
            fontFamily: "'Fira Code', 'JetBrains Mono', Consolas, monospace",
            color: '#1e293b',
          }}
        >
          {children}
        </code>
      </pre>
    </div>
  );
}

interface InlineCodeProps {
  children: ReactNode;
}

export function InlineCode({ children }: InlineCodeProps) {
  return (
    <code
      style={{
        fontFamily: "'Fira Code', 'JetBrains Mono', Consolas, monospace",
        backgroundColor: '#f1f5f9',
        padding: '0.125rem 0.375rem',
        borderRadius: '0.25rem',
        fontSize: '0.9em',
        color: '#0f172a',
      }}
    >
      {children}
    </code>
  );
}
