import { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

interface Branch {
    city: string
    description: string
}

interface Props {
    branches: Branch[]
}

function Locationsinfo({ branches }: Props) {
    const [showMore, setShowMore] = useState(false)
    const visibleBranches = showMore ? branches : branches.slice(0, 4)

    return (
        <div>
            <div className='flex items-center gap-20'>
                <div className='w-[224px] h-[640px] bg-white flex justify-center items-center ml-20'>
                    <h1 className='font-bold rotate-[-90deg] text-6xl text-[#007545] whitespace-nowrap'>OUR BRANCHES</h1>
                </div>
                <div>
                    <div className='grid grid-cols-2 gap-x-16 gap-y-28 justify-items-center transition-all duration-300'>
                        {visibleBranches.map((branch, index) => (
                            <div key={index} className='flex justify-center items-center'>
                                <div className='w-44 h-40 bg-white rounded-4xl'></div>
                                <div className='w-56 h-24 bg-[#007545]'>
                                    <h2 className='text-white text-xl font-bold text-start ml-4 py-2'>
                                        {branch.city}
                                    </h2>
                                    <p className='text-sm text-white ml-4'>
                                        {branch.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {branches.length > 4 && (
                <div className='flex justify-center items-center flex-row gap-2 ml-60'>
                    <div
                        onClick={() => setShowMore(!showMore)}
                        className='cursor-pointer flex items-center text-white gap-2 group hover:gap-4 hover:text-[#007545] transition-all duration-300'
                    >
                        <h3 className='text-xl font-bold'>{showMore ? "LESS" : "MORE"}</h3>
                        <BsArrowRight
                            fontSize={20}
                            className={`${showMore ? 'group-hover:rotate-[-90deg]' : 'group-hover:rotate-[90deg]'} transition-transform duration-300`}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Locationsinfo