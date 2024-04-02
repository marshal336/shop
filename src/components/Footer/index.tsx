import React from "react";
import {
  StepForward,
  Facebook,
  Instagram,
  Twitter,
  LinkedinIcon,
} from "lucide-react";
import Link from "next/link";
import { List } from "./list";
import Image from "next/image";
import styles from "./Footer.module.scss";
const listIconst = [<Facebook />, <Twitter />, <Instagram />, <LinkedinIcon />];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} main-width`}>
        <div className={styles.one}>
          <h1 className={styles.h1}>Exclusive</h1>
          <h2 className={styles.h2}>Subscribe</h2>
          <p className={styles.p}>Get 10% off your first order</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.input}
            />
            <StepForward className={styles.icon} />
          </div>
        </div>
        {List.map((el, i) => (
          <div key={i}>
            <h2 className="text-xl font-medium pb-6">{el.title}</h2>
            <ul className="max-w-[175px] flex flex-col gap-3">
              {el.list.map((el, i) => (
                <li key={i}>
                  <Link href={el.link}>{el.item}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className={styles.two}>
          <h1 className={styles.h1}>Download App</h1>
          <p className={styles.p}>Save $3 with App New User Only</p>
          <div className={styles.logos}>
            <Image
              src={"/footer/Qrcode.svg"}
              alt="logo"
              width={76}
              height={76}
            />
            <div className="flex flex-col">
              <Image
                src={"/footer/GooglePlay.svg"}
                alt="logo"
                width={104}
                height={30}
              />
              <Image
                src={"/footer/AppStore.svg"}
                alt="logo"
                width={104}
                height={30}
              />
            </div>
          </div>
          <div className={styles.icons}>
            {listIconst.map((el, i) => (
              <Link href={"/"} key={i}>
                {el}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <div className="w-full h-[1px] bg-slate-900 absolute top-0" />
        <div className="flex justify-center items-center opacity-30">
          <p>&copy;</p>
          <p>Copyright Rimel 2024. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
