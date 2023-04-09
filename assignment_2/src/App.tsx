import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/User";
import HomePage from "./pages/homePage";
import Signup from "./pages/signUpPage";
import Login from "./pages/loginPage";
import ProductPage from "./pages/productPage";
import DashBoard from "./pages/dashBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<ProductPage />} />
        </Route>
        <Route path="/admin" element={<DashBoard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
