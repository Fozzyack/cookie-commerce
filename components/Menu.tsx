"use client"

import Card from "./Card";



const Menu = () => {
    return (
        <div className="text-center mt-12">
            <h2 className="text-4xl font-bold">Our Cookies</h2>
            <div className="grid md:grid-cols-3 gap-12 p-12">
                <Card />
            </div>
        </div>
    )
}

export default Menu;
