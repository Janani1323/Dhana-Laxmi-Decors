import React from 'react'
import { createRoot } from 'react-dom/client'
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, CheckCircle2, Building2, Layers3, PackageCheck, Sparkles } from 'lucide-react'
import './styles.css'

const phone1 = '9029517722'
const phone2 = '6379490356'
const whatsapp = 'https://wa.me/919029517722'
const email = 'mailto:dhanalaxmidecors@gmail.com'

function App() {
  return (
    <div className="app">
      <header className="nav">
        <a href="#home" className="brand">
          <img src="/src/assets/logo.png" alt="Dhana Laxmi Decors logo" />
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">
          <MessageCircle size={18} /> WhatsApp
        </a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="eyebrow">DHANA LAXMI DECORS</span>
            <h1>Elevate Your Space With <span>Premium False Ceilings</span></h1>
            <p>
              False ceiling engineering, customized designs and quality gypsum
              materials for homes, offices and commercial spaces.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#contact">Get a Quote <ArrowRight size={18} /></a>
              <a className="secondary-btn" href={whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="hero-card">
            <Sparkles size={22} />
            <strong>Design to Installation</strong>
            <span>Customized to your requirements</span>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-heading">
            <span className="eyebrow red">ABOUT US</span>
            <h2>False ceiling solutions with quality materials and practical workmanship.</h2>
          </div>
          <div className="about-grid">
            <div>
              <p>
                Dhana Laxmi Decors provides all kinds of false ceiling engineering
                works and customized false ceiling designs based on customer
                requirements. We also operate a retail shop supplying false
                ceiling materials and related products.
              </p>
              <p>
                Our product range includes gypsum boards, GI channels, plaster
                of Paris, cement boards and readymade cornice. Products from
                brands such as Gyproc, Knauf and Gyblock are available.
              </p>
              <a className="text-link" href="#contact">Talk to us about your space <ArrowRight size={17}/></a>
            </div>
            <div className="about-points">
              <div><CheckCircle2/><span>Customized false ceiling designs</span></div>
              <div><CheckCircle2/><span>Retail gypsum & ceiling materials</span></div>
              <div><CheckCircle2/><span>Home, office & commercial spaces</span></div>
              <div><CheckCircle2/><span>Quality-focused material selection</span></div>
            </div>
          </div>
        </section>

        <section id="services" className="section light">
          <div className="section-heading center">
            <span className="eyebrow red">OUR SERVICES</span>
            <h2>What we do</h2>
            <p>From design requirements to ceiling execution and material supply.</p>
          </div>
          <div className="cards">
            <Service icon={<Layers3/>} title="False Ceiling Engineering" text="Planning and execution of false ceiling works for different spaces and requirements." />
            <Service icon={<Sparkles/>} title="Customized Ceiling Design" text="Ceiling layouts and design ideas tailored to the customer's space and preferences." />
            <Service icon={<Building2/>} title="Interior Ceiling Works" text="False ceiling solutions for homes, offices and commercial interiors." />
            <Service icon={<PackageCheck/>} title="Gypsum Material Supply" text="Retail supply of gypsum boards, GI channels and other ceiling materials." />
          </div>
        </section>

        <section id="products" className="section products">
          <div className="section-heading">
            <span className="eyebrow red">PRODUCTS</span>
            <h2>Materials available at our retail shop</h2>
            <p>Ask us about availability, specifications and current pricing.</p>
          </div>
          <div className="product-grid">
            {[
              ['Gypsum Board', 'For false ceiling and interior applications'],
              ['GI Channel', 'Ceiling framing and support components'],
              ['Plaster of Paris', 'For decorative ceiling and interior work'],
              ['Cement Board', 'Board solution for suitable interior applications'],
              ['Readymade Cornice', 'Decorative ceiling finishing elements'],
              ['Branded Materials', 'Products from brands such as Gyproc, Knauf and Gyblock'],
            ].map(([title, text]) => (
              <div className="product-card" key={title}>
                <div className="product-icon"><PackageCheck size={22}/></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="showcase">
          <div className="showcase-image">
            <img src="/src/assets/ceiling-reference.png" alt="False ceiling design reference" />
          </div>
          <div className="showcase-content">
            <span className="eyebrow red">CEILING DESIGN</span>
            <h2>Make your ceiling a part of the design.</h2>
            <p>
              Share your room dimensions, ideas or requirements with us.
              We can discuss suitable false ceiling options and materials for
              your project.
            </p>
            <a className="primary-btn" href={whatsapp} target="_blank" rel="noreferrer">
              Enquire on WhatsApp <ArrowRight size={18}/>
            </a>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-heading center">
            <span className="eyebrow red">CONTACT US</span>
            <h2>Let's discuss your ceiling requirement.</h2>
            <p>Call, WhatsApp or email us for enquiries and product availability.</p>
          </div>
          <div className="contact-grid">
            <a href={`tel:${phone1}`} className="contact-card"><Phone/><div><strong>{phone1}</strong><span>Call us</span></div></a>
            <a href={`tel:${phone2}`} className="contact-card"><Phone/><div><strong>{phone2}</strong><span>Call us</span></div></a>
            <a href={email} className="contact-card"><Mail/><div><strong>dhanalaxmidecors@gmail.com</strong><span>Email us</span></div></a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="contact-card"><MessageCircle/><div><strong>WhatsApp Enquiry</strong><span>Chat with us</span></div></a>
          </div>
          <div className="address">
            <MapPin size={22}/>
            <div>
              <strong>Dhana Laxmi Decors</strong>
              <p>Building No. SF No. 235/11, 235/1A,<br/>M.R.N. Nagar, 2nd Cross Line,<br/>Kallakurichi, Tamil Nadu – 606 202.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <img src="/src/assets/logo.png" alt="Dhana Laxmi Decors" />
          <p>False ceiling engineering, customized designs and gypsum material supply.</p>
        </div>
        <div className="footer-links">
          <a href="#about">About</a><a href="#services">Services</a><a href="#products">Products</a><a href="#contact">Contact</a>
        </div>
        <div className="copyright">© {new Date().getFullYear()} Dhana Laxmi Decors. All rights reserved.</div>
      </footer>

      <a className="floating-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <MessageCircle size={25}/>
      </a>
    </div>
  )
}

function Service({icon, title, text}) {
  return (
    <article className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#contact">Enquire <ArrowRight size={15}/></a>
    </article>
  )
}

createRoot(document.getElementById('root')).render(<App />)
