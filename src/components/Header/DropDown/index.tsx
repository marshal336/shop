import React from "react";
import { arr } from "./arr";
import Link from "next/link";
import { motion } from "framer-motion";

const DropDown = ({ valid }: { valid?: boolean }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: valid ? 1 : 0,
      }}
      className="w-[224px] h-auto p-4 absolute top-8 right-0 z-10 rounded backdrop-blur-[150px] bg-black/40 text-white"
    >
      <div className="flex flex-col  gap-4">
        {arr.map(({ logo, title, link }, i) => (
          <Link key={i} href={link} className="flex gap-5 items-center">
            <div className="text-3xl">{logo}</div>
            <p className="text-sm ">{title}</p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default DropDown;
