import { handleResponse } from "./response";

// Todo: function to get header(authorization/token) and put in the request

export async function get(url: string, options: RequestInit = {}) {
  const response = await fetch(url, {
    method: "GET",
    ...options,
  });
  return handleResponse(response, url);
}

export async function post(
  url: string,
  body: BodyInit,
  options: RequestInit = {}
) {
  const response = await fetch(url, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    ...options,
  });
  return handleResponse(response, url);
}

export async function patch(
  url: string,
  body: BodyInit,
  options: RequestInit = {}
) {
  const response = await fetch(url, {
    method: "PATCH",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    ...options,
  });
  return handleResponse(response, url);
}

export async function put(
  url: string,
  body: BodyInit,
  options: RequestInit = {}
) {
  const response = await fetch(url, {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    ...options,
  });
  return handleResponse(response, url);
}

export async function del(url: string, options: RequestInit = {}) {
  const response = await fetch(url, {
    method: "DELETE",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  return handleResponse(response, url);
}
