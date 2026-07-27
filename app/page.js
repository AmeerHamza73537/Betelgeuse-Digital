"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Paid growth",
    text: "Focused campaigns that turn attention into qualified demand and profitable growth.",
    tags: ["Google Ads", "Meta Ads", "Creative testing"],
  },
  {
    number: "02",
    title: "Web experiences",
    text: "Fast, thoughtful websites built around your customer journey and commercial goals.",
    tags: ["Next.js", "Shopify", "Custom builds"],
  },
  {
    number: "03",
    title: "Agentic AI",
    text: "Useful AI agents and automations that remove busywork from your team.",
    tags: ["AI agents", "Automation", "Integrations"],
  },
];

const values = [
  {
    number: "01",
    title: "One connected team",
    text: "Strategy, campaigns, product, and automation work together from day one.",
  },
  {
    number: "02",
    title: "Decisions over dashboards",
    text: "Every useful metric should lead to a clear action, not another report.",
  },
  {
    number: "03",
    title: "Built for momentum",
    text: "Small senior teams and direct feedback keep quality high and timelines tight.",
  },
];

const projects = [
  {
    kind: "Paid growth / DTC",
    title: "A sharper acquisition system for profitable scale",
    result: "3.8×",
    label: "sample ROAS",
  },
  {
    kind: "Commerce / Shopify",
    title: "A faster storefront designed around conversion",
    result: "+42%",
    label: "sample lift",
  },
  {
    kind: "AI operations / B2B",
    title: "Manual workflows turned into an agentic system",
    result: "18h",
    label: "sample saved / wk",
  },
];

const testimonials = [
  {
    quote:
      "Betelgeuse connected the dots between our ads, website, and reporting. It felt like a new growth engine.",
    role: "Growth Director · Consumer brand",
  },
  {
    quote:
      "They made complex technical choices feel clear and moved from strategy to launch with real pace.",
    role: "Co-founder · Technology company",
  },
  {
    quote:
      "The automation work gave our team hours back every week and a better way to run the operation.",
    role: "Operations Lead · B2B services",
  },
];

