import Image from "next/image";




const About = () => {
    return (
        <div id="about" className="flex flex-col items-center justify-center container mx-auto p-8">
            <h3 className="text-4xl font-bold fade-in-down text-center">About Our Homemade Cookies</h3>
            <div className="grid md:grid-cols-2 gap-12 mt-8">
                <div className="text-center flex flex-col items-center justify-center max-w-[500px] fade-in-right">
                    <p className="text-lg text-slate-800">
                        For over 20 years, Sweet Treats Bakery has been crafting cookies the old-fashioned way - by
                        hand, with love, and using only the finest ingredients. Every batch is mixed, rolled, and baked
                        fresh daily in our cozy kitchen.
                    </p>
                    <p className="text-lg text-slate-800">
                        We believe that the best cookies come from time-honored recipes passed down through
                        generations. No preservatives, no shortcuts - just pure, homemade goodness that brings families
                        together one cookie at a time.
                    </p>
                    <div className="flex gap-8 mt-8">
                        <div className="text-center animate-gentle">
                            <h5 className="text-4xl font-bold text-primary">100%</h5>
                            <p className="text-lg">Homedmade</p>
                        </div>
                        <div className="text-center animate-gentle animation-delay-200">
                            <h5 className="text-4xl font-bold text-primary">100+</h5>
                            <p className="text-lg">Happy Customers</p>
                        </div>
                    </div>
                </div>
                <Image src={"/kitchen.png"} alt="kitchen" width={500} height={500} className="rounded-lg shadow-lg fade-in-left"/>
            </div>
        </div>
    )
}
export default About;
