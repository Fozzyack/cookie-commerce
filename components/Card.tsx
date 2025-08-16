

interface CookieType  {
    name: string;
    image: string;
    allergy: string[];
    price: number;
}

const Card = ({ cookie } : { cookie : CookieType } ) => {
    return (
        <div className="p-6 rounded-3xl bg-gray-100 border border-border relative text-start">
            <img src={cookie ? cookie.image : "/bg.jpg"} alt="Cookie Preview" className="w-full h-full rounded-3xl" />
            <div>
                <p className="text-primary font-bold text-2xl"> $ { cookie ? cookie.price : "0.00"} </p>
            </div>

        </div>
    );
}

export default Card;
