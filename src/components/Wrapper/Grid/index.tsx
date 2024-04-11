import React from 'react'
import { Grid as GR, GridItem } from '@chakra-ui/react'

const Grid = () => {
    return (
        <GR
            h='600px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(2, 1fr)'
            gap={7}
        >

            <GridItem rowSpan={2} className='rounded' colSpan={1} style={{ background: 'url(https://i.postimg.cc/qvrbQ1RK/ps5-slim-goedkope-playstation-large-1.png) no-repeat center / cover #000' }}>
                <h1></h1>
            </GridItem>
            <GridItem colSpan={1} className='rounded' rowSpan={1} style={{ background: 'url(https://i.postimg.cc/P52q5Fvz/attractive-woman-wearing-hat-posing-black-background-1.png) no-repeat center / cover' }}></GridItem>

            <GR h={'284px'}
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(2, 1fr)'
                gap={7}>
                <GridItem rowSpan={1} className='rounded relative overflow-hidden ' colSpan={1} style={{ background: 'url(https://i.postimg.cc/sfGCLfPR/Frame-707.png) no-repeat center #000' }}>
                    <div className="grid absolute top-[40px] left-[40px] " />
                </GridItem>
                <GridItem rowSpan={1} className='rounded relative overflow-hidden' colSpan={1} style={{ background: 'url(https://i.postimg.cc/Znb3Csx8/652e82cd70aa6522dd785109a455904c.png) no-repeat center #000' }}>
                    <div className="grid absolute top-[40px] left-[40px] " />
                </GridItem>
            </GR>

        </GR >
    )
}

export default Grid