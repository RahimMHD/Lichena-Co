// ... existing imports
import { IoIosArrowForward } from 'react-icons/io';
import myJsonData from '../data/dataIngrediant.json';
import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

export default function Offers({ selectedOffer }: { selectedOffer: number }) {
    
    const currentOffer = myJsonData[selectedOffer];

    const renderOfferDetails = currentOffer.details.map((offer: { image: string | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; price: { small: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; medium: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; large: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }; }, index: Key | null | undefined) => {
        return (
            <div 
                key={index} 
                className="cards group offer-detail min-w-[255px] max-w-[270px] h-full bg-white text-[#0C2529] font-bold rounded-2xl px-4 pt-40 flex flex-col items-center gap-4 overflow-x-visible relative cursor-pointer hover:bg-green-700 hover:text-white hover:scale-117 transition-all duration-300"
            >
                {/* ... rest of your card content */}
                <img 
                    src='../../public/Printing & Graphics Software & Clipart for sale _ eBay.jpg' 
                    alt="" 
                    className='absolute left-0 top-0 w-full h-[201px] z-20 bg-[#007545] rounded-2xl opacity-10'
                />
                <div className='z-22 flex justify-center items-center w-full h-[201px] absolute bottom-66 left-0'>
                    <img src={offer.image} alt="" className='w-8/12' />
                </div>
                <h2 className='group-hover:text-white h-10 font-extrabold text-xl text-black mb-2 mt-2 text-center'>{offer.title}</h2>
                <div className='price-size flex gap-20 justify-between items-center'>
                    <div className='flex flex-col gap-2 text-extrabold text-lg group-hover:text-white'>
                        <h3>Small</h3>
                        <h3>Medium</h3>
                        <h3>Large</h3>
                    </div>
                    <div className='flex flex-col items-end gap-2 text-green-600 text-extrabold text-lg group-hover:text-black'>
                        <h4>{offer.price.small}.0 $</h4>
                        <h4>{offer.price.medium}.0 $</h4>
                        <h4>{offer.price.large}.0 $</h4>
                    </div>
                </div>
                <button className='group/item group-hover:text-white text-green-500 flex justify-center items-center cursor-pointer hover:text-black transition-colors duration-300'>
                    Description 
                    <IoIosArrowForward className='hover:transform group-hover/item:rotate-90 transition-transform duration-300' />
                </button>
                <button className='group-hover:text-green-700 group-hover:bg-white absolute w-32 py-2 top-94 left-1/2 transform -translate-x-1/2 bg-green-700 text-white rounded-full cursor-pointer hover:bg-green-800 hover:text-white transition-all duration-200'>
                    ADD TO CART
                </button>
            </div>
        )
    })
    
    return <>{renderOfferDetails}</>
}