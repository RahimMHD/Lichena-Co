import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

function Section() {

    const [currentImage, setCurrentImage] = React.useState("/public/cups coffee/pngwing.com (4).png");
    const [prevImage, setPrevImage] = React.useState<string | null>(null);
    const [animating, setAnimating] = React.useState(false);

    const [images, setImages] = React.useState([
        { img: "/public/cups coffee/pngwing.com (4).png", active: true, id: 1 },
        { img: "/public/cups coffee/fourth cup coffee.png", active: false, id: 2 },
        { img: "/public/cups coffee/second cup coffee.png", active: false, id: 3 },
        { img: "/public/cups coffee/fifth cup coffee.png", active: false, id: 4 },
        { img: "/public/cups coffee/sexth cup coffee.png", active: false, id: 5 },
        { img: "/public/cups coffee/third cup coffee.png", active: false, id: 6 },
        { img: "/public/cups coffee/seventh cup coffee.png", active: false, id: 7 },
    ]);

    const changeSectionImg = (src: string) => {
        if (src === currentImage || animating) return;

        setPrevImage(currentImage);
        setCurrentImage(src);
        setAnimating(true);
        setImages(prev => prev.map(img => ({ ...img, active: img.img === src })));

        setTimeout(() => {
            setPrevImage(null);
            setAnimating(false);
        }, 700);
    };

    return (
        <section className="h-[550px] mx-16 pr-5 py-6 grid grid-cols-1 md:grid-cols-2 gap-10 mb-40">
            {/* <!-- Text --> */}
            <div className="mt-6">
                <h2 className="mb-0 text-4xl uppercase tracking-wide">Where every cup tells a story</h2>
                <h1 className="mb-4 text-6xl font-extrabold tracking-wide">
                    WHAT'S <span className="text-green-500">YOURS</span>?
                </h1>
                <div className='my-7'>
                    <h3 className="font-bold text-lg tracking-widest">Frappuccino Coffee Delight</h3>
                    <p className="text-gray-300 max-w-md">
                        Indulge in the perfect blend of coffee and ice – the Frappuccino — your cool coffee recipe.
                        Elevate your coffee moment with a creamy, icy Frappuccino Ought.
                    </p>
                </div>
                <div className="my-5 mx-8 flex items-center gap-8">
                    <span className="text-yellow-400 font-bold">Best Rating</span>
                    <span className="text-green-500 font-bold text-xl">$8.6</span>
                </div>

                <button className="add-to-cart-btn mx-6">
                    <span className="IconContainer">
                        <FaShoppingCart className="icon text-black w-5 h-5" />
                    </span>
                    <p className="text">Add to Cart</p>
                </button>

                {/* Product Slider */}
                <div className="drinks-bar absolute left-0 my-11 w-6/12 h-3/15 bg-[#007545] p-2 rounded-r-3xl flex justify-evenly gap-12 overflow-scroll snap-none">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            onClick={() => changeSectionImg(src.img)}
                            src={src.img}
                            alt={`drink${index + 1}`}
                            className={`w-[120px] rounded-full p-1 hover:bg-[#eee] cursor-pointer transition-all duration-300 ease-in-out ${src.active ? 'bg-white' : ''}`}
                        />
                    ))}
                </div>
            </div>

            {/* <!-- Image --> */}
            <div className="relative">

                {/* Overflow hidden clips both images as they slide */}
                <div className="overflow-hidden absolute bottom-4 right-10 z-10 w-[500px] h-full">

                    {/* Old image — slides out to the left */}
                    {prevImage && (
                        <img
                            key={prevImage}
                            src={prevImage}
                            alt="previous cup"
                            className="w-[500px] max-w-xl absolute bottom-0"
                            style={{
                                animation: "slideOutLeft 0.7s ease forwards",
                            }}
                        />
                    )}

                    {/* New image — slides in from the right */}
                    <img
                        key={currentImage}
                        src={currentImage}
                        alt="Frappuccino"
                        className="w-[500px] max-w-xl absolute bottom-0"
                        style={{
                            animation: animating
                                ? "slideInRight 0.7s ease forwards"
                                : "none",
                        }}
                    />
                </div>

                <style>{`
                    @keyframes slideOutLeft {
                        0%   { transform: translateX(0);      opacity: 1; }
                        100% { transform: translateX(-110%);  opacity: 0; }
                    }
                    @keyframes slideInRight {
                        0%   { transform: translateX(110%);   opacity: 0; }
                        100% { transform: translateX(0);      opacity: 1; }
                    }
                `}</style>

                <img src="/public/coffees.png" alt="coffee" className="w-7/12 max-w-sm absolute -bottom-16 left-40 mx-auto z-10" />
                <img src="/public/coffee.com (7).png" alt="coffee" className="w-36 max-w-sm absolute right-[-170px] top-[-70px] mx-auto z-10 rotate-[-40deg] blur-sm" />
                <img src="/public/coffee.com (7).png" alt="coffee" className="w-28 max-w-sm absolute left-0 top-0 mx-auto z-10 rotate-[30deg] opacity-70 blur-xs" />
                <img src="/public/coffee.com (7).png" alt="coffee" className="w-24 max-w-sm absolute right-72 -bottom-36 mx-auto z-10 rotate-45 opacity-50 blur-[2px]" />

                <h2 className="text-white font-extrabold text-7xl absolute z-10 right-5 top-[-20px] rotate-[-90deg] origin-bottom-right tracking-tight">
                    FRAPUCCINO
                </h2>
                <h2 id="frapp-two" className="text-white font-bold text-7xl absolute left-50 top-5 rotate-[-90deg] origin-bottom-right z-10 tracking-tighter">
                    FRAPUCCINO
                </h2>
                <div className="w-9/12 h-[550px] absolute left-[250px] top-5 bg-[#007545] z-0 rounded-tl-[50px] rounded-bl-[50px]"></div>
            </div>
        </section>
    )
}

export default Section