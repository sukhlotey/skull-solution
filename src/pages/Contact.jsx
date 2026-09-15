import { useState } from "react";
import "./Contact.css";

const INTERESTED_SERVICES = [
  "SEO Services",
  "Email Marketing",
  "Social Media",
  "Content Creation",
  "Brand Strategy"
];

const FAQ_ITEMS = [
  {
    question: "What is digital marketing, and why is it important?",
    answer:
      "Digital marketing encompasses all online strategy designed to connect businesses with targeted audiences. It is essential for modern brand visibility, customer acquisition, and measurable ROI across search engines, social media, and paid ads."
  },
  {
    question: "How does SEO impact my business growth?",
    answer:
      "SEO improves your search engine rankings, bringing high-intent organic traffic to your website without ongoing ad spend. It builds brand authority and delivers compound long-term growth."
  },
  {
    question: "What is the difference between organic and paid marketing?",
    answer:
      "Organic marketing builds traffic over time through content, SEO, and community engagement, while paid marketing (PPC, Meta Ads) yields immediate targeted traffic and leads through direct ad investment."
  },
  {
    question: "What makes a successful email marketing campaign?",
    answer:
      "A successful email campaign combines precise audience segmentation, compelling copywriting, automated lifecycle flows, and continuous A/B testing to drive high open and click-through rates."
  },
  {
    question: "How do I know which digital marketing channels are right for my business?",
    answer:
      "We analyze your business model, target demographic, and revenue goals to build a customized multi-channel strategy prioritizing the platforms that deliver maximum ROI for your industry."
  }
];

const Contact = () => {
  // Selected interested services (default selected: SEO Services, Social Media)
  const [selectedServices, setSelectedServices] = useState([
    "SEO Services",
    "Social Media"
  ]);

  // Form input states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // FAQ Accordion State (index of open item, default 0 open)
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaqIndex((prev) => (prev === index ? null : index));
  };

  const handleToggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <div className="contact-page-section">
      {/* PAGE HEADER */}
      <div className="contact-header-block">
        <h1 className="contact-page-title">
          LET'S START A <br />
          NEW <span className="highlight-badge-pill">JOURNEY.</span>
        </h1>
        <p className="contact-page-desc">
          Have a project in mind or want to explore how our digital marketing
          experts can grow your business? Drop us a line, and we'll get back
          to you within 24 hours.
        </p>
      </div>

      {/* HERO MAIN GRID */}
      <div className="contact-hero-grid">
        {/* LEFT COLUMN: 4 CONTACT INFO CARDS */}
        <div className="contact-left-cards">
          {/* Card 1: Email */}
          <div className="contact-info-card">
            <div className="info-card-icon">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <span className="info-card-label">EMAIL US</span>
            <span className="info-card-value">hello@noiraagency.com</span>
            <a
              href="mailto:hello@noiraagency.com"
              className="info-card-link"
            >
              Send an email <span className="info-card-link-arrow">↗</span>
            </a>
          </div>

          {/* Card 2: Phone */}
          <div className="contact-info-card">
            <div className="info-card-icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <span className="info-card-label">CALL ANYTIME</span>
            <span className="info-card-value">+1 (352) 237-3368</span>
            <a href="tel:+13522373368" className="info-card-link">
              Book a phone call <span className="info-card-link-arrow">↗</span>
            </a>
          </div>

          {/* Card 3: Location */}
          <div className="contact-info-card">
            <div className="info-card-icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <span className="info-card-label">VISIT OUR OFFICE</span>
            <span className="info-card-value">816 NE 31st Ave, Ocala, FL</span>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="info-card-link"
            >
              Get directions <span className="info-card-link-arrow">↗</span>
            </a>
          </div>

          {/* Card 4: Social Media */}
          <div className="contact-info-card">
            <span className="info-card-label">
              CONNECT WITH US ON SOCIAL MEDIA
            </span>
            <div className="social-card-icons">
              <a
                href="#"
                aria-label="Facebook"
                className="social-card-btn"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="social-card-btn"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="social-card-btn"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="social-card-btn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: PROPOSAL FORM CARD */}
        <div className="contact-form-card">
          <h2 className="contact-form-title">Send a Message</h2>
          <p className="contact-form-subtitle">
            Tell us about your digital goals, and we'll assemble the perfect
            marketing audit strategy.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              {/* FULL NAME */}
              <div className="field-group">
                <label className="field-label">FULL NAME</label>
                <input
                  type="text"
                  required
                  className="field-input"
                  placeholder="Emily Johnson"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              {/* EMAIL ADDRESS */}
              <div className="field-group">
                <label className="field-label">EMAIL ADDRESS</label>
                <input
                  type="email"
                  required
                  className="field-input"
                  placeholder="emily@marketingco.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* COMPANY NAME */}
              <div className="field-group">
                <label className="field-label">COMPANY NAME</label>
                <input
                  type="text"
                  className="field-input"
                  placeholder="Marketing Co."
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              {/* PHONE NUMBER */}
              <div className="field-group">
                <label className="field-label">PHONE NUMBER</label>
                <input
                  type="tel"
                  className="field-input"
                  placeholder="+1 (555) 000-0000"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              {/* INTERESTED SERVICES */}
              <div className="field-group full-width">
                <label className="field-label" style={{ marginBottom: "6px" }}>
                  INTERESTED SERVICES
                </label>
                <div className="services-pills-row">
                  {INTERESTED_SERVICES.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        className={`service-pill-btn ${
                          isSelected ? "selected" : ""
                        }`}
                        onClick={() => handleToggleService(service)}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* HOW CAN WE HELP YOU? */}
              <div className="field-group full-width">
                <label className="field-label">HOW CAN WE HELP YOU?</label>
                <textarea
                  required
                  className="field-textarea"
                  placeholder="Describe your project, timeline, and current marketing challenges.."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>

            <button type="submit" className="submit-proposal-btn">
              Submit Proposal Request
            </button>
          </form>

          {submitted && (
            <div className="contact-success-toast">
              ✓ Thank you! Your proposal request has been sent. We'll get back to you within 24 hours.
            </div>
          )}
        </div>
      </div>

      {/* HOME.JSX FAQ SECTION INTEGRATION */}
      <section className="faq-section" id="faq" style={{ marginTop: "60px" }}>
        <div className="faq-grid">
          {/* Left FAQ Info */}
          <div className="faq-info-col">
            <h2 className="faq-title">FAQs</h2>
            <p className="faq-subtitle">
              Discover answers to common questions about Skull Solution's
              services and how we can assist you.
            </p>
            <a href="#top" className="btn btn-white faq-cta">
              Get in Touch
            </a>
          </div>

          {/* Right FAQ Accordion List */}
          <div className="faq-accordion-col">
            <div className="faq-accordion">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = activeFaqIndex === index;
                return (
                  <div
                    key={index}
                    className={`faq-item ${isOpen ? "active" : ""}`}
                  >
                    <div
                      className="faq-question"
                      onClick={() => toggleFaq(index)}
                    >
                      <h3>{item.question}</h3>
                      <span className="faq-toggle-icon">
                        {isOpen ? (
                          <i className="fa-solid fa-minus"></i>
                        ) : (
                          <i className="fa-solid fa-plus"></i>
                        )}
                      </span>
                    </div>
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
