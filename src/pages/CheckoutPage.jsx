import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Components
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";

//Images
import emptyCart from "../assets/empty-cart.png";
import { FaArrowLeft } from "react-icons/fa";

function CheckoutPage() {
  const state = useSelector((store) => store.cart);
  const { itemsCounter, checkout, selectedItems } = state;

  if (itemsCounter == 0) {
    return (
      <div className="min-h-[1000px] animate-[moveDown_1s]">
        <img src={emptyCart} alt="empty-cart" className="mx-auto w-5/12" />
        <Link to="/products">
          <div className="flex-balance btn w-36 font-semibold text-base space-x-2">
            <FaArrowLeft className="animate-[moveLeftBtn_2s_infinite]" />{" "}
            <span>{checkout ? "Buy more" : "Back to shop"}</span>
          </div>
        </Link>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="flex md:flex-row md:justify-between gap-9 min-h-[1000px] flex-col">
      <BasketSidebar state={state} />
      <ul className="flex flex-col gap-4 w-full">
        {selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} />
        ))}
      </ul>
    </div>
  );
}

export default CheckoutPage;
