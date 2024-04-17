//Core
import React from 'react'

//styles
import { Grid as GR, GridItem, Link } from '@chakra-ui/react'

const Grid = () => {
    return (
        <GR
            h='600px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(2, 1fr)'
            gap={7}
        >

            <GridItem rowSpan={2} className='rounded flex flex-col relative' colSpan={1} style={{ background: 'url(https://i.postimg.cc/qvrbQ1RK/ps5-slim-goedkope-playstation-large-1.png) no-repeat center / cover #000' }}>
                <div className="text-white flex flex-col items-start text-start gap-4 absolute bottom-8 left-8">
                    <h1 className='text-2xl font-semibold'>PlayStation 5</h1>
                    <p>Black and White version of the <br /> PS5 coming out on sale.</p>
                    <Link href='/' className='text-base font-medium'>Shop Now</Link>
                </div>
            </GridItem>
            <GridItem colSpan={1} className='rounded relative' rowSpan={1} style={{ background: 'url(https://i.postimg.cc/P52q5Fvz/attractive-woman-wearing-hat-posing-black-background-1.png) no-repeat center / cover' }}>
                <div className="text-white flex flex-col items-start text-start gap-4 absolute bottom-8 left-8">
                    <h1 className='text-2xl font-semibold'>Women’s Collections</h1>
                    <p>Featured woman collections that <br /> give you another vibe.</p>
                    <Link href='/' className='text-base font-medium'>Shop Now</Link>
                </div>
            </GridItem>

            <GR h={'284px'}
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(2, 1fr)'
                gap={7}>
                <GridItem rowSpan={1} className='rounded relative overflow-hidden ' colSpan={1} style={{ background: 'url(https://i.postimg.cc/sfGCLfPR/Frame-707.png) no-repeat center #000' }}>
                    <div className="grid absolute top-[40px] left-[40px] " />
                    <div className="text-white flex flex-col items-start text-start gap-2 absolute bottom-8 left-8">
                        <h1 className='text-2xl font-semibold'>Speakers</h1>
                        <p>Amazon wireless speakers</p>
                        <Link href='/' className='text-base font-medium'>Shop Now</Link>
                    </div>
                </GridItem>
                <GridItem rowSpan={1} className='rounded relative overflow-hidden' colSpan={1} style={{ background: 'url(https://i.postimg.cc/Znb3Csx8/652e82cd70aa6522dd785109a455904c.png) no-repeat center #000' }}>
                    <div className="grid absolute top-[40px] left-[40px] " />
                    <div className="text-white flex flex-col items-start text-start gap-2 absolute bottom-8 left-8">
                        <h1 className='text-2xl font-semibold'>Perfume</h1>
                        <p>GUCCI INTENSE OUD EDP</p>
                        <Link href='/' className='text-base font-medium'>Shop Now</Link>
                    </div>
                </GridItem>
            </GR>

        </GR >
    )
}

export default Grid