import { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import "./Work.css";

const FILTER_TABS = [
  "ALL WORK",
  "UI/UX DESIGN",
  "WEBSITE DESIGN",
  "WORDPRESS",
  "DIGITAL MARKETING"
];

const PROJECTS_DATA = [
  {
    id: 1,
    num: "01.",
    title: "FCSW Community Platform",
    subtitle: "Empowering non-profit engagement through modern mobile UX and digital strategy",
    tags: ["UI", "Website Design", "WordPress"],
    img: project1
  },
  {
    id: 2,
    num: "02.",
    title: "Ocala Communications Portal",
    subtitle: "Helping this communications recruitment agency scale candidate reach by 168%",
    tags: ["Digital Marketing", "Website Design"],
    img: project2
  },
  {
    id: 3,
    num: "03.",
    title: "Print Scale Hub",
    subtitle: "High-performance Webflow storefront built for seamless custom merchandise orders",
    tags: ["Digital Marketing", "Website Design", "WordPress"],
    img: project3
  },
  {
    id: 4,
    num: "04.",
    title: "Boyd Commercial Real Estate",
    subtitle: "Showcasing over $2B+ in completed commercial property transactions nationwide",
    tags: ["UI", "Website Design", "WordPress"],
    img: project4
  },
  {
    id: 5,
    num: "05.",
    title: "Florida Bamboo Farming",
    subtitle: "Building organic search authority and direct inquiry leads for sustainable agriculture",
    tags: ["UI", "Website Design", "WordPress"],
    img: project5
  },
  {
    id: 6,
    num: "06.",
    title: "Poker Room Mobile Experience",
    subtitle: "Engaging gaming portal with high-converting mobile UI and player retention flows",
    tags: ["UI", "Website Design", "WordPress"],
    img: project6
  }
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("ALL WORK");

  // Filter project items based on active tab
  const filteredProjects = PROJECTS_DATA.filter((item) => {
    if (activeFilter === "ALL WORK") return true;
    return item.tags.some(tag => tag.toUpperCase() === activeFilter || (activeFilter === "UI/UX DESIGN" && tag === "UI"));
  });

  return (
    <div className="work-page-section">
      {/* HERO HEADER */}
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

      {/* 2-COLUMN PROJECTS GRID (MATCHING DESIGN) */}
      <div className="work-projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="work-project-card">
            <div className="work-project-media">
              <img src={project.img} alt={project.title} className="work-project-img" />
            </div>
            <div className="work-project-info">
              <h3 className="work-project-title">
                <span className="work-project-num">{project.num}</span> {project.title} <span className="work-project-dash">—</span>
              </h3>
              <p className="work-project-subtitle">{project.subtitle}</p>
              <div className="work-project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="work-project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RESULTS BAR & CTA */}
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
