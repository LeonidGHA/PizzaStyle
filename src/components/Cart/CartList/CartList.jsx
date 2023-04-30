import { useSelector } from "react-redux";
import { nanoid } from "nanoid";

import CartItem from "../CartItem/CartItem";

import { getAllPizzas } from "../../../redux/pizza/pizzas-selectors";
import { getAllCartPizzas } from "../../../redux/cart/cart-selectors";

import css from "./CartList.module.scss";

const CartList = ({ cartHook }) => {
  const allPizzas = useSelector(getAllPizzas);
  const cartPizzas = useSelector(getAllCartPizzas);
  return (
    <ul className={css.cartList_list}>
      {allPizzas.map((el) =>
        cartPizzas.find((elem) => elem.id === el.id) ? (
          <CartItem el={el} key={nanoid(5)} cartHook={cartHook} />
        ) : null
      )}
    </ul>
  );
};

export default CartList;
