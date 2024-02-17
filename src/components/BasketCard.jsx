//Helpers
import { shortenTitle } from "../helpers/helper";

//Icons
import { MdDeleteOutline } from "react-icons/md";

function BasketCard({ data, dispatch }) {
  const { image, title, price, quantity } = data;
  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };

  return (
    <li className="border-2 border-dashed border-gray-300 p-5 h-fit flex-balance justify-between rounded-[20px]">
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
            onClick={() => clickHandler("REMOVE_ITEM")}
            className="btn animate-[moveLeftBtn_1s]"
          >
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button
            onClick={() => clickHandler("DECREASE_ITEM")}
            className="btn pb-[3px]"
          >
            -
          </button>
        )}
        {quantity > 0 && <span className="font-semibold">{quantity}</span>}

        <button
          onClick={() => clickHandler("INCREASE_ITEM")}
          className="btn pb-[3px]"
        >
          +
        </button>
      </div>
    </li>
  );
}

export default BasketCard;
