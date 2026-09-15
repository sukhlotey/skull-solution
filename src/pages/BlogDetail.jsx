import { Link } from "react-router-dom";
import review1 from "../assets/review1.jpg";
import seoPro from "../assets/seo-pro.jpg";
import uiPro from "../assets/ui-pro.jpg";
import brandPro from "../assets/brand-pro.jpg";
import "./BlogDetail.css";

const BlogDetail = () => {
  return (
    <div className="blogdetail-page-section">
      {/* SECTION 1: CENTERED HEADER & AUTHOR */}
      <div className="bd-header-block">
        <div className="bd-meta-pill-bar">
          <span className="bd-category-pill">SEO Services</span>
          <span className="bd-date-text">Published on Oct 14, 2026</span>
        </div>

        <h1 className="bd-main-title">
          Crucial SEO Best Practices for Modern Businesses in Hyper-Competitive
          Industries
        </h1>

        <div className="bd-author-row">
          <img
            src={review1}
            alt="Emily Johnson"
            className="bd-author-avatar"
          />
          <div className="bd-author-info">
            <span className="bd-author-name">Emily Johnson</span>
            <span className="bd-author-role">CEO, Noira Marketing Co.</span>
          </div>
        </div>
      </div>

      {/* SECTION 2: HERO COVER IMAGE */}
      <div className="bd-cover-box">
        <img
          src={seoPro}
          alt="Crucial SEO Best Practices"
          className="bd-cover-img"
        />
      </div>

      {/* SECTION 3: ARTICLE BODY (SIDEBAR + CONTENT) */}
      <div className="bd-article-layout">
        {/* Left Sidebar */}
        <div className="bd-sidebar">
          <div className="bd-sidebar-block">
            <span className="bd-sidebar-label">READ TIME</span>
            <span className="bd-sidebar-val">8 Minutes Detailed</span>
          </div>

          <div className="bd-sidebar-block">
            <span className="bd-sidebar-label">SHARE ARTICLE</span>
            <div className="bd-share-icons">
              <a
                href="#"
                aria-label="Share on X"
                className="bd-share-btn"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="#"
                aria-label="Share on LinkedIn"
                className="bd-share-btn"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                aria-label="Share on Facebook"
                className="bd-share-btn"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Article Content */}
        <div className="bd-content-col">
          <p>
            In today's fast-paced digital marketplace, search engine
            optimization is no longer just a technical tickbox. It's a fundamental
            pillar of modern brand visibility. As search engines evolve to
            prioritize intent, semantics, and authentic context over keyword
            density, businesses must transform their SEO strategies accordingly.
          </p>

          <h2 className="bd-content-h2">
            1. Shifting From Keyword Strings to Semantic Intent
          </h2>

          <p>
            Search algorithms are intelligent enough to understand topics
            dynamically. This means structuring your content as authoritative
            topical hubs. Instead of targeting single phrases, focus on covering
            entire subject areas comprehensively to demonstrate complete subject
            mastery.
          </p>

          {/* QUOTE BOX */}
          <div className="bd-quote-box">
            "The finest search optimization is simply providing the single best
            absolute resource for the human on the other side of the screen."
          </div>

          <h2 className="bd-content-h2">
            2. Core Web Vitals and User Experience Mechanics
          </h2>

          <p>
            SEO cannot be separated from site performance. Fast load times,
            responsive interactive responsiveness, and layout stability aren't
            just details—they are heavy algorithmic ranking factors. Ensure
            your platform is optimized from code structure to media compression.
          </p>
        </div>
      </div>

      {/* SECTION 4: RELATED INSIGHTS */}
      <div className="bd-related-section">
        <div className="bd-related-header">
          <h2 className="bd-related-title">Related Insights</h2>
          <Link to="/blogs" className="btn-pill-outline" style={{ fontSize: "0.82rem", padding: "10px 22px" }}>
            View All Stories
          </Link>
        </div>

        <div className="bd-related-grid">
          {/* Related Card 1 */}
          <Link to="/blog-detail" className="bd-related-card">
            <div className="bd-related-img-box">
              <img
                src={uiPro}
                alt="The Ultimate Guide to Social Media Marketing"
                className="bd-related-img"
              />
            </div>
            <div className="bd-related-meta">
              <span className="bd-category-pill">Guides</span>
              <span className="bd-date-text">5 min read</span>
            </div>
            <h3 className="bd-related-card-title">
              The Ultimate Guide to Social Media Marketing
            </h3>
            <p className="bd-related-card-desc">
              Discover top social media marketing techniques to elevate your
              business and connect with your audience effectively.
            </p>
          </Link>

          {/* Related Card 2 */}
          <Link to="/blog-detail" className="bd-related-card">
            <div className="bd-related-img-box">
              <img
                src={brandPro}
                alt="Top Strategies for Email Marketing Campaigns"
                className="bd-related-img"
              />
            </div>
            <div className="bd-related-meta">
              <span className="bd-category-pill">AI & Data</span>
              <span className="bd-date-text">6 min read</span>
            </div>
            <h3 className="bd-related-card-title">
              Top Strategies for Email Marketing Campaigns
            </h3>
            <p className="bd-related-card-desc">
              Discover top strategies for successful email marketing campaigns
              that boost engagement and drive conversions.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
