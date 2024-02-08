import { useProducts } from "../contexts/ProductContext";

//Components
import Card from "../components/Card";

function ProductsPage() {
  const products = useProducts();
  return (
    <div className="flex justify-between">
      <div className="w-full flex flex-wrap justify-between gap-[20px]">
        {!products.length && <p>Loading...</p>}
        {products.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
      <div>Sidebar</div>
    </div>
  );
}

export default ProductsPage;
