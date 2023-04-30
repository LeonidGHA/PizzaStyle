import { useSelector } from "react-redux";
import { errorPizzas } from "../../redux/pizza/pizzas-selectors";

import css from "./Error.module.scss";

const Error = () => {
  const message = useSelector(errorPizzas);
  return (
    <div className={css.error_wrapper}>
      <p>Something went wrong</p>
      <p>{message}</p>
      <p>Please try again later</p>
    </div>
  );
};

export default Error;
