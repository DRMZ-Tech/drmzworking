import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Team from "./components/pages/Team";
import About from "./components/pages/About";
import Downloads from "./components/pages/Downloads";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import Footer from "./components/footer";
import Products from "./components/pages/Products";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/services" exact Component={Services} />
          <Route path="/products" exact Component={Products} />
          <Route path="/team" exact Component={Team} />
          <Route path="/about" exact Component={About} />
          <Route path="/downloads" exact Component={Downloads} />
          <Route path="/contact" exact Component={Contact} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
