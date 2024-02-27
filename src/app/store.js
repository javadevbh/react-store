import { configureStore } from "@reduxjs/toolkit";

//Reducers
import productsReducer from "../features/products/productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
