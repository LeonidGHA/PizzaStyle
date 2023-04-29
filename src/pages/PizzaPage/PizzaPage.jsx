import HtmlMainMarkup from "../../Helpers/HtmlMarkup/HtmlMainMarkup";
import PizzasList from "../../components/Pizzas/PizzasList/PizzasList";

import useCart from "../../shared/hooks/useCart";

import css from "./PizzaPage.module.scss";

const PizzaPage = () => {
  const cartHook = useCart();

  return (
    <HtmlMainMarkup>
      <section className={css.section_wrapper}>
        <h1>PizzaPage</h1>
        <PizzasList cartHook={cartHook} />
      </section>
    </HtmlMainMarkup>
  );
};

export default PizzaPage;
