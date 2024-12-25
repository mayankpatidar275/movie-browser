import { QueryParams, SearchQueryParams } from "../types";

export function getURL(base: string, params: QueryParams | SearchQueryParams) {
  const queryParams = new URLSearchParams(params);
  return `${base}?${queryParams}`;
}
