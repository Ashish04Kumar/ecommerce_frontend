
const cartReducer = (state, action) => {
  if(action.type === "ADD_TO_CART"){
    let {id, color, amount, product} = action.payload


    let cartProduct;
    cartProduct ={
        id: id + color,
        name: product.name,
        color: color,
        amount: amount,
        image: product.image[0].url,
        price: product.price,
        maxPrice: product.stock
    }
     const newState = {
      ...state,
      cart: [...state.cart, cartProduct]
    };

    console.log("newState", newState); 

    return newState;
  }

   if(action.type === "REMOVE_ITEM"){
    let updatedCart = state.cart.filter((curElem) => curElem.id !== action.payload)
       return {
        ...state,
        cart: updatedCart,
       }
   }
  

  
    return state;
}

export default cartReducer