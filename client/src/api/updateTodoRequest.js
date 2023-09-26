import { API_URL } from "./config";

const updateTodoRequest = async (updatedTodo, token) => {
  try {
    const response = await fetch(`${API_URL}/todos/${updatedTodo._id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: updatedTodo.text,
        completed: updatedTodo.completed,
      }),
    });

    if (response.ok) {
      return response.json();
    } else {
      // Handle non-successful HTTP response status codes here
      const errorData = await response.json(); // Parse error response if available
      const errorMessage = errorData.message || "Failed to update todo!";
      throw new Error(errorMessage);
    }
  } catch (error) {
    // Handle network errors or other exceptions here
    throw new Error(`An error occurred: ${error.message}`);
  }
};

export default updateTodoRequest;
