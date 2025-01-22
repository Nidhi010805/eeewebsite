import './style.css';

import React from "react";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreateAccountForm from "./components/CreateAccountForm";
import AboutUs from "./components/pages/AboutUs";
import Notes from "./components/pages/Notes";
import Faculty from "./components/pages/Faculty";
import PlacedSeniors from "./components/pages/Placed";
import "./App.css";





const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <div className="content">
        <div className="sidebar">
          <CreateAccountForm />
        </div>
        <div className="main">
          <Routes>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/placed-seniors" element={<PlacedSeniors />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;