import { toast } from "react-toastify";
import { useSession } from "providers/Auth";

export type Todo = {
  text: string;
  completed?: boolean;
};

type DeleteTodoResponse = {
  error?: boolean;
  errorMessage?: string;
};

const useDeleteTodo = () => {
  const { session } = useSession();

  const deleteTodo = async (id: String): Promise<DeleteTodoResponse> => {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/todos/${id}`,
      {
        method: "DELETE",
        headers: session.authHeaders,
      }
    );

    const successfullyDeleted = response.status === 204;

    if (successfullyDeleted) {
      toast.success("Todo removido com sucesso!");
    } else {
      console.log(response.json());
      toast.error("Ocorreu um erro inesperado");
    }

    return {
      error: !successfullyDeleted,
    };
  };

  return {
    deleteTodo,
  };
};

export default useDeleteTodo;
