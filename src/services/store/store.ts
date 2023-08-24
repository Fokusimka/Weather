import { createContext, useContext } from "react";
import weatherStore from "./WeatherStore";

const store = {
    weatherStore: weatherStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;