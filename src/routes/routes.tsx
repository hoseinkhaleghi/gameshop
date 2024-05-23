import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "../pages/landingpage/Landingpage";
import Favorite from "../pages/favorite/Index";
import Dashboard from "../pages/Dashboard/Index";
import Settings from "../pages/settings";
import Signup from "../pages/signup";
import Signin from "../pages/signin";
import About from "../pages/About/Index";
import { Cart } from "../pages/cart";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="favorite" element={<Favorite />} />
          <Route path="settings" element={<Settings />} />
          <Route path="cart" element={<Cart />} />
          {/* <Route index element={<Navigate to="createmodel" />}></Route>
        <Route path="createmodel" element={<Createmodel />} />
        <Route path="models" element={<Models />} />
        <Route path="orders" element={<Orders />} />
        <Route path="submitoffer" element={<Submitoffer />} />
        <Route path="settings" element={<Settings />} /> */}
        </Route>
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>
  );
}
