const WhatsAppButton = () => {
  const phoneNumber = "13522373368"
  const defaultMessage = encodeURIComponent("Hello! I would like to inquire about your services at Skull Solution.")

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
      <span className="whatsapp-pulse"></span>
    </a>
  )
}

export default WhatsAppButton
