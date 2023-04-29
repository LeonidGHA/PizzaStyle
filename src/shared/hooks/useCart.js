import { useSelector, useDispatch } from "react-redux";
import { getAllPizzas } from "../../redux/pizza/pizzas-selectors";
import { getAllCartPizzas } from "../../redux/cart/cart-selectors";
import {
  cartAddPizza,
  cartIncrementPizza,
  cartDecrementPizza,
  cartRemovePizza,
} from "../../redux/cart/cart-slice";

const useCart = () => {
  const dispatch = useDispatch();
  const listPizzas = useSelector(getAllPizzas);
  const cartListPizzas = useSelector(getAllCartPizzas);

  const totalPrice = () => {
    return listPizzas.reduce((acc, el) => {
      const findPizzas = cartListPizzas.find((elem) => elem.id === el.id);
      if (findPizzas) {
        return acc + el.price * findPizzas.quantity;
      } else {
        return acc;
      }
    }, 0);
  };

  const addPizza = (id) => {
    const chosenPizza = { id, quantity: 1 };
    dispatch(cartAddPizza(chosenPizza));
  };

  const incrementPizza = (id) => {
    const newPizzas = cartListPizzas.map((el) =>
      el.id === id ? { ...el, quantity: el.quantity + 1 } : el
    );
    dispatch(cartIncrementPizza(newPizzas));
  };

  const decrementPizza = (id) => {
    const findPizzas = cartListPizzas.find((elem) => elem.id === id);

    if (findPizzas.quantity > 1) {
      const newPizzas = cartListPizzas.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity - 1 } : el
      );
      dispatch(cartDecrementPizza(newPizzas));
      return;
    }

    const filterPizzas = cartListPizzas.filter((elem) => elem.id !== id);
    dispatch(cartRemovePizza(filterPizzas));
  };

  const removePizza = (id) => {
    const filterPizzas = cartListPizzas.filter((elem) => elem.id !== id);
    dispatch(cartRemovePizza(filterPizzas));
  };
  return { addPizza, incrementPizza, decrementPizza, removePizza, totalPrice };
};

export default useCart;
