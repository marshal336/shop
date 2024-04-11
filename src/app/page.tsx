import React from "react";
import { instance } from "~/api/instance";
import Category from "~/components/Category";
import SW from "~/components/Swiper";
import Wrapper from "~/components/Wrapper";
import CustomButton from "~/components/elements/button";
import Music from "~/components/music";
import { CardDto } from "~/types/card";
import { getData } from "~/utils/api-link";

// const getData = async () => {
//   try {
//     const { data } = await instance.get<CardDto[]>("/card");
//     return data;
//   } catch (error) {

//   }
// };
export default async function Home() {
  // const data = await getData();
  const data = await getData.getData('limit=4')
  const bestData = await getData.getBestData('best=true')
  const allData = await getData.getAllData('sortBy=-id&limit=8')
  return (
    <div className="">
      <section className="flex md:flex-row flex-col items-center justify-center main-width xs:px-5 p-0">
        <Category />
        <SW />
      </section>
      <div className="main-width pt-[140px] text-center">
        <Wrapper isValidToTimer mainTitle="Flash Sales" title="Today’" data={data} />
        <div className="mx-auto pb-[60px] relative ">
          <CustomButton title="View All Products" />
          <div className="separator" />
        </div>
        <div className="main-width pt-[60px] text-center">
          <Wrapper
            title="Categories"
            mainTitle="Browse By Category"
            isValidToCard={false}
            isValidToCategory
            isValidToArowws
          />
        </div>
        <div className="main-width pt-[60px] text-center">
          <Wrapper
            title="This Month"
            mainTitle="Best Selling Products"
            isValidToButton
            data={bestData}
            style="pt-11"
          />
        </div>
        <div className="pb-16">
          <Music />
        </div>
        <div className="main-width pt-[60px] text-center">
          <Wrapper
            title="Our Products"
            mainTitle="Explore Our Products"
            isValidToCard={false}
            isValidToArowws
            isValidToAllCard
            data={allData}
          />
        </div>
        <CustomButton title="View All Products"/>
      </div>
    </div>
  );
}
