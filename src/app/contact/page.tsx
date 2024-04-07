import styles from "./Contact.module.scss";
import { DataContact } from "./DataContact";

export default function ContactPage() {
  return (
    <div>
      <div>
        <ul className={styles["contact-breadcrumb"]}>
          <li className={styles["contact-breadcrumb-link"]}>Home</li>
          <span>/</span>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <DataContact />
      </div>
    </div>
  );
}
