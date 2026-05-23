import { useState } from 'react'
import './App.css'
import logo from '/TOLEDINHO-EXPRESS-LOGO-FINAL-2.png'

const services = [
  { icon: '📦', label: 'Pallets' },
  { icon: '🚛', label: 'Freight' },
  { icon: '⚙️', label: 'Equipment' },
  { icon: '🏭', label: 'Stock & Inventory' },
  { icon: '🏗️', label: 'Commercial Loads' },
  { icon: '🗺️', label: 'Interstate Deliveries' },
  { icon: '🎯', label: 'Direct Transport Jobs' },
]

const reasons = [
  { title: 'Reliable', desc: 'We treat every load like it is the only one. On time, every time.' },
  { title: 'Professional', desc: 'Licensed, insured and built to handle real freight, not just small moves.' },
  { title: 'Australia-Wide', desc: 'Interstate routes, metro runs, and regional deliveries covered.' },
  { title: 'Straightforward', desc: 'No hidden fees. No runaround. Just a fair price and a job done right.' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site">

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <img src={logo} alt="Toledin Express" className="nav-logo" />
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#why">Why Us</a></li>
            <li><a href="#contact">Get a Quote</a></li>
            <li><a href="https://www.movingthings.com.au/removalist/PrSvg7YmQOe3JtZsXXoUyBFPGmg2" target="_blank" rel="noopener noreferrer" className="nav-cta">Book Now</a></li>
          </ul>
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#why" onClick={closeMenu}>Why Us</a>
            <a href="#contact" onClick={closeMenu}>Get a Quote</a>
            <a href="https://www.movingthings.com.au/removalist/PrSvg7YmQOe3JtZsXXoUyBFPGmg2" target="_blank" rel="noopener noreferrer" className="mobile-book" onClick={closeMenu}>Book Now</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-badge">Australia-Wide Transport & Logistics</span>
          <p className="hero-brand">Toledinho Express</p>
          <h1 className="hero-title">
            We Move<br />
            <span className="hero-highlight">What Needs</span><br />
            To Move.
          </h1>
          <p className="hero-sub">
            Freight. Pallets. Equipment. Interstate runs.<br />
            If it needs to go — we get it there.
          </p>
          <div className="hero-actions">
            <a href="https://www.movingthings.com.au/removalist/PrSvg7YmQOe3JtZsXXoUyBFPGmg2" target="_blank" rel="noopener noreferrer" className="btn-primary">Book Now</a>
            <a href="#contact" className="btn-outline">Get a Quote</a>
            <a href="#services" className="btn-outline">Our Services</a>
          </div>
        </div>
        <div className="hero-stripe" />
      </section>

      {/* TAGLINE BAR */}
      <div className="tagline-bar">
        <span>Freight</span>
        <span className="dot">—</span>
        <span>Logistics</span>
        <span className="dot">—</span>
        <span>Interstate Transport</span>
        <span className="dot">—</span>
        <span>Pallets</span>
        <span className="dot">—</span>
        <span>Commercial Loads</span>
      </div>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Transport</span>
            <h2>Built for Real Freight</h2>
            <p>From a single pallet to a full commercial load — we handle it.</p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.label}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why" id="why">
        <div className="container">
          <div className="section-header light">
            <span className="section-label yellow">Why Toledin Express</span>
            <h2>Logistics Done Right</h2>
            <p>We are not a call centre. We are a transport company that shows up.</p>
          </div>
          <div className="why-grid">
            {reasons.map((r) => (
              <div className="why-card" key={r.title}>
                <div className="why-accent" />
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="banner">
        <div className="container banner-inner">
          <h2>"Logistics: making precision move."</h2>
          <p>We started small. We are thinking big. Every job builds the next one.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="container contact-inner">
          <div className="contact-text">
            <span className="section-label">Ready to Move</span>
            <h2>Get a Quote Today</h2>
            <p>
              Tell us what you need to move, where it is going, and when.<br />
              We will get back to you fast with a straight answer.
            </p>
            <ul className="contact-details">
              <li>
                <span className="contact-icon">📞</span>
                <span>Call or WhatsApp us directly</span>
              </li>
              <li>
                <span className="contact-icon">📧</span>
                <span>info@toledinexpress.com.au</span>
              </li>
              <li>
                <span className="contact-icon">📍</span>
                <span>Australia-wide operations</span>
              </li>
            </ul>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Pickup Location" />
            <input type="text" placeholder="Delivery Location" />
            <textarea placeholder="What needs to move? (pallets, freight, equipment...)" rows={4} />
            <button type="submit" className="btn-primary full">Send Enquiry</button>
          </form>
        </div>
      </section>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/61426012959"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#25D366"/>
          <path d="M23.5 8.5A10.44 10.44 0 0 0 16 5.5C10.75 5.5 6.5 9.75 6.5 15a9.45 9.45 0 0 0 1.37 4.9L6.5 26.5l6.77-1.34A9.5 9.5 0 0 0 16 25.5c5.25 0 9.5-4.25 9.5-9.5a9.44 9.44 0 0 0-2-5.5zm-7.5 14.6a7.88 7.88 0 0 1-4.03-1.1l-.29-.17-3 .79.8-2.93-.19-.3A7.9 7.9 0 0 1 8.1 15c0-4.36 3.54-7.9 7.9-7.9a7.9 7.9 0 0 1 7.9 7.9c0 4.36-3.54 7.9-7.9 7.9zm4.33-5.9c-.24-.12-1.4-.69-1.62-.77-.21-.08-.37-.12-.52.12-.16.24-.6.77-.74.92-.13.16-.27.18-.5.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.17-1.39-1.31-1.63-.14-.24-.01-.36.1-.48.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.52-1.26-.72-1.73-.19-.45-.38-.39-.52-.4h-.45c-.16 0-.41.06-.62.3-.21.24-.82.8-.82 1.95s.84 2.26.96 2.42c.12.16 1.66 2.53 4.02 3.55.56.24 1 .39 1.34.5.56.18 1.07.15 1.48.09.45-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28z" fill="#fff"/>
        </svg>
        <span>WhatsApp Us</span>
      </a>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <img src={logo} alt="Toledin Express" className="footer-logo" />
          <p className="footer-tag">Australia-wide transport & logistics.</p>
          <p className="footer-copy">© {new Date().getFullYear()} Toledin Express. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}
