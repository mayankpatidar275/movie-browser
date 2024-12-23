export interface QueryParams {
  [key: string]: string;
}

export interface ReducerAction {
  actionType: string;
  key: string;
  value: string;
}

export interface FilterContextValue {
  state: QueryParams;
  dispatch: React.Dispatch<ReducerAction>;
}
