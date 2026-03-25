'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 4000);
  };

  return (
    <form className="cta-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
      </div>
      <div className="form-row">
        <input type="text" name="clinic" placeholder="Clinic Name" />
        <input type="tel" name="phone" placeholder="Phone Number" />
      </div>
      <div className="form-row">
        <select name="revenue" defaultValue="">
          <option value="" disabled>
            Annual Revenue Range
          </option>
          <option value="500k-1m">$500K &ndash; $1M</option>
          <option value="1m-2m">$1M &ndash; $2M</option>
          <option value="2m-5m">$2M &ndash; $5M</option>
          <option value="5m+">$5M+</option>
        </select>
        <select name="interest" defaultValue="">
          <option value="" disabled>
            I&apos;m Interested In...
          </option>
          <option value="audit">Growth Audit ($1,500)</option>
          <option value="implementation">Full System Implementation</option>
          <option value="monthly">Monthly Growth Management</option>
          <option value="not-sure">Not Sure Yet</option>
        </select>
      </div>
      <textarea
        name="message"
        placeholder="Tell us about your clinic and biggest growth challenge..."
        rows={4}
      />
      <button
        type="submit"
        className="btn btn--primary btn--lg btn--full"
        disabled={submitted}
        style={
          submitted
            ? { background: '#cdac68', borderColor: '#cdac68', color: '#1d1f21' }
            : undefined
        }
      >
        {submitted
          ? "Thank you! We'll be in touch soon."
          : 'Book My Free Consultation'}
      </button>
    </form>
  );
}
