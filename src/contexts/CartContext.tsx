'use client'
import { CartReducer, reducerActionType } from "@/reducers/CartReducer";
import { ItemType } from "@/types/Item";
import { createContext, useContext, ReactNode, useReducer, Dispatch } from "react";

type CartContextType = {
    item: ItemType[];
    dispatchItem: Dispatch<reducerActionType> 
}

type CartProviderTypeProp = {
    children: ReactNode
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: CartProviderTypeProp) {
    const [item, dispatchItem] = useReducer(CartReducer, [])

    return (
        <CartContext.Provider value={{ item, dispatchItem }}>
            {children}
        </CartContext.Provider>
    )
}

// useCart HOOK
export function useCart() {
    return useContext(CartContext)
}