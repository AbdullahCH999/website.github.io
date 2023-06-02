import React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Aos from "aos";
import "aos/dist/aos.css";

const Resume = () => {
  const PDF_FILE_URL = "https://abdullah83756.github.io/portfolio/resume.pdf";

  const downloadFile = (url) => {
    const fileName = url.split("/").pop();
    const atag = document.createElement("a");
    atag.href = url;
    atag.setAttribute("download", fileName);
    document.body.appendChild(atag);
    atag.click();
    // atag.remove();
  };
  
  useEffect(() => {
    Aos.init({duration:2000})
  },[])
  return (
    <>
      <div data-aos="zoom-out-up" className="container-fluid resume" id="Resume">
        <div className="row pt-5 text-center text-white justify-content-center">
          <div className="col-lg-12">
          <h6>
          CLICK HERE TO DOWNLOAD MY RESUME.
          </h6>
            <Button
            className="resume_button mb-5 mt-3"
            variant="contained"
              onClick={(e) => {
                downloadFile(PDF_FILE_URL);
              }}
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
