//components
import { Block } from "./Block";

//styles
import styles from "./About.module.scss";

//icons
import { CiShop } from "react-icons/ci";
import { FaRegMoneyBillAlt, FaShopify } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";

export const Dashboard = () => {
  return (
    <div className={styles["dashboard"]}>
      <div className={styles["dashboard-box"]}>
        <Block
          title="10.5k"
          description="Sallers active our site"
          icon={<CiShop />}
        />

        <Block
          title="33k"
          description="Mopnthly Produduct Sale"
          icon={<FaShopify />}
        />

        <Block
          title="45.5k"
          description="Customer active in our site"
          icon={<BsBagCheck />}
        />

        <Block
          title="25k"
          description="Anual gross sale in our site"
          icon={<FaRegMoneyBillAlt />}
        />
      </div>
    </div>
  );
};
