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
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-badge">Australia-Wide Transport & Logistics</span>
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
