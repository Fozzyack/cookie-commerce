"use client"

import { useCart } from "@/components/ClientCartProvider";


const Checkout = () => {
    const {cart, setCart} = useCart();
    return (
        <div>
            Checkout
        </div>
    )
}

export default Checkout;
