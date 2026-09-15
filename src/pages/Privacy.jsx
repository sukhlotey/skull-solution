import React, { useState } from "react"
import "./Privacy.css"

const Privacy = () => {
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
          <span className="policy-badge">LEGAL & POLICIES</span>
          <h1 className="policy-main-title">Privacy Policy</h1>
          <p className="policy-main-subtitle">
            Learn how Skull Solution collects, protects, and uses your personal data.
          </p>
        </div>

        {/* POLICY DOCUMENT CONTENT */}
        <div className="policy-body">
          <h2 className="policy-h2">1. Information We Collect</h2>
          <p>
            At Skull Solution, accessible from our digital platform, one of our main
            priorities is the privacy of our visitors. This Privacy Policy document
            contains types of information that is collected and recorded by Skull
            Solution and how we use it.
          </p>
          <p>
            If you have additional questions or require more information about our
            Privacy Policy, do not hesitate to contact us.
          </p>

          <h2 className="policy-h2">2. How We Use Your Information</h2>
          <p>
            We use the information we collect in various ways, including to:
          </p>
          <ul className="policy-ul">
            <li>Provide, operate, and maintain our digital services & platforms.</li>
            <li>Improve, personalize, and expand our digital marketing strategies.</li>
            <li>Understand and analyze how you use our agency offerings.</li>
            <li>Communicate with you for customer support, updates, and proposal audits.</li>
          </ul>

          <h2 className="policy-h2">3. Data Protection Rights</h2>
          <p>
            We want to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to access, rectify, or
            request deletion of their stored information at any time.
          </p>

          <h2 className="policy-h2">4. Third-Party Services</h2>
          <p>
            Skull Solution's Privacy Policy does not apply to other advertisers
            or websites. We advise you to consult the respective Privacy
            Policies of these third-party servers for more detailed
            information.
          </p>
        </div>

        {/* INQUIRY FORM AT THE BOTTOM OF SAME CARD */}
        <div className="policy-form-section">
          <div>
            <h2 className="policy-form-title">Privacy Inquiry</h2>
            <p className="policy-form-desc">
              Have questions about how we handle your data? Send us an inquiry below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="policy-form-grid">
            <div className="field-group">
              <label className="field-label">YOUR NAME</label>
              <input
                type="text"
                required
                className="field-input"
                placeholder="Emily Johnson"
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
                placeholder="emily@example.com"
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
                placeholder="How is my data encrypted and stored?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="field-group full-width">
              <button type="submit" className="policy-submit-btn">
                Send Privacy Inquiry
              </button>
            </div>

            {submitted && (
              <p className="full-width" style={{ color: "#4caf50", fontSize: "0.9rem", fontWeight: "600" }}>
                Thank you! Your privacy inquiry has been successfully submitted.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Privacy
