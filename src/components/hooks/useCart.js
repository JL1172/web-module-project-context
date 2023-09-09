import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";



export const useCart = (key,initialState) => {
    const [cart,setCart] = useLocalStorage(key,initialState);

    const addItem = (item) => {
        setCart([...cart, item]);
    }
    const removeItem = (itemId) => {
        setCart((cart)=> cart.filter(n=> n.id !== itemId))
    }
    return [cart, addItem,removeItem];
}