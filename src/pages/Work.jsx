import { useState } from "react";
import brandPro from "../assets/brand-pro.jpg";
import digiPro from "../assets/digi-pro.jpg";
import skullHero from "../assets/skull-hero.png";
import seoPro from "../assets/seo-pro.jpg";
import uiPro from "../assets/ui-pro.jpg";
import adPro from "../assets/ad-pro.jpg";
import "./Work.css";

const FILTER_TABS = [
  "ALL WORK",
  "SEO SERVICES",
  "SOCIAL MEDIA",
  "BRAND STRATEGY",
  "EMAIL MARKETING",
  "CONTENT CREATION"
];

const CASE_STUDIES_DATA = [
  {
    id: 1,
    title: "Accelerating E-commerce Scale for High-End Retail",
    desc: "We restructured their organic keyword footprint and modernized category UX, leading to a massive increase in organic transactions.",
    badge: "+245% Revenue",
    tags: ["BRAND STRATEGY", "SEO SERVICES"],
    img: brandPro,
    row: 1
  },
  {
    id: 2,
    title: "Hyper-Growth Launch Tactics for Fintech App",
    desc: "A multi-channel digital launch built around community-focused social media strategies and segmented product loops.",
    badge: "125K Signups",
    tags: ["SOCIAL MEDIA", "EMAIL MARKETING"],
    img: digiPro,
    row: 1
  },
  {
    id: 3,
    title: "Redefining Search Presence and Authority for Enterprise SaaS Partners",
    desc: "Crafting authoritative long-form content hubs coupled with technical backlink strategies. We helped them dominate competitive enterprise queries within six months, cutting customer acquisition cost significantly.",
    badge: "3.2M Active Investors",
    tags: ["SEO SERVICES", "CONTENT CREATION", "BRAND STRATEGY"],
    img: skullHero,
    row: 2
  },
  {
    id: 4,
    title: "Lifecycle Retention Loops",
    desc: "Automated flows tailored to user behaviors that minimized checkout drop-offs.",
    badge: "+18% Open Rate",
    tags: ["EMAIL MARKETING"],
    img: seoPro,
    row: 3
  },
  {
    id: 5,
    title: "Rebranding Wellness Studio",
    desc: "Positioning a boutique health brand for global expansion through high-end digital styling.",
    badge: "2X Store Sales",
    tags: ["BRAND STRATEGY"],
    img: adPro,
    row: 3
  },
  {
    id: 6,
    title: "UGC Content Engine",
    desc: "Structuring scaled-video production systems to power TikTok and Reel advertisements.",
    badge: "15M+ Views",
    tags: ["CONTENT CREATION"],
    img: uiPro,
    row: 3
  }
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("ALL WORK");

  // Filter project items based on active tab
  const filteredProjects = CASE_STUDIES_DATA.filter((item) => {
    if (activeFilter === "ALL WORK") return true;
    return item.tags.includes(activeFilter);
  });

  const row1Items = filteredProjects.filter((item) => item.row === 1);
  const row2Items = filteredProjects.filter((item) => item.row === 2);
  const row3Items = filteredProjects.filter((item) => item.row === 3);

  return (
    <div className="work-page-section">
      {/* SECTION 1: HERO HEADER */}
      <div className="work-header-block">
        <h1 className="work-hero-title">
          OUR CREATIVE <br />
          <span className="highlight-badge-pill">SHOWCASE.</span> PROJECTS
        </h1>

        <p className="work-hero-desc">
          Explore how we help global brands scale customer acquisition, boost
          organic search traffic, and design award-winning digital campaigns.
        </p>

        {/* FILTER CATEGORY PILLS */}
        <div className="work-filter-bar">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`work-filter-btn ${
                activeFilter === tab ? "active" : ""
              }`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 2: CASE STUDIES GRID */}
      {/* ROW 1: 2 CARDS */}
      {row1Items.length > 0 && (
        <div className="work-grid-row1">
          {row1Items.map((item) => (
            <div key={item.id} className="work-card">
              <div className="work-card-media-box">
                <img src={item.img} alt={item.title} className="work-card-img" />
                <span className="work-stat-badge">{item.badge}</span>
              </div>
              <div className="work-card-body">
                <div>
                  <div className="work-card-tags" style={{ marginBottom: "10px" }}>
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="work-mini-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="work-card-title">{item.title}</h3>
                  <p className="work-card-desc" style={{ marginTop: "8px" }}>
                    {item.desc}
                  </p>
                </div>
                <a href="/service-detail" className="work-card-link">
                  <span>Read Case Study</span>
                  <i className="fa-solid fa-chevron-right" style={{ fontSize: "0.75rem" }}></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ROW 2: FULL WIDTH CARD */}
      {row2Items.length > 0 && (
        <div className="work-grid-row2">
          {row2Items.map((item) => (
            <div key={item.id} className="work-card">
              <div className="work-card-media-box full-height">
                <img src={item.img} alt={item.title} className="work-card-img" />
                <span className="work-stat-badge">{item.badge}</span>
              </div>
              <div className="work-card-body">
                <div>
                  <div className="work-card-tags" style={{ marginBottom: "10px" }}>
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="work-mini-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="work-card-title" style={{ fontSize: "1.5rem" }}>
                    {item.title}
                  </h3>
                  <p className="work-card-desc" style={{ marginTop: "8px" }}>
                    {item.desc}
                  </p>
                </div>
                <a href="/service-detail" className="work-card-link">
                  <span>Read Case Study</span>
                  <i className="fa-solid fa-chevron-right" style={{ fontSize: "0.75rem" }}></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ROW 3: 3 CARDS */}
      {row3Items.length > 0 && (
        <div className="work-grid-row3">
          {row3Items.map((item) => (
            <div key={item.id} className="work-card">
              <div className="work-card-media-box">
                <img src={item.img} alt={item.title} className="work-card-img" />
                <span className="work-stat-badge">{item.badge}</span>
              </div>
              <div className="work-card-body">
                <div>
                  <div className="work-card-tags" style={{ marginBottom: "10px" }}>
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="work-mini-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="work-card-title">{item.title}</h3>
                  <p className="work-card-desc" style={{ marginTop: "8px" }}>
                    {item.desc}
                  </p>
                </div>
                <a href="/service-detail" className="work-card-link">
                  <span>Read Case Study</span>
                  <i className="fa-solid fa-chevron-right" style={{ fontSize: "0.75rem" }}></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SECTION 3: RESULTS BAR & CTA */}
      <div className="results-section">
        <div className="results-top-row">
          <div>
            <h2 className="results-title">
              RESULTS BUILT ON SCIENTIFIC PRECISION
            </h2>
            <p className="results-desc">
              We don't believe in vanity metrics. We measure our accomplishments
              by client profitability and long-term brand equity.
            </p>
          </div>
          <a href="/contact" className="btn-pill-solid">
            Become Our Partner
          </a>
        </div>

        <div className="results-grid">
          <div className="result-stat-card">
            <span className="result-big-num">120%</span>
            <p className="result-label">
              Average ROI increase across past e-commerce clients.
            </p>
          </div>
          <div className="result-stat-card">
            <span className="result-big-num">250+</span>
            <p className="result-label">
              High-converting campaigns executed globally.
            </p>
          </div>
          <div className="result-stat-card">
            <span className="result-big-num">$45M+</span>
            <p className="result-label">
              Ad spend optimized under our direct management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
