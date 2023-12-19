import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    showAddButton: false,
  },
  reducers: {
    addItems: (state, action) => {
      const item = state.items.find((data) => data.id === action.payload.id);
      if (item) {
        if (item.quantity >= item.rating.count) {
          alert("its only 5 items are available");
        } else {
          item.quantity = item.quantity + 1;
        }
      } else {
        state.items.push(action.payload);
      }
    },
    IncrementItems: (state, action) => {
      const index = state.items.findIndex((data) => data.id === action.payload);
      if (state.items[index].quantity >= state.items[index]?.rating?.count) {
        alert(
          `its only ${state.items[index]?.rating?.count} items are available`
        );
      } else {
        state.items[index].quantity = state.items[index].quantity + 1;
      }
    },
    DecrementItems: (state, action) => {
      const index = state.items.findIndex((data) => data.id === action.payload);

      if (state.items[index].quantity >= state.items[index]?.rating?.count) {
        alert(
          `its only ${state.items[index]?.rating?.count} items are available`
        );
      } else if (state.items[index].quantity === 0) {
        alert("Are u sure to remove this item");
        state.items.splice(index, 1);
      } else {
        state.items[index].quantity = state.items[index].quantity - 1;
      }
    },
  },
});

export const { addItems, IncrementItems, DecrementItems } = cartSlice.actions;

export default cartSlice.reducer;
