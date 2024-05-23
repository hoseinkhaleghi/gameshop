import Footer from "../../components/features/landingpage/Footer";
import Header from "../../components/features/landingpage/Header";
import Products from "../../components/features/landingpage/products/Products";
import SearchBar from "../../components/features/landingpage/searchBar/SearchBar";
import Slider from "../../components/features/landingpage/Slider";

function Landingpage() {
  return (
    <div>
      <Header />
      <Slider />
      <SearchBar />
      <Products />
      <Footer />
    </div>
  );
}

export default Landingpage;
