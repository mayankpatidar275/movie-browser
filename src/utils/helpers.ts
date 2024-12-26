import { QueryParams, SearchQueryParams } from "../types";

export function getURL(
  base: string,
  params: QueryParams | SearchQueryParams
): string {
  // Ensure all values are strings
  const stringParams: Record<string, string> = Object.entries(params).reduce(
    (acc, [key, value]) => {
      acc[key] = String(value); // Convert all values to strings
      return acc;
    },
    {} as Record<string, string>
  );

  const queryParams = new URLSearchParams(stringParams);
  return `${base}?${queryParams}`;
}
