import { useState } from "react"

const countryCodes = [
  "+1", "+20", "+27", "+30", "+31", "+32", "+33", "+34", "+36", "+39",
  "+40", "+41", "+43", "+44", "+45", "+46", "+47", "+48", "+49", "+51",
  "+52", "+53", "+54", "+55", "+56", "+57", "+58", "+60", "+61", "+62",
  "+63", "+64", "+65", "+66", "+81", "+82", "+84", "+86", "+90", "+91",
  "+92", "+93", "+94", "+95", "+98", "+211", "+212", "+213", "+216", "+218",
  "+220", "+221", "+222", "+223", "+224", "+225", "+226", "+227", "+228", "+229",
  "+230", "+231", "+232", "+233", "+234", "+235", "+236", "+237", "+238", "+239",
  "+240", "+241", "+242", "+243", "+244", "+245", "+246", "+248", "+249", "+250",
  "+251", "+252", "+253", "+254", "+255", "+256", "+257", "+258", "+260", "+261",
  "+262", "+263", "+264", "+265", "+266", "+267", "+268", "+269", "+290", "+291",
  "+297", "+298", "+299", "+350", "+351", "+352", "+353", "+354", "+355", "+356",
  "+357", "+358", "+359", "+370", "+371", "+372", "+373", "+374", "+375", "+376",
  "+377", "+378", "+380", "+381", "+382", "+383", "+385", "+386", "+387", "+389",
  "+420", "+421", "+423", "+500", "+501", "+502", "+503", "+504", "+505", "+506",
  "+507", "+508", "+509", "+590", "+591", "+592", "+593", "+594", "+595", "+596",
  "+597", "+598", "+599", "+670", "+672", "+673", "+674", "+675", "+676", "+677",
  "+688", "+679", "+680", "+681", "+682", "+683", "+685", "+686", "+687", "+688",
  "+689", "+690", "+691", "+692", "+850", "+852", "+853", "+855", "+856", "+880",
  "+886", "+960", "+961", "+962", "+963", "+964", "+965", "+966", "+967", "+968",
  "+970", "+971", "+972", "+973", "+974", "+975", "+976", "+977", "+992", "+993",
  "+994", "+995", "+996", "+998"
]

const BookServiceModal = ({ isOpen, onClose, initialService = "" }) => {
  const [formSubmitting, setFormSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)

  if (!isOpen) return null

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSubmitting(true)

    setTimeout(() => {
      setFormSubmitting(false)
      setFormSuccess(true)
      e.target.reset()
    }, 1200)
  }

  const handleClose = () => {
    setFormSuccess(false)
    setFormSubmitting(false)
    onClose()
  }

  return (
    <div className="book-service-modal-overlay" onClick={handleClose}>
      <div className="book-service-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="book-service-modal-close" onClick={handleClose} aria-label="Close Modal">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="contact-card modal-card">
          <div className="contact-header">
            <h2 className="contact-title">Book a Service</h2>
            <p className="contact-subtitle">
              Have a project in mind or want to boost your digital performance? Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <form className="contact-form" id="bookServiceForm" onSubmit={handleFormSubmit}>
            <div className="form-grid">
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="modalContactName" className="form-label">
                  Full Name <span className="required-star">*</span>
                </label>
                <input
                  type="text"
                  id="modalContactName"
                  className="form-input"
                  placeholder="e.g. John Doe"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="modalContactEmail" className="form-label">
                  Email Address <span className="required-star">*</span>
                </label>
                <input
                  type="email"
                  id="modalContactEmail"
                  className="form-input"
                  placeholder="john@company.com"
                  required
                />
              </div>

              {/* Phone Number with Country Code Dropdown */}
              <div className="form-group">
                <label htmlFor="modalContactPhone" className="form-label">
                  Phone Number <span className="required-star">*</span>
                </label>
                <div className="phone-input-wrapper">
                  <select
                    id="modalCountryCode"
                    className="form-select country-select"
                    aria-label="Country Code"
                    defaultValue="+91"
                  >
                    {countryCodes.map((code, cIdx) => (
                      <option key={cIdx} value={code}>
                        {code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    id="modalContactPhone"
                    className="form-input phone-input"
                    placeholder="(555) 000-0000"
                    required
                  />
                </div>
              </div>

              {/* Interested In Dropdown */}
              <div className="form-group">
                <label htmlFor="modalContactService" className="form-label">
                  Interested In <span className="required-star">*</span>
                </label>
                <select id="modalContactService" className="form-select" required defaultValue={initialService || ""}>
                  <option value="" disabled>
                    Select a Service...
                  </option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Web Designing">Web Designing</option>
                  <option value="Web Development">Web Development</option>
                  <option value="SEO Services">SEO Services</option>
                  <option value="Ad Services">Ad Services</option>
                  <option value="Brand Strategy">Brand Strategy</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Organization Type Toggle */}
              <div className="form-group full-width">
                <label className="form-label">
                  Organization / Entity Type <span className="required-star">*</span>
                </label>
                <div className="org-radio-group">
                  <label className="org-radio-card">
                    <input type="radio" name="modalOrgType" value="Organization" defaultChecked />
                    <span className="org-radio-label">
                      <i className="fa-solid fa-building org-icon"></i>
                      Organization / Company
                    </span>
                  </label>
                  <label className="org-radio-card">
                    <input type="radio" name="modalOrgType" value="Individual" />
                    <span className="org-radio-label">
                      <i className="fa-solid fa-user org-icon"></i>
                      Individual
                    </span>
                  </label>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="form-group full-width">
                <label htmlFor="modalContactMessage" className="form-label">
                  Your Message <span className="required-star">*</span>
                </label>
                <textarea
                  id="modalContactMessage"
                  className="form-textarea"
                  rows="4"
                  placeholder="Describe your project goals, timeline, or key requirements..."
                  required
                ></textarea>
              </div>
            </div>

            <div className="form-actions">
              {!formSuccess && (
                <button
                  type="submit"
                  className="btn btn-white contact-submit-btn"
                  id="modalContactSubmitBtn"
                  disabled={formSubmitting}
                >
                  {formSubmitting ? (
                    <>
                      <span>Sending...</span> <i className="fa-solid fa-spinner fa-spin btn-icon"></i>
                    </>
                  ) : (
                    <>
                      <span>Submit Request</span> <i className="fa-solid fa-paper-plane btn-icon"></i>
                    </>
                  )}
                </button>
              )}
              <div className={`form-success-toast ${formSuccess ? "active" : ""}`} id="modalFormSuccessToast">
                <i className="fa-solid fa-circle-check toast-icon"></i>
                <span>
                  Thank you! Your message has been sent successfully. We will get back to you shortly.
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookServiceModal
