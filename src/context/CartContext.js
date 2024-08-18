import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer'
import { type } from "@testing-library/user-event/dist/type";

const CartContext = createContext();

const CartProvider = ({children}) => {


const getLocalCartData = () => {
    return JSON.parse(localStorage.getItem("ashish-ecom")) || []
}

const initialState = {
// cart: [],
cart: getLocalCartData(),
total_item: "",
total_amount: "",
shipping_fee: 5000,
}


const [state, dispatch] =  useReducer(reducer, initialState)

const addToCart = (id, color, amount, product ) => {
    dispatch({type: "ADD_TO_CART", payload: {id, color, amount, product}})
}

const removeItem = (id) => {
dispatch({type: "REMOVE_ITEM", payload: id})
}


const clearCart = () => {
dispatch({type: "CLEAR_CART"})
}


//increment/decrement toggle
const setDecrease = (id) => {
dispatch({type: "SET_DECREMENT", payload: id})
}
const setIncrease = (id) => {
dispatch({type: "SET_INCREMENT", payload: id})

}

//TO ADD DATA IN LOCAL STORAGE
useEffect(() => {
    dispatch({type: "CART_TOTAL_ITEM"})
    localStorage.setItem("ashish-ecom", JSON.stringify(state.cart))
},[state.cart])

 return <CartContext.Provider   value={{...state, addToCart,removeItem, clearCart, setDecrease, setIncrease}} >{children}</CartContext.Provider>
};




const useCartContext = () => {
    return useContext(CartContext)
}


export {CartProvider,useCartContext}