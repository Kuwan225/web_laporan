import "./product.scss";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import { getDatabase, ref, onValue } from "firebase/database";

const Product = () => {
  const db = getDatabase();
  const [data, setData] = useState([]);

  useEffect(() => {
    const endPoint = ref(db, `produk`);
    onValue(endPoint, (snapshot) => {
      const data = [];
      Object.keys(snapshot.val()).map((key) => {
        data.push({
          id: key,
          data: snapshot.val()[key],
        });
      });
      setData(data);
    });
  }, []);
  return (
    <>
      <div className="container-product">
        <Navbar activeProduct="aktif" />
        <div className="content-product">
          <h1>Produk Yang Di Tawarkan</h1>
          <hr />
          <div className="cards">
            {data.map((el) => {
              return (
                <Card
                  key={el.id}
                  gambar={el.data.gambar}
                  nama={el.data.namaProduk}
                  hargaPromo={el.data.hargaPromo}
                  id={el.id}
                  promo={el.data.promo}
                  harga={el.data.harga}
                  stok={el.data.stok}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
