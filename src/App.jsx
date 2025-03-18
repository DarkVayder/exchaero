import { useState, useEffect, useCallback, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CurrencyProvider } from "./context/CurrencyContext";
import { LoadingScreen } from "./components/LoadingScreen";

// Lazy load components to improve initial load time
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./pages/Home"));
const HistoricalData = lazy(() => import("./pages/HistoricalData"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

function App() {
  const [loading, setLoading] = useState(true);

  // to Stop loading after 3 seconds
  const stopLoading = useCallback(() => setLoading(false), []);

  useEffect(() => {
    const timer = setTimeout(stopLoading, 3000);
    return () => clearTimeout(timer);
  }, [stopLoading]);

  return (
    <CurrencyProvider>
      {loading ? (
        <LoadingScreen onComplete={stopLoading} />
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
