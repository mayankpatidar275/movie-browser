export async function handleResponse(response: Response, url: string) {
  if (!response.ok) {
    const errorMessage = `HTTP error in ${url}, status: ${response.status} - ${response.statusText}`;
    if (import.meta.env.VITE_REACT_APP_ENV === "dev") {
      console.log(errorMessage);
    }
    throw new Error(errorMessage);
  }

  try {
    const jsonResponse = await response.json();
    if (import.meta.env.VITE_REACT_APP_ENV === "dev") {
      console.log(`Response in handleResponse from ${url}: `, jsonResponse);
    }
    return jsonResponse;
  } catch (error) {
    if (import.meta.env.VITE_REACT_APP_ENV === "dev") {
      console.warn(`Failed to parse JSON from ${url}: `, error);
    }
    return { error: response.text(), message: "Failed to parse JSON" }; // Fallback to plain text
  }
}
