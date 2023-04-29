import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "./components/Header/Header";
import UserRoutes from "./components/UserRoutes/UserRoutes";

import { getPizzas } from "./redux/pizza/pizzas-operations";

import "./App.scss";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);
  return (
    <>
      <Header />
      <UserRoutes />
    </>
  );
}

export default App;
