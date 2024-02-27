import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Redux slices
import { fetchProducts } from "../features/products/productsSlice";

//Components
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";

//Helpers
import {
  filterProducts,
  searchProducts,
  getInitialQuery,
} from "../helpers/helper";
import notify from "../helpers/toastify";

function ProductsPage() {
  const { products, error } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

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

  if (error) notify(error);

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
      <ToastContainer />
    </>
  );
}

export default ProductsPage;
