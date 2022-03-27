import "./scss/navbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { active, activeTentang, activeProduct, activeLokasi } = props;
  return (
    <nav>
      <div className="logo">{/* <h1>Wan</h1> */}</div>
      <ul>
        <Link to="/" className="link">
          <li className={active}>Beranda</li>
        </Link>
        <Link to="/tentang" className="link">
          <li className={activeTentang}>Tentang</li>
        </Link>
        <Link to="/product" className="link">
          <li className={activeProduct}>Produk</li>
        </Link>
        <Link to="/lokasi" className="link">
          <li className={activeLokasi}>Lokasi</li>
        </Link>
        <Link to="/kontak" className="link">
          <li>Kontak</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
