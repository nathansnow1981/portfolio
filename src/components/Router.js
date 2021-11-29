import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNav from "./navigation/TopNav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SiteFooter from "./SiteFooter";

const appName = "Portfolio"
const separator = " - "
const titleSuffix = separator.concat(appName)

const AppRouter = () => {
  return (
    <Router>
      <TopNav />
      <div className="container-fluid pt-5">
        <div id="content-wrap" className="App pt-5 pb-3">
          <Routes>
            <Route exact path="/" element={<Home />} {...(document.title = "Home".concat(titleSuffix))} />
            <Route exact path="/about" element={<About />} {...(document.title = "About".concat(titleSuffix))} />
            <Route exact path="/contact" element={<Contact />} {...(document.title = "Contact".concat(titleSuffix))} />
          </Routes>
        </div>
        <SiteFooter />
      </div>
    </Router>
  );
};

export default AppRouter;
