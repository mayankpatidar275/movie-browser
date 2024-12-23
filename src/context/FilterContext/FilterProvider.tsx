import { useReducer } from "react";
import { filterReducer } from "./filterReducer";
import { initialFilterState } from "./initialFilterState";
import { FilterContextValue } from "../../types";
import { FilterContext } from "./FilterContext";

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(filterReducer, initialFilterState);

  const contextValue: FilterContextValue = { state, dispatch };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
