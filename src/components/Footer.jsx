import "./scss/footer.scss";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        <Link className="link" to="/admin/login">
          <AiOutlineCopyright />
          Wan
        </Link>
        || Create by Marwan maulana
      </p>
    </div>
  );
};

export default Footer;
