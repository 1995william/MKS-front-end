import { ADD_TO_CART, REMOVE_TO_CART } from "./constant";

export const addToCart = (product:object) => {
    
    return {
        type: ADD_TO_CART,
        data: product
    }
}

export const removeFromCart = (product:any) => {
   
    return {
        type: REMOVE_TO_CART,
        data: product
    }
}

