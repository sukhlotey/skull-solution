import React, { useState } from "react"
import "./Privacy.css"

const Terms = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setName("")
      setEmail("")
      setMessage("")
      setSubmitted(false)
    }, 4000)
  }

  return (
    <div className="policy-page-container">
      {/* SINGLE UNIFIED CARD BOX */}
      <div className="policy-single-card">
        {/* HEADER SECTION */}
        <div className="policy-header-section">
          <span className="policy-badge">TERMS OF SERVICE</span>
          <h1 className="policy-main-title">Terms & Conditions</h1>
          <p className="policy-main-subtitle">
            Please read these terms carefully before engaging with Skull Solution services.
          </p>
        </div>

        {/* TERMS DOCUMENT CONTENT */}
        <div className="policy-body">
          <h2 className="policy-h2">1. Agreement to Terms</h2>
          <p>
            By accessing or using our website and digital services provided by Skull Solution,
            you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>

          <h2 className="policy-h2">2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, all digital collateral, site design, text, artwork, and custom
            software delivered by Skull Solution are our proprietary property or licensed to us, protected by copyright and trademark laws.
          </p>

          <h2 className="policy-h2">3. Client Responsibilities & Scope</h2>
          <p>
            Clients agree to provide timely feedback, assets, and project materials necessary for the execution of agreed-upon deliverables. Delays in assets may result in adjusted project timelines.
          </p>

          <h2 className="policy-h2">4. Limitation of Liability</h2>
          <p>
            In no event shall Skull Solution or its suppliers be liable for any damages arising out of the use or inability to use the services, even if notified orally or in writing of the possibility of such damage.
          </p>
        </div>

        {/* INQUIRY FORM AT THE BOTTOM OF SAME CARD */}
        <div className="policy-form-section">
          <div>
            <h2 className="policy-form-title">Terms Inquiry</h2>
            <p className="policy-form-desc">
              Have questions regarding our service agreements? Submit your query below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="policy-form-grid">
            <div className="field-group">
              <label className="field-label">YOUR NAME</label>
              <input
                type="text"
                required
                className="field-input"
                placeholder="Michael Scott"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="field-group">
              <label className="field-label">EMAIL ADDRESS</label>
              <input
                type="email"
                required
                className="field-input"
                placeholder="michael@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="field-group full-width">
              <label className="field-label">YOUR QUESTION</label>
              <textarea
                rows="4"
                required
                className="field-textarea"
                placeholder="Questions about project scope or deliverables..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="field-group full-width">
              <button type="submit" className="policy-submit-btn">
                Send Terms Inquiry
              </button>
            </div>

            {submitted && (
              <p className="full-width" style={{ color: "#4caf50", fontSize: "0.9rem", fontWeight: "600" }}>
                Thank you! Your terms inquiry has been successfully submitted.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Terms
