import React from 'react';

/** Components */
import LoginForm from 'containers/LoginForm';

/** Styles */
import * as El from './Login.styles';

const LoginPage = () => {
    return (
        <El.Wrapper>
            <El.Container>
                <El.Title>Login</El.Title>
                <El.SubText>Entre com as suas credenciais</El.SubText>
                <LoginForm redirectTo='/' />
            </El.Container>
        </El.Wrapper>
    );
}

export default LoginPage;