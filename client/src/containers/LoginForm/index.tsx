import React from 'react';
import { useNavigate } from "react-router-dom";

/** Components */
import Form from 'molecules/Form';

/** Hooks */
import useSignIn, { UserCredentials } from 'hooks/useSignIn';

/** Types */
import { Field } from 'hooks/useForm';

type LoginFormProps = {
    redirectTo: string
}

const LoginForm = ({ redirectTo }: LoginFormProps) => {
    const navigate = useNavigate();
    const { signIn } = useSignIn();

    const loginFormFields: Field[] = [
        {
            type: 'password',
            name: 'password',
            label: 'Senha',
            required: true
        }
    ]

    const handleLogin = async (credentials: UserCredentials) => {
        const { error } = await signIn(credentials)

        if (!error) {
            console.log(redirectTo)
            navigate(redirectTo)
        }
    }

    return (
        <Form fields={loginFormFields} onSubmit={handleLogin} submitLabel={'Entrar'} />
    )
}

export default LoginForm