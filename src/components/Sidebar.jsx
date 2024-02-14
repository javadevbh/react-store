//Helpers
import { createQueryObject } from "../helpers/helper";

//Icons
import { FaListUl } from "react-icons/fa";

function Sidebar({ setQuery }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    if (tagName !== "LI") return;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div>
      <div>
        <FaListUl />
        Categories
      </div>
      <ul onClick={categoryHandler}>
        <li>All</li>
        <li>Electronics</li>
        <li>Jewelery</li>
        <li>Men's Clothing</li>
        <li>Women's Clothing</li>
      </ul>
    </div>
  );
}

export default Sidebar;
