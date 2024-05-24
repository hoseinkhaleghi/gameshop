import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "../pages/landingpage/Landingpage";
import Favorite from "../pages/favorite/Index";
import Dashboard from "../pages/Dashboard/Index";
import Settings from "../pages/settings";
import Signup from "../pages/signup";
import Signin from "../pages/signin";
import About from "../pages/About/Index";
import { Cart } from "../pages/cart";
import Products from "../components/features/landingpage/products/Products";
import DetailProducts from "../components/features/landingpage/products/DetailProducts";
import Header from "../components/features/landingpage/Header";
// import { ShoppingCart } from "../components/features/shopping/ShoppingCart";
// import { CartItem } from "../components/features/shopping/CartItem";

export default function Router() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:name" element={<DetailProducts />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="favorite" element={<Favorite />} />
          <Route path="settings" element={<Settings />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>
  );
}
