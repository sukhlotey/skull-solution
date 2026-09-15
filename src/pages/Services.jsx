import { Link } from "react-router-dom";
import "./Services.css";

const COMPETENCIES_DATA = [
  {
    icon: "fa-solid fa-magnifying-glass-chart",
    tags: ["On-Page", "Technical", "Keywords"],
    title: "Search Engine Optimization",
    desc: "Dominate search ranks through state-of-the-art structural audits, strategic backlink pipelines, and user-intent-driven optimization protocols.",
    statValue: "3.2x",
    statLabel: "ORGANIC TRAFFIC GROWTH"
  },
  {
    icon: "fa-solid fa-share-nodes",
    tags: ["PPC Ads", "Organic", "Retention"],
    title: "Social Media Management",
    desc: "Build highly-engaged digital communities. We engineer platform-specific narratives that turn casual scrollers into hyper-loyal customers.",
    statValue: "94%",
    statLabel: "AVG ENGAGEMENT BOOST"
  },
  {
    icon: "fa-regular fa-paper-plane",
    tags: ["Automation", "Retention", "Funnels"],
    title: "Conversion Email Marketing",
    desc: "Turn passive leads into active buyers. We deploy advanced cohort segmentation, high-integrity copy, and hyper-targeted retention flows.",
    statValue: "30%",
    statLabel: "ATTRIBUTED REVENUE SHARE"
  },
  {
    icon: "fa-solid fa-bullseye",
    tags: ["Google Ads", "Bidding", "Retargeting"],
    title: "Pay Per Click",
    desc: "Acquire high-intent traffic with surgical precision. We optimize ad groups, landing pages, and bidding logic for maximum ROI efficiency.",
    statValue: "3.4x",
    statLabel: "AVERAGE AD ROAS"
  },
  {
    icon: "fa-solid fa-chart-line",
    tags: ["Meta Ads", "Google PPC", "Targeting"],
    title: "Performance Marketing",
    desc: "Maximize ROAS through systemic testing. We treat advertising budgets as mathematical formulas, scaling performance while securing yield.",
    statValue: "4.8x",
    statLabel: "AVERAGE CAMPAIGN ROAS"
  },
  {
    icon: "fa-solid fa-gem",
    tags: ["Assets", "Positioning", "Visual Identity"],
    title: "Brand Strategy & Architecture",
    desc: "Position your startup for ultimate enterprise-tier scaling. We establish premium narratives, custom token frameworks, and structural authority.",
    statValue: "100%",
    statLabel: "MARKET ALIGNMENT SCORE"
  },
  {
    icon: "fa-solid fa-desktop",
    tags: ["UI/UX", "Responsive", "Conversion"],
    title: "Website Designing",
    desc: "Build high-performance digital storefronts that convert. We combine premium visual systems with conversion-led layouts and seamless user journeys.",
    statValue: "2.5x",
    statLabel: "CONVERSION RATE LIFT"
  },
  {
    icon: "fa-solid fa-code",
    tags: ["Custom", "Webflow", "Scalability"],
    title: "Custom Software Designing",
    desc: "Design tailored software experiences that solve complex operational bottlenecks. We merge intuitive interfaces with robust technical architecture.",
    statValue: "98%",
    statLabel: "UPTIME RELIABILITY"
  },
  {
    icon: "fa-solid fa-rectangle-ad",
    tags: ["Paid Ads", "Hyper-Growth", "Omnichannel"],
    title: "Social Media Ads Marketing",
    desc: "Drive measurable conversion impact with paid-first campaigns. We optimize for reach, engagement, and high-intent conversion across every platform.",
    statValue: "6.2x",
    statLabel: "AD REACH EXPANSION"
  }
];

