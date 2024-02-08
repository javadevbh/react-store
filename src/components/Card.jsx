import { Link } from "react-router-dom";

//Icons
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagPlus } from "react-icons/tb";

//Helpers
import { shortenTitle } from "../helpers/helper";

function Card({ data }) {
  const { id, image, title, price } = data;
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
        <div className="flex-balance">
          <button className="bg-primary-orange text-white text-2xl p-[3px] rounded-lg">
            <TbShoppingBagPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
