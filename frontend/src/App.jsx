import { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const Home = lazy(() => import("./pages/Home"));
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import SocialSidebar from "./components/SocialSidebar";
import Cursor from "./components/Cursor";

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem("hasVisited");
  });

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem("hasVisited", "true");
  };

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Cursor />
          <Background />
          <Navbar />
          <SocialSidebar />
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Home />
                </Suspense>
              }
            />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
