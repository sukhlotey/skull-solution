import { Link } from "react-router-dom";
import blogImg from "../assets/blog.png";
import seoPro from "../assets/seo-pro.jpg";
import brandPro from "../assets/brand-pro.jpg";
import uiPro from "../assets/ui-pro.jpg";
import "./Blogs.css";

const PUBLICATIONS_DATA = [
  {
    id: 1,
    tag: "AI & Data",
    readTime: "6 min read",
    title: "Top Strategies for Email Marketing Campaigns",
    excerpt: "Discover top strategies for successful email marketing campaigns that boost engagement and drive conversions.",
    img: seoPro
  },
  {
    id: 2,
    tag: "Best Practices",
    readTime: "8 min read",
    title: "Crucial SEO Best Practices for Modern Businesses",
    excerpt: "Discover essential SEO best practices to boost your business visibility and drive growth in the digital landscape.",
    img: brandPro
  },
  {
    id: 3,
    tag: "Guides",
    readTime: "5 min read",
    title: "The Ultimate Guide to Social Media Marketing",
    excerpt: "Discover top social media marketing techniques to elevate your business and connect with your audience effectively.",
    img: uiPro
  }
];

const Blogs = () => {
  return (
    <div className="blogs-page-section">
      {/* SECTION 1: HERO HEADER */}
      <div className="blogs-header-block">
        <h1 className="blogs-hero-title">
          INSIGHTS FROM <br />
          <span className="highlight-badge-pill">OUR EXPERTS</span>
        </h1>

        <p className="blogs-hero-desc">
          Explore our latest industry insights, strategic deep-dives, and
          cutting-edge digital marketing methodologies.
        </p>
      </div>

      {/* SECTION 2: FEATURED ARTICLE */}
      <div className="blogs-section-label">FEATURED ARTICLE</div>

      <Link to="/blog-detail" className="featured-article-card">
        <div className="featured-img-box">
          <img
            src={blogImg}
            alt="The Evolution of Brand Identity in the Decentralized Web"
            className="featured-img"
          />
        </div>

        <div className="featured-content">
          <div className="featured-meta-row">
            <span className="featured-tag-pill">Brand Strategy</span>
            <span className="featured-read-time">12 min read</span>
          </div>

          <h2 className="featured-title">
            The Evolution of Brand Identity in the Decentralized Web
          </h2>

          <p className="featured-excerpt">
            We look into how modern brands are reshaping their identity systems
            to build genuine community trust and presence across modular
            networks.
          </p>

          <div className="read-article-link">
            <span>Read Article</span>
            <i className="fa-solid fa-arrow-right" style={{ fontSize: "0.85rem" }}></i>
          </div>
        </div>
      </Link>

      {/* SECTION 3: ALL PUBLICATIONS GRID */}
      <div className="blogs-section-label">ALL PUBLICATIONS</div>

      <div className="publications-grid">
        {PUBLICATIONS_DATA.map((pub) => (
          <Link key={pub.id} to="/blog-detail" className="publication-card">
            <div className="pub-img-box">
              <img src={pub.img} alt={pub.title} className="pub-img" />
            </div>

            <div className="pub-meta-row">
              <span className="pub-tag-pill">{pub.tag}</span>
              <span className="pub-read-time">{pub.readTime}</span>
            </div>

            <h3 className="pub-title">{pub.title}</h3>

            <p className="pub-excerpt">{pub.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
