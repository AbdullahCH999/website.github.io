import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import wallpaper1 from "./images/wallpaper1.jpg";
import MySelf from "./Iam";
import Me from "./Me";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Button from "@mui/material/Button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Top from "./Top";
import Resume from "./Resume";

// import { Link } from "react-scroll";

// import { Router , Route } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <>
        <Navbar />
        <section className="backgroung_wallpaper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12-sm">
                <img src={wallpaper1} className="landing_page" />
              </div>
            </div>
          </div>
        </section>
        <Top/>

        <MySelf />
        {/* 
         <Routes>
         <Route path="Me element={Me/>}"
         <Routes/>
      */}
        <Me />
        <Skills />
        <Resume/>
        <Projects />
        <Contact />
        <Footer />
       
      </>
    </div>
  );
};

export default App;
