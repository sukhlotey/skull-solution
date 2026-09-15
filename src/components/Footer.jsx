import { useEffect } from "react"
import { Link } from "react-router-dom"
import skullLogo from "../assets/skull-logo.svg"

function Footer() {
  useEffect(() => {
    const elements = document.querySelectorAll('#footer [data-animate]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated-show')
          }
        })
      },
      { threshold: 0.05 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

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
              <Link to="/about" className="footer-link">
                About Us
              </Link>
              <Link to="/services" className="footer-link">
                Services
              </Link>
              <Link to="/work" className="footer-link">
                Our Work
              </Link>
              <Link to="/blogs" className="footer-link">
                Blogs
              </Link>
              <Link to="/privacy" className="footer-link">
                Privacy Policy
              </Link>
              <Link to="/terms" className="footer-link">
                Terms of Service
              </Link>
            </div>
            <div className="footer-nav-group">
              <h4 className="footer-group-title">Services</h4>
              <Link to="/services" className="footer-link">
                Digital Marketing
              </Link>
              <Link to="/services" className="footer-link">
                Web Designing
              </Link>
              <Link to="/services" className="footer-link">
                Web Development
              </Link>
              <Link to="/services" className="footer-link">
                SEO Services
              </Link>
              <Link to="/services" className="footer-link">
                Ad Services
              </Link>
              <Link to="/services" className="footer-link">
                Brand Strategy
              </Link>
            </div>
          </div>
        </div>

        {/* Middle Brand Logo */}
        <div className="footer-brand-row" data-animate="fadeInUp">
          <Link to="/">
            <img src={skullLogo} alt="Skull Solution Brand Logo" className="footer-logo" />
          </Link>
        </div>

        {/* Bottom Copyright & Social Icons Row */}
        <div className="footer-bottom-row" data-animate="fadeInUp">
          <div className="footer-copyright" style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span>&copy; Skull Solution. All rights reserved.</span>
            <span>•</span>
            <Link to="/privacy" style={{ color: '#888888', textDecoration: 'none', transition: 'color 0.3s' }}>Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" style={{ color: '#888888', textDecoration: 'none', transition: 'color 0.3s' }}>Terms of Service</Link>
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