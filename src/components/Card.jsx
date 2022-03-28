import "./scss/card.scss";
import React, { useState } from "react";
import Button from "../components/Button";
import From from "./From";

const Card = ({ gambar, nama, harga, id, promo, hargaPromo }) => {
  const [hideButton, setHideButton] = useState(false);
  const [form, setForm] = useState(false);
  const [kg, setKg] = useState(1);

  return (
    <>
      {form && (
        <From setForm={setForm} produk={nama} id={id} kg={kg} harga={harga} />
      )}
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
            <>
              <div className="berapa-kg">
                <span
                  className="minus"
                  onClick={() => {
                    if (kg > 1) {
                      setKg(kg - 1);
                    }
                  }}
                >
                  -
                </span>
                <span>{kg} Kg</span>
                <span className="plus" onClick={() => setKg(kg + 1)}>
                  +
                </span>
              </div>
              <Button label={"Beli sekarang"} click={() => setForm(true)} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
