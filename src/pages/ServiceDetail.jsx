import { useState } from "react";
import uiPro from "../assets/ui-pro.jpg";
import devPro from "../assets/dev-pro.jpg";
import brandPro from "../assets/brand-pro.jpg";
import {Link} from "react-router-dom";
import "./ServiceDetail.css";

const SPECIALIZATIONS_DATA = [
  {
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "Custom Website Design",
    desc: "Get a website designed specifically for your business. We create unique layouts, visual styles, and user experiences tailored to your brand rather than relying on generic templates.",
    pills: []
  },
  {
    icon: "fa-solid fa-building-user",
    title: "Business Website Design",
    desc: "Build a strong online presence for your company with a professional business website that clearly showcases your services, expertise, achievements, and contact information.",
    pills: ["Startups", "Service Providers", "Corporate Companies", "Consultants", "Local Businesses"]
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "Responsive Website Design",
    desc: "Your customers browse from smartphones, tablets, laptops, and desktops. We design websites that automatically adapt to different screen sizes, providing a smooth and consistent experience across every device.",
    pills: []
  },
  {
    icon: "fa-solid fa-cart-shopping",
    title: "eCommerce Website Design",
    desc: "Turn your website into a high-converting online storefront with seamless shopping journeys.",
    pills: ["Product Catalogues", "Checkout Optimization", "Payment Gateways", "Order Management", "Customer Accounts"]
  },
  {
    icon: "fa-solid fa-bullseye",
    title: "Landing Page Design",
    desc: "Running Google Ads, Meta Ads, or marketing campaigns? We design high-converting landing pages that maximize campaign ROI.",
    pills: ["Click", "Request", "Book", "Register", "Buy", "Request a Quote"]
  },
  {
    icon: "fa-solid fa-sliders",
    title: "WordPress / Website Redesign",
    desc: "Redesign your outdated or slow website to align with modern design standards, improved user navigation, faster loading speeds, and higher conversion rates.",
    pills: []
  }
];

const SUITE_ITEMS = [
  {
    icon: "fa-solid fa-palette",
    title: "Modern UI/UX Design",
    desc: "Clean layouts and intuitive navigation designed around the user journey."
  },
  {
    icon: "fa-solid fa-mobile-screen",
    title: "Mobile-Friendly Design",
    desc: "A seamless browsing experience across smartphones, tablets, and desktops."
  },
  {
    icon: "fa-solid fa-bolt",
    title: "Fast Loading Pages",
    desc: "Optimized assets and clean code designed to improve website speed and performance."
  },
  {
    icon: "fa-solid fa-magnifying-glass",
    title: "SEO-Friendly Structure",
    desc: "Search-engine-friendly page hierarchy, meta tags, heading tags, and clean URLs."
  },
  {
    icon: "fa-solid fa-user-plus",
    title: "Lead Generation Forms",
    desc: "Strategically placed inquiry and contact forms to capture potential customers."
  },
  {
    icon: "fa-brands fa-whatsapp",
    title: "WhatsApp Integration",
    desc: "Allow customers to start instant conversations with your business directly from your website."
  },
  {
    icon: "fa-solid fa-share-nodes",
    title: "Social Media Integration",
    desc: "Connect your website with Instagram, Facebook, LinkedIn, YouTube, and X platforms."
  },
  {
    icon: "fa-solid fa-map-location-dot",
    title: "Google Maps Integration",
    desc: "Help customers easily find your physical business locations."
  },
  {
    icon: "fa-solid fa-newspaper",
    title: "Blog Integration",
    desc: "Publish educational, informative, and SEO-focused content directly on your website."
  },
  {
    icon: "fa-solid fa-bullhorn",
    title: "Strong Calls to Action",
    desc: "Strategic buttons and prompts that guide visitors toward taking the next step."
  }
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc: "We understand your business, audience, services, goals, competitors, and website requirements."
  },
  {
    num: "02",
    title: "Planning",
    desc: "We create the website structure, page hierarchy, content flow, and navigation strategy."
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "Our designers create modern page layouts that balance aesthetics with usability."
  },
  {
    num: "04",
    title: "Development",
    desc: "The approved design is converted into a fully functional and responsive website."
  },
  {
    num: "05",
    title: "Testing",
    desc: "We test the website across different devices, screen sizes, browsers, links, forms, and important functionality."
  },
  {
    num: "06",
    title: "Launch",
    desc: "Once everything is approved, your website is prepared for launch."
  }
];

const INDUSTRIES_LIST = [
  "Healthcare & Clinics",
  "Gyms & Fitness Centers",
  "Salons & Spas",
  "Education & Training Institutes",
  "Restaurants & Hospitality",
  "Real Estate",
  "Automotive Businesses",
  "Legal Services",
  "Pet Care Businesses",
  "Retail & eCommerce",
  "Construction & Interior Design",
  "Professional Services",
  "Technology Companies",
  "Startups",
  "And many more..."
];

