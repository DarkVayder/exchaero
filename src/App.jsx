import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HistoricalData from "./pages/HistoricalData";
import AboutUs from "./pages/AboutUs"; 
import ContactUs from "./pages/ContactUs";  
import { CurrencyProvider } from "./context/CurrencyContext";

function App() {
  return (
    <CurrencyProvider>
      <Router>
        <div className="flex h-screen flex-col justify-between">
          <Navbar />
          <div className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/history" element={<HistoricalData />} />
              <Route path="/about" element={<AboutUs />} /> 
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CurrencyProvider>
  );
}

export default App;