function Brand() {
  return (
    <span className="brand">
      <span className="brand-orbit" aria-hidden="true">
        <span />
      </span>
      <span>Betelgeuse</span>
      <span className="brand-muted">Digital</span>
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonial, setTestimonial] = useState(0);

  function closeMenu() {
    setMenuOpen(false);
  }

  function sendInquiry(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name") || "";
    const email = form.get("email") || "";
    const company = form.get("company") || "Not provided";
    const message = form.get("message") || "";
    const subject = encodeURIComponent(`New project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`,
    );

    window.location.href = `mailto:hello@betelgeusedigital.com?subject=${subject}&body=${body}`;
  }

  function moveTestimonial(direction) {
    setTestimonial(
      (current) =>
        (current + direction + testimonials.length) % testimonials.length,
    );
  }

  return (
    <main id="home">
      <header className="site-header">
        <a href="#home" aria-label="Betelgeuse Digital home">
          <Brand />
        </a>

        <nav
          className={menuOpen ? "site-nav is-open" : "site-nav"}
          aria-label="Primary navigation"
        >
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <a className="button button-small header-cta" href="#contact">
          Start a project <span aria-hidden="true">↗</span>
        </a>

        <button
          className={menuOpen ? "menu-button is-open" : "menu-button"}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            Strategy · Systems · Scale
          </p>
          <h1>
            Ideas that create <em>momentum.</em>
          </h1>
          <p className="hero-intro">
            We build the campaigns, digital products, and AI systems that move
            ambitious businesses forward.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Tell us what you’re building <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#services">
              Explore our work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="star-scene" aria-hidden="true">
          <div className="star-glow" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="star">
            <span />
          </div>
          <p>α ORI · RED SUPERGIANT</p>
        </div>

        <div className="hero-note">
          Independent digital studio
          <span />
          Pakistan · Worldwide
        </div>
      </section>

      <section className="signal-bar" aria-label="Agency model">
        <p>One connected growth partner</p>
        <div>
          <strong>03</strong>
          <span>Core disciplines</span>
        </div>
        <div>
          <strong>01</strong>
          <span>Senior team</span>
        </div>
        <div>
          <strong>∞</strong>
          <span>Room to scale</span>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">
            <span />
            01 · What we do
          </p>
          <h2>Three capabilities. One growth system.</h2>
          <p>
            From the first impression to the systems behind it, every part is
            designed to work together.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="card-top">
                <span>{service.number}</span>
                <span aria-hidden="true">↗</span>
              </div>
              <div className={`service-icon icon-${service.number}`}>
                <span />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about-copy">
          <p className="eyebrow">
            <span />
            02 · Why Betelgeuse
          </p>
          <h2>Built like a partner, not a production line.</h2>
          <p>
            Senior thinking stays close to the work. Every choice connects to
            the bigger commercial picture.
          </p>
          <div className="mini-orbit" aria-hidden="true">
            <span />
          </div>
        </div>

        <div className="value-list">
          {values.map((value) => (
            <article key={value.number}>
              <span>{value.number}</span>
              <div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section work" id="work">
        <div className="section-heading">
          <p className="eyebrow">
            <span />
            03 · Selected work
          </p>
          <h2>Proof, not promises.</h2>
          <p>
            Concept studies ready to be replaced with your real client stories
            and performance data.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project project-${index + 1}`} key={project.title}>
              <div className="project-visual">
                <span className="project-line" />
                <div>
                  <strong>{project.result}</strong>
                  <span>{project.label}</span>
                </div>
              </div>
              <p>{project.kind}</p>
              <h3>{project.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonial">
        <div className="testimonial-heading">
          <p className="eyebrow">
            <span />
            04 · Client signal
          </p>
          <h2>Good work travels.</h2>
          <div className="testimonial-controls">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => moveTestimonial(-1)}
            >
              ←
            </button>
            <span>
              {testimonial + 1} / {testimonials.length}
            </span>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => moveTestimonial(1)}
            >
              →
            </button>
          </div>
        </div>

        <blockquote>
          <span aria-hidden="true">“</span>
          <p>{testimonials[testimonial].quote}</p>
          <footer>
            <strong>Sample client</strong>
            <small>{testimonials[testimonial].role}</small>
          </footer>
        </blockquote>
      </section>

      <section className="contact" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">
            <span />
            Ready when you are
          </p>
          <h2>Let’s build your next source of momentum.</h2>
          <p>
            Tell us what you’re solving, where you want to go, and what success
            looks like. We’ll come back with a clear next step.
          </p>
          <a href="mailto:hello@betelgeusedigital.com">
            hello@betelgeusedigital.com <span aria-hidden="true">↗</span>
          </a>
        </div>

        <form onSubmit={sendInquiry}>
          <div className="form-row">
            <label>
              <span>Your name</span>
              <input name="name" autoComplete="name" placeholder="Jane Smith" required />
            </label>
            <label>
              <span>Work email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="jane@company.com"
                required
              />
            </label>
          </div>
          <label>
            <span>Company</span>
            <input
              name="company"
              autoComplete="organization"
              placeholder="Your company or project"
            />
          </label>
          <label>
            <span>What can we help with?</span>
            <textarea
              name="message"
              rows="4"
              placeholder="Share the challenge, timeline, and goals..."
              required
            />
          </label>
          <button className="button button-primary" type="submit">
            Send inquiry <span aria-hidden="true">↗</span>
          </button>
          <small>Opens in your preferred email app.</small>
        </form>
      </section>

      <footer className="site-footer">
        <a href="#home">
          <Brand />
        </a>
        <p>Digital systems for ambitious businesses.</p>
        <nav aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#home">Back to top ↑</a>
        </nav>
        <small>© 2026 Betelgeuse Digital.</small>
      </footer>
    </main>
  );
}
