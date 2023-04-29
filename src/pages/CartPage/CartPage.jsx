import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import HtmlMainMarkup from "../../Helpers/HtmlMarkup/HtmlMainMarkup";
import CartList from "../../components/Cart/PizzasList/CartList";

import useCart from "../../shared/hooks/useCart";

import { cartClearPizza } from "../../redux/cart/cart-slice";

import css from "./CartPage.module.scss";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartHook = useCart();

  return (
    <HtmlMainMarkup>
      <section className={css.section_wrapper}>
        <h1> CartPage</h1>
        {cartHook.cartListPizzas.length ? (
          <CartList cartHook={cartHook} />
        ) : (
          <p>
            Please, choose pizza <NavLink to="/">here</NavLink>
          </p>
        )}

        <span>Total: {cartHook.totalPrice()} UAH</span>
        <button
          type="button"
          // className={css.cartItem_btnRemove}
          onClick={() => dispatch(cartClearPizza())}
        >
          Make an order
        </button>
      </section>
    </HtmlMainMarkup>
  );
};

export default CartPage;
