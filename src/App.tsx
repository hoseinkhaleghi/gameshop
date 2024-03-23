// import {ToastContainer} from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./pages/landingpage/Landingpage";
import Favorite from "./pages/favorite/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
