import { SkeletonCircle, Skeleton as Sc } from "@chakra-ui/react";
import React from "react";

const Skeleton = () => {
  return (
    <div className="w-full pt-[47px] pb-6 relative">
      <div className="w-full h-[1px] bg-slate-300 absolute bottom-0"/>
      <div className="main-width mx-auto flex justify-between items-center">
        <Sc height={8} width={160} borderRadius={8} />
        <div className="flex gap-10">
          <Sc height={6} width={50} borderRadius={8} />
          <Sc height={6} width={50} borderRadius={8} />
          <Sc height={6} width={50} borderRadius={8} />
          <Sc height={6} width={50} borderRadius={8} />
        </div>
        <div className="flex gap-4 items-center">
          <Sc height={8} width={210} borderRadius={8} />
          <SkeletonCircle height={8} width={33} />
          <SkeletonCircle height={8} width={33} />
          <SkeletonCircle height={8} width={33} />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
