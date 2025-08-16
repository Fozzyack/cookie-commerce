"use client"
import Link from "next/link";
import { SetStateAction } from "react";


const LINKS = [
    {
        name: "Products",
        href: "#products"
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


const Navbar = ({ page, items, setItems }: { page: number, items: number, setItems: React.Dispatch<SetStateAction<number>>}) => {

    return (
        <header className="sticky w-full top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/">
                    <h1 className="text-2xl font-bold text-foreground">Sweet Treats Bakery</h1>
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
                    <button className="px-5 py-2 bg-primary text-primary-foreground rounded-lg">
                        Cart ({items})
                    </button>
                }
                {/* Checkout Page */
                    page == 2 &&
                    <Link href="/">
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
