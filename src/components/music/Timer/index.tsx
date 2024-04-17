'use client'
//Core
import React from 'react'

//hooks
import { useGetTims } from '~/hooks/useGetTime';

const Timer = ({ date }: { date: number }) => {
    const [time, setTime] = React.useState(date);

    React.useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000);
        }, 1000);
    }, [time]);

    const { days, hours, minuts, seconds } = useGetTims(time);
    if (days + hours + minuts + seconds <= 0) {
        return;
    }
    return (
        <div className="flex gap-6 justify-center items-center text-[11px]">
            <div className="flex flex-col py-[10px] px-[15px] bg-white rounded-full ">
                <p className='text-base font-semibold'>{days}</p>
                <span>days</span>
            </div>
            <div className="flex flex-col py-[10px] px-[15px] bg-white rounded-full">
                <p className='text-base font-semibold'>{hours}</p>
                <span>hours</span>
            </div>
            <div className="flex flex-col py-[10px] px-[15px] bg-white rounded-full">
                <p className='text-base font-semibold'>{minuts}</p>
                <span>minuts</span>
            </div>
            <div className="flex flex-col py-[10px] px-[15px] bg-white rounded-full">
                <p className='text-base font-semibold'>{seconds}</p>
                <span>seconds</span>
            </div>
        </div>
    )
}

export default Timer