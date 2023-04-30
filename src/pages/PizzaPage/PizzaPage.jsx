import { useSelector } from "react-redux";

import HtmlMainMarkup from "../../Helpers/HtmlMarkup/HtmlMainMarkup";
import PizzasList from "../../components/Pizzas/PizzasList/PizzasList";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

import { loadingPizzas, errorPizzas } from "../../redux/pizza/pizzas-selectors";

import useCart from "../../shared/hooks/useCart";

import css from "./PizzaPage.module.scss";

const PizzaPage = () => {
  const isLoading = useSelector(loadingPizzas);
  const ErrorMessage = useSelector(errorPizzas);
  const cartHook = useCart();

  return (
    <HtmlMainMarkup>
      <section className={css.section_wrapper}>
        <h1 className="visually-hidden">PizzaPage</h1>
        {isLoading ? (
          <Loading />
        ) : ErrorMessage ? (
          <Error />
        ) : (
          <PizzasList cartHook={cartHook} />
        )}
      </section>
    </HtmlMainMarkup>
  );
};

export default PizzaPage;
