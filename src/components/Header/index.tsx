"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import { List } from "./list";
import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import DropDown from "./DropDown";

const Header = () => {
  const isLogin = false;
  const [value, setValue] = React.useState("");
  const [menu, setMenu] = React.useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.separator} />
      <div
        className={
          "max-w-[1170px] mx-auto flex justify-between items-center px-5"
        }
      >
        <div className="">
          <Image
            src={"/Header/Logo.png"}
            alt="logo"
            width={118}
            height={24}
            className="xs:block hidden"
          />
        </div>
        <ul className={styles.ul}>
          {List.map(({ link, title }, i) => (
            <li className={styles.li} key={i}>
              <Link href={link}>{title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <div className={styles.wrappInput}>
            <input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              placeholder="What are you looking for?"
              className={styles.input}
            />
            <Search
              className={`absolute top-[8px] right-[10px] cursor-pointer ${
                value && "right-[44px]"
              }`}
            />
            {value && (
              <X
                className={"absolute top-[8px] right-[9px] cursor-pointer"}
                onClick={() => setValue("")}
              />
            )}
          </div>
          {isLogin && (
            <div className="flex gap-4 ">
              <Link href={"/favorite"} className="relative">
                <Heart />
                <p className="absolute top-[-5px] right-[-3px] bg-red-600 py-[1px] px-[5px] text-white text-xs rounded-full">
                  0
                </p>
              </Link>
              <Link href={"/basket"} className="relative">
                <ShoppingCart />
                <p className="absolute top-[-5px] right-[-3px] bg-red-600 py-[1px] px-[5px] text-white text-xs rounded-full">
                  0
                </p>
              </Link>

              <Link href={"/profile"}>
                <User />
              </Link>
            </div>
          )}
        </div>
        <div
          className="md:hidden block ml-6 md:m-0"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </div>
        <DropDown items={List} isValid={menu} />
      </div>
    </header>
  );
};

export default Header;
