'use client';

import { useRef, useCallback } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useHoverAnimation } from '@/hooks/useHoverAnimation';

interface FeatureCardAnimatedProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCardAnimated({
  icon,
  title,
  description,
  index,
}: FeatureCardAnimatedProps) {
  const scrollRef = useScrollReveal({ delay: index * 0.1 });
  const hoverRef = useHoverAnimation({ scale: 1.03, yOffset: -8 });
  
  // Combine both refs using callback ref
  const combinedRef = useCallback((node: HTMLDivElement | null) => {
    // Assign the node to both refs
    if (scrollRef) {
      (scrollRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    }
    if (hoverRef) {
      (hoverRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    }
  }, [scrollRef, hoverRef]);

  return (
    <div
      ref={combinedRef}
      className="flex flex-col items-center text-center p-6 rounded-lg bg-card border"
    >
      <div className="rounded-full bg-primary/10 p-4 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
