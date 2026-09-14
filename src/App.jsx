import Home from "./pages/Home.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "animate.css"
import "./App.css"

function App() {
  return (
    <div className="page-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
