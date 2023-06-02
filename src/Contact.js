import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendMessage = () => {
    if (inputs.name == "") {
      enqueueSnackbar(`Name is Empty`, { variant: "error" });

      return false;
    }
    if (inputs.email == "") {
      enqueueSnackbar(`Email is Empty`, {
        variant: "error",
      });

      return false;
    }
    if (inputs.message == "") {
      enqueueSnackbar(`Message is Empty`, {
        variant: "error",
      });

      return false;
    } else {
      enqueueSnackbar(`Thank You For Your Feedback.`, { variant: "success" });
    }
  };

  return (
    <>
      <section className="background_image" id="Contact">
        <div className="conatainer-fluid">
          <div className="row  justify-content-center">
            <div className="col-lg-6 col-10 ">
              <h3 className="text-center text-black">Contact Me</h3>
              <br />
              <TextField
                className="text-border"
                fullWidth
                label="Name"
                id="fullWidth"
                name="name"
                value={inputs.name}
                onChange={handleChange}
              />
              <br />
              <br />
              <TextField
                className="text-border"
                fullWidth
                label="Email"
                id="fullWidth"
                name="email"
                value={inputs.email}
                onChange={handleChange}
              />
              <br />
              <br />
              <TextField
                className="text-border"
                id="outlined-multiline-static"
                label="Message"
                fullWidth
                multiline
                rows={4}
                name="message"
                value={inputs.message}
                onChange={handleChange}
              />
              <br />
              <br />
              <div className=" d-sm-flex justify-content-between pt-4">
                <SnackbarProvider variant="success" />
                <Button
                  variant="contained"
                  onClick={(e) => handleSendMessage()}
                >
                  Send Message
                </Button>
                <div className="d-flex gap-2 pt-3 pt-sm-0  ">
                  <a
                    target="target_blank"
                    href="https://www.instagram.com/abdullahchaudhary917/"
                    className="insta"
                  >
                    <InstagramIcon />
                  </a>
            
                  <a
                    target="target_blank"
                    href="https://www.facebook.com/abdullah.ch.7165/"
                    className="fb"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    target="target_blank"
                    href="https://www.linkedin.com/in/abdullah-chaudhary-2a7a82218/"
                    className="linkedIn"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    target="target_blank"
                    href="https://github.com/Abdullah83756"
                    className="git_hub"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    target="target_blank"
                    href="https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act&pli=1"
                    className="gmail"
                  >
                    <GoogleIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
