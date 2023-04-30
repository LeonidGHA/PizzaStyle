import { useSelector } from "react-redux";

import CustomBtn from "../../../shared/CustomBtn/CustomBtn";

import { ReactComponent as RemoveSVG } from "../../../shared/images/remove.svg";
import { ReactComponent as PlusSVG } from "../../../shared/images/plus.svg";
import { ReactComponent as MinusSVG } from "../../../shared/images/minus.svg";

import { separationNumberPrice } from "../../../Helpers/TextFormating/textFormating";

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
            <span>{separationNumberPrice(price)} UAH</span>
            <div className={css.cartItem_quantityWrapper}>
              <CustomBtn
                className={css.cartItem_quantityBtn}
                onClick={() => decrementPizza(id)}
              >
                <MinusSVG
                  className={css.cartItem_quantityBtn_SVG}
                  width="20"
                  height="20"
                />
              </CustomBtn>
              <span>{pizzaCount ? pizzaCount.quantity : "0"}</span>
              <CustomBtn
                className={css.cartItem_quantityBtn}
                onClick={() => incrementPizza(id)}
              >
                <PlusSVG
                  className={css.cartItem_quantityBtn_SVG}
                  width="20"
                  height="20"
                />
              </CustomBtn>
            </div>
          </div>
        </div>
        <CustomBtn
          className={css.cartItem_btnRemove}
          onClick={() => removePizza(id)}
        >
          <RemoveSVG
            className={css.cartItem_btnRemove_SVG}
            width="20"
            height="20"
          />
        </CustomBtn>
      </article>
    </li>
  );
};

export default CartItem;
