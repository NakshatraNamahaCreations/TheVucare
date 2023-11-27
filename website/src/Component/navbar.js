import React, { useState } from "react";
import Button from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function NabarCompo() {
  const storedUserDataJSON = sessionStorage.getItem("userdata");

  let userData = null;
  try {
    userData = JSON.parse(storedUserDataJSON);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    sessionStorage.removeItem("userdata");
    window.location.reload("/");
  };

  const phoneNumber = "9980670037";
  const openWhatsapp = () => {
    // Format the phone number as an international number
    const internationalPhoneNumber = `+${phoneNumber}`;

    // Create the WhatsApp link
    const whatsappLink = `https://wa.me/${internationalPhoneNumber}`;

    // Open WhatsApp in a new tab/window
    window.open(whatsappLink, "_blank");
  };

  return (
    <Navbar expand="lg " className="row m-0 p-0">
      <Container>
        <Navbar.Brand className="clr fnt bg-white  rounded-lg brd p-1" href="/">
          <img
            src="..\assests\Screenshot_4-removebg-preview.png"
            width={216}
            height={36}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="clr fnt me-2">
            <img
              alt=""
              className="cursor-pointer"
              onClick={openWhatsapp}
              src="..\images\wicon1 (1).png"
              width={40}
              height={40}
            />
          </Nav>
          <Nav className="clr fnt me-2">
            {" "}
            <a href="https://www.instagram.com/vucareservices/">
              <img
                alt=""
                src="..\images\wicon1 (2).png"
                width={50}
                height={50}
              />
            </a>
          </Nav>
          <Nav className="clr fnt me-2">
            <img alt="" src="..\images\wicon1 (3).png" width={40} height={40} />
          </Nav>
          <Nav className="clr fnt me-2">
            <a href={`tel:${phoneNumber}`} className="text-decoration-none">
              <Button variant="outlined" size="medium">
                <span className="me-2">
                  <WifiCalling3Icon style={{ color: "skyblue" }} />
                </span>{" "}
                <span className="text-dark">+91 9980670037</span>
              </Button>
            </a>
          </Nav>

          {userData !== null && userData !== undefined ? (
            // Render content when userData is available
            <Nav className="clr fnt me-2" onClick={handleShow}>
              <Button className="text-dark" variant="outlined" size="medium">
                <AccountCircleIcon /> {userData.customerName}
              </Button>
            </Nav>
          ) : (
            // Render content for users not logged in
            <Nav className="clr fnt">
              <Button
                className="text-dark  me-2"
                variant="outlined"
                size="medium"
                href="/login"
              >
                Login
              </Button>
              <Button
                className="text-dark  me-2"
                variant="outlined"
                size="medium"
                href="/register"
              >
                Sign Up
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Name : {userData?.customerName}</p>
          <p>Contact : {userData?.contactPerson}</p>
        </Offcanvas.Body>
        <div>
          <p
            className="ms-2"
            onClick={handleLogout}
            style={{ cursor: "pointer" }}
          >
            Logout
          </p>
        </div>
      </Offcanvas>
    </Navbar>
  );
}
