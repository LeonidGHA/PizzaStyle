import { useSelector } from "react-redux";

import { getAllCartPizzas } from "../../../redux/cart/cart-selectors";

import css from "./CartItem.module.scss";

const CartItem = ({ el, cartHook }) => {
  const allPizzasCart = useSelector(getAllCartPizzas);
  const { id, title, description, price, image } = el;
  const { incrementPizza, decrementPizza, removePizza } = cartHook;
  const pizzaCount = allPizzasCart.find((el) => el.id === id);
  return (
    <li>
      <article className={css.cartItem_container}>
        <div className={css.cartItem_imageWrapper}>
          <img
            src={image}
            alt={`photo ${title}`}
            width="480"
            height="300"
            className={css.cartItem_image}
          />
        </div>
        <div className={css.cartItem_wrapper}>
          <h2 className={css.cartItem_title}>{title}</h2>
          <p className={css.cartItem_description}>{description}</p>
          <div className={css.cartItem_priceWrapper}>
            <span>{price} UAH</span>
            <div className={css.cartItem_quantityWrapper}>
              <button
                type="button"
                className={css.cartItem_quantityBtn}
                onClick={() => decrementPizza(id)}
              >
                -
              </button>
              <span>{pizzaCount ? pizzaCount.quantity : "0"}</span>
              <button
                type="button"
                className={css.cartItem_quantityBtn}
                onClick={() => incrementPizza(id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          className={css.cartItem_btnRemove}
          onClick={() => removePizza(id)}
        >
          x
        </button>
      </article>
    </li>
  );
};

export default CartItem;
