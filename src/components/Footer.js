import React from "react";
import facebookIcon from "../images/facebook.png";
import twitterIcon from "../images/twitter.png";
import instagramIcon from "../images/instagram.png";
import youtubeIcon from "../images/youtube.png";
import shieldIcon from "../images/shieldIcon.png";
import repeatIcon from "../images/repeatIcon.png";
import angleIcon from "../images/angle.png";
import "../styles/Footer.css";
import "../styles/PreFooter.css";
const Footer = ({ support, shopAndLearn, retailStore, aboutUS, contactUs }) => {
  return (
    <>
      <div className="PreFooter">
        <div>
          <img src={repeatIcon} alt="" />
          <p>
            <b>Hassle free replacement</b> 10-day easy replacement policy on
            mi.com
          </p>
        </div>
        <div>
          <img src={shieldIcon} alt="" />
          <p>
            <b>100% secure payments</b> We supports Cards, Wallets, EMI and COD
          </p>
        </div>
        <div>
          <img src={shieldIcon} alt="" />
          <p>
            <b>Vast service network</b>1000 Mi service-centers across 600 cities
          </p>
        </div>
      </div>
      <div className="PreFooter2">
        <div>
          <img src={shieldIcon} alt="" />
          <p>LET'S STAY IN TOUCH</p>
          <span>Get updates on sales specials and more</span>
        </div>
        <div>
          <div>
            <input type="email" placeholder="Enter Email Address" />
            <button>
              <img src={angleIcon} alt="" />
            </button>
          </div>
        </div>
        <div>
          <p>FOLLOW MI</p>
          <span>We Want to hear form you1</span>
        </div>
        <div>
          <img src={facebookIcon} alt="" />
          <img src={youtubeIcon} alt="" />
          <img src={instagramIcon} alt="" />
          <img src={twitterIcon} alt="" />
        </div>
      </div>

      <div className="footer">
        <div>
          <p>SUPPORT</p>
          {support.map((item) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <p>SHOP AND LEARN</p>
          {shopAndLearn.map((item) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <p>RETIAL STORE</p>
          {retailStore.map((item) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <p>ABOUT</p>
          {aboutUS.map((item) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <p>CONTACT US</p>
          {contactUs.map((item) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <div>Chat with our Virtual AI Bot (24/7 Live Agent Support)</div>
          <button>CHAT NOW</button>
        </div>
      </div>
    </>
  );
};

export default Footer;
