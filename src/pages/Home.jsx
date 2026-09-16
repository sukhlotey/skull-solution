import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
// Import image assets
import skullHero from "../assets/skull-hero.png"
import skullCenter from "../assets/skull.png"
import brand1 from "../assets/brand1.png"
import brand2 from "../assets/brand2.png"
import brand3 from "../assets/brand3.png"
import brand4 from "../assets/brand4.png"
import brand5 from "../assets/brand5.png"
import brand6 from "../assets/brand6.png"
import brand7 from "../assets/brand7.png"

import seoPro from "../assets/seo-pro.jpg"
import devPro from "../assets/dev-pro.jpg"
import digiPro from "../assets/digi-pro.jpg"
import adPro from "../assets/ad-pro.jpg"
import uiPro from "../assets/ui-pro.jpg"
import brandPro from "../assets/brand-pro.jpg"

import review1 from "../assets/review1.jpg"
import review2 from "../assets/review2.avif"
import review3 from "../assets/review3.jpg"
import ProcessWheelSection from "../components/ProcessWheelSection.jsx"
import BookServiceModal from "../components/BookServiceModal.jsx"

// Services List Data
const servicesData = [
  {
    index: "01",
    name: "DIGITAL MARKETING",
    title: "Digital Marketing",
    badge: "Full-Stack Growth",
    desc: "Strategic digital marketing campaigns designed to increase visibility, attract the right audience, and drive measurable business growth.",
    features: ["Google & Meta Ads", "Lead Generation", "Content Strategy", "Performance Marketing"]
  },
  {
    index: "02",
    name: "WEB DESIGNING",
    title: "Web Designing",
    badge: "Creative Experience",
    desc: "Modern and engaging website designs crafted to create strong first impressions and deliver smooth, user-focused digital experiences.",
    features: ["UI/UX Design", "Figma Design", "Responsive Design", "Creative Layouts"]
  },
  {
    index: "03",
    name: "WEB DEVELOPMENT",
    title: "Web Development",
    badge: "Digital Solutions",
    desc: "Fast, responsive, and scalable websites built with modern technologies to deliver reliable performance and seamless functionality.",
    features: ["Custom Development", "Responsive Websites", "Performance", "Modern Technologies"]
  },
  {
    index: "04",
    name: "SEO SERVICES",
    title: "SEO Services",
    badge: "Organic Growth",
    desc: "Comprehensive SEO strategies focused on improving search visibility, attracting quality traffic, and building sustainable organic growth.",
    features: ["Technical SEO", "On-Page SEO", "Keyword Strategy", "Search Rankings"]
  },
  {
    index: "05",
    name: "AD SERVICES",
    title: "Ad Services",
    badge: "Targeted Reach",
    desc: "High-performance advertising campaigns designed to reach the right audience, generate quality leads, and maximize your advertising results.",
    features: ["Google Ads", "Meta Ads", "PPC Campaigns", "Retargeting"]
  },
  {
    index: "06",
    name: "BRAND STRATEGY",
    title: "Brand Strategy",
    badge: "Market Leadership",
    desc: "Strategic brand positioning, visual identity, and messaging designed to make your business memorable and stand out in a competitive market.",
    features: ["Brand Positioning", "Visual Identity", "Brand Messaging", "Market Strategy"]
  }
]

