import Home from "./pages/Home.jsx"
// import Appointment from "./pages/Appointment.jsx"
import Contact from "./pages/Contact.jsx"
import About from "./pages/About.jsx"
import Services from "./pages/Services.jsx"
import ServiceDetail from "./pages/ServiceDetail.jsx"
import Work from "./pages/Work.jsx"
import Blogs from "./pages/Blogs.jsx"
import BlogDetail from "./pages/BlogDetail.jsx"
import Privacy from "./pages/Privacy.jsx"
import Terms from "./pages/Terms.jsx"
import ThankYou from "./pages/ThankYou.jsx"
import NotFound from "./pages/NotFound.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"
import WhatsAppButton from "./components/WhatsAppButton.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "animate.css"
import "./App.css"

function App() {
  return (
    <div className="page-container">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-detail" element={<ServiceDetail />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          {/* <Route path="/appointment" element={<Appointment />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </Router>
    </div>
  )
}

export default App
