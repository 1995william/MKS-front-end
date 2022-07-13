import { ADD_TO_CART, REMOVE_TO_CART } from "./constant";

export const cartData = (data = [], action: any) => {
  if (action.type == ADD_TO_CART) {
    const items = [action.data, ...data];

    const removeRpt = items.filter((item, index) => items.indexOf(item) == index);

    return [...removeRpt];
  } else if (action.type == REMOVE_TO_CART) {
    interface Iitem {
       id:number;
    }
    const remove = data.filter((item:Iitem) => action.data.id != item.id);

    return [...remove];
  } else {
    return data;
  }
};
