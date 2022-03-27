import "./scss/card.scss";
import React, { useState } from "react";
import Button from "../components/Button";
import From from "./From";

const Card = ({ gambar, nama, harga, id, promo, hargaPromo }) => {
  const [hideButton, setHideButton] = useState(false);
  const [form, setForm] = useState(false);

  return (
    <>
      {form && <From setForm={setForm} produk={nama} id={id} />}
      <div
        className="container-card"
        onMouseOver={() => setHideButton(true)}
        onMouseLeave={() => setHideButton(false)}
      >
        <div className="content-image">
          <img src={gambar} alt="" />
          <div className="promo">{promo}%</div>
        </div>
        <div className="content-detail">
          <h1 className="title">{nama}</h1>
        </div>
        <div className="content-button">
          {!hideButton ? (
            <>
              <p className="hargas">
                <p className="hargaPromo">
                  <span>Rp:</span> {hargaPromo}/Kg
                </p>
                <p className="hargaAsli">Rp:{harga}/Kg</p>
              </p>
            </>
          ) : (
            <Button label={"Beli sekarang"} click={() => setForm(true)} />
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
