import { ADD_TO_CART, REMOVE_TO_CART } from "./constant";

export const cartData = (data=[],action:any) => {

    if(action.type == ADD_TO_CART) {

        return [action.data, ...data]

    } else if (action.type == REMOVE_TO_CART) {

        data.length=data.length-1
        return [...data]
    }
     else {
        return data

    }
}