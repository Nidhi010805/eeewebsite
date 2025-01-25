import './style.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CreateAccountForm from "./components/CreateAccountForm";
import AboutUs from "./components/pages/AboutUs";
import Notes from "./components/pages/Notes";
import Faculty from "./components/pages/Faculty";
import PlacedSeniors from "./components/pages/Placed";
import "./App.css";

const AppContent = () => {
  const location = useLocation(); // Moved useLocation inside AppContent

  return (
    <>
      <Header />
      <Navbar />

      <div className="content">
        {/* Sidebar logic for main page */}
        {location.pathname === "/" && (
          <div className="sidebar">
            <CreateAccountForm />
          </div>
        )}

        <div className="main">
          <Routes>
            {/* Home route */}
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/placed-seniors" element={<PlacedSeniors />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
