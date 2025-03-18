import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HistoricalData from "./pages/HistoricalData";
import AboutUs from "./pages/AboutUs"; 
import ContactUs from "./pages/ContactUs";  
import { CurrencyProvider } from "./context/CurrencyContext";
import { LoadingScreen } from "./components/LoadingScreen"; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <CurrencyProvider>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
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
      )}
    </CurrencyProvider>
  );
}

export default App;
