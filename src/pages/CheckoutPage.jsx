import { useCart } from "../contexts/CartContext";

//Components
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  return (
    <div className="flex md:flex-row md:justify-between gap-9 min-h-[1000px] flex-col">
      <BasketSidebar state={state} />
      <ul className="flex flex-col gap-4 w-full">
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
}

export default CheckoutPage;