// Projects Cards Data
const projectCardsData = [
  {
    img: seoPro,
    title: "Technical SEO & Organic Domination",
    desc: "Technical SEO audit, keyword domination, and high-authority backlink strategies that boosted organic traffic by 180%.",
    tags: ["SEO Services", "Organic Growth"]
  },
  {
    img: devPro,
    title: "High-Performance Web Development",
    desc: "Building fast, responsive, and scalable custom web applications engineered with modern frontend technologies.",
    tags: ["Web Development", "Custom Tech"]
  },
  {
    img: digiPro,
    title: "Multi-Channel Digital Marketing",
    desc: "Integrated digital acquisition campaigns combining search, social, and performance funnels for max growth.",
    tags: ["Digital Marketing", "Lead Generation"]
  },
  {
    img: adPro,
    title: "High-Converting Paid Ad Campaigns",
    desc: "Precision-targeted Google & Meta ad campaigns engineered to maximize ROAS and lower customer acquisition costs.",
    tags: ["Ad Services", "PPC Ads"]
  },
  {
    img: uiPro,
    title: "Modern UI/UX & Web Design System",
    desc: "Crafting intuitive visual interfaces, interactive Figma design systems, and engaging digital user experiences.",
    tags: ["Web Designing", "UI/UX Experience"]
  },
  {
    img: brandPro,
    title: "Strategic Brand Positioning & Identity",
    desc: "Developing distinctive brand identities, logo systems, and strategic messaging to dominate competitive markets.",
    tags: ["Brand Strategy", "Visual Identity"]
  }
]

// Testimonials Data
const testimonialsData = [
  {
    img: review1,
    quote: `"Skull Solution transformed our online presence, making it easier for us to attract clients and showcase our work effectively."`,
    name: "Emily Johnson",
    role: "CEO, Marketing Co."
  },
  {
    img: review3,
    quote: `"Their data-driven SEO and PPC strategy doubled our leads in less than 90 days. The ROI has been phenomenal."`,
    name: "Marcus Vance",
    role: "Head of Growth, FinTech Solutions"
  },
  {
    img: review2,
    quote: `"The UI/UX design and brand strategy completely elevated our product launch. Our conversion rates jumped by 145%."`,
    name: "Sophia Chen",
    role: "Founder & CPO, Nova Health"
  }
]

