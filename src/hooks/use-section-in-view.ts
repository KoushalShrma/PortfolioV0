import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useActiveSection } from '@/components/active-section-provider';
import type { SectionName } from '@/lib/types';

export const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75
) => {
  const { ref, inView } = useInView({
    threshold,
    // Add root margin to trigger slightly before the section is fully in view
    rootMargin: '-50px 0px -50px 0px',
  });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    // Reduce cooldown to 500ms and make it more responsive to scrolling
    if (inView && Date.now() - timeOfLastClick > 500) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
};
