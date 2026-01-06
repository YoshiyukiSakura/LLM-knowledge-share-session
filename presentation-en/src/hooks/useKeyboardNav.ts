import { useEffect, useCallback } from 'react';

interface UseKeyboardNavOptions {
  onNext: () => void;
  onPrev: () => void;
  onGoTo?: (index: number) => void;
  totalSlides?: number;
}

export function useKeyboardNav({
  onNext,
  onPrev,
  onGoTo,
  totalSlides = 0,
}: UseKeyboardNavOptions) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          event.preventDefault();
          onNext();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          event.preventDefault();
          onPrev();
          break;
        case 'Home':
          event.preventDefault();
          onGoTo?.(0);
          break;
        case 'End':
          event.preventDefault();
          onGoTo?.(totalSlides - 1);
          break;
        default:
          // Number keys 1-9 for direct navigation
          if (/^[1-9]$/.test(event.key) && onGoTo) {
            const index = parseInt(event.key, 10) - 1;
            if (index < totalSlides) {
              event.preventDefault();
              onGoTo(index);
            }
          }
      }
    },
    [onNext, onPrev, onGoTo, totalSlides]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}
