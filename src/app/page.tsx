import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import ScrollAnimations from '@/components/ScrollAnimations';

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />

      {/* Hero */}
      <header className="hero" id="hero">
        <div className="hero__image-bg">
          <Image
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&q=90"
            alt="Luxury skincare serum close-up"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="hero__overlay" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="hero__tag">
              Founded by clinic operators, not marketers
            </p>
            <h1 className="hero__title">
              We Help Med Spas Add <span className="highlight">$500K+</span> in
              Revenue With Better Systems
            </h1>
            <p className="hero__subtitle">
              Our team installs brand authority, lead generation, sales
              conversion systems, and growth analytics into med spas and
              longevity clinics &mdash; in 90 days.
            </p>
            <div className="hero__actions">
              <a href="#book" className="btn btn--gold btn--lg">
                Book a Free Consultation
              </a>
              <a href="#audit" className="btn btn--glass btn--lg">
                Get a Growth Audit
              </a>
            </div>
            <div className="hero__stats">
              <div className="stat">
                <span className="stat__number">30-50%</span>
                <span className="stat__label">
                  Revenue most clinics leave on the table
                </span>
              </div>
              <div className="stat">
                <span className="stat__number">90 Days</span>
                <span className="stat__label">
                  To install complete growth systems
                </span>
              </div>
              <div className="stat">
                <span className="stat__number">4 Layers</span>
                <span className="stat__label">
                  Brand, Content, Revenue, and Systems
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem */}
      <section className="section" id="problem">
        <div className="container">
          <div className="section__header">
            <div className="line-accent" />
            <p className="section__tag">The Problem</p>
            <h2 className="section__title">
              Most Clinics Are Leaving Money on the Table
            </h2>
            <p className="section__subtitle">
              You&apos;ve built a great practice. But without the right systems,
              you&apos;re working harder than you need to &mdash; and earning
              less than you should.
            </p>
          </div>
          <div className="problems-grid">
            <div className="glass-card">
              <div className="glass-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
              </div>
              <h3>Inconsistent Leads</h3>
              <p>Your marketing spend fluctuates, and you never know where next month&apos;s patients are coming from.</p>
            </div>
            <div className="glass-card">
              <div className="glass-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </div>
              <h3>Poor Consultation Conversion</h3>
              <p>Leads come in but don&apos;t convert. Your team lacks the scripts, strategies, and follow-up systems to close.</p>
            </div>
            <div className="glass-card">
              <div className="glass-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
              </div>
              <h3>Weak Systems</h3>
              <p>No CRM, no automations, no dashboards. You&apos;re running a million-dollar business on spreadsheets and gut feel.</p>
            </div>
            <div className="glass-card">
              <div className="glass-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              </div>
              <h3>Unclear Margins</h3>
              <p>You&apos;re busy but not profitable enough. Pricing, memberships, and treatment menus aren&apos;t optimized for growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Divider — Close-up facial */}
      <div className="image-divider">
        <Image
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&q=90"
          alt="Close-up luxury skincare application"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="image-divider__overlay" />
      </div>

      {/* Solution */}
      <section className="section" id="solution">
        <div className="container">
          <div className="solution-visual">
            <div className="solution-visual__image">
              <Image
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=90"
                alt="Close-up luxury beauty treatment"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="solution-visual__content">
              <p className="section__tag">The Solution</p>
              <h2 className="section__title">The Clinic Growth System</h2>
              <p>
                A 90-day transformation that installs four layers of growth
                inside your clinic &mdash; creative brand identity, social content
                strategy, revenue systems, and growth infrastructure.
              </p>
              <div className="solution-features">
                <div className="solution-feature glass-card glass-card--row">
                  <div className="glass-card__icon glass-card__icon--sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                  </div>
                  <div>
                    <h4>Creative &amp; Brand Identity</h4>
                    <p>Build a premium brand that commands authority</p>
                  </div>
                </div>
                <div className="solution-feature glass-card glass-card--row">
                  <div className="glass-card__icon glass-card__icon--sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><polyline points="8 21 12 17 16 21" /></svg>
                  </div>
                  <div>
                    <h4>Social &amp; Content Strategy</h4>
                    <p>Organic content that builds trust and demand</p>
                  </div>
                </div>
                <div className="solution-feature glass-card glass-card--row">
                  <div className="glass-card__icon glass-card__icon--sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                  </div>
                  <div>
                    <h4>Revenue Systems</h4>
                    <p>Convert more consultations into paying clients</p>
                  </div>
                </div>
                <div className="solution-feature glass-card glass-card--row">
                  <div className="glass-card__icon glass-card__icon--sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                  </div>
                  <div>
                    <h4>Growth Analytics</h4>
                    <p>Track every metric that drives your business</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Divider — Close-up products */}
      <div className="image-divider">
        <Image
          src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1600&q=90"
          alt="Close-up luxury skincare products"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="image-divider__overlay" />
      </div>

      {/* Services */}
      <section className="section" id="services">
        <div className="container">
          <div className="section__header">
            <div className="line-accent" />
            <p className="section__tag">What We Install</p>
            <h2 className="section__title">Four Layers of Growth</h2>
          </div>
          <div className="services-grid">
            {/* Layer 1 — Chey */}
            <div className="glass-card glass-card--service">
              <div className="glass-card__number">01</div>
              <div className="glass-card__header">
                <h3>Creative Direction &amp; Brand Identity</h3>
                <p className="glass-card__lead">Led by Chey</p>
              </div>
              <p className="glass-card__problem">
                Solves: <em>&ldquo;Our brand doesn&apos;t reflect our quality.&rdquo;</em>
              </p>
              <div className="glass-card__list">
                <h4>Services</h4>
                <ul>
                  <li>Brand identity &amp; creative direction</li>
                  <li>Website design &amp; development</li>
                  <li>Visual identity systems</li>
                  <li>Brand messaging &amp; positioning</li>
                  <li>Business organization &amp; operations</li>
                  <li>Brand photography direction</li>
                </ul>
              </div>
              <div className="glass-card__list">
                <h4>Deliverables</h4>
                <ul>
                  <li>Complete brand identity guide</li>
                  <li>Website design &amp; build</li>
                  <li>Brand positioning strategy</li>
                  <li>Operational workflow setup</li>
                </ul>
              </div>
            </div>

            {/* Layer 2 — Gabbie */}
            <div className="glass-card glass-card--service glass-card--featured">
              <div className="glass-card__number">02</div>
              <div className="glass-card__header">
                <h3>Social Media &amp; Content Strategy</h3>
                <p className="glass-card__lead">Led by Gabbie</p>
              </div>
              <p className="glass-card__problem">
                Solves: <em>&ldquo;We post but nothing grows.&rdquo;</em>
              </p>
              <div className="glass-card__list">
                <h4>Services</h4>
                <ul>
                  <li>Social media audits &amp; strategy</li>
                  <li>Content direction (Reels, TikTok, Shorts)</li>
                  <li>Posting strategy &amp; organic growth systems</li>
                  <li>Social messaging &amp; content positioning</li>
                  <li>UGC creator sourcing &amp; management</li>
                  <li>Influencer partnerships &amp; collaborations</li>
                  <li>Social engagement &amp; audience nurturing</li>
                </ul>
              </div>
              <div className="glass-card__list">
                <h4>Deliverables</h4>
                <ul>
                  <li>Organic content strategy</li>
                  <li>Content calendar &amp; posting schedule</li>
                  <li>UGC &amp; influencer pipeline</li>
                  <li>Engagement &amp; growth playbook</li>
                </ul>
              </div>
            </div>

            {/* Layer 3 — Katie */}
            <div className="glass-card glass-card--service">
              <div className="glass-card__number">03</div>
              <div className="glass-card__header">
                <h3>Sales &amp; Revenue Strategy</h3>
                <p className="glass-card__lead">Led by Katie</p>
              </div>
              <p className="glass-card__problem">
                Solves: <em>&ldquo;We get leads but they don&apos;t convert.&rdquo;</em>
              </p>
              <div className="glass-card__list">
                <h4>Services</h4>
                <ul>
                  <li>Consultation sales scripts</li>
                  <li>Pricing strategy</li>
                  <li>Profit margin optimization</li>
                  <li>Treatment menu strategy</li>
                  <li>Membership strategy</li>
                  <li>Promotions &amp; campaigns</li>
                  <li>Event strategies</li>
                </ul>
              </div>
              <div className="glass-card__list">
                <h4>Deliverables</h4>
                <ul>
                  <li>Consultation sales playbook</li>
                  <li>Pricing optimization plan</li>
                  <li>Membership framework</li>
                  <li>Promotional calendar</li>
                </ul>
              </div>
            </div>

            {/* Layer 4 — Sam */}
            <div className="glass-card glass-card--service">
              <div className="glass-card__number">04</div>
              <div className="glass-card__header">
                <h3>Systems &amp; Growth Infrastructure</h3>
                <p className="glass-card__lead">Led by Sam</p>
              </div>
              <p className="glass-card__problem">
                Solves: <em>&ldquo;Our systems are a mess.&rdquo;</em>
              </p>
              <div className="glass-card__list">
                <h4>Services</h4>
                <ul>
                  <li>CRM setup (GoHighLevel / HubSpot)</li>
                  <li>Analytics dashboards</li>
                  <li>Marketing attribution</li>
                  <li>Financial reporting</li>
                  <li>Automation systems</li>
                  <li>Pipeline management</li>
                </ul>
              </div>
              <div className="glass-card__list">
                <h4>Deliverables</h4>
                <ul>
                  <li>CRM pipeline setup</li>
                  <li>Lead automations</li>
                  <li>KPI dashboards</li>
                  <li>Growth reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" id="process">
        <div className="container">
          <div className="section__header">
            <div className="line-accent" />
            <p className="section__tag">How It Works</p>
            <h2 className="section__title">Your 90-Day Growth Journey</h2>
            <p className="section__subtitle">
              When your clinic signs with us, here&apos;s exactly what happens.
            </p>
          </div>
          <div className="process-timeline">
            {[
              {
                num: 1,
                week: 'Week 1',
                title: 'Business Audit',
                desc: 'We analyze everything: your website, Instagram, lead flow, pricing, treatment margins, consultation conversion, and marketing spend.',
                deliverable: 'Comprehensive Clinic Growth Audit',
              },
              {
                num: 2,
                week: 'Week 2',
                title: 'Strategy Plan',
                desc: 'We build your custom 90-day growth plan covering revenue opportunities, marketing strategy, sales improvements, and automation systems.',
                deliverable: 'Custom 90-Day Growth Roadmap',
              },
              {
                num: 3,
                week: 'Weeks 3\u20138',
                title: 'Implementation',
                desc: 'Our full team goes to work. Chey builds your brand identity and website. Gabbie installs your content strategy and organic growth systems. Katie installs consultation scripts and pricing optimization. Sam installs the CRM, automations, and analytics dashboards.',
                deliverable: 'Fully Installed Growth Systems',
              },
              {
                num: 4,
                week: 'Ongoing',
                title: 'Optimization',
                desc: 'Monthly campaign performance reviews, revenue analysis, and funnel optimization to keep your growth compounding.',
                deliverable: 'Monthly Growth Reports & Optimization',
              },
            ].map((step) => (
              <div className="process-step" key={step.num}>
                <div className="process-step__marker">
                  <span>{step.num}</span>
                </div>
                <div className="process-step__content glass-card">
                  <div className="process-step__week">{step.week}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  <div className="process-step__deliverable">
                    <strong>Deliverable:</strong> {step.deliverable}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Divider — Close-up treatment */}
      <div className="image-divider">
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&q=90"
          alt="Close-up luxury facial massage treatment"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="image-divider__overlay" />
      </div>

      {/* Growth Audit */}
      <section className="section" id="audit">
        <div className="container">
          <div className="audit-split">
            <div className="audit-split__content">
              <p className="section__tag">Start Here</p>
              <h2 className="section__title">Med Spa Growth Audit</h2>
              <p>
                Not sure if you&apos;re ready for a full engagement? Start with
                our signature audit. We&apos;ll analyze your entire business and
                show you exactly where you&apos;re leaving money on the table.
              </p>
              <div className="audit-includes">
                <h4>What&apos;s Included:</h4>
                <ul>
                  {[
                    'Marketing performance audit',
                    'Pricing & margin analysis',
                    'Lead conversion review',
                    'Systems & automation analysis',
                    'Custom growth recommendations',
                  ].map((item) => (
                    <li key={item}>
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#book" className="btn btn--gold btn--lg">
                Get Your Growth Audit &rarr;
              </a>
            </div>
            <div className="audit-split__pricing">
              <div className="glass-card glass-card--pricing">
                <h3>Growth Audit</h3>
                <div className="glass-card__price">$1,500</div>
                <p>
                  Comprehensive business analysis with actionable growth roadmap
                </p>
                <hr />
                <p className="glass-card__note">
                  Many clinics start here, then upgrade to our full Clinic
                  Growth System.
                </p>
              </div>
              <div className="pricing-tiers">
                <div className="glass-card glass-card--tier">
                  <h4>System Implementation</h4>
                  <p className="glass-card__tier-price">$5,000 &ndash; $12,000</p>
                  <p>Full 90-day growth system installation</p>
                </div>
                <div className="glass-card glass-card--tier">
                  <h4>Monthly Growth Management</h4>
                  <p className="glass-card__tier-price">
                    $2,000 &ndash; $6,000/mo
                  </p>
                  <p>Ongoing optimization &amp; growth management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section" id="results">
        <div className="container">
          <div className="section__header">
            <div className="line-accent" />
            <p className="section__tag">Real Results</p>
            <h2 className="section__title">
              Built by Operators, Not Agencies
            </h2>
            <p className="section__subtitle">
              Our team has built and scaled real clinics from the inside. We
              don&apos;t just advise &mdash; we&apos;ve done it ourselves.
            </p>
          </div>
          <div className="results-grid">
            {[
              { metric: '30-50%', desc: 'Revenue increase identified in typical clinic audits' },
              { metric: '2-3x', desc: 'Consultation conversion improvement with our sales playbook' },
              { metric: '90 Days', desc: 'From audit to fully operational growth systems' },
              { metric: '$1M-$5M', desc: 'The revenue range of clinics we serve best' },
            ].map((r) => (
              <div className="glass-card glass-card--result" key={r.metric}>
                <div className="glass-card__metric">{r.metric}</div>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="credibility-bar glass-card">
            <p>
              We&apos;re not a marketing agency. We&apos;re{' '}
              <strong>growth operators</strong> who have built and scaled real
              clinics from the inside out.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" id="team">
        <div className="container">
          <div className="section__header">
            <div className="line-accent" />
            <p className="section__tag">The Team</p>
            <h2 className="section__title">Your Growth Partners</h2>
            <p className="section__subtitle">
              Four specialists, one mission: install scalable growth systems
              into your clinic.
            </p>
          </div>
          <div className="team-grid">
            {[
              {
                initial: 'C',
                name: 'Chey',
                role: 'Creative Direction & Brand Identity',
                desc: 'Creative director specializing in brand identity, website design & development, visual systems, and business organization.',
                featured: false,
              },
              {
                initial: 'G',
                name: 'Gabbie',
                role: 'Social Media & Content Strategy',
                desc: 'Content strategist who builds organic growth systems, social media strategy, UGC pipelines, and influencer partnerships that drive trust and demand.',
                featured: true,
              },
              {
                initial: 'K',
                name: 'Katie',
                role: 'Sales & Revenue Strategy',
                desc: 'Revenue strategist focused on consultation conversion, pricing optimization, memberships, and promotional campaigns.',
                featured: false,
              },
              {
                initial: 'S',
                name: 'Sam',
                role: 'Systems & Growth Infrastructure',
                desc: 'Systems architect who builds CRM pipelines, marketing automations, analytics dashboards, and growth reporting.',
                featured: false,
              },
            ].map((member) => (
              <div
                className={`glass-card glass-card--team${member.featured ? ' glass-card--featured' : ''}`}
                key={member.name}
              >
                <div className="team-avatar">
                  <span>{member.initial}</span>
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-desc">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Client */}
      <section className="section" id="ideal">
        <div className="container">
          <div className="ideal-split">
            <div className="ideal-split__left">
              <p className="section__tag">Is This You?</p>
              <h2 className="section__title">Who We Work With</h2>
              <p>
                We work best with established med spas and longevity clinics
                that have a team but lack the systems to scale efficiently.
              </p>
            </div>
            <div className="ideal-split__right">
              <div className="glass-card glass-card--ideal glass-card--yes">
                <h4>Great Fit</h4>
                <ul>
                  <li>$1M&ndash;$5M in annual revenue</li>
                  <li>Team in place but no growth systems</li>
                  <li>Running ads but poorly converting</li>
                  <li>Ready to invest in real infrastructure</li>
                </ul>
              </div>
              <div className="glass-card glass-card--ideal glass-card--no">
                <h4>Not the Right Fit</h4>
                <ul>
                  <li>Startups without existing revenue</li>
                  <li>Solo injectors</li>
                  <li>Under $500K annual revenue</li>
                  <li>Looking for quick-fix marketing tactics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Divider — Close-up before CTA */}
      <div className="image-divider">
        <Image
          src="https://images.unsplash.com/photo-1552693673-1bf958298935?w=1600&q=90"
          alt="Close-up luxury spa treatment detail"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="image-divider__overlay" />
      </div>

      {/* CTA / Book */}
      <section className="section section--cta" id="book">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Scale Your Clinic?</h2>
            <p>
              Book a free consultation and we&apos;ll show you exactly where
              your clinic is leaving revenue on the table &mdash; and how to fix
              it.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <a href="#" className="nav__logo">
              <span className="logo-growth">Growth</span>
              <span className="logo-2">2</span>
              <span className="logo-scale">Scale</span>
            </a>
            <p>
              Growth systems for med spas and longevity clinics. Founded by
              operators who have built and scaled real clinics.
            </p>
          </div>
          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Creative &amp; Brand</a></li>
              <li><a href="#services">Social &amp; Content</a></li>
              <li><a href="#services">Sales &amp; Revenue</a></li>
              <li><a href="#services">Systems &amp; Infrastructure</a></li>
              <li><a href="#audit">Growth Audit</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#results">Results</a></li>
              <li><a href="#book">Contact</a></li>
            </ul>
          </div>
          <div className="footer__bottom">
            <p>&copy; 2026 Growth2Scale. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
