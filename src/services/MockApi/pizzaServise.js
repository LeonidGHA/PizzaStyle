import { instancePizza } from "./instanceApi";

const servisePizza = {
  async getAllPizzas() {
    const { data } = await instancePizza.get();
    return data;
  },
};
export default servisePizza;
