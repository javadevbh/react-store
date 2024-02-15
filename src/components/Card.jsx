import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

//Helpers
import { shortenTitle, productQuantity } from "../helpers/helper";

//Icons
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagPlus } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

function Card({ data }) {
  const { id, image, title, price } = data;
  const [state, dispatch] = useCart();

  const quantity = productQuantity(state, id);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };

  return (
    <div className="w-[270px] bg-white border-2 border-dashed border-gray-300 p-5 rounded-2xl flex flex-col gap-6">
      <img
        src={image}
        alt="product-image"
        className="w-[230px] h-[230px] p-[10px] mx-auto "
      />
      <div>
        <h3 className="text-primary-orange font-bold">{shortenTitle(title)}</h3>
        <p className="mt-2 font-bold text-sm opacity-70">{price} $</p>
      </div>
      <div className="flex-balance justify-between">
        <Link to={`${id}`} className="text-2xl text-primary-orange">
          <TbListDetails />
        </Link>
        <div className="flex-balance space-x-3">
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
          {quantity == 0 ? (
            <button
              onClick={() => clickHandler("ADD_ITEM")}
              className="btn animate-[moveLeftBtn_1s]"
            >
              <TbShoppingBagPlus />
            </button>
          ) : (
            <button
              onClick={() => clickHandler("INCREASE_ITEM")}
              className="btn pb-[3px]"
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
