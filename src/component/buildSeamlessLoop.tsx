

function buildSeamlessLoop(
    items: HTMLElement[],
    spacing: number,
    animateFunc: (el: HTMLElement) => gsap.core.Timeline
) {
    const overlap = Math.ceil(1 / spacing)
    const startTime = items.length * spacing + 0.5
    const loopTime = (items.length + overlap) * spacing + 1
    const rawSequence = gsap.timeline({ paused: true })
    const seamlessLoop = gsap.timeline({
        paused: true,
        repeat: -1,
        onRepeat() {
            // @ts-ignore
            this._time === this._dur && (this._tTime += this._dur - 0.01)
        },
    })
    const total = items.length + overlap * 2

    for (let i = 0; i < total; i++) {
        const index = i % items.length
        const time = i * spacing
        rawSequence.add(animateFunc(items[index]), time)
    }

    rawSequence.time(startTime)
    seamlessLoop
        .to(rawSequence, {
            time: loopTime,
            duration: loopTime - startTime,
            ease: 'none',
        })
        .fromTo(
            rawSequence,
            { time: overlap * spacing + 1 },
            {
                time: startTime,
                duration: startTime - (overlap * spacing + 1),
                immediateRender: false,
                ease: 'none',
            }
        )
    return seamlessLoop
}