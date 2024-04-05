//components
import { Block } from "../Block";

//styles
import styles from "./FAQ.module.scss";

//icons;
import { arr } from "./arr";

export const FAQ = () => {
  return (
    <div className={styles.faq}>
      {arr.map((el, i) => (
        <Block
          key={i}
          icon={el.icon}
          title={el.title}
          description={el.description}
          styles={styles}
        />
      ))}
    </div>
  );
};