const PIPELINE_STEPS = [
  {
    num: "01",
    title: "Discovery Audit",
    desc: "We map out competitive voids, capture latent market trends, and thoroughly dissect your present pipeline metrics."
  },
  {
    num: "02",
    title: "Strategic Blueprint",
    desc: "Custom-modelled funnels designed entirely around mathematical cost-per-acquisition efficiency and ROAS targets."
  },
  {
    num: "03",
    title: "High-Velocity Execution",
    desc: "Rapid deployment of creative assets, landing pages, tracking pixels, and highly refined target cohort sets."
  },
  {
    num: "04",
    title: "Continuous Scale",
    desc: "Constant refinement of parameters through statistically significant split testing, scaling budgets symmetrically."
  }
];

const Services = () => {
  return (
    <div className="services-page-section">
      {/* SECTION 1: HERO */}
      <div className="services-hero-block">
        <div className="services-hero-content">
          <div className="services-subhead-tag">CAPABILITIES STATEMENT</div>
          <h1 className="services-hero-title">
            Precision Growth Systems for <br />
            <span className="highlight-badge-pill">Modern Enterprises.</span>
          </h1>
          <p className="services-hero-desc">
            No templates, no assumptions. We engineer data-driven digital
            pipelines designed exclusively to elevate your online footprint,
            drive high-intent conversions, and scale your brand.
          </p>
        </div>

        <div className="services-hero-actions">
          <Link to="/contact" className="btn-pill-solid">
            Get in Touch
          </Link>
          <Link to="/appointment" className="btn-pill-outline">
            View Pricing
          </Link>
        </div>
      </div>

      {/* SECTION 2: CORE COMPETENCIES GRID */}
      <div className="competencies-header">
        <h2 className="competencies-title">Our Core Competencies</h2>
        <span className="competencies-count-tag">
          Showing 9 Specialized Solutions
        </span>
      </div>

      <div className="competencies-grid">
        {COMPETENCIES_DATA.map((item, index) => (
          <div key={index} className="service-card-box">
            <div className="service-card-top">
              <div className="service-card-icon-box">
                <i className={item.icon}></i>
              </div>
              <div className="service-card-tags">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="mini-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="service-card-middle">
              <h3 className="service-card-heading">
                <Link to="/service-detail" style={{ color: "inherit", textDecoration: "none" }}>
                  {item.title}
                </Link>
              </h3>
              <p className="service-card-desc">{item.desc}</p>
            </div>

            <div className="service-card-bottom">
              <div>
                <span className="stat-value-big">{item.statValue}</span>
                <span className="stat-label-muted">{item.statLabel}</span>
              </div>
              <Link
                to="/service-detail"
                className="service-arrow-btn"
                title="View Service Details"
                aria-label="View Service Details"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* SECTION 3: EXECUTION PIPELINE */}
      <div className="pipeline-section">
        <div className="pipeline-header">
          <div className="pipeline-header-left">
            <div className="services-subhead-tag">EXECUTION PIPELINE</div>
            <h2 className="services-hero-title" style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}>
              How We Drive Predictable Performance
            </h2>
          </div>
          <p className="pipeline-header-right">
            We deploy a continuous loop of diagnostics, modeling, and rigorous
            testing. This guarantees zero ad budget waste and keeps your
            acquisition cost at an absolute minimum.
          </p>
        </div>

        <div className="pipeline-grid">
          {PIPELINE_STEPS.map((step, sIdx) => (
            <div key={sIdx} className="pipeline-card">
              <span className="pipeline-number">{step.num}</span>
              <h3 className="pipeline-card-title">{step.title}</h3>
              <p className="pipeline-card-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: WORK TOGETHER CONTAINER */}
      <div className="work-together-card">
        <div>
          <h2 className="together-title">
            LET'S WORK <br />
            TOGETHER
          </h2>
          <p className="together-desc">
            Have an upcoming product launch, brand refresh, or aggressive
            scaling target? Partner with Noira and command your market today.
          </p>
        </div>

        <div className="together-btn-group">
          <a href="/appointment" className="btn-dark-solid">
            Book a Strategy Call
          </a>
          <a href="/contact" className="btn-dark-outline">
            Download Pitch Deck
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
