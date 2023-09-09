import data from "../../data";
import { useLocalForProduct } from "./useLocalForProduct";

export const initialState = data;

export const useProduct = (key,initialState) => {
    const [product] = useLocalForProduct(key,initialState); 
    return [product];
}