const { createSlice } = require("@reduxjs/toolkit");


const cartSlice  = createSlice({
    name : "cart",
    initialState : {
        watches : []
    },
    reducers :{
        addToCart(state , action ){
            state.watches.push(action.payload) 
        }
    },




})
export const  {addToCart } = cartSlice.actions


export default cartSlice.reducer ; 