"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { PaginationOptions } from "swiper/types";

import styles from "./SWPersonal.module.scss"
import { personal } from './personal';
import Image from 'next/image';
import { RiInstagramLine, RiLinkedinLine, RiTwitterXLine } from 'react-icons/ri';
import Link from 'next/link';

const SWPersonal = () => {
  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: (index?: number, className?: string) => {
      return `<span class="${className} !bg-main !w-3 !h-3 !border-white !border-[2px]"></span>`;
    },
  };
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={3}
      pagination={pagination}
      className={styles.root}
    >
      {personal.map((item, i) => (
        <SwiperSlide key={i} className={styles.sSwipe}>
          <div className={styles.wrapper}>
            <div className={styles.info}>
                <Image src={item.img} width={370} height={370} alt={item.name}/>
                <div className={styles.text}>
                  <h2>{item.name}</h2>
                  <p>{item.position}</p>
                </div>
                <div className={styles.socials}>
                <Link href='/twitter'><RiTwitterXLine size={18} /></Link>
                <Link href='/instagram'><RiInstagramLine size={18}/></Link>
                <Link href='/linkedin'><RiLinkedinLine size={18}/></Link>
                </div>
             </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SWPersonal;
