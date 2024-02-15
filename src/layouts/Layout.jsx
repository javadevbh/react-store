import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

//Icons
import { LuShoppingCart } from "react-icons/lu";

function Layout({ children }) {
  const [state] = useCart();

  return (
    <>
      <header className="py-3 px-5 bg-primary-orange text-white rounded-lg flex-balance justify-between mb-10">
        <Link to="/products">
          <h1 className="text-xl font-semibold cursor-pointer">ReactShop✨</h1>
        </Link>
        <Link to="/checkout">
          <div className="relative btn-white cursor-pointer">
            <LuShoppingCart />
            {!!state.itemsCounter && (
              <span className="absolute text-xs bg-black text-white -top-2 -right-2 w-4 h-4 rounded-full text-center font-bold">
                {state.itemsCounter}
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
