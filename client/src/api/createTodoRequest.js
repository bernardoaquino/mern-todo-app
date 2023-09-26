import { API_URL } from "./config";

const createTodoRequest = async (todo, token) => {
  try {
    const response = await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: todo.text,
        completed: false,
      }),
    });

    if (!response.ok) {
      // Handle non-successful HTTP response status codes here
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle network errors or other exceptions here
    throw new Error(`An error occurred: ${error.message}`);
  }
};

export default createTodoRequest;
