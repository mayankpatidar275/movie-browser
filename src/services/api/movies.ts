import { QueryParams } from "../../types";
import { getURL } from "../../utils/helpers";
import { get } from "../apiMethods";

const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;
const READ_ACCESS_TOKEN = import.meta.env.API_READ_ACCESS_TOKEN;

// Fetch movies
export const fetchMovies = async (params: QueryParams) => {
  const url = getURL(`${BASE_URL}/movie/changes`, params);
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
