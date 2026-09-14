import { useState, useEffect, useRef } from "react"
import skullLogo from "../assets/skull-logo.svg"

function Navbar() {
  const [menuActive, setMenuActive] = useState(false)
  const headerRef = useRef(null)

  const toggleMenu = (e) => {
    e.stopPropagation()
    setMenuActive((prev) => !prev)
  }

  const closeMenu = () => {
    setMenuActive(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuActive(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <header className="navbar" ref={headerRef}>
      <div className="nav-brand">
        <a href="#">
          <img src={skullLogo} alt="Skull Solution Brand Logo" className="brand-logo" />
        </a>
      </div>

      {/* Desktop Navigation Links */}
      <nav className={`nav-menu ${menuActive ? "active" : ""}`} id="navMenu">
        <ul className="nav-list">
          <li>
            <a href="#about" className="nav-link" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#work" className="nav-link" onClick={closeMenu}>
              Work
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#testimonials" className="nav-link" onClick={closeMenu}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Navbar Actions */}
      <div className="nav-actions">
        <a href="#contact" className="btn btn-white btn-call">
          Call Us
        </a>
        <button
          className={`hamburger ${menuActive ? "active" : ""}`}
          id="hamburgerBtn"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar