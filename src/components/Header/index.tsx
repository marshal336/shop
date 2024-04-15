"use client";
import Image from "next/image";
import React from "react";
import styles from "./Header.module.scss";
import MobileMenu from "./Mobile";
import DropDown from "./DropDown";
import { List } from "./list";
import Link from 'next/link'
import { Heart, MenuIcon, Search, ShoppingCart, User, X } from "lucide-react";
import { Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { useAppSelector } from "~/redux/store";

const Header = () => {
  const [value, setValue] = React.useState("");
  const [menu, setMenu] = React.useState(false);
  const [profile, setProfile] = React.useState(false);

  const { count: post } = useAppSelector(state => state.post)
  const { favoriteItem } = useAppSelector(state => state.favorite)
  return (
    <header className={styles.header}>
      <div className={styles.separator} />
      <div className={`max-w-[1170px] ${styles.container}`}>
        <Link href="/" className="">
          <Image
            src={"/Header/Logo.png"}
            alt="logo"
            width={118}
            height={24}
            className="xs:block hidden"
          />
        </Link>
        <ul className={styles.ul}>
          {List.map(({ link, title }, i) => (
            <li className={styles.li} key={i}>
              <Link
                href={link}
              >
                {title}
              </Link>
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
              className={`absolute top-[8px] right-[10px] cursor-pointer ${value && "right-[44px]"
                }`}
            />
            {value && (
              <X
                className={"absolute top-[8px] right-[9px] cursor-pointer"}
                onClick={() => setValue("")}
              />
            )}
          </div>
          <div className="flex gap-4 ">
            <Link href={"/favorite"} className="relative">
              <Heart />
              {favoriteItem.length > 0 &&
                <p className="absolute top-[-5px] right-[-3px] bg-red-600 py-[1px] px-[5px] text-white text-xs rounded-full">
                  {favoriteItem.length}
                </p>}
            </Link>
            <Link href={"/cart"} className="relative">
              <ShoppingCart />
              {post > 0 &&
                <p className="absolute top-[-5px] right-[-3px] bg-red-600 py-[1px] px-[5px] text-white text-xs rounded-full">
                  {post}
                </p>}
            </Link>

            <div className="relative z-10">
              <Menu offset={[20, 0]}>
                <MenuButton>
                  <User
                    className="cursor-pointer"
                    onClick={() => setProfile(!profile)}
                  />
                </MenuButton>
                <MenuList className="w-[254px] h-auto p-4 absolute top-2 right-[-20px] rounded backdrop-blur-[150px] !bg-black/40 !text-white">
                  <DropDown />
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
        <div
          className="md:hidden block ml-6 md:m-0"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <MenuIcon />}
        </div>
        <MobileMenu items={List} isValid={menu} />
      </div>
    </header>
  );
};

export default Header;
