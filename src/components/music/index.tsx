'use client'
//Core
import React from 'react'

//styles
import { Button } from '@chakra-ui/react'

//components
import Timer from './Timer';

const Music = () => {
    const date = 6 * 24 * 60 * 60 * 1000;

    return (
        <div className='main-width bg-black flex p-16 justify-between'>
            <div className="flex flex-col gap-8 items-start justify-start">
                <p className='text-[#00ff66]'>Categories</p>
                <h1 className="text-5xl text-left text-white">Enhance Your <br /> Music Experience</h1>
                <Timer date={date}/>
                <Button className='!bg-[#00ff66] !text-white' size={'lg'}>Buy Now!</Button>
            </div>
            <div className="relative">
                <div className="bumbox absolute z-[1]" />
                <img src="https://i.postimg.cc/4xxBdF0X/JBL-BOOMBOX-2-HERO-020-x1-1-1.png" alt="" className='z-[2] relative'/>
            </div>
        </div>
    )
}

export default Music