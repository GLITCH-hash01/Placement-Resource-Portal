import { createContext } from "react";

export const LoadingContext = createContext(false);

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
