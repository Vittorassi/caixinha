import { defineStore } from "pinia";
import { LS } from "src/services/LS.service";

export const useCounterStore = defineStore("products", {
  state: () => {
    const initialState = {};
    const products = LS.getItem("products");

    if (products && typeof products === "array" && products !== null) {
      initialState.products = products;
    }

    return initialState;
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