function Home() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false)

  // 1. Hero Badge Letter-by-Letter Animation
  const [heroBadgeText, setHeroBadgeText] = useState("IMPACT.")

  useEffect(() => {
    const words = ["IMPACT.", "RESULTS.", "VALUE."]
    let wordIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timerId = null

    function animateLetters() {
      const currentWord = words[wordIndex]
      if (isDeleting) {
        setHeroBadgeText(currentWord.substring(0, charIndex))
        charIndex--
      } else {
        charIndex++
        setHeroBadgeText(currentWord.substring(0, charIndex))
      }

      let delay = isDeleting ? 65 : 110

      if (!isDeleting && charIndex === currentWord.length) {
        delay = 1800
        isDeleting = true
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        wordIndex = (wordIndex + 1) % words.length
        delay = 250
      }

      timerId = setTimeout(animateLetters, delay)
    }

    timerId = setTimeout(animateLetters, 800)
    return () => clearTimeout(timerId)
  }, [])

  // 2. Scroll Animations (IntersectionObserver for data-animate)
  useEffect(() => {
    const animElements = document.querySelectorAll("[data-animate]")
    if (animElements.length === 0) return

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.1
    }

    const animObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target
          const animType = el.getAttribute("data-animate") || "fadeInUp"
          el.setAttribute("data-animated", "true")
          el.classList.add("animate__animated", `animate__${animType}`, "animated-show")
          observer.unobserve(el)
        }
      })
    }, observerOptions)

    animElements.forEach((el) => animObserver.observe(el))
    return () => animObserver.disconnect()
  }, [])

  // 3. Impact Counters & SVG Chart Animation
  const impactRef = useRef(null)
  const [stat80, setStat80] = useState("0%")
  const [stat95, setStat95] = useState("0%")
  const [stat250, setStat250] = useState("0+")
  const [isChartAnimated, setIsChartAnimated] = useState(false)

  useEffect(() => {
    const impactSection = impactRef.current
    if (!impactSection) return

    let hasAnimated = false

    const impactObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true

            // Animate Stat 1: 80%
            animateStat(80, "%", setStat80)
            // Animate Stat 2: 95%
            animateStat(95, "%", setStat95)
            // Animate Stat 3: 250+
            animateStat(250, "+", setStat250)

            // Animate SVG Chart
            setIsChartAnimated(true)

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    function animateStat(target, suffix, setter) {
      const duration = 1800
      const startTime = performance.now()

      function stepCount(currentTime) {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easedProgress = 1 - Math.pow(1 - progress, 3)
        const currentVal = Math.floor(easedProgress * target)
        setter(currentVal + suffix)

        if (progress < 1) {
          requestAnimationFrame(stepCount)
        } else {
          setter(target + suffix)
        }
      }
      requestAnimationFrame(stepCount)
    }

    impactObserver.observe(impactSection)
    return () => impactObserver.disconnect()
  }, [])

  // 4. Projects Slider (1-by-1 Infinite Carousel with Cloning & Touch)
  const projectsTrackRef = useRef(null)
  const [projectIndex, setProjectIndex] = useState(0)
  const [isProjectTransitioning, setIsProjectTransitioning] = useState(false)
  const totalOriginalProjects = projectCardsData.length // 6

  // Helper to calculate card step width
  const getStepWidth = () => {
    if (!projectsTrackRef.current) return 300
    const card = projectsTrackRef.current.querySelector(".project-card")
    if (!card) return 300
    const style = window.getComputedStyle(projectsTrackRef.current)
    const gap = parseFloat(style.gap) || 24
    return card.offsetWidth + gap
  }

  const updateProjectsSlider = (index, animate = true) => {
    if (!projectsTrackRef.current) return
    const stepWidth = getStepWidth()
    if (!animate) {
      projectsTrackRef.current.style.transition = "none"
    } else {
      projectsTrackRef.current.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
    }
    projectsTrackRef.current.style.transform = `translateX(-${index * stepWidth}px)`
  }

  const nextProjectSlide = () => {
    if (isProjectTransitioning) return
    setIsProjectTransitioning(true)
    setProjectIndex((prev) => {
      const next = prev + 1
      updateProjectsSlider(next, true)
      return next
    })
  }

  const prevProjectSlide = () => {
    if (isProjectTransitioning) return
    setIsProjectTransitioning(true)
    setProjectIndex((prev) => {
      if (prev === 0) {
        const resetIndex = totalOriginalProjects
        updateProjectsSlider(resetIndex, false)
        // Force reflow
        if (projectsTrackRef.current) projectsTrackRef.current.offsetHeight
        const prevIdx = resetIndex - 1
        updateProjectsSlider(prevIdx, true)
        return prevIdx
      } else {
        const prevIdx = prev - 1
        updateProjectsSlider(prevIdx, true)
        return prevIdx
      }
    })
  }

  // Handle transition end for seamless wrap around
  useEffect(() => {
    const track = projectsTrackRef.current
    if (!track) return

    const handleTransitionEnd = () => {
      setIsProjectTransitioning(false)
      if (projectIndex >= totalOriginalProjects) {
        setProjectIndex(0)
        updateProjectsSlider(0, false)
      }
    }

    track.addEventListener("transitionend", handleTransitionEnd)
    return () => track.removeEventListener("transitionend", handleTransitionEnd)
  }, [projectIndex])

  // Autoplay & touch handlers for Projects Slider
  useEffect(() => {
    const track = projectsTrackRef.current
    if (!track) return

    let autoPlayTimer = setInterval(nextProjectSlide, 3500)

    const wrapper = track.parentElement
    if (wrapper) {
      const handleMouseEnter = () => clearInterval(autoPlayTimer)
      const handleMouseLeave = () => {
        autoPlayTimer = setInterval(nextProjectSlide, 3500)
      }

      let touchStartX = 0
      let touchEndX = 0
      const handleTouchStart = (e) => {
        touchStartX = e.changedTouches[0].screenX
      }
      const handleTouchEnd = (e) => {
        touchEndX = e.changedTouches[0].screenX
        const swipeDistance = touchStartX - touchEndX
        if (Math.abs(swipeDistance) > 35) {
          if (swipeDistance > 0) {
            nextProjectSlide()
          } else {
            prevProjectSlide()
          }
        }
      }

      wrapper.addEventListener("mouseenter", handleMouseEnter)
      wrapper.addEventListener("mouseleave", handleMouseLeave)
      wrapper.addEventListener("touchstart", handleTouchStart, { passive: true })
      wrapper.addEventListener("touchend", handleTouchEnd, { passive: true })

      const handleResize = () => updateProjectsSlider(projectIndex, false)
      window.addEventListener("resize", handleResize)

      return () => {
        clearInterval(autoPlayTimer)
        wrapper.removeEventListener("mouseenter", handleMouseEnter)
        wrapper.removeEventListener("mouseleave", handleMouseLeave)
        wrapper.removeEventListener("touchstart", handleTouchStart)
        wrapper.removeEventListener("touchend", handleTouchEnd)
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [projectIndex, isProjectTransitioning])

  // 5. Services Mouse Spotlight & Dynamic Preview
  const servicesCardRef = useRef(null)
  const [activeServiceIndex, setActiveServiceIndex] = useState(0)

  const handleServicesMouseMove = (e) => {
    if (!servicesCardRef.current) return
    const rect = servicesCardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    servicesCardRef.current.style.setProperty("--mouse-x", `${x}px`)
    servicesCardRef.current.style.setProperty("--mouse-y", `${y}px`)
  }

  // 6. Testimonials Carousel State & Autoplay
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonialsData.length)
  }

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 4000)
    return () => clearInterval(timer)
  }, [])

  // 7. FAQ Accordion State
  const [activeFaqIndex, setActiveFaqIndex] = useState(0)

  const toggleFaq = (index) => {
    setActiveFaqIndex((prev) => (prev === index ? null : index))
  }

  // Render cloned project cards (first 3) for infinite loop
  const allProjectCards = [
    ...projectCardsData,
    ...projectCardsData.slice(0, 3).map((card) => ({ ...card, isClone: true }))
  ]

  const activeService = servicesData[activeServiceIndex]

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-card">
          <div className="hero-top-grid">
            {/* Left Hero Content */}
            <div className="hero-content">
              <h1 className="hero-title" data-animate="zoomIn">
                DESIGNED FOR DIGITAL{" "}
                <span className="highlight-badge" id="heroBadge">
                  {heroBadgeText}
                </span>
              </h1>
              <p className="hero-description" data-animate="fadeInUp">
                From UI/UX design and high-performance websites to SEO and Google Ads, we create digital
                solutions that attract, engage, and convert your audience.
              </p>
              <div className="hero-cta-group" data-animate="fadeInUp">
                <button
                  type="button"
                  className="btn btn-white"
                  onClick={() => setIsBookModalOpen(true)}
                  style={{ border: "none", cursor: "pointer" }}
                >
                  Book Service
                </button>
                <a href="#services" className="btn btn-outline">
                  View Services
                </a>
              </div>
            </div>

            {/* Right Hero Media */}
            <div className="hero-media-wrapper" data-animate="zoomIn">
              <div className="hero-image-container">
                <img src={skullHero} alt="Digital Marketing Agency Showcase" className="hero-img" />
              </div>
              <div className="tags-container">
                <span className="tag-pill">Digital Marketing</span>
                <span className="tag-pill">Web Designing</span>
                <span className="tag-pill">Web Development</span>
                <span className="tag-pill">SEO Services</span>
                <span className="tag-pill">Ads Services</span>
              </div>
            </div>
          </div>

          {/* Bottom Brands Section */}
          <div className="hero-brands-section" data-animate="zoomIn">
            <p className="brands-title">Trusted by top brands worldwide</p>
            <div className="marquee-container">
              <div className="marquee-track">
                <div className="marquee-content">
                  <img src={brand1} alt="Brand 1" className="brand-img" />
                  <img src={brand2} alt="Brand 2" className="brand-img" />
                  <img src={brand3} alt="Brand 3" className="brand-img" />
                  <img src={brand4} alt="Brand 4" className="brand-img" />
                  <img src={brand5} alt="Brand 5" className="brand-img" />
                  <img src={brand6} alt="Brand 6" className="brand-img" />
                  <img src={brand7} alt="Brand 7" className="brand-img" />
                </div>
                <div className="marquee-content" aria-hidden="true">
                  <img src={brand1} alt="Brand 1" className="brand-img" />
                  <img src={brand2} alt="Brand 2" className="brand-img" />
                  <img src={brand3} alt="Brand 3" className="brand-img" />
                  <img src={brand4} alt="Brand 4" className="brand-img" />
                  <img src={brand5} alt="Brand 5" className="brand-img" />
                  <img src={brand6} alt="Brand 6" className="brand-img" />
                  <img src={brand7} alt="Brand 7" className="brand-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact / Results Bento Grid Section */}
      <section className="impact-section" id="about" ref={impactRef}>
        <div className="impact-header" data-animate="fadeInUp">
          <div className="impact-title-box">
            <h2 className="impact-title">
              <span className="highlight-badge-white">Helping</span> Companies<br />
              grow beyond their Limits
            </h2>
          </div>
          <div className="impact-desc-box">
            <p className="impact-description">
              We pride ourselves on delivering impactful results. Our campaigns have achieved a 30% increase
              in client engagement, highlighting our digital marketing expertise. Join the successful agencies
              that trust us to enhance their brand presence.
            </p>
          </div>
        </div>

        <div className="bento-grid">
          {/* Left Tall Card */}
          <div className="bento-card bento-tall" data-animate="fadeInUp">
            <div className="card-top">
              <h3 className="card-heading">Client Engagement Boost</h3>
            </div>
            <div className="card-bottom">
              <div className="stat-value" data-target="80" data-suffix="%">
                {stat80}
              </div>
              <p className="stat-caption">Transforming engagement through innovative strategies and design.</p>
            </div>
          </div>

          {/* Right 2x2 Subgrid */}
          <div className="bento-subgrid">
            {/* Top-Left Stat Card */}
            <div className="bento-card" data-animate="fadeInUp">
              <div className="card-top">
                <h3 className="card-heading">Conversion Rate Increase</h3>
              </div>
              <div className="card-bottom">
                <div className="stat-value" data-target="95" data-suffix="%">
                  {stat95}
                </div>
                <p className="stat-caption">Driving conversions with targeted marketing campaigns.</p>
              </div>
            </div>

            {/* Top-Right Widget Card (Real-Time Performance Chart) */}
            <div className="bento-card bento-widget" data-animate="fadeInUp">
              <div className="card-top widget-header">
                <h3 className="card-heading">Performance</h3>
                <span className="pulse-badge">
                  <span className="pulse-dot"></span> +145% Growth
                </span>
              </div>
              <div className={`widget-body chart-widget ${isChartAnimated ? "animate-chart" : ""}`}>
                <svg viewBox="0 0 300 110" className="chart-svg" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    className="chart-fill"
                    d="M0,90 Q50,85 100,55 T200,45 T300,15 L300,110 L0,110 Z"
                    fill="url(#chartGlow)"
                  />
                  <path
                    className="chart-line"
                    d="M0,90 Q50,85 100,55 T200,45 T300,15"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <circle cx="200" cy="45" r="4.5" fill="#ffffff" />
                  <circle cx="300" cy="15" r="6" fill="#ffffff" />
                </svg>
              </div>
            </div>

            {/* Bottom-Left Widget Card (Campaign Channel Reach) */}
            <div className="bento-card bento-widget" data-animate="fadeInUp">
              <div className="card-top">
                <h3 className="card-heading">Campaign Channel Reach</h3>
              </div>
              <div className="widget-body metrics-widget">
                <div className="channel-metric">
                  <div className="metric-label">
                    <span>SEO Ranking Boost</span>
                    <span className="metric-pct">98%</span>
                  </div>
                  <div className="metric-track">
                    <div className="metric-fill" style={{ width: "98%" }}></div>
                  </div>
                </div>
                <div className="channel-metric">
                  <div className="metric-label">
                    <span>Social Reach</span>
                    <span className="metric-pct">92%</span>
                  </div>
                  <div className="metric-track">
                    <div className="metric-fill" style={{ width: "92%" }}></div>
                  </div>
                </div>
                <div className="channel-metric">
                  <div className="metric-label">
                    <span>Email CTR</span>
                    <span className="metric-pct">85%</span>
                  </div>
                  <div className="metric-track">
                    <div className="metric-fill" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom-Right Stat Card */}
            <div className="bento-card" data-animate="fadeInUp">
              <div className="card-top">
                <h3 className="card-heading">Successful Campaigns Delivered</h3>
              </div>
              <div className="card-bottom">
                <div className="stat-value" data-target="250" data-suffix="+">
                  {stat250}
                </div>
                <p className="stat-caption">Achieving success through strategic planning and execution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Mouse Spotlight & Dynamic Preview */}
      <section className="services-section" id="services">
        <div
          className="services-card"
          id="servicesCard"
          ref={servicesCardRef}
          onMouseMove={handleServicesMouseMove}
        >
          {/* Left Info Column */}
          <div className="services-left-col">
            <div className="services-title-wrapper" data-animate="fadeInUp">
              <h2 className="services-title">
                <span className="highlight-badge-white">Services</span> that<br />
                cover all Bases
              </h2>
            </div>

            {/* Dynamic Service Preview Panel */}
            <div className="service-preview-panel" id="servicePreviewPanel" data-animate="fadeInUp">
              <div className="preview-header">
                <span className="preview-num" id="previewNum">
                  {activeService.index}
                </span>
                <span className="preview-badge" id="previewBadge">
                  {activeService.badge}
                </span>
              </div>
              <h3 className="preview-title" id="previewTitle">
                {activeService.title}
              </h3>
              <p className="preview-desc" id="previewDesc">
                {activeService.desc}
              </p>
              <div className="preview-features" id="previewFeatures">
                {activeService.features.map((feat, fIdx) => (
                  <span className="feature-chip" key={fIdx}>
                    {feat}
                  </span>
                ))}
              </div>
              <button onClick={() => setIsBookModalOpen(true)} className="btn preview-cta" id="previewCta">
                Book Service
              </button>
            </div>
          </div>

          {/* Right Services Interactive List Column */}
          <div className="services-right-col">
            <ul className="services-interactive-list">
              {servicesData.map((item, index) => (
                <li
                  key={index}
                  className={`service-list-item ${activeServiceIndex === index ? "active" : ""}`}
                  data-animate="fadeInUp"
                  onMouseEnter={() => setActiveServiceIndex(index)}
                  onClick={() => setActiveServiceIndex(index)}
                >
                  <div className="item-main">
                    <span className="item-number">{item.index}</span>
                    <span className="item-name">{item.name}</span>
                  </div>
                  <span className="item-arrow">
                    <i className="fa-solid fa-arrow-trend-up"></i>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Animated Process Wheel Section */}
      <ProcessWheelSection />

      {/* Client Testimonials Slider Section */}
      <section className="testimonials-section" id="testimonials">
        <div className="testimonial-card-wrapper" data-animate="fadeInUp">
          <div className="testimonial-slider" id="testimonialSlider">
            {testimonialsData.map((item, idx) => (
              <div
                key={idx}
                className={`testimonial-slide ${idx === testimonialIndex ? "active" : ""}`}
              >
                <div className="testimonial-grid">
                  <div className="testimonial-media">
                    <img src={item.img} alt={`${item.name} Testimonial`} className="testimonial-img" />
                  </div>
                  <div className="testimonial-content">
                    <blockquote className="testimonial-quote">{item.quote}</blockquote>
                    <div className="client-badge">
                      <h4 className="client-name">{item.name}</h4>
                      <p className="client-role">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Controls Row */}
          <div className="testimonial-controls">
            <div className="dot-indicators" id="testimonialDots">
              {testimonialsData.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === testimonialIndex ? "active" : ""}`}
                  onClick={() => setTestimonialIndex(idx)}
                ></span>
              ))}
            </div>
            <div className="slider-arrows">
              <button
                className="slider-btn prev-btn"
                id="prevTestimonialBtn"
                aria-label="Previous Review"
                onClick={prevTestimonial}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button
                className="slider-btn next-btn"
                id="nextTestimonialBtn"
                aria-label="Next Review"
                onClick={nextTestimonial}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Agency Workflow Section ("What We Do") */}
      <section className="workflow-section">
        <div className="workflow-header" data-animate="fadeInUp">
          <h2 className="workflow-title">
            <span className="highlight-badge-white">How We Work</span> Digital Growth Engine
          </h2>
          <p className="workflow-subtitle">
            Our end-to-end framework engineered to transform brands through Web Design, Development, SEO, PPC
            Ads, and Digital Marketing.
          </p>
        </div>

        {/* Workflow Pipeline Steps Grid */}
        <div className="workflow-pipeline">
          <div className="workflow-beam"></div>

          <div className="workflow-step-card" data-animate="fadeInUp">
            <div className="step-badge">01</div>
            <div className="step-icon">
              <i className="fa-brands fa-figma"></i>
            </div>
            <h3 className="step-title">Web Design & UX</h3>
            <p className="step-desc">
              Crafting high-converting wireframes, visual design systems, and responsive user
              interfaces.
            </p>
          </div>

          <div className="workflow-step-card" data-animate="fadeInUp">
            <div className="step-badge">02</div>
            <div className="step-icon">
              <i className="fa-solid fa-code"></i>
            </div>
            <h3 className="step-title">Web Development</h3>
            <p className="step-desc">
              Building pixel-perfect, ultra-fast Webflow and Next.js digital platforms with
              seamless animations.
            </p>
          </div>

          <div className="workflow-step-card" data-animate="fadeInUp">
            <div className="step-badge">03</div>
            <div className="step-icon">
              <i className="fa-brands fa-sistrix"></i>
            </div>
            <h3 className="step-title">SEO Services</h3>
            <p className="step-desc">
              Dominated organic search rankings through technical SEO audits, keyword
              strategy, and backlinks.
            </p>
          </div>

          <div className="workflow-step-card" data-animate="fadeInUp">
            <div className="step-badge">04</div>
            <div className="step-icon">
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <h3 className="step-title">PPC Ads</h3>
            <p className="step-desc">
              Executing high-ROI Google & Meta ad campaigns targeted for immediate lead
              acquisition.
            </p>
          </div>

          <div className="workflow-step-card" data-animate="fadeInUp">
            <div className="step-badge">05</div>
            <div className="step-icon">
              <i className="fa-solid fa-bullhorn"></i>
            </div>
            <h3 className="step-title">Digital Marketing</h3>
            <p className="step-desc">
              Scaling lifecycle email automation, funnel retention, and brand strategy for
              long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* WORK TOGETHER CTA SECTION */}
      <section className="work-together-home-section" style={{ margin: "90px 0" }} data-animate="fadeInUp">
        <div className="work-together-card">
          <div>
            <h2 className="together-title">
              LET'S WORK <br />
              TOGETHER
            </h2>
            <p className="together-desc">
              Have an upcoming product launch, brand refresh, or aggressive
              scaling target? Partner with Skull Solution and command your market today.
            </p>
          </div>

          <div className="together-btn-group">
            <button
              type="button"
              className="btn-dark-solid"
              onClick={() => setIsBookModalOpen(true)}
              style={{ border: "none", cursor: "pointer" }}
            >
              Book Service
            </button>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faq-section" id="faq">
        <div className="faq-grid">
          {/* Left FAQ Info */}
          <div className="faq-info-col" data-animate="fadeInUp">
            <h2 className="faq-title">FAQs</h2>
            <p className="faq-subtitle">
              Discover answers to common questions about Skull Solution's services and how we can assist you.
            </p>
            <Link to="/contact" className="btn btn-white faq-cta">
              Get in Touch
            </Link>
          </div>

          {/* Right FAQ Accordion List */}
          <div className="faq-accordion-col">
            <div className="faq-accordion">
              <div
                className={`faq-item ${activeFaqIndex === 0 ? "active" : ""}`}
                data-animate="fadeInUp"
              >
                <div className="faq-question" onClick={() => toggleFaq(0)}>
                  <h3>What is digital marketing, and why is it important?</h3>
                  <span className="faq-toggle-icon">
                    {activeFaqIndex === 0 ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>
                    Digital marketing encompasses all online strategy designed to connect businesses with
                    targeted audiences. It is essential for modern brand visibility, customer
                    acquisition, and measurable ROI across search engines, social media, and paid ads.
                  </p>
                </div>
              </div>

              <div
                className={`faq-item ${activeFaqIndex === 1 ? "active" : ""}`}
                data-animate="fadeInUp"
              >
                <div className="faq-question" onClick={() => toggleFaq(1)}>
                  <h3>How does SEO impact my business growth?</h3>
                  <span className="faq-toggle-icon">
                    {activeFaqIndex === 1 ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>
                    SEO improves your search engine rankings, bringing high-intent organic traffic to
                    your website without ongoing ad spend. It builds brand authority and delivers
                    compound long-term growth.
                  </p>
                </div>
              </div>

              <div
                className={`faq-item ${activeFaqIndex === 2 ? "active" : ""}`}
                data-animate="fadeInUp"
              >
                <div className="faq-question" onClick={() => toggleFaq(2)}>
                  <h3>What is the difference between organic and paid marketing?</h3>
                  <span className="faq-toggle-icon">
                    {activeFaqIndex === 2 ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>
                    Organic marketing builds traffic over time through content, SEO, and community
                    engagement, while paid marketing (PPC, Meta Ads) yields immediate targeted traffic
                    and leads through direct ad investment.
                  </p>
                </div>
              </div>

              <div
                className={`faq-item ${activeFaqIndex === 3 ? "active" : ""}`}
                data-animate="fadeInUp"
              >
                <div className="faq-question" onClick={() => toggleFaq(3)}>
                  <h3>What makes a successful email marketing campaign?</h3>
                  <span className="faq-toggle-icon">
                    {activeFaqIndex === 3 ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>
                    A successful email campaign combines precise audience segmentation, compelling
                    copywriting, automated lifecycle flows, and continuous A/B testing to drive high
                    open and click-through rates.
                  </p>
                </div>
              </div>

              <div
                className={`faq-item ${activeFaqIndex === 4 ? "active" : ""}`}
                data-animate="fadeInUp"
              >
                <div className="faq-question" onClick={() => toggleFaq(4)}>
                  <h3>How do I know which digital marketing channels are right for my business?</h3>
                  <span className="faq-toggle-icon">
                    {activeFaqIndex === 4 ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>
                    We analyze your business model, target demographic, and revenue goals to build a
                    customized multi-channel strategy prioritizing the platforms that deliver maximum
                    ROI for your industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Service Modal */}
      <BookServiceModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
    </main>
  )
}

export default Home