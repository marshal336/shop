import { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';

//component
import { Dashboard } from './Dashboard/Dashboard';
import SWPersonal from './SWPersonal';

//styles
import styles from './About.module.scss'

export const metadata: Metadata = {
  title: "About us",
};

export default function AboutPage() {
  return (
    <>
    <div>
    <div>
      <ul className={styles['about-breadcrumbs']}>
        <li className={styles['about-breadcrumbs-link']}>
          <Link href="/">Home</Link>
        </li>
        <span>/</span>
        <li>About</li>
      </ul>
    </div>

    <div className={styles['about-info']}>
      <div className={styles["about-text"]}>
        <h2>Our Story</h2>
        <div className={styles["about-paragraph"]}>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by
            wide range of tailored marketing, data and service solutions,
            Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
            customers across the region.{" "}
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
      </div>

      <div className={styles["about-photo"]}>
        <Image
          src="/about/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
          width={637}
          height={609}
          alt="portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone"
        />
      </div>
    </div>
    </div>
    <Dashboard/>
    <SWPersonal/>
    </>
  );
}
