import React from "react";
import "./home.scss";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import img from "../../image/iconShoping.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Navbar active="aktif" />
      <div className="container-home">
        <div className="content-caption">
          <h1>Warning!</h1>
          <p>
            Website ini dapat menyebabkan anda ketagihan melihat harga yang
            murah dari sayur-sayuran yang fresh dan berkualitas.
          </p>
          <div className="home-button">
            <Link to="/product">
              <Button label="Ke Product" />
            </Link>
          </div>
        </div>
        <div className="content-image">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
