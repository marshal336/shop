//components
import { Block } from "../Block";

//styles
import styles from "../About.module.scss";

//icons
import { arr } from "./arr";

export const Dashboard = () => {
  return (
    <div className={styles["dashboard"]}>
      <div className={styles["dashboard-box"]}>
        {arr.map((el, i) => (
          <Block
            key={i}
            styles={styles}
            title={el.title}
            description={el.description}
            icon={el.icon}
          />
        ))}
      </div>
    </div>
  );
};
