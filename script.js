// ========================================
// Growth2Scale — Scripts
// ========================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile nav toggle ---
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('nav--open');
    });
  }

  // Close mobile nav on link click
  document.querySelectorAll('.nav__links a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav--open');
    });
  });

  // --- Scroll animations ---
  const fadeElements = document.querySelectorAll(
    '.problem-card, .service-card, .process-step, .result-card, .team-card, .ideal-box, .pricing-card, .pricing-tier, .credibility-bar'
  );

  fadeElements.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  fadeElements.forEach(el => observer.observe(el));

  // --- Nav background on scroll ---
  const handleScroll = () => {
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(15, 15, 26, 0.95)';
    } else {
      nav.style.background = 'rgba(15, 15, 26, 0.85)';
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // --- Contact form ---
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      // Show success message
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Thank you! We\'ll be in touch soon.';
      btn.disabled = true;
      btn.style.background = '#22c55e';
      btn.style.borderColor = '#22c55e';

      // Log form data (replace with actual form submission)
      console.log('Form submission:', data);

      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        btn.style.background = '';
        btn.style.borderColor = '';
        form.reset();
      }, 4000);
    });
  }
});
