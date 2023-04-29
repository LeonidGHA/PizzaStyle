import { useSelector } from "react-redux";
import { nanoid } from "nanoid";

import PizzasItem from "../PizzasItem/PizzasItem";

import { getAllPizzas } from "../../../redux/pizza/pizzas-selectors";

import css from "./PizzasList.module.scss";

const PizzasList = ({ cartHook }) => {
  const allPizzas = useSelector(getAllPizzas);
  return (
    <ul className={css.pizzaList_list}>
      {allPizzas.map((el) => (
        <PizzasItem el={el} key={nanoid(5)} cartHook={cartHook} />
      ))}
    </ul>
  );
};

export default PizzasList;
