import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
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
        <Link to="/">
          <img src={skullLogo} alt="Skull Solution Brand Logo" className="brand-logo" />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <nav className={`nav-menu ${menuActive ? "active" : ""}`} id="navMenu">
        <ul className="nav-list">
          <li>
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/work" className="nav-link" onClick={closeMenu}>
              Work
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav-link" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="nav-link" onClick={closeMenu}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Navbar Actions */}
      <div className="nav-actions">
        <Link to="/contact" className="btn btn-white btn-call">
          Call Us
        </Link>
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