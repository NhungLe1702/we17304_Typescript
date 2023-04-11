import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/User";
import HomePage from "./pages/client/homePage";
import Signup from "./pages/client/signUpPage";
import Login from "./pages/client/loginPage";
import ProductPage from "./pages/client/productPage";
import DashBoard from "./pages/admin/dashBoard";
import AdminLayout from "./components/layout/admin";
import ProductUpdate from "./pages/admin/product/updateProd";
import ProductAdd from "./pages/admin/product/addProd";
import ListProduct from "./pages/admin/product/listProd";
import ListCate from "./pages/admin/category/listCate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />

        <Route path="/signup" element={<Signup />} />
        
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<ProductPage />} />
        </Route>

        <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={<DashBoard />} />
          <Route path="product/" element={<ListProduct />} />
          <Route path="product/:id" element={<ProductUpdate />} />
          <Route path="product/add" element={<ProductAdd />} />
          <Route path="category/" element={<ListCate />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
