import React from "react";
import Category from "~/components/Category";
import SW from "~/components/Swiper";
export default function Home() {

  return (
    <div className="">
      <section className="flex md:flex-row flex-col items-center justify-center main-width xs:px-5 p-0">
        <Category />
        <SW />
      </section>
    </div>
  );
}
