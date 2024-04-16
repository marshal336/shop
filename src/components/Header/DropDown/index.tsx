/* eslint-disable react/jsx-key */
import React from "react";
import { arr } from "./arr";
import Link from "next/link";
import { MenuItem } from "@chakra-ui/react";
import { logout } from "~/redux/reducers/user";
import { useAppDispatch } from "~/redux/store";

const DropDown = () => {
  const dispatch = useAppDispatch()

  const click = (i: number) => {
    if(i === 4) {
      dispatch(logout())
    }
  }
  return (
    <ul className="flex flex-col gap-4 ">
      {arr.map(({ logo, title, link }, i) => (
        <MenuItem className="!bg-transparent" key={i}>
          <Link href={link} className={`flex gap-5 items-center `} onClick={() => click(i)}>
            <div className="text-3xl">{logo}</div>
            <p className={`text-sm`}>{title}</p>
          </Link>
        </MenuItem>
      ))}
    </ul>
  );
};

export default DropDown;
