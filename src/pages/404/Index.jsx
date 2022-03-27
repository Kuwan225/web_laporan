import "./404.scss";
import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="noHalaman">
      <h1>404</h1>
      <p>Belum Ada Halaman Hehe:)</p>
      <div className="button">
        <Link to="/">
          <Button label="Kembali Ke Beranda" />
        </Link>
      </div>
    </div>
  );
};

export default Error;
