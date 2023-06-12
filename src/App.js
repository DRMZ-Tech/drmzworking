import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Team from "./components/pages/team/Team";
import About from "./components/pages/about/About";
import Downloads from "./components/pages/downloads/Downloads";
import Contact from "./components/pages/contact/Contact";
import Services from "./components/pages/services/Services";
import Products from "./components/pages/products/Products";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Services />
        <Products />
        <Team />
        <About />
        <Contact />
        {/* <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/services" exact Component={Services} />
          <Route path="/products" exact Component={Products} />
          <Route path="/team" exact Component={Team} />
          <Route path="/about" exact Component={About} />
          <Route path="/downloads" exact Component={Downloads} />
          <Route path="/contact" exact Component={Contact} />
        </Routes> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
