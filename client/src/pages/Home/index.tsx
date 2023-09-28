import React from 'react';

/** Components */
import CreateTodo from 'containers/CreateTodo';
import TodosList from 'containers/TodosList';

const Home = () => {
    return (
        <>
            <CreateTodo />
            <TodosList />
        </>
    );
}

export default Home;
