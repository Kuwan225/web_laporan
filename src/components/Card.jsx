import "./scss/card.scss";
import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import From from "./From";

const Card = (props) => {
  const { gambar, nama, harga, id, promo, hargaPromo, stok } = props;
  const [hideButton, setHideButton] = useState(false);
  const [form, setForm] = useState(false);
  const [kg, setKg] = useState(1);
  const [stokAbis, setStokAbis] = useState(false);
  const [imageAbis, setImageAbis] = useState(false);

  useEffect(() => {
    if (stok <= 0) {
      setStokAbis(true);
    }
  }, []);

  const plusHandler = () => {
    if (kg < stok) {
      setKg(kg + 1);
    }
  };
  return (
    <>
      {form && (
        <From
          setForm={setForm}
          produk={nama}
          id={id}
          kg={kg}
          harga={harga}
          stok={stok}
        />
      )}
      <div
        className="container-card"
        onMouseOver={() => {
          setHideButton(true);
          if (stokAbis) {
            setImageAbis(true);
          }
        }}
        onMouseLeave={() => {
          setHideButton(false);
          if (stokAbis) {
            setImageAbis(false);
          }
        }}
      >
        <div className="content-image">
          <img src={gambar} alt="" />
          {imageAbis && <p className="sold">Stok abis</p>}
          <div className="promo">{promo}%</div>
        </div>
        <div className="content-detail">
          <h1 className="title">{nama}</h1>
          <p>stok:{stok}/Kg</p>
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
              {!stokAbis && (
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
                  <span className="plus" onClick={plusHandler}>
                    +
                  </span>
                </div>
              )}

              <Button
                disabled={stokAbis}
                class={stokAbis && "disable"}
                label={stokAbis ? "Stok abis" : "Beli sekarang"}
                click={() => setForm(true)}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
