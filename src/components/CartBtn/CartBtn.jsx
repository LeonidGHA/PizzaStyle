import { useSelector } from "react-redux";
import { ReactComponent as CartImg } from "../../shared/images/Cart.svg";

import CustomBtn from "../../shared/CustomBtn/CustomBtn";

import { getAllCartPizzas } from "../../redux/cart/cart-selectors";

import css from "./CartBtn.Module.scss";
const CartBtn = () => {
  const cartPizzas = useSelector(getAllCartPizzas);
  const quantity = cartPizzas.reduce((acc, el) => {
    return acc + el.quantity;
  }, 0);
  return (
    <CustomBtn className={css.cartBtn_btn}>
      <CartImg className={css.cartBtn_img} />
      {quantity > 0 && (
        <div className={css.cartBtn_itemWrapper}>
          <span className={css.cartBtn_item_text}>{quantity}</span>
        </div>
      )}
    </CustomBtn>
  );
};

export default CartBtn;
