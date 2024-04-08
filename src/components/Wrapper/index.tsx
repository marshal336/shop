import React from "react";
import WrapperHeader from "./Header";
import Timer from "./Timer";
import CardItem from "./Card";
import { ICardItemProps } from "~/types/cardt.t";
import axios from "axios";
import styles from './Wrapper.module.scss'

interface IWrapper {
  isValidToTimer?: boolean;
}
async function getData() {
  const { data } = await axios.get<ICardItemProps[]>(
    "https://216310856cf4b6ef.mokky.dev/sales"
  );
  return data;
}

const Wrapper = async ({ isValidToTimer = false }: IWrapper) => {
  const date = 4 * 24 * 60 * 60 * 1000;
  const data = await getData();

  return (
    <section className={styles.root}>
      <div className={styles.header}>
        <WrapperHeader mainTitle="Flash Sales" title="Today’s" />
        {!isValidToTimer && <Timer date={date} />}
      </div>
      <div className={styles.card}>
        {data?.map((data, i) => (
          <CardItem {...data} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Wrapper;
