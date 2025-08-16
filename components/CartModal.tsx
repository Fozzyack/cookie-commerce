import Image from "next/image";
import React, { SetStateAction, useEffect } from "react";
import { formatPrice } from "@/lib/cookiePrice";
import Link from "next/link";




const CartModal = ({ setShowCart, cart, setCart, setItems }: { setShowCart: React.Dispatch<SetStateAction<boolean>>, cart: CookieType[], setCart: React.Dispatch<SetStateAction<CookieType[]>>, setItems: React.Dispatch<SetStateAction<number>> }) => {

    function groupAndCount<CookieType>(items: CookieType[]) {
        const map = new Map<CookieType, number>();
        for (const item of items) {
            map.set(item, (map.get(item) ?? 0) + 1);
        }
        return Array.from(map.entries()).map(([item, count]) => ({ item, count }));

    }

    function decreaseCount(e: React.MouseEvent<HTMLButtonElement>, cookie: CookieType) {
        e.preventDefault();
        const index = cart.indexOf(cookie);
        if (cart.length > 0) {
            setItems(prev => prev - 1);
            setCart(prev => [...prev.slice(0, index), ...prev.slice(index + 1)]);
        }
    }

    function addToCount(e: React.MouseEvent<HTMLButtonElement>, cookie: CookieType) {
        e.preventDefault();
        if (cart.length > 0) {
            setItems(prev => prev + 1);
            setCart(prev => [...prev, cookie]);
        }
    }

    function removeCookies(e: React.MouseEvent<HTMLButtonElement>, cookie: CookieType) {
        console.log("Removing:");
        console.log(cookie)
        e.preventDefault();
        const count = cart.filter(_cookie => _cookie.id == cookie.id).length;
        setCart(prev => prev.filter(_cookie => _cookie.id != cookie.id))
        setItems(prev => (prev - count));
    }


    function getTotal () {
        const total = cart.reduce((sum, _cookie) => sum + _cookie.price, 0)
        return formatPrice(total);
    }


    const cookieFrequency = groupAndCount(cart);
    return (
        <div className="p-5 absolute top-full right-0 mt-2 w-80 bg-background border border-border rounded-xl shadow-lg z-50">
            <h3 className="text-xl font-bold"> Shopping Cart </h3>
            {cart.length == 0 && (<p className="text-center py-8 text-lg text-slate-600"> There are no items in your Cart :{"("}</p>)}
            {cart.length != 0 && (
                <div>
                <div className="grid gap-2 overflow-auto">
                    {
                        cookieFrequency.map((cookieThing) => (
                            <div key={cookieThing.item.id} className="grid grid-cols-2 w-full gap-2 border-b border-border py-2 ">
                                <div className="flex gap-1 justify-cetner items-center col-span-1 ">
                                    <Image src={cookieThing.item.image} alt="cookie-img" width={40} height={40} className="w-[40px] h-[40px]" />
                                    <div>
                                        <p>{cookieThing.item.name}</p>
                                        <p className="text-primary font-bold">${formatPrice(cookieThing.item.price)}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-2 ml-4">
                                    <button onClick={(e) => { decreaseCount(e, cookieThing.item) }} className="w-6 h-6 rounded-md bg-slate-200">
                                        -
                                    </button>
                                    <input readOnly value={cookieThing.count} className="w-6 h-6 text-center bg-white rounded-md border">
                                    </input>
                                    <button onClick={(e) => {addToCount(e, cookieThing.item)}} className="w-6 h-6 rounded-md bg-slate-200">
                                        +
                                    </button>
                                    <button onClick={(e) => {removeCookies(e, cookieThing.item)}} className="text-red-500 ml-2">
                                    x
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                    <h3 className="text-xl font-bold">
                        Total: ${getTotal()}
                    </h3>
                    <Link href="/checkout">
                        <button className="bg-primary py-2 px-4 text-primary-foreground rounded-2xl hover:scale-105 transition-all ease-in-out">
                            Checkout
                        </button>
                    </Link>
                    </div>
                </div>
            )}

        </div>
    )
}

export default CartModal;
