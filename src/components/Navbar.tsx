'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('nav');
      if (!nav) return;
      nav.style.background =
        window.scrollY > 50
          ? 'rgba(47, 53, 69, 0.95)'
          : 'rgba(47, 53, 69, 0.9)';
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <nav className={`nav${open ? ' nav--open' : ''}`} id="nav">
      <div className="container nav__inner">
        <a href="#" className="nav__logo">
          <span className="logo-growth">Growth</span>
          <span className="logo-2">2</span>
          <span className="logo-scale">Scale</span>
        </a>
        <ul className="nav__links">
          {[
            ['#problem', 'Why Us'],
            ['#services', 'Services'],
            ['#process', 'Process'],
            ['#audit', 'Growth Audit'],
            ['#results', 'Results'],
            ['#team', 'Team'],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={handleLinkClick}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#book" className="btn btn--primary nav__cta">
          Book a Consultation
        </a>
        <button
          className="nav__toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
