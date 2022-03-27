import React from "react";
import "./home.scss";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
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
          <img
            src="https://img.freepik.com/free-vector/street-seller-illustration_1284-11371.jpg?t=st=1647875202~exp=1647875802~hmac=60de3ad1942fb215a258193d110e20d12a752737d4d888b58fd7cd329e7d720d&w=740"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
