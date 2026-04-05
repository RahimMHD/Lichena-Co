import { IoIosArrowForward } from 'react-icons/io';
import myJsonData from '../data/dataIngrediant.json';

interface OfferDetail {
    image: string
    title: string
    price: { small: number; medium: number; large: number }
}

// Single card — used by OfferSection for the GSAP carousel
export function OfferCard({ offer }: { offer: OfferDetail }) {
    return (
        <li className="cards absolute top-0 left-0 w-full h-full" style={{ listStyle: 'none', willChange: 'transform, opacity' }}>
            <div className="group w-[255px] h-full bg-white text-[#0C2529] font-bold rounded-2xl px-4 pt-40 flex flex-col items-center gap-4 relative cursor-pointer hover:bg-green-700 hover:text-white transition-colors duration-300 mx-auto">
                <div className='z-10 flex justify-center items-center w-full h-[201px] absolute top-0 left-0'>
                    <img src={offer.image} alt={offer.title} className='w-8/12' />
                </div>
                <h2 className='group-hover:text-white h-10 font-extrabold text-xl text-black mb-2 mt-2 text-center'>
                    {offer.title}
                </h2>
                <div className='price-size flex gap-20 justify-between items-center'>
                    <div className='flex flex-col gap-2 text-lg group-hover:text-white'>
                        <h3>Small</h3>
                        <h3>Medium</h3>
                        <h3>Large</h3>
                    </div>
                    <div className='flex flex-col items-end gap-2 text-green-600 text-lg group-hover:text-black'>
                        <h4>{offer.price.small}.0 $</h4>
                        <h4>{offer.price.medium}.0 $</h4>
                        <h4>{offer.price.large}.0 $</h4>
                    </div>
                </div>
                <button className='group/item group-hover:text-white text-green-500 flex justify-center items-center cursor-pointer hover:text-black transition-colors duration-300'>
                    Description
                    <IoIosArrowForward className='group-hover/item:rotate-90 transition-transform duration-300' />
                </button>
                <button className='group-hover:text-green-700 group-hover:bg-white absolute w-32 py-2 bottom-6 left-1/2 -translate-x-1/2 bg-green-700 text-white rounded-full cursor-pointer hover:bg-green-800 transition-all duration-200'>
                    ADD TO CART
                </button>
            </div>
        </li>
    )
}

// Full list — kept for any other place that uses <Offers selectedOffer={n} />
export default function Offers({ selectedOffer }: { selectedOffer: number }) {
    const currentOffer = (myJsonData as { details: OfferDetail[] }[])[selectedOffer]
    return (
        <>
            {currentOffer.details.map((offer: OfferDetail, index: number) => (
                <OfferCard key={index} offer={offer} />
            ))}
        </>
    )
}