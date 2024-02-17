//Icons
import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";

function BasketSidebar({ state }) {
  const { total, itemsCounter } = state;
  return (
    <div className="w-60 p-5 shrink-0 h-fit grid gap-3 border-2 border-dashed border-primary-orange rounded-[40px] animate-[moveRightBtn_1s]">
      <div className="flex-balance space-x-2">
        <p className="flex-balance space-x-1 text-primary-orange">
          <TbChecklist /> <span>Total:</span>
        </p>
        <p>{total} $</p>
      </div>
      <div className="flex-balance space-x-2">
        <p className="flex-balance space-x-1 text-primary-orange">
          <FaHashtag /> <span>Quantity:</span>
        </p>
        <p>{itemsCounter}</p>
      </div>
      <div className="flex-balance space-x-2">
        <p className="flex-balance space-x-1 text-primary-orange">
          <BsPatchCheck /> <span>Status:</span>
        </p>
        <p>pending...</p>
      </div>
      <button className="btn w-full mt-7 text-lg">Checkout</button>
    </div>
  );
}

export default BasketSidebar;
