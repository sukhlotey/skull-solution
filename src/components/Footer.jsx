import skullLogo from "../assets/skull-logo.svg"

function Footer() {
  return (
    <footer className="footer-section" id="footer">
      <div className="footer-card">
        {/* Top Callout & Navigation Links */}
        <div className="footer-top-grid" data-animate="fadeInUp">
          <div className="footer-callout-col">
            <h2 className="footer-cta-title">
              LET'S WORK<br />
              <span className="highlight-badge-white">TOGETHER</span>
            </h2>
            <p className="footer-description">
              Discover innovative solutions tailored for your digital marketing needs and watch your
              business thrive.
            </p>
          </div>

          <div className="footer-links-col">
            <div className="footer-nav-group">
              <h4 className="footer-group-title">Navigation</h4>
              <a href="#about" className="footer-link">
                About Us
              </a>
              <a href="#services" className="footer-link">
                Services
              </a>
              <a href="#work" className="footer-link">
                Our Work
              </a>
              <a href="#testimonials" className="footer-link">
                Testimonials
              </a>
              <a href="#contact" className="footer-link">
                Contact Us
              </a>
            </div>
            <div className="footer-nav-group">
              <h4 className="footer-group-title">Services</h4>
              <a href="#services" className="footer-link">
                Digital Marketing
              </a>
              <a href="#services" className="footer-link">
                Web Designing
              </a>
              <a href="#services" className="footer-link">
                Web Development
              </a>
              <a href="#services" className="footer-link">
                SEO Services
              </a>
              <a href="#services" className="footer-link">
                Ad Services
              </a>
              <a href="#services" className="footer-link">
                Brand Strategy
              </a>
            </div>
          </div>
        </div>

        {/* Middle Brand Logo */}
        <div className="footer-brand-row" data-animate="fadeInUp">
          <a href="#">
            <img src={skullLogo} alt="Skull Solution Brand Logo" className="footer-logo" />
          </a>
        </div>

        {/* Bottom Copyright & Social Icons Row */}
        <div className="footer-bottom-row" data-animate="fadeInUp">
          <div className="footer-copyright">
            &copy; Skull Solution. All rights reserved.
          </div>

          <div className="footer-social-icons">
            <a href="#" aria-label="Facebook" className="social-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" aria-label="X (Twitter)" className="social-icon">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="social-icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="YouTube" className="social-icon">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer