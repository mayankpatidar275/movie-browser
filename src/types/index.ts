export interface QueryParams {
  page: string;
  with_genres: string;
  primary_release_date_gte: string;
  primary_release_date_lte: string;
  vote_average_gte: string;
  vote_average_lte: string;
  include_adult: boolean;
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
