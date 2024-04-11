
import styles from "./ProductDetail.module.scss";

import { getData } from "~/utils/api-link";

//icons
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { BsStar } from "react-icons/bs";
import { CiHeart } from 'react-icons/ci';
import { TbTruckDelivery } from 'react-icons/tb';

export default async function ProductDetail({
  params,
}: {
  params: { id: number };
}) {
  const data = await getData.getDataById(params.id);


  return (
    <div className={styles['product']}>
      <div className={styles["product-photo"]}>
        <img src={data.logo} width={500} height={600} />
      </div>

      <div className={styles["product-info"]}>
        <h1>{data.title}</h1>
        <div className={styles['product-rating']}>
          {[...new Array(5)].map((_, i) => {
            const filledStars = data.star;
            const hasHalfStar = data.star % 1 == 0;

            if (i < filledStars) {
              return <FaStar key={i} size={20} color="#ffd700" />;
            } else if (i === filledStars && hasHalfStar) {
              return (
                <FaStarHalfAlt
                  key={i}
                  size={20}
                  color="#ffd700"
                  enableBackground="grey"
                />
              );
            } else {
              return <BsStar key={i} size={20} color="#ffd700" />;
            }
          })}
          <span>{data.comments}</span>
        </div>
        <div className={styles['product-price']}>
        <h3>{data.prices[0]}</h3>
        <h3 className={styles['product-crossedprice']}>{data?.prices[1]}</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ut
          quisquam obcaecati incidunt ipsum exercitationem debitis reiciendis
          quae sint error nemo doloremque adipisci corporis, ad consectetur quia
          ipsa fugit totam.
        </p>
        <span className={styles['product-line']}></span>
        <div className={styles['product-order']}>
        <div className={styles['product-counter']}>
            <button>-</button>
            <input type="number" />
            <button  className={styles['product-button']}>+</button>
        </div>
        <button>Buy Now</button>
        <CiHeart />
        </div>

        <div className={styles['product-condition']}>
            <div>
            <div className={styles['product-condition-img']}>
            <TbTruckDelivery />
            </div>
            <h2>Free Delivery</h2>
            <p>Enter your postal code for Delivery Availability</p>
            </div>

            <div>
            <div className={styles['product-condition-img']}>
            <GiReturnArrow />
            </div>
            <h2>Return Delivery</h2>
            <p>Free 30 Days Delivery Returns. Details</p>
            </div>
            
        </div>
      </div>
    </div>
  );
}
