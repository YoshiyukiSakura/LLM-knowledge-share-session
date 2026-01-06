import type { ReactNode } from 'react';

interface BulletListProps {
  items: (string | ReactNode)[];
  icon?: 'bullet' | 'check' | 'arrow' | 'number';
  spacing?: 'tight' | 'normal' | 'loose';
}

const iconMap = {
  bullet: '•',
  check: '✓',
  arrow: '→',
  number: '', // will be replaced with index
};

const spacingMap = {
  tight: '0.5rem',
  normal: '0.75rem',
  loose: '1rem',
};

export function BulletList({ items, icon = 'bullet', spacing = 'normal' }: BulletListProps) {
  return (
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: spacingMap[spacing],
      }}
    >
      {items.map((item, index) => (
        <li
          key={index}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
            fontSize: '1.125rem',
            lineHeight: 1.6,
          }}
        >
          <span
            style={{
              color: '#3b82f6',
              fontWeight: 600,
              flexShrink: 0,
              width: icon === 'number' ? '1.5rem' : 'auto',
            }}
          >
            {icon === 'number' ? `${index + 1}.` : iconMap[icon]}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

interface HighlightTextProps {
  children: ReactNode;
  color?: 'primary' | 'success' | 'warning' | 'error';
}

const highlightColors = {
  primary: '#3b82f6',
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
};

export function HighlightText({ children, color = 'primary' }: HighlightTextProps) {
  return (
    <span style={{ color: highlightColors[color], fontWeight: 600 }}>
      {children}
    </span>
  );
}
