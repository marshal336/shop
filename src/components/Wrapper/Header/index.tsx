import React from "react";
import styles from "./Header.module.scss";

interface IHeader {
  title: string;
  mainTitle: string;
}

const WrapperHeader = ({ title, mainTitle }: IHeader) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.separator} />
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.mainTitle}>{mainTitle}</div>
    </div>
  );
};

export default WrapperHeader;
