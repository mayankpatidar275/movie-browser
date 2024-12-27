import { QueryParams, SearchQueryParams } from "../../types";
import { getURL } from "../../utils/helpers";
import { get } from "../apiMethods";

const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;
const READ_ACCESS_TOKEN = import.meta.env.VITE_REACT_APP_API_READ_ACCESS_TOKEN;

// Fetch movies
export const fetchMovies = async (
  params: QueryParams,
  defaultParams: {
    queryKey: (string | QueryParams)[];
    signal: AbortSignal;
    pageParam: number;
    // direction: FetchDirection;
    // meta: QueryMeta | undefined;
  }
) => {
  const url = getURL(`${BASE_URL}/3/discover/movie`, {
    ...params,
    page: defaultParams.pageParam.toString(),
  });
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${READ_ACCESS_TOKEN}`,
    },
  };
  try {
    const response = await get(url, options);
    return response;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

// Fetch movies
export const fetchMovieById = async (id: string) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${READ_ACCESS_TOKEN}`,
    },
  };
  try {
    const response = await get(`${BASE_URL}/3/movie/${id}`, options);
    return response;
  } catch (error) {
    console.error("Error fetching movie by id:", error);
    throw error;
  }
};

// FetchFavourite movie
export const fetchSearchedMovies = async (params: SearchQueryParams) => {
  const url = getURL(`${BASE_URL}/3/search/movie`, params);
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${READ_ACCESS_TOKEN}`,
    },
  };
  try {
    const response = await get(url, options);
    return response;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

// Fetch movie genres
export const fetchGenres = async (params: QueryParams) => {
  const url = getURL(`${BASE_URL}/3/genre/movie/list`, params);
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${READ_ACCESS_TOKEN}`,
    },
  };
  try {
    const response = await get(url, options);
    return response;
  } catch (error) {
    console.error("Error fetching movie genres:", error);
    throw error;
  }
};
