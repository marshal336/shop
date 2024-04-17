//Core
import React from "react";
//mock
import { Arr } from "./types";

const MobileMenu = ({ items, isValid }: Arr) => {
  return (
    <ul
      className={`md:hidden absolute ${
        !isValid ? "hidden" : ""
      } top-[85px] left-0 right-0 bottom-0 min-h-screen z-[5] bg-slate-100 overflow-y-scroll pl-3 flex flex-col gap-3 pt-3`}
    >
      {items.map((el, i) => (
        <li key={i}>{el.title}</li>
      ))}
    </ul>
  );
};

export default MobileMenu;
