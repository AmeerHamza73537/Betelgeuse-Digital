"use client";

import { FormEvent, useEffect, useState } from "react";
import type { CSSProperties } from "react";

const services = [
  {
    number: "01",
    title: "Social Media Marketing",
    description:
      "Full-funnel campaigns that turn attention into qualified demand, built on clear creative testing and commercial data.",
    tags: ["Google Ads", "Meta Ads", "Creative strategy"],
    metric: "Reach → Revenue",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Fast, refined digital experiences engineered around your customer journey—not an off-the-shelf template.",
    tags: ["WordPress", "Shopify", "Full-stack / Custom"],
    metric: "Click → Customer",
  },
  {
    number: "03",
    title: "Agentic AI",
    description:
      "Purpose-built AI agents and automations that remove repetitive work and keep your team focused on decisions that matter.",
    tags: ["AI agents", "Workflow automation", "Integrations"],
    metric: "Task → System",
  },
];

const values = [
  {
    number: "01",
    title: "One team, complete view",
    text: "Strategy, acquisition, product, and automation work as one connected system—without handoff gaps.",
  },
  {
    number: "02",
    title: "Data with a point of view",
    text: "We use evidence to move faster, not to hide behind dashboards. Every metric leads to a decision.",
  },
  {
    number: "03",
    title: "Built for momentum",
    text: "Lean teams, direct communication, and focused sprints keep quality high and timelines tight.",
  },
  {
    number: "04",
    title: "Systems that compound",
    text: "We leave you with scalable infrastructure, reusable knowledge, and a stronger operating rhythm.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "We map the opportunity, audience, constraints, and the signal that defines success.",
  },
  {
    number: "02",
    title: "Strategy",
    text: "We shape a focused plan with clear priorities, milestones, and measurable outcomes.",
  },
  {
    number: "03",
    title: "Build & launch",
    text: "Creative, code, campaigns, and systems move through tight feedback loops into market.",
  },
  {
    number: "04",
    title: "Scale",
    text: "We learn from live data, refine what works, and compound your highest-leverage channels.",
  },
];

const caseStudies = [
  {
    label: "Paid growth / DTC",
    title: "Reframing acquisition for profitable scale",
    result: "3.8×",
    resultLabel: "sample ROAS",
    className: "case-ember",
  },
  {
    label: "Commerce / Shopify",
    title: "A faster storefront built around conversion",
    result: "42%",
    resultLabel: "sample lift",
    className: "case-solar",
  },
  {
    label: "AI operations / B2B",
    title: "Turning manual workflows into an agentic system",
    result: "18h",
    resultLabel: "sample saved / wk",
    className: "case-flare",
  },
];

const testimonials = [
  {
    quote:
      "Betelgeuse connected the dots between our ads, site, and reporting. The result felt less like a campaign and more like a new growth engine.",
    name: "Sample client",
    role: "Growth Director · Consumer brand",
  },
  {
    quote:
      "They brought sharp thinking, moved quickly, and made complex technical choices feel remarkably clear. We launched with real confidence.",
    name: "Sample client",
    role: "Co-founder · Technology company",
  },
  {
    quote:
      "The automation work gave our team hours back every week—and, more importantly, a much better way to run the operation.",
    name: "Sample client",
    role: "Operations Lead · B2B services",
  },
];

