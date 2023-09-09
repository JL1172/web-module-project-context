import { useState } from "react"

export const useLocalForProduct = (key,initalState) => {
    const [product] = useState(()=> {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key))
        } else {
        window.localStorage.setItem(key, JSON.stringify(initalState));
        return initalState;
        }
    })
    return [product]; 
}