import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
    const {name, image, cost} = action.payload;
    const existingitem = state.items.find(item => item.name === name);
    if (existingitem) {
        existingitem.updateQuantity++;
    } else {
        state.items.push({name, image, cost, quantity: 1})
    }
    },
    removeItem: (state, action) => {
    state.items = state.items.filter(item => item.name !== action.payload);

    },
    updateQuantity: (state, action) => {
    const {name, quantity} = action.payload;
    itemToUpdate = state.items.find(item => item.name === name);
    if(itemToUpdate){
        itemToUpdate.quantity = quantity;
    } else {
        addItem();
    }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
