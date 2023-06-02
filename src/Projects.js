import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import website from "./images/Arsha-bootstrap-website-template (1).png";
import website1 from "./images/website.jpeg";
import website2 from "./images/wix.png";
import website3 from "./images/circle.jpg";
import website4 from "./images/gumption.jpeg";
import website5 from "./images/flights.jpeg";

const Projects = () => {
  return (
    <>
      <div className="container-fluid section_project" id="Projects">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6">
          <h4 className="text-center text-white mt-5">Some of my Recent Work.</h4>
          <p className="text-center text-white">I create a Demo projects of different Websites in react.js .</p>
          <Carousel className="mt-5">
          
    <div>
        <img src={website2} />
        <p className="legend">Create a Demo Website of Wix in a react.js</p>
    </div>
    <div>
        <img src={website1} />
        <p className="legend">Create a Demo Website of traackr in a react.js</p>
    </div>
    <div>
        <img src={website} />
        <p className="legend">Create a Demo Website of ARSHA in a react.js</p>
    </div>
    <div>
        <img src={website3} />
        <p className="legend">Create a Demo Website of CIRCLE in a react.js</p>
    </div>
    <div>
        <img src={website4} />
        <p className="legend">Create a Demo Website of GUMPTION in a react.js</p>
    </div>
    <div>
        <img src={website5} />
        <p className="legend">Create a Demo Website of SCOTTS in a react.js</p>
    </div>
</Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
