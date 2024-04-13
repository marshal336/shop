'use client'
import React from 'react'
import styles from './ProductDetail.module.scss'
import { GridItem, Grid } from '@chakra-ui/react'
import { BsStar } from 'react-icons/bs'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { GiReturnArrow } from 'react-icons/gi'
import { TbTruckDelivery } from 'react-icons/tb'
import { Colors, setColor as Color } from '../utils'
import { CardDto } from '~/types/card'

const images = [{ title: 'one' }, { title: 'two' }, { title: 'three' }, { title: 'four' },]

const FullPost = ({ data }: { data: CardDto }) => {
    const pr = Number(data.prices[0])
    const [image, setImage] = React.useState(0)
    const [price, setPrice] = React.useState(pr)
    const [count, setCount] = React.useState(1)
    const inc = () => {
        setCount(count + 1)
        setPrice(p => p + pr)
        if (count === 20) {
            setCount(count)
            setPrice(price)
        }
    }
    const dec = () => {
        setCount(count - 1)
        setPrice(p => p - pr)
        if (count === 1) {
            setCount(1)
            setPrice(price)
        }
    }
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
                            className="mx-auto"
                            key={i}>
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
                        <h3>${price}</h3>
                        <h3 className={styles['product-crossedprice']}>{data?.prices[1]}</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ut
                        quisquam
                    </p>
                    <span className={styles['product-line']} />
                    <Colors count={count} inc={inc} dec={dec} price={price} />
                    <div className={`${styles.return}`}>
                        <div className={styles.returnContainer}>
                            <TbTruckDelivery className={styles.track} />
                            <div className={styles.info}>
                                <h2>Free Delivery</h2>
                                <p>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div className={styles.separator} />
                        <div className={`${styles.returnContainer} !p-0`}>
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