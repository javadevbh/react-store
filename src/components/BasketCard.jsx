import { useDispatch } from "react-redux";

//Redux actions
import {
  removeItem,
  increaseItem,
  decreaseItem,
} from "../features/cart/cartSlice";

//Helpers
import { shortenTitle } from "../helpers/helper";

//Icons
import { MdDeleteOutline } from "react-icons/md";

function BasketCard({ data }) {
  const { image, title, price, quantity } = data;
  const dispatch = useDispatch();

  return (
    <li className="border-2 border-dashed border-gray-300 sm:px-5 sm:py-5 px-2 py-5 h-fit flex-balance justify-between rounded-[20px] animate-[moveDown_1s]">
      <div className="w-10">
        <img src={image} alt="product-image" />
      </div>
      <div className="flex-balance space-x-2">
        <p>{shortenTitle(title)}</p>
        <p className="text-primary-orange sm:block hidden">{price} $</p>
      </div>
      <div className="flex-balance sm:space-x-3 space-x-2">
        {quantity == 1 && (
          <button
            onClick={() => dispatch(removeItem(data))}
            className="btn animate-[moveLeftBtn_1s]"
          >
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button
            onClick={() => dispatch(decreaseItem(data))}
            className="btn pb-[3px]"
          >
            -
          </button>
        )}
        {quantity > 0 && <span className="font-semibold">{quantity}</span>}

        <button
          onClick={() => dispatch(increaseItem(data))}
          className="btn pb-[3px]"
        >
          +
        </button>
      </div>
    </li>
  );
}

export default BasketCard;
