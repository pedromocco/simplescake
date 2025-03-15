import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Products/Product";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery"
import { PageTransition } from "./lib/utils";
import { useEffect } from "react";

const Wrapper = ({ location, children }) => {
  useEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return children;
};

function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        <Wrapper location={location.pathname}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/products"
              element={
                <PageTransition>
                  <Products />
                </PageTransition>
              }
            />
            <Route
              path="/products/:id"
              element={
                <PageTransition>
                  <Product />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
            <Route
              path="/gallery/*"
              element={
                <PageTransition>
                  <Gallery />
                </PageTransition>
              }
            />
          </Routes>
        </Wrapper>
      </AnimatePresence>
    </div>
  );
}

export default App;
