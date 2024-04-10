import React from "react";
import WrapperHeader from "./Header";
import Timer from "./Timer";
import CardItem from "./Card";
import styles from "./Wrapper.module.scss";
import { CardDto } from "~/types/card";
import { instance } from "~/api/instance";
import Category from "./Category";
import { arr } from "./Category/arr";

interface IWrapper {
  isValidToTimer?: boolean;
  isValidToCard?: boolean;
  isValidToCategory?: boolean;
  mainTitle: string;
  title: string;
}
const getData = async () => {
  try {
    const { data } = await instance.get<CardDto[]>("/card");
    return data;
  } catch (error) {

  }
};

const Wrapper = async ({
  isValidToTimer = false,
  isValidToCard = true,
  isValidToCategory = false,
  mainTitle,
  title,
}: IWrapper) => {
  const date = 4 * 24 * 60 * 60 * 1000;
  const data = await getData();

  return (
    <section className={styles.root}>
      <div className={styles.header}>
        <WrapperHeader mainTitle={mainTitle} title={title} />
        {isValidToTimer && <Timer date={date} />}
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
