import { createContext, useContext, useEffect, useState } from "react";

//API
import api from "../services/config";

const ProductContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

//Custom hook
const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

const useProductDetail = (id) => {
  const product = useProducts(ProductContext)
  const result = product.find((item) => item.id == id);
  return result;
};

export default ProductsProvider;
export { useProducts, useProductDetail };
