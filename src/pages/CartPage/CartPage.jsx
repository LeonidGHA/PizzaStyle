import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import HtmlMainMarkup from "../../Helpers/HtmlMarkup/HtmlMainMarkup";
import CartList from "../../components/Cart/CartList/CartList";
import CustomBtn from "../../shared/CustomBtn/CustomBtn";

import useCart from "../../shared/hooks/useCart";
import { separationNumberPrice } from "../../Helpers/TextFormating/textFormating";

import { cartClearPizza } from "../../redux/cart/cart-slice";

import css from "./CartPage.module.scss";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartHook = useCart();

  const totalPrice = cartHook.totalPrice();

  return (
    <HtmlMainMarkup>
      <section className={css.cartPage_section_wrapper}>
        <h1 className="visually-hidden"> CartPage</h1>
        {cartHook.cartListPizzas.length ? (
          <>
            <CartList cartHook={cartHook} />
            <span className={css.cartPage_total}>
              Total: {separationNumberPrice(totalPrice)} UAH
            </span>
            <CustomBtn
              className={css.cartPage_clean_btn}
              onClick={() => dispatch(cartClearPizza())}
            >
              Make an order
            </CustomBtn>
          </>
        ) : (
          <div className={css.cartPage_notification_wrapper}>
            <p className={css.cartPage_notification_text}>
              Please, choose pizza{" "}
              <NavLink className={css.cartPage_notification_link} to="/">
                here
              </NavLink>
            </p>
          </div>
        )}
      </section>
    </HtmlMainMarkup>
  );
};

export default CartPage;
