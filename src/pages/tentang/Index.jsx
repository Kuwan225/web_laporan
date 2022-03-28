import "./tentang.scss";
import React from "react";
import Navbar from "../../components/Navbar";

const Tentang = () => {
  return (
    <>
      <div className="tentang">
        <Navbar activeTentang="aktif" />
        <div className="container-tentang">
          <h1>Tentang Website</h1>
          <p>
            Website ini di buat untuk mempromosikan dagangan bapak saya karna
            dengan adanya website ini semoga pengahasilah bapak saya jadi bisa
            bertambah. Dan saya mengucapkan kepada semua pelanggan yang mau
            berkunjung ke website kami saya ucapkan terima kasih.
          </p>
        </div>
        <div className="visi-misi">
          <h1>Visi-Misi</h1>
          <p>
            Menjual sayuran yang fresh,Kemudian berjualan dengan jujur dan
            teliti
          </p>
        </div>
      </div>
    </>
  );
};

export default Tentang;
