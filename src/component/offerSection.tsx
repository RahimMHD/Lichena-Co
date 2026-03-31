import React, { useState, useRef, useEffect } from 'react'
import Offers from './offers'
import { IoIosArrowForward } from 'react-icons/io'
import gsap from 'gsap';
import { Flip } from 'gsap/all';

gsap.registerPlugin(Flip);

function OfferSection() {
    const [selectedOption, setSelectedOption] = useState<string>('DRINKS');
    const [listOffers, setListOffers] = useState<number>(0);
    const containerRef = useRef<HTMLUListElement>(null);
    const isAnimatingRef = useRef<boolean>(false);

    // Initialize cards after component mounts
    useEffect(() => {
        if (containerRef.current) {
            const cards = gsap.utils.toArray(".cards", containerRef.current);
            gsap.set(cards, { opacity: 1, scale: 1 }); // Ensure cards are visible
        }
    }, [listOffers]); // Re-run when offers change

    const updateCaterpillar = (forward: boolean) => {
        if (!containerRef.current || isAnimatingRef.current) return;
        
        isAnimatingRef.current = true;
        const cards = gsap.utils.toArray(".cards", containerRef.current) as HTMLElement[];
        
        if (cards.length === 0) {
            isAnimatingRef.current = false;
            return;
        }

        const first = cards[0];
        const last = cards[cards.length - 1];
        const state = Flip.getState(cards, { props: "transform,opacity" });
        
        // Clone the element to animate
        const newCard = forward ? first.cloneNode(true) as HTMLElement : last.cloneNode(true) as HTMLElement;
        
        // Set initial state for the new card
        gsap.set(newCard, { 
            scale: 0, 
            opacity: 0,
            position: 'absolute'
        });

        if (forward) {
            // Move first to end
            containerRef.current.appendChild(newCard);
            gsap.set(first, { opacity: 0.5, scale: 0.8 });
        } else {
            // Move last to beginning
            containerRef.current.insertBefore(newCard, cards[0]);
            gsap.set(last, { opacity: 0.5, scale: 0.8 });
        }

        Flip.from(state, {
            targets: cards,
            duration: 0.7,
            ease: "power2.inOut",
            absolute: true,
            nested: true,
            onEnter: (elements) => {
                // Animate the new card in
                gsap.to(elements, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: "back.out(1.7)",
                    onComplete: () => {
                        // Remove the original element that was moved
                        if (forward) {
                            containerRef.current?.removeChild(first);
                        } else {
                            containerRef.current?.removeChild(last);
                        }
                        isAnimatingRef.current = false;
                    }
                });
            },
            onLeave: (elements) => {
                // Animate out the old position
                gsap.to(elements, {
                    opacity: 0,
                    scale: 0,
                    duration: 0.3,
                    ease: "power2.in"
                });
            },
            onComplete: () => {
                // Clean up any absolute positioning
                cards.forEach(card => {
                    card.style.position = '';
                    card.style.left = '';
                    card.style.top = '';
                });
            }
        });
    };

    const scrollToLeft = () => {
        updateCaterpillar(false);
    };

    const scrollToRight = () => {
        updateCaterpillar(true);
    };

    return (
        <main className='flex flex-col justify-center items-center w-full min-h-[800px] rounded-3xl pb-2'>
            <div className='flex justify-center px-1 py-8 w-[100%] rounded-3xl'>
                <ul className='grid grid-cols-4 justify-center items-center w-[88%] gap-0 my-0 mb-14 mr-10'>
                    <li
                        onClick={() => {setListOffers(0); setSelectedOption("DRINKS")}}
                        className={`btn-offer w-[115%] h-[88px] flex justify-center items-center rounded-md rounded-br-[100px] hover:bg-white hover:text-[#007545] cursor-pointer transition duration-300 ease-in-out z-10
                            ${selectedOption === 'DRINKS' ? 'bg-white text-[#007545] scale-110' : 'bg-[#007545] text-white'}
                        `}
                    >
                        <p className='font-bold text-2xl'>DRINKS</p>
                    </li>
                    <li
                        onClick={() => {setListOffers(1); setSelectedOption("FOOD")}}
                        className={`btn-offer bg-[#007545] w-[115%] h-[88px] flex justify-center items-center rounded-md rounded-br-[100px] hover:bg-white hover:text-[#007545] cursor-pointer transition duration-300 ease-in-out
                            ${selectedOption === "FOOD" ? 'bg-white text-[#007545] scale-110 z-10' : 'bg-[#007545] text-white z-9'} 
                        `}
                    >
                        <p className='font-bold text-2xl'>FOOD</p>
                    </li>
                    <li
                        onClick={() => {setListOffers(2); setSelectedOption("AT HOME")}}
                        className={`btn-offer bg-[#007545] w-[115%] h-[88px] flex justify-center items-center rounded-md rounded-br-[100px] hover:bg-white hover:text-[#007545] cursor-pointer transition duration-300 ease-in-out
                            ${selectedOption === "AT HOME" ? 'bg-white text-[#007545] scale-110 z-10' : 'bg-[#007545] text-white z-8'} 
                        `}
                    >
                        <p className='font-bold text-2xl'>AT HOME</p>
                    </li>
                    <li
                        onClick={() => {setListOffers(3); setSelectedOption("MERCHANDISE")}}
                        className={`btn-offer bg-[#007545] w-[115%] h-[88px] flex justify-center items-center rounded-md rounded-br-[100px] hover:bg-white hover:text-[#007545] cursor-pointer transition duration-300 ease-in-out
                            ${selectedOption === "MERCHANDISE" ? 'bg-white text-[#007545] scale-110 z-10' : 'bg-[#007545] text-white z-7'} 
                        `}
                    >
                        <p className='font-bold text-2xl'>MERCHANDISE</p>
                    </li>
                </ul>
            </div>
            <div className='gallery relative z-1 offer-container w-12/12 h-[650px] flex justify-center items-center overflow-hidden'>
                <IoIosArrowForward 
                    onClick={scrollToLeft}
                    size={40} 
                    className='prev scroll-button-right w-10 h-10 flex justify-center items-center bg-[#007545] text-white font-bold rounded-full absolute left-4 top-[50%] rotate-180 cursor-pointer hover:scale-125 transition-all duration-200 z-20'
                />
                
                <ul
                    ref={containerRef}
                    className='container scroll-container relative z-1 offer-container w-full h-full flex items-center py-32 px-4 gap-8 mt-8 mb-24'
                >
                    <Offers selectedOffer={listOffers} />
                </ul>
                
                <IoIosArrowForward 
                    onClick={scrollToRight}
                    size={40} 
                    className='next scroll-button-left w-10 h-10 flex justify-center items-center bg-[#007545] text-white font-bold rounded-full absolute right-4 top-[50%] cursor-pointer hover:scale-125 transition-all duration-200 z-20'
                />
            </div>
        </main>
    )
}

export default OfferSection;






























  // // scrolltoleft when clicking the left arrow
    // const scrollToLeft = () => {
    //     const parent = document.querySelector('.scroll-container');

    //     parent && parent.scrollTo({left: 660, behavior: 'smooth'});
    // };

    // // scrolltoRight when clicking the right arrow
    // const scrollToRight = () => {
    //     const parent = document.querySelector('.scroll-container');

    //     parent && parent.scrollTo({left: 0, behavior: 'smooth'});
    // };