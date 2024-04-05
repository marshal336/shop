/* eslint-disable react/jsx-key */
import React from "react";
import { arr } from "./arr";
import Link from "next/link";
import { MenuItem } from "@chakra-ui/react";

const DropDown = () => {
  return (
    <ul className="flex flex-col gap-4 ">
      {arr.map(({ logo, title, link }, i) => (
        <MenuItem className="!bg-transparent" key={i}>
          <Link href={link} className="flex gap-5 items-center">
            <div className="text-3xl">{logo}</div>
            <p className="text-sm ">{title}</p>
          </Link>
        </MenuItem>
      ))}
    </ul>
  );
};

export default DropDown;
