import { QueryParams } from "../types";

export function getURL(base: string, params: QueryParams) {
  const queryParams = new URLSearchParams(params);
  return `${base}?${queryParams}`;
}
