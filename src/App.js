import "./App.css";
import Home from "./components/MainPageShowShopsTable";
import Addshop from "./components/MainPageAddShop";
import ShowProducts from "./components/MainPageShowProductsTable";
import AddProduct from "./components/MainPageAddProduct";
import SeeProduct from "./components/Product";
// import Splash from "./components/Splash";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      {/* <Splash /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Addshop" element={<Addshop />} />
        <Route path="/showproducts" element={<ShowProducts />} />
        <Route path="/Addproduct" element={<AddProduct />} />
        <Route path="/ProductDetail" element={<SeeProduct />} />
      </Routes>
    </div>
  );
}
export default App;
