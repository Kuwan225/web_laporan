import "./tabel.scss";
import React, { useState } from "react";
import { getDatabase, ref, remove, update } from "firebase/database";
import notif from "../../../components/notif";

const Tabel = (props) => {
  const db = getDatabase();
  const { no, id, namaProduk, harga, promo, hargaPromo } = props;
  const [editOption, setEditOption] = useState(false);

  const [noEdit, setNoEdit] = useState(no);
  const [namaProdukEdit, setNamaProdukEdit] = useState(namaProduk);
  const [hargaEdit, setHargaEdit] = useState(harga);
  const [promoEdit, setPromoEdit] = useState(promo);

  const hapusProduk = (id) => {
    remove(ref(db, `produk/${id}`)).then(() => {
      notif.succes("Produk di hapus");
    });
  };
  const saveHandler = (id) => {
    const promos = (harga * promo) / 100;
    const result = harga - promos;
    update(ref(db, `produk/${id}`), {
      namaProduk: namaProdukEdit,
      harga: hargaEdit,
      promo: promoEdit,
      hargaPromo: result,
    }).then(() => {
      setEditOption(false);
      notif.succes("Produk berhasil di update");
    });
  };
  return (
    <tr className="tr-td">
      {!editOption ? (
        <>
          <td>{no}</td>
          <td>{namaProduk}</td>
          <td>{harga}</td>
          <td>{promo}%</td>
          <td>{hargaPromo}</td>
          <td>
            <div className="button">
              <button onClick={() => hapusProduk(id)}>Hapus</button>
              <button className="edit" onClick={() => setEditOption(true)}>
                Edit
              </button>
            </div>
          </td>
        </>
      ) : (
        <>
          <td>{no}</td>
          <td>
            <input
              type="text"
              value={namaProdukEdit}
              onChange={(e) => setNamaProdukEdit(e.target.value)}
            />
          </td>
          <td>
            <input
              type="number"
              value={hargaEdit}
              onChange={(e) => setHargaEdit(e.target.value)}
            />
          </td>
          <td>
            <input
              type="number"
              value={promoEdit}
              onChange={(e) => setPromoEdit(e.target.value)}
            />
            %
          </td>
          <td>{hargaPromo}</td>
          <td>
            <div className="button">
              <button
                onClick={() => {
                  setEditOption(false);
                }}
              >
                Cancel
              </button>
              <button className="edit" onClick={() => saveHandler(id)}>
                Save
              </button>
            </div>
          </td>
        </>
      )}
    </tr>
  );
};

export default Tabel;
