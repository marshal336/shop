"use client";
//Core
import React from "react";

//styles
import styles from "./Timer.module.scss";

//hooks
import { useGetTims } from "../../../hooks/useGetTime";

const Timer = ({ date }: { date: number }) => {
  const [time, setTime] = React.useState(date);

  React.useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const { days, hours, minuts, seconds } = useGetTims(time);
  if (days + hours + minuts + seconds <= 0) {
    return;
  }
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <span className={styles.span}>Days</span>
        <div className={styles.times}>0{days}</div>
      </div>
      <div className={styles.dots}>:</div>
      <div className={styles.container}>
        <span className={styles.span}>Hours</span>
        <div className={styles.times}>{hours}</div>
      </div>
      <div className={styles.dots}>:</div>
      <div className={styles.container}>
        <span className={styles.span}>Minuts</span>
        <div className={styles.times}>{minuts}</div>
      </div>
      <div className={styles.dots}>:</div>
      <div className={styles.container}>
        <span className={styles.span}>Seconds</span>
        <div className={styles.times}>{seconds}</div>
      </div>
    </div>
  );
};

export default Timer;
