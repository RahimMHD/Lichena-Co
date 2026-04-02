import React, { useEffect, useRef, Children } from 'react'
import Offers from './offers'

interface Props {
    selectedOffer: number
    centerIndex: number
    totalCardsRef: React.MutableRefObject<number>
}

export default function CardsWithCenter({ selectedOffer, centerIndex, totalCardsRef }: Props) {
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (wrapperRef.current) {
            const cards = wrapperRef.current.children
            totalCardsRef.current = cards.length

            Array.from(cards).forEach((card, i) => {
                const el = card as HTMLElement
                const isCenter = i === centerIndex
                el.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease'
                el.style.transform = isCenter ? 'scale(1.18)' : 'scale(0.88)'
                el.style.opacity = isCenter ? '1' : '0.6'
                el.style.zIndex = isCenter ? '10' : '1'
                el.style.backgroundColor = isCenter ? '#fff' : '#007545'
            })
        }
    }, [centerIndex, selectedOffer])

    return (
        <div ref={wrapperRef} style={{ display: 'contents' }}>
            <Offers selectedOffer={selectedOffer} />
        </div>
    )
}