"use client";
//Core
import { Link } from "@chakra-ui/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { PaginationOptions } from "swiper/types";

//styles
import styles from "./Swiper.module.scss";

//icons
import { FaApple, FaArrowRight } from "react-icons/fa";

const SW = () => {
  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: (index?: number, className?: string) => {
      return `<span class="${className} !bg-main !w-3 !h-3 !border-white !border-[2px]"></span>`;
    },
  };
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={pagination}
      className={styles.root}
    >
      {[...new Array(5)].map((_, i) => (
        <SwiperSlide key={i} className={styles.sSwipe}>
          <div className={styles.wrapper}>
            <div className={styles.info}>
              <div className={styles.iphone}>
                <FaApple className={styles.iconA} />
                <p className={styles.p}>iPhone 14 Series</p>
              </div>
              <h1 className={styles.h1}>
                Up to 10% <br /> off Voucher
              </h1>
              <div className={styles.shop}>
                <Link href={"/"} className={styles.link}>
                  Shop now
                </Link>
                <FaArrowRight className={styles.link} />
              </div>
            </div>
            <div className={styles.logo}>
              <Image src={"/iphone.png"} alt="logo" width={486} height={352} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SW;
