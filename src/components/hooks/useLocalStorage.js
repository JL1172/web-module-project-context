import { useState } from "react"

export const useLocalStorage = (key,initalState) => {
    const [cart,setCart] = useState(()=> {
        if (window.localStorage.getItem(key) && window.localStorage.getItem(key) !== "undefined") {
            return JSON.parse(window.localStorage.getItem(key))
        } else {
        window.localStorage.setItem(key, JSON.stringify(initalState));
        return initalState;
        }
    })
    const addItem = (item) => {
        setCart(item);
        window.localStorage.setItem(key,JSON.stringify(item));
    }
    
    return [cart,addItem]; 
}