import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import "./scss/form.scss";
import { useForm } from "react-hook-form";
import { getDatabase, ref, push, update } from "firebase/database";
import notif from "./notif";

const From = ({ setForm, produk, id, kg, harga }) => {
  const Navigate = useNavigate();
  const db = getDatabase();
  const { handleSubmit, register } = useForm();
  const totalHarga = harga * kg;

  const onSubmit = (data) => {
    push(ref(db, `pembeli`), {
      namaProduk: produk,
      harga: totalHarga,
      idProduk: id,
      namalengkap: data.namalengkap,
      nohp: data.nohp,
      email: data.email,
      alamat: data.alamat,
      diKirim: false,
    })
      .then(() => {
        Navigate("/");
        update(ref(db, `produk/${id}`), {
          diPesan: true,
        });
        notif.succes("Silahkan tunggu 1 x 24jam setelah dipesan");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container-form">
      <div className="content-form">
        <div className="back">
          <Button
            label="Cancel"
            click={() => {
              setForm(false);
            }}
          />
        </div>
        <div className="title">
          <h1>Data pembeli:</h1>
          <p>
            Isi Data di bawah ini dengan tepat dan akurat agar kami bisa
            mengirim barang dengan cepat
          </p>
          <hr />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-form">
            <div className="left">
              <label htmlFor="">Nama lengkap:</label>

              <Input
                place="Masukan Nama Kamu"
                name="namalengkap"
                register={register("namalengkap", {
                  required: true,
                })}
              />
              <label htmlFor="">No hp:</label>
              <Input
                place="Masukan No Hp Kamu"
                type="number"
                name="nohp"
                register={register("nohp", {
                  required: true,
                })}
              />
              <label htmlFor="">Email:</label>
              <Input
                place="Masukan Email Kamu"
                type="email"
                name="email"
                register={register("email", {
                  required: true,
                })}
              />
            </div>
            <div className="right">
              <label htmlFor="">Alamat:</label>
              <textarea
                placeholder="Masukan Alamat Kamu Secara Lengkap"
                name="alamat"
                cols="30"
                rows="10"
                {...register("alamat", {
                  required: true,
                })}
              ></textarea>
            </div>
          </div>
          <div className="bottom">
            <div className="button">
              <Button label="Kirim" />
            </div>
            <div className="warning">
              <h3>Peringatan!</h3>
              <p>
                Mengklik Kirim Sama Dengan Kamu Sudah Memesan Dan Pesanan Kamu
                Tidak Bisa Di Batalkan
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default From;
