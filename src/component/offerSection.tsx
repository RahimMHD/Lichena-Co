import React, { useState, useRef, useEffect } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import gsap from 'gsap'
import myJsonData from '../data/dataIngrediant.json'
import Offers from './offers'
import { IoIosArrowForward as Arrow } from 'react-icons/io'

interface OfferDetail {
    image: string
    title: string
    price: { small: number; medium: number; large: number }
}

function OfferSection() {
    const [selectedOption, setSelectedOption] = useState<string>('DRINKS')
    const [listOffers, setListOffers] = useState<number>(0)

    const ulRef = useRef<HTMLUListElement>(null)

    // GSAP refs — we store everything so we can kill & rebuild on category change
    const seamlessLoopRef = useRef<gsap.core.Timeline | null>(null)
    const scrubRef = useRef<gsap.core.Tween | null>(null)
    const offsetRef = useRef({ offset: 0 })
    const isAnimatingRef = useRef(false)

    const SPACING = 0.15 // stagger spacing between cards (same role as in GSAP demo)

    // ── animate function — defines how each card enters/exits ──
    const animateFunc = (el: HTMLElement) => {
        const tl = gsap.timeline()
        tl.fromTo(
            el,
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                zIndex: 100,
                duration: 0.5,
                yoyo: true,
                repeat: 1,
                ease: 'power1.in',
                immediateRender: false,
            }
        ).fromTo(
            el,
            { xPercent: 400 },
            { xPercent: -400, duration: 1, ease: 'none', immediateRender: false },
            0
        )
        return tl
    }

    // ── build / rebuild the seamless loop ──────────────────────────────────
    const buildLoop = () => {
        if (!ulRef.current) return

        // kill previous
        seamlessLoopRef.current?.kill()
        scrubRef.current?.kill()
        offsetRef.current.offset = 0

        const items = Array.from(ulRef.current.children) as HTMLElement[]

        // set initial state (same as GSAP demo)
        gsap.set(items, { xPercent: 400, opacity: 0, scale: 0 })

        const loop = buildSeamlessLoop(items, SPACING, animateFunc)
        seamlessLoopRef.current = loop

        const snapTime = gsap.utils.snap(SPACING)
        const wrapTime = gsap.utils.wrap(0, loop.duration())

        const scrub = gsap.to(offsetRef.current, {
            offset: 0,
            onUpdate() {
                loop.time(wrapTime(offsetRef.current.offset))
            },
            duration: 0.5,
            ease: 'power3',
            paused: true,
        })
        scrubRef.current = scrub

        // snap to card 0 on init
        scrub.vars.offset = 0
        scrub.invalidate().restart()
    }

    // rebuild when category changes
    useEffect(() => {
        // wait one tick so React has rendered the new <li> elements
        const id = setTimeout(buildLoop, 0)
        return () => clearTimeout(id)
    }, [listOffers])

    // ── scroll to a specific offset (same as GSAP demo's scrollToOffset) ──
    const scrollToOffset = (offset: number) => {
        if (!seamlessLoopRef.current || !scrubRef.current) return
        const snapTime = gsap.utils.snap(SPACING)
        const snapped = snapTime(offset)
        scrubRef.current.vars.offset = snapped
        scrubRef.current.invalidate().restart()
    }

    const goNext = () => scrollToOffset(offsetRef.current.offset + SPACING)
    const goPrev = () => scrollToOffset(offsetRef.current.offset - SPACING)

    const changeCategory = (label: string, index: number) => {
        setSelectedOption(label)
        setListOffers(index)
    }

    const currentOffer = (myJsonData as any)[listOffers]

    return (
        <main className='flex flex-col justify-center items-center w-full min-h-[800px] rounded-3xl pb-2'>

            {/* ── Category tabs ── */}
            <div className='flex justify-center px-1 py-8 w-full rounded-3xl'>
                <ul className='grid grid-cols-4 justify-center items-center w-[88%] gap-0 my-0 mb-14 mr-10'>
                    {[
                        { label: 'DRINKS', i: 0 },
                        { label: 'FOOD', i: 1 },
                        { label: 'AT HOME', i: 2 },
                        { label: 'MERCHANDISE', i: 3 },
                    ].map(({ label, i }) => (
                        <li
                            key={label}
                            onClick={() => changeCategory(label, i)}
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

            {/* ── Carousel ── */}
            <div className='gallery relative w-full h-[650px] flex justify-center items-center overflow-hidden'>

                <IoIosArrowForward
                    onClick={goPrev}
                    size={40}
                    className='prev w-10 h-10 bg-[#007545] text-white rounded-full absolute left-4 top-1/2 -translate-y-1/2 rotate-180 cursor-pointer hover:scale-125 transition-all duration-200 z-20'
                />

                {/* The cards list — position relative so absolute children stack correctly */}
                <ul
                    ref={ulRef}
                    className='cards relative w-full h-full list-none p-0 m-0'
                >
                    {currentOffer.details.map((offer: OfferDetail, index: number) => (
                        <Offers key={`${listOffers}-${index}`} offer={offer} selectedOffer={listOffers} />
                    ))}
                </ul>

                <IoIosArrowForward
                    onClick={goNext}
                    size={40}
                    className='next w-10 h-10 bg-[#007545] text-white rounded-full absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-125 transition-all duration-200 z-20'
                />
            </div>
        </main>
    )
}

export default OfferSection