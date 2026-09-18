import React from 'react';

const PricingCTA = ({ onGetStarted }) => {
  return (
    <section className="pricing-cta-section" style={{ maxWidth: '1300px', margin: '90px auto', padding: '0 20px', position: 'relative' }}>
      <style>
        {`
          .pricing-cta-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
            position: relative;
            z-index: 2;
          }
          .pricing-center-text {
            flex: 1;
            text-align: center;
          }
          .pricing-card-box {
            background: #ffffff;
            padding: 40px 30px;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
            width: 320px;
            flex-shrink: 0;
            transition: all 0.5s ease-in-out;
            will-change: transform, box-shadow;
          }
          .pricing-card-box.left {
            transform: rotate(-3deg);
          }
          .pricing-card-box.right {
            transform: rotate(3deg);
          }
          .pricing-card-box:hover {
            transform: rotate(0deg) scale(1.05);
            box-shadow: 0 30px 60px rgba(0,0,0,0.15);
            z-index: 10;
          }
          .pricing-list {
            list-style: none;
            padding: 0;
            margin: 20px 0 30px;
          }
          .pricing-list li {
            margin-bottom: 12px;
            font-size: 0.9rem;
            color: #555;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .pricing-list li::before {
            content: '❖';
            color: #000;
            font-size: 0.8rem;
          }
          @media (max-width: 991px) {
            .pricing-cta-container {
              flex-direction: column;
            }
            .pricing-card-box.left, .pricing-card-box.right {
              transform: rotate(0deg);
              width: 100%;
              max-width: 400px;
            }
            .pricing-center-text {
              order: -1;
              margin-bottom: 30px;
            }
          }
        `}
      </style>

      <div className="pricing-cta-container">
        {/* Left Card */}
        <div className="pricing-card-box left" data-animate="zoomIn" style={{ animationDelay: '0.2s' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 10px', color: '#000' }}>Design & Build</h3>
          <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '20px' }}>Foundational digital platforms.</p>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#000', margin: '0 0 20px' }}>Custom <span style={{ fontSize: '1rem', fontWeight: 500, color: '#666' }}>Built</span></h2>
          <ul className="pricing-list">
            <li>Web Design & UX</li>
            <li>Web Development</li>
            <li>Branding & Identity</li>
          </ul>
          <button onClick={onGetStarted} style={{ width: '100%', background: '#111827', color: '#fff', border: 'none', padding: '14px', borderRadius: '12px', fontWeight: 600, cursor: 'pointer', transition: 'background 0.3s', fontSize: "20px" }}>Get a Quote</button>
        </div>

        {/* Center Text */}
        <div className="pricing-center-text" data-animate="zoomIn">
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#ffffff', marginBottom: '20px', lineHeight: 1.2 }}>Ready to Dominate Your Market?</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '30px', maxWidth: '500px', margin: '0 auto 30px' }}>Partner with Skull Solution to scale your brand with proven digital strategies, high-converting websites, and data-driven marketing.</p>
          <button onClick={onGetStarted} style={{ background: '#ffffff', color: '#111827', border: 'none', padding: '16px 36px', borderRadius: '50px', fontWeight: 700, cursor: 'pointer', transition: 'transform 0.2s ease', fontFamily: 'var(--font-body)', fontSize: "22px" }}>Get Started</button>
        </div>

        {/* Right Card */}
        <div className="pricing-card-box right" data-animate="zoomIn" style={{ animationDelay: '0.4s' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 10px', color: '#000' }}>Growth & Traffic</h3>
          <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '20px' }}>Data-driven acquisition engines.</p>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#000', margin: '0 0 20px' }}>ROI <span style={{ fontSize: '1rem', fontWeight: 500, color: '#666' }}>Focused</span></h2>
          <ul className="pricing-list">
            <li>SEO Services</li>
            <li>PPC & Meta Ads</li>
            <li>Digital Marketing</li>
          </ul>
          <button onClick={() => window.location.href = '/contact'} style={{ width: '100%', background: '#111827', color: '#fff', border: 'none', padding: '14px', borderRadius: '12px', fontWeight: 600, cursor: 'pointer', transition: 'background 0.3s', fontSize: "20px" }}>Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
