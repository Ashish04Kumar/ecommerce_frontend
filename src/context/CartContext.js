import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer'

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

//TO ADD DATA IN LOCAL STORAGE
useEffect(() => {
    localStorage.setItem("ashish-ecom", JSON.stringify(state.cart))
},[state.cart])

 return <CartContext.Provider   value={{...state, addToCart,removeItem}} >{children}</CartContext.Provider>
};


const useCartContext = () => {
    return useContext(CartContext)
}


export {CartProvider,useCartContext}