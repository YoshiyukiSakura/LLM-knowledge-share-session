import { useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import { SlideNav } from './SlideNav';
import { useKeyboardNav } from '../hooks/useKeyboardNav';

interface PresentationProps {
  slides: ReactNode[];
}

export function Presentation({ slides }: PresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (index >= 0 && index < slides.length) {
        setCurrentSlide(index);
      }
    },
    [slides.length]
  );

  useKeyboardNav({
    onNext: goToNext,
    onPrev: goToPrev,
    onGoTo: goToSlide,
    totalSlides: slides.length,
  });

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div key={currentSlide} style={{ width: '100%', height: '100%' }}>
        {slides[currentSlide]}
      </div>

      <SlideNav
        current={currentSlide}
        total={slides.length}
        onPrev={goToPrev}
        onNext={goToNext}
        onGoTo={goToSlide}
      />
    </div>
  );
}
