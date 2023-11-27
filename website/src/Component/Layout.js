import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "../Component/layout.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import axios from "axios";
import Review from "./review";
// import Modal from "@mui/material/Modal";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Header from "./Header";

export default function Layout() {
  const [Banner, setBanner] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [category, setCategory] = useState([]);
  const [selcategory, setselcategory] = useState("");
  const [filtersub, setfiltersub] = useState([]);
  const [subModel, setsubModel] = useState(false);

  useEffect(() => {
    GetAllWebBanner();
    getAllCategory();
  }, []);

  const GetAllWebBanner = async () => {
    try {
      let res = await axios.get(
        "http://api.thevucare.com/api/website/getallwebbanner"
      );

      if (res.status === 200) {
        setBanner(res.data.banner);
      }
    } catch (er) {
      console.log(er, "err while fetching data");
    }
  };

  const filtercatsub = (cat) => {
    setselcategory(cat);

    setsubModel(true);
  };

  useEffect(() => {
    getsubcategory();
  }, [selcategory]);

  const getsubcategory = async () => {
    let res = await axios.get(`http://api.thevucare.com/api/userapp/getappsubcat`);

    if ((res.status = 200)) {
      setCategoryData(res.data.subcategory);

      setfiltersub(
        res.data.subcategory.filter(
          (i) => i.category?.toLowerCase() === selcategory?.toLowerCase()
        )
      );
    }
  };

  const getAllCategory = async () => {
    try {
      let res = await axios.get("http://api.thevucare.com/api/getcategory");
      if (res.status === 200) {
        const firstInFirstOut = res.data.category.reverse();
        setCategory(firstInFirstOut);
      }
    } catch (er) {
      console.log(er, "err while fetching data");
    }
  };

  const cleaningItemsCount = categoryData.filter((item) =>
    item?.category?.toLowerCase()?.includes("cleaning")
  )?.length;

  const actualCleaningSlidesToShow = Math?.min(cleaningItemsCount, 6);

  const pestControlItemsCount = categoryData?.filter((item) =>
    item?.category?.toLowerCase()?.includes("control")
  )?.length;

  const actualPestControlSlidesToShow = Math.min(pestControlItemsCount, 6);

  const paintingcontorl = categoryData.filter((item) =>
    item?.category?.toLowerCase()?.includes("painting")
  )?.length;

  const painitnca = Math.min(paintingcontorl, 6);

  const commonSliderSettings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
        adaptiveHeight: true,
        centerMode: true,
        variableWidth: true,
        dots: true,
        arrows: true,
        azyLoad: "ondemand",
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
        adaptiveHeight: true,
        centerMode: true,
        variableWidth: true,
        dots: true,
        arrows: true,
        azyLoad: "ondemand",
      },
    ],
  };

  const pestControlSettings = {
    ...commonSliderSettings,
    slidesToShow: actualPestControlSlidesToShow,
  };

  const cleaningSettings = {
    ...commonSliderSettings,
    slidesToShow: actualCleaningSlidesToShow,
  };

  const actualPaintingSetting = {
    ...commonSliderSettings,
    slidesToShow: painitnca,
  };

  const justforyou = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
  };
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowModal = window.scrollY > 2000;

      if (shouldShowModal) {
        handleShow();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [selectedService, setSelectedService] = useState(null);

  const handleServiceSelection = (service) => {
    setSelectedService(service);
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
    <>
      <div className="row m-0">
        <Header />
      </div>
      <div className="container m-auto responsice-contaienr mrgn">
        <div className="row    medis m-auto">
          <div className="col-md-3 m-auto  responsive-categoyr1 clr2 medis1 ">
            <div className="row responsive-categoyr1   p-2 m-1 medis1 brclr">
              <div className="col-md-6  m-auto ">
                <p className="row fs-5    fsd   clr3 boldt1 text-white">
                  Our Motive Is To Make You
                </p>
              </div>
              <div className="col-md-5">
                <img
                  className="crdbor brclr responsive-img  firstcart imgs"
                  src="..\assests\house.avif"
                  alt=""
                />
              </div>
              <div>
                <p className="row fs-5 p-1 mtchan  textsi fsd  clr3 boldt1 text-white">
                  Comfort In Your Home
                </p>
              </div>
              <div className="row  m-auto">
                <button className="col-md-6 imgbr boldt1  m-auto mb-3 p-2 btn yellw clr2 grndclr  ">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {category.reverse()?.map((ele) => (
            <div className="col-md-2 responsive-categoyr     clr2 clr3 crdbor p-3  m-auto   cursor">
              <Link
                className="row m-auto"
                onClick={() => filtercatsub(ele.category)}
              >
                <img
                  className="col-md-6 imgsub "
                  width={50}
                  height={50}
                  categoryImg
                  src={`http://api.thevucare.com/category/${ele?.categoryImg}`}
                  alt=""
                />{" "}
              </Link>
              <div className="row m-auto">
                {" "}
                <p className="col-md-12   fnt14 textsi  boldt">
                  {ele?.category}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="row    mt-5 ">
          <h2 className="text-center boldt">Just For You</h2>
          <div className="row text-center">
            <button className="col-md-2 m-auto btnd clr3 clr2 yellw1 p-2 boldbtn">
              Newly Lounched
            </button>{" "}
          </div>

          <div className="row mt-3 m-auto slick-listsd ">
            <Slider {...justforyou}>
              {Banner.map((item) => (
                <div key={item._id} className="m-auto">
                  <img
                    className="col-md-11 m-auto  responsive-brimg "
                    width={380}
                    height={180}
                    src={`http://api.thevucare.com/webBanner/${item.banner}`}
                    alt=""
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="row     mt-5 ">
          <h2 className="text-center boldt">Pest Control</h2>

          <div className="row mt-3 slick-listsd slick-listsd1">
            <Slider {...pestControlSettings} className="slick-sliders">
              {categoryData
                .filter((item) =>
                  item.category.toLowerCase().includes("control")
                )
                .map((item) => (
                  <div key={item._id} className="m-auto  linksty">
                    <Link
                      className="linksty"
                      to="/servicedetails"
                      state={{ subcategory: item?.subcategory }}
                      key={item.subcategory}
                    >
                      <img
                        width={150}
                        height={150}
                        src={`http://api.thevucare.com/subcat/${item?.subcatimg}`}
                        className=" shadow bg-white rounded "
                        alt=""
                      />
                      <p className="col-md-10 text-center m-auto p-2 boldt">
                        {item.subcategory}
                      </p>
                    </Link>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
        <div className="row  m-auto  mt-5">
          <Card className="borderrad">
            <img
              className="border1"
              src="..\assests\pest-control-services--1536x512.jpg"
              height={250}
            />
          </Card>
        </div>

        <div className="row  m-auto  mt-5 ">
          <h2 className="text-center">Cleaning Services</h2>
          <div className="row text-center">
            <button className="col-md-3 m-auto btnd clr3 clr2 p-2 yellw1 boldbtn">
              30% Less Than Market Price
            </button>{" "}
          </div>
          <div className="row mt-3 slick-listsd slick-listsd1">
            <Slider {...cleaningSettings} className="slick-sliders">
              {categoryData
                .filter((item) =>
                  item.category.toLowerCase().includes("cleaning ")
                )
                .map((ele) => (
                  <div key={ele._id} className="m-auto  linksty">
                    <Link
                      className="linksty"
                      to="/servicedetails"
                      state={{ subcategory: ele?.subcategory }}
                      key={ele.subcategory}
                    >
                      {" "}
                      <img
                        width={150}
                        height={150}
                        src={`http://api.thevucare.com/subcat/${ele?.subcatimg}`}
                        className="col-md-11 shadow bg-white rounded "
                        alt=""
                      />
                      <p className="text-center m-auto p-2 boldt">
                        {ele.subcategory}
                      </p>
                    </Link>
                  </div>
                ))}
            </Slider>
          </div>
        </div>

        <div className="row  m-auto  mt-5 ">
          <h2 className="text-center boldt">Pest Control</h2>
          <div className="row text-center">
            <button className="col-md-3 m-auto btnd clr3 clr2 p-2 yellw1 boldbtn">
              Asian Paints Certified
            </button>{" "}
          </div>
          <div className="row mt-3 slick-listsd">
            <Slider {...actualPaintingSetting} className="slick-sliders">
              {categoryData
                .filter((item) =>
                  item?.category?.toLowerCase()?.includes("painting")
                )
                .map((item) => (
                  <div key={item._id} className="m-auto slider-item  ">
                    <Link
                      className="linksty"
                      to="/servicedetails"
                      state={{ subcategory: item?.subcategory }}
                      key={item.subcategory}
                    >
                      <img
                        width={150}
                        height={150}
                        src={`http://api.thevucare.com/subcat/${item?.subcatimg}`}
                        className="col-md-11 shadow bg-white rounded "
                        alt=""
                      />
                      <p className="text-center m-auto p-2 boldt linksty">
                        {item.subcategory}
                      </p>
                    </Link>
                  </div>
                ))}
            </Slider>
          </div>
        </div>

        <div className="row   m-auto  mt-5">
          <Card className="borderrad">
            <img className="border1" src="..\assests\ggg-01.png" />
          </Card>
        </div>

        <Review />

        <div className="row me-0  mt-5 mb-5 p-1 p-re">
          <h2 className="text-center boldt">Why Choose Us?</h2>

          <div className="container  mt-3 p-5 rdiu clr2 p-5">
            <p className="yellw1 fs-4">Exceptional Expertise:</p>
            <p className="clr3 fsd">
              Our home services company boasts a team of highly skilled
              professionals with years of experience,ensuring top-notch service
              quality and efficient solutions for all your home needs.
            </p>
            <p className="yellw1 fs-4">Customer-Centric Approach:</p>
            <p className="clr3 fsd">
              We prioritize your satisfaction and convenience,tailoring our
              services to your unique requirements,our dedicated team listens
              attentively and delivers personalized solutions that align with
              your expectations.
            </p>
            <p className="yellw1 fs-4">Reliability And Trust:</p>
            <p className="clr3 fsd">
              Count on us for dependable,trustworthy service. We value
              transparency,punctuality.and a strong work ethic,providing peace
              of mind knowing your home is in capable and caring hands.
            </p>
          </div>
          <div className="row   m-auto p-ab p-ab-top">
            <div className="col-md-2 responsive-brimg  m-auto p-1 text-center  rdiu2">
              <img
                width={50}
                height={50}
                src="..\assests\icons8-expert-48.png"
              />
              <p className="grndclr boldt ">Experts Only </p>
            </div>
            <div className="col-md-2 responsive-brimg  m-auto  p-1 text-center rdiu2">
              <img
                width={50}
                height={50}
                src="..\assests\icons8-house-48.png"
              />
              <p className="grndclr boldt ">Fully Equipped </p>
            </div>
            <div className="col-md-2 responsive-brimg  m-auto text-center p-1 rdiu2">
              <img
                width={50}
                height={50}
                src="..\assests\icons8-business-team-61.png"
              />
              <p className="grndclr boldt ">No Subcontract </p>
            </div>
          </div>
        </div>

        <Modal
          open={subModel}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div>
            <div className="modal_wrapper select-city-modal">
              <div className="modal_header ">
                <div className="col-11">
                  <span>Select the subcategory</span>
                </div>
                <div onClick={() => setsubModel(false)}>
                  <img
                    width={30}
                    height={30}
                    src="..\assests\cancel1.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="modal_body">
                <div className="modacnt ">
                  {filtersub.map((item) => (
                    <Link
                      to="/servicedetails"
                      state={{ subcategory: item?.subcategory }}
                      key={item.subcategory}
                    >
                      <div className="text-align-center subcss">
                        <img
                          src={`http://api.thevucare.com/subcat/${item.subcatimg}`}
                          width="100%"
                          height="100px"
                          alt=""
                        />

                        <p className="p-1 text-black linksty">
                          {item.subcategory}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      <div className="row m-auto p-ab">
        <div className="col-md-2 ms-2 p-fx p-fx-top" onClick={openWhatsapp}>
          <img width={60} alt="" height={60} src="..\images\wicon1 (1).png" />
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>What service are you looking for?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please select the service you are interested in:</p>
          {category.reverse()?.map((ele) => (
            <Button
              className="m-2"
              variant={
                selectedService === ele.category
                  ? "success"
                  : "outline-secondary"
              }
              onClick={() => handleServiceSelection(ele.category)}
            >
              {ele.category}
            </Button>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="col-md-2"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
          {selectedService && (
            <Link
              className="col-md-2 linksty"
              to="/servicedetails"
              state={{ subcategory: selectedService }}
            >
              <Button variant="primary">Submit</Button>
            </Link>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
