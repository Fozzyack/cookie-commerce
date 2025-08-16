"use client"


const Hero = () => {
    return (
        <div className="relative p-8 flex flex-col items-center justify-center py-26 fade-in-down">
            <h1 className="text-7xl text-center font-bold">Freshly Baked</h1>
            <h1 className="text-7xl text-center font-bold text-primary">Happiness</h1>
            <p className="text-center md:max-w-[700px] mt-4 text-slate-700 text-lg">
                Handcrafted cookies made with love, using only the finest ingredients. Each bite is a moment of pure joy.
            </p>
            <div className="flex gap-8 items-center mt-3 font-semibold">
                <a href="#menu" className="hover:cursor-pointer">
                    <button className="w-[150px] py-2 bg-primary text-primary-foreground rounded-lg hover:scale-110 transition-all duration-150">
                        Shop Now
                    </button>
                </a>
                <a href="#about">
                    <button className="w-[150px] py-2 border border-slate-600 rounded-lg text-slate-600">
                        About us
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Hero;
