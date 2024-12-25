import { QueryParams } from "../../types";

export const initialFilterState: QueryParams = {
  page: "1",
  with_genres: "",
  "primary_release_date.gte": "",
  "primary_release_date.lte": "",
  "vote_average.gte": "",
  "vote_average.lte": "",
  include_adult: false,
};
