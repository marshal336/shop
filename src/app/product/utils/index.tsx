'use client'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import React from 'react'
import { CiHeart } from 'react-icons/ci'

const sizes = ['xs', 's', 'm', 'l', 'xl']
const colors = [{ color: '#A0BCDD', title: 'light' }, { color: '#E07575', title: 'red' }]

export const Colors = ({ image }: { image: string }) => {
    const [border, setBorder] = React.useState(0)
    const [s, setS] = React.useState(0)
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
        step: 1,
        defaultValue: 0,
        min: 0,
        max: 6,
    })
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()


    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center max-w-[140px]">
                <p className="!text-xl">Colors:</p>
                <div className="flex gap-2 items-center">
                    {colors.map(({ color }, i) => (
                        <div
                            key={i}
                            onClick={() => setBorder(i)}
                            className={`bg-[${color}] cursor-pointer 
                        min-w-5 min-h-5 rounded-full
                         ${border === i ? 'border border-black' : ''}`}></div>
                    ))}
                </div>
            </div>
            <div className="flex items-center max-w-[310px]">
                <p className="!text-xl">Size:</p>
                <div className="flex gap-3 ">
                    {sizes.map((el, i) => (
                        <Button
                            onClick={() => setS(i)}
                            variant='outline' size='sm'
                            className='!uppercase !text-base !font-normal
                      focus:!bg-main hover:!bg-main hover:!text-white focus:!text-white'
                            colorScheme='gray' key={i}>{el}</Button>
                    ))}
                </div>
            </div>
            <div className={'flex justify-between items-center pb-10 '}>
                <HStack maxW='140px'>
                    <Button
                        className='!bg-red-600 !text-white'{...dec}>-</Button>
                    <Input {...input} readOnly />
                    <Button className='!bg-red-600 !text-white'{...inc}>+</Button>
                </HStack>
                <Button
                    className="!w-[170px] !h-[40px]
                 !bg-red-600 !text-white" onClick={() => console.log({
                        size: sizes[s],
                        color: colors[border].title,
                        count: input.value,
                        img: image
                    })}>Buy Now</Button>
                <Button
                    variant={'ghost'}
                    colorScheme='gray'
                    className="hover:!bg-main hover:!text-white
                  !text-black border !w-8 !p-0"
                    children={<CiHeart className="!text-xl" />} />
            </div>

        </div>
    )
}

let randomColor = '#'
const hex = '123456789ABCDEF'
export const setColor = () => {
    randomColor = "#"

    for (let i = 0; i < 6; i++) {
        randomColor = randomColor + hex[Math.floor(Math.random() * hex.length)]
    }
    
    return randomColor
}