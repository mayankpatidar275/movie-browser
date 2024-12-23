import { RESET_FILTERS, SET_FILTER } from "../../constants/actions";
import { QueryParams, ReducerAction } from "../../types";
import { initialFilterState } from "./initialFilterState";

export const filterReducer = (state: QueryParams, action: ReducerAction) => {
  switch (action.actionType) {
    case SET_FILTER:
      return {
        ...state,
        [action.key]: action.value,
      };
    case RESET_FILTERS:
      return initialFilterState;
    default:
      throw new Error(`Unhandled action type: ${action.actionType}`);
  }
};
