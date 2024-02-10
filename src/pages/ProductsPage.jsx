import { useProducts } from "../contexts/ProductContext";

//Components
import Card from "../components/Card";

//Loader
import Loader from "../components/Loader";

function ProductsPage() {
  const products = useProducts();
  return (
    <div className="flex justify-between">
      <div className="w-full flex flex-wrap justify-between gap-[20px]">
        {!products.length && <Loader />}
        {products.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
      <div>Sidebar</div>
    </div>
  );
}

export default ProductsPage;
