import React from "react";
import { Link } from "react-router-dom";
import Youtube from "./Common/Youtube";
import Insta from "./Common/Insta";
import Twitter from "./Common/Twitter";
import Facebook from "./Common/Facebook";

export const Footer = () => (
    // <div className="footer-wrapper">
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <div className="app-footer">
          <div className="social-links-section">
            {/* <FullLogo iconfill="#ffffff" iconWidth="168" iconHeight="34" className="full-logo" alt="Singleton Logo" /> */}
            <div className="footer-socail-icon">
              <a
                href="https://www.instagram.com/millionstoriesmedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Insta iconWidth="24" iconHeight="24" iconfill="#ffffff" />
              </a>
              <a
                href="https://www.facebook.com/anilbindash36"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Facebook iconWidth="24" iconHeight="24" iconfill="#ffffff" />
              </a>
              <a
                href="https://twitter.com/8fefd46c180749e"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Twitter iconWidth="24" iconHeight="24" iconfill="#ffffff" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCympMR_6LqCzWzLUng3OWig"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link youtube"
              >
                <Youtube iconWidth="24" iconHeight="24" iconfill="#ffffff" />
              </a>
            </div>
          </div>
          <div className="app-footer-links">
            <Link to="/about"><a>About</a></Link>
            <Link to="/policy"><a>Privacy Policy</a></Link>
            <button
              onClick={() => {
                //handleContactModal();
              }}
            >
              Contact Us
            </button>
          </div>
          <div className="copy-right">
            &copy; {new Date().getFullYear()} Expense Manager
          </div>
        </div>
      </div>
    </div>
  </header>
  //</div>
);

export default Footer;
