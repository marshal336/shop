'use client'
//Core
import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

//styles
import styles from './Category.module.scss'
import { Card } from '@chakra-ui/react'

//icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

//mock
import { arr } from './arr'

interface ICategory {
  navigationPrevRef: React.RefObject<HTMLDivElement>
  navigationNextRef: React.RefObject<HTMLDivElement>
}

const Category = ({ navigationNextRef, navigationPrevRef }: ICategory) => {

  return (
    <div className={styles.root}>
      <Swiper slidesPerView={6} modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef?.current,
          nextEl: navigationNextRef?.current,
        }}
      >
        {arr.map(({ title, logo }, i) => (
          // eslint-disable-next-line react/jsx-key
          <SwiperSlide>
            <Link href={`/${title.toLowerCase()}`} key={i}>
              <Card className={styles.Card}>
                <div className={styles.info}>
                  {logo}
                  <p className={styles.p}>{title}</p>
                </div>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
        <div className={'hidden'}>
          <div className="p-3 rounded-full bg-gray-300/45 cursor-pointer" ref={navigationPrevRef}>
            <FaArrowLeft />
          </div>
          <div className='p-3 rounded-full bg-gray-300/45 cursor-pointer' ref={navigationNextRef}>
            <FaArrowRight />
          </div>
        </div>
      </Swiper>
    </div>
  )
}

export default Category