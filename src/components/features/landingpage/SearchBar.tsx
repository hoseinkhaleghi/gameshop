import Input from "../../common/input/Input";

function SearchBar() {
  return (
    <div>
        <section className="bg-gray-500">
            <Input placeholder="search" className="w-9" />
        </section>
    </div>
  )
}

export default SearchBar;