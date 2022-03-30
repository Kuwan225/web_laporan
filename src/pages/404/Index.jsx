import "./404.scss";
import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="noHalaman">
      <div className="content-halaman">
        <div className="image"></div>
        <div className="button">
          <Link to="/">
            <Button label="Kembali Ke Beranda" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
