'use client'
import { GridItem, Grid } from '@chakra-ui/react'
import { BsStar } from 'react-icons/bs'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { GiReturnArrow } from 'react-icons/gi'
import { TbTruckDelivery } from 'react-icons/tb'
import styles from './ProductDetail.module.scss'

import React from 'react'
import { CardDto } from '~/types/card'
import { Colors, setColor as Color } from '../utils'

const images = [{ title: 'one' }, { title: 'two' }, { title: 'three' }, { title: 'four' },]

const FullPost = ({ data }: { data: CardDto }) => {
    const [image, setImage] = React.useState(0)
    // const [color, setColor] = React.useState('');

    // React.useEffect(() => {
    //     setColor(Color())
    // }, [])
    // console.log(color);

    return (
        <div className={styles.root}>
            <div className={styles['product']}>
                <Grid
                    templateRows='repeat(4, 1fr)'
                    templateColumns='repeat(3, 140px)'
                    rowGap={4} columnGap={6}
                    className={`${styles.Grid} `}>
                    <GridItem
                        colSpan={2}
                        rowSpan={2}
                        colStart={2}
                        colEnd={4}
                        rowStart={2}
                        rowEnd={4}>
                        <div className={`${styles.mainLogo}`}>{images[image].title}</div>
                    </GridItem>
                    {images.map(({ title }, i) => (
                        <GridItem
                            onClick={() => setImage(i)}
                            rowSpan={1} colSpan={1}
                            rowStart={i + 1} rowEnd={i + 2}
                            className="mx-auto">
                            <div className={` ${styles.gridItemLogo} 
                             ${image === i && 'border-[5px] border-main'}`}>{title}</div>
                        </GridItem>
                    ))}
                </Grid>
                <div className={styles["product-info"]}>
                    <h1>{data.title}</h1>
                    <div className={styles['product-rating']}>
                        {[...new Array(5)].map((_, i) => {
                            const filledStars = data.star;
                            const hasHalfStar = data.star % 1 == 0;

                            if (i < filledStars) {
                                return <FaStar key={i} size={20} color="#ffd700" />;
                            } else if (i === filledStars && hasHalfStar) {
                                return (
                                    <FaStarHalfAlt
                                        key={i}
                                        size={20}
                                        color="#ffd700"
                                        enableBackground="grey"
                                    />
                                );
                            } else {
                                return <BsStar key={i} size={20} color="#ffd700" />;
                            }
                        })}
                        <span>{data.comments.length}</span>
                    </div>
                    <div className={styles['product-price']}>
                        <h3>${data.prices[0].replace('$', '')}</h3>
                        <h3 className={styles['product-crossedprice']}>{data?.prices[1]}</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ut
                        quisquam obcaecati incidunt ipsum exercitationem debitis reiciendis
                        quae sint error nemo doloremque adipisci corporis, ad consectetur quia
                        ipsa fugit totamstyles..
                    </p>
                    <span className={styles['product-line']} />
                    <Colors image={images[image].title} />
                    <div className={`${styles.return}`}>
                        <div className={styles.returnContainer}>
                            <TbTruckDelivery className={styles.track} />
                            <div className={styles.info}>
                                <h2>Free Delivery</h2>
                                <p>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div className={styles.separator} />
                        <div className={styles.returnContainer}>
                            <GiReturnArrow className={styles.track} />
                            <div className={styles.info}>
                                <h2>Return Delivery</h2>
                                <p>Free 30 Days Delivery Returns. Details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullPost