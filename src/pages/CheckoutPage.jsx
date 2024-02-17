import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Components
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";

//Images
import emptyCart from "../assets/empty-cart.png";
import { FaArrowLeft } from "react-icons/fa";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  if (state.itemsCounter == 0) {
    return (
      <div className="min-h-[1000px] animate-[moveDown_1s]">
        <img src={emptyCart} alt="empty-cart" className="mx-auto w-5/12" />
        <Link to="/products">
          <div className="flex-balance btn w-36 font-semibold text-base space-x-2">
            <FaArrowLeft className="animate-[moveLeftBtn_2s_infinite]" />{" "}
            <span>{state.checkout ? "Buy more" : "Back to shop"}</span>
          </div>
        </Link>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="flex md:flex-row md:justify-between gap-9 min-h-[1000px] flex-col">
      <BasketSidebar state={state} dispatch={dispatch} />
      <ul className="flex flex-col gap-4 w-full">
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
}

export default CheckoutPage;
