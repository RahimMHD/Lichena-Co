import { useRef, useEffect } from 'react'
import Offers from './offers'

interface Props {
    selectedOffer: number
    centerIndex: number
    totalCardsRef: React.MutableRefObject<number>
}

export default function CardsWithCenter({ selectedOffer, centerIndex, totalCardsRef }: Props) {
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!wrapperRef.current) return
        const cards = Array.from(wrapperRef.current.children) as HTMLElement[]
        totalCardsRef.current = cards.length

        cards.forEach((card, i) => {
            const isCenter = i === centerIndex
            card.style.transition = 'transform 0.5s ease, opacity 0.5s ease'
            card.style.transform = isCenter ? 'scale(1.18)' : 'scale(0.88)'
            card.style.opacity = isCenter ? '1' : '0.6'
            card.style.zIndex = isCenter ? '10' : '1'
        })
    }, [centerIndex, selectedOffer])

    return (
        <div ref={wrapperRef} style={{ display: 'contents' }}>
            <Offers selectedOffer={selectedOffer} />
        </div>
    )
}