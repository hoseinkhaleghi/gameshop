import Header from "../../components/features/landingpage/Header";
import Products from "../../components/features/landingpage/Products";
import SearchBar from "../../components/features/landingpage/SearchBar";
import Slider from "../../components/features/landingpage/Slider";

function Landingpage() {
  return (
    <div>
      <Header />
      <Slider />
      <SearchBar />
      <Products />
    </div>
  );
}

export default Landingpage;
