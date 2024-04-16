"use client";
import React from "react";
import styles from "./Card.module.scss";
import Link from "next/link";
import { Card } from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsStar } from "react-icons/bs";
import { CardDto, IAddCardDto, IAddFavoriteDto } from "~/types/card";
import { add } from "~/redux/reducers/post";
import { useAppDispatch, useAppSelector } from "~/redux/store";
import { addFavorite } from '~/redux/reducers/favorite';
import { useRouter } from "next/navigation";

const CardItem = ({
  id,
  flashSales,
  title,
  prices,
  star,
  comments,
  logo,
}: CardDto) => {
  const { count } = useAppSelector((state) => state.post);
  const { favoriteItem, isActive } = useAppSelector((state) => state.favorite);
  const { isAuth } = useAppSelector((state) => state.user);
  const { push } = useRouter()
  const [hover, setHover] = React.useState(false);
  const [fav, setFav] = React.useState(false);
  const dispatch = useAppDispatch();
  const postInFavOrBasket = favoriteItem.find(el => el.id === id)

  const handleAddToCart = () => {
    const post: IAddCardDto = {
      id,
      logo,
      prices: prices[0],
      count,
    };
    if (isAuth) {
      dispatch(add(post));
    } else {
      push('/auth/sign-up')
    }
  };

  const handleAddFavorite = () => {
    const item: IAddFavoriteDto = {
      id,
      flashSales,
      title,
      prices,
      logo,
    };
    if (isAuth) {
      dispatch(addFavorite(item))
      setFav(!fav)
    } else {
      push('/auth/sign-up')
    }

  };

  return (
    <Card
      className={styles.Card}
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={styles.block}>
        {flashSales && (
          <div
            className={`${styles.flashSales} ${flashSales.includes("NEW") && "!bg-[#00ff66]"
              }`}>
            {flashSales}
          </div>
        )}
        <div className={styles.icons}>
          <CiHeart className={`${styles.icon}
           ${fav && 'bg-red-600 text-white'}
            ${postInFavOrBasket?.id === id && 'bg-red-600 text-white'}`}
            onClick={handleAddFavorite} />
          <MdOutlineRemoveRedEye className={`${styles.icon} bg-white `} />
        </div>
        <img src={logo!} alt="logo" width={172} height={152} />
        <span
          className={` ${hover ? "bottom-0" : "bottom-[-40px]"} ${styles.Link}`}
          onClick={handleAddToCart}>
          Add To Cart
        </span>
      </div>
      <div className={styles.info}>
        <Link href={`/product/${id}`} className={styles.title}>
          {title}
        </Link>
        <div className={styles.prices}>
          <p className={styles.priceMain}>${prices![0]}</p>
          <p className={styles.twoPrice}>${prices![1]}</p>
        </div>
        <div className={styles.footer}>
          <div className={styles.stars}>
            {[...new Array(5)].map((_, i) => {
              const filledStars = star;
              const hasHalfStar = star % 1 == 0;

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
          </div>
          <div className={styles.comments}>{comments.length}</div>
        </div>
      </div>
    </Card>
  );
};
// star-half-filled.svg
export default CardItem;
