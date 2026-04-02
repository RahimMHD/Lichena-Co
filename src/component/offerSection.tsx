import React, { useState, useRef, useEffect } from 'react'
import Offers from './offers'
import { IoIosArrowForward } from 'react-icons/io'
import gsap from 'gsap';

function OfferSection() {
    const [selectedOption, setSelectedOption] = useState<string>('DRINKS');
    const [listOffers, setListOffers] = useState<number>(0);
    const [centerIndex, setCenterIndex] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const isAnimatingRef = useRef<boolean>(false);
    const totalCards = useRef<number>(0);
    const currentX = useRef<number>(0);
    // Track how many times we actually scrolled the track (not just scaled)
    const scrolledSteps = useRef<number>(0);

    const CARD_WIDTH = 270;
    const CARD_GAP = 32;
    const STEP = CARD_WIDTH + CARD_GAP;

    const visibleCount = () => Math.floor(window.innerWidth / STEP);

    // Right: should we scroll the track or just scale?
    const shouldScrollRight = (nextIndex: number) => {
        return nextIndex + visibleCount() < totalCards.current;
    };

    // Left: should we scroll the track back, or just scale?
    // Only scroll back if we had previously scrolled right
    const shouldScrollLeft = () => {
        return scrolledSteps.current > 0;
    };

    useEffect(() => {
        if (!containerRef.current) return;
        const cards = Array.from(containerRef.current.children) as HTMLElement[];
        totalCards.current = cards.length;

        cards.forEach((card, i) => {
            const isCenter = i === centerIndex;

            gsap.to(card, {
                scale: isCenter ? 1.18 : 0.85,
                opacity: isCenter ? 1 : 0.6,
                backgroundColor: isCenter ? '#007545' : '#ffffff',
                duration: 0.5,
                ease: 'power2.out',
            });

            const texts = card.querySelectorAll('h2, h3, h4, p, button:not(.add-to-cart)');
            texts.forEach((el) => {
                gsap.to(el, { color: isCenter ? '#ffffff' : '', duration: 0.5 });
            });

            const prices = card.querySelectorAll('.text-green-600');
            prices.forEach((el) => {
                gsap.to(el, { color: isCenter ? '#000000' : '', duration: 0.5 });
            });
        });
    }, [centerIndex, listOffers]);

    const scrollToLeft = () => {
        if (isAnimatingRef.current || centerIndex <= 0) return;
        isAnimatingRef.current = true;
        const next = centerIndex - 1;
        setCenterIndex(next);

        if (shouldScrollLeft()) {
            scrolledSteps.current -= 1;
            currentX.current += STEP;
            gsap.to(containerRef.current, {
                x: currentX.current,
                duration: 0.5,
                ease: 'power2.inOut',
                onComplete: () => { isAnimatingRef.current = false; }
            });
        } else {
            // Cards on the left are already visible, just scale
            isAnimatingRef.current = false;
        }
    };

    const scrollToRight = () => {
        if (isAnimatingRef.current || centerIndex >= totalCards.current - 1) return;
        isAnimatingRef.current = true;
        const next = centerIndex + 1;
        setCenterIndex(next);

        if (shouldScrollRight(next)) {
            scrolledSteps.current += 1;
            currentX.current -= STEP;
            gsap.to(containerRef.current, {
                x: currentX.current,
                duration: 0.5,
                ease: 'power2.inOut',
                onComplete: () => { isAnimatingRef.current = false; }
            });
        } else {
            // Last cards already visible, just scale
            isAnimatingRef.current = false;
        }
    };

    useEffect(() => {
        setCenterIndex(0);
        currentX.current = 0;
        scrolledSteps.current = 0;
        if (containerRef.current) {
            gsap.set(containerRef.current, { x: 0 });
        }
    }, [listOffers]);

    return (
        <main className='flex flex-col justify-center items-center w-full min-h-[800px] rounded-3xl pb-2'>
            <div className='flex justify-center px-1 py-8 w-[100%] rounded-3xl'>
                <ul className='grid grid-cols-4 justify-center items-center w-[88%] gap-0 my-0 mb-14 mr-10'>
                    <li
                        onClick={() => { setListOffers(0); setSelectedOption("DRINKS") }}
                        className={`btn-offer w-[115%] h-[88px] flex justify-center items-center rounded-md rounded-br-[100px] hover:bg-white hover:text-[#007545] cursor-pointer transition duration-300 ease-in-out z-10
                            ${selectedOption === 'DRINKS' ? 'bg-white text-[#007545] scale-110' : 'bg-[#007545] text-white'}`}
                    >
                        <p className='font-bold text-2xl'>DRINKS</p>
                    </li>
                    <li
                        onClick={() => { setListOffers(1); setSelectedOption("FOOD") }}
                        className={`btn-offer w-[115%] h-[88px] flex justify-center items-center rounded-md rounded-br-[100px] hover:bg-white hover:text-[#007545] cursor-pointer transition duration-300 ease-in-out
                            ${selectedOption === "FOOD" ? 'bg-white text-[#007545] scale-110 z-10' : 'bg-[#007545] text-white z-9'}`}
                    >
                        <p className='font-bold text-2xl'>FOOD</p>
                    </li>
                    <li
                        onClick={() => { setListOffers(2); setSelectedOption("AT HOME") }}
                        className={`btn-offer w-[115%] h-[88px] flex justify-center items-center rounded-md rounded-br-[100px] hover:bg-white hover:text-[#007545] cursor-pointer transition duration-300 ease-in-out
                            ${selectedOption === "AT HOME" ? 'bg-white text-[#007545] scale-110 z-10' : 'bg-[#007545] text-white z-8'}`}
                    >
                        <p className='font-bold text-2xl'>AT HOME</p>
                    </li>
                    <li
                        onClick={() => { setListOffers(3); setSelectedOption("MERCHANDISE") }}
                        className={`btn-offer w-[115%] h-[88px] flex justify-center items-center rounded-md rounded-br-[100px] hover:bg-white hover:text-[#007545] cursor-pointer transition duration-300 ease-in-out
                            ${selectedOption === "MERCHANDISE" ? 'bg-white text-[#007545] scale-110 z-10' : 'bg-[#007545] text-white z-7'}`}
                    >
                        <p className='font-bold text-2xl'>MERCHANDISE</p>
                    </li>
                </ul>
            </div>

            <div className='gallery relative z-1 offer-container w-full h-[650px] flex justify-center items-center overflow-hidden'>
                <IoIosArrowForward
                    onClick={scrollToLeft}
                    size={40}
                    className={`prev scroll-button-right w-10 h-10 flex justify-center items-center bg-[#007545] text-white font-bold rounded-full absolute left-4 top-[50%] rotate-180 cursor-pointer transition-all duration-200 z-20
                        ${centerIndex <= 0 ? 'opacity-30 pointer-events-none' : 'hover:scale-125'}`}
                />

                <div
                    ref={containerRef}
                    className='flex items-center gap-8'
                    style={{
                        position: 'absolute',
                        left: `calc(50% - ${CARD_WIDTH * 2.2}px)`,
                    }}
                >
                    <Offers selectedOffer={listOffers} />
                </div>

                <IoIosArrowForward
                    onClick={scrollToRight}
                    size={40}
                    className={`next scroll-button-left w-10 h-10 flex justify-center items-center bg-[#007545] text-white font-bold rounded-full absolute right-4 top-[50%] cursor-pointer transition-all duration-200 z-20
                        ${centerIndex + 1 === totalCards.current ? 'opacity-30 pointer-events-none' : 'hover:scale-125'}`}
                />
            </div>
        </main>
    )
}

export default OfferSection;