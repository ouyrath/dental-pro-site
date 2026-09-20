'use client'

import {
  CalendarDays,
  Phone,
  MapPin,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  GraduationCap,
  Smile,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Clock3
} from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const services = [
  { title: 'General Dentistry', text: 'Cleanings, exams, fillings and preventive care for healthy smiles.', icon: ShieldCheck },
  { title: 'Dental Implants', text: 'Modern tooth replacement options designed for comfort and confidence.', icon: Smile },
  { title: 'Cosmetic Dentistry', text: 'Whitening, veneers and smile-enhancing treatments tailored to you.', icon: Sparkles },
  { title: 'Emergency Care', text: 'Fast help for toothaches, broken teeth and urgent dental concerns.', icon: HeartHandshake },
]

const values = [
  { title: 'Care Before Sales', text: 'Clear recommendations and treatment options without pressure.', icon: HeartHandshake },
  { title: 'Comfort First', text: 'A calm, modern office designed to make visits feel easier.', icon: Smile },
  { title: 'Clear Education', text: 'We explain what we see, what it means and what your choices are.', icon: GraduationCap },
  { title: 'Family Focused', text: 'Thoughtful care for children, adults and every stage in between.', icon: ShieldCheck },
]

const reviews = [
  'The team was welcoming, professional and made the entire appointment easy from start to finish.',
  'Beautiful modern office. Everything was explained clearly and I never felt rushed.',
  'They helped me with a same-day dental concern and made me feel comfortable right away.'
]

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <main>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Modern family dentistry • Friendly, comfortable care</span>
          <div className="top-links">
            <a href="tel:12345678"><Phone size={15}/> 12345678</a>
            <a href="#financing"><CreditCard size={15}/> Financing</a>
          </div>
        </div>
      </div>

      <header className="nav-wrap">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="Emily Dental home">
            <span className="brand-mark">S</span>
            <span><strong>Emily</strong><small>DENTAL</small></span>
          </a>
          <nav className="desktop-nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#membership">Membership</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn btn-primary nav-cta" href="#contact"><CalendarDays size={18}/> Book Online</a>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Open menu">
            {open ? <X/> : <Menu/>}
          </button>
        </div>
        {open && (
          <div className="mobile-nav container">
            <a onClick={()=>setOpen(false)} href="#about">About</a>
            <a onClick={()=>setOpen(false)} href="#services">Services</a>
            <a onClick={()=>setOpen(false)} href="#reviews">Reviews</a>
            <a onClick={()=>setOpen(false)} href="#membership">Membership</a>
            <a onClick={()=>setOpen(false)} href="#contact">Contact</a>
            <a onClick={()=>setOpen(false)} className="btn btn-primary" href="#contact">Book Online</a>
          </div>
        )}
      </header>

      <section className="hero" id="top">
        <div className="hero-blob blob-one" />
        <div className="hero-blob blob-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={16}/> A different kind of dental visit</div>
            <h1>Care that feels <em>like coming home.</em></h1>
            <p>Comfortable, modern dentistry built around real conversations, thoughtful care and a healthier smile for every stage of life.</p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-large" href="#contact"><CalendarDays size={19}/> Book an Appointment</a>
              <a className="btn btn-ghost btn-large" href="tel:12345678"><Phone size={19}/> Call Us</a>
            </div>
            <div className="trust-row">
              <span><CheckCircle2/> Same-day emergencies</span>
              <span><CheckCircle2/> Family friendly</span>
              <span><CheckCircle2/> Flexible payment options</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="photo-placeholder dentist-photo">
              <Image
                src="/emily-dentist.webp"
                alt="Dentist portrait"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 45vw"
                className="dentist-image"
              />
              <div className="photo-note">Emily Yanna</div>
            </div>
            <div className="floating-card">
              <div className="stars">★★★★★</div>
              <strong>5-star patient experience</strong>
              <span>Warm care. Clear answers. Modern dentistry.</span>
            </div>
          </div>
        </div>
        <svg className="wave" viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden="true"><path d="M0,70 C260,150 520,0 760,72 C980,140 1200,20 1440,82 L1440,140 L0,140 Z" /></svg>
      </section>

      <section className="section intro" id="about">
        <div className="container split">
          <div>
            <div className="eyebrow">Your neighborhood dentist</div>
            <h2>A modern dental home built around you.</h2>
          </div>
          <div className="intro-copy">
            <p>At Emily, dentist Emily Yanna focuses on clear conversations, comfortable care and treatment plans built around each patient's needs and goals.</p>
            <a className="text-link" href="#contact">Meet the team <ArrowRight size={17}/></a>
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <div className="section-heading centered">
            <div className="eyebrow">Comprehensive care</div>
            <h2>Everything your smile needs, under one roof.</h2>
            <p>From routine prevention to restoring missing teeth, explore personalized dental care for the whole family.</p>
          </div>
          <div className="card-grid">
            {services.map(({title,text,icon:Icon}) => (
              <article className="service-card" key={title}>
                <div className="icon-box"><Icon/></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contact">Learn more <ArrowRight size={16}/></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow light">Why patients choose us</div>
            <h2>It’s not just what we do. It’s how we do it.</h2>
          </div>
          <div className="values-grid">
            {values.map(({title,text,icon:Icon}) => (
              <article key={title}>
                <Icon/>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section reviews" id="reviews">
        <div className="container">
          <div className="section-heading centered">
            <div className="eyebrow">Patient stories</div>
            <h2>See what our patients have to say.</h2>
          </div>
          <div className="review-grid">
            {reviews.map((review, i) => (
              <article className="review-card" key={review}>
                <div className="stars">★★★★★</div>
                <p>“{review}”</p>
                <div className="reviewer"><span>{['JM','AR','KT'][i]}</span><div><strong>{['Jamie M.','Alex R.','Kim T.'][i]}</strong><small>Verified patient</small></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section finance" id="financing">
        <div className="container finance-grid">
          <div>
            <div className="eyebrow light">Flexible financing</div>
            <h2>Don’t let cost get between you and your smile.</h2>
            <p>Offer convenient monthly payment options for qualifying patients. Replace this section with your preferred financing partner.</p>
            <a href="#contact" className="btn btn-light">Explore payment options <ArrowRight size={17}/></a>
          </div>
          <div className="finance-art"><CreditCard size={80}/><span>Flexible monthly payments</span></div>
        </div>
      </section>

      <section className="section membership" id="membership">
        <div className="container membership-grid">
          <div className="membership-copy">
            <div className="eyebrow">No insurance? No problem.</div>
            <h2>Simple Dental Savings Plan</h2>
            <p>A straightforward in-office membership option can help patients stay on top of routine care.</p>
            <ul>
              <li><CheckCircle2/> 2 basic cleanings per year</li>
              <li><CheckCircle2/> Routine X-rays</li>
              <li><CheckCircle2/> Emergency exam included</li>
              <li><CheckCircle2/> Member savings on other treatments</li>
            </ul>
          </div>
          <div className="price-card">
            <small>Example membership</small>
            <div className="price"><span>$</span>29<small>/mo</small></div>
            <p>or $299 annually</p>
            <a href="#contact" className="btn btn-primary btn-large">Join Today</a>
            <small className="fineprint">Example pricing only — update with your actual plan.</small>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <div className="eyebrow light">Start your dental journey</div>
            <h2>Ready for a better dental experience?</h2>
            <p>Use the details below as placeholders. Replace them with your real practice information before publishing.</p>
            <div className="contact-list">
              <a href="tel:12345678"><Phone/><span><small>Call</small>12345678</span></a>
              <div><MapPin/><span><small>Visit</small>123 Main St, Texas 123456</span></div>
              <div><Clock3/><span><small>Hours</small>Mon–Fri 9 AM–6 PM • Sat 8 AM–2 PM</span></div>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e)=>{e.preventDefault(); alert('Demo form submitted. Connect this to your email or booking system before launch.')}}>
            <h3>Request an appointment</h3>
            <label>Full name<input required name="name" placeholder="Your name" /></label>
            <label>Phone<input required name="phone" placeholder="12345678" /></label>
            <label>Email<input required type="email" name="email" placeholder="you@example.com" /></label>
            <label>How can we help?<textarea name="message" rows="4" placeholder="Cleaning, tooth pain, implants, cosmetic care..." /></label>
            <button className="btn btn-primary btn-large" type="submit">Request Appointment <ArrowRight size={18}/></button>
            <small>Demo form — no patient information is stored or sent.</small>
          </form>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div className="brand footer-brand"><span className="brand-mark">S</span><span><strong>Emily</strong><small>DENTAL</small></span></div>
          <p>Modern dentistry with a neighborly feel.</p>
          <div className="footer-links"><a href="#services">Services</a><a href="#reviews">Reviews</a><a href="#contact">Contact</a></div>
        </div>
        <div className="container footer-bottom">© 2026 Emily. All rights reserved.</div>
      </footer>
    </main>
  )
}
