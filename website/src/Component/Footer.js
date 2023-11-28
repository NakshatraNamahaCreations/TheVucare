import React from "react";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import InstagramIcon from "@mui/icons-material/Instagram";
export default function Footer() {
  const phoneNumber = "9980670037";
  const openWhatsapp = () => {
    const internationalPhoneNumber = `+${phoneNumber}`;
    const whatsappLink = `https://wa.me/${internationalPhoneNumber}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <div className="row mt-5 bg-dark text-white m-auto ">
        <div className="container ">
          <div className="row p-3 slick-listsd">
            <div className="col-md-3">
              <div className="row ">
                <div className="col-md-10 bg-white rounded brd">
                  <img
                    className="brd"
                    alt=""
                    src="..\assests\Screenshot_4-removebg-preview.png"
                    width={216}
                    height={36}
                  />
                </div>
              </div>
              <p className="col-md-11 p-2">
                Transforming homes with spotless brilliance - Vu Care, where
                cleanlines meets care.
              </p>
            </div>
            <div className="col-md-4">
              <h2 className="row">Contact Us:</h2>
              <li className="row">
                {" "}
                <div className="col-md-1">
                  <span className=" m-auto">
                    <AddIcCallIcon style={{ color: "white" }} />{" "}
                  </span>
                </div>
                <div className="col-md-6">
                  <span>+91 9980847384</span>
                  <p>+91 9980847384</p>
                </div>
              </li>
              <li className="row">
                {" "}
                <div className="col-md-1">
                  <span className=" m-auto">
                    <MailOutlineIcon style={{ color: "white" }} />{" "}
                  </span>
                </div>
                <div className="col-md-6">
                  <span>info@thevucare.com</span>
                </div>
              </li>
              <li className="row">
                {" "}
                <div className="col-md-1">
                  <span className=" m-auto">
                    <LocationOnIcon style={{ color: "white" }} />{" "}
                  </span>
                </div>
                <div className="col-md-6">
                  <span>+91 9980847384</span>
                  <p>+91 9980847384</p>
                </div>
              </li>
            </div>
            <div className="col-md-4">
              <p className="row">Quick Links:</p>
              <ul>
                <li className="sty">Home</li>
                <li className="sty">About Us</li>
                <li className="sty">Services</li>
                <li className="sty">Contact Us</li>
              </ul>
            </div>{" "}
            <div className="col-md-1">
              <a href="https://www.instagram.com/vucareservices/">
                {/* <InstagramIcon style={{ fontSize: "45px", color: "red" }} /> */}
                <img
                  width={100}
                  height={200}
                  src="..\images\vucarinsal.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="row m-auto p-ab">
          <div className="col-md-1  p-fx p-fx-top " onClick={openWhatsapp}>
            {" "}
            <img
              className="logostyl shadow-sm"
              width={80}
              alt=""
              height={80}
              src="..\images\wicon1 (1).png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
