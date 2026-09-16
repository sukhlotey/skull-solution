import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    let animObserver = null;

    const initScrollAnimations = () => {
      // Target elements with explicit data-animate or common section/card classes across all pages
      const selector = "[data-animate], .service-card-box, .pipeline-card, .work-project-card, .value-card, .mv-card, .about-hero-grid, .stats-bar-container, .philosophy-section, .mission-vision-section, .about-cta-card, .work-header-block, .results-section, .contact-card, .blogs-header-block, .blog-card, .sd-specialization-card, .sd-suite-card, .sd-hero-card";
      
      const animElements = document.querySelectorAll(selector);
      if (animElements.length === 0) return;

      const observerOptions = {
        root: null,
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.08
      };

      if (animObserver) {
        animObserver.disconnect();
      }

      animObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const animType = el.getAttribute("data-animate") || "fadeInUp";
            el.setAttribute("data-animated", "true");
            el.classList.add("animate__animated", `animate__${animType}`, "animated-show");
            observer.unobserve(el);
          }
        });
      }, observerOptions);

      animElements.forEach((el) => {
        if (!el.hasAttribute("data-animate")) {
          el.setAttribute("data-animate", "fadeInUp");
        }
        animObserver.observe(el);
      });
    };

    const timer = setTimeout(initScrollAnimations, 100);

    return () => {
      clearTimeout(timer);
      if (animObserver) animObserver.disconnect();
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
