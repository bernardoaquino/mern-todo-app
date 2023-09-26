import { API_URL } from "./config";

const loginRequest = async (password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
      }),
    });

    if (response.ok) {
      return response.json();
    } else {
      // Handle non-successful HTTP response status codes here
      const errorData = await response.json(); // Parse error response if available
      const errorMessage = errorData.message || "Login failed!";
      throw new Error(errorMessage);
    }
  } catch (error) {
    // Handle network errors or other exceptions here
    throw new Error("Login failed!");
  }
};

export default loginRequest;
