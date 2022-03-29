import React from "react";
import "./scss/navbaradmin.scss";
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  return (
    <div className="navbar-admin">
      <div className="kembali">
        <Link className="link" to={"/"}>
          Kembali ke jualan
        </Link>
      </div>
      <ul>
        <li>
          <Link className="link" to={"/admin"}>
            Daftar pesanan
          </Link>
        </li>
        <li>
          <Link className="link" to={"/admin/daftar_produk"}>
            Daftar produk
          </Link>
        </li>
        <li>
          <Link className="link" to={"/admin/tambah_produk"}>
            Tambah produk
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarAdmin;
