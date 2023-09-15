import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Dropdown, DropdownButton } from "react-bootstrap";
import { Button } from "@mui/material";
import FreshLookDiv from "./FreshLookDiv";
import SeeMoreButton from "./SeeMoreButton";
import DropdownDiv from "./DropdownDiv";
import "../pages/Desktop1.css";

const Desktop1 = () => {
  return (
    <a className="desktop-1">
      <section className="desktop-1-child" />
      <section className="rectangle" />
      <FreshLookDiv />
      <h1 className="lorem-ipsum-dolor">Fresh</h1>
      <h1 className="lorem-ipsum-dolor1">Look</h1>
      <div className="lorem-ipsum-dolor2">2022</div>
      <header className="desktop-1-item" />
      <footer className="desktop-1-inner" />
      <section className="section" />
      <div className="home">HOME</div>
      <div className="about">ABOUT</div>
      <div className="copyright-2022-all">
        Copyright 2022 All Right Reserved By SG
      </div>
      <div className="contact-us">CONTACT US</div>
      <div className="bag-0">BAG (0)</div>
      <div className="wishlist-0">WISHLIST (0)</div>
      <h1 className="shopkart">ShopKart</h1>
      <div className="free-delivery">Free Delivery</div>
      <div className="return-policy">Return Policy</div>
      <div className="login">Login</div>
      <div className="follow-us">Follow US</div>
      <img className="layer-156-icon" alt="truck" src="/layer-156.svg" />
      <img className="vector-icon" alt="" src="/vector1.svg" />
      <img className="vector-icon1" alt="" src="/vector12.svg" />
      <img className="vector-icon2" alt="" src="/vector2.svg" />
      <img className="group-icon" alt="" src="/group-6.svg" />
      <div className="line-div" />
      <img className="desktop-1-child1" alt="" src="/group-16.svg" />
      <div className="get-news-about-container">
        <p className="blank-line">&nbsp;</p>
        <p className="blank-line">
          Get news about articles and updates in your inbox.
        </p>
      </div>
      <h2 className="newslleter">Newslleter</h2>
      <Form className="name">
        <Form.Label>NAME</Form.Label>
        <Form.Control type="text" placeholder="Input placeholder" />
      </Form>
      <Form className="email">
        <Form.Label>EMAIL</Form.Label>
        <Form.Control type="text" placeholder="Input placeholder" />
      </Form>
      <Form className="message">
        <Form.Label>MESSAGE</Form.Label>
        <Form.Control type="text" placeholder="Input placeholder" />
      </Form>
      <section className="lorem-ipsum-dolor-container">
        <p className="blank-line">{`GET `}</p>
        <p className="blank-line">IN TOUCH</p>
      </section>
      <div className="desktop-1-child2" />
      <div className="desktop-1-child3" />
      <div className="desktop-1-child4" />
      <div className="button">
        <div className="button-child" />
        <h2 className="send">SEND</h2>
      </div>
      <SeeMoreButton
        primaryButtonDisplay="unset"
        primaryButtonFlexDirection="unset"
        primaryButtonAlignItems="unset"
        primaryButtonJustifyContent="unset"
        primaryButtonGap="unset"
        primaryButtonPosition="absolute"
        primaryButtonTop="696px"
        primaryButtonLeft="115px"
      />
      <DropdownDiv
        dropdownDisplay="flex"
        dropdownFlexDirection="column"
        dropdownPosition="absolute"
        dropdownTop="115px"
        dropdownLeft="490px"
      />
    </a>
  );
};

export default Desktop1;
