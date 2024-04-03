import Link from "next/link";

import "./About.css";
import Image from "next/image";

const About = () => {
  return (
    <div>

      <div className="about-link">
        <ul className="about-breadcrumbs">
          <li className="about-breadcrumbs-link">
            <Link href="/">Home</Link>
          </li>
          <li>About</li>
        </ul>
      </div>

      <div className="about-info">
        <div className="about-text">
          <h2>Our Story</h2>
          <div className="about-paragraph">
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

        <div className="about-photo">
          <Image
            src="/about/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
            width={837}
            height={609}
            alt="portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
