import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/User";
import homePage from "./pages/homePage";
import productPage from "./pages/productPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={homePage()} />
          <Route path="product/:id" element={productPage()} />
        </Route>

        {/* <Route path="/" element={<UserLayout />}>
          <Route index element={homePage()} />
          <Route path="product/:id" element={productPage()} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
