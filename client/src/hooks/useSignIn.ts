import { toast } from 'react-toastify';
import { useSession } from 'providers/Auth';

export type UserCredentials = {
  password: string;
}

type UserSignInResponse = {
  error?: boolean;
  errorMessage?: string;
  user?: Object;
}

const useSignIn = () => {
  const { updateSession } = useSession();

  const signIn = async (user: UserCredentials): Promise<UserSignInResponse> => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/login`, {
        method: 'POST',
        body: JSON.stringify({
            ...user
        }), 
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const responseBody = await response.json();
    const successfullyLoggedIn = response.status === 200
    const unauthorized = response.status === 401

    if (unauthorized) {
        toast.error('Login e/ou senha incorretos');
    } else if (successfullyLoggedIn) {
        updateSession({
            token: responseBody.token,
        });
        toast.success('Autenticado com sucesso!');
    } else {
        toast.error('Ocorreu um erro inesperado');
    }

    return {
        user: successfullyLoggedIn && responseBody,
        error: !successfullyLoggedIn,
        errorMessage: !successfullyLoggedIn && responseBody
    }
  }

  return { 
    signIn
  };
};

export default useSignIn;