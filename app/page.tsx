"use client"
import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
    const [items, setItems] = useState<number>(0)
    const [cart, setCart] = useState<CookieType[]>([])

    console.log(cart);
    return (
        <main className="min-h-screen">
            <Navbar page={1} items={items} setItems={setItems} cart={cart} setCart={setCart}/>
            <div className="py-12">
                <Hero />
                <About />
                <Menu setItems={setItems} setCart={setCart}/>
            </div>
            <Footer />
        </main>
    );
}
