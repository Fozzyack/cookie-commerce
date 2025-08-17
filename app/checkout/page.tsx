"use client"

import { useCart } from "@/components/ClientCartProvider";
import Navbar from "@/components/Navbar";
import { useState } from "react";


const Checkout = () => {
    const {cart, setCart} = useCart();
    const [items, setItems] = useState(-1)
    return (
        <div>
        <Navbar page={2} items={-1} setItems={setItems} cart={cart} setCart={setCart}/>
        <div className="flex flex-col md:grid md:grid-cols-12">
            Checkout
        </div>
        </div>
    )
}

export default Checkout;
