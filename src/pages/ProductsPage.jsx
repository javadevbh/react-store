import { useEffect, useState } from "react";
import { useProducts } from "../contexts/ProductContext";

//Components
import Card from "../components/Card";

//Helpers
import { filterProducts, searchProducts } from "../helpers/helper";

//Loader
import Loader from "../components/Loader";

//Icons
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";

function ProductsPage() {
  const products = useProducts();
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
    console.log(query);
  }, [query]);

  //Handlers
  const searchHandler = () => {
    setQuery((query) => ({ ...query, search }));
  };

  const categoryHandler = (e) => {
    const { tagName } = e.target;
    if (tagName !== "LI") return;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => ({ ...query, category }));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className="flex justify-between">
        <div className="w-full flex flex-wrap justify-between gap-[20px]">
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
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
      </div>
    </>
  );
}

export default ProductsPage;
