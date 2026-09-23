'use client';

import { useScrollObserver } from '@/hooks/useScrollObserver';

export default function ScrollReveal({ children, className = '' }) {
  const ref = useScrollObserver();

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
