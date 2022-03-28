import "./terkirim.scss";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Terkirim = () => {
  const db = getDatabase();
  const [data, setData] = useState([]);
  useEffect(() => {
    const endPoint = ref(db, `pembeli`);
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

  const hapusHandler = (id) => {
    remove(ref(db, `pembeli/${id}`));
  };
  return (
    <div className="container-terkirim">
      <div className="content-admin">
        <h1>Produk terkirim</h1>
        <Link to="/admin" className="back">
          Kembali ke pesanan
        </Link>
        <hr />
        <table>
          <tr>
            <th>No</th>
            <th>Produk</th>
            <th>Nama pembeli</th>
            <th>No hp</th>
            <th>Email</th>
            <th>Alamat</th>
            <th>Pengaturan</th>
          </tr>

          {data.map((el) => {
            return (
              el.data.diKirim === true && (
                <tr key={el.id}>
                  <td>{el.no}</td>
                  <td>{el.data.namaProduk}</td>
                  <td>{el.data.namalengkap}</td>
                  <td>{el.data.nohp}</td>
                  <td>{el.data.email}</td>
                  <td>{el.data.alamat}</td>
                  <td>
                    <button
                      onClick={() => {
                        hapusHandler(el.id);
                      }}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              )
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Terkirim;
