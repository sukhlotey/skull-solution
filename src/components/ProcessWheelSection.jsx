import skullCenter from "../assets/skull.png"

const ProcessWheelSection = () => {
  return (
    <section className="process-wheel-section" id="process-wheel">
      <div className="process-wheel-card" data-animate="fadeInUp">
        <div className="process-wheel-header">
          <h2 className="process-wheel-title">
            <span className="highlight-badge-white">OUR PROCESS</span> 6 STEPS TO SUCCESS
          </h2>
          <p className="process-wheel-subtitle">
            A structured digital ecosystem engineered from discovery to continuous promotion.
          </p>
        </div>

        <div className="process-wheel-layout">
          {/* Left Content Side: Feature Points */}
          <div className="process-content-side">
            <span className="process-badge">WORKFLOW METHODOLOGY</span>
            <h3 className="process-side-title">Engineered For Continuous Scaling</h3>
            <p className="process-side-desc">
              Our 6-step roadmap ensures seamless execution from concept to market dominance with precision engineering at every stage.
            </p>

            <div className="process-points-list">
              <div className="process-point-item">
                <div className="point-icon-box">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="point-text">
                  <h4>01. Discovery & Strategy</h4>
                  <p>In-depth market analysis, user research, and technical scoping.</p>
                </div>
              </div>

              <div className="process-point-item">
                <div className="point-icon-box">
                  <i className="fa-brands fa-figma"></i>
                </div>
                <div className="point-text">
                  <h4>02. UI/UX Design & Figma</h4>
                  <p>High-fidelity wireframing, interactive prototypes, and modern UI systems.</p>
                </div>
              </div>

              <div className="process-point-item">
                <div className="point-icon-box">
                  <i className="fa-solid fa-code"></i>
                </div>
                <div className="point-text">
                  <h4>03. Clean Code & Development</h4>
                  <p>Robust scalable architecture built with modern web technologies.</p>
                </div>
              </div>

              <div className="process-point-item">
                <div className="point-icon-box">
                  <i className="fa-solid fa-rocket"></i>
                </div>
                <div className="point-text">
                  <h4>04. Launch & Growth</h4>
                  <p>Seamless deployment, continuous optimization, and scale.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Wheel Side */}
          <div className="process-wheel-container">
            {/* Background Animated SVG Waves & Rotating Orbit Rings */}
            <svg className="process-wheel-svg-bg" viewBox="0 0 700 700">
              <defs>
                <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
                </linearGradient>
              </defs>

              {/* Curved Background Ribbon Flow */}
              <path
                className="process-bg-ribbon"
                d="M 550 -50 C 700 150, 250 250, 250 450 C 250 600, 450 700, 600 750"
                fill="none"
                stroke="url(#waveGrad)"
                strokeWidth="110"
                strokeLinecap="round"
              />

              {/* Concentric Dashed Orbits */}
              <circle cx="350" cy="350" r="160" className="process-dash-orbit orbit-inner" />
              <circle cx="350" cy="350" r="260" className="process-dash-orbit orbit-outer" />

              {/* Radial Spoke Rays */}
              <line x1="350" y1="90" x2="350" y2="610" className="process-spoke-line" />
              <line x1="125" y1="220" x2="575" y2="480" className="process-spoke-line" />
              <line x1="125" y1="480" x2="575" y2="220" className="process-spoke-line" />
            </svg>

            {/* Central Core Pulse */}
            <div className="process-wheel-center">
              <div className="center-core-pulse"></div>
              <img src={skullCenter} alt="Skull Logo" className="center-core-logo" />
            </div>

            {/* 6 Circular Nodes */}
            <div className="process-node node-top" data-node="1">
              <div className="node-circle">
                <i className="fa-regular fa-lightbulb node-icon"></i>
                <span className="node-title">DISCOVER</span>
              </div>
            </div>

            <div className="process-node node-top-right" data-node="2">
              <div className="node-circle">
                <i className="fa-solid fa-hourglass-half node-icon"></i>
                <span className="node-title">PLAN</span>
              </div>
            </div>

            <div className="process-node node-bottom-right" data-node="3">
              <div className="node-circle">
                <i className="fa-brands fa-figma node-icon"></i>
                <span className="node-title">DESIGN</span>
              </div>
            </div>

            <div className="process-node node-bottom" data-node="4">
              <div className="node-circle">
                <i className="fa-solid fa-code node-icon"></i>
                <span className="node-title">DEVELOP</span>
              </div>
            </div>

            <div className="process-node node-bottom-left" data-node="5">
              <div className="node-circle">
                <i className="fa-solid fa-rocket node-icon"></i>
                <span className="node-title">LAUNCH</span>
              </div>
            </div>

            <div className="process-node node-top-left" data-node="6">
              <div className="node-circle">
                <i className="fa-regular fa-thumbs-up node-icon"></i>
                <span className="node-title">PROMOTE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessWheelSection
