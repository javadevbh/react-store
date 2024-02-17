import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductDetail } from "../contexts/ProductContext";

//Loader
import Loader from "../components/Loader";

//Icons
import { BiCategoryAlt } from "react-icons/bi";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

function ProductDetailsPage() {
  const { id } = useParams();
  const product = useProductDetail(id);

  if (!product) return <Loader />;
  return (
    <div className="flex md:flex-row md:justify-between gap-9 min-h-[1000px] flex-col">
      <div className="shrink-0 h-fit border-2 border-dashed border-primary-orange rounded-[40px] p-5 bg-white overflow-hidden animate-[moveRightBtn_1s]">
        <img
          src={product.image}
          alt="product-image"
          className="w-[280px] h-[280px] md:mx-0 mx-auto"
        />
      </div>
      <div className="border-2 h-fit border-dashed border-gray-300 rounded-[40px] p-6 grid gap-6 animate-[moveLeftBtn_1s]">
        <h1 className="text-primary-orange text-2xl font-bold">
          {product.title}
        </h1>
        <p className="text-lg leading-7">{product.description}</p>
        <div className="flex-balance justify-between">
          <div>
            <p className="flex-balance space-x-2 font-semibold">
              <BiCategoryAlt color="#fe5d42" /> <span>{product.category}</span>
            </p>
            <p className="flex-balance space-x-2 font-semibold">
              <IoMdPricetag color="#fe5d42" /> <span>{product.price} $</span>
            </p>
          </div>
          <Link to="/products">
            <div className="flex-balance btn w-36 font-semibold text-base space-x-2">
              <FaArrowLeft /> <span>Back to shop</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
