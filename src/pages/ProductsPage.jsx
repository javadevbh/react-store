import { useProducts } from "../contexts/ProductContext";

function ProductsPage() {
  const products = useProducts();
  console.log(products);
  return (
    <div className="flex justify-between">
      <div className="w-full flex flex-wrap justify-between">
        {!products.length && <p>Loading...</p>}
        {products.map((p) => (
          <p key={p.id}>{p.title}</p>
        ))}
      </div>
      <div>Sidebar</div>
    </div>
  );
}

export default ProductsPage;
