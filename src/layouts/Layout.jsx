import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//Icons
import { LuShoppingCart } from "react-icons/lu";

function Layout({ children }) {
  const { itemsCounter } = useSelector((store) => store.cart);

  return (
    <>
      <header className="py-3 px-5 bg-primary-orange text-white rounded-lg flex-balance justify-between mb-10 sticky top-0 left-0 z-10">
        <Link to="/products">
          <h1 className="text-xl font-semibold cursor-pointer">ReactShop✨</h1>
        </Link>
        <Link to="/checkout">
          <div className="relative btn-white cursor-pointer">
            <LuShoppingCart />
            {!!itemsCounter && (
              <span className="absolute text-xs bg-black text-white -top-2 -right-2 w-4 h-4 rounded-full text-center font-bold">
                {itemsCounter}
              </span>
            )}
          </div>
        </Link>
      </header>
      {children}
      <footer className="py-3 px-5 bg-primary-orange text-white rounded-lg text-center mt-10">
        <p>
          Developed by{" "}
          <a
            className="text-violet-900"
            target="_blank"
            href="https://github.com/javadevbh/"
          >
            Javad
          </a>{" "}
          with ❤️
        </p>
      </footer>
    </>
  );
}

export default Layout;
