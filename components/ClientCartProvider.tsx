"use client"

import React, { createContext, ReactNode, SetStateAction, useContext, useState } from "react"

type CartContextType = {
    cart : CookieType[];
    setCart: React.Dispatch<SetStateAction<CookieType[]>>
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used inside cartProvier");
    return context;
}

export default function ClientCartProvider({ children } : {children : ReactNode}) {
    const [cart, setCart] = useState<CookieType[]>([]);

    return (

        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}
