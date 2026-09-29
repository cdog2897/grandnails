import { useState } from 'react'
import './App.css'

const phone = 'tel:+13077453686'
const maps = 'https://www.google.com/maps/place/Grand+Nails+%26+Spa/@41.3095476,-105.5625012,1597m/data=!3m2!1e3!4b1!4m6!3m5!1s0x876890425e114935:0xda83de68da4b2004!8m2!3d41.3095476!4d-105.5625012!16s%2Fg%2F11b6_vlsbv'

function Arrow({ diagonal = false }) {
  return diagonal ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 19 19 5M7 5h12v12" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
  )
}

const hours = [
  ['Monday', 'Closed'],
  ['Tuesday – Friday', '9:00 am – 7:00 pm'],
  ['Saturday', '9:00 am – 6:00 pm'],
  ['Sunday', '9:00 am – 5:00 pm'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="announcement"><span>Laramie, Wyoming</span><span className="announcement-dot" aria-hidden="true">✦</span><a href={phone}>Call to schedule: (307) 745-3686</a></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Grand Nails and Spa, back to top" onClick={closeMenu}><span className="brand-main">GRAND</span><span className="brand-sub">NAILS <span>&</span> SPA</span></a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          <a href="#services" onClick={closeMenu}>Services</a><a href="#about" onClick={closeMenu}>The experience</a><a href="#reviews" onClick={closeMenu}>Reviews</a><a href="#visit" onClick={closeMenu}>Visit us</a>
          <a className="nav-mobile-call" href={phone} onClick={closeMenu}>Call to book <Arrow diagonal /></a>
        </nav>
        <a className="header-cta" href={phone}>Call to book <Arrow diagonal /></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> Nail care in Laramie</div>
            <h1 id="hero-title">A little time<br />for <em>you.</em></h1>
            <p className="hero-lead">Manicures, pedicures, and acrylic nail care at Grand Nails & Spa on Grand Avenue.</p>
            <div className="hero-actions"><a className="button button-dark" href={phone}>Call (307) 745-3686 <Arrow diagonal /></a><a className="text-link" href="#services">Explore services <Arrow /></a></div>
            <div className="hero-rule" />
            <p className="hero-location"><span className="location-mark" aria-hidden="true">✦</span> 2317 Grand Ave, Suite E <span className="hero-location-divider">/</span> Laramie, WY</p>
          </div>
          <div className="hero-visual"><div className="hero-visual-back" /><div className="hero-image-wrap"><img src="/images/manicured-hands.jpg" alt="Manicured hands against a blush background" fetchPriority="high" /></div><div className="hero-stamp" aria-hidden="true"><span>GRAND</span><small>NAILS & SPA</small></div></div>
        </section>

        <div className="quick-info" aria-label="Quick visit details"><div><span className="quick-label">Find us</span><strong>UW Plaza · Grand Avenue</strong></div><div><span className="quick-label">Plan your visit</span><strong>Call ahead for an appointment</strong></div><a href={maps} target="_blank" rel="noreferrer">Get directions <Arrow diagonal /></a></div>

        <section className="services section-shell" id="services" aria-labelledby="services-title">
          <div className="section-heading services-heading"><div><span className="section-kicker">01 / What we do</span><h2 id="services-title">Good nails, good day.</h2></div><p>Whether you have a look in mind or simply need time to unwind, start with the nail care that feels right for you.</p></div>
          <div className="service-grid">
            <article className="service-card"><span className="service-number">01</span><div className="service-icon" aria-hidden="true">✳</div><h3>Manicures</h3><p>Make room in your day for hand and nail care, with a polished finish. Ask about gel options when you call.</p><a href={phone} aria-label="Call about manicures">Ask about manicures <Arrow diagonal /></a></article>
            <article className="service-card service-card-featured"><span className="service-number">02</span><div className="service-icon" aria-hidden="true">✦</div><h3>Pedicures</h3><p>Take a seat and give your feet some attention. A fresh pedicure is a lovely way to reset.</p><a href={phone} aria-label="Call about pedicures">Ask about pedicures <Arrow diagonal /></a></article>
            <article className="service-card"><span className="service-number">03</span><div className="service-icon" aria-hidden="true">✳</div><h3>Acrylic nails</h3><p>Interested in added length or a full set? Talk through the shape and finish you want when booking.</p><a href={phone} aria-label="Call about acrylic nails">Ask about acrylics <Arrow diagonal /></a></article>
          </div>
          <p className="services-note">Looking for a particular style or service? Call the salon to confirm options and availability.</p>
        </section>

        <section className="experience" id="about" aria-labelledby="experience-title"><div className="experience-image"><img src="/images/color-selection.jpg" alt="Hands looking through nail color samples" loading="lazy" /></div><div className="experience-copy"><span className="section-kicker">02 / Your appointment</span><h2 id="experience-title">Find your next<br /><em>favorite shade.</em></h2><p>Sometimes you know exactly what you want. Sometimes choosing the color is half the fun. Grand Nails & Spa offers manicures and pedicures right here in Laramie. Interested in acrylic nails? Call to talk through your next set.</p><p>Have inspiration for your next visit? Give the salon a call to discuss your idea and schedule a time.</p><a className="button button-outline" href={phone}>Let's talk nails <Arrow diagonal /></a></div></section>

        <section className="reviews section-shell" id="reviews" aria-labelledby="reviews-title"><div className="section-heading reviews-heading"><div><span className="section-kicker">03 / Kind words</span><h2 id="reviews-title">From the people<br />who've been here.</h2></div><a className="text-link" href={maps} target="_blank" rel="noreferrer">See the Maps listing <Arrow diagonal /></a></div><div className="review-grid"><figure className="review-card"><span className="quote-mark" aria-hidden="true">“</span><blockquote>My daughter and I go faithfully for pedicures and it's always a treat.</blockquote><figcaption><span>Linda Reitsma</span><a href="https://www.google.com/maps/contrib/107980621613357835281/reviews?hl=en" target="_blank" rel="noreferrer">Google Maps review <Arrow diagonal /></a></figcaption></figure><figure className="review-card"><span className="quote-mark" aria-hidden="true">“</span><blockquote>They are always friendly and do a nice job.</blockquote><figcaption><span>Customer review</span><a href="https://www.bestprosintown.com/wy/laramie/grand-nails-and-spa-/" target="_blank" rel="noreferrer">BestProsInTown · Sep 2024 <Arrow diagonal /></a></figcaption></figure></div></section>

        <section className="visit" id="visit" aria-labelledby="visit-title"><div className="visit-inner section-shell"><div className="visit-intro"><span className="section-kicker">04 / Come on in</span><h2 id="visit-title">See you on<br /><em>Grand Avenue.</em></h2><p>You'll find Grand Nails & Spa in UW Plaza, just off Grand Avenue in Laramie. Call before you visit to arrange your appointment.</p><div className="visit-actions"><a className="button button-dark" href={phone}>Call to book <Arrow diagonal /></a><a className="text-link" href={maps} target="_blank" rel="noreferrer">Open in Maps <Arrow diagonal /></a></div></div><div className="visit-details"><div className="detail-block"><span>Address</span><p>2317 Grand Avenue, Suite E<br />Laramie, WY 82070</p><a href={maps} target="_blank" rel="noreferrer">Get directions <Arrow diagonal /></a></div><div className="detail-block"><span>Phone</span><p><a className="phone-detail" href={phone}>(307) 745-3686</a></p></div><div className="detail-block hours-block"><span>Hours</span><dl>{hours.map(([day, time]) => <div key={day}><dt>{day}</dt><dd>{time}</dd></div>)}</dl><small>Hours may change. Please call to confirm before visiting.</small></div></div></div></section>
      </main>

      <footer className="site-footer"><div className="footer-top"><a className="brand footer-brand" href="#top" aria-label="Grand Nails and Spa, back to top"><span className="brand-main">GRAND</span><span className="brand-sub">NAILS <span>&</span> SPA</span></a><p>A little time for you, right here in Laramie.</p><a className="footer-call" href={phone}>Make an appointment <Arrow diagonal /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Grand Nails & Spa</span><span>2317 Grand Ave, Suite E · Laramie, WY</span><a href="#top">Back to top ↑</a></div></footer>
      <a className="mobile-call-bar" href={phone}>Call to book <span>(307) 745-3686</span> <Arrow diagonal /></a>
    </>
  )
}

export default App
