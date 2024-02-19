import { useReducer, useContext, createContext, useEffect } from "react";

//Helpers
import { sumProducts , getStorageValue } from "../helpers/helper";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      if (!state.selectedItems.find((item) => item.id == action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        return {
          ...state,
          ...sumProducts(state.selectedItems),
          checkout: false,
        };
      }
    }
    case "INCREASE_ITEM": {
      state.selectedItems.find((item) => item.id == action.payload.id)
        .quantity++;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    }

    case "DECREASE_ITEM": {
      state.selectedItems.find((item) => item.id == action.payload.id)
        .quantity--;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    }

    case "REMOVE_ITEM": {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: newSelectedItems,
        ...sumProducts(newSelectedItems),
      };
    }

    case "CHECKOUT": {
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    }

    default:
      throw new Error("Invalid action!");
  }
};

const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, getStorageValue("CART" , initialState));

  useEffect(() => {
    localStorage.setItem("CART" , JSON.stringify(state))
  } , [state])

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

//Custom hook
const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
