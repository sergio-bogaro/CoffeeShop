import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout/Default";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
      </Route>
    </Routes>
  );
}
