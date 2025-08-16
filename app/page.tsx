"use client"
import About from "@/components/About";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
    const [items, setItems] = useState<number>(0)
    return (
        <main className="min-h-screen">
            <Navbar page={1} items={items} setItems={setItems}/>
            <div className="py-12">
                <Hero />
                <About />
                <Menu />
            </div>
        </main>
    );
}
