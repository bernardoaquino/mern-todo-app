import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSession } from 'providers/Auth';

type UseTodoResponse = {
  error: boolean;
  todos: any[];
  refetch: Function;
}

const useTodos = (): UseTodoResponse => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);
  const { session } = useSession();

  const getTodos = async (): Promise<any> => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/todos`, {
      method: 'GET',
      headers: session?.authHeaders,
    });

    const requestSuccessful = response.status === 200

    if (!requestSuccessful) {
      toast.error('Ocorreu um erro ao recuperar os seus Todos ');
      setError(true);
    } else {
      const responseBody = await response.json();
      
      setError(false);
      setTodos(responseBody)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  return {
    todos,
    error,
    refetch: () => getTodos()
  }
};

export default useTodos;