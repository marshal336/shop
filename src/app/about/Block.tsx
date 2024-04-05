import { IBlock } from "~/types/block.interface";
import styles from "./About.module.scss";

export const Block = ({ icon, title, description }: IBlock) => {
  return (
    <div className={styles["box-block"]}>
      <div className={styles["block"]}>
        <div className={styles["circle"]}>
          <div className={styles["circle-second"]}>
            <div>{icon}</div>
          </div>
        </div>
      </div>

      <div className={styles["box-info"]}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
