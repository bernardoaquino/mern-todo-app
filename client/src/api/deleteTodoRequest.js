import { API_URL } from "./config";

const deleteTodoRequest = async (todo, token) => {
  try {
    const response = await fetch(`${API_URL}/todos/${todo._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Handle non-successful HTTP response status codes here
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // If the response is successful and there's no content to return
    return null;
  } catch (error) {
    // Handle network errors or other exceptions here
    throw new Error(`An error occurred: ${error.message}`);
  }
};

export default deleteTodoRequest;
