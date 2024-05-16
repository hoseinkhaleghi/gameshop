import Input from "../../common/input/Input";
import { list } from "../../../list";

function SearchBar() {
  const Years = list.map((item) => item.Year);
  const Year = [...new Set(Years)].sort();

  const Companies = list.map((item) => item.company);
  const Company = [...new Set(Companies)].sort();

  return (
    <>
      <section className="bg-gray-500 flex flex-row rounded-md  m-5">
        <div className="w-20">
          <p>جستجو</p>
        </div>
        <div className="w-full flex flex-col p-10">
          <Input placeholder="search" className="" />
          <div className="flex flex-row w-full gap-10 mt-6">
            <label htmlFor="year">سال ساخت</label>
            <select name="year" id="year" className="w-72 text-black ">
              {Year.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>

            <label htmlFor="company">سازنده</label>
            <select name="company" id="company" className="w-72 text-black">
              {Company.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>

            <label htmlFor="company">سازنده</label>
            <select name="year" id="year" className="w-72 text-black">
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchBar;
