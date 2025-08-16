"use client"

import { SetStateAction } from "react";
import CookieCard from "./CookieCard";
import { COOKIES } from "@/constants/cookies";



const Menu = ({setItems, setCart} : {setItems : React.Dispatch<SetStateAction<number>>, setCart : React.Dispatch<SetStateAction<CookieType[]>>}) => {
    return (
        <div id="menu" className="text-center mt-12">
            <h2 className="text-4xl font-bold">Our Cookies</h2>
            <div className="grid md:grid-cols-3 gap-12 p-12">
                {
                    COOKIES.map((cookie) => (
                        <CookieCard key={cookie.id} cookie={cookie} setItems={setItems} setCart={setCart}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Menu;
