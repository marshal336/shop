import Image from "next/image";
import React from "react";
import Category from "~/components/Category";
import SW from "~/components/Swiper";
import Wrapper from "~/components/Wrapper";
import CustomButton from "~/components/elements/button";
export default function Home() {
  return (
    <div className="">
      <section className="flex md:flex-row flex-col items-center justify-center main-width xs:px-5 p-0">
        <Category />
        <SW />
      </section>
      <div className="main-width pt-[140px] text-center">
        <Wrapper isValidToTimer={true} mainTitle="Flash Sales" title="Today’" />
        <div className="mx-auto pb-[60px] relative ">
          <CustomButton />
          <div className="separator" />
        </div>
        <div className="main-width pt-[60px] text-center">
          <Wrapper
            title="Categories"
            mainTitle="Browse By Category"
            isValidToCard={false}
            isValidToCategory
          />
        </div>
      </div>
    </div>
  );
}
