'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    // Add fade-in class to all animatable elements
    const selectors =
      '.problem-card, .service-card, .process-step, .result-card, .team-card, .ideal-box, .pricing-card, .pricing-tier, .credibility-bar, .solution-feature, .image-divider, .video-divider, .audit-split__content, .audit-split__pricing, .solution-visual__image, .solution-visual__content';
    const elements = document.querySelectorAll(selectors);
    elements.forEach((el) => el.classList.add('fade-in'));

    // Hero entrance animation
    const heroContent = document.querySelector('.hero__content');
    if (heroContent) {
      heroContent.classList.add('hero-enter');
      requestAnimationFrame(() => {
        heroContent.classList.add('hero-enter--active');
      });
    }

    // Staggered intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        // Group entries by parent to stagger siblings
        const parentGroups = new Map<Element | null, Element[]>();

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const parent = entry.target.parentElement;
            if (!parentGroups.has(parent)) {
              parentGroups.set(parent, []);
            }
            parentGroups.get(parent)!.push(entry.target);
            observer.unobserve(entry.target);
          }
        });

        parentGroups.forEach((children) => {
          children.forEach((child, i) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, i * 120);
          });
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    // Parallax effect on image and video dividers
    const dividers = document.querySelectorAll('.image-divider, .video-divider');
    const handleScroll = () => {
      dividers.forEach((divider) => {
        const rect = divider.getBoundingClientRect();
        const visible = rect.top < window.innerHeight && rect.bottom > 0;
        if (visible) {
          const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
          const media = divider.querySelector('img, video');
          if (media) {
            (media as HTMLElement).style.transform = `translateY(${(progress - 0.5) * 40}px) scale(1.05)`;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
