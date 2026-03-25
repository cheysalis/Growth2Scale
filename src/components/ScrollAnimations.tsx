'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    // Fade-in for cards and content blocks
    const cardSelectors =
      '.glass-card, .process-step, .image-divider, .audit-split__content, .audit-split__pricing, .solution-visual__image, .solution-visual__content, .credibility-bar';
    const cards = document.querySelectorAll(cardSelectors);
    cards.forEach((el) => el.classList.add('fade-in'));

    // Section header animations
    const headers = document.querySelectorAll('.section__header, .audit-split__content .section__tag, .ideal-split__left');
    headers.forEach((el) => el.classList.add('section-header-animate'));

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
            }, i * 150);
          });
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    cards.forEach((el) => observer.observe(el));
    headers.forEach((el) => observer.observe(el));

    // Parallax effect on image dividers
    const dividers = document.querySelectorAll('.image-divider');
    const handleScroll = () => {
      dividers.forEach((divider) => {
        const rect = divider.getBoundingClientRect();
        const visible = rect.top < window.innerHeight && rect.bottom > 0;
        if (visible) {
          const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
          const media = divider.querySelector('img');
          if (media) {
            (media as HTMLElement).style.transform = `translateY(${(progress - 0.5) * 40}px) scale(1.08)`;
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
