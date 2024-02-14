//Helpers
import { createQueryObject } from "../helpers/helper";

//Constants
import { categories } from "../constants/list";

//Icons
import { FaListUl } from "react-icons/fa";

function Sidebar({ query, setQuery }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    if (tagName !== "LI") return;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-2xl w-52 h-fit bg-white p-4 grid gap-2">
      <div className="flex-balance space-x-2 text-primary-orange">
        <FaListUl />
        <p className="font-semibold">Categories</p>
      </div>
      <ul onClick={categoryHandler} className="grid gap-2">
        {categories.map((category) => (
          <li
            key={category.id}
            className={`cursor-pointer hover:text-primary-orange transition-all ${
              query.category == category.type.toLowerCase()
                ? "active-category"
                : null
            }`}
          >
            {category.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
