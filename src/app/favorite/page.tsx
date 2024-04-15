"use client";
//core
import { useDispatch, useSelector } from "react-redux";

//icons
import { IoTrashOutline } from "react-icons/io5";

//styles
import styles from "./Favorite.module.scss";

//selector
import { deleteFavorite, favoritesItems } from "~/redux/reducers/favorite";

function FavoritePage() {
  const items = useSelector(favoritesItems);
  const dispatch = useDispatch()

  const handleRemove = (id: number) => {
    dispatch(deleteFavorite(id))
  }
  return (
    <div>
      <div className={styles["favorite"]}>
        <h2>Wishlist ({items.length})</h2>
      </div>

      <div className={styles["favorites"]}>
        {items.map((item) => {
          return (
            <div key={item.id} className={styles["favorite-item"]}>
              <div className={styles["favorite-detail"]}>
                <div className={styles["favorite-menu"]}>
                  <span className={styles["favorite-flash"]}>
                    {item.flashSales}
                  </span>
                  <span className={styles["favorite-trash"]}>
                    <IoTrashOutline onClick={() => handleRemove(item.id)} />
                  </span>
                </div>
                <div className={styles["favorite-photo"]}>
                  <img src={item.logo} alt={item.title} />
                </div>
              </div>
              <div className={styles["favorite-link"]}>Add To Cart</div>
              <div className={styles["favorite-info"]}>
                <h3>{item.title}</h3>
                <p>
                  ${item.prices[0]}{" "}
                  <span>{item.prices ? `$${item.prices[1]}` : ""}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FavoritePage;
