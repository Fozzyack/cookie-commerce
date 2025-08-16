"use client"
import Link from "next/link";
import { SetStateAction, useState } from "react";
import CartModal from "./CartModal";


const LINKS = [
    {
        name: "Menu",
        href: "#menu"
    },
    {
        name: "About",
        href: "#about"
    },
    {
        name: "Contact Us",
        href: "#contact"
    },
]


const Navbar = ({ page, items, setItems, cart, setCart}
: 
{ page: number, items: number, setItems: React.Dispatch<SetStateAction<number>>, 
    cart: CookieType[], setCart : React.Dispatch<SetStateAction<CookieType[]>>}) => {

    const [showCart, setShowCart] = useState<boolean>(false);
    
    const changeShowCart = () => {
        setShowCart(prev => !prev);
    }

    return (
        <header className="sticky w-full top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border fade-in-down animation-delay-400">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/">
                    <h1 className="text-2xl font-bold text-foreground">Crumb and Co.</h1>
                </Link>
                { /* Home Page */
                    page == 1 &&
                    <div className="hidden md:flex items-center gap-6 h-full">
                        {
                            LINKS.map((link, index) => (
                                <a href={link.href} key={index} className="group">
                                    <p>{link.name}</p>
                                    <div className="h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300" />
                                </a>
                            ))
                        }
                    </div>
                }
                {
                    page == 1 &&
                    <div className="relative">
                        <button onClick={changeShowCart} className="px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:scale-110">
                            Cart ({items})
                        </button>
                        {
                            showCart && <CartModal setShowCart={setShowCart} cart={cart} setCart={setCart} setItems={setItems}/>
                        }
                    </div>
                }
                {/* Checkout Page */
                    page == 2 &&
                    <Link href="/" className="">
                        <button className="hover:scale-105 transition-all duration-300">
                            Back To Shop
                        </button>
                    </Link>
                }
            </nav>

        </header>
    )
}
export default Navbar;
