import React, { useState, useRef, useEffect, useCallback } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import gsap from 'gsap'
import myJsonData from '../data/dataIngrediant.json'
import { IoIosArrowForward as ArrowIcon } from 'react-icons/io'

// Inline the card so we control keys properly
function Card({ offer, position }: { offer: any, position: number }) {
    // position: 0=center, ±1=adjacent, ±2+=hidden
    const abs = Math.abs(position)
    const scale = abs === 0 ? 1.15 : abs === 1 ? 0.92 : 0.75
    const opacity = abs === 0 ? 1 : abs === 1 ? 0.85 : 0.4
    const zIndex = abs === 0 ? 10 : abs === 1 ? 5 : 1
    const isCenter = position === 0
    const xOffset = position * 302 // CARD_WIDTH(270) + GAP(32)

    return (
        <div
            style={{
                position: 'absolute',
                left: '50%',
                transform: `translateX(calc(-50% + ${xOffset}px)) scale(${scale})`,
                opacity,
                zIndex,
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s ease',
                minWidth: '255px',
                maxWidth: '270px',
                height: '80%',
            }}
            className={`cards group offer-detail rounded-2xl px-4 pt-32 flex flex-col items-center gap-4 overflow-visible relative cursor-pointer
                ${isCenter ? 'bg-[#007545] text-white' : 'bg-white text-[#0C2529]'}`}
        >
            <img
                src='../../public/Printing & Graphics Software & Clipart for sale _ eBay.jpg'
                alt=""
                className='absolute left-0 top-10 w-full h-[201px] z-20 bg-[#007545] rounded-2xl opacity-10'
            />
            <div className='z-22 flex justify-center items-center w-full h-[201px] absolute top-0 left-0'>
                <img src={offer.image} alt="" className='w-8/12' />
            </div>
            <h2 className={`h-10 font-extrabold text-xl mb-2 mt-2 text-center ${isCenter ? 'text-white' : 'text-black'}`}>
                {offer.title}
            </h2>
            <div className='price-size flex gap-20 justify-between items-center'>
                <div className={`flex flex-col gap-2 text-extrabold text-lg ${isCenter ? 'text-white' : ''}`}>
                    <h3>Small</h3>
                    <h3>Medium</h3>
                    <h3>Large</h3>
                </div>
                <div className={`flex flex-col items-end gap-2 text-extrabold text-lg ${isCenter ? 'text-black' : 'text-green-600'}`}>
                    <h4>{offer.price.small}.0 $</h4>
                    <h4>{offer.price.medium}.0 $</h4>
                    <h4>{offer.price.large}.0 $</h4>
                </div>
            </div>
            <button className={`group/item flex justify-center items-center cursor-pointer transition-colors duration-300 ${isCenter ? 'text-white' : 'text-green-500 hover:text-black'}`}>
                Description
                <ArrowIcon className='hover:transform group-hover/item:rotate-90 transition-transform duration-300' />
            </button>
            <button className={`absolute w-32 py-2 top-94 left-1/2 transform -translate-x-1/2 rounded-full cursor-pointer transition-all duration-200
                ${isCenter ? 'bg-white text-green-700 hover:bg-gray-100' : 'bg-green-700 text-white hover:bg-green-800'}`}>
                ADD TO CART
            </button>
        </div>
    )
}

function OfferSection() {
    const [selectedOption, setSelectedOption] = useState<string>('DRINKS')
    const [listOffers, setListOffers] = useState<number>(0)
    const [centerIndex, setCenterIndex] = useState<number>(0)
    const isAnimatingRef = useRef<boolean>(false)

    const categories = [
        { label: 'DRINKS', index: 0 },
        { label: 'FOOD', index: 1 },
        { label: 'AT HOME', index: 2 },
        { label: 'MERCHANDISE', index: 3 },
    ]

    const currentOffer = myJsonData[listOffers]
    const cards = currentOffer.details
    const total = cards.length

    // position relative to center: -2, -1, 0, 1, 2 ...
    const getPosition = (cardIndex: number) => {
        let pos = cardIndex - centerIndex
        // Wrap to shortest path for infinite feel
        if (pos > total / 2) pos -= total
        if (pos < -total / 2) pos += total
        return pos
    }

    const scrollToRight = () => {
        if (isAnimatingRef.current) return
        isAnimatingRef.current = true
        setCenterIndex(prev => (prev + 1) % total)
        setTimeout(() => { isAnimatingRef.current = false }, 650)
    }

    const scrollToLeft = () => {
        if (isAnimatingRef.current) return
        isAnimatingRef.current = true
        setCenterIndex(prev => (prev - 1 + total) % total)
        setTimeout(() => { isAnimatingRef.current = false }, 650)
    }

    const changeCategory = (label: string, index: number) => {
        setSelectedOption(label)
        setListOffers(index)
        setCenterIndex(0)
    }

    return (
        <main className='flex flex-col justify-center items-center w-full min-h-[800px] rounded-3xl pb-2'>
            {/* Category tabs */}
            <div className='flex justify-center px-1 py-8 w-full rounded-3xl'>
                <ul className='grid grid-cols-4 justify-center items-center w-[88%] gap-0 my-0 mb-14 mr-10'>
                    {categories.map(({ label, index }) => (
                        <li
                            key={label}
                            onClick={() => changeCategory(label, index)}
                            className={`btn-offer w-[115%] h-[88px] flex justify-center items-center rounded-md rounded-br-[100px] cursor-pointer transition duration-300 ease-in-out
                                ${selectedOption === label
                                    ? 'bg-white text-[#007545] scale-110 z-10'
                                    : 'bg-[#007545] text-white hover:bg-white hover:text-[#007545]'
                                }`}
                        >
                            <p className='font-bold text-2xl'>{label}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Carousel */}
            <div className='relative w-full h-[650px] flex justify-center items-center overflow-hidden'>
                <IoIosArrowForward
                    onClick={scrollToLeft}
                    size={40}
                    className='absolute left-4 top-1/2 -translate-y-1/2 rotate-180 z-20 rounded-full bg-[#007545] text-white cursor-pointer hover:scale-125 transition-all duration-200'
                />

                {/* Cards — all absolutely positioned relative to center */}
                <div className='relative w-full h-full'>
                    {cards.map((offer: any, i: number) => (
                        <Card
                            key={`${listOffers}-${i}`}
                            offer={offer}
                            position={getPosition(i)}
                        />
                    ))}
                </div>

                <IoIosArrowForward
                    onClick={scrollToRight}
                    size={40}
                    className='absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-[#007545] text-white cursor-pointer hover:scale-125 transition-all duration-200'
                />
            </div>
        </main>
    )
}

export default OfferSection