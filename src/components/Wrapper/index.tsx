'use client'
import React from "react";
import WrapperHeader from "./Header";
import Timer from "./Timer";
import CardItem from "./Card";
import styles from "./Wrapper.module.scss";
import { CardDto } from "~/types/card";
import { instance } from "~/api/instance";
import Category from "./Category";
import { arr } from "./Category/arr";
import CustomButton from "../elements/button";

interface IWrapper {
  isValidToTimer?: boolean;
  isValidToCard?: boolean;
  isValidToCategory?: boolean;
  isValidToButton?: boolean;
  mainTitle: string;
  title: string;
  data?: CardDto[]
}


const Wrapper = ({
  isValidToTimer = false,
  isValidToCard = true,
  isValidToCategory = false,
  isValidToButton = false,
  mainTitle,
  title,
  data
}: IWrapper) => {
  const date = 4 * 24 * 60 * 60 * 1000;

  return (
    <section className={styles.root}>
      <div className={`${styles.header} ${isValidToButton && 'justify-between'}`}>
        <WrapperHeader mainTitle={mainTitle} title={title} />
        {isValidToTimer && <Timer date={date} />}
        {isValidToButton && <CustomButton title="View All" />}
      </div>
      {isValidToCard && (
        <div className={styles.card}>
          {data?.map((data, i) => (
            <CardItem {...data} key={i} />
          ))}
        </div>
      )}
      {isValidToCategory && <Category key={arr.length} />}
    </section>
  );
};

export default Wrapper;
