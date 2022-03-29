import "./daftar.scss";
import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import Tabel from "./tabel";
import NavbarAdmin from "../../../components/NavbarAdmin";

const DaftarProduk = () => {
  const db = getDatabase();
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

  return (
    <>
      <NavbarAdmin />
      <div className="container-daftar">
        <h1>Daftar produk</h1>
        <p>Produk promosi maximal 5 produk</p>
        <hr />
        <table>
          <tr className="tr-th">
            <th>No</th>
            <th>Nama produk</th>
            <th>Harga</th>
            <th>Promo</th>
            <th>Harga Promo</th>
            <th>Pengaturan</th>
          </tr>
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
        </table>
      </div>
    </>
  );
};

export default DaftarProduk;
