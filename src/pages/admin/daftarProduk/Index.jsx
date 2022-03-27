import "./daftar.scss";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import Tabel from "./tabel";

const DaftarProduk = () => {
  const db = getDatabase();
  const Navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const endPoint = ref(db, `produk`);
    onValue(endPoint, (snapshot) => {
      const data = [];
      Object.keys(snapshot.val()).map((key, idx) => {
        data.push({
          id: key,
          no: idx + 1,
          data: snapshot.val()[key],
        });
      });
      setData(data);
    });
  }, []);

  const tambahProduk = () => {
    if (data.length < 5) {
      Navigate("/admin/add_produk");
    }
  };

  return (
    <div className="container-daftar">
      <h1>Daftar produk</h1>
      <p>Produk promosi maximal 5 produk</p>

      <Link className="back" to="/admin">
        Pesanan pembeli
      </Link>
      <p onClick={tambahProduk} className={"daftar"}>
        Tambah produk
      </p>
      <hr />
      {data.map((el) => {
        return (
          <Tabel
            key={el.id}
            id={el.id}
            no={el.no}
            namaProduk={el.data.namaProduk}
            harga={el.data.harga}
            promo={el.data.promo}
            hargaPromo={el.data.hargaPromo}
          />
        );
      })}
    </div>
  );
};

export default DaftarProduk;
