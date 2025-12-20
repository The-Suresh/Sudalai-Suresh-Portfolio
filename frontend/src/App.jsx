import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import SocialSidebar from "./components/SocialSidebar";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Background />
          <Navbar />
          <SocialSidebar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
