import React from "react";
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <footer>
      <div className="footer mt-5 py-5">
        <div className="socialIcon">
          <i className="fa-brands fa-facebook-square"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram-square"></i>
        </div>
        <div>
          <h5>Terms Info Privacy</h5>

          <h5>Support Contact Policy</h5>

          <p className="">
            <small>
              copyright @ {year} All Rights Reserved. Design By bkhadiza40
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
