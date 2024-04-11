import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

interface IArrows {
    navigationPrevRef: React.RefObject<HTMLDivElement>,
    navigationNextRef: React.RefObject<HTMLDivElement>
    style?: string
}

const Arrows = ({ navigationNextRef, navigationPrevRef, style }: IArrows) => {
    return (
        <div className={`${style} flex gap-3`}>
            <div className="p-3 rounded-full bg-gray-300/45 cursor-pointer" onClick={() => navigationPrevRef.current?.click()!}>
                <FaArrowLeft />
            </div>
            <div className='p-3 rounded-full bg-gray-300/45 cursor-pointer' onClick={() => navigationNextRef.current?.click()!}>
                <FaArrowRight />
            </div>
        </div>
    )
}

export default Arrows