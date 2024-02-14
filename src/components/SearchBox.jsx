//Helpers
import { createQueryObject } from "../helpers/helper";

//Icons
import { ImSearch } from "react-icons/im";

function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <div className="flex-balance space-x-2 md:mb-12 mb-6">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        className="w-56 border-[3px] border-dashed border-primary-orange px-2 py-1 rounded-lg outline-none text-sm"
      />
      <button onClick={searchHandler} className="bg-primary-orange rounded-lg w-8 h-8 text-white flex-balance justify-center">
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
