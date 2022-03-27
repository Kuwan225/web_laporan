import Home from "../home/Index";
import "./app.scss";
import bg from "../../image/wave.svg";
import { Route, Routes } from "react-router-dom";
import Tentang from "../tentang/Index";
import Product from "../product/Index";
import Error from "../404/Index";
import Footer from "../../components/Footer";
import Login from "../admin/login/Index";
import HomeAdmin from "../admin/home/Index";
import Addproduk from "../admin/addProduk/Index";
import DaftarProduk from "../admin/daftarProduk/Index";
import Terkirim from "../admin/terkirim/Index";

function App() {
  return (
    <div className="App">
      <div className="wm">
        <h1>Wan</h1>
      </div>
      <div className="container-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tentang" element={<Tentang />} />
          <Route path="product" element={<Product />} />
          {/* ================ADMIN================= */}
          <Route path="admin/login" element={<Login />} />
          <Route path="admin" element={<HomeAdmin />} />
          <Route path="admin/add_produk" element={<Addproduk />} />
          <Route path="admin/daftar_produk" element={<DaftarProduk />} />
          <Route path="admin/produk_terkirim" element={<Terkirim />} />
          {/* =================404================== */}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>

      <img className="image-app" src={bg} alt="" />
      <Footer />
    </div>
  );
}

export default App;
