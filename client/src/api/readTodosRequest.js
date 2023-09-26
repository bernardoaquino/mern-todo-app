import { API_URL } from "./config";

const readTodosRequest = async (token) => {
  try {
    const response = await fetch(`${API_URL}/todos`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return response.json();
    } else {
      // Handle non-successful HTTP response status codes here
      const errorData = await response.json(); // Parse error response if available
      const errorMessage = errorData.message || "Failed to fetch todos!";
      throw new Error(errorMessage);
    }
  } catch (error) {
    // Handle network errors or other exceptions here
    throw new Error(`An error occurred: ${error.message}`);
  }
};

export default readTodosRequest;
