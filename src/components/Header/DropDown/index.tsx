import React from "react";
import { motion } from "framer-motion";
import { Arr } from "./types";

const DropDown = ({ items, isValid }: Arr) => {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: isValid ? 1 : 0 }}
      className="md:hidden absolute top-[85px] left-0 right-0 bottom-0 min-h-screen z-20 bg-slate-100 overflow-y-scroll pl-3 flex flex-col gap-3 pt-3"
    >
      {items.map((el, i) => (
        <li key={i}>{el.title}</li>
      ))}
    </motion.ul>
  );
};

export default DropDown;
