import { createSlice } from "@reduxjs/toolkit";

//  A function that accepts an 
// 1)  a "slice name"
// 2) initial state
// 3) an object of reducer functions
// automatically generates action creators and action types that correspond to the reducers and state.

const INITIAL_STATE = {
    cartList : [],
    cartCount : 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers : {
        addToCart(state){
            state.cartCount = 1
        },
        increment(state){
            state.cartCount += 1
        },
        decrement(state){
            state.cartCount -= 1
        }
    } 
});

export const {addToCart, increment, decrement} = cartSlice.actions;

export default cartSlice.reducer;