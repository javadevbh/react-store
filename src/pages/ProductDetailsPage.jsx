import { useParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductContext";

function ProductDetailsPage() {
  const { id } = useParams();
  const product = useProducts()[id - 1];
  return <div>{product.title}</div>;
}

export default ProductDetailsPage;
