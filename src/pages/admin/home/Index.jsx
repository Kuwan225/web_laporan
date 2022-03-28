import React, { useEffect, useState } from "react";
import "./home.scss";
import { getDatabase, ref, onValue, update } from "firebase/database";
import { Link } from "react-router-dom";
import notif from "../../../components/notif";

const HomeAdmin = () => {
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
  const diKirimHandler = (id, produk) => {
    update(ref(db, `pembeli/${id}`), {
      diKirim: true,
    }).then(() => {
      notif.succes("Produk sedang di kirim");
    });

    update(ref(db, `produk/${produk}`), {
      diPesan: false,
    });
  };

  return (
    <div className="container-admin">
      <div className="content-admin">
        <h1>Daftar pesanan pembeli</h1>
        <Link to="/admin/daftar_produk" className="tambah">
          Daftar Produk
        </Link>
        <Link to="/" className="back">
          Kembali ke penjualan
        </Link>
        <Link to="/admin/produk_terkirim" className="terkirim">
          Produk terkirim
        </Link>
        <hr />
        <table>
          <tr>
            <th>No</th>
            <th>produk</th>
            <th>Jumlah harga</th>
            <th>Nama pembeli</th>
            <th>No hp</th>
            <th>Email</th>
            <th>Alamat</th>
            <th>Status</th>
          </tr>

          {data.map((el) => {
            return (
              el.data.diKirim === false && (
                <tr key={el.id}>
                  <td>{el.no}</td>
                  <td>{el.data.namaProduk}</td>
                  <td>{el.data.harga}</td>
                  <td>{el.data.namalengkap}</td>
                  <td>{el.data.nohp}</td>
                  <td>{el.data.email}</td>
                  <td>{el.data.alamat}</td>
                  <td>
                    <button
                      onClick={() => diKirimHandler(el.id, el.data.idProduk)}
                    >
                      Kirim
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

export default HomeAdmin;
