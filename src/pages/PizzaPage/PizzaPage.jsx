import HtmlMainMarkup from "../../Helpers/HtmlMarkup/HtmlMainMarkup";
import { useDispatch } from "react-redux";
import { getPizzas } from "../../redux/pizza/pizzas-operations";
import { useEffect } from "react";
import PizzasList from "../../components/PizzasList/PizzasList";

const PizzaPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);

  return (
    <HtmlMainMarkup>
      <h1>PizzaPage</h1>
      <PizzasList />
    </HtmlMainMarkup>
  );
};

export default PizzaPage;
