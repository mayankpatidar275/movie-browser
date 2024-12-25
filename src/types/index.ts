export interface QueryParams {
  page: string;
  with_genres: string;
  "primary_release_date.gte": string;
  "primary_release_date.lte": string;
  "vote_average.gte": string;
  "vote_average.lte": string;
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
