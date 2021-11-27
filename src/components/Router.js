import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNav from "./navigation/TopNav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SiteFooter from "./SiteFooter";

const AppRouter = () => {
  
  return (
    <Router>
      <TopNav />
      <div className="container-fluid pt-5">
        <div id="content-wrap" className="App pt-5 pb-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <SiteFooter />
      </div>
    </Router>
  );
};

export default AppRouter;
