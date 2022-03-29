import "./scss/navbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { BsShop } from "react-icons/bs";

const Navbar = (props) => {
  const { active, activeTentang, activeProduct, activeLokasi } = props;
  const [checked, setChecked] = useState(false);
  const [burger, setBurger] = useState(false);
  const [hideNav, setHideNav] = useState("");
  const checkedHandler = () => {
    if (checked === false) {
      setChecked(true);
      setHideNav("hide-nav");
      setBurger(true);
    } else {
      setChecked(false);
      setHideNav("");
      setBurger(false);
    }
  };

  return (
    <>
      <div className="nav-mobile">
        <h1>Wan</h1>
        <div className="content">
          {!burger ? <MdMenu className="icon" /> : <MdClose className="icon" />}

          <input type="checkbox" checked={checked} onClick={checkedHandler} />
        </div>
      </div>
      <nav className={hideNav}>
        <div className="logo">
          <h1>
            <BsShop className="icon" />
            Wan
          </h1>
          <hr />
        </div>
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
    </>
  );
};

export default Navbar;
