import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="page-footer purple darken-3">
      <div className="footer-copyright">
        <div className="container">
          <span className="footer-autor">© 2021 Developer Robert Zhukov</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
