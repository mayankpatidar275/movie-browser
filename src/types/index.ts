export interface QueryParams {
  page: string;
  with_genres: string;
  "primary_release_date.gte": string;
  "primary_release_date.lte": string;
  "vote_average.gte": string;
  "vote_average.lte": string;
  include_adult: boolean;
}

export interface SearchQueryParams {
  query: string;
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

export interface MovieItem {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string; // ISO 8601 date format
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
