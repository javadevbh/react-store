import { useEffect, useState } from "react";
import { useProducts } from "../contexts/ProductContext";
import { useSearchParams } from "react-router-dom";

//Components
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";

//Helpers
import {
  filterProducts,
  searchProducts,
  getInitialQuery,
} from "../helpers/helper";

//Loader
import Loader from "../components/Loader";

function ProductsPage() {
  const products = useProducts();
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row">
        <div className="w-full flex flex-wrap justify-center gap-[20px] md:justify-between">
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <Sidebar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
