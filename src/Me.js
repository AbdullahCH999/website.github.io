import * as React from "react";
import { useState, useEffect} from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import avatar from "./images/avatar.jpg";
import { Icon } from "@iconify/react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Stack, IconButton, Typography } from "@mui/material";

const Me = () => {
  const [openDrawer, IsOpenDrawer] = useState(false);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 1, py: 2 }}
      >
        <Typography
          className="font-weight-bold"
          variant="subtitle1"
          sx={{ ml: 1 }}
        >
          More About Me
        </Typography>
        <IconButton>
          <Icon icon="ic:round-close" />
        </IconButton>
      </Stack>
      <Divider />
      <div>
        <p className="ps-2 pe-3">
          • I'm experienced in design and development of web applications using
          <span className="font-weight-bold">React.js.</span>
          <br /> • I integrate REST APIs of NodeJS.
          <br /> • I use version control systems including Git, Bitbucket, and
          SourceTree.
          <br /> • I code user-friendly and attractive UI/UX with scalable
          back-ends.
          <br /> • My can-do attitude and out of the box thinking is what makes
          me stand-out from others.
          <br /> • I also have ability to learn & develop using new technologies
          quickly.
        </p>
        <p className=" ps-2 font-weight-bold"> Responsibilities</p>
        <p className="ps-2 pe-4">
          • Creating the user interface, designing and integrate the APIs,
          and writing the code to integrate everything together.
          <br />
          • Writing automated tests to ensure code quality and creating
          debugging tools to identify and fix issues. <br />
          • Working with cross-functional teams, including designers, product
          managers, and other developers, to build and launch web
          applications. <br />
          Collaborate with these teams to ensure the application meets the needs
          of the business and end-users.
          <br />
          • Responsible for reviewing the code of other developers and providing
          feedback to ensure code and producty quality and consistency.
          <br />
          • Understanding the underlying infrastructure and choosing the
          appropriate technologies and architecture to ensure the web-application
          can handle high traffic and data volume.
          <br />
        </p>
      </div>
    </Box>
  );

  useEffect(() => {
    Aos.init({duration:2000})
  },[])

  return (
    <>
      <div data-aos="flip-left" className="container-fluid section_1" id="Me">
        <div className="row ">
          <div className="col-lg-4 col-sm-12">
            <img src={avatar} className="img-fluid" />
          </div>
          <div className="col-lg-8 col-sm-12">
            <h6 className="font_color_cursive text_margin text-white">
              I am React.JS Developer & Designer Having 2 years Exprience. Also
              Have Academic Certificates In Web Developer Courses. Also Having 6
              Months Expreince In Meta-Logix Software House In Sahiwal And Done
              My Internship From Regal Systems Software House Sahiwal.
            </h6>
            <h1 className="font_color">Education Details:</h1>
            <h4 className="font_color_headings">
              BSCS (Bechelors In Computer Sciences )
            </h4>
            <p className="font_color">
              I Have Done My Bechelors From Univeristy of Sahiwal. My final year
              project is Online Doctor Appointment system which is based on Core
              PHP and SQL Database.
            </p>
            <h4 className="font_color_headings">M.Phil (MSCS)</h4>
            <p className="font_color">
              I Also Done My Masters Qualification from Comsats Univeristy
              Islamabad sahiwal Campus.Also build a many projects in web
              applications.
            </p>
            <h1 className="font_color_headings">Metric & ICS</h1>
            <p className="font_color">
              I Have Done my metric and Intermediate In Computer Sciences from{" "}
              <span className="text_bigger">
                Pakistan International School Jeddah , Saudi Arabia.
              </span>
            </p>
            <h1 className="font_color_headings">Hobbies</h1>
            <p className="font_color">
              Self Learning & Implementaion Which can be represented by Coding
              or Programming, coding has no barriers. When creating your
              project, you don't need to think about the properties of the
              materials and the like. That's one of the most exciting things
              about coding.
            </p>
            <div className="pt-3 pb-5">
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button
                    variant="outlined"
                    onClick={toggleDrawer(anchor, true)}
                  >
                    More Info About Me
                  </Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Me;
