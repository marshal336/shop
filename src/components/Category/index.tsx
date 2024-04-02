"use client";
import React from "react";
import { arr } from "./arr";
import Link from "next/link";
import { ChevronRight, MenuIcon } from "lucide-react";
import { Button } from "@chakra-ui/react";
import styles from "./Category.module.scss";

const Category = () => {
  const [transform, setTransform] = React.useState(false);
  return (
    <div className="">
      <div className="md:hidden block">
        <Button
          onClick={() => setTransform(!transform)}
          rightIcon={<MenuIcon />}
          className="!w-full"
          size={"lg"}
        >
          Menu
        </Button>
      </div>
      <div className={`${styles.root} ${transform ? "hidden" : ""}`}>
        <div className={styles.separator} />
        <ul className={styles.menu}>
          {arr.map(({ title }, i) => (
            <li key={i}>
              <Link href={"/"} className={styles.items}>
                {title}
                {i === 0 && <ChevronRight />}
                {i === 1 && <ChevronRight />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
