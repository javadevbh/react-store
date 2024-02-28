import { createSlice } from "@reduxjs/toolkit";

//Helpers
import { sumPrice, sumQuantity } from "../../helpers/helper";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id == action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.itemsCounter = sumQuantity(state.selectedItems);
        state.total = sumPrice(state.selectedItems);
        state.checkout = false;
      }
    },
    increaseItem: (state, action) => {
      state.selectedItems.find((item) => item.id == action.payload.id)
        .quantity++;
      state.itemsCounter = sumQuantity(state.selectedItems);
      state.total = sumPrice(state.selectedItems);
    },
    decreaseItem: (state, action) => {
      state.selectedItems.find((item) => item.id == action.payload.id)
        .quantity--;
      state.itemsCounter = sumQuantity(state.selectedItems);
      state.total = sumPrice(state.selectedItems);
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = newSelectedItems;
      state.itemsCounter = sumQuantity(newSelectedItems);
      state.total = sumPrice(newSelectedItems);
    },
    checkout: (state) => {
      state.selectedItems = [];
      state.itemsCounter = 0;
      state.total = 0;
      state.checkout = true;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, increaseItem, decreaseItem, removeItem, checkout } =
  cartSlice.actions;
