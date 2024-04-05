//components
import { Block } from "../Block";

//styles
import styles from "./FAQ.module.scss";

//icons
import { TbBus } from "react-icons/tb";
import { CiHeadphones } from "react-icons/ci";
import { HiOutlineCheckBadge } from "react-icons/hi2";

export const FAQ = () => {
  return (
    <div className={styles.faq}>
      <Block
        icon={<TbBus />}
        title="FREE AND FAST DELIVERY"
        description="Free delivery for all orders over $140"
        styles={styles}
      />
      <Block
        icon={<CiHeadphones />}
        title="24/7 CUSTOMER SERVICE"
        description="Friendly 24/7 customer support"
        styles={styles}
      />
      <Block
        icon={<HiOutlineCheckBadge />}
        title="MONEY BACK GUARANTEE"
        description="We reurn money within 30 days"
        styles={styles}
      />
    </div>
  );
};
