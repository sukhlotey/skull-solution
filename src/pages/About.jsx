import aboutRight from "../assets/about-right.png";
import brandPro from "../assets/brand-pro.jpg";
import devPro from "../assets/dev-pro.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-page-section">
      {/* SECTION 1: HERO SECTION */}
      <div className="about-hero-grid">
        <div className="about-hero-left">
          <div className="about-subhead-tag">WHO WE ARE</div>
          <h1 className="about-hero-title">
            WE BUILD DIGITAL <br />
            EMPIRES FOR <span className="highlight-badge-pill">BRANDS.</span>
          </h1>

          <p className="about-hero-description">
            Noira is a team of hyper-focused digital marketing specialists,
            engineers, and creators. We replace traditional guesswork with
            robust, scientific campaign scaling.
          </p>

          <div className="about-btn-group">
            <a href="/contact" className="btn-pill-solid">
              Work With Us
            </a>
            <a href="#philosophy" className="btn-pill-outline">
              Meet the Team
            </a>
          </div>
        </div>

        <div className="about-hero-media">
          <img
            src={aboutRight}
            alt="Skull Solution Strategy Team"
            className="about-hero-img"
          />
        </div>
      </div>

      {/* SECTION 2: STATS COUNTER BAR */}
      <div className="stats-bar-container">
        <div className="stat-item-box">
          <span className="stat-big-number">250+</span>
          <span className="stat-item-label">CAMPAIGNS LAUNCHED</span>
        </div>
        <div className="stat-item-box">
          <span className="stat-big-number">30%</span>
          <span className="stat-item-label">AVG ENGAGEMENT BOOST</span>
        </div>
        <div className="stat-item-box">
          <span className="stat-big-number">95%</span>
          <span className="stat-item-label">CONVERSION INCREASE</span>
        </div>
        <div className="stat-item-box">
          <span className="stat-big-number">12M+</span>
          <span className="stat-item-label">ORGANIC REACH GENERATED</span>
        </div>
      </div>

      {/* SECTION 3: OUR CORE PHILOSOPHY (VALUES) */}
      <div className="philosophy-section" id="philosophy">
        <div className="philosophy-header">
          <div className="about-subhead-tag">OUR CORE PHILOSOPHY</div>
          <h2 className="about-hero-title" style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}>
            BUILT ON UNCOMPROMISING{" "}
            <span className="highlight-badge-pill">VALUES.</span>
          </h2>
          <p className="about-hero-description" style={{ marginBottom: "0" }}>
            We hold ourselves to a standard that guarantees velocity,
            transparency, and creative exceptionalism.
          </p>
        </div>

        <div className="values-cards-grid">
          {/* Card 1 */}
          <div className="value-card">
            <div className="value-icon-box">
              <i className="fa-solid fa-[#]"></i>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m10 15 5-3-5-3v6Z" />
              </svg>
            </div>
            <h3 className="value-card-title">Velocity First</h3>
            <p className="value-card-desc">
              We move with speed, test relentlessly, and optimize continuously.
              Momentum is our greatest competitive advantage.
            </p>
          </div>

          {/* Card 2 */}
          <div className="value-card">
            <div className="value-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </div>
            <h3 className="value-card-title">Data Obsessed</h3>
            <p className="value-card-desc">
              Every creative execution has a tracking hypothesis. We analyze
              and scale based on high-fidelity performance metrics.
            </p>
          </div>

          {/* Card 3 */}
          <div className="value-card">
            <div className="value-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h3 className="value-card-title">Aesthetic Quality</h3>
            <p className="value-card-desc">
              We refuse to ship generic-looking layouts. Brand design is a
              luxury—it is the prerequisite of brand authority.
            </p>
          </div>

          {/* Card 4 */}
          <div className="value-card">
            <div className="value-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="value-card-title">Radical Transparency</h3>
            <p className="value-card-desc">
              No hidden margins. No mysterious metrics. We operate as an
              extension of your team, presenting absolute truth only.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 4: MISSION & VISION */}
      <div className="mission-vision-section">
        <div className="mv-top-grid">
          <div>
            <div className="about-subhead-tag">MISSION & VISION</div>
            <h2 className="about-hero-title" style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}>
              WHY WE EXIST AND <br />
              <span className="highlight-badge-pill">WHERE WE'RE GOING.</span>
            </h2>
            <p className="about-hero-description" style={{ marginBottom: "0" }}>
              Our mission and vision define how we partner with brands today
              and the impact we aim to create tomorrow.
            </p>
          </div>

          <div className="mv-direction-banner">
            <img
              src={devPro}
              alt="Visual Direction"
              className="mv-banner-bg-img"
            />
            <div className="mv-banner-content">
              <div className="mv-banner-tag">✦ VISUAL DIRECTION</div>
              <p className="mv-banner-text">
                Strategy and ambition are built into every campaign from day one.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="mv-cards-grid">
          {/* Left Card: Mission */}
          <div className="mv-card">
            <div className="mv-card-header-image">
              <img src={brandPro} alt="Our Mission" />
              <div className="mv-card-badges">
                <span className="badge-tag-dark">MISSION</span>
                <span className="badge-tag-dark">TODAY</span>
              </div>
            </div>

            <div className="mv-card-body">
              <div className="mv-card-title-row">
                <div className="mv-card-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="mv-card-title">Our Mission</h3>
                  <div className="mv-card-sublabel">
                    PARTNERING WITH AMBITIOUS BRANDS
                  </div>
                </div>
              </div>

              <p className="mv-card-text">
                We partner with ambitious brands to build digital experiences
                that drive measurable growth, creative clarity, and long-term
                market authority.
              </p>

              <div className="mv-tags-row">
                <span className="mv-pill-tag">Measurable growth</span>
                <span className="mv-pill-tag">Creative clarity</span>
                <span className="mv-pill-tag">Market authority</span>
              </div>
            </div>
          </div>

          {/* Right Card: Vision */}
          <div className="mv-card">
            <div className="mv-card-header-image">
              <img src={devPro} alt="Our Vision" />
              <div className="mv-card-badges">
                <span className="badge-tag-dark">VISION</span>
                <span className="badge-tag-dark">TOMORROW</span>
              </div>
            </div>

            <div className="mv-card-body">
              <div className="mv-card-title-row">
                <div className="mv-card-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="mv-card-title">Our Vision</h3>
                  <div className="mv-card-sublabel">
                    THE TRUSTED PERFORMANCE PARTNER
                  </div>
                </div>
              </div>

              <p className="mv-card-text">
                To become the trusted performance partner for brands that want
                to move faster, scale with confidence, and leave a lasting
                impression on their market.
              </p>

              <div className="mv-tags-row">
                <span className="mv-pill-tag">Faster execution</span>
                <span className="mv-pill-tag">Confident scale</span>
                <span className="mv-pill-tag">Lasting impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5: BOTTOM CTA BANNER */}
      <div className="about-cta-card">
        <div className="cta-left-content">
          <h2 className="cta-main-heading">
            Ready to experience the Noira difference?
          </h2>
          <p className="cta-sub-text">
            Schedule a direct architecture session with our performance leads to
            map out your scale plan.
          </p>
        </div>
        <a href="/appointment" className="btn-pill-solid">
          Book a Discovery Call
        </a>
      </div>
    </div>
  );
};

export default About;
