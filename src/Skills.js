import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useEffect } from "react"
// import HtmlIcon from '@mui/icons-material/Html';
import Aos from "aos";
import "aos/dist/aos.css";
import { Api } from "@mui/icons-material";


const Skills = () => {
  const now = 92;
  const css = 86;
  const js = 83;
  const bootstrap = 87;
  const react = 88;
  const database = 79;
  const php = 72;
  const Json = 78;
  const hooks = 88;
  const ApiIntegration =  79;

  useEffect(() => {
    Aos.init({duration:2000})
  },[])
  return (
    <>
      <div data-aos="slide-right" className="container-fluid section_skills" id="Skills">
        <div className="row  justify-content-center">
          <div className="col-lg-6 col-10 mt-5 mb-5">
            <h1 className="skills_heading">Skills</h1>
            <h6 className="skills">
              “Skills don't die; only people do.” “A good entrepreneur converts
              his skills to cash.” “Human skill development in any nation is key
              for economic growth.” “Mastery lies on an infinite continuum, and
              as a result we will never reach the end.
            </h6>
            <h6 className="animation_text">Html</h6>
            <ProgressBar now={now} label={`${now}%`} />
            <br />
            <h6 className="animation_text">CSS</h6>
            <ProgressBar now={css} label={`${css}%`} />
            <br />
            <h6 className="animation_text">Bootstrap</h6>
            <ProgressBar now={bootstrap} label={`${bootstrap}%`} />
            <br />
            <h6 className="animation_text">JavaScript</h6>
            <ProgressBar now={js} label={`${js}%`} />
            <br />
            <h6 className="animation_text">React-JS</h6>
            <ProgressBar now={react} label={`${react}%`} />
            <br />
            <h6 className="animation_text">React Hooks</h6>
            <ProgressBar now={hooks} label={`${hooks}%`} />
            <br />
            <h6 className="animation_text">Api Integration</h6>
            <ProgressBar now={ApiIntegration} label={`${ApiIntegration}%`} />
            <br />
            <h6 className="animation_text">Json</h6>
            <ProgressBar now={Json} label={`${Json}%`} />
            <br />

            <h6 className="animation_text">PHP</h6>
            <ProgressBar now={php} label={`${php}%`} />
            <br />
            <h6 className="animation_text">SQL Database</h6>
            <ProgressBar now={database} label={`${database}%`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
