import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Button from "@mui/material/Button";
import {useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Top = () => {
  const [Visible, setVisible] = useState(false);
  const scrolling = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
   const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
   console.log(winScroll,"WIN");
   if(winScroll > heightToHidden){
    setVisible(true);
   }else{
    setVisible(false);
   }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);
  return (
    <>
    
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
          {Visible && (
            <div
              className="up_button"
              
              onClick={(e) => {
                scrolling();
              }}
            >
              <Button variant="contained arrow_button">
                <FaArrowUp  />
              </Button>
            </div>
          )}
            
          </div>
        </div>
      </div>
    </>
  );
};
export default Top;
