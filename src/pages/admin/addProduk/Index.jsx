import "./addproduk.scss";
import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { getDatabase, ref, push } from "firebase/database";
import { useForm } from "react-hook-form";

const Addproduk = () => {
  const { handleSubmit, register } = useForm();
  const db = getDatabase();
  const Navigate = useNavigate();
  const [gambar, setGambar] = useState("");

  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    const promo = (data.harga * data.promo) / 100;
    const result = data.harga - promo;
    push(ref(db, `produk`), {
      gambar: data.gambar,
      namaProduk: data.namaProduk,
      harga: data.harga,
      promo: data.promo,
      hargaPromo: result,
    }).then(() => {
      console.log("Berhasil");
      setLoading(true);
      setTimeout(() => {
        Navigate("/admin/daftar_produk");
        setLoading(false);
      }, 2000);
    });
  };

  return (
    <>
      {loading && (
        <div className="loading">
          <div className="content-loading">
            <div className="efek"></div>
            <div className="caption">
              <p>loading...</p>
            </div>
          </div>
        </div>
      )}
      <div className="container-add">
        <div className="content-add">
          <h1>Tambah produk</h1>
          <Link className="daftar" to="/admin/daftar_produk">
            Daftar produk
          </Link>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            {gambar && <img src={gambar} />}
            <input
              type="text"
              placeholder="Url gambar"
              {...register("gambar", {
                required: true,
                onChange: (e) => {
                  setGambar(e.target.value);
                },
              })}
            />
            <input
              type="text"
              placeholder="Nama produk"
              {...register("namaProduk", {
                required: true,
              })}
            />
            <input
              type="number"
              placeholder="Harga Asli"
              {...register("harga", {
                required: true,
              })}
            />
            <input
              type="number"
              placeholder="Persentase promo"
              {...register("promo", {
                required: true,
              })}
            />
            <div className="button">
              <Button label="Upload" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addproduk;