const revealStyle = (delay: number) =>
  ({ "--reveal-delay": `${delay}ms` }) as CSSProperties;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonial, setTestimonial] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const revealElements =
      document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (reducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -7% 0px" },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const cards = document.querySelectorAll<HTMLElement>("[data-tilt]");
    const cleanups: Array<() => void> = [];

    cards.forEach((card) => {
      const onMove = (event: PointerEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        card.style.setProperty("--tilt-x", `${(0.5 - y) * 7}deg`);
        card.style.setProperty("--tilt-y", `${(x - 0.5) * 7}deg`);
        card.style.setProperty("--shine-x", `${x * 100}%`);
        card.style.setProperty("--shine-y", `${y * 100}%`);
      };

      const onLeave = () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
      };

      card.addEventListener("pointermove", onMove);
      card.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        card.removeEventListener("pointermove", onMove);
        card.removeEventListener("pointerleave", onLeave);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const company = String(formData.get("company") || "");
    const message = String(formData.get("message") || "");
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:hello@betelgeusedigital.com?subject=${encodeURIComponent(
      `New project inquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  const previousTestimonial = () =>
    setTestimonial((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );

  const nextTestimonial = () =>
    setTestimonial((current) => (current + 1) % testimonials.length);

  return (
    <main id="home">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Betelgeuse Digital home">
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span>Betelgeuse</span>
          <span className="brand-muted">Digital</span>
        </a>

        <nav
          className={`nav-links ${menuOpen ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a className="nav-mobile-cta" href="#contact" onClick={closeMenu}>
            Start a project
          </a>
        </nav>

        <a className="button button-small nav-cta" href="#contact">
          Get a quote <span aria-hidden="true">↗</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "is-active" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow hero-step">
            <span className="signal-dot" />
            Strategy · Systems · Scale
          </div>
          <h1 id="hero-title" className="hero-step">
            Digital growth with a{" "}
            <span className="accent-text">gravitational pull.</span>
          </h1>
          <p className="hero-intro hero-step">
            We build the campaigns, digital products, and AI systems that move
            ambitious businesses from scattered effort to serious momentum.
          </p>
          <div className="hero-actions hero-step">
            <a className="button button-primary" href="#contact">
              Start a project <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#services">
              Explore our capabilities <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="star-visual hero-step" aria-hidden="true">
          <div className="star-halo star-halo-outer" />
          <div className="star-halo star-halo-inner" />
          <div className="orbit-line orbit-line-one" />
          <div className="orbit-line orbit-line-two" />
          <div className="star-core">
            <div className="star-surface" />
            <div className="star-glint" />
          </div>
          <div className="star-caption">
            <span>α ORI</span>
            <span className="caption-line" />
            <span>Red supergiant</span>
          </div>
        </div>

        <div className="hero-scroll">
          <span>Scroll to explore</span>
          <span className="scroll-line" />
        </div>
      </section>

      <section className="signal-strip" aria-label="Agency model">
        <p>One connected growth partner</p>
        <div className="signal-stat">
          <strong>03</strong>
          <span>Core disciplines</span>
        </div>
        <div className="signal-stat">
          <strong>01</strong>
          <span>Integrated team</span>
        </div>
        <div className="signal-stat">
          <strong>∞</strong>
          <span>Room to scale</span>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading" data-reveal>
          <div>
            <span className="section-index">01</span>
            <span className="eyebrow">What we do</span>
          </div>
          <h2>Three capabilities. One growth system.</h2>
          <p>
            From the first impression to the systems behind it, we create work
            that performs as beautifully as it looks.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article
              className="service-card"
              key={service.title}
              data-tilt
              data-reveal
              style={revealStyle(index * 110)}
            >
              <div className="card-shine" aria-hidden="true" />
              <div className="service-topline">
                <span>{service.number}</span>
                <span className="service-metric">{service.metric}</span>
              </div>
              <div className={`service-symbol symbol-${index + 1}`}>
                <span />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="tag-list" aria-label={`${service.title} services`}>
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <span className="card-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="section why-section" id="about">
        <div className="why-statement" data-reveal>
          <span className="section-index">02</span>
          <span className="eyebrow">Why Betelgeuse</span>
          <h2>Built like a partner, not a production line.</h2>
          <p>
            Senior thinking stays close to the work. Every choice connects to
            the bigger commercial picture.
          </p>
          <div className="statement-orbit" aria-hidden="true">
            <span />
          </div>
        </div>

        <div className="value-list">
          {values.map((value, index) => (
            <article
              className="value-row"
              key={value.title}
              data-reveal
              style={revealStyle(index * 90)}
            >
              <span className="value-number">{value.number}</span>
              <div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
              <span className="value-mark" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-heading process-heading" data-reveal>
          <div>
            <span className="section-index">03</span>
            <span className="eyebrow">How we work</span>
          </div>
          <h2>A clear path from ambition to impact.</h2>
        </div>

        <div className="process-grid">
          {process.map((step, index) => (
            <article
              className="process-step"
              key={step.title}
              data-reveal
              style={revealStyle(index * 100)}
            >
              <div className="process-marker">
                <span>{step.number}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading work-heading" data-reveal>
          <div>
            <span className="section-index">04</span>
            <span className="eyebrow">Selected work</span>
          </div>
          <h2>Proof, not promises.</h2>
          <p>
            Case-study placeholders ready for your real client stories and
            performance data.
          </p>
        </div>

        <div className="case-grid">
          {caseStudies.map((study, index) => (
            <article
              className="case-card"
              key={study.title}
              data-reveal
              style={revealStyle(index * 110)}
            >
              <div className={`case-visual ${study.className}`}>
                <div className="case-interface">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="case-result">
                  <strong>{study.result}</strong>
                  <span>{study.resultLabel}</span>
                </div>
              </div>
              <div className="case-meta">
                <span>{study.label}</span>
                <span>Concept case study</span>
              </div>
              <h3>{study.title}</h3>
              <span className="case-link">
                View case study <span aria-hidden="true">↗</span>
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonial-section" id="testimonials">
        <div className="testimonial-aside" data-reveal>
          <span className="section-index">05</span>
          <span className="eyebrow">Client signal</span>
          <h2>Good work travels.</h2>
          <p>Placeholder testimonials ready to be replaced with client proof.</p>
          <div className="testimonial-controls">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={previousTestimonial}
            >
              ←
            </button>
            <span>
              {String(testimonial + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={nextTestimonial}
            >
              →
            </button>
          </div>
        </div>

        <div className="testimonial-frame" data-reveal style={revealStyle(120)}>
          <div
            className="testimonial-track"
            style={{
              transform: `translate3d(-${testimonial * 100}%, 0, 0)`,
            }}
            aria-live="polite"
          >
            {testimonials.map((item, index) => (
              <blockquote
                className="testimonial-card"
                key={`${item.role}-${index}`}
                aria-hidden={testimonial !== index}
              >
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                <p>{item.quote}</p>
                <footer>
                  <span className="avatar-placeholder" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <strong>{item.name}</strong>
                    <small>{item.role}</small>
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <div className="contact-copy" data-reveal>
          <span className="eyebrow">Ready when you are</span>
          <h2>Let’s build your next source of momentum.</h2>
          <p>
            Tell us what you’re solving, where you want to go, and what success
            looks like. We’ll come back with a clear next step.
          </p>
          <a href="mailto:hello@betelgeusedigital.com">
            hello@betelgeusedigital.com <span aria-hidden="true">↗</span>
          </a>
        </div>

        <form
          className="contact-form"
          onSubmit={submitInquiry}
          data-reveal
          style={revealStyle(120)}
        >
          <div className="form-row">
            <label>
              <span>Your name</span>
              <input
                type="text"
                name="name"
                placeholder="Jane Smith"
                autoComplete="name"
                required
              />
            </label>
            <label>
              <span>Work email</span>
              <input
                type="email"
                name="email"
                placeholder="jane@company.com"
                autoComplete="email"
                required
              />
            </label>
          </div>
          <label>
            <span>Company</span>
            <input
              type="text"
              name="company"
              placeholder="Your company or project"
              autoComplete="organization"
            />
          </label>
          <label>
            <span>What can we help you with?</span>
            <textarea
              name="message"
              rows={4}
              placeholder="A little about the challenge, timeline, and goals..."
              required
            />
          </label>
          <button className="button button-primary form-submit" type="submit">
            Send inquiry <span aria-hidden="true">↗</span>
          </button>
          <p className="form-note">Opens in your preferred email app.</p>
        </form>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark" aria-hidden="true">
              <span />
            </span>
            <span>Betelgeuse</span>
            <span className="brand-muted">Digital</span>
          </a>
          <p>
            Digital systems for ambitious businesses.
            <br />
            Built with clarity. Scaled with intent.
          </p>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a href="#work">Work</a>
          </div>
          <div className="social-links" aria-label="Social links">
            <a href="#" aria-label="LinkedIn">
              Li
            </a>
            <a href="#" aria-label="Instagram">
              Ig
            </a>
            <a href="#" aria-label="X">
              X
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Betelgeuse Digital. All rights reserved.</span>
          <span>Built for what’s next.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
