"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import { List } from "./list";
import { Menu, Search, X } from "lucide-react";

const Header = () => {
  const [value, setValue] = React.useState("");
  const [menu, setMenu] = React.useState(false);
  
  return (
    <header className={styles.header}>
      <div className={styles.separator} />
      <div className={styles.container}>
        <div className="">
          <Image
            src={"/Header/Logo.png"}
            alt="logo"
            width={118}
            height={24}
            className="max-xs:w-[50px]"
          />
        </div>
        <ul className={styles.ul}>
          {List.map(({ link, title }, i) => (
            <li className={styles.li}>
              <Link href={link}>{title}</Link>
            </li>
          ))}
        </ul>
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
        <div className="md:hidden block" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
