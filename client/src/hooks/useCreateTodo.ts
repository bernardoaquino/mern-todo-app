import { toast } from 'react-toastify';
import { useSession } from 'providers/Auth';

export type Todo = {
  text: string;
  completed?: boolean;
}

type CreateTodoResponse = {
  error?: boolean;
  errorMessage?: string;
  todo?: Todo;
}

const useCreateTodo = () => {
  const { session } = useSession();

  const createTodo = async (todo: Todo): Promise<CreateTodoResponse> => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/todos`, {
        method: 'POST',
        body: JSON.stringify({
            ...todo
        }), 
        headers: session.authHeaders
    });

    let responseBody;
    const successfullyCreated = response.status === 201;

    if (successfullyCreated) {
      responseBody = await response.json();
      toast.success('Todo criado com sucesso!');
    } else {
        toast.error('Ocorreu um erro inesperado');
    }

    return {
        todo: successfullyCreated && responseBody,
        error: !successfullyCreated,
    }
  }

  return { 
    createTodo
  };
};

export default useCreateTodo;