import { useReducer } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import CartData from '../data/CartData'
import reducer from "./reducer";

const initState={
    cart:CartData,
    total:0,
    amount:0
}
const CartContext = createContext();

const MyCartContext=()=>{
    return useContext(CartContext)
}

const CartProvider =({children})=>{
    const [state,dispatch] = useReducer(reducer,initState)

    useEffect(()=>{
        dispatch({type:"CALCULATE_TOTAL"})
    },[state.cart])

    const removeItem = (id) => {
        console.log(id);
        dispatch({type:"REMOVE_ITEM",payload:id})
    }
    
    const toggleQuantity=(id,type)=>{
        dispatch({type:"TOGGLE_QUANTITY",payload:{id,type}})
        if(type==='increment'){
            console.log("INCREASE",id);
        } else {
            console.log("DECREASE",id);
        }
    }

    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return(
        <CartContext.Provider value={{...state,removeItem,toggleQuantity,formatNumber}}>
            {children}
        </CartContext.Provider>
    ) 
}
export {CartContext,CartProvider,MyCartContext};