const ADVANTAGES_LIST = [
  {
    title: "Creative & Professional Design",
    desc: "Every website is designed to look polished, modern, and aligned with your brand."
  },
  {
    title: "Conversion-Focused Approach",
    desc: "We strategically structure pages to encourage inquiries, calls, purchases, bookings, and other important actions."
  },
  {
    title: "User-Friendly Experience",
    desc: "Clear navigation and thoughtfully organized content help visitors find information without confusion."
  },
  {
    title: "Mobile-First Thinking",
    desc: "Your website is designed with today's mobile-first customers in mind."
  },
  {
    title: "SEO-Ready Foundation",
    desc: "We build websites with a structure that can support your long-term search engine optimization efforts."
  },
  {
    title: "Scalable Website Design",
    desc: "As your business grows, your website can expand with additional pages, services, products, blogs, locations, and functionality."
  }
];

const ASSETS_LIST = [
  {
    title: "Build Trust",
    desc: "Create a professional digital presence customers can confidently engage with."
  },
  {
    title: "Generate Leads",
    desc: "Turn website visitors into genuine business inquiries."
  },
  {
    title: "Showcase Your Services",
    desc: "Present your products and services clearly and professionally."
  },
  {
    title: "Strengthen Your Brand",
    desc: "Maintain a consistent visual identity throughout your digital presence."
  },
  {
    title: "Support Marketing Campaigns",
    desc: "Give your SEO, Google Ads, Meta Ads, and social media campaigns a stronger destination."
  }
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

const ServiceDetail = () => {
  // FAQ Accordion state
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="servicedetail-page-section">
      {/* SECTION 1: HERO */}
      <div className="sd-hero-grid">
        <div className="sd-hero-left">
          <div className="sd-badge-tag">WEBSITE DESIGNING SERVICES</div>
          <h1 className="sd-hero-title">
            Websites Designed to Impress. <br />
            Built to Perform.
          </h1>
          <p className="sd-hero-desc">
            Your website is often the first interaction customers have with
            your business. Make that first impression count. We create
            modern, responsive, fast, and conversion-focused websites that
            represent your brand professionally and help turn visitors into
            customers.
          </p>
          <div className="sd-hero-subnote">
            Beautiful Design. Seamless Experience. Better Results. <br />
            Whether you need a simple business website, an eCommerce store, a
            landing page, or a completely custom website, our web design team
            brings your vision to life.
          </div>

          <div className="sd-btn-group">
            <a href="/appointment" className="btn-pill-solid">
              Get Your Website Designed
            </a>
            <a href="/contact" className="btn-pill-outline">
              Request a Free Consultation
            </a>
          </div>
        </div>

        <div className="sd-hero-media-box">
          <img
            src={devPro}
            alt="Websites Designed to Impress"
            className="sd-hero-img"
          />
        </div>
      </div>

      {/* SECTION 2: SHOWCASE */}
      <div className="sd-showcase-section">
        <div className="sd-showcase-img-box">
          <img
            src={uiPro}
            alt="Build a Website That Works"
            className="sd-showcase-img"
          />
        </div>

        <div className="sd-showcase-content">
          <div className="sd-badge-tag">CUSTOM WEB FEATURES</div>
          <h2 className="sd-showcase-title">
            Build a Website That Works for Your Business
          </h2>
          <p className="sd-showcase-text">
            A great website should do more than just look attractive. It should
            communicate your message clearly, make it easy for customers to find
            what they need, and encourage them to take action.
          </p>
          <div className="sd-highlight-text">
            Our website designing services combine <strong>creative design</strong>,{" "}
            <strong>smart functionality</strong>, <strong>responsive layouts</strong>,{" "}
            <strong>SEO-friendly structure</strong>, and{" "}
            <strong>user-focused experiences</strong> to build websites that
            support your business goals. From the first concept to the final launch,
            every element is carefully designed around your brand and your audience.
          </div>
        </div>
      </div>

      {/* SECTION 3: SPECIALIZATIONS */}
      <div className="sd-specs-section">
        <div className="sd-section-header">
          <div className="sd-badge-tag">SPECIALIZATIONS</div>
          <h2 className="sd-section-title">Our Website Designing Services</h2>
          <p className="sd-section-subtitle">
            Tailored digital solutions built from the ground up to achieve
            outstanding business performance.
          </p>
        </div>

        <div className="sd-specs-grid">
          {SPECIALIZATIONS_DATA.map((item, index) => (
            <div key={index} className="sd-spec-card">
              <div className="sd-card-icon-box">
                <i className={item.icon}></i>
              </div>
              <h3 className="sd-card-title">{item.title}</h3>
              <p className="sd-card-desc">{item.desc}</p>
              {item.pills.length > 0 && (
                <div className="sd-card-pills">
                  {item.pills.map((pill, pIdx) => (
                    <span key={pIdx} className="sd-pill-tag">
                      {pill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: FULL SUITE */}
      <div className="sd-suite-section">
        <div className="sd-section-header">
          <div className="sd-badge-tag">FULL SUITE</div>
          <h2 className="sd-section-title">Everything Your Website Needs</h2>
          <p className="sd-section-subtitle">
            Our websites are crafted to be robust assets, packed with vital
            integrations and technical foundations.
          </p>
        </div>

        <div className="sd-suite-grid">
          {SUITE_ITEMS.map((item, index) => (
            <div key={index} className="sd-suite-item">
              <div className="sd-suite-icon">
                <i className={item.icon}></i>
              </div>
              <div>
                <h3 className="sd-suite-title">{item.title}</h3>
                <p className="sd-suite-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: DESIGNED AROUND YOUR BRAND */}
      <div className="sd-brand-section">
        <div className="sd-brand-content">
          <div className="sd-badge-tag">NO TEMPLATES</div>
          <h2 className="sd-section-title" style={{ textAlign: "left" }}>
            Designed Around Your Brand
          </h2>
          <p className="sd-hero-desc">
            We don't believe every business should have the same-looking website.
            Before designing, we understand your core dynamics:
          </p>
          <div className="sd-brand-pills">
            <span className="sd-brand-pill">Brand</span>
            <span className="sd-brand-pill">Audience</span>
            <span className="sd-brand-pill">Services</span>
            <span className="sd-brand-pill">Competitors</span>
            <span className="sd-brand-pill">Goals</span>
            <span className="sd-brand-pill">Industry</span>
          </div>
          <p className="sd-hero-desc">
            We then develop a visual direction using suitable typography, layouts,
            imagery, brand colors, and messaging to create a website that feels
            genuinely connected to your business.
          </p>
        </div>

        <div className="sd-hero-media-box">
          <img
            src={brandPro}
            alt="Designed Around Your Brand"
            className="sd-hero-img"
          />
        </div>
      </div>

      {/* SECTION 6: WEBSITE DESIGN PROCESS */}
      <div className="sd-process-section">
        <div className="sd-section-header">
          <div className="sd-badge-tag">OUR WORKFLOW</div>
          <h2 className="sd-section-title">Our Website Design Process</h2>
          <p className="sd-section-subtitle">
            A systematic, rigorous development life cycle optimized for swift
            execution and launch.
          </p>
        </div>

        <div className="sd-process-grid">
          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="sd-process-card">
              <span className="sd-process-num">{step.num}</span>
              <h3 className="sd-card-title">{step.title}</h3>
              <p className="sd-card-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 7: WEBSITES FOR EVERY INDUSTRY */}
      <div className="sd-industry-section">
        <div className="sd-badge-tag">VERSATILITY</div>
        <h2 className="sd-section-title">Websites for Every Industry</h2>
        <p className="sd-section-subtitle">
          We create optimized digital experiences for businesses across all
          commercial sectors.
        </p>

        <div className="sd-industry-pills">
          {INDUSTRIES_LIST.map((ind, index) => (
            <span key={index} className="sd-industry-pill">
              {ind}
            </span>
          ))}
        </div>
      </div>

      {/* SECTION 8: WHY CHOOSE US & STRONGEST ASSET (2 COLUMNS) */}
      <div className="sd-advantages-section">
        {/* Left Column */}
        <div>
          <div className="sd-badge-tag">OUR ADVANTAGES</div>
          <h2 className="sd-section-title" style={{ textAlign: "left", marginBottom: "28px" }}>
            Why Choose Us for Website Designing?
          </h2>
          <div>
            {ADVANTAGES_LIST.map((adv, index) => (
              <div key={index} className="sd-advantage-item">
                <div className="sd-check-icon">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div>
                  <h3 className="sd-suite-title">{adv.title}</h3>
                  <p className="sd-suite-desc">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div>
          <div className="sd-badge-tag">YOUR STRONGEST ASSET</div>
          <h2 className="sd-section-title" style={{ textAlign: "left", marginBottom: "16px" }}>
            More Than Just a Good-Looking Website
          </h2>
          <p className="sd-hero-desc" style={{ marginBottom: "24px" }}>
            A website should become one of your strongest business assets. We
            focus on creating websites that help you achieve key commercial
            parameters:
          </p>

          <div>
            {ASSETS_LIST.map((asset, index) => (
              <div key={index} className="sd-asset-card">
                <h3 className="sd-asset-card-title">{asset.title}</h3>
                <p className="sd-asset-card-desc">{asset.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 9: INTEGRATED FAQ SECTION */}
      <section className="faq-section" id="faq" style={{ marginTop: "60px", marginBottom: "80px" }}>
        <div className="faq-grid">
          {/* Left FAQ Info */}
          <div className="faq-info-col">
            <h2 className="faq-title">FAQs</h2>
            <p className="faq-subtitle">
              Discover answers to common questions about Skull Solution's
              services and how we can assist you.
            </p>
            <Link to="/contact" className="btn btn-white faq-cta">
              Get in Touch
            </Link>
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

      {/* SECTION 10: BOTTOM CTA */}
      <div className="sd-cta-card">
        <div>
          <h2 className="sd-cta-title">
            Ready to Build a High-Performing Website?
          </h2>
          <p className="sd-cta-desc">
            Let's discuss your project requirements and map out a custom digital
            solution.
          </p>
        </div>
        <div className="sd-btn-group">
          <Link to="/servicebook" className="btn-pill-solid">
            Get Started Now
          </Link>
          <Link to="/contact" className="btn-pill-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
