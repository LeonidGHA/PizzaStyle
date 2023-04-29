import { useSelector } from "react-redux";

import { getAllCartPizzas } from "../../../redux/cart/cart-selectors";

import css from "./PizzasItem.module.scss";

const PizzasItem = ({ el, cartHook }) => {
  const allPizzasCart = useSelector(getAllCartPizzas);
  const { id, title, description, price, image } = el;
  const { addPizza, incrementPizza, decrementPizza } = cartHook;
  const pizzaCount = allPizzasCart.find((el) => el.id === id);
  return (
    <li>
      <article className={css.pizzaItem_container}>
        <div className={css.pizzaItem_imageWrapper}>
          <img
            src={image}
            alt={`photo ${title}`}
            width="480"
            height="300"
            className={css.pizzaItem_image}
          />
        </div>
        <div className={css.pizzaItem_wrapper}>
          <h2 className={css.pizzaItem_title}>{title}</h2>
          <p className={css.pizzaItem_description}>{description}</p>
          <div className={css.pizzaItem_priceWrapper}>
            <span>{price} UAH</span>
            {pizzaCount ? (
              <div className={css.pizzaItem_quantityWrapper}>
                <button
                  type="button"
                  className={css.pizzaItem_quantityBtn}
                  onClick={() => decrementPizza(id)}
                >
                  -
                </button>
                <span>{pizzaCount ? pizzaCount.quantity : "0"}</span>
                <button
                  type="button"
                  className={css.pizzaItem_quantityBtn}
                  onClick={() => incrementPizza(id)}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                type="button"
                className={css.pizzaItem_btnAdd}
                onClick={() => addPizza(id)}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </article>
    </li>
  );
};

export default PizzasItem;
