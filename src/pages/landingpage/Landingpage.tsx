import Footer from "../../components/features/landingpage/Footer";
import Products from "../../components/features/landingpage/products/Products";
import SearchBar from "../../components/features/landingpage/searchBar/SearchBar";
import Slider from "../../components/features/landingpage/Slider";

function Landingpage() {
  return (
    <div>
      <Slider />
      <SearchBar />
      <Products />
      <Footer />
    </div>
  );
}

export default Landingpage;
