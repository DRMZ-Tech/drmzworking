import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Team from "./components/team/Team";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import Products from "./components/products/Products";
import Footer from "./components/Footer/footer";
import Admin from "./components/admin/admin";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        {/* <BackgroundPage /> */}
        <Services />
        <Products />
        {/* <Process /> */}
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
          <Route path="/admin" component={Admin} />
        </Routes> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
