import { createContext } from "react";
import { FilterContextValue } from "../../types";
export const FilterContext = createContext<FilterContextValue | undefined>(
  undefined
);
