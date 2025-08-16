"use client"

import { formatPrice } from "@/lib/cookiePrice";
import Image from "next/image";
import React, { SetStateAction } from "react";

const CookieCard = ({ cookie, setItems, setCart } : { cookie : CookieType, setItems : React.Dispatch<SetStateAction<number>>, setCart : React.Dispatch<SetStateAction<CookieType[]>> } ) => {



    const addItemToCart = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setItems(prev => prev + 1);
        setCart(prev => [...prev, cookie]);

        

    }
    return (
        <div className="py-6 rounded-2xl bg-white border border-border text-start group hover:-translate-y-1.5 hover:shadow-2xl transition-all ease-in-out duration-700">
            <div className="overflow-hidden h-[300px]">
                <Image src={cookie ? cookie.image : ""} alt="cookie image" width={400} height={400} className="w-full  max-h-[350px] group-hover:scale-110 transition-all ease-in-out duration-700"/>
            </div>
            <div className="px-8">
                <h4 className="text-2xl font-semibold group-hover:text-primary transition-all ease-in-out"> {cookie ? cookie.name: "No Name Given"} </h4>
                <div className="flex justify-between items-center">
                    <p className="text-primary font-bold text-2xl"> ${ cookie ? formatPrice(cookie.price): "N/A"} </p>
                    <button onClick={addItemToCart} className="bg-primary text-white px-4 py-3 rounded-2xl hover:scale-105 transition-all duration-150">
                        Add to Cart
                    </button>
                </div>
            </div>

        </div>
    );
}

export default CookieCard;
